/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AccountBalanceRequest', null, global);
goog.exportSymbol('proto.AccountBalanceResponse', null, global);
goog.exportSymbol('proto.AssetsItem', null, global);
goog.exportSymbol('proto.CancelOrderModel', null, global);
goog.exportSymbol('proto.CancelOrderRequest', null, global);
goog.exportSymbol('proto.CancelOrderResponse', null, global);
goog.exportSymbol('proto.CashHoldingRequest', null, global);
goog.exportSymbol('proto.CashHoldingResponse', null, global);
goog.exportSymbol('proto.ClientPortfolio', null, global);
goog.exportSymbol('proto.ClientPortfolioEvent', null, global);
goog.exportSymbol('proto.ClientPortfolioEventItem', null, global);
goog.exportSymbol('proto.ClientPortfolioResponse', null, global);
goog.exportSymbol('proto.DerAccountBalanceRequest', null, global);
goog.exportSymbol('proto.DerAccountBalanceResponse', null, global);
goog.exportSymbol('proto.DerPositionItem', null, global);
goog.exportSymbol('proto.DerPositionRequest', null, global);
goog.exportSymbol('proto.DerPositionResponse', null, global);
goog.exportSymbol('proto.EventBase', null, global);
goog.exportSymbol('proto.ExchangeMarginItem', null, global);
goog.exportSymbol('proto.InternalMarginItem', null, global);
goog.exportSymbol('proto.LoginRequest', null, global);
goog.exportSymbol('proto.LoginResponse', null, global);
goog.exportSymbol('proto.MaxBuyQtyRequest', null, global);
goog.exportSymbol('proto.MaxBuyQtyResponse', null, global);
goog.exportSymbol('proto.MaxSellQtyRequest', null, global);
goog.exportSymbol('proto.MaxSellQtyResponse', null, global);
goog.exportSymbol('proto.ModifyOrderModel', null, global);
goog.exportSymbol('proto.ModifyOrderRequest', null, global);
goog.exportSymbol('proto.ModifyOrderResponse', null, global);
goog.exportSymbol('proto.NewOrder', null, global);
goog.exportSymbol('proto.NewOrderModel', null, global);
goog.exportSymbol('proto.NewOrderRequest', null, global);
goog.exportSymbol('proto.NewOrderResponse', null, global);
goog.exportSymbol('proto.NotifyEvent', null, global);
goog.exportSymbol('proto.OrderCanceled', null, global);
goog.exportSymbol('proto.OrderError', null, global);
goog.exportSymbol('proto.OrderEvent', null, global);
goog.exportSymbol('proto.OrderExpired', null, global);
goog.exportSymbol('proto.OrderFullyFilled', null, global);
goog.exportSymbol('proto.OrderFullyFilledPartiallyCancelled', null, global);
goog.exportSymbol('proto.OrderHistoryItem', null, global);
goog.exportSymbol('proto.OrderHistoryRequest', null, global);
goog.exportSymbol('proto.OrderHistoryResponse', null, global);
goog.exportSymbol('proto.OrderPartiallyFilled', null, global);
goog.exportSymbol('proto.OrderPendingApproval', null, global);
goog.exportSymbol('proto.OrderPendingCancel', null, global);
goog.exportSymbol('proto.OrderPendingModify', null, global);
goog.exportSymbol('proto.OrderPreSession', null, global);
goog.exportSymbol('proto.OrderQueued', null, global);
goog.exportSymbol('proto.OrderRejected', null, global);
goog.exportSymbol('proto.OrderSending', null, global);
goog.exportSymbol('proto.OrderStopPreSession', null, global);
goog.exportSymbol('proto.OrderStopReady', null, global);
goog.exportSymbol('proto.OrderStopSent', null, global);
goog.exportSymbol('proto.PPMMRAccountRequest', null, global);
goog.exportSymbol('proto.PPMMRAccountResponse', null, global);
goog.exportSymbol('proto.Request', null, global);
goog.exportSymbol('proto.Response_AccountBalanceResponse', null, global);
goog.exportSymbol('proto.Response_CancelOrderResponse', null, global);
goog.exportSymbol('proto.Response_CashHoldingResponse', null, global);
goog.exportSymbol('proto.Response_ClientPortfolioResponse', null, global);
goog.exportSymbol('proto.Response_DerAccountBalanceResponse', null, global);
goog.exportSymbol('proto.Response_DerPositionResponse', null, global);
goog.exportSymbol('proto.Response_LoginResponse', null, global);
goog.exportSymbol('proto.Response_MaxBuyQtyResponse', null, global);
goog.exportSymbol('proto.Response_MaxSellQtyResponse', null, global);
goog.exportSymbol('proto.Response_ModifyOrderResponse', null, global);
goog.exportSymbol('proto.Response_NewOrderResponse', null, global);
goog.exportSymbol('proto.Response_OrderHistoryResponse', null, global);
goog.exportSymbol('proto.Response_PPMMRAccountResponse', null, global);
goog.exportSymbol('proto.Response_StockHoldingResponse', null, global);
goog.exportSymbol('proto.Response_StockPositionResponse', null, global);
goog.exportSymbol('proto.StockHoldingItem', null, global);
goog.exportSymbol('proto.StockHoldingRequest', null, global);
goog.exportSymbol('proto.StockHoldingResponse', null, global);
goog.exportSymbol('proto.StockPositionItem', null, global);
goog.exportSymbol('proto.StockPositionRequest', null, global);
goog.exportSymbol('proto.StockPositionResponse', null, global);
goog.exportSymbol('proto.StopOrderPendingApproval', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientPortfolioEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ClientPortfolioEvent.repeatedFields_, null);
};
goog.inherits(proto.ClientPortfolioEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientPortfolioEvent.displayName = 'proto.ClientPortfolioEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientPortfolioEventItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPortfolioEventItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientPortfolioEventItem.displayName = 'proto.ClientPortfolioEventItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EventBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.EventBase.oneofGroups_);
};
goog.inherits(proto.EventBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EventBase.displayName = 'proto.EventBase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewOrder.displayName = 'proto.NewOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NotifyEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.NotifyEvent.oneofGroups_);
};
goog.inherits(proto.NotifyEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NotifyEvent.displayName = 'proto.NotifyEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderCanceled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderCanceled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderCanceled.displayName = 'proto.OrderCanceled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderError.displayName = 'proto.OrderError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.OrderEvent.oneofGroups_);
};
goog.inherits(proto.OrderEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderEvent.displayName = 'proto.OrderEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderExpired = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderExpired, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderExpired.displayName = 'proto.OrderExpired';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderFullyFilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderFullyFilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderFullyFilled.displayName = 'proto.OrderFullyFilled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderFullyFilledPartiallyCancelled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderFullyFilledPartiallyCancelled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderFullyFilledPartiallyCancelled.displayName = 'proto.OrderFullyFilledPartiallyCancelled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderPartiallyFilled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderPartiallyFilled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderPartiallyFilled.displayName = 'proto.OrderPartiallyFilled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderPendingApproval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderPendingApproval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderPendingApproval.displayName = 'proto.OrderPendingApproval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderPendingCancel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderPendingCancel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderPendingCancel.displayName = 'proto.OrderPendingCancel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderPendingModify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderPendingModify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderPendingModify.displayName = 'proto.OrderPendingModify';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderPreSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderPreSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderPreSession.displayName = 'proto.OrderPreSession';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderQueued = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderQueued, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderQueued.displayName = 'proto.OrderQueued';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderRejected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderRejected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderRejected.displayName = 'proto.OrderRejected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderSending = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderSending, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderSending.displayName = 'proto.OrderSending';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderStopPreSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderStopPreSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderStopPreSession.displayName = 'proto.OrderStopPreSession';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderStopReady = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderStopReady, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderStopReady.displayName = 'proto.OrderStopReady';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderStopSent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderStopSent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderStopSent.displayName = 'proto.OrderStopSent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopOrderPendingApproval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopOrderPendingApproval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopOrderPendingApproval.displayName = 'proto.StopOrderPendingApproval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Request.displayName = 'proto.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CancelOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelOrderRequest.displayName = 'proto.CancelOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyOrderRequest.displayName = 'proto.ModifyOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewOrderRequest.displayName = 'proto.NewOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderHistoryRequest.displayName = 'proto.OrderHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientPortfolio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPortfolio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientPortfolio.displayName = 'proto.ClientPortfolio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CashHoldingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CashHoldingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CashHoldingRequest.displayName = 'proto.CashHoldingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockHoldingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StockHoldingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockHoldingRequest.displayName = 'proto.StockHoldingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DerPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DerPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DerPositionRequest.displayName = 'proto.DerPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StockPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockPositionRequest.displayName = 'proto.StockPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MaxBuyQtyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MaxBuyQtyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MaxBuyQtyRequest.displayName = 'proto.MaxBuyQtyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MaxSellQtyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MaxSellQtyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MaxSellQtyRequest.displayName = 'proto.MaxSellQtyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DerAccountBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DerAccountBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DerAccountBalanceRequest.displayName = 'proto.DerAccountBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccountBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccountBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccountBalanceRequest.displayName = 'proto.AccountBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PPMMRAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PPMMRAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PPMMRAccountRequest.displayName = 'proto.PPMMRAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoginRequest.displayName = 'proto.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelOrderModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CancelOrderModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelOrderModel.displayName = 'proto.CancelOrderModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CancelOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CancelOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CancelOrderResponse.displayName = 'proto.CancelOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_CancelOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_CancelOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_CancelOrderResponse.displayName = 'proto.Response_CancelOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyOrderModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyOrderModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyOrderModel.displayName = 'proto.ModifyOrderModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyOrderResponse.displayName = 'proto.ModifyOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_ModifyOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_ModifyOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_ModifyOrderResponse.displayName = 'proto.Response_ModifyOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewOrderModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewOrderModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewOrderModel.displayName = 'proto.NewOrderModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewOrderResponse.displayName = 'proto.NewOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_NewOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_NewOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_NewOrderResponse.displayName = 'proto.Response_NewOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderHistoryItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OrderHistoryItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderHistoryItem.displayName = 'proto.OrderHistoryItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OrderHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.OrderHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderHistoryResponse.displayName = 'proto.OrderHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_OrderHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_OrderHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_OrderHistoryResponse.displayName = 'proto.Response_OrderHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientPortfolioResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientPortfolioResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientPortfolioResponse.displayName = 'proto.ClientPortfolioResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_ClientPortfolioResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_ClientPortfolioResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_ClientPortfolioResponse.displayName = 'proto.Response_ClientPortfolioResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CashHoldingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CashHoldingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CashHoldingResponse.displayName = 'proto.CashHoldingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_CashHoldingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_CashHoldingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_CashHoldingResponse.displayName = 'proto.Response_CashHoldingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_StockHoldingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_StockHoldingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_StockHoldingResponse.displayName = 'proto.Response_StockHoldingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockHoldingItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StockHoldingItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockHoldingItem.displayName = 'proto.StockHoldingItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockHoldingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.StockHoldingResponse.repeatedFields_, null);
};
goog.inherits(proto.StockHoldingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockHoldingResponse.displayName = 'proto.StockHoldingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DerPositionItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DerPositionItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DerPositionItem.displayName = 'proto.DerPositionItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DerPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DerPositionResponse.repeatedFields_, null);
};
goog.inherits(proto.DerPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DerPositionResponse.displayName = 'proto.DerPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_DerPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_DerPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_DerPositionResponse.displayName = 'proto.Response_DerPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_StockPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_StockPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_StockPositionResponse.displayName = 'proto.Response_StockPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockPositionItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StockPositionItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockPositionItem.displayName = 'proto.StockPositionItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StockPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.StockPositionResponse.repeatedFields_, null);
};
goog.inherits(proto.StockPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StockPositionResponse.displayName = 'proto.StockPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MaxBuyQtyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MaxBuyQtyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MaxBuyQtyResponse.displayName = 'proto.MaxBuyQtyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_MaxBuyQtyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_MaxBuyQtyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_MaxBuyQtyResponse.displayName = 'proto.Response_MaxBuyQtyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MaxSellQtyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MaxSellQtyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MaxSellQtyResponse.displayName = 'proto.MaxSellQtyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_MaxSellQtyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_MaxSellQtyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_MaxSellQtyResponse.displayName = 'proto.Response_MaxSellQtyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AssetsItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AssetsItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AssetsItem.displayName = 'proto.AssetsItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DerAccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DerAccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DerAccountBalanceResponse.displayName = 'proto.DerAccountBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExchangeMarginItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExchangeMarginItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExchangeMarginItem.displayName = 'proto.ExchangeMarginItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InternalMarginItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.InternalMarginItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.InternalMarginItem.displayName = 'proto.InternalMarginItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_DerAccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_DerAccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_DerAccountBalanceResponse.displayName = 'proto.Response_DerAccountBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccountBalanceResponse.displayName = 'proto.AccountBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_AccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_AccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_AccountBalanceResponse.displayName = 'proto.Response_AccountBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PPMMRAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PPMMRAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PPMMRAccountResponse.displayName = 'proto.PPMMRAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_PPMMRAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_PPMMRAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_PPMMRAccountResponse.displayName = 'proto.Response_PPMMRAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response_LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Response_LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response_LoginResponse.displayName = 'proto.Response_LoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoginResponse.displayName = 'proto.LoginResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ClientPortfolioEvent.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientPortfolioEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientPortfolioEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientPortfolioEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioEvent.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientportfoliosopenList: jspb.Message.toObjectList(msg.getClientportfoliosopenList(),
    proto.ClientPortfolioEventItem.toObject, includeInstance),
    clientportfolioscloseList: jspb.Message.toObjectList(msg.getClientportfolioscloseList(),
    proto.ClientPortfolioEventItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientPortfolioEvent}
 */
proto.ClientPortfolioEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientPortfolioEvent;
  return proto.ClientPortfolioEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPortfolioEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPortfolioEvent}
 */
proto.ClientPortfolioEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.ClientPortfolioEventItem;
      reader.readMessage(value,proto.ClientPortfolioEventItem.deserializeBinaryFromReader);
      msg.addClientportfoliosopen(value);
      break;
    case 3:
      var value = new proto.ClientPortfolioEventItem;
      reader.readMessage(value,proto.ClientPortfolioEventItem.deserializeBinaryFromReader);
      msg.addClientportfoliosclose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientPortfolioEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientPortfolioEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPortfolioEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientportfoliosopenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ClientPortfolioEventItem.serializeBinaryToWriter
    );
  }
  f = message.getClientportfolioscloseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ClientPortfolioEventItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.ClientPortfolioEvent.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClientPortfolioEvent.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ClientPortfolioEventItem ClientPortfoliosOpen = 2;
 * @return {!Array<!proto.ClientPortfolioEventItem>}
 */
proto.ClientPortfolioEvent.prototype.getClientportfoliosopenList = function() {
  return /** @type{!Array<!proto.ClientPortfolioEventItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ClientPortfolioEventItem, 2));
};


/** @param {!Array<!proto.ClientPortfolioEventItem>} value */
proto.ClientPortfolioEvent.prototype.setClientportfoliosopenList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ClientPortfolioEventItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ClientPortfolioEventItem}
 */
proto.ClientPortfolioEvent.prototype.addClientportfoliosopen = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ClientPortfolioEventItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.ClientPortfolioEvent.prototype.clearClientportfoliosopenList = function() {
  this.setClientportfoliosopenList([]);
};


/**
 * repeated ClientPortfolioEventItem ClientPortfoliosClose = 3;
 * @return {!Array<!proto.ClientPortfolioEventItem>}
 */
proto.ClientPortfolioEvent.prototype.getClientportfolioscloseList = function() {
  return /** @type{!Array<!proto.ClientPortfolioEventItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ClientPortfolioEventItem, 3));
};


/** @param {!Array<!proto.ClientPortfolioEventItem>} value */
proto.ClientPortfolioEvent.prototype.setClientportfolioscloseList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ClientPortfolioEventItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ClientPortfolioEventItem}
 */
