/*
 * Created on Wed Nov 11 2020 by ducdv
 *
 * Copyright (c) 2020 SSI
 */

const {
    get
} = require("http");

const signalr = require("./signalR"),
    xmlparser = require("xml-js"),
    node_rsa = require("node-rsa"),
    nw = require('os').networkInterfaces(),
    os = require('os'),
    axios = require('axios'),
    models = require("./models");

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
    GET_RATELIMIT: "api/v2/Trading/rateLimit",
    SIGNALR: "v2.0/signalr",
    //CASH
    FC_CASH_CIA_AMOUNT: "api/v2/cash/cashInAdvanceAmount",
    FC_CASH_UNSETTLE_SOLD_TRANSACTION: "api/v2/cash/unsettleSoldTransaction",
    FC_CASH_TRANSFER_HISTORY: "api/v2/cash/transferHistories",
    FC_CASH_CIA_HISTORY: "api/v2/cash/cashInAdvanceHistories",
    FC_CASH_CIA_EST_FEE: "api/v2/cash/estCashInAdvanceFee",
    FC_CASH_VSD_DW: "api/v2/cash/vsdCashDW",
    FC_CASH_TRANSFER: "api/v2/cash/transferInternal",
    FC_CASH_CIA: "api/v2/cash/createCashInAdvance",

    //ONLINE RIGHT SUBSCRIPTION:,
    FC_ORS_DIVIDEND: "api/v2/ors/dividend",
    FC_ORS_EXCERCISABLE_QTY: "api/v2/ors/exercisableQuantity",
    FC_ORS_HISTORY: "api/v2/ors/histories",
    FC_ORS: "api/v2/ors/create",

    //STOCK
    FC_STOCK_TRANSFERABLE: "api/v2/stock/transferable",
    FC_STOCK_HISTORY: "api/v2/stock/transferHistories",
    FC_STOCK_TRANSFER: "api/v2/stock/transfer",

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
exports.models = models
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
exports.getDeviceId = function () {
    let rs = []
    for (el in nw) {
        for (e in nw[el]) {
            if (!nw[el][e].internal && nw[el][e].family === 'IPv4')
                rs.push(el + ":" + nw[el][e].mac)
        }
    }
    return rs.join("|")
}
/**
 * Get user-agent for order
 * @returns {string} user-agent as string
 */
exports.getUserAgent = function () {
    let node_v = process.version;
    let name = os.version();
    let a = os.release();
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

class FCTradingClient {
    constructor(config) {
        this._config = config
        this._rq = axios.create({
            baseURL: this._config.URL,
            timeout: 10000
        })
        this._accessToken = ""
    }
    /**
     * Get AccessToken
     * @param {models.AccessToken} obj
     * @param {(access_token: string)=>void} onSuccess
     * @param {(onError: string)=>void} onError 
     */
    getAccessToken(obj, onSuccess, onError) {
        this._rq({
            url: api.GET_ACCESS_TOKEN,
            method: 'post',
            data: obj
        }).then(response => {
            if (response.data.status === 200) {
                this._accessToken = response.data.data.accessToken;
                console.log(response.data);
                onSuccess(this._accessToken)
            } else onError(JSON.stringify(response.data))
        }, reason => onError(reason))
    }

    post(url, obj, onSuccess, onError) {
        this._rq({
            url: url,
            method: 'post',
            headers: {
                [constants.AUTHORIZATION_HEADER]: constants.AUTHORIZATION_SCHEME + " " + this._accessToken,
                [constants.SIGNATURE_HEADER]: exports.sign(JSON.stringify(obj), this._config.PrivateKey)
            },
            data: obj
        }).then(response => {
            onSuccess(response.data)

        }, reason => onError(reason))
    }
    get(url, obj, onSuccess, onError) {
        this._rq({
            url: url,
            method: 'get',
            headers: {
                [constants.AUTHORIZATION_HEADER]: constants.AUTHORIZATION_SCHEME + " " + this._accessToken
            },
            params: obj
        }).then(response => {
            onSuccess(response.data)
        }, reason => onError(reason))
    }
}
exports.FCTradingClient = FCTradingClient