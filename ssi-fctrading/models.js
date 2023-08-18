module.exports = {
    AccessToken: function (consumerId, consumerSecret, twoFactorType, code, isSave = true) {
        this.consumerID = consumerId
        this.consumerSecret = consumerSecret
        this.twoFactorType = twoFactorType
        this.code = code
        this.isSave = isSave
    },
    GetOTP: function (consumerID, consumerSecret) {
        this.consumerID = consumerID
        this.consumerSecret = consumerSecret
    },
    NewOrder: function (account, requestID, instrumentID, market, buySell, orderType, price, quantity, stopOrder, stopPrice, stopType, stopStep, lossStep, profitStep, channelID, code, deviceId, userAgent) {
        this.account = account
        this.requestID = requestID
        this.instrumentID = instrumentID
        this.market = market
        this.buySell = buySell
        this.orderType = orderType
        this.price = price
        this.quantity = quantity
        this.stopOrder = stopOrder
        this.stopPrice = stopPrice
        this.stopType = stopType
        this.stopStep = stopStep
        this.lossStep = lossStep
        this.profitStep = profitStep
        this.channelID = channelID
        this.code = code
        this.deviceId = deviceId
        this.userAgent = userAgent
    },
    CancelOrder: function (account, requestID, orderID, marketID, instrumentID, buySell, code, deviceId, userAgent) {
        this.account = account
        this.requestID = requestID
        this.orderID = orderID
        this.marketID = marketID
        this.instrumentID = instrumentID
        this.buySell = buySell
        this.code = code
        this.deviceId = deviceId
        this.userAgent = userAgent
    },
    ModifyOrder: function (account, requestID, orderID, marketID, instrumentID, price, quantity, buySell, orderType, code, deviceId, userAgent) {
        this.account = account
        this.requestID = requestID
        this.orderID = orderID
        this.marketID = marketID
        this.instrumentID = instrumentID
        this.price = price
        this.quantity = quantity
        this.buySell = buySell
        this.orderType = orderType
        this.code = code
        this.deviceId = deviceId
        this.userAgent = userAgent
    },
    StockAccountBalance: function (account) {
        this.account = account
    },
    DerivativeAccountBalance: function (account) {
        this.account = account
    },
    PPMMRAccount: function (account) {
        this.account = account
    },
    StockPosition: function (account) {
        this.account = account
    },
    DerivativePosition: function (account, querySummary = true) {
        this.account = account
        this.querySummary = querySummary
    },
    MaxBuyQty: function (account, instrumentID, price) {
        this.account = account
        this.instrumentID = instrumentID
        this.price = price
    },
    MaxSellQty: function (account, instrumentID) {
        this.account = account
        this.instrumentID = instrumentID
    },
    OrderHistory: function (account, startDate, endDate) {
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
    },
    OrderBook: function (account) {
        this.account = account
    },
    AuditOrderBook: function (account) {
        this.account = account
    },
    CashInAdvanceAmount: function (account) {
        this.account = account
    },
    UnsettleSoldTransaction: function (account, settleDate) {
        this.account = account
        this.settleDate = settleDate
    },
    CashTransferHistory: function (account, fromDate, toDate) {
        this.account = account
        this.fromDate = fromDate
        this.toDate = toDate
    },
    CashInAdvanceHistory: function (account, startDate, endDate) {
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
    },
    CashInAdvanceEstFee: function (account, ciaAmount, receiveAmount) {
        this.account = account
        this.ciaAmount = ciaAmount
        this.receiveAmount = receiveAmount
    },
    CashTransferVSD: function (account, amount, type, remark) {
        this.account = account
        this.amount = amount
        this.type = type
        this.remark = remark
    },
    CashTransfer: function (account, beneficiaryAccount, amount, remark) {
        this.account = account
        this.beneficiaryAccount = beneficiaryAccount
        this.amount = amount
        this.remark = remark
    },
    CashCIA: function (account, ciaAmount, receiveAmount) {
        this.account = account
        this.ciaAmount = ciaAmount
        this.receiveAmount = receiveAmount
    },
    OrsDividend: function (account) {
        this.account = account
    },
    OrsExercisableQuantity: function (account) {
        this.account = account
    },
    OrsHistory: function (account, startDate, endDate) {
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
    },
    Ors: function (account, instrumentID, entitlementID, quantity, amount) {
        this.account = account
        this.instrumentID = instrumentID
        this.entitlementID = entitlementID
        this.quantity = quantity
        this.amount = amount
    },
    StockTransferable: function (account) {
        this.account = account
    },
    StockTransferHistory: function (account, startDate, endDate) {
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
    },
    StockTransfer: function (account, beneficiaryAccount, exchangeID, instrumentID, quantity) {
        this.account = account
        this.beneficiaryAccount = beneficiaryAccount
        this.exchangeID = exchangeID
        this.instrumentID = instrumentID
        this.quantity = quantity
    }
}