proto.ClientPortfolioEvent.prototype.addClientportfoliosclose = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ClientPortfolioEventItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.ClientPortfolioEvent.prototype.clearClientportfolioscloseList = function() {
  this.setClientportfolioscloseList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientPortfolioEventItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientPortfolioEventItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientPortfolioEventItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioEventItem.toObject = function(includeInstance, msg) {
  var obj = {
    martketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    longqty: jspb.Message.getFieldWithDefault(msg, 3, 0),
    shortqty: jspb.Message.getFieldWithDefault(msg, 4, 0),
    net: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    bidavgprice: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    askavgprice: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    tradeprice: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    marketprice: +jspb.Message.getFieldWithDefault(msg, 9, 0.0),
    floatingpl: +jspb.Message.getFieldWithDefault(msg, 10, 0.0),
    tradingpl: +jspb.Message.getFieldWithDefault(msg, 11, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientPortfolioEventItem}
 */
proto.ClientPortfolioEventItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientPortfolioEventItem;
  return proto.ClientPortfolioEventItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPortfolioEventItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPortfolioEventItem}
 */
proto.ClientPortfolioEventItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMartketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongqty(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShortqty(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNet(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidavgprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskavgprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeprice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFloatingpl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradingpl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientPortfolioEventItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientPortfolioEventItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPortfolioEventItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioEventItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMartketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLongqty();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getShortqty();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNet();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getBidavgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getAskavgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getTradeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getMarketprice();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getFloatingpl();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getTradingpl();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * optional string MartketID = 1;
 * @return {string}
 */
proto.ClientPortfolioEventItem.prototype.getMartketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClientPortfolioEventItem.prototype.setMartketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.ClientPortfolioEventItem.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ClientPortfolioEventItem.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 LongQty = 3;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getLongqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setLongqty = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ShortQty = 4;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getShortqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setShortqty = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double Net = 5;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getNet = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setNet = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double BidAvgPrice = 6;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getBidavgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setBidavgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double AskAvgPrice = 7;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getAskavgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setAskavgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double TradePrice = 8;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getTradeprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setTradeprice = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double MarketPrice = 9;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getMarketprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setMarketprice = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double FloatingPL = 10;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getFloatingpl = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setFloatingpl = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double TradingPL = 11;
 * @return {number}
 */
proto.ClientPortfolioEventItem.prototype.getTradingpl = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.ClientPortfolioEventItem.prototype.setTradingpl = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.EventBase.oneofGroups_ = [[12]];

/**
 * @enum {number}
 */
proto.EventBase.SubtypeCase = {
  SUBTYPE_NOT_SET: 0,
  NOTIFYEVENT: 12
};

/**
 * @return {proto.EventBase.SubtypeCase}
 */
proto.EventBase.prototype.getSubtypeCase = function() {
  return /** @type {proto.EventBase.SubtypeCase} */(jspb.Message.computeOneofCase(this, proto.EventBase.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EventBase.prototype.toObject = function(opt_includeInstance) {
  return proto.EventBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EventBase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventBase.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    uniqueid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 5, ""),
    notifyevent: (f = msg.getNotifyevent()) && proto.NotifyEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EventBase}
 */
proto.EventBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EventBase;
  return proto.EventBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EventBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EventBase}
 */
proto.EventBase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 12:
      var value = new proto.NotifyEvent;
      reader.readMessage(value,proto.NotifyEvent.deserializeBinaryFromReader);
      msg.setNotifyevent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EventBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EventBase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EventBase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventBase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getUniqueid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNotifyevent();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.NotifyEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.EventBase.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.EventBase.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.EventBase.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.EventBase.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string UniqueID = 2;
 * @return {string}
 */
proto.EventBase.prototype.getUniqueid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.EventBase.prototype.setUniqueid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string IPAddress = 4;
 * @return {string}
 */
proto.EventBase.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.EventBase.prototype.setIpaddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Prefix = 5;
 * @return {string}
 */
proto.EventBase.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.EventBase.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional NotifyEvent NotifyEvent = 12;
 * @return {?proto.NotifyEvent}
 */
proto.EventBase.prototype.getNotifyevent = function() {
  return /** @type{?proto.NotifyEvent} */ (
    jspb.Message.getWrapperField(this, proto.NotifyEvent, 12));
};


/** @param {?proto.NotifyEvent|undefined} value */
proto.EventBase.prototype.setNotifyevent = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.EventBase.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.EventBase.prototype.clearNotifyevent = function() {
  this.setNotifyevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EventBase.prototype.hasNotifyevent = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.NewOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrder.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewOrder}
 */
proto.NewOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewOrder;
  return proto.NewOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewOrder}
 */
proto.NewOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.NotifyEvent.oneofGroups_ = [[10,11,12]];

/**
 * @enum {number}
 */
proto.NotifyEvent.SubtypeCase = {
  SUBTYPE_NOT_SET: 0,
  ORDEREVENT: 10,
  ORDERERROR: 11,
  CLIENTPORTFOLIOEVENT: 12
};

/**
 * @return {proto.NotifyEvent.SubtypeCase}
 */
proto.NotifyEvent.prototype.getSubtypeCase = function() {
  return /** @type {proto.NotifyEvent.SubtypeCase} */(jspb.Message.computeOneofCase(this, proto.NotifyEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NotifyEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.NotifyEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NotifyEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NotifyEvent.toObject = function(includeInstance, msg) {
  var obj = {
    notifyid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    orderevent: (f = msg.getOrderevent()) && proto.OrderEvent.toObject(includeInstance, f),
    ordererror: (f = msg.getOrdererror()) && proto.OrderError.toObject(includeInstance, f),
    clientportfolioevent: (f = msg.getClientportfolioevent()) && proto.ClientPortfolioEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NotifyEvent}
 */
proto.NotifyEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NotifyEvent;
  return proto.NotifyEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NotifyEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NotifyEvent}
 */
proto.NotifyEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNotifyid(value);
      break;
    case 10:
      var value = new proto.OrderEvent;
      reader.readMessage(value,proto.OrderEvent.deserializeBinaryFromReader);
      msg.setOrderevent(value);
      break;
    case 11:
      var value = new proto.OrderError;
      reader.readMessage(value,proto.OrderError.deserializeBinaryFromReader);
      msg.setOrdererror(value);
      break;
    case 12:
      var value = new proto.ClientPortfolioEvent;
      reader.readMessage(value,proto.ClientPortfolioEvent.deserializeBinaryFromReader);
      msg.setClientportfolioevent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NotifyEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NotifyEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NotifyEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NotifyEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotifyid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOrderevent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.OrderEvent.serializeBinaryToWriter
    );
  }
  f = message.getOrdererror();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.OrderError.serializeBinaryToWriter
    );
  }
  f = message.getClientportfolioevent();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ClientPortfolioEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 NotifyID = 1;
 * @return {number}
 */
proto.NotifyEvent.prototype.getNotifyid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.NotifyEvent.prototype.setNotifyid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional OrderEvent OrderEvent = 10;
 * @return {?proto.OrderEvent}
 */
proto.NotifyEvent.prototype.getOrderevent = function() {
  return /** @type{?proto.OrderEvent} */ (
    jspb.Message.getWrapperField(this, proto.OrderEvent, 10));
};


/** @param {?proto.OrderEvent|undefined} value */
proto.NotifyEvent.prototype.setOrderevent = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.NotifyEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.NotifyEvent.prototype.clearOrderevent = function() {
  this.setOrderevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotifyEvent.prototype.hasOrderevent = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional OrderError OrderError = 11;
 * @return {?proto.OrderError}
 */
proto.NotifyEvent.prototype.getOrdererror = function() {
  return /** @type{?proto.OrderError} */ (
    jspb.Message.getWrapperField(this, proto.OrderError, 11));
};


/** @param {?proto.OrderError|undefined} value */
proto.NotifyEvent.prototype.setOrdererror = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.NotifyEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.NotifyEvent.prototype.clearOrdererror = function() {
  this.setOrdererror(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotifyEvent.prototype.hasOrdererror = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ClientPortfolioEvent ClientPortfolioEvent = 12;
 * @return {?proto.ClientPortfolioEvent}
 */
proto.NotifyEvent.prototype.getClientportfolioevent = function() {
  return /** @type{?proto.ClientPortfolioEvent} */ (
    jspb.Message.getWrapperField(this, proto.ClientPortfolioEvent, 12));
};


/** @param {?proto.ClientPortfolioEvent|undefined} value */
proto.NotifyEvent.prototype.setClientportfolioevent = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.NotifyEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.NotifyEvent.prototype.clearClientportfolioevent = function() {
  this.setClientportfolioevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NotifyEvent.prototype.hasClientportfolioevent = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderCanceled.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderCanceled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderCanceled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderCanceled.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderCanceled}
 */
proto.OrderCanceled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderCanceled;
  return proto.OrderCanceled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderCanceled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderCanceled}
 */
proto.OrderCanceled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderCanceled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderCanceled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderCanceled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderCanceled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderError.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderError.toObject = function(includeInstance, msg) {
  var obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderError}
 */
proto.OrderError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderError;
  return proto.OrderError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderError}
 */
proto.OrderError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrorcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Message = 1;
 * @return {string}
 */
proto.OrderError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.OrderError.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ErrorCode = 2;
 * @return {string}
 */
proto.OrderError.prototype.getErrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.OrderError.prototype.setErrorcode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.OrderEvent.oneofGroups_ = [[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]];

/**
 * @enum {number}
 */
proto.OrderEvent.SubtypeCase = {
  SUBTYPE_NOT_SET: 0,
  NEWORDER: 20,
  ORDERCANCELED: 21,
  ORDERFULLYFILLED: 22,
  ORDERPENDINGAPPROVAL: 23,
  ORDERSTOPPRESESSION: 24,
  ORDERQUEUED: 25,
  ORDERREJECTED: 26,
  ORDERPRESESSION: 27,
  ORDERPARTIALLYFILLED: 28,
  ORDERPENDINGCANCEL: 29,
  ORDERPENDINGMODIFY: 30,
  ORDERSENDING: 31,
  ORDERFULLYFILLEDPARTIALLYCANCELLED: 32,
  ORDEREXPIRED: 33,
  ORDERSTOPREADY: 34,
  ORDERSTOPSENT: 35,
  STOPORDERPENDINGAPPROVAL: 36
};

/**
 * @return {proto.OrderEvent.SubtypeCase}
 */
proto.OrderEvent.prototype.getSubtypeCase = function() {
  return /** @type {proto.OrderEvent.SubtypeCase} */(jspb.Message.computeOneofCase(this, proto.OrderEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderEvent.toObject = function(includeInstance, msg) {
  var obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    marketid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    origorderid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    account: jspb.Message.getFieldWithDefault(msg, 9, ""),
    cancelqty: jspb.Message.getFieldWithDefault(msg, 10, 0),
    osqty: jspb.Message.getFieldWithDefault(msg, 11, 0),
    filledqty: jspb.Message.getFieldWithDefault(msg, 12, 0),
    avgprice: +jspb.Message.getFieldWithDefault(msg, 13, 0.0),
    channel: jspb.Message.getFieldWithDefault(msg, 14, ""),
    inputtime: jspb.Message.getFieldWithDefault(msg, 15, ""),
    modifiedtime: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isforcesell: jspb.Message.getFieldWithDefault(msg, 17, ""),
    isshortsell: jspb.Message.getFieldWithDefault(msg, 18, ""),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 19, ""),
    rejectreason: jspb.Message.getFieldWithDefault(msg, 40, ""),
    origrequestid: jspb.Message.getFieldWithDefault(msg, 41, ""),
    stoporder: jspb.Message.getFieldWithDefault(msg, 42, false),
    stopprice: +jspb.Message.getFieldWithDefault(msg, 43, 0.0),
    stoptype: jspb.Message.getFieldWithDefault(msg, 44, ""),
    stopstep: +jspb.Message.getFieldWithDefault(msg, 45, 0.0),
    profitprice: +jspb.Message.getFieldWithDefault(msg, 46, 0.0),
    neworder: (f = msg.getNeworder()) && proto.NewOrder.toObject(includeInstance, f),
    ordercanceled: (f = msg.getOrdercanceled()) && proto.OrderCanceled.toObject(includeInstance, f),
    orderfullyfilled: (f = msg.getOrderfullyfilled()) && proto.OrderFullyFilled.toObject(includeInstance, f),
    orderpendingapproval: (f = msg.getOrderpendingapproval()) && proto.OrderPendingApproval.toObject(includeInstance, f),
    orderstoppresession: (f = msg.getOrderstoppresession()) && proto.OrderStopPreSession.toObject(includeInstance, f),
    orderqueued: (f = msg.getOrderqueued()) && proto.OrderQueued.toObject(includeInstance, f),
    orderrejected: (f = msg.getOrderrejected()) && proto.OrderRejected.toObject(includeInstance, f),
    orderpresession: (f = msg.getOrderpresession()) && proto.OrderPreSession.toObject(includeInstance, f),
    orderpartiallyfilled: (f = msg.getOrderpartiallyfilled()) && proto.OrderPartiallyFilled.toObject(includeInstance, f),
    orderpendingcancel: (f = msg.getOrderpendingcancel()) && proto.OrderPendingCancel.toObject(includeInstance, f),
    orderpendingmodify: (f = msg.getOrderpendingmodify()) && proto.OrderPendingModify.toObject(includeInstance, f),
    ordersending: (f = msg.getOrdersending()) && proto.OrderSending.toObject(includeInstance, f),
    orderfullyfilledpartiallycancelled: (f = msg.getOrderfullyfilledpartiallycancelled()) && proto.OrderFullyFilledPartiallyCancelled.toObject(includeInstance, f),
    orderexpired: (f = msg.getOrderexpired()) && proto.OrderExpired.toObject(includeInstance, f),
    orderstopready: (f = msg.getOrderstopready()) && proto.OrderStopReady.toObject(includeInstance, f),
    orderstopsent: (f = msg.getOrderstopsent()) && proto.OrderStopSent.toObject(includeInstance, f),
    stoporderpendingapproval: (f = msg.getStoporderpendingapproval()) && proto.StopOrderPendingApproval.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderEvent}
 */
proto.OrderEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderEvent;
  return proto.OrderEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderEvent}
 */
proto.OrderEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrigorderid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelqty(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOsqty(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilledqty(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputtime(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedtime(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsforcesell(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsshortsell(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderstatus(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejectreason(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrigrequestid(value);
      break;
    case 42:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStoporder(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoptype(value);
      break;
    case 45:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopstep(value);
      break;
    case 46:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfitprice(value);
      break;
    case 20:
      var value = new proto.NewOrder;
      reader.readMessage(value,proto.NewOrder.deserializeBinaryFromReader);
      msg.setNeworder(value);
      break;
    case 21:
      var value = new proto.OrderCanceled;
      reader.readMessage(value,proto.OrderCanceled.deserializeBinaryFromReader);
      msg.setOrdercanceled(value);
      break;
    case 22:
      var value = new proto.OrderFullyFilled;
      reader.readMessage(value,proto.OrderFullyFilled.deserializeBinaryFromReader);
      msg.setOrderfullyfilled(value);
      break;
    case 23:
      var value = new proto.OrderPendingApproval;
      reader.readMessage(value,proto.OrderPendingApproval.deserializeBinaryFromReader);
      msg.setOrderpendingapproval(value);
      break;
    case 24:
      var value = new proto.OrderStopPreSession;
      reader.readMessage(value,proto.OrderStopPreSession.deserializeBinaryFromReader);
      msg.setOrderstoppresession(value);
      break;
    case 25:
      var value = new proto.OrderQueued;
      reader.readMessage(value,proto.OrderQueued.deserializeBinaryFromReader);
      msg.setOrderqueued(value);
      break;
    case 26:
      var value = new proto.OrderRejected;
      reader.readMessage(value,proto.OrderRejected.deserializeBinaryFromReader);
      msg.setOrderrejected(value);
      break;
    case 27:
      var value = new proto.OrderPreSession;
      reader.readMessage(value,proto.OrderPreSession.deserializeBinaryFromReader);
      msg.setOrderpresession(value);
      break;
    case 28:
      var value = new proto.OrderPartiallyFilled;
      reader.readMessage(value,proto.OrderPartiallyFilled.deserializeBinaryFromReader);
      msg.setOrderpartiallyfilled(value);
      break;
    case 29:
      var value = new proto.OrderPendingCancel;
      reader.readMessage(value,proto.OrderPendingCancel.deserializeBinaryFromReader);
      msg.setOrderpendingcancel(value);
      break;
    case 30:
      var value = new proto.OrderPendingModify;
      reader.readMessage(value,proto.OrderPendingModify.deserializeBinaryFromReader);
      msg.setOrderpendingmodify(value);
      break;
    case 31:
      var value = new proto.OrderSending;
      reader.readMessage(value,proto.OrderSending.deserializeBinaryFromReader);
      msg.setOrdersending(value);
      break;
    case 32:
      var value = new proto.OrderFullyFilledPartiallyCancelled;
      reader.readMessage(value,proto.OrderFullyFilledPartiallyCancelled.deserializeBinaryFromReader);
      msg.setOrderfullyfilledpartiallycancelled(value);
      break;
    case 33:
      var value = new proto.OrderExpired;
      reader.readMessage(value,proto.OrderExpired.deserializeBinaryFromReader);
      msg.setOrderexpired(value);
      break;
    case 34:
      var value = new proto.OrderStopReady;
      reader.readMessage(value,proto.OrderStopReady.deserializeBinaryFromReader);
      msg.setOrderstopready(value);
      break;
    case 35:
      var value = new proto.OrderStopSent;
      reader.readMessage(value,proto.OrderStopSent.deserializeBinaryFromReader);
      msg.setOrderstopsent(value);
      break;
    case 36:
      var value = new proto.StopOrderPendingApproval;
      reader.readMessage(value,proto.StopOrderPendingApproval.deserializeBinaryFromReader);
      msg.setStoporderpendingapproval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrigorderid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCancelqty();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getOsqty();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFilledqty();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getInputtime();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getModifiedtime();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsforcesell();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIsshortsell();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getOrderstatus();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getRejectreason();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getOrigrequestid();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getStoporder();
  if (f) {
    writer.writeBool(
      42,
      f
    );
  }
  f = message.getStopprice();
  if (f !== 0.0) {
    writer.writeDouble(
      43,
      f
    );
  }
  f = message.getStoptype();
  if (f.length > 0) {
    writer.writeString(
      44,
      f
    );
  }
  f = message.getStopstep();
  if (f !== 0.0) {
    writer.writeDouble(
      45,
      f
    );
  }
  f = message.getProfitprice();
  if (f !== 0.0) {
    writer.writeDouble(
      46,
      f
    );
  }
  f = message.getNeworder();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.NewOrder.serializeBinaryToWriter
    );
  }
  f = message.getOrdercanceled();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.OrderCanceled.serializeBinaryToWriter
    );
  }
  f = message.getOrderfullyfilled();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.OrderFullyFilled.serializeBinaryToWriter
    );
  }
  f = message.getOrderpendingapproval();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.OrderPendingApproval.serializeBinaryToWriter
    );
  }
  f = message.getOrderstoppresession();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.OrderStopPreSession.serializeBinaryToWriter
    );
  }
  f = message.getOrderqueued();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.OrderQueued.serializeBinaryToWriter
    );
  }
  f = message.getOrderrejected();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.OrderRejected.serializeBinaryToWriter
    );
  }
  f = message.getOrderpresession();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.OrderPreSession.serializeBinaryToWriter
    );
  }
  f = message.getOrderpartiallyfilled();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.OrderPartiallyFilled.serializeBinaryToWriter
    );
  }
  f = message.getOrderpendingcancel();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.OrderPendingCancel.serializeBinaryToWriter
    );
  }
  f = message.getOrderpendingmodify();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.OrderPendingModify.serializeBinaryToWriter
    );
  }
  f = message.getOrdersending();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.OrderSending.serializeBinaryToWriter
    );
  }
  f = message.getOrderfullyfilledpartiallycancelled();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.OrderFullyFilledPartiallyCancelled.serializeBinaryToWriter
    );
  }
  f = message.getOrderexpired();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.OrderExpired.serializeBinaryToWriter
    );
  }
  f = message.getOrderstopready();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.OrderStopReady.serializeBinaryToWriter
    );
  }
  f = message.getOrderstopsent();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.OrderStopSent.serializeBinaryToWriter
    );
  }
  f = message.getStoporderpendingapproval();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.StopOrderPendingApproval.serializeBinaryToWriter
    );
  }
};


