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
var User_1 = require("../model/User");
/**
 * Created by nicasandra on 12/16/2016.
 */
var UsersComponent = (function () {
    function UsersComponent() {
        this.user = new User_1.User(null, null, null, null, null, null, null);
        this.users = [
            new User_1.User(1, 'nickasandra', 'Nick', 'Casandra', '123456', '0732401175', new Date),
            new User_1.User(2, 'ovgeorgescu', 'Ovidiu', 'Georgescu', '123456', '0732401175', new Date),
        ];
    }
    UsersComponent.prototype.delete = function (i) {
        this.users.splice(i, 1);
    };
    UsersComponent.prototype.addUser = function () {
        this.users.push(new User_1.User(null, this.user.username, this.user.firstname, this.user.lastname, null, null, null));
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