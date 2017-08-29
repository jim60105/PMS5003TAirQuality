webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"TODO\">Dashboard</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('HistoryPageComponent')\">歷史數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">即時監測</a>\n      </li>\n    </ul>\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--sidebar-->\n    <div class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n      <nav>\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('HistoryPageComponent')\">歷史數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">即時監測</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <!--page-->\n    <div class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n      <!--動態page-->\n      <ng-template appDynamicComponent></ng-template>\n    </div>\n  </div>\n</div>\n<!--router-outlet></router-outlet-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__ = __webpack_require__("../../../../../src/app/dynamic-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__ = __webpack_require__("../../../../../src/app/dynamic-component.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(dynamicComponentService, componentFactoryResolver) {
        this.dynamicComponentService = dynamicComponentService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    AppComponent.prototype.displayComponent = function (componentName) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponentService.getComponent(componentName));
        var viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
    };
    //Run at start
    AppComponent.prototype.ngOnInit = function () {
        this.displayComponent('MainPageComponent');
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]) === "function" && _a || Object)
], AppComponent.prototype, "componentHost", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__safe_html_component__ = __webpack_require__("../../../../../src/app/safe-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dynamic_component_service__ = __webpack_require__("../../../../../src/app/dynamic-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dynamic_component_directive__ = __webpack_require__("../../../../../src/app/dynamic-component.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_page_map_page_component__ = __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_page_history_page_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//GoogleMap

//innerHtml Safer

//Dynamic Change Component






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_page_map_page_component__["a" /* MapPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__safe_html_component__["a" /* Safe */],
            __WEBPACK_IMPORTED_MODULE_10__dynamic_component_directive__["a" /* DynamicComponentDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
            }),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__pages_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_map_page_map_page_component__["a" /* MapPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__dynamic_component_service__["a" /* DynamicComponentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-component.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicComponentDirective = (function () {
    function DynamicComponentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return DynamicComponentDirective;
}());
DynamicComponentDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDynamicComponent]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewContainerRef */]) === "function" && _a || Object])
], DynamicComponentDirective);

var _a;
//# sourceMappingURL=dynamic-component.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_page_map_page_component__ = __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_history_page_history_page_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicComponentService = (function () {
    function DynamicComponentService() {
        this.components = {
            MainPageComponent: __WEBPACK_IMPORTED_MODULE_1__pages_main_page_main_page_component__["a" /* MainPageComponent */],
            MapPageComponent: __WEBPACK_IMPORTED_MODULE_2__pages_map_page_map_page_component__["a" /* MapPageComponent */],
            HistoryPageComponent: __WEBPACK_IMPORTED_MODULE_3__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
        };
    }
    DynamicComponentService.prototype.getComponent = function (componentName) {
        return this.components[componentName];
    };
    return DynamicComponentService;
}());
DynamicComponentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DynamicComponentService);