/**
 * optional string OrderID = 1;
 * @return {string}
 */
proto.OrderEvent.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.OrderEvent.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BuySell = 3;
 * @return {string}
 */
proto.OrderEvent.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string OrderType = 4;
 * @return {string}
 */
proto.OrderEvent.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double Price = 5;
 * @return {number}
 */
proto.OrderEvent.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 Quantity = 6;
 * @return {number}
 */
proto.OrderEvent.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string MarketID = 7;
 * @return {string}
 */
proto.OrderEvent.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string OrigOrderId = 8;
 * @return {string}
 */
proto.OrderEvent.prototype.getOrigorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setOrigorderid = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Account = 9;
 * @return {string}
 */
proto.OrderEvent.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 CancelQty = 10;
 * @return {number}
 */
proto.OrderEvent.prototype.getCancelqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setCancelqty = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 OsQty = 11;
 * @return {number}
 */
proto.OrderEvent.prototype.getOsqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setOsqty = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 FilledQty = 12;
 * @return {number}
 */
proto.OrderEvent.prototype.getFilledqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setFilledqty = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double AvgPrice = 13;
 * @return {number}
 */
proto.OrderEvent.prototype.getAvgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setAvgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string Channel = 14;
 * @return {string}
 */
proto.OrderEvent.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setChannel = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string InputTime = 15;
 * @return {string}
 */
proto.OrderEvent.prototype.getInputtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setInputtime = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string ModifiedTime = 16;
 * @return {string}
 */
proto.OrderEvent.prototype.getModifiedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setModifiedtime = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string IsForceSell = 17;
 * @return {string}
 */
proto.OrderEvent.prototype.getIsforcesell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setIsforcesell = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string IsShortSell = 18;
 * @return {string}
 */
proto.OrderEvent.prototype.getIsshortsell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setIsshortsell = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string OrderStatus = 19;
 * @return {string}
 */
proto.OrderEvent.prototype.getOrderstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setOrderstatus = function(value) {
  jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string RejectReason = 40;
 * @return {string}
 */
proto.OrderEvent.prototype.getRejectreason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setRejectreason = function(value) {
  jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional string OrigRequestID = 41;
 * @return {string}
 */
proto.OrderEvent.prototype.getOrigrequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setOrigrequestid = function(value) {
  jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional bool StopOrder = 42;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.OrderEvent.prototype.getStoporder = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 42, false));
};


/** @param {boolean} value */
proto.OrderEvent.prototype.setStoporder = function(value) {
  jspb.Message.setProto3BooleanField(this, 42, value);
};


/**
 * optional double StopPrice = 43;
 * @return {number}
 */
proto.OrderEvent.prototype.getStopprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 43, 0.0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setStopprice = function(value) {
  jspb.Message.setProto3FloatField(this, 43, value);
};


/**
 * optional string StopType = 44;
 * @return {string}
 */
proto.OrderEvent.prototype.getStoptype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/** @param {string} value */
proto.OrderEvent.prototype.setStoptype = function(value) {
  jspb.Message.setProto3StringField(this, 44, value);
};


/**
 * optional double StopStep = 45;
 * @return {number}
 */
proto.OrderEvent.prototype.getStopstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 45, 0.0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setStopstep = function(value) {
  jspb.Message.setProto3FloatField(this, 45, value);
};


/**
 * optional double ProfitPrice = 46;
 * @return {number}
 */
proto.OrderEvent.prototype.getProfitprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 46, 0.0));
};


/** @param {number} value */
proto.OrderEvent.prototype.setProfitprice = function(value) {
  jspb.Message.setProto3FloatField(this, 46, value);
};


/**
 * optional NewOrder NewOrder = 20;
 * @return {?proto.NewOrder}
 */
proto.OrderEvent.prototype.getNeworder = function() {
  return /** @type{?proto.NewOrder} */ (
    jspb.Message.getWrapperField(this, proto.NewOrder, 20));
};


