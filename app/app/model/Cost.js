"use strict";
/**
 * Created by Nick on 1/1/2017.
 */
var Cost = (function () {
    function Cost(name, value, category, details) {
        this._name = name;
        this._value = value;
        this._category = category;
        this._details = details;
    }
    Object.defineProperty(Cost.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cost.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cost.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cost.prototype, "details", {
        get: function () {
            return this._details;
        },
        set: function (value) {
            this._details = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cost;
}());
exports.Cost = Cost;
//# sourceMappingURL=Cost.js.map