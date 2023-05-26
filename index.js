/*
 * Created on Wed Nov 11 2020 by ducdv
 *
 * Copyright (c) 2020 SSI
 */

/** @START_CONFIG */
const express = require('express')
const client = require('fctrading-client');
const axios = require('axios')

const app = express()
const port = 3011;
const rn = require('random-number')
const nw = require('os').networkInterfaces()
var deviceID=[];
for(el in nw){
    for(e in nw[el]){
        if(!nw[el][e].internal)
            deviceID.push(el+":"+nw[el][e].family+":"+nw[el][e].mac)
    }
}
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
    ConsumerID: "00f103fee2e9458183492bb3c3220072",
    ConsumerSecret: "0df3b572901247cfad741f3118e9465f",
    PrivateKey: "PFJTQUtleVZhbHVlPjxNb2R1bHVzPnVxQ2tZcE9FM1FSUE5BdkIweEdJL3FqQ1RZaktpY2tLaWpCdmlQK3UwMjhnei9nQ1VlcldwbUQ5NDhFVVVtQXpIYUpSVU0rcW9NNFZtd0x2eE1FYVpVaHVacUZraGlEV0hvTGwydStkZDdBR0JOYi9Lc29ZNDhpL3RicHl5SktMUW5vTkdJZ0gwTUlsRTRJdStTcytvZGNTRXFrejFsZFpYSmNmTmlVcUJBaz08L01vZHVsdXM+PEV4cG9uZW50PkFRQUI8L0V4cG9uZW50PjxQPjY1NzNTZTkrb2VuYkJuTlQ4ZnRqOHQvMTBHcllYSXdGeHFsbkJJVjFhT1NGdXIrUjNRLzltVUZJLzlEblhjeFFTOG5JV2krVTE5M3BkSEVqRjhaOFN3PT08L1A+PFE+eXNUaGdHbUNHK20xb0w4a0VtdlBkaVBrblR1NVRyNTcxNERKRzNEU1ZZc1lpUFAwb0VNcUxkMHdXSzRXazlUL2tsOEtLejZWRmxFRWV4ZVhlMTFrZXc9PTwvUT48RFA+aVN0RldYU2txd3dpcDFHeW1CZzY2cVQ1VFBrMnRrSUtCc3FPSDdLMlZIZGRad2VwbWlGNkNLTmFKUnR2NWtwUW9KNTdGZzNIUUJoL2xYdGI2N1p3bXc9PTwvRFA+PERRPnhpVENYNk82dXVBVTFySXg0N1pxa3YzY0p6SDNrVlZlMjJaRUg0YU9ZMzE3U2tscW9UbEEvSFNMQy8yQ25vK2o5enJjU3ducTBsWDFWUHZtMFd5Z0JRPT08L0RRPjxJbnZlcnNlUT5IaUZZRW1ESGFsdWxKUTVVMTN4aVZjZ1JkMU5VTHVML215WWtTbVovNkR3MEsxUGQwK1pKUDB3RjdPaDRXa3NtUG40bEVkeHpzZWp5blVhMTJHZU0xQT09PC9JbnZlcnNlUT48RD5QVnBjVUUvZzZPdm13ZHh2bnR6djVaQkRPRXdWRVpEM0Z4RHZTZUdNYnRQa3ZKbnk0VTFMdmF5N0txbXA3WjdVanhSeW1SZDhKNXM0ZlJwTkNxalU3UkR3eVVwOTdoN3Jrd2s4QXZRQ2hoVzEvNDFjWkJJOWxRWWMyNnc2Ni90UER3QVRHRERPelpLZ3pBT1NhQXU3elZ3QUNtYjRNRUx1Z1N3MUMzQ285ZVU9PC9EPjwvUlNBS2V5VmFsdWU+",

    URL: "http://192.168.213.98:1150/",
    stream_url: "http://192.168.213.98:1151/",
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
    deviceId:deviceID.join("|"),
    userAgent:"userAgent"
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
    deviceId:deviceID.join("|"),
    userAgent:"userAgent"
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
app.get("/ttlNewOrder", (req, res) => {
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
app.get("/ttlmodifyOrder", (req, res) => {
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
app.get("/ttlcancelOrder", (req, res) => {
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