/** @param {?proto.NewOrder|undefined} value */
proto.OrderEvent.prototype.setNeworder = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearNeworder = function() {
  this.setNeworder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasNeworder = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional OrderCanceled OrderCanceled = 21;
 * @return {?proto.OrderCanceled}
 */
proto.OrderEvent.prototype.getOrdercanceled = function() {
  return /** @type{?proto.OrderCanceled} */ (
    jspb.Message.getWrapperField(this, proto.OrderCanceled, 21));
};


/** @param {?proto.OrderCanceled|undefined} value */
proto.OrderEvent.prototype.setOrdercanceled = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrdercanceled = function() {
  this.setOrdercanceled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrdercanceled = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional OrderFullyFilled OrderFullyFilled = 22;
 * @return {?proto.OrderFullyFilled}
 */
proto.OrderEvent.prototype.getOrderfullyfilled = function() {
  return /** @type{?proto.OrderFullyFilled} */ (
    jspb.Message.getWrapperField(this, proto.OrderFullyFilled, 22));
};


/** @param {?proto.OrderFullyFilled|undefined} value */
proto.OrderEvent.prototype.setOrderfullyfilled = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderfullyfilled = function() {
  this.setOrderfullyfilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderfullyfilled = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional OrderPendingApproval OrderPendingApproval = 23;
 * @return {?proto.OrderPendingApproval}
 */
proto.OrderEvent.prototype.getOrderpendingapproval = function() {
  return /** @type{?proto.OrderPendingApproval} */ (
    jspb.Message.getWrapperField(this, proto.OrderPendingApproval, 23));
};


/** @param {?proto.OrderPendingApproval|undefined} value */
proto.OrderEvent.prototype.setOrderpendingapproval = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderpendingapproval = function() {
  this.setOrderpendingapproval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderpendingapproval = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional OrderStopPreSession OrderStopPreSession = 24;
 * @return {?proto.OrderStopPreSession}
 */
proto.OrderEvent.prototype.getOrderstoppresession = function() {
  return /** @type{?proto.OrderStopPreSession} */ (
    jspb.Message.getWrapperField(this, proto.OrderStopPreSession, 24));
};


/** @param {?proto.OrderStopPreSession|undefined} value */
proto.OrderEvent.prototype.setOrderstoppresession = function(value) {
  jspb.Message.setOneofWrapperField(this, 24, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderstoppresession = function() {
  this.setOrderstoppresession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderstoppresession = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional OrderQueued OrderQueued = 25;
 * @return {?proto.OrderQueued}
 */
proto.OrderEvent.prototype.getOrderqueued = function() {
  return /** @type{?proto.OrderQueued} */ (
    jspb.Message.getWrapperField(this, proto.OrderQueued, 25));
};


/** @param {?proto.OrderQueued|undefined} value */
proto.OrderEvent.prototype.setOrderqueued = function(value) {
  jspb.Message.setOneofWrapperField(this, 25, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderqueued = function() {
  this.setOrderqueued(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderqueued = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional OrderRejected OrderRejected = 26;
 * @return {?proto.OrderRejected}
 */
proto.OrderEvent.prototype.getOrderrejected = function() {
  return /** @type{?proto.OrderRejected} */ (
    jspb.Message.getWrapperField(this, proto.OrderRejected, 26));
};


/** @param {?proto.OrderRejected|undefined} value */
proto.OrderEvent.prototype.setOrderrejected = function(value) {
  jspb.Message.setOneofWrapperField(this, 26, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderrejected = function() {
  this.setOrderrejected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderrejected = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional OrderPreSession OrderPreSession = 27;
 * @return {?proto.OrderPreSession}
 */
proto.OrderEvent.prototype.getOrderpresession = function() {
  return /** @type{?proto.OrderPreSession} */ (
    jspb.Message.getWrapperField(this, proto.OrderPreSession, 27));
};


/** @param {?proto.OrderPreSession|undefined} value */
proto.OrderEvent.prototype.setOrderpresession = function(value) {
  jspb.Message.setOneofWrapperField(this, 27, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderpresession = function() {
  this.setOrderpresession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderpresession = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional OrderPartiallyFilled OrderPartiallyFilled = 28;
 * @return {?proto.OrderPartiallyFilled}
 */
proto.OrderEvent.prototype.getOrderpartiallyfilled = function() {
  return /** @type{?proto.OrderPartiallyFilled} */ (
    jspb.Message.getWrapperField(this, proto.OrderPartiallyFilled, 28));
};


/** @param {?proto.OrderPartiallyFilled|undefined} value */
proto.OrderEvent.prototype.setOrderpartiallyfilled = function(value) {
  jspb.Message.setOneofWrapperField(this, 28, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderpartiallyfilled = function() {
  this.setOrderpartiallyfilled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderpartiallyfilled = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional OrderPendingCancel OrderPendingCancel = 29;
 * @return {?proto.OrderPendingCancel}
 */
proto.OrderEvent.prototype.getOrderpendingcancel = function() {
  return /** @type{?proto.OrderPendingCancel} */ (
    jspb.Message.getWrapperField(this, proto.OrderPendingCancel, 29));
};


/** @param {?proto.OrderPendingCancel|undefined} value */
proto.OrderEvent.prototype.setOrderpendingcancel = function(value) {
  jspb.Message.setOneofWrapperField(this, 29, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderpendingcancel = function() {
  this.setOrderpendingcancel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderpendingcancel = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional OrderPendingModify OrderPendingModify = 30;
 * @return {?proto.OrderPendingModify}
 */
proto.OrderEvent.prototype.getOrderpendingmodify = function() {
  return /** @type{?proto.OrderPendingModify} */ (
    jspb.Message.getWrapperField(this, proto.OrderPendingModify, 30));
};


/** @param {?proto.OrderPendingModify|undefined} value */
proto.OrderEvent.prototype.setOrderpendingmodify = function(value) {
  jspb.Message.setOneofWrapperField(this, 30, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderpendingmodify = function() {
  this.setOrderpendingmodify(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderpendingmodify = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional OrderSending OrderSending = 31;
 * @return {?proto.OrderSending}
 */
proto.OrderEvent.prototype.getOrdersending = function() {
  return /** @type{?proto.OrderSending} */ (
    jspb.Message.getWrapperField(this, proto.OrderSending, 31));
};


/** @param {?proto.OrderSending|undefined} value */
proto.OrderEvent.prototype.setOrdersending = function(value) {
  jspb.Message.setOneofWrapperField(this, 31, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrdersending = function() {
  this.setOrdersending(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrdersending = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional OrderFullyFilledPartiallyCancelled OrderFullyFilledPartiallyCancelled = 32;
 * @return {?proto.OrderFullyFilledPartiallyCancelled}
 */
proto.OrderEvent.prototype.getOrderfullyfilledpartiallycancelled = function() {
  return /** @type{?proto.OrderFullyFilledPartiallyCancelled} */ (
    jspb.Message.getWrapperField(this, proto.OrderFullyFilledPartiallyCancelled, 32));
};


/** @param {?proto.OrderFullyFilledPartiallyCancelled|undefined} value */
proto.OrderEvent.prototype.setOrderfullyfilledpartiallycancelled = function(value) {
  jspb.Message.setOneofWrapperField(this, 32, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderfullyfilledpartiallycancelled = function() {
  this.setOrderfullyfilledpartiallycancelled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderfullyfilledpartiallycancelled = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional OrderExpired OrderExpired = 33;
 * @return {?proto.OrderExpired}
 */
proto.OrderEvent.prototype.getOrderexpired = function() {
  return /** @type{?proto.OrderExpired} */ (
    jspb.Message.getWrapperField(this, proto.OrderExpired, 33));
};


/** @param {?proto.OrderExpired|undefined} value */
proto.OrderEvent.prototype.setOrderexpired = function(value) {
  jspb.Message.setOneofWrapperField(this, 33, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderexpired = function() {
  this.setOrderexpired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderexpired = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional OrderStopReady OrderStopReady = 34;
 * @return {?proto.OrderStopReady}
 */
proto.OrderEvent.prototype.getOrderstopready = function() {
  return /** @type{?proto.OrderStopReady} */ (
    jspb.Message.getWrapperField(this, proto.OrderStopReady, 34));
};


/** @param {?proto.OrderStopReady|undefined} value */
proto.OrderEvent.prototype.setOrderstopready = function(value) {
  jspb.Message.setOneofWrapperField(this, 34, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderstopready = function() {
  this.setOrderstopready(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderstopready = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional OrderStopSent OrderStopSent = 35;
 * @return {?proto.OrderStopSent}
 */
proto.OrderEvent.prototype.getOrderstopsent = function() {
  return /** @type{?proto.OrderStopSent} */ (
    jspb.Message.getWrapperField(this, proto.OrderStopSent, 35));
};


/** @param {?proto.OrderStopSent|undefined} value */
proto.OrderEvent.prototype.setOrderstopsent = function(value) {
  jspb.Message.setOneofWrapperField(this, 35, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearOrderstopsent = function() {
  this.setOrderstopsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasOrderstopsent = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional StopOrderPendingApproval StopOrderPendingApproval = 36;
 * @return {?proto.StopOrderPendingApproval}
 */
proto.OrderEvent.prototype.getStoporderpendingapproval = function() {
  return /** @type{?proto.StopOrderPendingApproval} */ (
    jspb.Message.getWrapperField(this, proto.StopOrderPendingApproval, 36));
};


/** @param {?proto.StopOrderPendingApproval|undefined} value */
proto.OrderEvent.prototype.setStoporderpendingapproval = function(value) {
  jspb.Message.setOneofWrapperField(this, 36, proto.OrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.OrderEvent.prototype.clearStoporderpendingapproval = function() {
  this.setStoporderpendingapproval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OrderEvent.prototype.hasStoporderpendingapproval = function() {
  return jspb.Message.getField(this, 36) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderExpired.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderExpired.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderExpired} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderExpired.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderExpired}
 */
proto.OrderExpired.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderExpired;
  return proto.OrderExpired.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderExpired} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderExpired}
 */
proto.OrderExpired.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderExpired.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderExpired.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderExpired} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderExpired.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderFullyFilled.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderFullyFilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderFullyFilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderFullyFilled.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderFullyFilled}
 */
proto.OrderFullyFilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderFullyFilled;
  return proto.OrderFullyFilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderFullyFilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderFullyFilled}
 */
proto.OrderFullyFilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderFullyFilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderFullyFilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderFullyFilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderFullyFilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderFullyFilledPartiallyCancelled.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderFullyFilledPartiallyCancelled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderFullyFilledPartiallyCancelled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderFullyFilledPartiallyCancelled.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderFullyFilledPartiallyCancelled}
 */
proto.OrderFullyFilledPartiallyCancelled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderFullyFilledPartiallyCancelled;
  return proto.OrderFullyFilledPartiallyCancelled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderFullyFilledPartiallyCancelled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderFullyFilledPartiallyCancelled}
 */
proto.OrderFullyFilledPartiallyCancelled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderFullyFilledPartiallyCancelled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderFullyFilledPartiallyCancelled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderFullyFilledPartiallyCancelled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderFullyFilledPartiallyCancelled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderPartiallyFilled.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderPartiallyFilled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderPartiallyFilled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPartiallyFilled.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderPartiallyFilled}
 */
proto.OrderPartiallyFilled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderPartiallyFilled;
  return proto.OrderPartiallyFilled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderPartiallyFilled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderPartiallyFilled}
 */
proto.OrderPartiallyFilled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderPartiallyFilled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderPartiallyFilled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderPartiallyFilled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPartiallyFilled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderPendingApproval.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderPendingApproval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderPendingApproval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingApproval.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderPendingApproval}
 */
proto.OrderPendingApproval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderPendingApproval;
  return proto.OrderPendingApproval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderPendingApproval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderPendingApproval}
 */
proto.OrderPendingApproval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderPendingApproval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderPendingApproval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderPendingApproval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingApproval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderPendingCancel.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderPendingCancel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderPendingCancel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingCancel.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderPendingCancel}
 */
proto.OrderPendingCancel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderPendingCancel;
  return proto.OrderPendingCancel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderPendingCancel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderPendingCancel}
 */
proto.OrderPendingCancel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderPendingCancel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderPendingCancel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderPendingCancel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingCancel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderPendingModify.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderPendingModify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderPendingModify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingModify.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderPendingModify}
 */
proto.OrderPendingModify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderPendingModify;
  return proto.OrderPendingModify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderPendingModify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderPendingModify}
 */
proto.OrderPendingModify.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderPendingModify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderPendingModify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderPendingModify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPendingModify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderPreSession.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderPreSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderPreSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPreSession.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderPreSession}
 */
proto.OrderPreSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderPreSession;
  return proto.OrderPreSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderPreSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderPreSession}
 */
proto.OrderPreSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderPreSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderPreSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderPreSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderPreSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderQueued.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderQueued.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderQueued} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderQueued.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderQueued}
 */
proto.OrderQueued.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderQueued;
  return proto.OrderQueued.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderQueued} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderQueued}
 */
proto.OrderQueued.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderQueued.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderQueued.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderQueued} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderQueued.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderRejected.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderRejected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderRejected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderRejected.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderRejected}
 */
proto.OrderRejected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderRejected;
  return proto.OrderRejected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderRejected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderRejected}
 */
proto.OrderRejected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderRejected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderRejected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderRejected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderRejected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderSending.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderSending.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderSending} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderSending.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderSending}
 */
proto.OrderSending.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderSending;
  return proto.OrderSending.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderSending} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderSending}
 */
proto.OrderSending.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderSending.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderSending.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderSending} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderSending.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderStopPreSession.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderStopPreSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderStopPreSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopPreSession.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderStopPreSession}
 */
proto.OrderStopPreSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderStopPreSession;
  return proto.OrderStopPreSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderStopPreSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderStopPreSession}
 */
proto.OrderStopPreSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderStopPreSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderStopPreSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderStopPreSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopPreSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderStopReady.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderStopReady.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderStopReady} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopReady.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderStopReady}
 */
proto.OrderStopReady.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderStopReady;
  return proto.OrderStopReady.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderStopReady} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderStopReady}
 */
proto.OrderStopReady.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderStopReady.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderStopReady.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderStopReady} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopReady.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderStopSent.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderStopSent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderStopSent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopSent.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderStopSent}
 */
proto.OrderStopSent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderStopSent;
  return proto.OrderStopSent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderStopSent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderStopSent}
 */
proto.OrderStopSent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderStopSent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderStopSent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderStopSent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderStopSent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopOrderPendingApproval.prototype.toObject = function(opt_includeInstance) {
  return proto.StopOrderPendingApproval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopOrderPendingApproval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopOrderPendingApproval.toObject = function(includeInstance, msg) {
  var obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopOrderPendingApproval}
 */
proto.StopOrderPendingApproval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopOrderPendingApproval;
  return proto.StopOrderPendingApproval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopOrderPendingApproval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopOrderPendingApproval}
 */
proto.StopOrderPendingApproval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopOrderPendingApproval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopOrderPendingApproval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopOrderPendingApproval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopOrderPendingApproval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    dicMap: (f = msg.getDicMap()) ? f.toObject(includeInstance, undefined) : [],
    key: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Request}
 */
proto.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Request;
  return proto.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Request}
 */
proto.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = msg.getDicMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDicMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Request.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Request.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Request.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Request.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * map<string, string> Dic = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Request.prototype.getDicMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.Request.prototype.clearDicMap = function() {
  this.getDicMap().clear();
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.Request.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Request.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderRequest.toObject = function(includeInstance, msg) {
  var obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    session: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pin: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelOrderRequest}
 */
proto.CancelOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelOrderRequest;
  return proto.CancelOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelOrderRequest}
 */
proto.CancelOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string OrderID = 1;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Account = 2;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string MarketID = 3;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string InstrumentID = 4;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string BuySell = 5;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string RequestID = 6;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Session = 7;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Pin = 8;
 * @return {string}
 */
proto.CancelOrderRequest.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.CancelOrderRequest.prototype.setPin = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderRequest.toObject = function(includeInstance, msg) {
  var obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    account: jspb.Message.getFieldWithDefault(msg, 4, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 7, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 9, ""),
    session: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pin: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyOrderRequest}
 */
proto.ModifyOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyOrderRequest;
  return proto.ModifyOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyOrderRequest}
 */
proto.ModifyOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string OrderID = 1;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.ModifyOrderRequest.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ModifyOrderRequest.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 Quantity = 3;
 * @return {number}
 */
proto.ModifyOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ModifyOrderRequest.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Account = 4;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string InstrumentID = 5;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string MarketID = 6;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string BuySell = 7;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string RequestID = 8;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string OrderType = 9;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Session = 10;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Pin = 11;
 * @return {string}
 */
proto.ModifyOrderRequest.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.ModifyOrderRequest.prototype.setPin = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.NewOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderRequest.toObject = function(includeInstance, msg) {
  var obj = {
    instrumentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    channelid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 7, 0),
    account: jspb.Message.getFieldWithDefault(msg, 8, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    stoporder: jspb.Message.getFieldWithDefault(msg, 10, false),
    stopprice: +jspb.Message.getFieldWithDefault(msg, 11, 0.0),
    stoptype: jspb.Message.getFieldWithDefault(msg, 12, ""),
    stopstep: +jspb.Message.getFieldWithDefault(msg, 13, 0.0),
    lossstep: +jspb.Message.getFieldWithDefault(msg, 14, 0.0),
    profitstep: +jspb.Message.getFieldWithDefault(msg, 15, 0.0),
    session: jspb.Message.getFieldWithDefault(msg, 16, ""),
    pin: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewOrderRequest}
 */
proto.NewOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewOrderRequest;
  return proto.NewOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewOrderRequest}
 */
proto.NewOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStoporder(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoptype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopstep(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLossstep(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfitstep(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChannelid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStoporder();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getStopprice();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getStoptype();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStopstep();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getLossstep();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getProfitstep();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string InstrumentID = 1;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Market = 2;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setMarket = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BuySell = 3;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string OrderType = 4;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ChannelID = 5;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getChannelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setChannelid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double Price = 6;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 Quantity = 7;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string Account = 8;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string RequestID = 9;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool StopOrder = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.NewOrderRequest.prototype.getStoporder = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.NewOrderRequest.prototype.setStoporder = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional double StopPrice = 11;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getStopprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setStopprice = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string StopType = 12;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getStoptype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setStoptype = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional double StopStep = 13;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getStopstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setStopstep = function(value) {
  jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double LossStep = 14;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getLossstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setLossstep = function(value) {
  jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double ProfitStep = 15;
 * @return {number}
 */
proto.NewOrderRequest.prototype.getProfitstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.NewOrderRequest.prototype.setProfitstep = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional string Session = 16;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string Pin = 17;
 * @return {string}
 */
proto.NewOrderRequest.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.NewOrderRequest.prototype.setPin = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startdate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enddate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    session: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderHistoryRequest}
 */
proto.OrderHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderHistoryRequest;
  return proto.OrderHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderHistoryRequest}
 */
proto.OrderHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartdate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnddate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartdate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnddate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.OrderHistoryRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.OrderHistoryRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string StartDate = 2;
 * @return {string}
 */
proto.OrderHistoryRequest.prototype.getStartdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.OrderHistoryRequest.prototype.setStartdate = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string EndDate = 3;
 * @return {string}
 */
proto.OrderHistoryRequest.prototype.getEnddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.OrderHistoryRequest.prototype.setEnddate = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Session = 4;
 * @return {string}
 */
proto.OrderHistoryRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.OrderHistoryRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientPortfolio.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientPortfolio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientPortfolio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolio.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientPortfolio}
 */
proto.ClientPortfolio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientPortfolio;
  return proto.ClientPortfolio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPortfolio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPortfolio}
 */
proto.ClientPortfolio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientPortfolio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientPortfolio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPortfolio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.ClientPortfolio.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClientPortfolio.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PropertyName = 2;
 * @return {string}
 */
proto.ClientPortfolio.prototype.getPropertyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ClientPortfolio.prototype.setPropertyname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CashHoldingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CashHoldingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CashHoldingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashHoldingRequest.toObject = function(includeInstance, msg) {
  var obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CashHoldingRequest}
 */
proto.CashHoldingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CashHoldingRequest;
  return proto.CashHoldingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CashHoldingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CashHoldingRequest}
 */
proto.CashHoldingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CashHoldingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CashHoldingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CashHoldingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashHoldingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string AccountId = 1;
 * @return {string}
 */
proto.CashHoldingRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CashHoldingRequest.prototype.setAccountid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockHoldingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.StockHoldingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockHoldingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertyname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockHoldingRequest}
 */
proto.StockHoldingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockHoldingRequest;
  return proto.StockHoldingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockHoldingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockHoldingRequest}
 */
proto.StockHoldingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockHoldingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockHoldingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockHoldingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertyname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.StockHoldingRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockHoldingRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string PropertyName = 2;
 * @return {string}
 */
proto.StockHoldingRequest.prototype.getPropertyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.StockHoldingRequest.prototype.setPropertyname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DerPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DerPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DerPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    querysummary: jspb.Message.getFieldWithDefault(msg, 2, false),
    session: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DerPositionRequest}
 */
proto.DerPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DerPositionRequest;
  return proto.DerPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DerPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DerPositionRequest}
 */
proto.DerPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuerysummary(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DerPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DerPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DerPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuerysummary();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.DerPositionRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DerPositionRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool QuerySummary = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.DerPositionRequest.prototype.getQuerysummary = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.DerPositionRequest.prototype.setQuerysummary = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string Session = 3;
 * @return {string}
 */
proto.DerPositionRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DerPositionRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.StockPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    session: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockPositionRequest}
 */
proto.StockPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockPositionRequest;
  return proto.StockPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockPositionRequest}
 */
proto.StockPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.StockPositionRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockPositionRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Session = 2;
 * @return {string}
 */
proto.StockPositionRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.StockPositionRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MaxBuyQtyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MaxBuyQtyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MaxBuyQtyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxBuyQtyRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    session: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MaxBuyQtyRequest}
 */
proto.MaxBuyQtyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MaxBuyQtyRequest;
  return proto.MaxBuyQtyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MaxBuyQtyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MaxBuyQtyRequest}
 */
proto.MaxBuyQtyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MaxBuyQtyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MaxBuyQtyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MaxBuyQtyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxBuyQtyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.MaxBuyQtyRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MaxBuyQtyRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.MaxBuyQtyRequest.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MaxBuyQtyRequest.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double Price = 3;
 * @return {number}
 */
proto.MaxBuyQtyRequest.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.MaxBuyQtyRequest.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string Session = 4;
 * @return {string}
 */
proto.MaxBuyQtyRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.MaxBuyQtyRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MaxSellQtyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MaxSellQtyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MaxSellQtyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxSellQtyRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    session: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MaxSellQtyRequest}
 */
proto.MaxSellQtyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MaxSellQtyRequest;
  return proto.MaxSellQtyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MaxSellQtyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MaxSellQtyRequest}
 */
proto.MaxSellQtyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MaxSellQtyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MaxSellQtyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MaxSellQtyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxSellQtyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.MaxSellQtyRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MaxSellQtyRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.MaxSellQtyRequest.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MaxSellQtyRequest.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double Price = 3;
 * @return {number}
 */
proto.MaxSellQtyRequest.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.MaxSellQtyRequest.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string Session = 4;
 * @return {string}
 */
proto.MaxSellQtyRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.MaxSellQtyRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DerAccountBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DerAccountBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DerAccountBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerAccountBalanceRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    session: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DerAccountBalanceRequest}
 */
