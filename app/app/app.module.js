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
// External
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Internal
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var users_component_1 = require("./users/users.component");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: '', component: home_component_1.HomeComponent },
                { path: 'users', component: users_component_1.UsersComponent }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            users_component_1.UsersComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map