//# sourceMappingURL=dynamic-component.service.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = [{ "no": "1", "0": "1", "time": "2017-08-14 07:03:02", "1": "2017-08-14 07:03:02", "pm1": "9", "2": "9", "pm10": "13", "3": "13", "pm25": "13", "4": "13", "temp": "25.4", "5": "25.4", "humid": "82.6", "6": "82.6", "clientNum": "1", "7": "1" }, { "no": "2", "0": "2", "time": "2017-08-14 07:03:05", "1": "2017-08-14 07:03:05", "pm1": "9", "2": "9", "pm10": "13", "3": "13", "pm25": "13", "4": "13", "temp": "25.4", "5": "25.4", "humid": "82.2", "6": "82.2", "clientNum": "1", "7": "1" }, { "no": "3", "0": "3", "time": "2017-08-14 07:03:08", "1": "2017-08-14 07:03:08", "pm1": "9", "2": "9", "pm10": "13", "3": "13", "pm25": "13", "4": "13", "temp": "25.5", "5": "25.5", "humid": "81.9", "6": "81.9", "clientNum": "1", "7": "1" }, { "no": "4", "0": "4", "time": "2017-08-14 07:03:11", "1": "2017-08-14 07:03:11", "pm1": "8", "2": "8", "pm10": "12", "3": "12", "pm25": "12", "4": "12", "temp": "25.6", "5": "25.6", "humid": "81.6", "6": "81.6", "clientNum": "1", "7": "1" }, { "no": "5", "0": "5", "time": "2017-08-14 07:03:14", "1": "2017-08-14 07:03:14", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.6", "5": "25.6", "humid": "81.4", "6": "81.4", "clientNum": "1", "7": "1" }, { "no": "6", "0": "6", "time": "2017-08-14 07:03:17", "1": "2017-08-14 07:03:17", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.7", "5": "25.7", "humid": "81.1", "6": "81.1", "clientNum": "1", "7": "1" }, { "no": "7", "0": "7", "time": "2017-08-14 07:03:20", "1": "2017-08-14 07:03:20", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.8", "5": "25.8", "humid": "80.8", "6": "80.8", "clientNum": "1", "7": "1" }, { "no": "8", "0": "8", "time": "2017-08-14 07:03:23", "1": "2017-08-14 07:03:23", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.8", "5": "25.8", "humid": "80.5", "6": "80.5", "clientNum": "1", "7": "1" }, { "no": "9", "0": "9", "time": "2017-08-14 07:03:27", "1": "2017-08-14 07:03:27", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.8", "5": "25.8", "humid": "80.2", "6": "80.2", "clientNum": "1", "7": "1" }, { "no": "10", "0": "10", "time": "2017-08-14 07:03:30", "1": "2017-08-14 07:03:30", "pm1": "7", "2": "7", "pm10": "0", "3": "0", "pm25": "10", "4": "10", "temp": "25.8", "5": "25.8", "humid": "80.2", "6": "80.2", "clientNum": "1", "7": "1" }, { "no": "11", "0": "11", "time": "2017-08-14 07:03:33", "1": "2017-08-14 07:03:33", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "25.9", "5": "25.9", "humid": "80", "6": "80", "clientNum": "1", "7": "1" }, { "no": "12", "0": "12", "time": "2017-08-14 07:03:36", "1": "2017-08-14 07:03:36", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26", "5": "26", "humid": "79.9", "6": "79.9", "clientNum": "1", "7": "1" }, { "no": "13", "0": "13", "time": "2017-08-14 07:03:39", "1": "2017-08-14 07:03:39", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26", "5": "26", "humid": "79.7", "6": "79.7", "clientNum": "1", "7": "1" }, { "no": "14", "0": "14", "time": "2017-08-14 07:03:42", "1": "2017-08-14 07:03:42", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "12", "4": "12", "temp": "26.1", "5": "26.1", "humid": "79.7", "6": "79.7", "clientNum": "1", "7": "1" }, { "no": "15", "0": "15", "time": "2017-08-14 07:03:45", "1": "2017-08-14 07:03:45", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.1", "5": "26.1", "humid": "79.5", "6": "79.5", "clientNum": "1", "7": "1" }, { "no": "16", "0": "16", "time": "2017-08-14 07:03:49", "1": "2017-08-14 07:03:49", "pm1": "8", "2": "8", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.1", "5": "26.1", "humid": "79.3", "6": "79.3", "clientNum": "1", "7": "1" }, { "no": "17", "0": "17", "time": "2017-08-14 07:03:52", "1": "2017-08-14 07:03:52", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.2", "5": "26.2", "humid": "79.1", "6": "79.1", "clientNum": "1", "7": "1" }, { "no": "18", "0": "18", "time": "2017-08-14 07:03:55", "1": "2017-08-14 07:03:55", "pm1": "9", "2": "9", "pm10": "13", "3": "13", "pm25": "12", "4": "12", "temp": "26.2", "5": "26.2", "humid": "78.9", "6": "78.9", "clientNum": "1", "7": "1" }, { "no": "19", "0": "19", "time": "2017-08-14 07:03:58", "1": "2017-08-14 07:03:58", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.3", "5": "26.3", "humid": "78.7", "6": "78.7", "clientNum": "1", "7": "1" }, { "no": "20", "0": "20", "time": "2017-08-14 07:04:01", "1": "2017-08-14 07:04:01", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.3", "5": "26.3", "humid": "78.4", "6": "78.4", "clientNum": "1", "7": "1" }, { "no": "21", "0": "21", "time": "2017-08-14 07:04:04", "1": "2017-08-14 07:04:04", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.4", "5": "26.4", "humid": "78.3", "6": "78.3", "clientNum": "1", "7": "1" }, { "no": "22", "0": "22", "time": "2017-08-14 07:04:07", "1": "2017-08-14 07:04:07", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.4", "5": "26.4", "humid": "78.2", "6": "78.2", "clientNum": "1", "7": "1" }, { "no": "23", "0": "23", "time": "2017-08-14 07:04:10", "1": "2017-08-14 07:04:10", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "11", "4": "11", "temp": "26.5", "5": "26.5", "humid": "79.2", "6": "79.2", "clientNum": "1", "7": "1" }, { "no": "24", "0": "24", "time": "2017-08-14 07:04:13", "1": "2017-08-14 07:04:13", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.5", "5": "26.5", "humid": "79.2", "6": "79.2", "clientNum": "1", "7": "1" }, { "no": "25", "0": "25", "time": "2017-08-14 07:04:17", "1": "2017-08-14 07:04:17", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.5", "5": "26.5", "humid": "78.7", "6": "78.7", "clientNum": "1", "7": "1" }, { "no": "26", "0": "26", "time": "2017-08-14 07:04:20", "1": "2017-08-14 07:04:20", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.6", "5": "26.6", "humid": "78.3", "6": "78.3", "clientNum": "1", "7": "1" }, { "no": "27", "0": "27", "time": "2017-08-14 07:04:23", "1": "2017-08-14 07:04:23", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.6", "5": "26.6", "humid": "78.1", "6": "78.1", "clientNum": "1", "7": "1" }, { "no": "28", "0": "28", "time": "2017-08-14 07:04:26", "1": "2017-08-14 07:04:26", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.7", "5": "26.7", "humid": "77.8", "6": "77.8", "clientNum": "1", "7": "1" }, { "no": "29", "0": "29", "time": "2017-08-14 07:04:29", "1": "2017-08-14 07:04:29", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.7", "5": "26.7", "humid": "77.5", "6": "77.5", "clientNum": "1", "7": "1" }, { "no": "30", "0": "30", "time": "2017-08-14 07:04:32", "1": "2017-08-14 07:04:32", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.8", "5": "26.8", "humid": "77.3", "6": "77.3", "clientNum": "1", "7": "1" }, { "no": "31", "0": "31", "time": "2017-08-14 07:04:35", "1": "2017-08-14 07:04:35", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.8", "5": "26.8", "humid": "77.1", "6": "77.1", "clientNum": "1", "7": "1" }, { "no": "32", "0": "32", "time": "2017-08-14 07:04:39", "1": "2017-08-14 07:04:39", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.8", "5": "26.8", "humid": "76.8", "6": "76.8", "clientNum": "1", "7": "1" }, { "no": "33", "0": "33", "time": "2017-08-14 07:04:42", "1": "2017-08-14 07:04:42", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.9", "5": "26.9", "humid": "76.6", "6": "76.6", "clientNum": "1", "7": "1" }, { "no": "34", "0": "34", "time": "2017-08-14 07:04:45", "1": "2017-08-14 07:04:45", "pm1": "10", "2": "10", "pm10": "12", "3": "12", "pm25": "12", "4": "12", "temp": "26.9", "5": "26.9", "humid": "76.5", "6": "76.5", "clientNum": "1", "7": "1" }, { "no": "35", "0": "35", "time": "2017-08-14 07:04:48", "1": "2017-08-14 07:04:48", "pm1": "9", "2": "9", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "26.9", "5": "26.9", "humid": "77.6", "6": "77.6", "clientNum": "1", "7": "1" }, { "no": "36", "0": "36", "time": "2017-08-14 07:04:51", "1": "2017-08-14 07:04:51", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "12", "4": "12", "temp": "26.9", "5": "26.9", "humid": "77.9", "6": "77.9", "clientNum": "1", "7": "1" }, { "no": "37", "0": "37", "time": "2017-08-14 07:04:55", "1": "2017-08-14 07:04:55", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "27", "5": "27", "humid": "77.4", "6": "77.4", "clientNum": "1", "7": "1" }, { "no": "38", "0": "38", "time": "2017-08-14 07:04:58", "1": "2017-08-14 07:04:58", "pm1": "8", "2": "8", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "27", "5": "27", "humid": "76.7", "6": "76.7", "clientNum": "1", "7": "1" }, { "no": "39", "0": "39", "time": "2017-08-14 07:05:01", "1": "2017-08-14 07:05:01", "pm1": "7", "2": "7", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "27", "5": "27", "humid": "76.3", "6": "76.3", "clientNum": "1", "7": "1" }, { "no": "40", "0": "40", "time": "2017-08-14 07:05:05", "1": "2017-08-14 07:05:05", "pm1": "8", "2": "8", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "27.1", "5": "27.1", "humid": "76.1", "6": "76.1", "clientNum": "1", "7": "1" }, { "no": "41", "0": "41", "time": "2017-08-14 07:05:09", "1": "2017-08-14 07:05:09", "pm1": "8", "2": "8", "pm10": "10", "3": "10", "pm25": "10", "4": "10", "temp": "27.1", "5": "27.1", "humid": "75.9", "6": "75.9", "clientNum": "1", "7": "1" }, { "no": "42", "0": "42", "time": "2017-08-14 07:05:12", "1": "2017-08-14 07:05:12", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "10", "4": "10", "temp": "27.1", "5": "27.1", "humid": "75.7", "6": "75.7", "clientNum": "1", "7": "1" }, { "no": "43", "0": "43", "time": "2017-08-14 07:05:15", "1": "2017-08-14 07:05:15", "pm1": "9", "2": "9", "pm10": "12", "3": "12", "pm25": "12", "4": "12", "temp": "27.2", "5": "27.2", "humid": "75.7", "6": "75.7", "clientNum": "1", "7": "1" }, { "no": "44", "0": "44", "time": "2017-08-14 07:05:18", "1": "2017-08-14 07:05:18", "pm1": "8", "2": "8", "pm10": "11", "3": "11", "pm25": "11", "4": "11", "temp": "27.2", "5": "27.2", "humid": "75.6", "6": "75.6", "clientNum": "1", "7": "1" }];
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--\n      <h1>Dashboard</h1>\n      <section class=\"row text-center placeholders\">\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <div class=\"text-muted\">Something else</div>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n      </section>\n  -->\n  <h2>數據顯示</h2>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>time</th>\n        <th>PM1</th>\n        <th>PM2.5</th>\n        <th>PM10</th>\n        <th>temp</th>\n        <th>humid</th>\n        <th>clientNum</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let data of datas\">\n        <td [innerHtml]=\"data.time\"></td>\n        <td [innerHtml]=\"data.pm1\"></td>\n        <td [innerHtml]=\"data.pm25\"></td>\n        <td [innerHtml]=\"data.pm10\"></td>\n        <td [innerHtml]=\"data.temp\"></td>\n        <td [innerHtml]=\"data.humid\"></td>\n        <td [innerHtml]=\"data.clientNum\"></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_data__ = __webpack_require__("../../../../../src/app/mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryPageComponent = (function () {
    function HistoryPageComponent(http) {
        this.http = http;
    }
    HistoryPageComponent.prototype.ngOnInit = function () {
        this.datas = __WEBPACK_IMPORTED_MODULE_3__mock_data__["a" /* DATA */];
    };
    return HistoryPageComponent;
}());
HistoryPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-history-page',
        template: __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/history-page/history-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HistoryPageComponent);

