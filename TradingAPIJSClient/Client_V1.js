/*
 * Created on Wed Jun 19 2019 by ducdv
 *
 * Copyright (c) 2019 SSI
 */

const models = require('./JsCore/model_pb');
const sdk = require("./JsCore/index.ssi");
const signalr = require("signalr-client");
const { EventEmitter } = require('events');


function addSlash(str) {
    return str.substr(-1) !== "/" ? (str + "/") : str
}
var api = {
    LOGIN: "api/Trading/Login",
    NEW_ORDER: "api/Trading/NewOrder",
    MODIFY_ORDER: "api/Trading/ModifyOrder",
    CANCEL_ORDER: "api/Trading/CancelOrder",
    GET_STOCK_HOLDING: "api/Trading/stockHoldings",
    GET_CASH_HOLDING: "api/Trading/cashHoldings",
    GET_CLIENT_INFOMATION: "api/Trading/clientInfomations",
    GET_ORDER_HISTORY: "api/Trading/GetOrderHistory",
    GET_DER_POSITION: "api/Trading/GetDerivPosition",
    GET_STOCK_POSITION: "api/Trading/GetStockPosition",
    GET_MAX_BUY_QUANTITY: "api/Trading/GetMaxBuyQty",
    GET_MAX_SELL_QUANTITY: "api/Trading/GetMaxSellQty",
    GET_ACCOUNT_BALANCE: "api/Trading/GetCashAcctBal",
    GET_DER_ACCOUNT_BALANCE: "api/Trading/GetDerivAcctBal",
    SIGNALR: "signalr"
}

function resoleURL(baseURL, query) {
    return addSlash(baseURL) + query;
}

var client = {};
var marketType = {
    STOCK: 1,
    DERIVATIVE: 2
}
var events = {
    onNewOrder: "onNewOrder",
    onOrderCanceled: "onOrderCanceled",
    onOrderError: "onOrderError",
    onOrderExpired: "OnOrderExpired",
    onOrderPreSession: "onOrderPreSession",
    onOrderStopPreSession: "onOrderStopPreSession",
    onOrderStopReady: "onOrderStopReady",
    onOrderStopSent: "onOrderStopSent",
    onOrderFullyFilled: "onOrderFullyFilled",
    onOrderPartiallyFilled: "onOrderPartiallyFilled",
    onOrderPendingCancel: "onOrderPendingCancel",
    onOrderPendingModify: "onOrderPendingModify",
    onOrderQueued: "onOrderQueued",
    onOrderRejected: "onOrderRejected",
    onOrderFullyFilledPartiallyCancelled: "onOrderFullyFilledPartiallyCancelled",
    onOrderSending: "onOrderSending",
    onOrderPendingApproval: "onOrderPendingApproval",

    onClientPortfolioEvent: "onClientPortfolioEvent",
    onOrderUpdate: "onOrderUpdate",
    onError: "onError"
}
exports.streamClient = client;
exports.events = events;
/**
 * Init client stream order
 * @param {{url: string, consumer_id:string,consumer_secret:string}} options
 */
exports.initStream = function (options) {
    var opDefault = {
        url: "",
        consumer_id: "",
        consumer_secret: "",
        notify_id: -1
    };
    Object.assign(opDefault, options);
    var url = resoleURL(opDefault.url, api.SIGNALR);
    client = new signalr.client(
        //signalR service URL
        url,
        ["BroadcastHub"],
        10,
        true
    );

    client._eventsListener = [];
    client.headers['ConsumerId'] = opDefault.consumer_id;
    client.headers['ConsumerSecret'] = opDefault.consumer_secret;
    client.headers['NotifyID'] = opDefault.notify_id;
    client.on("BroadcastHub", "Error", function (message) {
        if (client._eventsListener.hasOwnProperty(events.onError)) {
            client._eventsListener[events.onError](events.onError, message);
        }
    });
    client.on("BroadcastHub", "Broadcast", function (message) {
        var eventBase = models.EventBase.deserializeBinary(Buffer.from(message, 'base64'));
        var notifyEvent = eventBase.getNotifyevent();
        var data = eventBase.toObject();
        if (notifyEvent.hasOrdererror()) {
            if (client._eventsListener.hasOwnProperty(events.onOrderError))
                client._eventsListener[events.onOrderError](events.onOrderError, eventBase.toObject());
        }
        else if (notifyEvent.hasClientportfolioevent()) {
            if (client._eventsListener.hasOwnProperty(events.onClientPortfolioEvent))
                client._eventsListener[events.onClientPortfolioEvent](events.onClientPortfolioEvent, data);
        }
        else if (notifyEvent.hasOrderevent()) {
            var orderEvent = notifyEvent.getOrderevent();
            var e = "onOrderUpdate";
            if (orderEvent.hasNeworder()) {
                e = events.onNewOrder;
            }
            else if (orderEvent.hasOrdercanceled()) {
                e = events.onOrderCanceled;
            }
            else if (orderEvent.hasOrderfullyfilled()) {
                e = events.onOrderFullyFilled;
            }
            else if (orderEvent.hasOrderpartiallyfilled()) {
                e = events.onOrderPartiallyFilled;
            }
            else if (orderEvent.hasOrderpendingcancel()) {
                e = events.onOrderCanceled;
            }
            else if (orderEvent.hasOrderpendingmodify()) {
                e = events.onOrderPendingModify;
            }
            else if (orderEvent.hasOrderqueued()) {
                e = events.onOrderQueued;
            }
            else if (orderEvent.hasOrderrejected()) {
                e = events.onOrderRejected;
            }
            else if (orderEvent.hasOrderfullyfilledpartiallycancelled()) {
                e = events.onOrderFullyFilledPartiallyCancelled;
            }
            else if (orderEvent.hasOrdersending()) {
                e = events.onOrderSending;
            }
            else if (orderEvent.hasOrderexpired()) {
                e = events.onOrderExpired;
            }
            else if (orderEvent.hasOrderpresession()) {
                e = events.onOrderPreSession;
            }
            else if (orderEvent.hasOrderstopsent()) {
                e = events.onOrderStopSent;
            }
            else if (orderEvent.hasOrderstopready()) {
                e = events.onOrderStopReady;
            }
            else if (orderEvent.hasOrderstoppresession()) {
                e = events.onOrderStopPreSession;
            }
            else if (orderEvent.hasOrderpendingapproval()) {
                e = events.onOrderPendingApproval;
            }
            if (client._eventsListener.hasOwnProperty(events.onOrderUpdate)) {
                client._eventsListener[events.onOrderUpdate](e, data);
            }
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
 * Place new order
 * @parma {string} type 
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options
 * @param {models.NewOrderRequest} req
 * @param {(response: models.NewOrderResponse, error: any)=>void} callback
 */
exports.newOrder = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.NEW_ORDER),
        req,
        models.Response_NewOrderResponse,
        models.NewOrderResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Modify order placed from TradingAPI
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.ModifyOrderRequest} req 
 * @param {(response: models.ModifyOrderResponse, error: any)=>void} callback 
 */
exports.modifyOrder = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.MODIFY_ORDER),
        req,
        models.Response_ModifyOrderResponse,
        models.ModifyOrderResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}
