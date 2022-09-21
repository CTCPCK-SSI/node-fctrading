/*
 * Created on Wed Jun 19 2019 by ducdv
 *
 * Copyright (c) 2019 SSI
 */

const axios = require("axios"),
    randomstring = require("randomstring"),
    crypto = require("crypto"),
    xmlparser = require("xml-js"),
    node_rsa = require("node-rsa"),
    aesjs = require("aes-js"),
    model_pb = require("./model_pb");
var ssiCryption = function () {
    function n(n, t, i) {
        var u = crypto.pbkdf2Sync(t, i, 1e3, 48, "sha1"),
            e = u.slice(0, 32),
            o = u.slice(32, 48),
            r = crypto.createCipheriv("aes-256-cbc", e, o),
            f;
        return r.setAutoPadding(!1), f = aesjs.padding.pkcs7.pad(n), Buffer.concat([r.update(f), r.final()])
    }

    function t(n, t, i) {
        var u = crypto.pbkdf2Sync(t, i, 1e3, 48, "sha1"),
            f = u.slice(0, 32),
            e = u.slice(32, 48),
            r = crypto.createDecipheriv("aes-256-cbc", f, e);
        return r.setAutoPadding(!1), aesjs.padding.pkcs7.strip(Buffer.concat([r.update(n), r.final()]))
    }

    function i(t, i, r) {
        var u = crypto.createHash("sha256"),
            f;
        return u.update(i), f = u.digest(), n(t, f, r)
    }

    function r(n, i, r) {
        var u = crypto.createHash("sha256"),
            f;
        return u.update(i), f = u.digest(), t(n, f, r)
    }
    return {
        AddSerialization2Obj: function (n, t, r) {
            return i(n.serializeBinary(), t, r)
        },
        Encryption: function (n, t) {
            var i = new node_rsa,
                r = JSON.parse(xmlparser.xml2json(new Buffer.from(t, "base64").toString("utf8"), {
                    compact: !0
                })).RSAKeyValue;
            return i.importKey({
                n: Buffer.from(r.Modulus._text, "base64"),
                e: Buffer.from(r.Exponent._text, "base64")
            }, "components-public"), i.encrypt(n, "base64")
        },
        DeserializeObjFromByteData: function (n, t, i) {
            return r(n, t, i)
        }
    }
}(),
    makeRequestObject = function (n, t, i) {
        var r = new model_pb.Request;
        return r.getDicMap().set("ConsumerId", t.ConsumerID), r.getDicMap().set("ConsumerSecret", t.ConsumerSecret), r.setData(ssiCryption.AddSerialization2Obj(n, t.ConsumerSecret, i)), r.setKey(ssiCryption.Encryption(Buffer.from(i.toString()), t.PublicKey)), r
    };
module.exports = {
    makeRequest: function (n, t, i, r, u, f) {
        var e = Buffer.from(randomstring.generate(8));
        axios.post(n, makeRequestObject(t, u, e).serializeBinary(), {
            responseType: "arraybuffer",
            headers: {
                "Content-Type": "application/x-protobuf"
            },
            Accept: "application/x-protobuf",
            proxy: false
        }).then(function (n) {
            var t = i.deserializeBinary(n.data);
            var res = t.toObject();
            if (res.status != 200) {
                res.data = null;
                f(res, null);
                return;
            }
            else {
                var o = r.deserializeBinary(ssiCryption.DeserializeObjFromByteData(t.getData(), u.ConsumerSecret, e));
                res.data = o.toObject();
                f(res, null);
                return;
            }
        }).catch(n => {
            f(null, n)
        })
    }
}