var _a;
//# sourceMappingURL=history-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!--\r\n        <h1>Dashboard</h1>\r\n        <section class=\"row text-center placeholders\">\r\n            <div class=\"col-6 col-sm-3 placeholder\">\r\n                <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n                <h4>Label</h4>\r\n                <div class=\"text-muted\">Something else</div>\r\n            </div>\r\n            <div class=\"col-6 col-sm-3 placeholder\">\r\n                <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n                <h4>Label</h4>\r\n                <span class=\"text-muted\">Something else</span>\r\n            </div>\r\n            <div class=\"col-6 col-sm-3 placeholder\">\r\n                <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n                <h4>Label</h4>\r\n                <span class=\"text-muted\">Something else</span>\r\n            </div>\r\n            <div class=\"col-6 col-sm-3 placeholder\">\r\n                <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n                <h4>Label</h4>\r\n                <span class=\"text-muted\">Something else</span>\r\n            </div>\r\n        </section>\r\n    -->\r\n    <h2>數據顯示</h2>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>time</th>\r\n                <th>PM1</th>\r\n                <th>PM2.5</th>\r\n                <th>PM10</th>\r\n                <th>temp</th>\r\n                <th>humid</th>\r\n                <th>clientNum</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of datas\">\r\n                <td [innerHtml]=\"data.time\"></td>\r\n                <td [innerHtml]=\"data.pm1\"></td>\r\n                <td [innerHtml]=\"data.pm25\"></td>\r\n                <td [innerHtml]=\"data.pm10\"></td>\r\n                <td [innerHtml]=\"data.temp\"></td>\r\n                <td [innerHtml]=\"data.humid\"></td>\r\n                <td [innerHtml]=\"data.clientNum\"></td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_data__ = __webpack_require__("../../../../../src/app/mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPageComponent = (function () {
    function MainPageComponent(http) {
        this.http = http;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.datas = __WEBPACK_IMPORTED_MODULE_3__mock_data__["a" /* DATA */];
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\nagm-map {\r\n    height: calc(100vh - 55.47px - 1rem);\r\n    margin: 0;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapPageComponent = (function () {
    function MapPageComponent() {
        this.lat = 24.1791743;
        this.lng = 120.6014858;
        this.zoom = 15;
    }
    return MapPageComponent;
}());
MapPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map-page',
        template: __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map-page/map-page.component.css")]
    })
], MapPageComponent);

//# sourceMappingURL=map-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Safe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Safe = (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    return Safe;
}());
Safe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], Safe);

var _a;
//# sourceMappingURL=safe-html.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map