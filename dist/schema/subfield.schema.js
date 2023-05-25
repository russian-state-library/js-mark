"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subfield = void 0;
var neck_validator_1 = require("neck-validator");
var Subfield = /** @class */ (function () {
    function Subfield(code, isRequired, isRepeatable) {
        this.code = code;
        this.isRequired = isRequired;
        this.isRepeatable = isRepeatable;
    }
    Subfield.prototype.rule = function (path) {
        if (path === void 0) { path = ''; }
        var rules = [];
        var suffix = '';
        if (this.isRepeatable) {
            rules.push({ key: path + this.code, rule: ['required', 'array'] });
            suffix = neck_validator_1.Validator.VALIDATOR_RULE_DELIMITER + neck_validator_1.Validator.VALIDATOR_ARRAY_DELIMITER;
        }
        rules.push({
            key: path + this.code + suffix,
            rule: (this.isRequired) ? ['required', 'string'] : []
        });
        return rules;
    };
    return Subfield;
}());
exports.Subfield = Subfield;