proto.DerAccountBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DerAccountBalanceRequest;
  return proto.DerAccountBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DerAccountBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DerAccountBalanceRequest}
 */
proto.DerAccountBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DerAccountBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DerAccountBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DerAccountBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerAccountBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.DerAccountBalanceRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DerAccountBalanceRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Session = 2;
 * @return {string}
 */
proto.DerAccountBalanceRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DerAccountBalanceRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccountBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.AccountBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccountBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountBalanceRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    session: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccountBalanceRequest}
 */
proto.AccountBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccountBalanceRequest;
  return proto.AccountBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccountBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccountBalanceRequest}
 */
proto.AccountBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccountBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccountBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccountBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.AccountBalanceRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.AccountBalanceRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Session = 2;
 * @return {string}
 */
proto.AccountBalanceRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.AccountBalanceRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PPMMRAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.PPMMRAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PPMMRAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PPMMRAccountRequest.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    session: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PPMMRAccountRequest}
 */
proto.PPMMRAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PPMMRAccountRequest;
  return proto.PPMMRAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PPMMRAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PPMMRAccountRequest}
 */
proto.PPMMRAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PPMMRAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PPMMRAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PPMMRAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PPMMRAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.PPMMRAccountRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.PPMMRAccountRequest.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Session = 2;
 * @return {string}
 */
proto.PPMMRAccountRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.PPMMRAccountRequest.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginRequest.toObject = function(includeInstance, msg) {
  var obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginRequest}
 */
proto.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginRequest;
  return proto.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginRequest}
 */
proto.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.LoginRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.LoginRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.LoginRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelOrderModel.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelOrderModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelOrderModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderModel.toObject = function(includeInstance, msg) {
  var obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelOrderModel}
 */
proto.CancelOrderModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelOrderModel;
  return proto.CancelOrderModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelOrderModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelOrderModel}
 */
proto.CancelOrderModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelOrderModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelOrderModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelOrderModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string OrderID = 1;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Account = 2;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string MarketID = 3;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string InstrumentID = 4;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string BuySell = 5;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string RequestID = 6;
 * @return {string}
 */
proto.CancelOrderModel.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.CancelOrderModel.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CancelOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CancelOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CancelOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestdata: (f = msg.getRequestdata()) && proto.CancelOrderModel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CancelOrderResponse}
 */
proto.CancelOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CancelOrderResponse;
  return proto.CancelOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CancelOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CancelOrderResponse}
 */
proto.CancelOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 2:
      var value = new proto.CancelOrderModel;
      reader.readMessage(value,proto.CancelOrderModel.deserializeBinaryFromReader);
      msg.setRequestdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CancelOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CancelOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CancelOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CancelOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestdata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.CancelOrderModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string RequestID = 1;
 * @return {string}
 */
proto.CancelOrderResponse.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CancelOrderResponse.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CancelOrderModel RequestData = 2;
 * @return {?proto.CancelOrderModel}
 */
proto.CancelOrderResponse.prototype.getRequestdata = function() {
  return /** @type{?proto.CancelOrderModel} */ (
    jspb.Message.getWrapperField(this, proto.CancelOrderModel, 2));
};


/** @param {?proto.CancelOrderModel|undefined} value */
proto.CancelOrderResponse.prototype.setRequestdata = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.CancelOrderResponse.prototype.clearRequestdata = function() {
  this.setRequestdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CancelOrderResponse.prototype.hasRequestdata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_CancelOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_CancelOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_CancelOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_CancelOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_CancelOrderResponse}
 */
proto.Response_CancelOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_CancelOrderResponse;
  return proto.Response_CancelOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_CancelOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_CancelOrderResponse}
 */
proto.Response_CancelOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_CancelOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_CancelOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_CancelOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_CancelOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_CancelOrderResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_CancelOrderResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_CancelOrderResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_CancelOrderResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_CancelOrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_CancelOrderResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_CancelOrderResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_CancelOrderResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyOrderModel.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyOrderModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyOrderModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderModel.toObject = function(includeInstance, msg) {
  var obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    account: jspb.Message.getFieldWithDefault(msg, 4, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyOrderModel}
 */
proto.ModifyOrderModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyOrderModel;
  return proto.ModifyOrderModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyOrderModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyOrderModel}
 */
proto.ModifyOrderModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyOrderModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyOrderModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyOrderModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string OrderID = 1;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.ModifyOrderModel.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ModifyOrderModel.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 Quantity = 3;
 * @return {number}
 */
proto.ModifyOrderModel.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ModifyOrderModel.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string Account = 4;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string InstrumentID = 5;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string MarketID = 6;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string BuySell = 7;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string OrderType = 9;
 * @return {string}
 */
proto.ModifyOrderModel.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.ModifyOrderModel.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestdata: (f = msg.getRequestdata()) && proto.ModifyOrderModel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyOrderResponse}
 */
proto.ModifyOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyOrderResponse;
  return proto.ModifyOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyOrderResponse}
 */
proto.ModifyOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 2:
      var value = new proto.ModifyOrderModel;
      reader.readMessage(value,proto.ModifyOrderModel.deserializeBinaryFromReader);
      msg.setRequestdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestdata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ModifyOrderModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string RequestID = 1;
 * @return {string}
 */
proto.ModifyOrderResponse.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ModifyOrderResponse.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ModifyOrderModel RequestData = 2;
 * @return {?proto.ModifyOrderModel}
 */
proto.ModifyOrderResponse.prototype.getRequestdata = function() {
  return /** @type{?proto.ModifyOrderModel} */ (
    jspb.Message.getWrapperField(this, proto.ModifyOrderModel, 2));
};


/** @param {?proto.ModifyOrderModel|undefined} value */
proto.ModifyOrderResponse.prototype.setRequestdata = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ModifyOrderResponse.prototype.clearRequestdata = function() {
  this.setRequestdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderResponse.prototype.hasRequestdata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_ModifyOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_ModifyOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_ModifyOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_ModifyOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_ModifyOrderResponse}
 */
proto.Response_ModifyOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_ModifyOrderResponse;
  return proto.Response_ModifyOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_ModifyOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_ModifyOrderResponse}
 */
proto.Response_ModifyOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_ModifyOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_ModifyOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_ModifyOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_ModifyOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_ModifyOrderResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_ModifyOrderResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_ModifyOrderResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_ModifyOrderResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_ModifyOrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_ModifyOrderResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_ModifyOrderResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_ModifyOrderResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewOrderModel.prototype.toObject = function(opt_includeInstance) {
  return proto.NewOrderModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewOrderModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderModel.toObject = function(includeInstance, msg) {
  var obj = {
    instrumentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    channelid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 7, 0),
    account: jspb.Message.getFieldWithDefault(msg, 8, ""),
    stoporder: jspb.Message.getFieldWithDefault(msg, 10, false),
    stopprice: +jspb.Message.getFieldWithDefault(msg, 11, 0.0),
    stoptype: jspb.Message.getFieldWithDefault(msg, 12, ""),
    stopstep: +jspb.Message.getFieldWithDefault(msg, 13, 0.0),
    lossstep: +jspb.Message.getFieldWithDefault(msg, 14, 0.0),
    profitstep: +jspb.Message.getFieldWithDefault(msg, 15, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewOrderModel}
 */
proto.NewOrderModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewOrderModel;
  return proto.NewOrderModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewOrderModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewOrderModel}
 */
proto.NewOrderModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStoporder(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoptype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopstep(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLossstep(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfitstep(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewOrderModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewOrderModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewOrderModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChannelid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStoporder();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getStopprice();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getStoptype();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStopstep();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getLossstep();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getProfitstep();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
};


/**
 * optional string InstrumentID = 1;
 * @return {string}
 */
proto.NewOrderModel.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Market = 2;
 * @return {string}
 */
proto.NewOrderModel.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setMarket = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BuySell = 3;
 * @return {string}
 */
proto.NewOrderModel.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string OrderType = 4;
 * @return {string}
 */
proto.NewOrderModel.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ChannelID = 5;
 * @return {string}
 */
proto.NewOrderModel.prototype.getChannelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setChannelid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double Price = 6;
 * @return {number}
 */
proto.NewOrderModel.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 Quantity = 7;
 * @return {number}
 */
proto.NewOrderModel.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string Account = 8;
 * @return {string}
 */
proto.NewOrderModel.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool StopOrder = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.NewOrderModel.prototype.getStoporder = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.NewOrderModel.prototype.setStoporder = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional double StopPrice = 11;
 * @return {number}
 */
proto.NewOrderModel.prototype.getStopprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setStopprice = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string StopType = 12;
 * @return {string}
 */
proto.NewOrderModel.prototype.getStoptype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.NewOrderModel.prototype.setStoptype = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional double StopStep = 13;
 * @return {number}
 */
proto.NewOrderModel.prototype.getStopstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setStopstep = function(value) {
  jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double LossStep = 14;
 * @return {number}
 */
proto.NewOrderModel.prototype.getLossstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setLossstep = function(value) {
  jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double ProfitStep = 15;
 * @return {number}
 */
proto.NewOrderModel.prototype.getProfitstep = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.NewOrderModel.prototype.setProfitstep = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.NewOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    requestid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestdata: (f = msg.getRequestdata()) && proto.NewOrderModel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewOrderResponse}
 */
proto.NewOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewOrderResponse;
  return proto.NewOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewOrderResponse}
 */
proto.NewOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 2:
      var value = new proto.NewOrderModel;
      reader.readMessage(value,proto.NewOrderModel.deserializeBinaryFromReader);
      msg.setRequestdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestdata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.NewOrderModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string RequestID = 1;
 * @return {string}
 */
proto.NewOrderResponse.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.NewOrderResponse.prototype.setRequestid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NewOrderModel RequestData = 2;
 * @return {?proto.NewOrderModel}
 */
proto.NewOrderResponse.prototype.getRequestdata = function() {
  return /** @type{?proto.NewOrderModel} */ (
    jspb.Message.getWrapperField(this, proto.NewOrderModel, 2));
};


/** @param {?proto.NewOrderModel|undefined} value */
proto.NewOrderResponse.prototype.setRequestdata = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.NewOrderResponse.prototype.clearRequestdata = function() {
  this.setRequestdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NewOrderResponse.prototype.hasRequestdata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_NewOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_NewOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_NewOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_NewOrderResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_NewOrderResponse}
 */
proto.Response_NewOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_NewOrderResponse;
  return proto.Response_NewOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_NewOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_NewOrderResponse}
 */
proto.Response_NewOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_NewOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_NewOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_NewOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_NewOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_NewOrderResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_NewOrderResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_NewOrderResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_NewOrderResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_NewOrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_NewOrderResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_NewOrderResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_NewOrderResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderHistoryItem.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderHistoryItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderHistoryItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryItem.toObject = function(includeInstance, msg) {
  var obj = {
    uniqueid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buysell: jspb.Message.getFieldWithDefault(msg, 3, ""),
    price: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 5, 0),
    filledqty: jspb.Message.getFieldWithDefault(msg, 6, 0),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    inputtime: jspb.Message.getFieldWithDefault(msg, 9, ""),
    modifiedtime: jspb.Message.getFieldWithDefault(msg, 10, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    ordertype: jspb.Message.getFieldWithDefault(msg, 12, ""),
    cancelqty: jspb.Message.getFieldWithDefault(msg, 13, 0),
    avgprice: +jspb.Message.getFieldWithDefault(msg, 14, 0.0),
    isforcesell: jspb.Message.getFieldWithDefault(msg, 15, ""),
    isshortsell: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderHistoryItem}
 */
proto.OrderHistoryItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderHistoryItem;
  return proto.OrderHistoryItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderHistoryItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderHistoryItem}
 */
proto.OrderHistoryItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuysell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilledqty(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderstatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputtime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedtime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrdertype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancelqty(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsforcesell(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsshortsell(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderHistoryItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderHistoryItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderHistoryItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuysell();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFilledqty();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOrderstatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getInputtime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getModifiedtime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOrdertype();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCancelqty();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getIsforcesell();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIsshortsell();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string UniqueID = 1;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getUniqueid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setUniqueid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string OrderID = 2;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BuySell = 3;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getBuysell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setBuysell = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double Price = 4;
 * @return {number}
 */
proto.OrderHistoryItem.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.OrderHistoryItem.prototype.setPrice = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int64 Quantity = 5;
 * @return {number}
 */
proto.OrderHistoryItem.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.OrderHistoryItem.prototype.setQuantity = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 FilledQty = 6;
 * @return {number}
 */
proto.OrderHistoryItem.prototype.getFilledqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.OrderHistoryItem.prototype.setFilledqty = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string OrderStatus = 7;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getOrderstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setOrderstatus = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string MarketID = 8;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string InputTime = 9;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getInputtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setInputtime = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string ModifiedTime = 10;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getModifiedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setModifiedtime = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string InstrumentID = 11;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string OrderType = 12;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getOrdertype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setOrdertype = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 CancelQty = 13;
 * @return {number}
 */
proto.OrderHistoryItem.prototype.getCancelqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.OrderHistoryItem.prototype.setCancelqty = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional double AvgPrice = 14;
 * @return {number}
 */
proto.OrderHistoryItem.prototype.getAvgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.OrderHistoryItem.prototype.setAvgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional string IsForcesell = 15;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getIsforcesell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setIsforcesell = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string IsShortsell = 16;
 * @return {string}
 */
proto.OrderHistoryItem.prototype.getIsshortsell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.OrderHistoryItem.prototype.setIsshortsell = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OrderHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryResponse.toObject = function(includeInstance, msg) {
  var obj = {
    orderhistoriesList: jspb.Message.toObjectList(msg.getOrderhistoriesList(),
    proto.OrderHistoryItem.toObject, includeInstance),
    account: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderHistoryResponse}
 */
proto.OrderHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderHistoryResponse;
  return proto.OrderHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderHistoryResponse}
 */
proto.OrderHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.OrderHistoryItem;
      reader.readMessage(value,proto.OrderHistoryItem.deserializeBinaryFromReader);
      msg.addOrderhistories(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderhistoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.OrderHistoryItem.serializeBinaryToWriter
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated OrderHistoryItem OrderHistories = 1;
 * @return {!Array<!proto.OrderHistoryItem>}
 */
proto.OrderHistoryResponse.prototype.getOrderhistoriesList = function() {
  return /** @type{!Array<!proto.OrderHistoryItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.OrderHistoryItem, 1));
};


/** @param {!Array<!proto.OrderHistoryItem>} value */
proto.OrderHistoryResponse.prototype.setOrderhistoriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.OrderHistoryItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.OrderHistoryItem}
 */
proto.OrderHistoryResponse.prototype.addOrderhistories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.OrderHistoryItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.OrderHistoryResponse.prototype.clearOrderhistoriesList = function() {
  this.setOrderhistoriesList([]);
};


/**
 * optional string Account = 2;
 * @return {string}
 */
proto.OrderHistoryResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.OrderHistoryResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_OrderHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_OrderHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_OrderHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_OrderHistoryResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_OrderHistoryResponse}
 */
proto.Response_OrderHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_OrderHistoryResponse;
  return proto.Response_OrderHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_OrderHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_OrderHistoryResponse}
 */
proto.Response_OrderHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_OrderHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_OrderHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_OrderHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_OrderHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_OrderHistoryResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_OrderHistoryResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_OrderHistoryResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_OrderHistoryResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_OrderHistoryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_OrderHistoryResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_OrderHistoryResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_OrderHistoryResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientPortfolioResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientPortfolioResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientPortfolioResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    mobileno: jspb.Message.getFieldWithDefault(msg, 5, ""),
    telno: jspb.Message.getFieldWithDefault(msg, 6, ""),
    faxno: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 8, ""),
    nationality: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientPortfolioResponse}
 */
proto.ClientPortfolioResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientPortfolioResponse;
  return proto.ClientPortfolioResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientPortfolioResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientPortfolioResponse}
 */
proto.ClientPortfolioResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobileno(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTelno(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaxno(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSex(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNationality(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientPortfolioResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientPortfolioResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientPortfolioResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientPortfolioResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMobileno();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTelno();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFaxno();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSex();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNationality();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Email = 3;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Address = 4;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string MobileNo = 5;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getMobileno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setMobileno = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string TelNo = 6;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getTelno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setTelno = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string FaxNo = 7;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getFaxno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setFaxno = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Sex = 8;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setSex = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string Nationality = 9;
 * @return {string}
 */
proto.ClientPortfolioResponse.prototype.getNationality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.ClientPortfolioResponse.prototype.setNationality = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_ClientPortfolioResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_ClientPortfolioResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_ClientPortfolioResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_ClientPortfolioResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_ClientPortfolioResponse}
 */
proto.Response_ClientPortfolioResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_ClientPortfolioResponse;
  return proto.Response_ClientPortfolioResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_ClientPortfolioResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_ClientPortfolioResponse}
 */
proto.Response_ClientPortfolioResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_ClientPortfolioResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_ClientPortfolioResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_ClientPortfolioResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_ClientPortfolioResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_ClientPortfolioResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_ClientPortfolioResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_ClientPortfolioResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_ClientPortfolioResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_ClientPortfolioResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_ClientPortfolioResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_ClientPortfolioResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_ClientPortfolioResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CashHoldingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CashHoldingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CashHoldingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashHoldingResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CashHoldingResponse}
 */
proto.CashHoldingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CashHoldingResponse;
  return proto.CashHoldingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CashHoldingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CashHoldingResponse}
 */
proto.CashHoldingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CashHoldingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CashHoldingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CashHoldingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashHoldingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.CashHoldingResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CashHoldingResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Balance = 2;
 * @return {string}
 */
proto.CashHoldingResponse.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.CashHoldingResponse.prototype.setBalance = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_CashHoldingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_CashHoldingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_CashHoldingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_CashHoldingResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_CashHoldingResponse}
 */
proto.Response_CashHoldingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_CashHoldingResponse;
  return proto.Response_CashHoldingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_CashHoldingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_CashHoldingResponse}
 */
proto.Response_CashHoldingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_CashHoldingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_CashHoldingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_CashHoldingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_CashHoldingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_CashHoldingResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_CashHoldingResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_CashHoldingResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_CashHoldingResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_CashHoldingResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_CashHoldingResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_CashHoldingResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_CashHoldingResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_StockHoldingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_StockHoldingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_StockHoldingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_StockHoldingResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_StockHoldingResponse}
 */
proto.Response_StockHoldingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_StockHoldingResponse;
  return proto.Response_StockHoldingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_StockHoldingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_StockHoldingResponse}
 */
