/*
 * Created on Wed Jun 19 2019 by ducdv
 *
 * Copyright (c) 2019 SSI
 */

/** @START_CONFIG */
const express = require('express')
const client = require('fctrading-client/client_v1');

const app = express()
const port = 3012;
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
    // ConsumerID: "2d5af2a7a81a4f4f88d4ba3ac865ae64",
    // ConsumerSecret: "97b560d46ef542a5887b3dc51bf7a229",
    // PublicKey: "PFJTQUtleVZhbHVlPjxNb2R1bHVzPjZ3a2ZKc3hKWWt4cm9SRlJsdFFtaWlHeVNMd05Bak9ia0RPV01CSXk0T29Zd3ljNTlPQ3dGQXVjaEF5UnBDZitXRlkvN1BWd3BuYUpUaVhwd1U4ZDFKUjc1V2VYZmxhL3RCbTJMWFJXczZJa29JYnM3MjZIUXpDTVBabjA4QXVBakZBYXkzNEF2RjFudnlCMkM3cDBxV0hjTmtIN3AxcFRuS29aRnpwM1VEMD08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjwvUlNBS2V5VmFsdWU+",
    // URL: "http://localhost:55702/",
    // stream_url: "http://192.168.216.137:1120/",
    ConsumerID: "00f103fee2e9458183492bb3c3220072",
    ConsumerSecret: "2415103cd29b4bc3b50c8446a6b2eae5",
    PublicKey: "PFJTQUtleVZhbHVlPjxNb2R1bHVzPncySkROaUNneEwxcGFvYlVQQzU1cnFjRTdaSHlSeEJTQUtSYThoemZHRXlDWWdnMmJrMkRtNWZVUWlJdzl0TmVsMldRK1Jad21GZmxGRjB2a1dscTVEelVVazBmVFBUcGRYUlJmZWJqUkNveXpRa2ZGbzNvbEhENWxmSVVqeXRNbHVLclB3U1lYWUNPZHh2b2tRMlY1eGRPOEZIeUdQVXFaUytIMC9vU0dYTT08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjwvUlNBS2V5VmFsdWU+",

    URL: "http://localhost:55702/",
    stream_url: "http://localhost:49160/",
};


var configServer = config;
/** @END_CONFIG */
var mockStockData = {
    account: "0163271",
    buysell: "B",
    market: "VN", // Only support "VN" and "VNFE"
    ordertype: "LO",
    price: 21000,
    quantity: 300,
    instrumentid: "SSI",
    validitydate: date.yyyymmdd(),
    channel: "IW",
    extOrderID: "", // this property is unique in day.
    session: "session_4254cdc60bcecfed30c4796bb27b623c",
    pin: "123456789",
    startDate: "24/05/2019",
    endDate: "30/05/2019"
};
var mockDeterativeData = {
    account: "0163278",
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
    session: "session_4254cdc60bcecfed30c4796bb27b623c",
    pin: "123456780",
    startDate: "29/08/2019",
    endDate: "29/08/2019"
}



//const client = require('./TradingAPIJSClient');
client.initStream({
    url: config.stream_url,
    consumer_id: config.ConsumerID,
    consumer_secret: config.ConsumerSecret,
    notify_id: 0 // For recover disconnect data, -1 for ignore.
});
// Bind a callback function to event onNewOrder
client.bind(client.events.onOrderUpdate, function (e, data) {
    //Process data ...
    console.log(e + ": ");
    console.log(JSON.stringify(data));

});
client.bind(client.events.onError, function (e, data) {
    //Process data ...
    console.log(e + ": ");
    console.log(data);

});
// Bind a callback function to event onOrderError
client.bind(client.events.onOrderError, function (e, data) {
    //Process data...
    console.log(e + ": ");
    console.log(JSON.stringify(data));
});
client.bind(client.events.onClientPortfolioEvent, function (e, data) {
    //Process data...
    console.log(e + ": ");
    console.log(JSON.stringify(data));
})
client.start();
var getRandom = rn.generator({
    min: 0,
    max: 99999999,
    integer: true
});
// const client = require('./TradingAPIJSClient');
// var request = new client.models.OrderHistoryRequest();
// request.setAccountid("1810011");
// request.setStartdate("01/01/2019 08:00:00");
// request.setEnddate("06/01/2019 08:00:00");

