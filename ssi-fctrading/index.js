/*
 * Created on Wed Nov 11 2020 by ducdv
 *
 * Copyright (c) 2020 SSI
 */

const signalr = require("./signalR"),
    xmlparser = require("xml-js"),
    node_rsa = require("node-rsa"),
    nw = require('os').networkInterfaces(),
    os = require('os');
function addSlash(str) {
    return str.substr(-1) !== "/" ? (str + "/") : str
}

var api = {
    GET_ACCESS_TOKEN: "api/v2/Trading/AccessToken",
    NEW_ORDER: "api/v2/Trading/NewOrder",
    MODIFY_ORDER: "api/v2/Trading/ModifyOrder",
    CANCEL_ORDER: "api/v2/Trading/CancelOrder",
    DER_NEW_ORDER: "api/v2/Trading/derNewOrder",
    DER_MODIFY_ORDER: "api/v2/Trading/derModifyOrder",
    DER_CANCEL_ORDER: "api/v2/Trading/derCancelOrder",
    GET_OTP: "/api/v2/Trading/GetOTP",
    GET_ORDER_HISTORY: "api/v2/Trading/orderHistory",
    GET_ORDER_BOOK: "api/v2/Trading/orderBook",
    GET_AUDIT_ORDER_BOOK: "api/v2/Trading/auditOrderBook",
    GET_DER_POSITION: "api/v2/Trading/derivPosition",
    GET_STOCK_POSITION: "api/v2/Trading/stockPosition",
    GET_MAX_BUY_QUANTITY: "api/v2/Trading/maxBuyQty",
    GET_MAX_SELL_QUANTITY: "api/v2/Trading/maxSellQty",
    GET_ACCOUNT_BALANCE: "api/v2/Trading/cashAcctBal",
    GET_DER_ACCOUNT_BALANCE: "api/v2/Trading/derivAcctBal",
    GET_PPMMRACCOUNT: "api/v2/Trading/ppmmraccount",
    SIGNALR: "v2.0/signalr"
}
var constants = {
    AUTHORIZATION_HEADER: "Authorization",
    AUTHORIZATION_SCHEME: "Bearer",
    SIGNATURE_HEADER: "X-Signature"
}
function resoleURL(baseURL, query) {
    return addSlash(baseURL) + query;
}

var client = {};
var events = {
    onClientPortfolioEvent: "clientPortfolioEvent",
    onOrderUpdate: "orderEvent",
    onOrderMatch: "orderMatchEvent",
    onOrderError: "orderError",
    onError: "onError"
}
exports.streamClient = client;
exports.api = api;
exports.constants = constants;
exports.events = events;
/**
 * Init client stream order
 * @param {{url: string, access_token: string, notify_id: number}} options
 */
exports.initStream = function (options) {
    var opDefault = {
        url: "",
        access_token: "",
        notify_id: -1
    };
    Object.assign(opDefault, options);
    var url = resoleURL(opDefault.url, api.SIGNALR);
    client = new signalr.client(
        //signalR service URL
        url,
        ["BroadcastHubV2"],
        10,
        true
    );

    client._eventsListener = [];
    client.headers['Authorization'] = "Bearer " + opDefault.access_token;
    client.headers['NotifyID'] = opDefault.notify_id;
    client.on("BroadcastHubV2", "Error", function (message) {
        if (client._eventsListener.hasOwnProperty(events.onError)) {
            client._eventsListener[events.onError](events.onError, message);
        }
    });
    client.on("BroadcastHubV2", "Broadcast", function (message) {
        var broadcastEvent = JSON.parse(message);
        if (client._eventsListener.hasOwnProperty(broadcastEvent.type)) {
            client._eventsListener[broadcastEvent.type](broadcastEvent.type, broadcastEvent);
        }
    });
}
/**
 * Start listen stream from server.
 */
exports.start = function () {
    client.start();
}
/**
 * Subcribe event from server
 * @param {string} event value of events
 * @param {(data: {})=>void} func delegate
 */
exports.bind = function (event, func) {
    //eventsListener.on(event, func);
    client._eventsListener[event] = func;
}
/**
 * Un-Subcribe event from server
 * @param {string} event value of events
 * @param {(data: {})=>void} func delegate
 */
exports.unbind = function (event, func) {
    //eventsListener.removeListener(event, func);
    delete client._eventsListener[event];
}
/**
 * Get deviceid for order
 * @returns {string} deviceID with format xx:xx:xx:xx:xx:xx
 */
exports.getDeviceId = function(){
    let rs = []
    for(el in nw){
        for(e in nw[el]){
            if(!nw[el][e].internal && nw[el][e].family === 'IPv4')
                rs.push( el +":"+ nw[el][e].mac)
        }
    }
    return rs.join("|")
}
/**
 * Get user-agent for order
 * @returns {string} user-agent as string
 */
exports.getUserAgent = function(){
    let node_v = process.version;
    let name = os.version();
    let a=os.release();
    return `NodeJS/${node_v} (${name} ${a}); ssi-fctrading/${require('./package.json').version}`
}
/**
 * Sign data with private key
 * @param {string} data Data need sign
 * @param {string} private_key Private Key to sign
 */
exports.sign = function (data, private_key) {
    var prKey = new node_rsa();
    var r = JSON.parse(xmlparser.xml2json(new Buffer.from(private_key, "base64").toString("utf8"), {
        compact: !0
    })).RSAKeyValue;
    prKey.importKey({
        n: Buffer.from(r.Modulus._text, "base64"),
        e: Buffer.from(r.Exponent._text, "base64"),
        d: Buffer.from(r.D._text, "base64"),
        p: Buffer.from(r.P._text, "base64"),
        q: Buffer.from(r.Q._text, "base64"),
        dmp1: Buffer.from(r.DP._text, "base64"),
        dmq1: Buffer.from(r.DQ._text, "base64"),
        coeff: Buffer.from(r.InverseQ._text, "base64")
    }, 'components');
    return prKey.sign(Buffer.from(data, "utf-8"), "hex", "buffer")
}