proto.Response_StockHoldingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_StockHoldingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_StockHoldingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_StockHoldingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_StockHoldingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_StockHoldingResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_StockHoldingResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_StockHoldingResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_StockHoldingResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_StockHoldingResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_StockHoldingResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_StockHoldingResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_StockHoldingResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockHoldingItem.prototype.toObject = function(opt_includeInstance) {
  return proto.StockHoldingItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockHoldingItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingItem.toObject = function(includeInstance, msg) {
  var obj = {
    stockid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exchange: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stockname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 5, ""),
    marketprice: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockHoldingItem}
 */
proto.StockHoldingItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockHoldingItem;
  return proto.StockHoldingItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockHoldingItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockHoldingItem}
 */
proto.StockHoldingItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStockid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStockname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockHoldingItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockHoldingItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockHoldingItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStockid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStockname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMarketprice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string StockID = 1;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getStockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setStockid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Quantity = 2;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setQuantity = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setExchange = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string StockName = 4;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getStockname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setStockname = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string Currency = 5;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setCurrency = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string MarketPrice = 6;
 * @return {string}
 */
proto.StockHoldingItem.prototype.getMarketprice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.StockHoldingItem.prototype.setMarketprice = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.StockHoldingResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockHoldingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.StockHoldingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockHoldingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stockholdingsList: jspb.Message.toObjectList(msg.getStockholdingsList(),
    proto.StockHoldingItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockHoldingResponse}
 */
proto.StockHoldingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockHoldingResponse;
  return proto.StockHoldingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockHoldingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockHoldingResponse}
 */
proto.StockHoldingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.StockHoldingItem;
      reader.readMessage(value,proto.StockHoldingItem.deserializeBinaryFromReader);
      msg.addStockholdings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockHoldingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockHoldingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockHoldingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockHoldingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStockholdingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.StockHoldingItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.StockHoldingResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockHoldingResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated StockHoldingItem StockHoldings = 2;
 * @return {!Array<!proto.StockHoldingItem>}
 */
proto.StockHoldingResponse.prototype.getStockholdingsList = function() {
  return /** @type{!Array<!proto.StockHoldingItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.StockHoldingItem, 2));
};


/** @param {!Array<!proto.StockHoldingItem>} value */
proto.StockHoldingResponse.prototype.setStockholdingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.StockHoldingItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.StockHoldingItem}
 */
proto.StockHoldingResponse.prototype.addStockholdings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.StockHoldingItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.StockHoldingResponse.prototype.clearStockholdingsList = function() {
  this.setStockholdingsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DerPositionItem.prototype.toObject = function(opt_includeInstance) {
  return proto.DerPositionItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DerPositionItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionItem.toObject = function(includeInstance, msg) {
  var obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    longqty: jspb.Message.getFieldWithDefault(msg, 3, 0),
    shortqty: jspb.Message.getFieldWithDefault(msg, 4, 0),
    net: jspb.Message.getFieldWithDefault(msg, 5, 0),
    bidavgprice: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    askavgprice: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    tradeprice: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    marketprice: +jspb.Message.getFieldWithDefault(msg, 9, 0.0),
    floatingpl: +jspb.Message.getFieldWithDefault(msg, 10, 0.0),
    tradingpl: +jspb.Message.getFieldWithDefault(msg, 11, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DerPositionItem}
 */
proto.DerPositionItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DerPositionItem;
  return proto.DerPositionItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DerPositionItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DerPositionItem}
 */
proto.DerPositionItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongqty(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShortqty(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNet(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidavgprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskavgprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradeprice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFloatingpl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTradingpl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DerPositionItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DerPositionItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DerPositionItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLongqty();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getShortqty();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNet();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBidavgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getAskavgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getTradeprice();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getMarketprice();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getFloatingpl();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getTradingpl();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * optional string MarketID = 1;
 * @return {string}
 */
proto.DerPositionItem.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DerPositionItem.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.DerPositionItem.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DerPositionItem.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 LongQty = 3;
 * @return {number}
 */
proto.DerPositionItem.prototype.getLongqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setLongqty = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 ShortQty = 4;
 * @return {number}
 */
proto.DerPositionItem.prototype.getShortqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setShortqty = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Net = 5;
 * @return {number}
 */
proto.DerPositionItem.prototype.getNet = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setNet = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double BidAvgPrice = 6;
 * @return {number}
 */
proto.DerPositionItem.prototype.getBidavgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setBidavgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double AskAvgPrice = 7;
 * @return {number}
 */
proto.DerPositionItem.prototype.getAskavgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setAskavgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double TradePrice = 8;
 * @return {number}
 */
proto.DerPositionItem.prototype.getTradeprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setTradeprice = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double MarketPrice = 9;
 * @return {number}
 */
proto.DerPositionItem.prototype.getMarketprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setMarketprice = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double FloatingPL = 10;
 * @return {number}
 */
proto.DerPositionItem.prototype.getFloatingpl = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setFloatingpl = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double TradingPL = 11;
 * @return {number}
 */
proto.DerPositionItem.prototype.getTradingpl = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.DerPositionItem.prototype.setTradingpl = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DerPositionResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DerPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DerPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DerPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openPositionList: jspb.Message.toObjectList(msg.getOpenPositionList(),
    proto.DerPositionItem.toObject, includeInstance),
    closePositionList: jspb.Message.toObjectList(msg.getClosePositionList(),
    proto.DerPositionItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DerPositionResponse}
 */
proto.DerPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DerPositionResponse;
  return proto.DerPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DerPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DerPositionResponse}
 */
proto.DerPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto.DerPositionItem;
      reader.readMessage(value,proto.DerPositionItem.deserializeBinaryFromReader);
      msg.addOpenPosition(value);
      break;
    case 3:
      var value = new proto.DerPositionItem;
      reader.readMessage(value,proto.DerPositionItem.deserializeBinaryFromReader);
      msg.addClosePosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DerPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DerPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DerPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenPositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.DerPositionItem.serializeBinaryToWriter
    );
  }
  f = message.getClosePositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.DerPositionItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.DerPositionResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DerPositionResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DerPositionItem _Open_position = 2;
 * @return {!Array<!proto.DerPositionItem>}
 */
proto.DerPositionResponse.prototype.getOpenPositionList = function() {
  return /** @type{!Array<!proto.DerPositionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DerPositionItem, 2));
};


/** @param {!Array<!proto.DerPositionItem>} value */
proto.DerPositionResponse.prototype.setOpenPositionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.DerPositionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DerPositionItem}
 */
proto.DerPositionResponse.prototype.addOpenPosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.DerPositionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.DerPositionResponse.prototype.clearOpenPositionList = function() {
  this.setOpenPositionList([]);
};


/**
 * repeated DerPositionItem _Close_position = 3;
 * @return {!Array<!proto.DerPositionItem>}
 */
proto.DerPositionResponse.prototype.getClosePositionList = function() {
  return /** @type{!Array<!proto.DerPositionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DerPositionItem, 3));
};


/** @param {!Array<!proto.DerPositionItem>} value */
proto.DerPositionResponse.prototype.setClosePositionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.DerPositionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DerPositionItem}
 */
proto.DerPositionResponse.prototype.addClosePosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.DerPositionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.DerPositionResponse.prototype.clearClosePositionList = function() {
  this.setClosePositionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_DerPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_DerPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_DerPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_DerPositionResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_DerPositionResponse}
 */
proto.Response_DerPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_DerPositionResponse;
  return proto.Response_DerPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_DerPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_DerPositionResponse}
 */
proto.Response_DerPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_DerPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_DerPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_DerPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_DerPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_DerPositionResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_DerPositionResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_DerPositionResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_DerPositionResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_DerPositionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_DerPositionResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_DerPositionResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_DerPositionResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_StockPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_StockPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_StockPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_StockPositionResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_StockPositionResponse}
 */
proto.Response_StockPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_StockPositionResponse;
  return proto.Response_StockPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_StockPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_StockPositionResponse}
 */
