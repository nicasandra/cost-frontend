"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Category_1 = require("../model/Category");
var Cost_1 = require("../model/Cost");
/**
 * Created by nicasandra on 12/16/2016.
 */
var UsersComponent = (function () {
    function UsersComponent() {
        this.category = new Category_1.Category(null);
        this.cost = new Cost_1.Cost(null, null, null, null);
        this.selectedCategory = "c";
        this.category1 = new Category_1.Category("Category 1");
        this.costs = [
            new Cost_1.Cost("Cost 1", 1000, this.category1, "Details 1")
        ];
        this.categories = [
            new Category_1.Category("Food"),
            new Category_1.Category("Drink")
        ];
    }
    UsersComponent.prototype.addCategory = function () {
        this.categories.push(new Category_1.Category(this.category.name));
        this.category.name = "";
    };
    UsersComponent.prototype.deleteCategory = function (index) {
        this.categories.splice(index, 1);
    };
    UsersComponent.prototype.deleteCost = function (index) {
        this.costs.splice(index, 1);
    };
    UsersComponent.prototype.addCost = function () {
        if (this.selectedCategory != "new-category") {
            this.costs.push(new Cost_1.Cost(this.cost.name, this.cost.value, new Category_1.Category(this.selectedCategory), this.cost.details));
        }
    };
    UsersComponent.prototype.open = function (v) {
        this.selectedCategory = v;
        if (v === "new-category") {
            document.getElementById("open-modal").click();
            document.getElementById("category-select").value = "choose-category";
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: 'app/users/users.component.html'
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map