/*
 * Created on Wed Nov 11 2020 by ducdv
 *
 * Copyright (c) 2020 SSI
 */

/** @START_CONFIG */
const express = require('express')
const client = require('ssi-fctrading');
const axios = require('axios')

const app = express()
const host = 'localhost'
const port = 3011;
const rn = require('random-number')

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('');
};

function parseBool(str) {
    return str === 'true' || str === true;
}
var date = new Date();
//This is config for consumer have permission on all customer
var config = {
    ConsumerID: "",
    ConsumerSecret: "",
    PrivateKey: "",

    URL: "https://fc-tradeapi.ssi.com.vn/",
    stream_url: "wss://fc-tradehub.ssi.com.vn/",
};
var configServer = config;
var fcclient = new client.FCTradingClient(config)
const rq = axios.create({
    baseURL: config.URL,
    timeout: 5000
})
/** @END_CONFIG */
var mockStockData = {
    account: "0901351",
    buysell: "B",
    market: "VN", // Only support "VN" and "VNFE"
    ordertype: "LO",
    price: 21000,
    quantity: 300,
    instrumentid: "SSI",
    validitydate: date.yyyymmdd(),
    channel: "IW",
    extOrderID: "", // this property is unique in day.
    session: "",
    code: "123456789",
    twoFaType: 0,
    startDate: "24/05/2019",
    endDate: "30/05/2019",
    settleDate: "02/02/2022",
    deviceId: client.getDeviceId(),
    userAgent: client.getUserAgent()
};
var mockDeterativeData = {
    account: "0901358",
    buysell: "B",
    currency: "KVND",
    market: "VNFE",
    ordertype: "LO", // Only support "VN" and "VNFE"
    price: 900,
    quantity: 10,
    instrumentid: "VN30F2002",
    validitydate: date.yyyymmdd(),
    channel: "WT",
    extOrderID: "",
    stoporder: false,
    stopprice: 800,
    stoptype: "D",
    stopstep: 0.5,
    lossstep: 0,
    profitstep: 0,
    session: "",
    code: "",
    querySummary: true,
    startDate: "29/08/2019",
    endDate: "29/08/2019",
    deviceId: client.getDeviceId(),
    userAgent: client.getUserAgent()
}
var access_token = "";
fcclient.getAccessToken(new client.models.AccessToken(config.ConsumerID, config.ConsumerSecret, mockStockData.twoFaType, mockStockData.code, false)
, response => {
    access_token = response;
    client.initStream({
        url: config.stream_url,
        access_token: access_token,
        notify_id: 0
    });
    client.bind(client.events.onError, function (e, data) {
        //Process data ...
        console.log(e + ": ");
        console.log(data);
    })
    client.bind(client.events.onOrderUpdate, function (e, data) {
        //Process data ...
        console.log(e + ": ");
        console.log(JSON.stringify(data));
    })
    client.bind(client.events.onOrderError, function (e, data) {
        //Process data ...
        console.log(e + ": ");
        console.log(JSON.stringify(data));
    })
    client.bind(client.events.onClientPortfolioEvent, function (e, data) {
        //Process data ...
        console.log(e + ": ");
        console.log(JSON.stringify(data));
    })
    client.bind(client.events.onOrderMatch, function (e, data) {
        //Process data ...
        console.log(e + ": ");
        console.log(JSON.stringify(data));
    })
    client.start();

}, reason => {
    console.log(reason);
})