proto.Response_StockPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_StockPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_StockPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_StockPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_StockPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_StockPositionResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_StockPositionResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_StockPositionResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_StockPositionResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_StockPositionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_StockPositionResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_StockPositionResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_StockPositionResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockPositionItem.prototype.toObject = function(opt_includeInstance) {
  return proto.StockPositionItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockPositionItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionItem.toObject = function(includeInstance, msg) {
  var obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    onhand: jspb.Message.getFieldWithDefault(msg, 4, 0),
    block: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bonus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    buyt0: jspb.Message.getFieldWithDefault(msg, 9, 0),
    buyt1: jspb.Message.getFieldWithDefault(msg, 10, 0),
    buyt2: jspb.Message.getFieldWithDefault(msg, 11, 0),
    sellt0: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sellt1: jspb.Message.getFieldWithDefault(msg, 13, 0),
    sellt2: jspb.Message.getFieldWithDefault(msg, 14, 0),
    avgprice: +jspb.Message.getFieldWithDefault(msg, 15, 0.0),
    mortgage: jspb.Message.getFieldWithDefault(msg, 16, 0),
    sellableqty: jspb.Message.getFieldWithDefault(msg, 17, 0),
    holdfortrade: jspb.Message.getFieldWithDefault(msg, 18, 0),
    marketprice: jspb.Message.getFieldWithDefault(msg, 19, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockPositionItem}
 */
proto.StockPositionItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockPositionItem;
  return proto.StockPositionItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockPositionItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockPositionItem}
 */
proto.StockPositionItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOnhand(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlock(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBonus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyt0(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyt1(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyt2(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellt0(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellt1(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellt2(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgprice(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMortgage(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellableqty(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHoldfortrade(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMarketprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockPositionItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockPositionItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockPositionItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOnhand();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBonus();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getBuyt0();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getBuyt1();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getBuyt2();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getSellt0();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getSellt1();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getSellt2();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getMortgage();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getSellableqty();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getHoldfortrade();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getMarketprice();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
};


/**
 * optional string MarketID = 1;
 * @return {string}
 */
proto.StockPositionItem.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockPositionItem.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string InstrumentID = 2;
 * @return {string}
 */
proto.StockPositionItem.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.StockPositionItem.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 OnHand = 4;
 * @return {number}
 */
proto.StockPositionItem.prototype.getOnhand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setOnhand = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Block = 6;
 * @return {number}
 */
proto.StockPositionItem.prototype.getBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setBlock = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 Bonus = 8;
 * @return {number}
 */
proto.StockPositionItem.prototype.getBonus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setBonus = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 BuyT0 = 9;
 * @return {number}
 */
proto.StockPositionItem.prototype.getBuyt0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setBuyt0 = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 BuyT1 = 10;
 * @return {number}
 */
proto.StockPositionItem.prototype.getBuyt1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setBuyt1 = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 BuyT2 = 11;
 * @return {number}
 */
proto.StockPositionItem.prototype.getBuyt2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setBuyt2 = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 SellT0 = 12;
 * @return {number}
 */
proto.StockPositionItem.prototype.getSellt0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setSellt0 = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 SellT1 = 13;
 * @return {number}
 */
proto.StockPositionItem.prototype.getSellt1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setSellt1 = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 SellT2 = 14;
 * @return {number}
 */
proto.StockPositionItem.prototype.getSellt2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setSellt2 = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional double AvgPrice = 15;
 * @return {number}
 */
proto.StockPositionItem.prototype.getAvgprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setAvgprice = function(value) {
  jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional int64 Mortgage = 16;
 * @return {number}
 */
proto.StockPositionItem.prototype.getMortgage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setMortgage = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 SellableQty = 17;
 * @return {number}
 */
proto.StockPositionItem.prototype.getSellableqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setSellableqty = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int64 HoldForTrade = 18;
 * @return {number}
 */
proto.StockPositionItem.prototype.getHoldfortrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setHoldfortrade = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 MarketPrice = 19;
 * @return {number}
 */
proto.StockPositionItem.prototype.getMarketprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.StockPositionItem.prototype.setMarketprice = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.StockPositionResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StockPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.StockPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StockPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalmarketvalue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stockpositionsList: jspb.Message.toObjectList(msg.getStockpositionsList(),
    proto.StockPositionItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StockPositionResponse}
 */
proto.StockPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StockPositionResponse;
  return proto.StockPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StockPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StockPositionResponse}
 */
proto.StockPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalmarketvalue(value);
      break;
    case 3:
      var value = new proto.StockPositionItem;
      reader.readMessage(value,proto.StockPositionItem.deserializeBinaryFromReader);
      msg.addStockpositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StockPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StockPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StockPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StockPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalmarketvalue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStockpositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.StockPositionItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.StockPositionResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.StockPositionResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 TotalMarketValue = 2;
 * @return {number}
 */
proto.StockPositionResponse.prototype.getTotalmarketvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.StockPositionResponse.prototype.setTotalmarketvalue = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated StockPositionItem StockPositions = 3;
 * @return {!Array<!proto.StockPositionItem>}
 */
proto.StockPositionResponse.prototype.getStockpositionsList = function() {
  return /** @type{!Array<!proto.StockPositionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.StockPositionItem, 3));
};


/** @param {!Array<!proto.StockPositionItem>} value */
proto.StockPositionResponse.prototype.setStockpositionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.StockPositionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.StockPositionItem}
 */
proto.StockPositionResponse.prototype.addStockpositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.StockPositionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.StockPositionResponse.prototype.clearStockpositionsList = function() {
  this.setStockpositionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MaxBuyQtyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.MaxBuyQtyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MaxBuyQtyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxBuyQtyResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxbuyqty: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marginratio: jspb.Message.getFieldWithDefault(msg, 3, ""),
    purchasingpower: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MaxBuyQtyResponse}
 */
proto.MaxBuyQtyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MaxBuyQtyResponse;
  return proto.MaxBuyQtyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MaxBuyQtyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MaxBuyQtyResponse}
 */
proto.MaxBuyQtyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxbuyqty(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarginratio(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasingpower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MaxBuyQtyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MaxBuyQtyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MaxBuyQtyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxBuyQtyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxbuyqty();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMarginratio();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPurchasingpower();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.MaxBuyQtyResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MaxBuyQtyResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 MaxBuyQty = 2;
 * @return {number}
 */
proto.MaxBuyQtyResponse.prototype.getMaxbuyqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MaxBuyQtyResponse.prototype.setMaxbuyqty = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string MarginRatio = 3;
 * @return {string}
 */
proto.MaxBuyQtyResponse.prototype.getMarginratio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.MaxBuyQtyResponse.prototype.setMarginratio = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 PurchasingPower = 4;
 * @return {number}
 */
proto.MaxBuyQtyResponse.prototype.getPurchasingpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MaxBuyQtyResponse.prototype.setPurchasingpower = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_MaxBuyQtyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_MaxBuyQtyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_MaxBuyQtyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_MaxBuyQtyResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_MaxBuyQtyResponse}
 */
proto.Response_MaxBuyQtyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_MaxBuyQtyResponse;
  return proto.Response_MaxBuyQtyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_MaxBuyQtyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_MaxBuyQtyResponse}
 */
proto.Response_MaxBuyQtyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_MaxBuyQtyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_MaxBuyQtyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_MaxBuyQtyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_MaxBuyQtyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_MaxBuyQtyResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_MaxBuyQtyResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_MaxBuyQtyResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_MaxBuyQtyResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_MaxBuyQtyResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_MaxBuyQtyResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_MaxBuyQtyResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_MaxBuyQtyResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MaxSellQtyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.MaxSellQtyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MaxSellQtyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxSellQtyResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxsellqty: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MaxSellQtyResponse}
 */
proto.MaxSellQtyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MaxSellQtyResponse;
  return proto.MaxSellQtyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MaxSellQtyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MaxSellQtyResponse}
 */
proto.MaxSellQtyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxsellqty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MaxSellQtyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MaxSellQtyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MaxSellQtyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MaxSellQtyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxsellqty();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.MaxSellQtyResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MaxSellQtyResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 MaxSellQty = 2;
 * @return {number}
 */
proto.MaxSellQtyResponse.prototype.getMaxsellqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MaxSellQtyResponse.prototype.setMaxsellqty = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_MaxSellQtyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_MaxSellQtyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_MaxSellQtyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_MaxSellQtyResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_MaxSellQtyResponse}
 */
proto.Response_MaxSellQtyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_MaxSellQtyResponse;
  return proto.Response_MaxSellQtyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_MaxSellQtyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_MaxSellQtyResponse}
 */
proto.Response_MaxSellQtyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_MaxSellQtyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_MaxSellQtyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_MaxSellQtyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_MaxSellQtyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_MaxSellQtyResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_MaxSellQtyResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_MaxSellQtyResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_MaxSellQtyResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_MaxSellQtyResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_MaxSellQtyResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_MaxSellQtyResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_MaxSellQtyResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AssetsItem.prototype.toObject = function(opt_includeInstance) {
  return proto.AssetsItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AssetsItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AssetsItem.toObject = function(includeInstance, msg) {
  var obj = {
    cash: jspb.Message.getFieldWithDefault(msg, 1, 0),
    validnoncash: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalvalue: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxvalidnoncash: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cashwithdrawable: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ee: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AssetsItem}
 */
proto.AssetsItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AssetsItem;
  return proto.AssetsItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AssetsItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AssetsItem}
 */
proto.AssetsItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidnoncash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalvalue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxvalidnoncash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCashwithdrawable(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AssetsItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AssetsItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AssetsItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AssetsItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCash();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValidnoncash();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalvalue();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMaxvalidnoncash();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCashwithdrawable();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEe();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 Cash = 1;
 * @return {number}
 */
proto.AssetsItem.prototype.getCash = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setCash = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 ValidNonCash = 2;
 * @return {number}
 */
proto.AssetsItem.prototype.getValidnoncash = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setValidnoncash = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 TotalValue = 3;
 * @return {number}
 */
proto.AssetsItem.prototype.getTotalvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setTotalvalue = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 MaxValidNonCash = 4;
 * @return {number}
 */
proto.AssetsItem.prototype.getMaxvalidnoncash = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setMaxvalidnoncash = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 CashWithdrawable = 5;
 * @return {number}
 */
proto.AssetsItem.prototype.getCashwithdrawable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setCashwithdrawable = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 EE = 6;
 * @return {number}
 */
proto.AssetsItem.prototype.getEe = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.AssetsItem.prototype.setEe = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DerAccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DerAccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DerAccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerAccountBalanceResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountbalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 3, 0),
    commission: jspb.Message.getFieldWithDefault(msg, 4, 0),
    interest: jspb.Message.getFieldWithDefault(msg, 5, 0),
    loan: jspb.Message.getFieldWithDefault(msg, 6, 0),
    deliveryamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    floatingpl: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalpl: jspb.Message.getFieldWithDefault(msg, 9, 0),
    marginable: jspb.Message.getFieldWithDefault(msg, 10, 0),
    depositable: jspb.Message.getFieldWithDefault(msg, 11, 0),
    rccall: jspb.Message.getFieldWithDefault(msg, 12, 0),
    withdrawable: jspb.Message.getFieldWithDefault(msg, 13, 0),
    noncashdrawablerccall: jspb.Message.getFieldWithDefault(msg, 14, 0),
    internalassets: (f = msg.getInternalassets()) && proto.AssetsItem.toObject(includeInstance, f),
    exchangeassets: (f = msg.getExchangeassets()) && proto.AssetsItem.toObject(includeInstance, f),
    internalmargin: (f = msg.getInternalmargin()) && proto.InternalMarginItem.toObject(includeInstance, f),
    exchangemargin: (f = msg.getExchangemargin()) && proto.ExchangeMarginItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DerAccountBalanceResponse}
 */
proto.DerAccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DerAccountBalanceResponse;
  return proto.DerAccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DerAccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DerAccountBalanceResponse}
 */
proto.DerAccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommission(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLoan(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliveryamount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFloatingpl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalpl(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMarginable(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDepositable(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRccall(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWithdrawable(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNoncashdrawablerccall(value);
      break;
    case 15:
      var value = new proto.AssetsItem;
      reader.readMessage(value,proto.AssetsItem.deserializeBinaryFromReader);
      msg.setInternalassets(value);
      break;
    case 16:
      var value = new proto.AssetsItem;
      reader.readMessage(value,proto.AssetsItem.deserializeBinaryFromReader);
      msg.setExchangeassets(value);
      break;
    case 157:
      var value = new proto.InternalMarginItem;
      reader.readMessage(value,proto.InternalMarginItem.deserializeBinaryFromReader);
      msg.setInternalmargin(value);
      break;
    case 168:
      var value = new proto.ExchangeMarginItem;
      reader.readMessage(value,proto.ExchangeMarginItem.deserializeBinaryFromReader);
      msg.setExchangemargin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DerAccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DerAccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DerAccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DerAccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountbalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCommission();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getInterest();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLoan();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getDeliveryamount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getFloatingpl();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getTotalpl();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getMarginable();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getDepositable();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getRccall();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getWithdrawable();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getNoncashdrawablerccall();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getInternalassets();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.AssetsItem.serializeBinaryToWriter
    );
  }
  f = message.getExchangeassets();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.AssetsItem.serializeBinaryToWriter
    );
  }
  f = message.getInternalmargin();
  if (f != null) {
    writer.writeMessage(
      157,
      f,
      proto.InternalMarginItem.serializeBinaryToWriter
    );
  }
  f = message.getExchangemargin();
  if (f != null) {
    writer.writeMessage(
      168,
      f,
      proto.ExchangeMarginItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.DerAccountBalanceResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DerAccountBalanceResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 AccountBalance = 2;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getAccountbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setAccountbalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 Fee = 3;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 Commission = 4;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getCommission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setCommission = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Interest = 5;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getInterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setInterest = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 Loan = 6;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getLoan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setLoan = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 DeliveryAmount = 7;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getDeliveryamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setDeliveryamount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 FloatingPL = 8;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getFloatingpl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setFloatingpl = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 TotalPL = 9;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getTotalpl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setTotalpl = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 Marginable = 10;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getMarginable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setMarginable = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 Depositable = 11;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getDepositable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setDepositable = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 RCCall = 12;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getRccall = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setRccall = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 Withdrawable = 13;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getWithdrawable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setWithdrawable = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 NonCashDrawableRCCall = 14;
 * @return {number}
 */
proto.DerAccountBalanceResponse.prototype.getNoncashdrawablerccall = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DerAccountBalanceResponse.prototype.setNoncashdrawablerccall = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional AssetsItem InternalAssets = 15;
 * @return {?proto.AssetsItem}
 */
proto.DerAccountBalanceResponse.prototype.getInternalassets = function() {
  return /** @type{?proto.AssetsItem} */ (
    jspb.Message.getWrapperField(this, proto.AssetsItem, 15));
};


/** @param {?proto.AssetsItem|undefined} value */
proto.DerAccountBalanceResponse.prototype.setInternalassets = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.DerAccountBalanceResponse.prototype.clearInternalassets = function() {
  this.setInternalassets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DerAccountBalanceResponse.prototype.hasInternalassets = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional AssetsItem ExchangeAssets = 16;
 * @return {?proto.AssetsItem}
 */
proto.DerAccountBalanceResponse.prototype.getExchangeassets = function() {
  return /** @type{?proto.AssetsItem} */ (
    jspb.Message.getWrapperField(this, proto.AssetsItem, 16));
};


/** @param {?proto.AssetsItem|undefined} value */
proto.DerAccountBalanceResponse.prototype.setExchangeassets = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.DerAccountBalanceResponse.prototype.clearExchangeassets = function() {
  this.setExchangeassets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DerAccountBalanceResponse.prototype.hasExchangeassets = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional InternalMarginItem InternalMargin = 157;
 * @return {?proto.InternalMarginItem}
 */
proto.DerAccountBalanceResponse.prototype.getInternalmargin = function() {
  return /** @type{?proto.InternalMarginItem} */ (
    jspb.Message.getWrapperField(this, proto.InternalMarginItem, 157));
};


/** @param {?proto.InternalMarginItem|undefined} value */
proto.DerAccountBalanceResponse.prototype.setInternalmargin = function(value) {
  jspb.Message.setWrapperField(this, 157, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.DerAccountBalanceResponse.prototype.clearInternalmargin = function() {
  this.setInternalmargin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DerAccountBalanceResponse.prototype.hasInternalmargin = function() {
  return jspb.Message.getField(this, 157) != null;
};


/**
 * optional ExchangeMarginItem ExchangeMargin = 168;
 * @return {?proto.ExchangeMarginItem}
 */
proto.DerAccountBalanceResponse.prototype.getExchangemargin = function() {
  return /** @type{?proto.ExchangeMarginItem} */ (
    jspb.Message.getWrapperField(this, proto.ExchangeMarginItem, 168));
};


/** @param {?proto.ExchangeMarginItem|undefined} value */
proto.DerAccountBalanceResponse.prototype.setExchangemargin = function(value) {
  jspb.Message.setWrapperField(this, 168, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.DerAccountBalanceResponse.prototype.clearExchangemargin = function() {
  this.setExchangemargin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DerAccountBalanceResponse.prototype.hasExchangemargin = function() {
  return jspb.Message.getField(this, 168) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExchangeMarginItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ExchangeMarginItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExchangeMarginItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeMarginItem.toObject = function(includeInstance, msg) {
  var obj = {
    marginreq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountratio: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    usedlimitwarninglevel1: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    usedlimitwarninglevel2: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    usedlimitwarninglevel3: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    margincall: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExchangeMarginItem}
 */
proto.ExchangeMarginItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExchangeMarginItem;
  return proto.ExchangeMarginItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExchangeMarginItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExchangeMarginItem}
 */
proto.ExchangeMarginItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMarginreq(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccountratio(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel1(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel2(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel3(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMargincall(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExchangeMarginItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExchangeMarginItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExchangeMarginItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeMarginItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginreq();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAccountratio();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getUsedlimitwarninglevel1();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getUsedlimitwarninglevel2();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getUsedlimitwarninglevel3();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMargincall();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 MarginReq = 1;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getMarginreq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setMarginreq = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double AccountRatio = 2;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getAccountratio = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setAccountratio = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double UsedLimitWarningLevel1 = 3;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getUsedlimitwarninglevel1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setUsedlimitwarninglevel1 = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double UsedLimitWarningLevel2 = 4;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getUsedlimitwarninglevel2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setUsedlimitwarninglevel2 = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double UsedLimitWarningLevel3 = 5;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getUsedlimitwarninglevel3 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setUsedlimitwarninglevel3 = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 MarginCall = 6;
 * @return {number}
 */
proto.ExchangeMarginItem.prototype.getMargincall = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.ExchangeMarginItem.prototype.setMargincall = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InternalMarginItem.prototype.toObject = function(opt_includeInstance) {
  return proto.InternalMarginItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InternalMarginItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InternalMarginItem.toObject = function(includeInstance, msg) {
  var obj = {
    initialmargin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deliverymargin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marginreq: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accountratio: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    usedlimitwarninglevel1: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    usedlimitwarninglevel2: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    usedlimitwarninglevel3: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    margincall: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InternalMarginItem}
 */
proto.InternalMarginItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InternalMarginItem;
  return proto.InternalMarginItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InternalMarginItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InternalMarginItem}
 */
proto.InternalMarginItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitialmargin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliverymargin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMarginreq(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccountratio(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUsedlimitwarninglevel3(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMargincall(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InternalMarginItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InternalMarginItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InternalMarginItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InternalMarginItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialmargin();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDeliverymargin();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMarginreq();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAccountratio();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getUsedlimitwarninglevel1();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getUsedlimitwarninglevel2();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getUsedlimitwarninglevel3();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getMargincall();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int64 InitialMargin = 1;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getInitialmargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setInitialmargin = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 DeliveryMargin = 2;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getDeliverymargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setDeliverymargin = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 MarginReq = 3;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getMarginreq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setMarginreq = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double AccountRatio = 4;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getAccountratio = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setAccountratio = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double UsedLimitWarningLevel1 = 5;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getUsedlimitwarninglevel1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setUsedlimitwarninglevel1 = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double UsedLimitWarningLevel2 = 6;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getUsedlimitwarninglevel2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setUsedlimitwarninglevel2 = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double UsedLimitWarningLevel3 = 7;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getUsedlimitwarninglevel3 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setUsedlimitwarninglevel3 = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 MarginCall = 8;
 * @return {number}
 */
proto.InternalMarginItem.prototype.getMargincall = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.InternalMarginItem.prototype.setMargincall = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_DerAccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_DerAccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_DerAccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_DerAccountBalanceResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_DerAccountBalanceResponse}
 */
proto.Response_DerAccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_DerAccountBalanceResponse;
  return proto.Response_DerAccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_DerAccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_DerAccountBalanceResponse}
 */
proto.Response_DerAccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_DerAccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_DerAccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_DerAccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_DerAccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_DerAccountBalanceResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_DerAccountBalanceResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_DerAccountBalanceResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_DerAccountBalanceResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_DerAccountBalanceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_DerAccountBalanceResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_DerAccountBalanceResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_DerAccountBalanceResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountBalanceResponse.toObject = function(includeInstance, msg) {
  var obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cashbal: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cashonhold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    secureamount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    withdrawable: jspb.Message.getFieldWithDefault(msg, 5, 0),
    receivingcasht1: jspb.Message.getFieldWithDefault(msg, 6, 0),
    receivingcasht2: jspb.Message.getFieldWithDefault(msg, 7, 0),
    matchedbuyvolume: jspb.Message.getFieldWithDefault(msg, 8, 0),
    matchedsellvolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    debt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    unmatchedbuyvolume: jspb.Message.getFieldWithDefault(msg, 11, 0),
    unmatchedsellvolume: jspb.Message.getFieldWithDefault(msg, 12, 0),
    paidcasht1: jspb.Message.getFieldWithDefault(msg, 13, 0),
    paidcasht2: jspb.Message.getFieldWithDefault(msg, 14, 0),
    cia: jspb.Message.getFieldWithDefault(msg, 15, 0),
    purchasingpower: jspb.Message.getFieldWithDefault(msg, 16, 0),
    totalassets: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccountBalanceResponse}
 */
proto.AccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccountBalanceResponse;
  return proto.AccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccountBalanceResponse}
 */
proto.AccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCashbal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCashonhold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSecureamount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWithdrawable(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivingcasht1(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivingcasht2(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMatchedbuyvolume(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMatchedsellvolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDebt(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnmatchedbuyvolume(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnmatchedsellvolume(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPaidcasht1(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPaidcasht2(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCia(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasingpower(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalassets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCashbal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCashonhold();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSecureamount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getWithdrawable();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getReceivingcasht1();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getReceivingcasht2();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getMatchedbuyvolume();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getMatchedsellvolume();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getDebt();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getUnmatchedbuyvolume();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getUnmatchedsellvolume();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getPaidcasht1();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getPaidcasht2();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getCia();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getPurchasingpower();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getTotalassets();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
};


/**
 * optional string Account = 1;
 * @return {string}
 */
proto.AccountBalanceResponse.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.AccountBalanceResponse.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 CashBal = 2;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getCashbal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setCashbal = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 CashOnHold = 3;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getCashonhold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setCashonhold = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 SecureAmount = 4;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getSecureamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setSecureamount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 Withdrawable = 5;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getWithdrawable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setWithdrawable = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 ReceivingCashT1 = 6;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getReceivingcasht1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setReceivingcasht1 = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 ReceivingCashT2 = 7;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getReceivingcasht2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setReceivingcasht2 = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 MatchedBuyVolume = 8;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getMatchedbuyvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setMatchedbuyvolume = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 MatchedSellVolume = 9;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getMatchedsellvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setMatchedsellvolume = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 Debt = 10;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getDebt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setDebt = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 UnMatchedBuyVolume = 11;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getUnmatchedbuyvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setUnmatchedbuyvolume = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 UnMatchedSellVolume = 12;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getUnmatchedsellvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setUnmatchedsellvolume = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 PaidCashT1 = 13;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getPaidcasht1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setPaidcasht1 = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 PaidCashT2 = 14;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getPaidcasht2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setPaidcasht2 = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 CIA = 15;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getCia = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setCia = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 PurchasingPower = 16;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getPurchasingpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setPurchasingpower = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 TotalAssets = 17;
 * @return {number}
 */
proto.AccountBalanceResponse.prototype.getTotalassets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.AccountBalanceResponse.prototype.setTotalassets = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_AccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_AccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_AccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_AccountBalanceResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_AccountBalanceResponse}
 */
proto.Response_AccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_AccountBalanceResponse;
  return proto.Response_AccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_AccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_AccountBalanceResponse}
 */
proto.Response_AccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_AccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_AccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_AccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_AccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_AccountBalanceResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_AccountBalanceResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_AccountBalanceResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_AccountBalanceResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_AccountBalanceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_AccountBalanceResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_AccountBalanceResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_AccountBalanceResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PPMMRAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.PPMMRAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PPMMRAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PPMMRAccountResponse.toObject = function(includeInstance, msg) {
  var obj = {
    collateralasset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    calllmw: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    liability: jspb.Message.getFieldWithDefault(msg, 3, 0),
    eeorigin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    forcelmv: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    equity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ee: jspb.Message.getFieldWithDefault(msg, 7, 0),
    callmargin: jspb.Message.getFieldWithDefault(msg, 8, 0),
    cashbalance: jspb.Message.getFieldWithDefault(msg, 9, 0),
    purchasingpower: jspb.Message.getFieldWithDefault(msg, 10, 0),
    callforcesell: jspb.Message.getFieldWithDefault(msg, 11, 0),
    lmv: jspb.Message.getFieldWithDefault(msg, 12, 0),
    margincall: jspb.Message.getFieldWithDefault(msg, 13, 0),
    withdrawal: jspb.Message.getFieldWithDefault(msg, 14, 0),
    collaterala: jspb.Message.getFieldWithDefault(msg, 15, 0),
    action: jspb.Message.getFieldWithDefault(msg, 16, ""),
    marginratio: +jspb.Message.getFieldWithDefault(msg, 17, 0.0),
    debt: jspb.Message.getFieldWithDefault(msg, 18, 0),
    accruedinterest: jspb.Message.getFieldWithDefault(msg, 19, 0),
    holdright: jspb.Message.getFieldWithDefault(msg, 20, 0),
    preloan: jspb.Message.getFieldWithDefault(msg, 21, 0),
    fees: jspb.Message.getFieldWithDefault(msg, 22, 0),
    buyunmatch: jspb.Message.getFieldWithDefault(msg, 23, 0),
    ap: jspb.Message.getFieldWithDefault(msg, 24, 0),
    apt1: jspb.Message.getFieldWithDefault(msg, 25, 0),
    sellunmatch: jspb.Message.getFieldWithDefault(msg, 26, 0),
    cia: jspb.Message.getFieldWithDefault(msg, 28, 0),
    ar: jspb.Message.getFieldWithDefault(msg, 29, 0),
    art1: jspb.Message.getFieldWithDefault(msg, 30, 0),
    ppcredit: jspb.Message.getFieldWithDefault(msg, 31, 0),
    creditlimit: jspb.Message.getFieldWithDefault(msg, 32, 0),
    totalassets: jspb.Message.getFieldWithDefault(msg, 33, 0),
    margincalllmvsold: jspb.Message.getFieldWithDefault(msg, 34, 0),
    lmvnonmarginable: jspb.Message.getFieldWithDefault(msg, 35, 0),
    eecredit: jspb.Message.getFieldWithDefault(msg, 36, 0),
    totalequity: jspb.Message.getFieldWithDefault(msg, 37, 0),
    ee90: jspb.Message.getFieldWithDefault(msg, 38, 0),
    ee80: jspb.Message.getFieldWithDefault(msg, 39, 0),
    ee70: jspb.Message.getFieldWithDefault(msg, 40, 0),
    ee60: jspb.Message.getFieldWithDefault(msg, 41, 0),
    ee50: jspb.Message.getFieldWithDefault(msg, 42, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PPMMRAccountResponse}
 */
proto.PPMMRAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PPMMRAccountResponse;
  return proto.PPMMRAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PPMMRAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PPMMRAccountResponse}
 */
proto.PPMMRAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCollateralasset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCalllmw(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLiability(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEeorigin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setForcelmv(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEquity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallmargin(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCashbalance(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasingpower(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallforcesell(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLmv(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMargincall(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWithdrawal(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCollaterala(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginratio(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDebt(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccruedinterest(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHoldright(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreloan(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFees(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyunmatch(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAp(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApt1(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellunmatch(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCia(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAr(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setArt1(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPpcredit(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreditlimit(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalassets(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMargincalllmvsold(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLmvnonmarginable(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEecredit(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalequity(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe90(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe80(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe70(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe60(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEe50(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PPMMRAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PPMMRAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PPMMRAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PPMMRAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollateralasset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCalllmw();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLiability();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEeorigin();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getForcelmv();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getEquity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getEe();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCallmargin();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCashbalance();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getPurchasingpower();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getCallforcesell();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getLmv();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getMargincall();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getWithdrawal();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getCollaterala();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getMarginratio();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getDebt();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getAccruedinterest();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getHoldright();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getPreloan();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getFees();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getBuyunmatch();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getAp();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getApt1();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getSellunmatch();
  if (f !== 0) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = message.getCia();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getAr();
  if (f !== 0) {
    writer.writeInt64(
      29,
      f
    );
  }
  f = message.getArt1();
  if (f !== 0) {
    writer.writeInt64(
      30,
      f
    );
  }
  f = message.getPpcredit();
  if (f !== 0) {
    writer.writeInt64(
      31,
      f
    );
  }
  f = message.getCreditlimit();
  if (f !== 0) {
    writer.writeInt64(
      32,
      f
    );
  }
  f = message.getTotalassets();
  if (f !== 0) {
    writer.writeInt64(
      33,
      f
    );
  }
  f = message.getMargincalllmvsold();
  if (f !== 0) {
    writer.writeInt64(
      34,
      f
    );
  }
  f = message.getLmvnonmarginable();
  if (f !== 0) {
    writer.writeInt64(
      35,
      f
    );
  }
  f = message.getEecredit();
  if (f !== 0) {
    writer.writeInt64(
      36,
      f
    );
  }
  f = message.getTotalequity();
  if (f !== 0) {
    writer.writeInt64(
      37,
      f
    );
  }
  f = message.getEe90();
  if (f !== 0) {
    writer.writeInt64(
      38,
      f
    );
  }
  f = message.getEe80();
  if (f !== 0) {
    writer.writeInt64(
      39,
      f
    );
  }
  f = message.getEe70();
  if (f !== 0) {
    writer.writeInt64(
      40,
      f
    );
  }
  f = message.getEe60();
  if (f !== 0) {
    writer.writeInt64(
      41,
      f
    );
  }
  f = message.getEe50();
  if (f !== 0) {
    writer.writeInt64(
      42,
      f
    );
  }
};


/**
 * optional int64 CollateralAsset = 1;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCollateralasset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCollateralasset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double CallLMW = 2;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCalllmw = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCalllmw = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 Liability = 3;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getLiability = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setLiability = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 EEOrigin = 4;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEeorigin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEeorigin = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double ForceLMV = 5;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getForcelmv = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setForcelmv = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 Equity = 6;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEquity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEquity = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 EE = 7;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 CallMargin = 8;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCallmargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCallmargin = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 CashBalance = 9;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCashbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCashbalance = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 PurchasingPower = 10;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getPurchasingpower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setPurchasingpower = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 CallForcesell = 11;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCallforcesell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCallforcesell = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 LMV = 12;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getLmv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setLmv = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 MarginCall = 13;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getMargincall = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setMargincall = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 Withdrawal = 14;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getWithdrawal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setWithdrawal = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 CollateralA = 15;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCollaterala = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCollaterala = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string Action = 16;
 * @return {string}
 */
proto.PPMMRAccountResponse.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.PPMMRAccountResponse.prototype.setAction = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional double MarginRatio = 17;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getMarginratio = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 17, 0.0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setMarginratio = function(value) {
  jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional int64 Debt = 18;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getDebt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setDebt = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 AccruedInterest = 19;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getAccruedinterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setAccruedinterest = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 HoldRight = 20;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getHoldright = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setHoldright = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int64 PreLoan = 21;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getPreloan = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setPreloan = function(value) {
  jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 Fees = 22;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getFees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setFees = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int64 BuyUnmatch = 23;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getBuyunmatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setBuyunmatch = function(value) {
  jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int64 AP = 24;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getAp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setAp = function(value) {
  jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int64 APT1 = 25;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getApt1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setApt1 = function(value) {
  jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional int64 SellUnmatch = 26;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getSellunmatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setSellunmatch = function(value) {
  jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional int64 CIA = 28;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCia = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCia = function(value) {
  jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int64 AR = 29;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getAr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setAr = function(value) {
  jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional int64 ART1 = 30;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getArt1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setArt1 = function(value) {
  jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional int64 PPCredit = 31;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getPpcredit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setPpcredit = function(value) {
  jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional int64 CreditLimit = 32;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getCreditlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setCreditlimit = function(value) {
  jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional int64 TotalAssets = 33;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getTotalassets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setTotalassets = function(value) {
  jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional int64 MarginCallLMVSold = 34;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getMargincalllmvsold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setMargincalllmvsold = function(value) {
  jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional int64 LMVNonMarginable = 35;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getLmvnonmarginable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setLmvnonmarginable = function(value) {
  jspb.Message.setProto3IntField(this, 35, value);
};


/**
 * optional int64 EECredit = 36;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEecredit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEecredit = function(value) {
  jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional int64 TotalEquity = 37;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getTotalequity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setTotalequity = function(value) {
  jspb.Message.setProto3IntField(this, 37, value);
};


/**
 * optional int64 EE90 = 38;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe90 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe90 = function(value) {
  jspb.Message.setProto3IntField(this, 38, value);
};


/**
 * optional int64 EE80 = 39;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe80 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 39, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe80 = function(value) {
  jspb.Message.setProto3IntField(this, 39, value);
};


/**
 * optional int64 EE70 = 40;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe70 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe70 = function(value) {
  jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * optional int64 EE60 = 41;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe60 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 41, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe60 = function(value) {
  jspb.Message.setProto3IntField(this, 41, value);
};


/**
 * optional int64 EE50 = 42;
 * @return {number}
 */
proto.PPMMRAccountResponse.prototype.getEe50 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/** @param {number} value */
proto.PPMMRAccountResponse.prototype.setEe50 = function(value) {
  jspb.Message.setProto3IntField(this, 42, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_PPMMRAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_PPMMRAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_PPMMRAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_PPMMRAccountResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_PPMMRAccountResponse}
 */
proto.Response_PPMMRAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_PPMMRAccountResponse;
  return proto.Response_PPMMRAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_PPMMRAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_PPMMRAccountResponse}
 */
proto.Response_PPMMRAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_PPMMRAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_PPMMRAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_PPMMRAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_PPMMRAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_PPMMRAccountResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_PPMMRAccountResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_PPMMRAccountResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_PPMMRAccountResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_PPMMRAccountResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_PPMMRAccountResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_PPMMRAccountResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_PPMMRAccountResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response_LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Response_LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response_LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_LoginResponse.toObject = function(includeInstance, msg) {
  var obj = {
    data: msg.getData_asB64(),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response_LoginResponse}
 */
proto.Response_LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response_LoginResponse;
  return proto.Response_LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response_LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response_LoginResponse}
 */
proto.Response_LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response_LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response_LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response_LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response_LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes Data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Response_LoginResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.Response_LoginResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.Response_LoginResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.Response_LoginResponse.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.Response_LoginResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Response_LoginResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Status = 3;
 * @return {number}
 */
proto.Response_LoginResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Response_LoginResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginResponse.toObject = function(includeInstance, msg) {
  var obj = {
    isauthenticated: jspb.Message.getFieldWithDefault(msg, 1, false),
    sessiontoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    failed: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginResponse}
 */
proto.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginResponse;
  return proto.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginResponse}
 */
proto.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsauthenticated(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessiontoken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsauthenticated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSessiontoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFailed();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bool IsAuthenticated = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.LoginResponse.prototype.getIsauthenticated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.LoginResponse.prototype.setIsauthenticated = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string SessionToken = 2;
 * @return {string}
 */
proto.LoginResponse.prototype.getSessiontoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.LoginResponse.prototype.setSessiontoken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 Failed = 3;
 * @return {number}
 */
proto.LoginResponse.prototype.getFailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.LoginResponse.prototype.setFailed = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto);