// client.cancelOrder({
//     url: "http://localhost:55702/api/afe/order/CancelOrder",
//     consumer_id: config.ConsumerID,
//     consumer_secret: config.ConsumerSecret,
//     public_key: config.PublicKey
// }, request, function(res, err){
//     console.log(JSON.stringify(res));
// })
/** @NEWORDER */
app.get("/login", (req, res) => {
    var ro = {
        username: "118441",
        password: "A12345678a@"
    };
    Object.assign(ro, req.query);
    var request = new client.models.LoginRequest();

    request.setUsername(ro.username);
    request.setPassword(ro.password);
    client.login({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});
app.get("/newOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.NewOrderRequest();

    request.setAccount(ro.account);
    request.setBuysell(ro.buysell);
    request.setMarket(ro.market);
    request.setOrdertype(ro.ordertype);
    request.setPrice(parseFloat(ro.price));
    request.setQuantity(parseInt(ro.quantity));
    request.setInstrumentid(ro.instrumentid);
    request.setRequestid(getRandom() + "");
    request.setChannelid(ro.channel);
    request.setSession(ro.session);
    request.setPin(ro.pin);
    client.newOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

app.get("/ttlnewOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.NewOrderRequest();
    request.setAccount(ro.account);
    request.setBuysell(ro.buysell);
    request.setMarket(ro.market);
    request.setOrdertype(ro.ordertype);
    request.setPrice(parseFloat(ro.price));
    request.setQuantity(parseInt(ro.quantity));
    request.setInstrumentid(ro.instrumentid);
    request.setRequestid(getRandom() + "");
    request.setChannelid(ro.channel)
    request.setSession(ro.session);
    request.setPin(ro.pin);
    // stoporder
    request.setStoporder(parseBool(ro.stoporder)); // Only support for Dervirative order
    request.setStopprice(parseFloat(ro.stopprice));
    request.setStoptype(ro.stoptype);
    request.setStopstep(parseFloat(ro.stopstep));
    request.setLossstep(parseFloat(ro.lossstep));
    request.setProfitstep(parseFloat(ro.profitstep));
    client.newOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

// Test error function 
app.get("/newOrderError", (req, res) => {
    var request = new client.models.NewOrderRequest();

    request.setAccount("100");
    request.setBuysell("B");
    request.setCurrency("KVND");
    request.setMarket("VN");
    request.setOrdertype("LO");
    request.setPrice(30000);
    request.setQuantity(10);
    request.setInstrumentid("SSI");
    request.setValiditydate(date.yyyymmdd());
    request.setExtorderid(getRandom() + "")
    client.newOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @MODIFYORDER */
app.get("/modifyOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.ModifyOrderRequest();

    request.setOrderid(ro.orderid);
    request.setAccount(ro.account);
    request.setPrice(parseFloat(ro.price));
    request.setQuantity(parseInt(ro.quantity));
    request.setBuysell(ro.buysell);
    request.setMarketid(ro.market);
    request.setInstrumentid(ro.instrumentid);
    request.setRequestid(getRandom() + "");
    request.setOrdertype(ro.ordertype);
    request.setSession(ro.session);
    request.setPin(ro.pin);
    client.modifyOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});
app.get("/ttlmodifyOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.ModifyOrderRequest();
    request.setOrderid(ro.orderid);
    request.setAccount(ro.account);
    request.setPrice(ro.price);
    request.setQuantity(ro.quantity);
    request.setMarketid(ro.market);
    request.setInstrumentid(ro.instrumentid);
    request.setBuysell(ro.buysell);
    request.setOrdertype(ro.ordertype);
    request.setRequestid(getRandom() + "");
    request.setSession(ro.session);
    request.setPin(ro.pin);
    client.modifyOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @CANCELORDER */
app.get("/cancelOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.CancelOrderRequest();
    request.setOrderid(ro.orderid);
    request.setAccount(ro.account);
    request.setMarketid(ro.market);
    request.setInstrumentid(ro.instrumentid);
    request.setBuysell(ro.buysell);
    request.setRequestid(getRandom() + "");
    request.setSession(ro.session);
    request.setPin(ro.pin);
    client.cancelOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});
app.get("/ttlcancelOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.CancelOrderRequest();
    request.setOrderid(ro.orderid);
    request.setAccount(ro.account);
    request.setMarketid(ro.market);
    request.setInstrumentid(ro.instrumentid);
    request.setBuysell(ro.buysell);
    request.setRequestid(getRandom() + "");
    request.setSession(ro.session);
    request.setPin(ro.pin);
    client.cancelOrder({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @ORDERHISTORIES */
app.get("/orderHistory", (req, res) => {
    var ro = {
        account: '1184418',
        start: "02/01/2020",
        end: "2020",
        session: ""
    };
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query)
    var request = new client.models.OrderHistoryRequest();

    request.setAccount(ro.account);
    request.setStartdate(ro.start);
    request.setEnddate(ro.end);
    request.setSession(ro.session);
    client.getOrderHistory({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

app.get("/ttlOrderHistory", (req, res) => {
    var ro = {
        account: '1184418',
        start: "02/01/2020",
        end: "2020",
        session: ""
    };
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.OrderHistoryRequest();

    request.setAccount(ro.account);
    request.setStartdate("01/07/2019");
    request.setEnddate("28/08/2019");
    client.getOrderHistory({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @DERPOSITION */
app.get("/derPosition", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.DerPositionRequest();
    if (req.query.accountid != 'undefined')
        request.setAccount(req.query.accountid);
    else res.send("accountid field is required.");

    request.setAccount(ro.account);
    request.setSession(ro.session);
    request.setQuerysummary(false);
    var start = process.hrtime();
    client.getDerPosition({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        var hrend = process.hrtime(start);
        console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @STOCKPOSITION */
app.get("/stockPosition", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.StockPositionRequest();
    if (req.query.accountid != 'undefined')
        request.setAccount(req.query.accountid);
    else res.send("accountid field is required.");

    request.setAccount(ro.account);
    request.setSession(ro.session);
    client.getStockPosition({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @MAXBUYQTY */
app.get("/maxBuyQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.MaxBuyQtyRequest();

    request.setAccount(ro.account);
    request.setInstrumentid(ro.instrumentid);
    request.setPrice(ro.price);
    request.setSession(ro.session);
    client.getMaxBuyQuantity({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey
    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            console.timeEnd("start");
        res.send(JSON.stringify(response));
    })
});

app.get("/ttlMaxBuyQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.MaxBuyQtyRequest();

    request.setAccount(ro.account);
    request.setInstrumentid(ro.instrumentid);
    request.setPrice(ro.price);
    request.setSession(ro.session);
    client.getMaxBuyQuantity({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey
    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @MAXSELLQTY */
app.get("/maxSellQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.MaxBuyQtyRequest();
    if (req.query.accountid != 'undefined')
        request.setAccount(req.query.accountid);
    else res.send("accountid field is required.");

    request.setAccount(ro.account);
    request.setInstrumentid(ro.instrumentid);
    request.setSession(ro.session);
    client.getMaxSellQuantity({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey
    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

app.get("/ttlMaxSellQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.MaxBuyQtyRequest();

    request.setAccount(ro.account);
    request.setInstrumentid(ro.instrumentid);
    request.setPrice(ro.price);
    request.setSession(ro.session);
    client.getMaxSellQuantity({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey
    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @ACCOUNTBALANCE */
app.get("/accountBalance", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = new client.models.AccountBalanceRequest();
    request.setAccount(ro.account);
    request.setSession(ro.session);
    client.getAccountBalance({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

/** @DERACCOUNTBALANCE */
app.get("/derAccountBalance", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = new client.models.DerAccountBalanceRequest();

    request.setAccount(ro.account);
    request.setSession(ro.session);
    client.getDerAccountBalance({
        url: configServer.URL,
        consumer_id: config.ConsumerID,
        consumer_secret: config.ConsumerSecret,
        public_key: config.PublicKey

    }, request, (response, error) => {
        if (error !== null) {
            res.send(JSON.stringify(error));
        } else
            res.send(JSON.stringify(response));
    })
});

app.listen(port, 'localhost', () => console.log(`Example app listening on port ${port}!`))