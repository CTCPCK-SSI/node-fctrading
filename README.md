[![Release package to registry.npmjs.org](https://github.com/SSI-Securities-Corporation/node-fctrading/actions/workflows/publish.yaml/badge.svg)](https://github.com/SSI-Securities-Corporation/node-fctrading/actions/workflows/publish.yaml)

# Installation
#### From npm (most stable)
``` javascript
npm install ssi-fctrading
```
#### Install behind proxy
```javascript
npm config set strict-ssl false
npm install --proxy http://<username>:<password>@<host>:<port> ssi-fctrading
```

# Sample usage
## Config
Get `ConsumerID`, `ConsumerSecret` and `PrivateKey` from [iBoard](https://iboard.ssi.com.vn/support/api-service/management)
```javascript
//This is config for consumer have permission on all customer
var config = {
    ConsumerID: "",
    ConsumerSecret: "",
    PrivateKey: "",

    URL: "https://fc-tradeapi.ssi.com.vn/",
    stream_url: "wss://fc-tradehub.ssi.com.vn/",
};
```
## API
#### Get accessToken to query
``` javascript
const client = require('ssi-fctrading')
const axios = require('axios')

const rq = axios.create({
    baseURL: config.URL,
    timeout: 5000
})

var access_token = "";

rq({
    url: client.api.GET_ACCESS_TOKEN,
    method: 'post',
    data: {
        consumerID: config.ConsumerID,
        consumerSecret: config.ConsumerSecret,
        twoFactorType: 0,  //  0 - PIN, 1 - OTP
        code: mockStockData.code,
        isSave: false // Not verify `code` and accessToken return only used for query api
    }
}).then(response => {
    if (response.data.status === 200) {
        access_token = response.data.data.accessToken;
        console.log(access_token)
    } else {
        console.log(response.data.message)
    }
}, reason => {
    console.log(reason);
})
```
#### Query stock position
``` javascript
const client = require('ssi-fctrading')
const axios = require('axios')

const rq = axios.create({
    baseURL: config.URL,
    timeout: 5000
})
var request = {
    account: '1111116',
}
rq({
    url: client.api.GET_STOCK_POSITION,
    method: 'get',
    headers: {
        [client.constants.AUTHORIZATION_HEADER]: client.constants.AUTHORIZATION_SCHEME + " " + access_token,
    },
    params: request
}).then(response => {
    console.log(JSON.stringify(response.data));
}).catch(error => {
    console.log(error);
})
```

#### Order
To place new order or modify, cancel order you need verify PIN or OTP when get accessToken.
If you use OTP, please get it before call accessToken:

## Streaming Data
``` javascript
// TODO
```


