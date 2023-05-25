"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicator = void 0;
var Indicator = /** @class */ (function () {
    function Indicator(name, codes) {
        this.name = name;
        this.codes = codes;
    }
    Indicator.prototype.rule = function (path) {
        if (path === void 0) { path = ''; }
        return { key: path + this.name, rule: ['required', "enums:".concat(this.codes.join(',')), 'string'] };
    };
    return Indicator;
}());
exports.Indicator = Indicator;
