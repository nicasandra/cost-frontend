/**
 * Created by Nick on 1/1/2017.
 */
"use strict";
var Category = (function () {
    function Category(name) {
        this._name = name;
    }
    Object.defineProperty(Category.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map