/**
 * Cancel order placed from TradingAPI
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.CancelOrderRequest} req 
 * @param {(response: models.CancelOrderResponse, error: any)=>void} callback 
 */
exports.cancelOrder = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.CANCEL_ORDER),
        req,
        models.Response_CancelOrderResponse,
        models.CancelOrderResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get account infomation
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.ClientPortfolio} req 
 * @param {(response: models.ClientPortfolioResponse, error: any)=>void} callback 
 */
exports.getClientInfomation = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_CLIENT_INFOMATION),
        req,
        models.Response_ClientPortfolioResponse,
        models.ClientPortfolioResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get order history
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.OrderHistoryRequest} req 
 * @param {(response: models.OrderHistoryResponse, error: any)=>void} callback 
 */
exports.getOrderHistory = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_ORDER_HISTORY),
        req,
        models.Response_OrderHistoryResponse,
        models.OrderHistoryResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}


/**
 * Get stock holding
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.StockHoldingRequest} req 
 * @param {(response: models.StockHoldingResponse, error: any)=>void} callback 
 */
exports.getStockHolding = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_STOCK_HOLDING),
        req,
        models.Response_StockHoldingResponse,
        models.StockHoldingResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get cash holding
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.CashHoldingRequest} req 
 * @param {(response: models.CashHoldingResponse, error: any)=>void} callback 
 */
exports.getCashHolding = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_CASH_HOLDING),
        req,
        models.Response_CashHoldingResponse,
        models.CashHoldingResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get der position
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.DerPositionRequest} req 
 * @param {(response: models.DerPositionResponse, error: any)=>void} callback 
 */
exports.getDerPosition = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_DER_POSITION),
        req,
        models.Response_DerPositionResponse,
        models.DerPositionResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get stock position
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.StockPositionRequest} req 
 * @param {(response: models.StockPositionResponse, error: any)=>void} callback 
 */
exports.getStockPosition = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_STOCK_POSITION),
        req,
        models.Response_StockPositionResponse,
        models.StockPositionResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get max buy quantity
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.MaxBuyQtyRequest} req 
 * @param {(response: models.MaxBuyQtyResponse, error: any)=>void} callback 
 */
exports.getMaxBuyQuantity = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_MAX_BUY_QUANTITY),
        req,
        models.Response_MaxBuyQtyResponse,
        models.MaxBuyQtyResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get max sell quantity
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.MaxSellQtyRequest} req 
 * @param {(response: models.MaxSellQtyResponse, error: any)=>void} callback 
 */
exports.getMaxSellQuantity = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_MAX_SELL_QUANTITY),
        req,
        models.Response_MaxSellQtyResponse,
        models.MaxSellQtyResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get account balance
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.AccountBalanceRequest} req 
 * @param {(response: models.AccountBalanceResponse, error: any)=>void} callback 
 */
exports.getAccountBalance = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_ACCOUNT_BALANCE),
        req,
        models.Response_AccountBalanceResponse,
        models.AccountBalanceResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

/**
 * Get der account balance
 * @param {{url:string,consumer_id:string,consumer_secret:string,public_key:string}} options 
 * @param {models.DerAccountBalanceRequest} req 
 * @param {(response: models.DerAccountBalanceResponse, error: any)=>void} callback 
 */
exports.getDerAccountBalance = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.GET_DER_ACCOUNT_BALANCE),
        req,
        models.Response_DerAccountBalanceResponse,
        models.DerAccountBalanceResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}
exports.login = function (options, req, callback) {
    sdk.makeRequest(
        resoleURL(options.url, api.LOGIN),
        req,
        models.Response_LoginResponse,
        models.LoginResponse,
        { ConsumerID: options.consumer_id, ConsumerSecret: options.consumer_secret, PublicKey: options.public_key },
        callback
    );
}

exports.models = models;