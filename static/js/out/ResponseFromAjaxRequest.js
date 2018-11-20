"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AsyncObject = require('./cutie/AsyncObject'); // custom call
// err, {statusCode, headers, body} in callback
// options: {url, method, headers, body, mimeType, withCredentials, user, password, timeout}


var responseFromAjaxRequest = function responseFromAjaxRequest(options, requestBody, callback) {
  var resObj = {};
  var req = new XMLHttpRequest();
  req.open(options.method, options.url, true, options.user || null, options.password || null);
  req.withCredentials = options.withCredentials || false;
  req.timeout = options.timeout || 0;
  req.overrideMimeType(options.overrideMimeType);
  var headers = options.headers || [];

  for (var header in headers) {
    req.setRequestHeader(header, headers[header]);
  }

  req.onreadystatechange = function () {
    if (req.readyState === req.DONE) {
      resObj.statusCode = req.status;

      var _headers = req.getAllResponseHeaders().trim().split(/[\r\n]+/);

      var headerMap = {};

      _headers.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headerMap[header] = value;
      });

      resObj.headers = headerMap;

      if (req.status === 200) {
        resObj.body = req.response;
      } else {
        resObj.body = null;
      }

      callback(null, resObj);
    }
  };

  req.send(options.body || null);
}; // Represented result is {statusCode, headers, body}


var ResponseFromAjaxRequest =
/*#__PURE__*/
function (_AsyncObject) {
  _inherits(ResponseFromAjaxRequest, _AsyncObject);

  function ResponseFromAjaxRequest(options, requestBody) {
    _classCallCheck(this, ResponseFromAjaxRequest);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResponseFromAjaxRequest).call(this, options, requestBody));
  }

  _createClass(ResponseFromAjaxRequest, [{
    key: "definedAsyncCall",
    value: function definedAsyncCall() {
      return responseFromAjaxRequest;
    }
  }]);

  return ResponseFromAjaxRequest;
}(AsyncObject);

module.exports = ResponseFromAjaxRequest;