var getRandom = rn.generator({
    min: 0,
    max: 99999999,
    integer: true
});
app.get("/getOtp", (req, res) => {
    // #swagger.tags = ['AUTH']
    var request = new client.models.GetOTP(config.ConsumerID, config.ConsumerSecret)
    fcclient.get(client.api.GET_OTP, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/verifyCode", (req, res) => {
    // #swagger.tags = ['AUTH']
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.AccessToken(config.ConsumerID, config.ConsumerSecret, parseInt(req.query.twoFaType ?? mockStockData.twoFaType), req.query.code, true)
   
    fcclient.getAccessToken( request, data => {
        access_token = data;
        console.log("Access Token for order: " + access_token)
        res.send(data)
    }, err=> res.send(err))
});
app.get("/newOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var r = new client.models.NewOrder();

    r.account = req.query.account ?? ro.account
    r.requestID = req.query.requestID ?? getRandom() + ""
    r.instrumentID = req.query.instrumentID ?? ro.instrumentid
    r.market = req.query.market ?? ro.market
    r.buySell = req.query.buySell ?? ro.buysell
    r.orderType = req.query.orderType ?? ro.orderType
    r.price = req.query.price ?? ro.price
    r.quantity = req.query.quantity ?? ro.quantity
    r.stopOrder = parseBool(req.query.stopOrder ?? "false")
    r.stopPrice = req.query.stopPrice ?? 0
    r.stopType = req.query.stopType ?? ro.stoptype
    r.stopStep = parseFloat(req.query.stopStep ?? 0)
    r.lossStep = parseFloat(req.query.lossStep ?? 0)
    r.profitStep = parseFloat(req.query.profitStep ?? 0)
    r.channelID = req.query.channelID ?? ro.channel
    r.code = req.query.code ?? ro.code
    r.deviceId = req.query.deviceId ?? ro.deviceId
    r.userAgent = req.query.userAgent ?? ro.userAgent
    fcclient.post(client.api.NEW_ORDER, r, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/derNewOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var r = new client.models.NewOrder();

    r.account = req.query.account ?? ro.account
    r.requestID = req.query.requestID ?? getRandom() + ""
    r.instrumentID = req.query.instrumentID ?? ro.instrumentid
    r.market = req.query.market ?? ro.market
    r.buySell = req.query.buySell ?? ro.buysell
    r.orderType = req.query.orderType ?? ro.ordertype
    r.price = req.query.price ?? ro.price
    r.quantity = req.query.quantity ?? ro.quantity
    r.stopOrder = parseBool(req.query.stopOrder ?? "false")
    r.stopPrice = req.query.stopPrice ?? 0
    r.stopType = req.query.stopType ?? ro.stoptype
    r.stopStep = parseFloat(req.query.stopStep ?? 0)
    r.lossStep = parseFloat(req.query.lossStep ?? 0)
    r.profitStep = parseFloat(req.query.profitStep ?? 0)
    r.channelID = req.query.channelID ?? ro.channel
    r.code = req.query.code ?? ro.code
    r.deviceId = req.query.deviceId ?? ro.deviceId
    r.userAgent = req.query.userAgent ?? ro.userAgent

    fcclient.post(client.api.DER_NEW_ORDER, r, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/modifyOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.ModifyOrder()
    request.account = req.query.account ?? ro.account
    request.requestID = requestID ?? getRandom() + ""
    request.orderID = req.query.orderid ?? ro.orderid
    request.marketID =  req.query.market ?? ro.market
    request.instrumentID = req.query.instrumentid ?? ro.instrumentid
    request.price = parseFloat(req.query.price ?? ro.price)
    request.quantity = parseInt(req.query.quantity ?? ro.quantity)
    request.buySell = req.query.buysell ?? ro.buysell
    request.orderType = req.query.orderType ?? ro.ordertype
    request.code = req.query.code ?? ro.code
    request.deviceId = req.query.deviceId ?? ro.deviceId
    request.userAgent = req.query.userAgent ?? ro.userAgent
    fcclient.post(client.api.MODIFY_ORDER, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
   
});
app.get("/derModifyOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.ModifyOrder()
    request.account = req.query.account ?? ro.account
    request.requestID = requestID ?? getRandom() + ""
    request.orderID = req.query.orderid ?? ro.orderid
    request.marketID =  req.query.market ?? ro.market
    request.instrumentID = req.query.instrumentid ?? ro.instrumentid
    request.price = parseFloat(req.query.price ?? ro.price)
    request.quantity = parseInt(req.query.quantity ?? ro.quantity)
    request.buySell = req.query.buysell ?? ro.buysell
    request.orderType = req.query.orderType ?? ro.ordertype
    request.code = req.query.code ?? ro.code
    request.deviceId = req.query.deviceId ?? ro.deviceId
    request.userAgent = req.query.userAgent ?? ro.userAgent
    fcclient.post(client.api.DER_MODIFY_ORDER, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/cancelOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CancelOrder()

    request.orderID = req.query.orderid ?? ro.orderid,
    request.account = req.query.account ??  ro.account,
    request.instrumentID = req.query.instrumentid ??  ro.instrumentid,
    request.marketID = req.query.market ??  ro.market,
    request.buySell = req.query.buysell ??  ro.buysell,
    request.requestID = req.query.requestID ??  getRandom() + "",
    request.code = req.query.code ??  ro.code,
    request.deviceId = req.query.deviceId ??  ro.deviceId,
    request.userAgent = req.query.userAgent ??  ro.userAgent
    fcclient.post(client.api.CANCEL_ORDER, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/derCancelOrder", (req, res) => {
    // #swagger.tags = ['ORDER']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var request = new client.models.CancelOrder()

    request.orderID = req.query.orderid ?? ro.orderid,
    request.account = req.query.account ??  ro.account,
    request.instrumentID = req.query.instrumentid ??  ro.instrumentid,
    request.marketID = req.query.market ??  ro.market,
    request.buySell = req.query.buysell ??  ro.buysell,
    request.requestID = req.query.requestID ??  getRandom() + "",
    request.code = req.query.code ??  ro.code,
    request.deviceId = req.query.deviceId ??  ro.deviceId,
    request.userAgent = req.query.userAgent ??  ro.userAgent
    fcclient.post(client.api.DER_CANCEL_ORDER, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/orderHistory", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.OrderHistory()
    request.account=   req.query.account  ?? ro.account,
    request.startDate= req.query.startDate?? ro.startDate,
    request.endDate=  req.query.endDate  ?? ro.endDate
    fcclient.get(client.api.GET_ORDER_HISTORY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/orderBook", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.OrderBook(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_ORDER_BOOK, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/auditOrderBook", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.AuditOrderBook(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_AUDIT_ORDER_BOOK, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/ttlorderHistory", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var request = new client.models.OrderHistory()
    request.account=   req.query.account  ?? ro.account,
    request.startDate= req.query.startDate?? ro.startDate,
    request.endDate=  req.query.endDate  ?? ro.endDate
    fcclient.get(client.api.GET_ORDER_HISTORY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/derPosition", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.DerivativePosition(req.query.account ?? ro.account, parseBool(req.query.querySummary ?? ro.querySummary))
    fcclient.get(client.api.GET_DER_POSITION, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/stockPosition", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.StockPosition(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_STOCK_POSITION, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/maxBuyQty", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.MaxBuyQty(req.query.account ?? ro.account, req.query.instrumentID ?? ro.instrumentid, parseFloat(req.query.price ?? ro.price))
    fcclient.get(client.api.GET_MAX_BUY_QUANTITY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/ttlmaxBuyQty", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var request = new client.models.MaxBuyQty(req.query.account ?? ro.account, req.query.instrumentID ?? ro.instrumentid, parseFloat(req.query.price ?? ro.price))
    fcclient.get(client.api.GET_MAX_BUY_QUANTITY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/maxSellQty", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request =new  client.models.MaxSellQty(req.query.account ?? ro.account, req.query.instrumentID ?? ro.instrumentid)
    fcclient.get(client.api.GET_MAX_SELL_QUANTITY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/ttlmaxSellQty", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var request = new client.models.MaxSellQty(req.query.account ?? ro.account, req.query.instrumentID ?? ro.instrumentid, parseFloat(req.query.price ?? ro.price))
    fcclient.get(client.api.GET_MAX_SELL_QUANTITY, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/accountBalance", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.StockAccountBalance(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_ACCOUNT_BALANCE, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/derAccountBalance", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    var request = new client.models.DerivativeAccountBalance(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_DER_ACCOUNT_BALANCE, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
    
});
app.get("/ppmmraccount", (req, res) => {
    // #swagger.tags = ['QUERY']
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.PPMMRAccount(req.query.account ?? ro.account)
    fcclient.get(client.api.GET_PPMMRACCOUNT, request, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/rateLimit", (req, res) => {
    // #swagger.tags = ['QUERY']
    
    fcclient.get(client.api.GET_RATELIMIT, null, data => res.send(JSON.stringify(data)), err=> res.send(err))
});
app.get("/cashInAdvanceAmount", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashInAdvanceAmount(req.query.account ?? ro.account)
    fcclient.get(client.api.FC_CASH_CIA_AMOUNT, request, data => res.send(data), err=> res.send(err))
});
app.get("/unsettleSoldTransaction", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new  client.models.UnsettleSoldTransaction(req.query.account ?? ro.account, req.query.settleDate ?? ro.settleDate)
    fcclient.get(client.api.FC_CASH_UNSETTLE_SOLD_TRANSACTION, request, data => res.send(data), err=> res.send(err))
    
});
app.get("/transferHistories", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashTransferHistory(req.query.account ?? ro.account, req.query.startDate ?? ro.startDate,req.query.endDate ?? ro.endDate)
    fcclient.get(client.api.FC_CASH_TRANSFER_HISTORY, request, data => res.send(data), err=> res.send(err))
    
});
app.get("/cashInAdvanceHistories", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashInAdvanceHistory(req.query.account ?? ro.account, req.query.startDate ?? ro.startDate,req.query.endDate ?? ro.endDate)
    fcclient.get(client.api.FC_CASH_CIA_HISTORY, request, data => res.send(data), err=> res.send(err))
});
app.get("/estCashInAdvanceFee", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashInAdvanceEstFee(req.query.account ?? ro.account, req.query.ciaAmount ?? ro.ciaAmount,req.query.receiveAmount ?? ro.receiveAmount)
    fcclient.get(client.api.FC_CASH_CIA_EST_FEE, request, data => res.send(data), err=> res.send(err))
});
app.get("/vsdCashDW", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashTransferVSD(req.query.account ?? ro.account, req.query.amount ?? ro.amount,req.query.type ?? ro.type, req.query.remark ?? ro.remark, req.query.code ?? ro.code)
    fcclient.post(client.api.FC_CASH_VSD_DW, request, data => res.send(data), err=> res.send(err))
});
app.get("/transferInternal", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashTransfer(req.query.account ?? ro.account, req.query.beneficiaryAccount ?? ro.beneficiaryAccount,req.query.amount ?? ro.amount, req.query.remark ?? ro.remark, req.query.code ?? ro.code)
    fcclient.post(client.api.FC_CASH_TRANSFER, request, data => res.send(data), err=> res.send(err))
});
app.get("/createCashInAdvance", (req, res) => {
    // #swagger.tags = ['CASH']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.CashCIA(req.query.account ?? ro.account, req.query.ciaAmount ?? ro.ciaAmount,req.query.receiveAmount ?? ro.receiveAmount, req.query.code ?? ro.code)
    fcclient.post(client.api.FC_CASH_CIA, request, data => res.send(data), err=> res.send(err))
});
app.get("/ors/dividend", (req, res) => {
    // #swagger.tags = ['RIGHT']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.OrsDividend(req.query.account ?? ro.account)
    fcclient.get(client.api.FC_ORS_DIVIDEND, request, data => res.send(data), err=> res.send(err))
    
});
app.get("/ors/exercisableQuantity", (req, res) => {
    // #swagger.tags = ['RIGHT']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.OrsExercisableQuantity(req.query.account ?? ro.account)
    fcclient.get(client.api.FC_ORS_EXCERCISABLE_QTY, request, data => res.send(data), err=> res.send(err))
});
app.get("/ors/histories", (req, res) => {
    // #swagger.tags = ['RIGHT']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.OrsHistory(req.query.account ?? ro.account, req.query.startDate ?? ro.startDate,req.query.endDate ?? ro.endDate)
    fcclient.get(client.api.FC_ORS_HISTORY, request, data => res.send(data), err=> res.send(err))
});
app.get("/ors/create", (req, res) => {
    // #swagger.tags = ['RIGHT']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.Ors(req.query.account ?? ro.account, req.query.instrumentID ?? ro.instrumentID,req.query.entitlementID ?? ro.entitlementID, req.query.quantity ?? ro.quantity,  req.query.amount ?? ro.amount, req.query.code ?? ro.code)
    fcclient.post(client.api.FC_ORS, request, data => res.send(data), err=> res.send(err))
});
app.get("/stock/transferable", (req, res) => {
    // #swagger.tags = ['STOCK']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.StockTransferable(req.query.account ?? ro.account)
    fcclient.get(client.api.FC_STOCK_TRANSFERABLE, request, data => res.send(data), err=> res.send(err))
});
app.get("/stock/transferHistories", (req, res) => {
    // #swagger.tags = ['STOCK']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.StockTransferHistory(req.query.account ?? ro.account, req.query.startDate ?? ro.startDate,req.query.endDate ?? ro.endDate)
    fcclient.get(client.api.FC_STOCK_HISTORY, request, data => res.send(data), err=> res.send(err))
});
app.get("/stock/transfer", (req, res) => {
    // #swagger.tags = ['STOCK']
    var ro = {};
    Object.assign(ro, mockStockData);
    var request = new client.models.StockTransfer(req.query.account ?? ro.account, req.query.beneficiaryAccount ?? ro.beneficiaryAccount,req.query.exchangeID ?? ro.exchangeID, req.query.instrumentID ?? ro.instrumentID,  req.query.quantity ?? ro.quantity, req.query.code ?? ro.code)
    fcclient.post(client.api.FC_STOCK_TRANSFER, request, data => res.send(data), err=> res.send(err))
});
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: require('./package.json').version,
        title: 'FCTrading API client example',
        description: 'Example for test eassssy',

    },
    host: host+ ':' + port,
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    const swaggerFile = require('./swagger-output.json')
    const swaggerUi = require('swagger-ui-express')
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))
});