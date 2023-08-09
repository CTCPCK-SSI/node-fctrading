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
    code : "",
    querySummary: true,
    startDate: "29/08/2019",
    endDate: "29/08/2019",
    deviceId: client.getDeviceId(),
    userAgent: client.getUserAgent()
}
var access_token = "";

rq({
    url: client.api.GET_ACCESS_TOKEN,
    method: 'post',
    data: {
        consumerID: config.ConsumerID,
        consumerSecret: config.ConsumerSecret,
        twoFactorType: 0,
        code: mockStockData.code,
        isSave: false
    }
}).then(response => {
    if (response.data.status === 200) {
        access_token = response.data.data.accessToken;
        console.log(response.data);
        client.initStream({
            url: config.stream_url,
            access_token: response.data.data.accessToken,
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
    } else {
        console.log(response.data.message)
    }

}, reason => {
    console.log(reason);
})
var getRandom = rn.generator({
    min: 0,
    max: 99999999,
    integer: true
});
app.get("/getOtp", (req, res) => {
    
    var request = {
        consumerID: config.ConsumerID,
        consumerSecret: config.ConsumerSecret
    }
    rq({
        url: client.api.GET_OTP,
        method: 'post',
        
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/verifyCode", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        consumerID: config.ConsumerID,
        consumerSecret: config.ConsumerSecret,
        twoFactorType: parseInt(ro.twoFaType),
        code: ro.code,
        isSave : true
    }
    rq({
        url: client.api.GET_ACCESS_TOKEN,
        method: 'post',
        data: request
    }).then(response => {
        if (response.data.status === 200) {

            access_token = response.data.data.accessToken;
            console.log("Access Token for order: " + access_token)
        }
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/newOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        instrumentID: ro.instrumentid,
        market: ro.market,
        buySell: ro.buysell,
        orderType: ro.ordertype,
        channelID: ro.channel,
        price: parseFloat(ro.price),
        quantity: parseInt(ro.quantity),
        account: ro.account,
        requestID: getRandom() + "",
        stopOrder: false,
        stopPrice: 0,
        stopType: "string",
        stopStep: 0,
        lossStep: 0,
        profitStep: 0,
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.NEW_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/derNewOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        instrumentID: ro.instrumentid,
        market: ro.market,
        buySell: ro.buysell,
        orderType: ro.ordertype,
        channelID: ro.channel,
        price: parseFloat(ro.price),
        quantity: parseInt(ro.quantity),
        account: ro.account,
        requestID: getRandom() + "",
        stopOrder: parseBool(ro.stoporder),
        stopPrice: parseFloat(ro.stopprice),
        stopType: ro.stoptype,
        stopStep: parseFloat(ro.stopstep),
        lossStep: parseFloat(ro.lossstep),
        profitStep: parseFloat(ro.profitstep),
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.DER_NEW_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/modifyOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        orderID: ro.orderid,
        price: parseFloat(ro.price),
        quantity: parseInt(ro.quantity),
        account: ro.account,
        instrumentID: ro.instrumentid,
        marketID: ro.market,
        buySell: ro.buysell,
        requestID: getRandom() + "",
        orderType: ro.ordertype,
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.MODIFY_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/derModifyOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        orderID: ro.orderid,
        price: parseFloat(ro.price),
        quantity: parseInt(ro.quantity),
        account: ro.account,
        instrumentID: ro.instrumentid,
        marketID: ro.market,
        buySell: ro.buysell,
        requestID: getRandom() + "",
        orderType: ro.ordertype,
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.DER_MODIFY_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/cancelOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        orderID: ro.orderid,
        account: ro.account,
        instrumentID: ro.instrumentid,
        marketID: ro.market,
        buySell: ro.buysell,
        requestID: getRandom() + "",
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.CANCEL_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/derCancelOrder", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        orderID: ro.orderid,
        account: ro.account,
        instrumentID: ro.instrumentid,
        marketID: ro.market,
        buySell: ro.buysell,
        requestID: getRandom() + "",
        code: ro.code,
        deviceId: ro.deviceId,
        userAgent: ro.userAgent
    }
    rq({
        url: client.api.DER_CANCEL_ORDER,
        method: 'post',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
            [client.constants.SIGNATURE_HEADER]: client.sign(JSON.stringify(request), config.PrivateKey)
        },
        data: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/orderHistory", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        startDate: ro.startDate,
        endDate: ro.endDate
    }
    rq({
        url: client.api.GET_ORDER_HISTORY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/orderBook", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account
    }
    rq({
        url: client.api.GET_ORDER_BOOK,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/auditOrderBook", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account
    }
    rq({
        url: client.api.GET_AUDIT_ORDER_BOOK,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/ttlorderHistory", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        startDate: ro.startDate,
        endDate: ro.endDate
    }
    rq({
        url: client.api.GET_ORDER_HISTORY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/derPosition", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        querySummary: parseBool(ro.querySummary),
    }
    rq({
        url: client.api.GET_DER_POSITION,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/stockPosition", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
    }
    rq({
        url: client.api.GET_STOCK_POSITION,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/maxBuyQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        instrumentID: ro.instrumentid,
        price: parseFloat(ro.price)
    }
    rq({
        url: client.api.GET_MAX_BUY_QUANTITY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/ttlmaxBuyQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        instrumentID: ro.instrumentid,
        price: parseFloat(ro.price)
    }
    rq({
        url: client.api.GET_MAX_BUY_QUANTITY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/maxSellQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        instrumentID: ro.instrumentid
    }
    rq({
        url: client.api.GET_MAX_SELL_QUANTITY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/ttlmaxSellQty", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account,
        instrumentID: ro.instrumentid,
        price: parseFloat(ro.price)
    }
    rq({
        url: client.api.GET_MAX_SELL_QUANTITY,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/accountBalance", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account
    }
    rq({
        url: client.api.GET_ACCOUNT_BALANCE,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/derAccountBalance", (req, res) => {
    var ro = {};
    Object.assign(ro, mockDeterativeData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account
    }
    rq({
        url: client.api.GET_DER_ACCOUNT_BALANCE,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.get("/ppmmraccount", (req, res) => {
    var ro = {};
    Object.assign(ro, mockStockData);
    Object.assign(ro, req.query);
    var request = {
        account: ro.account
    }
    rq({
        url: client.api.GET_PPMMRACCOUNT,
        method: 'get',
        headers: {
            [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
        },
        params: request
    }).then(response => {
        res.send(JSON.stringify(response.data));
    }).catch(error => {
        res.send(error);
    })
});
app.listen(port, 'localhost', () => console.log(`Example app listening on port ${port}!`))