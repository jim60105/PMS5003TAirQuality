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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_history_page_history_page_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_page_map_page_component__ = __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_average_page_average_page_component__ = __webpack_require__("../../../../../src/app/pages/average-page/average-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compare_page_compare_page_component__ = __webpack_require__("../../../../../src/app/pages/compare-page/compare-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_page_signup_page_component__ = __webpack_require__("../../../../../src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_page_setting_page_component__ = __webpack_require__("../../../../../src/app/pages/setting-page/setting-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selective_preloading_strategy__ = __webpack_require__("../../../../../src/app/selective-preloading-strategy.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', children: [
            { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_8__pages_setting_page_setting_page_component__["a" /* SettingPageComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_page_signup_page_component__["a" /* SignupPageComponent */] },
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__pages_main_page_main_page_component__["a" /* MainPageComponent */] },
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_3__pages_history_page_history_page_component__["a" /* HistoryPageComponent */] },
            { path: 'average', component: __WEBPACK_IMPORTED_MODULE_5__pages_average_page_average_page_component__["a" /* AveragePageComponent */] },
            { path: 'compare', component: __WEBPACK_IMPORTED_MODULE_6__pages_compare_page_compare_page_component__["a" /* ComparePageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__pages_map_page_map_page_component__["a" /* MapPageComponent */] },
            { path: '**', redirectTo: '' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: false,
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_9__selective_preloading_strategy__["a" /* SelectivePreloadingStrategy */],
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__selective_preloading_strategy__["a" /* SelectivePreloadingStrategy */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"wrapper\">\r\n\r\n  <!-- Sidebar -->\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\" (click)=\"isCollapsed = !isCollapsed\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\" routerLink=\"/\" routerLinkActive=\"active\">樹梅派空汙監測專題</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\" [ngbCollapse]=\"isCollapsed\" >\r\n\r\n      <ul class=\"nav navbar-nav side-nav\">\r\n        <app-login-page (isCollapsedOut)=\"isCollapsed = $event;\"></app-login-page>\r\n        <li [ngClass]=\"navbarClass[0]\" ><a href=\"javascript:void(0);\" (click)=\"setNavbarActive(0)\" routerLink=\"/\" routerLinkActive=\"active\">首頁</a></li>\r\n        <li [ngClass]=\"navbarClass[1]\" ><a href=\"javascript:void(0);\" (click)=\"setNavbarActive(1)\" routerLink=\"/main\" routerLinkActive=\"active\">總覽</a></li>\r\n        <li [ngClass]=\"navbarClass[2]\" ><a href=\"javascript:void(0);\" (click)=\"setNavbarActive(2)\" routerLink=\"/history\" routerLinkActive=\"active\">歷史數據</a></li>\r\n        <li [ngClass]=\"navbarClass[3]\" ><a href=\"javascript:void(0);\" (click)=\"setNavbarActive(3)\" routerLink=\"/average\" routerLinkActive=\"active\">平均數據</a></li>\r\n        <li [ngClass]=\"navbarClass[4]\" ><a href=\"javascript:void(0);\" (click)=\"setNavbarActive(4)\" routerLink=\"/compare\" routerLinkActive=\"active\">比較工具</a></li>\r\n        <div class=\"version\">\r\n          <small>v18.05.09.0</small>\r\n        </div>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </nav>\r\n\r\n  <div id=\"page-wrapper\" [ngClass]=\"(router.url=='/')?'noPadding':''\" (click)=\"isCollapsed=true\">\r\n        <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.isCollapsed = true;
        this.navbarClass = ["", "", "", ""];
        this.tempLoc = window.location.hash;
        this.routeNum = {
            "": 0,
            "#/": 0,
            "#/main": 1,
            "#/history": 2,
            "#/average": 3,
            "#/compare": 4
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setNavbarActive(this.routeNum[window.location.hash]);
    };
    AppComponent.prototype.ngDoCheck = function () {
        if (this.tempLoc != window.location.hash) {
            this.tempLoc = window.location.hash;
            this.setNavbarActive(this.routeNum[window.location.hash]);
        }
    };
    AppComponent.prototype.setNavbarActive = function (component) {
        this.isCollapsed = true;
        for (var i = 0; i < this.navbarClass.length; i++) {
            this.navbarClass[i] = "";
        }
        this.navbarClass[component] = "active";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__safe_html_component__ = __webpack_require__("../../../../../src/app/safe-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_4_data_table_src_index__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_history_page_history_page_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_map_page_map_page_component__ = __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_average_page_average_page_component__ = __webpack_require__("../../../../../src/app/pages/average-page/average-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_compare_page_compare_page_component__ = __webpack_require__("../../../../../src/app/pages/compare-page/compare-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signup_page_signup_page_component__ = __webpack_require__("../../../../../src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_setting_page_setting_page_component__ = __webpack_require__("../../../../../src/app/pages/setting-page/setting-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__data_table_data_table_component__ = __webpack_require__("../../../../../src/app/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__loading_component__ = __webpack_require__("../../../../../src/app/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__portraitWarning_component__ = __webpack_require__("../../../../../src/app/portraitWarning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_get_data_service__ = __webpack_require__("../../../../../src/app/services/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_get_single_data_service__ = __webpack_require__("../../../../../src/app/services/get-single-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_get_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_get_single_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-single-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_set_user_device_service__ = __webpack_require__("../../../../../src/app/services/set-user-device.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//Datepicker

//GoogleMap


//innerHtml Safer

//Charts

//Angular 2 Data Table Bootstrap 4
//https://www.npmjs.com/package/angular-4-data-table-fix

//Slider






















var AppModule = /** @class */ (function () {
    function AppModule(router) {
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_page_map_page_component__["a" /* MapPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__data_table_data_table_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_12__safe_html_component__["a" /* Safe */],
                __WEBPACK_IMPORTED_MODULE_20__pages_average_page_average_page_component__["a" /* AveragePageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_compare_page_compare_page_component__["a" /* ComparePageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__portraitWarning_component__["a" /* PortraitWarningComponent */],
                __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signup_page_signup_page_component__["a" /* SignupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_setting_page_setting_page_component__["a" /* SettingPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
                }),
                __WEBPACK_IMPORTED_MODULE_11__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_4_data_table_src_index__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__["Daterangepicker"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__services_get_device_service__["a" /* GetDeviceService */],
                __WEBPACK_IMPORTED_MODULE_29__services_get_data_service__["a" /* GetDataService */],
                __WEBPACK_IMPORTED_MODULE_30__services_get_single_data_service__["a" /* GetSingleDataService */],
                __WEBPACK_IMPORTED_MODULE_31__services_get_lassdata_service__["a" /* GetLASSDataService */],
                __WEBPACK_IMPORTED_MODULE_32__services_get_single_lassdata_service__["a" /* GetSingleLASSDataService */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_daterangepicker__["DaterangepickerConfig"],
                __WEBPACK_IMPORTED_MODULE_33__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_34__services_get_lassdevice_service__["a" /* GetLassDeviceService */],
                __WEBPACK_IMPORTED_MODULE_35__services_get_user_device_service__["a" /* GetUserDeviceService */],
                __WEBPACK_IMPORTED_MODULE_36__services_set_user_device_service__["a" /* SetUserDeviceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calc-AQI.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcAQIComponent; });
var CalcAQIComponent = /** @class */ (function () {
    function CalcAQIComponent() {
    }
    CalcAQIComponent.prototype.calc = function (pm25, pm10) {
        var temp25 = 0;
        var temp10 = 0;
        pm25 = Number(pm25);
        pm10 = Number(pm10);
        //顏色及數值依照政府標準
        //https://taqm.epa.gov.tw/taqm/tw/b0201.aspx
        switch (true) {
            case (pm25 <= 15.4)://green
                temp25 = 1;
                break;
            case (pm25 >= 15.5 && pm25 <= 35.4)://yellow
                temp25 = 2;
                break;
            case (pm25 >= 35.5 && pm25 <= 54.4)://orange
                temp25 = 3;
                break;
            case (pm25 >= 54.5 && pm25 <= 150.4)://red
                temp25 = 4;
                break;
            case (pm25 >= 150.5 && pm25 <= 250.4)://purple
                temp25 = 5;
                break;
            case (pm25 >= 250.5)://maroon
                temp25 = 6;
                break;
        }
        switch (true) {
            case (pm10 <= 54):
                temp10 = 1;
                break;
            case (pm10 >= 55 && pm10 <= 125):
                temp10 = 2;
                break;
            case (pm10 >= 126 && pm10 <= 254):
                temp10 = 3;
                break;
            case (pm10 >= 255 && pm10 <= 354):
                temp10 = 4;
                break;
            case (pm10 >= 355 && pm10 <= 424):
                temp10 = 5;
                break;
            case (pm10 >= 425):
                temp10 = 6;
                break;
        }
        return Math.max(temp10, temp25);
    };
    return CalcAQIComponent;
}());

//# sourceMappingURL=calc-AQI.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataIsReady\" style=\"margin: auto;\">\r\n    <data-table headerTitle=\"\" [items]=\"items\" [itemCount]=\"itemCount\" (reload)=\"reloadItems($event)\" [limit]=\"limit\" style=\"min-width: 675px;\">\r\n        <data-table-column\r\n                *ngFor=\"let p of property;let idx=index\"\r\n                property=\"{{p}}\"\r\n                header=\"{{title[idx]}}\"\r\n                sortable=\"{{sortable[idx]}}\">\r\n\r\n            <!--位置顯示文字 -->\r\n            <!--ng-template #dataTableCell let-item=\"item\" *ngIf=\"p=='clientNum'\">\r\n                <span *ngIf=\"item.clientNum!==undefined\">{{devices[item.clientNum].name}}</span>\r\n            </ng-template-->\r\n\r\n            <ng-template #dataTableHeader let-item=\"item\">\r\n                <div ngClass=\"{{titleClass[idx]}}\">{{title[idx]}}</div>\r\n            </ng-template>\r\n        </data-table-column>\r\n\r\n    </data-table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_4_data_table_src_index__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_4_data_table_src_tools_data_table_resource__ = __webpack_require__("../../../../angular-4-data-table/src/tools/data-table-resource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//noinspection TypeScriptCheckImport

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.dataTemp = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.data);
        //顯示列數
        this.limit = 10;
        this.title = ['Time', '位置', 'PM1', 'PM2.5', 'PM10', '溫度', '濕度'];
        this.property = ['time', 'device_id', 'pm1', 'pm25', 'pm10', 'temp', 'humid'];
        this.sortable = ['true', 'true', 'true', 'true', 'true', 'true', 'true'];
        this.titleClass = ['', '', '', '', '', '', ''];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_4_data_table_src_tools_data_table_resource__["a" /* DataTableResource */](this.data);
        this.items = [];
        this.itemCount = 0;
        this.dataIsReady = false;
    }
    DataTableComponent.prototype.ngDoCheck = function () {
        var _this = this;
        //如果資料有更改就重新載入
        if (this.data !== undefined && !__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](this.dataTemp, this.data)) {
            this.dataIsReady = false;
            this.itemResource = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_4_data_table_src_tools_data_table_resource__["a" /* DataTableResource */](this.data);
            this.itemResource.count().then(function (count) { return _this.itemCount = count; });
            this.reloadItems({ offset: 0, limit: this.limit });
            this.dataTemp = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.data);
            this.dataIsReady = true;
        }
    };
    //重新整理版面
    DataTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        //params: {offset: 0, limit: 10}
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__node_modules_angular_4_data_table_src_index__["a" /* DataTableModule */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_4_data_table_src_index__["a" /* DataTableModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_4_data_table_src_index__["a" /* DataTableModule */]) === "function" && _a || Object)
    ], DataTableComponent.prototype, "_DataTableModule", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "devices", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DataTableComponent.prototype, "limit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "sortable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "titleClass", void 0);
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__("../../../../../src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-table/data-table.component.css")]
        })
    ], DataTableComponent);
    return DataTableComponent;
    var _a;
}());

//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/daterangepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaterangepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__);


var DaterangepickerComponent = /** @class */ (function () {
    function DaterangepickerComponent(minDate, maxDate) {
        if (minDate === void 0) { minDate = (__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].check('minDate')) ? (__WEBPACK_IMPORTED_MODULE_0_moment__(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].get('minDate'))) : (__WEBPACK_IMPORTED_MODULE_0_moment__().subtract(7, 'day')); }
        if (maxDate === void 0) { maxDate = (__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].check('maxDate')) ? (__WEBPACK_IMPORTED_MODULE_0_moment__(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].get('maxDate'))) : (__WEBPACK_IMPORTED_MODULE_0_moment__().endOf('day')); }
        this.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
            ranges: {
                'Today': [__WEBPACK_IMPORTED_MODULE_0_moment__(), __WEBPACK_IMPORTED_MODULE_0_moment__()],
                'Last 2 Days': [__WEBPACK_IMPORTED_MODULE_0_moment__().subtract(2, 'day'), __WEBPACK_IMPORTED_MODULE_0_moment__()],
                'Last Week': [__WEBPACK_IMPORTED_MODULE_0_moment__().subtract(7, 'day'), __WEBPACK_IMPORTED_MODULE_0_moment__()],
                'Last 2 Weeks': [__WEBPACK_IMPORTED_MODULE_0_moment__().subtract(14, 'day'), __WEBPACK_IMPORTED_MODULE_0_moment__()],
                'Last Month': [__WEBPACK_IMPORTED_MODULE_0_moment__().subtract(1, 'month'), __WEBPACK_IMPORTED_MODULE_0_moment__()],
            },
            startDate: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(7, 'day'),
            endDate: __WEBPACK_IMPORTED_MODULE_0_moment__(),
            minDate: __WEBPACK_IMPORTED_MODULE_0_moment__('2017/10/02', 'YYYY/MM/DD'),
            maxDate: __WEBPACK_IMPORTED_MODULE_0_moment__(),
            autoApply: true
        };
        this.rangeValue = [__WEBPACK_IMPORTED_MODULE_0_moment__(minDate), __WEBPACK_IMPORTED_MODULE_0_moment__(maxDate)];
        this.settings['startDate'] = (__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].check('minDate')) ? (__WEBPACK_IMPORTED_MODULE_0_moment__(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].get('minDate'))) : (__WEBPACK_IMPORTED_MODULE_0_moment__(minDate));
        this.settings['endDate'] = (__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].check('maxDate')) ? (__WEBPACK_IMPORTED_MODULE_0_moment__(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].get('maxDate'))) : (__WEBPACK_IMPORTED_MODULE_0_moment__(maxDate));
    }
    DaterangepickerComponent.prototype.setTimeByDate = function (minDate, maxDate) {
        if (minDate === void 0) { minDate = __WEBPACK_IMPORTED_MODULE_0_moment__().startOf('day').toDate(); }
        if (maxDate === void 0) { maxDate = __WEBPACK_IMPORTED_MODULE_0_moment__().endOf('day').toDate(); }
        this.rangeValue[0] = __WEBPACK_IMPORTED_MODULE_0_moment__(minDate);
        this.rangeValue[1] = __WEBPACK_IMPORTED_MODULE_0_moment__(maxDate);
        __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].set('minDate', String(__WEBPACK_IMPORTED_MODULE_0_moment__(minDate).format()));
        __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].set('maxDate', String(__WEBPACK_IMPORTED_MODULE_0_moment__(maxDate).format()));
    };
    DaterangepickerComponent.prototype.getTimeByDate = function () {
        return [this.rangeValue[0].toDate(), this.rangeValue[1].toDate()];
    };
    DaterangepickerComponent.prototype.getSQLString = function () {
        return [
            this.rangeValue[0].startOf('day').format('YYYY-MM-DD HH:mm:ss'),
            this.rangeValue[1].endOf('day').format('YYYY-MM-DD HH:mm:ss')
        ];
        //new Date((new Date(this.rangeValue[0])).getTime() - ((new Date()).getTimezoneOffset()*60000)).toISOString().slice(0, 19).replace('T', ' '),
        //new Date(new Date(new Date((new Date(this.rangeValue[1]).setHours(23,59,59,999))).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ')
    };
    return DaterangepickerComponent;
}());

//# sourceMappingURL=daterangepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "loading", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: "\n    <div id=\"over\" class=\"over\" *ngIf=\"loading\">\n        <div id=\"layout\" class=\"layout\"><img src=\"../assets/pic/loading.png\" /></div>\n    </div>\n  ",
            styles: ["\n.over {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #f5f5f5;\n    opacity:0.5;\n    z-index: 900;\n}\n\n.layout {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform:translate(-50%,-50%);\n    z-index: 901;\n    text-align: center;\n}\n\n.layout img{\n    -webkit-animation: loading 2s infinite linear;\n    -moz-animation: loading 2s infinite linear;\n    -o-animation: loading 2s infinite linear;\n    animation: loading 2s infinite linear;\n    width: 25vh;\n}\n@-webkit-keyframes loading {\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@-moz-keyframes loading {\n    from {\n        -moz-transform: rotate(0deg);\n    }\n    to {\n        -moz-transform: rotate(360deg);\n    }\n}\n@-o-keyframes loading {\n    from {\n        -o-transform: rotate(0deg);\n    }\n    to {\n        -o-transform: rotate(360deg);\n    }\n}\n@keyframes loading {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a i{\r\n    margin: 5px;\r\n}\r\n\r\n.navbar-form{\r\n    margin: 5px;\r\n}\r\n\r\nul, li{\r\n    width: 100%;\r\n}\r\n\r\n.navbar-nav{\r\n    margin-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Menu Items -->\n<!-- ul class=\"nav navbar-right top-nav\"-->\n<ul class=\"nav navbar-nav\">\n  <li *ngIf=\"isLogin\">\n    <a href=\"javascript:void(0);\" (click)=\"userCollapse = !userCollapse\">\n      <i class=\"glyphicon glyphicon-user\"></i>{{_e}} <b class=\"caret\"></b>\n    </a>\n    <ul class=\"nav navbar-nav nav-second-level\" *ngIf=\"userCollapse\" (click)=\"isCollapsedOut.emit(true)\">\n      <li>\n        <a href=\"javascript:void(0);\" routerLink=\"/setting\" routerLinkActive=\"active\">Settings</a>\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        <a href=\"javascript:void(0);\" (click)=\"logout()\">登出</a>\n      </li>\n    </ul>\n  </li>\n  <form id=\"signin\" class=\"navbar-form navbar-right\" role=\"form\" *ngIf=\"!isLogin\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" name=\"_e\"  [(ngModel)]=\"_e\">\n    </div>\n\n    <div class=\"input-group\" [ngClass]=\"{'has-error': _p.length<6}\">\n      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"_p\" [(ngModel)]=\"_p\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login()\">登入</button>\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/signup\" routerLinkActive=\"active\">註冊</button>\n  </form>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService) {
        this._loginService = _loginService;
        this.isCollapsedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLogin = false;
        this._e = "";
        this._p = "";
        this.userCollapse = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoginCheck();
        if (__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].check("_e")) {
            this._e = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get("_e");
        }
    };
    LoginComponent.prototype.isLoginCheck = function (callback) {
        this.isLogin = (__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].check('_e') && __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].check('_p')) ? (this.isLogin = true) : (this.isLogin = false);
        //如果在其他頁進行登入，則跳轉到首頁
        if (this.isLogin && window.location.hash != '#') {
            window.location.hash = '#';
        }
        (callback && typeof (callback) === "function") && callback();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('_e', this._e);
        params.set('_p', this._p);
        this._loginService.loginHttpWithPromise(params).then(function (res) {
            if (res['_p'] !== undefined) {
                //正常登入
                __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].set('_e', res['_e']);
                __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].set('_p', res['_p']);
                _this._p = "";
                _this.isLoginCheck(function () {
                    //location.reload();
                });
            }
            else if (res['_e'] !== undefined) {
                alert("密碼輸入錯誤!");
                _this._p = "";
            }
            else {
                alert("帳號不存在!");
                __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].set('_e', _this._e);
                _this._e = _this._p = "";
                document.location.hash = "#/signup";
                console.warn("Login Error:" + res.toString);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.isLogin = false;
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].delete('_e');
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].delete('_p');
        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].delete('displayNearest');
        //location.reload();
        //如果在其他頁進行登出，則跳轉到首頁
        if (window.location.hash != '#') {
            window.location.hash = '#';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "isCollapsedOut", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/average-page/average-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/average-page/average-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"a-fadein\">\r\n    <span class=\"input-group flashing\" daterangepicker (selected)=\"selectedDate($event, rangeValue)\" style=\"max-width: 250px;float: right\">\r\n        <span class=\"form-control uneditable-input\"  name=\"daterange\" >\r\n            {{ rangeValue[0] | date:'y-M-d'}} ~ {{ rangeValue[1] | date:'y-M-d'}}\r\n        </span>\r\n        <span class=\"input-group-btn\">\r\n            <a type=\"button\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-calendar\"></i></a>\r\n        </span>\r\n    </span>\r\n    <div *ngIf=\"barChartStandby\" style=\"display: block;\">\r\n        <canvas id=\"chart\" baseChart width=\"400\" height=\"130\"\r\n                [datasets]=\"barChartData\"\r\n                [labels]=\"barChartLabels\"\r\n                [options]=\"barChartOptions\"\r\n                [colors]=\"barChartColors\"\r\n                [legend]=\"barChartLegend\"\r\n                [chartType]=\"barChartType\">\r\n        </canvas>\r\n    </div>\r\n    <app-data-table\r\n            *ngIf=\"tableVisible\"\r\n            [data]=\"avgData\"\r\n            [devices]=\"devices\"\r\n            [limit]=\"tableRowLimit\"\r\n            [property]=\"['device_id','pm1','pm25','pm10','temp','humid']\"\r\n            [title]=\"['位置','PM1','PM2.5','PM10','溫度','濕度']\">\r\n    </app-data-table>\r\n    <app-loading [loading]=\"loading\"></app-loading>\r\n    <app-portraitWarn></app-portraitWarn>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/average-page/average-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AveragePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__daterangepicker_component__ = __webpack_require__("../../../../../src/app/daterangepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_data_service__ = __webpack_require__("../../../../../src/app/services/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//noinspection TypeScriptCheckImport






var AveragePageComponent = /** @class */ (function () {
    function AveragePageComponent(_getClientInfoService, _getDataService, daterangepickerOptions, _getUserDeviceService, _getLassDataService) {
        this._getClientInfoService = _getClientInfoService;
        this._getDataService = _getDataService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._getUserDeviceService = _getUserDeviceService;
        this._getLassDataService = _getLassDataService;
        //是否顯示表格
        this.tableVisible = true;
        //資料
        this.data = [];
        this.avgData = [];
        this.devices = (__WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get('devices')) ? JSON.parse(__WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get('devices')) : [];
        //日期選擇器
        this._DaterangepickerComponent = new __WEBPACK_IMPORTED_MODULE_1__daterangepicker_component__["a" /* DaterangepickerComponent */]();
        this.rangeValue = this._DaterangepickerComponent.getTimeByDate();
        //顏色清單
        this.colorList = [];
        //表格列數
        this.tableRowLimit = 3;
        //Loading蓋版
        this.loading = true;
        // barChart
        this.loadedBarChartDataTemplate = false;
        this.barChartDataTemplate = [
            { data: [], label: 'Client 0' }
        ];
        this.barChartData = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.barChartDataTemplate);
        this.barChartLabels = ['Pm1', 'Pm2.5', 'Pm10', '濕度', '溫度'];
        this.barChartOptions = {
            type: 'bar',
            responsive: true,
            scaleShowVerticalLines: false,
        };
        this.barChartColors = [
            { backgroundColor: 'rgb(0,0,177)' },
            { backgroundColor: 'rgb(77,0,0)' },
            { backgroundColor: 'rgb(0,159,0)' }
        ];
        this.barChartLegend = true;
        this.barChartType = 'bar';
        this.barChartStandby = false;
    }
    // events
    //public chartClicked(e:any):void {
    //  console.log(e);
    //}
    //public chartHovered(e:any):void {
    //  console.log(e);
    //}
    AveragePageComponent.prototype.ngOnInit = function () {
        //獲取devices
        //this._getClientInfoService.getDeviceHttpWithPromise().then((res)=>{
        //  this.devices = res;
        //  //設定列數為client數量
        //  this.tableRowLimit = this.devices.length;
        //  this.setChartsColor();
        //});
        var _this = this;
        this.loading = true;
        this._getUserDeviceService.getDevices(3, function (res) {
            _this.devices = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](res);
            //設定列數為client數量
            _this.tableRowLimit = _this.devices.length;
            _this.setChartsColor();
        });
        this.daterangepickerOptions.settings = this._DaterangepickerComponent.settings;
    };
    AveragePageComponent.prototype.selectedDate = function (value, dateInput) {
        this.rangeValue[0] = value.start;
        this.rangeValue[1] = value.end;
        dateInput = this.rangeValue;
        //日期選擇改變時觸發getDataHttp
        this._DaterangepickerComponent.setTimeByDate(this.rangeValue[0], this.rangeValue[1]);
        this.loading = true;
        this.getLASSDataHttp();
    };
    AveragePageComponent.prototype.setChartsColor = function () {
        var _this = this;
        //Generate Radom Color
        var color = new RColor;
        this.colorList = [];
        for (var i = 0; i < this.devices.length; i++) {
            this.colorList.push(color.get());
        }
        this.barChartColors.length = 0;
        this.colorList.forEach(function (value, index, array) {
            _this.barChartColors.push({
                backgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.4)",
                borderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.8)",
                borderWidth: 3
            });
        });
        this.setBarChartDataTemplate();
    };
    AveragePageComponent.prototype.setBarChartDataTemplate = function () {
        var barChartDataTemplate = [];
        this.devices.forEach(function (value, index, array) {
            barChartDataTemplate.push({ data: [], label: value['name'] });
        });
        this.barChartDataTemplate = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](barChartDataTemplate);
        this.loadedBarChartDataTemplate = true;
        this.getLASSDataHttp();
    };
    ////獲取空汙資料
    //public getDataHttp(){
    //  this.barChartStandby = false;
    //  let params = new URLSearchParams();
    //
    //  params.set('minDate', this._DaterangepickerComponent.getSQLString()[0]);
    //  params.set('maxDate', this._DaterangepickerComponent.getSQLString()[1]);
    //
    //  this._getDataService.getDataHttpWithPromise(params).then((res)=>{
    //    this.data = res;
    //
    //    //計算平均
    //    let temp:Object[] = [];
    //    for(let i=0;i<this.devices.length;i++){
    //      temp.push({'count': 0});
    //    }
    //    res.forEach((value,index,array)=>{
    //      temp[value.clientNum]['pm1'] = ((temp[value.clientNum]['pm1'])?temp[value.clientNum]['pm1']:0) + Number(value['pm1']);
    //      temp[value.clientNum]['pm25'] = ((temp[value.clientNum]['pm25'])?temp[value.clientNum]['pm25']:0) + Number(value['pm25']);
    //      temp[value.clientNum]['pm10'] = ((temp[value.clientNum]['pm10'])?temp[value.clientNum]['pm10']:0) + Number(value['pm10']);
    //      temp[value.clientNum]['temp'] = ((temp[value.clientNum]['temp'])?temp[value.clientNum]['temp']:0) + Number(value['temp']);
    //      temp[value.clientNum]['humid'] = ((temp[value.clientNum]['humid'])?temp[value.clientNum]['humid']:0) + Number(value['humid']);
    //      temp[value.clientNum]['count'] ++;
    //    });
    //
    //    this.devices.forEach((value,index,array)=>{
    //      temp[index]['clientNum'] = index;
    //    });
    //    temp.forEach((value,index,array)=>{
    //      Object.keys(value).forEach((key)=> {
    //        if(key!='count' && key!='clientNum') {
    //          temp[index][key] = Math.round((temp[index][key]/temp[index]['count'])*100)/100;
    //        }
    //      });
    //    });
    //    this.avgData = _.cloneDeep(temp);
    //    this.setCharts();
    //  });
    //}
    //獲取空汙資料
    AveragePageComponent.prototype.getLASSDataHttp = function () {
        var _this = this;
        this.barChartStandby = false;
        this._getLassDataService.setParam(this.devices, this._DaterangepickerComponent.getSQLString()[0], this._DaterangepickerComponent.getSQLString()[1]);
        this._getLassDataService.getDataHttpWithPromise().then(function (res) {
            _this.data = res;
            var dataSet = ['pm1', 'pm25', 'pm10', 'temp', 'humid'];
            //計算平均
            var temp = [];
            for (var i = 0; i < _this.devices.length; i++) {
                temp.push({
                    'count': 0,
                    'device_id': _this.devices[i]
                });
            }
            res.forEach(function (value, index, array) {
                dataSet.forEach(function (value2, index, array) {
                    if (temp[_this.devices.indexOf(value['device_id'])][value2]) {
                        temp[_this.devices.indexOf(value['device_id'])][value2] = temp[_this.devices.indexOf(value['device_id'])][value2] + Number(value[value2]);
                    }
                    else {
                        temp[_this.devices.indexOf(value['device_id'])][value2] = Number(value[value2]);
                    }
                });
                temp[_this.devices.indexOf(value['device_id'])]['count']++;
            });
            temp.forEach(function (value, index, array) {
                dataSet.forEach(function (value2, index2, array) {
                    temp[index][value2] = Math.round((temp[index][value2] / temp[index]['count']) * 100) / 100;
                });
            });
            _this.avgData = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](temp);
            _this.setCharts();
        });
    };
    AveragePageComponent.prototype.setCharts = function () {
        var _this = this;
        this.barChartData = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.barChartDataTemplate);
        this.avgData.forEach(function (value, index, array) {
            _this.barChartData[index].label = value['device_id'];
            _this.barChartData[index].data = [value['pm1'], value['pm25'], value['pm10'], value['humid'], value['temp']];
        });
        this.barChartStandby = false;
        this.barChartStandby = true;
        this.loading = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AveragePageComponent.prototype, "tableVisible", void 0);
    AveragePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-average-page',
            template: __webpack_require__("../../../../../src/app/pages/average-page/average-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/average-page/average-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_data_service__["a" /* GetDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_daterangepicker__["DaterangepickerConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_daterangepicker__["DaterangepickerConfig"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_lassdata_service__["a" /* GetLASSDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_lassdata_service__["a" /* GetLASSDataService */]) === "function" && _e || Object])
    ], AveragePageComponent);
    return AveragePageComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=average-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/compare-page/compare-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\r\n    border-color: red;\r\n    -webkit-box-shadow: 0 0 8px red;\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.dropdown{\r\n    min-width: 250px;\r\n}\r\n\r\n.dateRangePicker{\r\n    max-width: 170px;\r\n    margin: 0 15px 0 15px;\r\n}\r\n\r\n.row{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/compare-page/compare-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"a-fadein\">\n\n    <div *ngIf=\"lineChartStandby\">\n        <ul class=\"nav nav-tabs\">\n            <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm1'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm1';setCharts();calcPercentageData()\">PM1</a></li>\n            <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm25'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm25';setCharts();calcPercentageData()\">PM2.5</a></li>\n            <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm10'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm10';setCharts();calcPercentageData()\">PM10</a></li>\n            <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='temp'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='temp';setCharts();calcPercentageData()\">溫度</a></li>\n            <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='humid'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='humid';setCharts();calcPercentageData()\">濕度</a></li>\n        </ul>\n\n        <div *ngIf=\"lineChartStandby\" style=\"display: block;\">\n            <canvas id=\"chart\" baseChart width=\"400\" height=\"150\"\n                    [datasets]=\"lineChartData\"\n                    [labels]=\"lineChartLabels\"\n                    [options]=\"lineChartOptions\"\n                    [colors]=\"lineChartColors\"\n                    [legend]=\"lineChartLegend\"\n                    [chartType]=\"lineChartType\"></canvas>\n        </div>\n    </div>\n    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-3 col-md-2\" style=\"min-width: 250px\">\n                        <label>設定測站</label>\n                    </div>\n\n                    <div class=\"col-xs-6 col-sm-4 col-md-4\" style=\"padding: 0;\">\n                        <label>設定起始日期</label>\n                    </div>\n                </div>\n                <div *ngFor=\"let userDevice of userDevices; let i = index\">\n\n                    <div class=\"row\">\n                        <div ngbDropdown class=\"dropdown col-xs-6 col-sm-3 col-md-2\">\n\n                            <button class=\"btn btn-default\" type=\"button\" (click)=\"deleteDateRangepickerComponentArray(i)\">\n                                <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                            </button>\n                            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" ngbDropdownToggle data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                                {{userDevices[i]}}\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul ngbDropdownMenu class=\"dropdown-menu\">\n                                <li (click)=\"deviceChange(i,'請選擇測站')\"><a href=\"javascript:void(0);\">請選擇測站</a></li>\n                                <li role=\"separator\" class=\"divider\"></li>\n                                <li *ngFor=\"let device of LASSDeviceList\" (click)=\"deviceChange(i,device.device_id)\"><a href=\"javascript:void(0);\">{{device.device_id}}</a></li>\n                            </ul>\n                        </div>\n\n                        <span class=\"input-group col-xs-6 col-sm-4 col-md-4 dateRangePicker\" daterangepicker [ngClass]=\"{'red':!errDate[i], flashing:!errDate[i]}\" (selected)=\"selectedDate($event, dateRangepickerComponentArray[i], i)\">\n                            <span class=\"form-control uneditable-input\" name=\"daterange\" style=\"max-height: 34px\">\n                                {{ dateRangepickerComponentArray[i].getTimeByDate()[0] | date:'y-M-d'}}\n                            </span>\n                            <span class=\"input-group-btn\">\n                                <button type=\"button\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n                            </span>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"btn btn-default\" (click)=\"addDateRangepickerComponentArray()\">\n                    + Add\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>設定時長</label> : {{duration+1}} 天\n                <br>\n                <mat-slider (change)=\"changeDuration($event)\" min=\"1\" max=\"31\" step=\"1\" value=\"7\" thumb-label=\"true\" style=\"width: 99%\"></mat-slider>\n                <br>\n            </div>\n            <input class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" [ngClass]=\"{'disabled': !ready}\" (click)=\"submit()\">\n        </form>\n    </div>\n    <app-loading [loading]=\"loading\"></app-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/compare-page/compare-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daterangepicker_component__ = __webpack_require__("../../../../../src/app/daterangepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_get_data_service__ = __webpack_require__("../../../../../src/app/services/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_get_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//noinspection TypeScriptCheckImport









var ComparePageComponent = /** @class */ (function () {
    function ComparePageComponent(_getClientInfoService, _getDataService, daterangepickerOptions, _getLassDeviceService, _getUserDeviceService, _getLassDataService) {
        this._getClientInfoService = _getClientInfoService;
        this._getDataService = _getDataService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._getLassDeviceService = _getLassDeviceService;
        this._getUserDeviceService = _getUserDeviceService;
        this._getLassDataService = _getLassDataService;
        this.ready = false; //Submit Btn disable
        this.overBound = false;
        this.errDate = [true, true];
        this.duration = 6;
        this.client = -1;
        this.data = [];
        this.LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
        this.userDevices = [];
        this.userDevicesTemp = [];
        this.displayNearest = true;
        //日期選擇器
        this.dateRangepickerComponentArray = [
            new __WEBPACK_IMPORTED_MODULE_3__daterangepicker_component__["a" /* DaterangepickerComponent */](__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day').startOf('day'), __WEBPACK_IMPORTED_MODULE_1_moment__()),
            new __WEBPACK_IMPORTED_MODULE_3__daterangepicker_component__["a" /* DaterangepickerComponent */](__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day').startOf('day'), __WEBPACK_IMPORTED_MODULE_1_moment__())
        ];
        //圖表開啟之頁籤
        this.dataSet = 'pm25';
        //Loading蓋版
        this.loading = true;
        //顏色清單
        this.colorList = [];
        // lineChart
        this.loadedLineChartDataTemplate = false;
        this.lineChartDataTemplate = [
            { data: [], label: 'Time 0', fill: false },
            { data: [], label: 'Time 1', fill: false }
        ];
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.lineChartLabels = [];
        this.lineChartOptions = {
            type: 'line',
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        distribution: 'linear',
                        time: {
                            displayFormats: {
                                day: 'DD'
                            },
                            unit: 'day',
                            tooltipFormat: '第DD日 HH:mm:ss'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 4,
                    hoverRadius: 4
                }
            }
            /*tooltips: {
              titleFontSize: 0,
              titleMarginBottom: 0,
              titleSpacing: 0
            }*/
        };
        this.lineChartColors = [
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            },
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            },
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartStandby = false;
    }
    // events
    //public chartClicked(e:any):void {
    //  console.log(e);
    //}
    //public chartHovered(e:any):void {
    //  console.log(e);
    //}
    ComparePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.daterangepickerOptions.settings = this.dateRangepickerComponentArray[0].settings;
        this.daterangepickerOptions.settings.startDate = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day');
        this.daterangepickerOptions.settings.maxDate = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day');
        this.daterangepickerOptions.settings.singleDatePicker = true;
        //this._getClientInfoService.getDeviceHttpWithPromise().then((res)=>{
        //  this.devices = res;
        //  this.setChartsColor();
        //
        //});
        this.loading = true;
        //已登入
        this._getLassDeviceService.getLassDeviceWithPromise().then(function (res) {
            res.sort(compareDevice_id);
            _this.LASSDeviceList = res;
        });
        this.userDevices = [];
        this._getUserDeviceService.getDevices(2, function (res) {
            _this.displayNearest = (__WEBPACK_IMPORTED_MODULE_10_ng2_cookies__["Cookie"].get('displayNearest') == '1');
            _this.userDevices = res;
            _this.userDevicesTemp = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](_this.userDevices);
            _this.dateRangepickerComponentArray = [];
            for (var i in _this.userDevices) {
                _this.dateRangepickerComponentArray.push(new __WEBPACK_IMPORTED_MODULE_3__daterangepicker_component__["a" /* DaterangepickerComponent */](__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(_this.duration, 'day').startOf('day'), __WEBPACK_IMPORTED_MODULE_1_moment__()));
            }
            _this.loading = false;
            _this.checkReady();
            _this.setChartsColor();
        });
        function compareDevice_id(a, b) {
            if (a.device_id < b.device_id)
                return -1;
            if (a.device_id > b.device_id)
                return 1;
            return 0;
        }
    };
    //chart處理
    ComparePageComponent.prototype.setChartsColor = function () {
        var _this = this;
        //Generate Random Color
        var color = new RColor;
        this.colorList = [];
        for (var i = 0; i < this.userDevices.length; i++) {
            this.colorList.push(color.get());
        }
        this.lineChartColors.length = 0;
        this.colorList.forEach(function (value, index, array) {
            _this.lineChartColors.push({
                backgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.2)",
                borderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)",
                pointBackgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)",
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)"
            });
        });
        this.setLineChartDataTemplate();
    };
    ComparePageComponent.prototype.setLineChartDataTemplate = function () {
        var lineChartDataTemplate = [];
        this.dateRangepickerComponentArray.forEach(function (value, index, array) {
            var base = value.rangeValue[0].format('YYYY-MM-DD');
            lineChartDataTemplate.push({ data: [], label: base, fill: false });
        });
        this.lineChartDataTemplate = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](lineChartDataTemplate);
        this.loadedLineChartDataTemplate = true;
        this.loading = false;
    };
    ComparePageComponent.prototype.deviceChange = function (i, device) {
        //noinspection TypeScriptUnresolvedVariable
        this.userDevices[i] = device;
        var index = this.userDevices.indexOf('請選擇測站');
        while (index > -1) {
            this.userDevices.splice(index, 1);
            index = this.userDevices.indexOf('請選擇測站');
        }
    };
    //form處理
    ComparePageComponent.prototype.addDateRangepickerComponentArray = function () {
        this.userDevices.push('請選擇測站');
        this.errDate.push(true);
        this.dateRangepickerComponentArray.push(new __WEBPACK_IMPORTED_MODULE_3__daterangepicker_component__["a" /* DaterangepickerComponent */](__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day').startOf('day'), __WEBPACK_IMPORTED_MODULE_1_moment__()));
        this.setChartsColor();
        this.checkReady();
    };
    ComparePageComponent.prototype.deleteDateRangepickerComponentArray = function (index) {
        this.userDevices.splice(index, 1);
        this.errDate.splice(index, 1);
        this.dateRangepickerComponentArray.splice(index, 1);
        this.setChartsColor();
        this.checkReady();
    };
    ComparePageComponent.prototype.selectedDate = function (value, dateInput, index) {
        //日期選擇改變時觸發getDataHttp
        this.dateRangepickerComponentArray[index].setTimeByDate(value.start, __WEBPACK_IMPORTED_MODULE_1_moment__(value.start).add(this.duration, 'day').toDate());
        dateInput = this.dateRangepickerComponentArray[index];
        this.checkReady();
    };
    ComparePageComponent.prototype.changeDuration = function (event) {
        this.duration = event.value - 1;
        for (var _i = 0, _a = this.dateRangepickerComponentArray; _i < _a.length; _i++) {
            var d = _a[_i];
            d.setTimeByDate(d.getTimeByDate()[0], __WEBPACK_IMPORTED_MODULE_1_moment__(d.getTimeByDate()[0]).add(this.duration, 'day').endOf('day').toDate());
        }
        this.daterangepickerOptions.settings.startDate = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day');
        this.daterangepickerOptions.settings.maxDate = __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(this.duration, 'day');
        this.checkReady();
    };
    ComparePageComponent.prototype.checkReady = function () {
        var _this = this;
        this.overBound = false;
        this.errDate = [];
        this.dateRangepickerComponentArray.forEach(function (value, index, array) {
            if (value.getTimeByDate()[0] > _this.daterangepickerOptions.settings.maxDate || value.getTimeByDate()[0] < _this.daterangepickerOptions.settings.minDate) {
                _this.overBound = true;
                _this.errDate.push(false);
            }
            else {
                _this.errDate.push(true);
            }
        });
        this.ready = ((this.dateRangepickerComponentArray.length > 0 && this.userDevices.length > 0) && !this.overBound);
    };
    ComparePageComponent.prototype.submit = function () {
        //console.log(this.uniqueDateRangepickerComponentArray);
        if (this.ready) {
            this.loading = true;
            this.lineChartStandby = false;
            this.data = new Array(this.userDevices.length);
            for (var i = 0; i < this.userDevices.length; i++) {
                this.getLASSDataHttp(i);
            }
        }
    };
    //獲取空汙資料
    //public getDataHttp(arr,i){
    //  let params = new URLSearchParams();
    //
    //  params.set('minDate', arr.getSQLString()[0]);
    //  params.set('maxDate', arr.getSQLString()[1]);
    //  params.set('client', this.client.toString());
    //
    //  this._getDataService.getDataHttpWithPromise(params).then((res)=>{
    //    this.data[i] = res;
    //    if(this.data.length==this.uniqueDateRangepickerComponentArray.length){
    //      let interval = setInterval(() => {
    //        if(this.loadedLineChartDataTemplate){
    //          clearInterval(interval);
    //          this.setCharts();
    //        }
    //      }, 400);
    //    }
    //  });
    //}
    //獲取空汙資料
    ComparePageComponent.prototype.getLASSDataHttp = function (index) {
        var _this = this;
        this._getLassDataService.setParam([this.userDevices[index]], this.dateRangepickerComponentArray[index].getSQLString()[0], this.dateRangepickerComponentArray[index].getSQLString()[1]);
        this._getLassDataService.getDataHttpWithPromise().then(function (res) {
            _this.data[index] = res;
            if (_this.data.length == _this.userDevices.length) {
                var interval_1 = setInterval(function () {
                    if (_this.loadedLineChartDataTemplate) {
                        clearInterval(interval_1);
                        _this.setCharts();
                    }
                }, 400);
            }
        });
    };
    ComparePageComponent.prototype.setCharts = function () {
        var _this = this;
        var tmp = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.data.forEach(function (d, i, array) {
            var base = _this.dateRangepickerComponentArray[i].rangeValue[0];
            tmp[i].label = _this.userDevices[i];
            d.forEach(function (value, index, array) {
                var tmp2 = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](__WEBPACK_IMPORTED_MODULE_1_moment__(value['time']).valueOf() - base.valueOf());
                tmp[i].data.push({ x: tmp2.format('YYYY-MM-DD HH:mm:ss'), y: value[_this.dataSet] });
            });
        });
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](tmp);
        this.lineChartStandby = false;
        this.lineChartStandby = true;
        this.loading = false;
    };
    ComparePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compare-page',
            template: __webpack_require__("../../../../../src/app/pages/compare-page/compare-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/compare-page/compare-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_get_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_get_data_service__["a" /* GetDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_get_lassdata_service__["a" /* GetLASSDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_get_lassdata_service__["a" /* GetLASSDataService */]) === "function" && _f || Object])
    ], ComparePageComponent);
    return ComparePageComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=compare-page.component.js.map

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

module.exports = "<div class=\"a-fadein\">\r\n    <div>\r\n    <ul class=\"nav nav-tabs\">\r\n      <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm1'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm1';setCharts();calcPercentageData()\">PM1</a></li>\r\n      <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm25'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm25';setCharts();calcPercentageData()\">PM2.5</a></li>\r\n      <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='pm10'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='pm10';setCharts();calcPercentageData()\">PM10</a></li>\r\n      <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='temp'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='temp';setCharts();calcPercentageData()\">溫度</a></li>\r\n      <li role=\"presentation\" [ngClass]=\"{'active': dataSet=='humid'}\"><a href=\"javascript:void(0);\" (click)=\"dataSet='humid';setCharts();calcPercentageData()\">濕度</a></li>\r\n\r\n      <span class=\"input-group flashing\" daterangepicker (selected)=\"selectedDate($event, rangeValue)\" style=\"max-width: 250px;float: right\">\r\n        <span class=\"form-control uneditable-input\"  name=\"daterange\" >\r\n            {{ rangeValue[0] | date:'y-M-d'}} ~ {{ rangeValue[1] | date:'y-M-d'}}\r\n        </span>\r\n        <span class=\"input-group-btn\">\r\n            <a type=\"button\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-calendar\"></i></a>\r\n        </span>\r\n      </span>\r\n    </ul>\r\n\r\n    <div *ngIf=\"lineChartStandby\" style=\"display: block;\">\r\n      <canvas id=\"chart\" baseChart width=\"400\" height=\"120\"\r\n              [datasets]=\"lineChartData\"\r\n              [labels]=\"lineChartLabels\"\r\n              [options]=\"lineChartOptions\"\r\n              [colors]=\"lineChartColors\"\r\n              [legend]=\"lineChartLegend\"\r\n              [chartType]=\"lineChartType\"></canvas>\r\n    </div>\r\n\r\n      <app-data-table\r\n              *ngIf=\"tableVisible && (dataSet=='pm25' || dataSet=='pm10')\"\r\n              [data]=\"percentageData\"\r\n              [devices]=\"devices\"\r\n              [limit]=\"tableRowLimit\"\r\n              [property]=\"percentageProperty\"\r\n              [title]=\"percentageTitle\"\r\n              [sortable]=\"percentageSortable\"\r\n              [titleClass]=\"percentageTitleClass\">\r\n      </app-data-table>\r\n    </div>\r\n    <div *ngIf=\"tableVisible\">\r\n\r\n        <hr>\r\n        <h2>數據總覽</h2>\r\n      <app-data-table\r\n              [data]=\"data\"\r\n              [devices]=\"devices\" >\r\n      </app-data-table>\r\n    </div>\r\n    <app-loading [loading]=\"loading\"></app-loading>\r\n    <app-portraitWarn></app-portraitWarn>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daterangepicker_component__ = __webpack_require__("../../../../../src/app/daterangepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_data_service__ = __webpack_require__("../../../../../src/app/services/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_get_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//noinspection TypeScriptCheckImport









var HistoryPageComponent = /** @class */ (function () {
    function HistoryPageComponent(_getClientInfoService, _getDataService, daterangepickerOptions, _getLassDeviceService, _getUserDeviceService, _getLassDataService) {
        this._getClientInfoService = _getClientInfoService;
        this._getDataService = _getDataService;
        this.daterangepickerOptions = daterangepickerOptions;
        this._getLassDeviceService = _getLassDeviceService;
        this._getUserDeviceService = _getUserDeviceService;
        this._getLassDataService = _getLassDataService;
        //是否顯示表格
        this.tableVisible = true;
        //日期選擇器
        this._DaterangepickerComponent = new __WEBPACK_IMPORTED_MODULE_2__daterangepicker_component__["a" /* DaterangepickerComponent */]();
        this.rangeValue = this._DaterangepickerComponent.getTimeByDate();
        //顏色清單
        this.colorList = [];
        //資料
        this.data = [];
        this.devices = (__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__["Cookie"].get('devices')) ? JSON.parse(__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__["Cookie"].get('devices')) : [];
        //Loading蓋版
        this.loading = true;
        //圖表開啟之頁籤
        this.dataSet = 'pm25';
        //AQI表格
        this.percentageData = [];
        this.percentageTitle = ['位置', '良好 0～50', '普通 51～100', '對敏感族群不健康 101～150', '對所有族群不健康 151～200', '非常不健康 201～300', '危害 301～400', '危害 401～500'];
        this.percentageProperty = ['device_id', 0, 1, 2, 3, 4, 5, 6];
        this.percentageSortable = ["", "", "", "", "", "", "", ""];
        this.percentageTitleClass = ['', 'AQI1', 'AQI2', 'AQI3', 'AQI4', 'AQI5', 'AQI6', 'AQI6'];
        //列數
        this.tableRowLimit = 3;
        // lineChart
        this.loadedLineChartDataTemplate = false;
        this.lineChartDataTemplate = [
            { data: [], label: 'Client 0', fill: false },
            { data: [], label: 'Client 1', fill: false },
            { data: [], label: 'Client 2', fill: false }
        ];
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.lineChartLabels = [];
        this.lineChartOptions = {
            type: 'line',
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        distribution: 'linear'
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 4,
                    hoverRadius: 4
                }
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            },
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            },
            {
                backgroundColor: '#fff',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartStandby = false;
    }
    // events
    //public chartClicked(e:any):void {
    //  console.log(e);
    //}
    //public chartHovered(e:any):void {
    //  console.log(e);
    //}
    HistoryPageComponent.prototype.ngOnInit = function () {
        //this._getClientInfoService.getDeviceHttpWithPromise().then((res)=>{
        //  this.devices = res;
        //  //設定列數為client數量
        //  this.tableRowLimit = this.devices.length;
        //  this.setChartsColor();
        //});
        var _this = this;
        this.loading = true;
        this._getUserDeviceService.getDevices(3, function (res) {
            _this.devices = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](res);
            //設定列數為client數量
            _this.tableRowLimit = _this.devices.length;
            _this.setChartsColor();
        });
        this.daterangepickerOptions.settings = this._DaterangepickerComponent.settings;
    };
    HistoryPageComponent.prototype.ngDoCheck = function () {
        try {
            if (__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__["Cookie"].get('devices') != "" && !__WEBPACK_IMPORTED_MODULE_1_lodash__["isEqual"](this.devices, JSON.parse(__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__["Cookie"].get('devices')))) {
                this.loading = true;
                this.devices = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](JSON.parse(__WEBPACK_IMPORTED_MODULE_9_ng2_cookies__["Cookie"].get('devices')));
                //設定列數為client數量
                this.tableRowLimit = this.devices.length;
                this.setChartsColor();
            }
        }
        catch (e) {
            console.warn("Devices compare error. Error:" + e);
        }
    };
    HistoryPageComponent.prototype.selectedDate = function (value, dateInput) {
        this.rangeValue[0] = value.start;
        this.rangeValue[1] = value.end;
        dateInput = this.rangeValue;
        //日期選擇改變時觸發getDataHttp
        this._DaterangepickerComponent.setTimeByDate(this.rangeValue[0], this.rangeValue[1]);
        this.loading = true;
        this.getLASSDataHttp();
    };
    HistoryPageComponent.prototype.setChartsColor = function () {
        var _this = this;
        //Generate Random Color
        var color = new RColor;
        this.colorList = [];
        for (var i = 0; i < this.devices.length; i++) {
            this.colorList.push(color.get());
        }
        this.lineChartColors.length = 0;
        this.colorList.forEach(function (value, index, array) {
            _this.lineChartColors.push({
                backgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.2)",
                borderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)",
                pointBackgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)",
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.9)"
            });
        });
        this.setLineChartDataTemplate();
    };
    HistoryPageComponent.prototype.setLineChartDataTemplate = function () {
        var lineChartDataTemplate = [];
        this.devices.forEach(function (value, index, array) {
            lineChartDataTemplate.push({ data: [], label: value, fill: false });
        });
        this.lineChartDataTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](lineChartDataTemplate);
        this.loadedLineChartDataTemplate = true;
        this.getLASSDataHttp();
    };
    //獲取空汙資料
    //public getDataHttp(){
    //  this.lineChartStandby = false;
    //  let params = new URLSearchParams();
    //
    //  params.set('minDate', this._DaterangepickerComponent.getSQLString()[0]);
    //  params.set('maxDate', this._DaterangepickerComponent.getSQLString()[1]);
    //
    //  this._getDataService.getDataHttpWithPromise(params).then((res)=>{
    //    this.data = res;
    //    if(this.loadedLineChartDataTemplate){
    //      this.setCharts();
    //      this.calcPercentageData();
    //    }
    //  });
    //}
    //獲取空汙資料
    HistoryPageComponent.prototype.getLASSDataHttp = function () {
        var _this = this;
        this.lineChartStandby = false;
        this._getLassDataService.setParam(this.devices, this._DaterangepickerComponent.getSQLString()[0], this._DaterangepickerComponent.getSQLString()[1]);
        this._getLassDataService.getDataHttpWithPromise().then(function (res) {
            _this.data = res;
            if (_this.loadedLineChartDataTemplate) {
                _this.setCharts();
                _this.calcPercentageData();
            }
        });
    };
    HistoryPageComponent.prototype.setCharts = function () {
        var _this = this;
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.data.forEach(function (value, index, array) {
            _this.lineChartData[_this.devices.indexOf(value['device_id'])].data.push({ x: value['time'], y: value[_this.dataSet] });
        });
        this.lineChartStandby = false;
        this.lineChartStandby = true;
        this.loading = false;
    };
    HistoryPageComponent.prototype.calcPercentageData = function () {
        var _this = this;
        var percentageCount = [];
        var dataCount = [];
        var level25 = [15.5, 35.5, 54.5, 150.5, 250.5, 350.5, 500.5];
        var level10 = [55, 126, 255, 355, 425, 505, 605];
        var level = (this.dataSet == 'pm25') ? level25 : level10;
        this.devices.forEach(function (value, i, array) {
            percentageCount[i] = [0, 0, 0, 0, 0, 0, 0];
            dataCount[i] = 0;
            _this.percentageData[i] = { device_id: value };
        });
        this.data.forEach(function (value, index, array) {
            switch (true) {
                case (value[_this.dataSet] < level[0]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][0]++;
                    break;
                case (value[_this.dataSet] < level[1]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][1]++;
                    break;
                case (value[_this.dataSet] < level[2]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][2]++;
                    break;
                case (value[_this.dataSet] < level[3]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][3]++;
                    break;
                case (value[_this.dataSet] < level[4]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][4]++;
                    break;
                case (value[_this.dataSet] < level[5]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][5]++;
                    break;
                case (value[_this.dataSet] < level[6]):
                    percentageCount[_this.devices.indexOf(value['device_id'])][6]++;
                    break;
            }
            dataCount[_this.devices.indexOf(value['device_id'])]++;
        });
        percentageCount.forEach(function (value, index, array) {
            for (var i = 0; i < 7; i++) {
                _this.percentageData[index][i] = Math.round(percentageCount[index][i] / dataCount[index] * 100 * 100) / 100 + '%';
            }
            //this.percentageData[index][this.devices.indexOf(value['device_id'])] = index;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HistoryPageComponent.prototype, "tableVisible", void 0);
    HistoryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-page',
            template: __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/history-page/history-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_data_service__["a" /* GetDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_daterangepicker__["DaterangepickerConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_daterangepicker__["DaterangepickerConfig"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_get_lassdata_service__["a" /* GetLASSDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_get_lassdata_service__["a" /* GetLASSDataService */]) === "function" && _f || Object])
    ], HistoryPageComponent);
    return HistoryPageComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=history-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/animation.css"), "");

// module
exports.push([module.i, ".disabled{\r\n    color: #393939;\r\n    background-color: #d0d0d0;\r\n    border-color: #d0d0d0;\r\n}\r\n\r\n.row{\r\n    margin: 0 -5px 5px -5px;\r\n}\r\n\r\n.panel{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.mapParent{\r\n    height: calc(50vh - 25.4px);\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    display: -webkit-flex;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\r\n\r\n.width100{\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"a-fadein\">\r\n    <div class=\"row\" *ngIf=\"realTimeAirData!==undefined\">\r\n        <div class=\"col-xs-6 col-sm-4\" *ngFor=\"let data of realTimeAirData;let idx = index\">\r\n            <div class=\"panel\" *ngIf=\"panelClass\" [ngClass]=\"panelClass[idx]\">\r\n                <div class=\"panel-heading\" style=\"text-align: center\">\r\n                    <p *ngIf=\"data.clientNum!==undefined && clientInfo!==undefined\" style=\"font-size: 30px;margin: 0px auto;\">{{clientInfo[data.clientNum].name}}</p>\r\n                    <p *ngIf=\"data.device_id!==undefined\" style=\"font-size: 26px;margin: 0px auto;font-weight: bold;\">{{data.device_id}}</p>\r\n                    PM1: {{data.pm1||\"無數據\"}}<br>\r\n                    PM2.5: {{data.pm25||\"無數據\"}}<br>\r\n                    PM10: {{data.pm10||\"無數據\"}}<br>\r\n                    溫度: {{data.temp||\"無數據\"}}<br>\r\n                    濕度: {{data.humid||\"無數據\"}}<br>\r\n                    {{data.time}}<br>\r\n                    <b>空氣品質: {{data.airQuality}}</b>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-history-page [tableVisible]=\"false\"></app-history-page>\r\n    <app-loading [loading]=\"loading\"></app-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_single_data_service__ = __webpack_require__("../../../../../src/app/services/get-single-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_single_lassdata_service__ = __webpack_require__("../../../../../src/app/services/get-single-lassdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calc_AQI_component__ = __webpack_require__("../../../../../src/app/calc-AQI.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//noinspection TypeScriptCheckImport


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(_getRealTimeDataService, _getLASSRealTimeDataService, _getClientInfoService, _getUserDeviceService, _getLassDeviceService) {
        this._getRealTimeDataService = _getRealTimeDataService;
        this._getLASSRealTimeDataService = _getLASSRealTimeDataService;
        this._getClientInfoService = _getClientInfoService;
        this._getUserDeviceService = _getUserDeviceService;
        this._getLassDeviceService = _getLassDeviceService;
        this._calcAQI = new __WEBPACK_IMPORTED_MODULE_6__calc_AQI_component__["a" /* CalcAQIComponent */]();
        //資料
        this.realTimeAirData = this._getLASSRealTimeDataService.data;
        this.tempRealTimeAirData = __WEBPACK_IMPORTED_MODULE_8_lodash__["cloneDeep"](this.realTimeAirData);
        this.clientInfo = this._getClientInfoService.data;
        //panel的顏色class
        this.panelClass = [];
        this.LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
        this.tempEmail = __WEBPACK_IMPORTED_MODULE_7_ng2_cookies__["Cookie"].get("_e");
        //Loading蓋版
        this.loading = true;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this._getClientInfoService.getDeviceHttpWithPromise().then((res)=>{
        //    this.devices = res;
        //    this._getRealTimeDataService.getSingleDataHttpWithPromise().then((res)=>{
        //        this.realTimeAirData = this._getRealTimeDataService.data;
        //    });
        //});
        this.loading = true;
        this.tempEmail = __WEBPACK_IMPORTED_MODULE_7_ng2_cookies__["Cookie"].get("_e");
        this._getUserDeviceService.getDevices(3, function (res) {
            _this.LASSDeviceList = __WEBPACK_IMPORTED_MODULE_8_lodash__["cloneDeep"](res);
            _this.getLASSRealTimeData();
        });
        if (__WEBPACK_IMPORTED_MODULE_8_lodash__["isEqual"](this.realTimeAirData, this.tempRealTimeAirData) && this.realTimeAirData.length != 0) {
            this.calcAQI();
        }
    };
    MainPageComponent.prototype.ngDoCheck = function () {
        var _this = this;
        //realTime改變時觸發AQI計算
        //noinspection TypeScriptValidateJSTypes
        if (!__WEBPACK_IMPORTED_MODULE_8_lodash__["isEqual"](this.realTimeAirData, this.tempRealTimeAirData)) {
            this.calcAQI();
            this.tempRealTimeAirData = __WEBPACK_IMPORTED_MODULE_8_lodash__["cloneDeep"](this.realTimeAirData);
        }
        if (__WEBPACK_IMPORTED_MODULE_7_ng2_cookies__["Cookie"].get("_e") != this.tempEmail) {
            this.tempEmail = __WEBPACK_IMPORTED_MODULE_7_ng2_cookies__["Cookie"].get("_e");
            this.loading = true;
            this._getUserDeviceService.getDevices(3, function (res) {
                _this.LASSDeviceList = __WEBPACK_IMPORTED_MODULE_8_lodash__["cloneDeep"](res);
                _this.getLASSRealTimeData();
            });
        }
    };
    MainPageComponent.prototype.getLASSRealTimeData = function () {
        var _this = this;
        this._getLASSRealTimeDataService.setParam(this.LASSDeviceList);
        this._getLASSRealTimeDataService.getSingleDataHttpWithPromise().then(function (res) {
            _this.realTimeAirData = _this._getLASSRealTimeDataService.data;
        });
        this.loading = false;
    };
    //計算AQI顏色
    MainPageComponent.prototype.calcAQI = function () {
        var _this = this;
        this.loading = true;
        if (this.realTimeAirData[0] !== undefined) {
            this.panelClass.length = 0;
            this.realTimeAirData.forEach(function (value, index, array) {
                //noinspection TypeScriptValidateTypes
                if ((__WEBPACK_IMPORTED_MODULE_9_moment__().valueOf() - __WEBPACK_IMPORTED_MODULE_9_moment__(value.time).valueOf()) > 3600000) {
                    _this.panelClass[index] = "disabled";
                }
                else {
                    var AQI = _this._calcAQI.calc(value.pm25, value.pm10);
                    if (AQI != 0) {
                        if (AQI >= 3) {
                            //震動特效
                            _this.panelClass[index] = "AQI" + AQI + " a-ring";
                        }
                        else {
                            _this.panelClass[index] = "AQI" + AQI;
                        }
                        switch (AQI) {
                            case 1:
                                array[index].airQuality = "良好";
                                break;
                            case 2:
                                array[index].airQuality = "普通";
                                break;
                            case 3:
                                array[index].airQuality = "對敏感族群不健康 ";
                                break;
                            case 4:
                                array[index].airQuality = "對所有族群不健康 ";
                                break;
                            case 5:
                                array[index].airQuality = "非常不健康";
                                break;
                            case 6:
                                array[index].airQuality = "危害";
                                break;
                        }
                    }
                    else {
                        console.log("Calc AQI Level Error. PM2.5: " + value.pm25 + ", PM10: " + value.pm10);
                    }
                }
            });
        }
        this.loading = false;
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_single_data_service__["a" /* GetSingleDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_single_data_service__["a" /* GetSingleDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_single_lassdata_service__["a" /* GetSingleLASSDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_single_lassdata_service__["a" /* GetSingleLASSDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _e || Object])
    ], MainPageComponent);
    return MainPageComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/animation.css"), "");

// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\nagm-map {\r\n    height: calc(100vh - 50.8px);\r\n    width: calc(100vw);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#panelContainer{\r\n    position: fixed;\r\n    overflow-x: visible;\r\n    overflow-y: auto;\r\n    max-height: 220px;\r\n    min-width: 20vw;\r\n    max-width: 80vw;\r\n    top: 60.8px;\r\n    right: 10px;\r\n    background-color: transparent;\r\n    padding: 0px 20px 0px 20px;\r\n}\r\n\r\n\r\n@media (min-width:768px) {\r\n    agm-map {\r\n        width: calc(100vw - 225px);\r\n    }\r\n\r\n    #panelContainer{\r\n        max-height: calc(100vh - 70.8px);\r\n    }\r\n}\r\n\r\n.panel{\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"a-fadein\">\r\n    <div *ngIf=\"!loading\">\r\n        <agm-map [clickableIcons]=\"false\" (mapReady)=\"mapReady($event)\" *ngIf=\"mapDisplay\">\r\n            <agm-marker *ngFor=\"let data of allDevicesDetails\" [latitude]=\"data.gps_lat\" [longitude]=\"data.gps_lon\" [iconUrl]=\"data.icon\" (markerClick)='markerClicked([data.device_id,data.gps_lat,data.gps_lon])'>\r\n                <agm-snazzy-info-window [isOpen]=\"data.open\" [showCloseButton]=\"false\" [closeOnMapClick]=\"false\" [maxWidth]=\"300\">\r\n                    <ng-template>\r\n                        {{data.device_id}}\r\n                    </ng-template>\r\n                </agm-snazzy-info-window>\r\n            </agm-marker>\r\n        </agm-map>\r\n        <div id=\"panelContainer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md\">\r\n                    <div class=\"panel floatPanel\" [ngClass]=\"device.AQI\" *ngFor=\"let device of deviceDetail\">\r\n                        <div class=\"panel-heading\" style=\"text-align: center\">\r\n                            <p *ngIf=\"device.clientNum!==undefined && clientInfo!==undefined\" style=\"font-size: 30px;margin: 0px auto;\">{{clientInfo[device.clientNum].name}}</p>\r\n                            <p *ngIf=\"device.device_id!==undefined\" style=\"font-size: 26px;margin: 0px auto;font-weight: bold;\">{{device.device_id}}</p>\r\n                            PM1: {{device.pm1||\"無數據\"}}<br>\r\n                            PM2.5: {{device.pm25||\"無數據\"}}<br>\r\n                            PM10: {{device.pm10||\"無數據\"}}<br>\r\n                            溫度: {{device.temp||\"無數據\"}}<br>\r\n                            濕度: {{device.humid||\"無數據\"}}<br>\r\n                            {{device.time}}<br>\r\n                            <b>空氣品質: {{device.airQuality}}</b>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-loading [loading]=\"loading\"></app-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calc_AQI_component__ = __webpack_require__("../../../../../src/app/calc-AQI.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//noinspection TypeScriptCheckImport






var MapPageComponent = /** @class */ (function () {
    function MapPageComponent(http, _getDeviceService, _getLassDeviceService, _getUserDeviceService) {
        this.http = http;
        this._getDeviceService = _getDeviceService;
        this._getLassDeviceService = _getLassDeviceService;
        this._getUserDeviceService = _getUserDeviceService;
        //Loading蓋版
        this.loading = false;
        this._calcAQI = new __WEBPACK_IMPORTED_MODULE_5__calc_AQI_component__["a" /* CalcAQIComponent */]();
        //測站資料
        this.devices = [];
        this.deviceDetail = [];
        this.allDevicesDetails = [];
        this.tempDevices = this.devices;
        this.calcCenterFinish = false;
        this.calcAQIFinish = false;
        this.bounds = { north: 24.1824695, south: 24.1824695, east: 120.6025716, west: 120.6025716 };
        //panel的顏色class
        this.AQI = ["AQI1", "AQI2", "AQI3 a-ring", "AQI4 a-ring", "AQI5 a-ring", "AQI6 a-ring"];
        //AQIIconUrl
        this.icon = [
            "assets/pic/AQI1.png",
            "assets/pic/AQI2.png",
            "assets/pic/AQI3.png",
            "assets/pic/AQI4.png",
            "assets/pic/AQI5.png",
            "assets/pic/AQI6.png"
        ];
        this.tempEmail = __WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get("_e");
        this.mapDisplay = false;
    }
    MapPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.tempEmail = __WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get("_e");
        this._getUserDeviceService.getDevices(1, function (res) {
            _this.devices = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](res);
        });
        //取得所有測站點
        this.allDevicesDetails = [];
        var lassReady = false;
        var THUReady = false;
        //LASS
        this._getLassDeviceService.getLassDeviceWithPromise().then(function (res) {
            _this.allDevicesDetails = _this.allDevicesDetails.concat(res);
            lassReady = true;
            if (lassReady && THUReady) {
                _this.convertLatLngToNumber(_this.allDevicesDetails, function () {
                    _this.calcAQI(_this.allDevicesDetails);
                });
            }
        });
        //THU
        this._getDeviceService.getDeviceHttpWithPromise().then(function (res) {
            _this.allDevicesDetails = _this.allDevicesDetails.concat(res);
            THUReady = true;
            if (lassReady && THUReady) {
                _this.convertLatLngToNumber(_this.allDevicesDetails, function () {
                    _this.calcAQI(_this.allDevicesDetails);
                });
            }
        });
    };
    MapPageComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](this.devices, this.tempDevices)) {
            this.tempDevices = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.devices);
            this.loading = true;
            this.mapDisplay = false;
            this.calcCenterFinish = false;
            this.calcAQIFinish = false;
            this.allDevicesDetails.forEach(function (value, index, array) {
                if (_this.devices.map(function (mapObj) { return mapObj[0]; }).indexOf(value.device_id) >= 0) {
                    //noinspection TypeScriptUnresolvedVariable
                    value.open = true;
                }
                else {
                    //noinspection TypeScriptUnresolvedVariable
                    value.open = false;
                }
            });
            this.getDeviceDetail();
        }
        if (__WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get("_e") != this.tempEmail) {
            this.tempEmail = __WEBPACK_IMPORTED_MODULE_8_ng2_cookies__["Cookie"].get("_e");
            this.loading = true;
            this._getUserDeviceService.getDevices(1, function (res) {
                _this.devices = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](res);
            });
        }
    };
    MapPageComponent.prototype.getDeviceDetail = function () {
        var _this = this;
        this.deviceDetail.length = 0;
        this.devices.forEach(function (value, index, array) {
            switch (value[1]) {
                case 'LASS':
                    _this._getLassDeviceService.getLassDeviceById(value[0], function (res) {
                        _this.deviceDetail.push(res);
                        if (index == _this.devices.length - 1) {
                            _this.convertLatLngToNumber(_this.deviceDetail, function () {
                                _this.calcCenter();
                                _this.calcAQI(_this.deviceDetail);
                            });
                        }
                    });
                    break;
                case 'THU':
                    _this._getDeviceService.getDeviceById(value[0], function (res) {
                        _this.deviceDetail.push(res);
                        if (index == _this.devices.length - 1) {
                            _this.convertLatLngToNumber(_this.deviceDetail, function () {
                                _this.calcCenter();
                                _this.calcAQI(_this.deviceDetail);
                            });
                        }
                    });
                    break;
            }
        });
    };
    MapPageComponent.prototype.mapReady = function (map) {
        this.map = map;
        this.map.fitBounds(this.bounds);
    };
    MapPageComponent.prototype.markerClicked = function (markerObj) {
        if (this.map) {
            //this.map.setCenter({lat: markerObj[1], lng: markerObj[2]});
            this.devices = [];
            this.devices.unshift(markerObj[0]);
        }
    };
    //將資料內的數字字串轉為數字格式
    MapPageComponent.prototype.convertLatLngToNumber = function (data, callback) {
        try {
            data.forEach(function (value, index, array) {
                //console.log(devices[index].lat);
                array[index].gps_lat = Number(value.gps_lat);
                array[index].gps_lon = Number(value.gps_lon);
            });
        }
        catch (e) {
            console.error("Converting error data to numbers.");
        }
        (callback && typeof (callback) === "function") && callback();
    };
    //計算中心並調整縮放比例
    MapPageComponent.prototype.calcCenter = function () {
        var latMin;
        var latMax;
        var lngMin;
        var lngMax;
        this.deviceDetail.forEach(function (value, index, array) {
            latMin = (latMin < value.gps_lat) ? latMin : value.gps_lat;
            latMax = (latMax > value.gps_lat) ? latMax : value.gps_lat;
            lngMin = (lngMin < value.gps_lon) ? lngMin : value.gps_lon;
            lngMax = (lngMax > value.gps_lon) ? lngMax : value.gps_lon;
        });
        this.bounds.south = latMax + 0.005;
        this.bounds.west = lngMin - 0.002;
        this.bounds.north = latMin - 0.005;
        this.bounds.east = lngMax + 0.002;
        this.calcCenterFinish = true;
        this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
        this.mapDisplay = !this.loading;
    };
    MapPageComponent.prototype.calcAQI = function (data) {
        var _this = this;
        if (data !== undefined) {
            data.forEach(function (value, index, array) {
                //noinspection TypeScriptUnresolvedVariable
                var AQI = _this._calcAQI.calc(value.pm25, value.pm10);
                if (AQI > 0 && AQI <= 6) {
                    array[index].icon = _this.icon[AQI - 1];
                    array[index].AQI = _this.AQI[AQI - 1];
                    switch (AQI) {
                        case 1:
                            array[index].airQuality = "良好";
                            break;
                        case 2:
                            array[index].airQuality = "普通";
                            break;
                        case 3:
                            array[index].airQuality = "對敏感族群不健康";
                            break;
                        case 4:
                            array[index].airQuality = "對所有族群不健康";
                            break;
                        case 5:
                            array[index].airQuality = "非常不健康";
                            break;
                        case 6:
                            array[index].airQuality = "危害";
                            break;
                    }
                }
                else {
                    //noinspection TypeScriptUnresolvedVariable
                    console.log("Calc AQI Level Error. PM2.5: " + value.pm25 + ", PM10: " + value.pm10);
                }
            });
            this.calcAQIFinish = true;
            this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
            this.mapDisplay = !this.loading;
        }
    };
    MapPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-page',
            template: __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/map-page/map-page.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _d || Object])
    ], MapPageComponent);
    return MapPageComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=map-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/setting-page/setting-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/setting-page/setting-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">\n        設定\n      </h1>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form role=\"form\">\n        <!-- TODO -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': false}\" style=\"display: none\">\n          <label>重設密碼</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"●●●●●●\" name=\"_p\"  [(ngModel)]=\"_p\">\n          </div>\n          <p class=\"help-block\">若不變更密碼，請保持此欄空白<br>請輸入6位以上密碼，接受英數符號</p>\n        </div>\n\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': _p2!=_p}\" style=\"display: none\">\n          <label>重複密碼</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input id=\"rePassword\" type=\"password\" class=\"form-control\" placeholder=\"●●●●●●\" name=\"_p2\" [(ngModel)]=\"_p2\">\n          </div>\n          <p class=\"help-block\">請重複輸入密碼</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>顯示附近測站</label>\n          <div class=\"checkbox\">\n            <label><input type=\"checkbox\" value=\"\" [(ngModel)]=\"displayNearest\" name=\"displayNearest\">顯示最靠近之測站</label>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label>監視測站</label>\n          <div ngbDropdown class=\"dropdown\" *ngFor=\"let userDevice of userDevices; let i = index\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" ngbDropdownToggle data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n              {{userDevices[i][0]}}\n              <span class=\"caret\"></span>\n            </button>\n            <ul ngbDropdownMenu class=\"dropdown-menu\">\n              <li (click)=\"deviceChange(i,'請選擇測站','text')\"><a href=\"javascript:void(0);\">請選擇測站</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li (click)=\"deviceChange(i,'THU專題測站','text')\"><a href=\"javascript:void(0);\" style=\"font-weight: bold\">THU專題測站</a></li>\n              <li *ngFor=\"let device of deviceList\" (click)=\"deviceChange(i,device.device_id,'THU')\"><a href=\"javascript:void(0);\">{{device.device_id}}</a></li>\n\n              <li role=\"separator\" class=\"divider\"></li>\n              <li (click)=\"deviceChange(i,'LASS專案測站','text')\"><a href=\"javascript:void(0);\" style=\"font-weight: bold\">LASS專案測站</a></li>\n              <li *ngFor=\"let device of LASSDeviceList\" (click)=\"deviceChange(i,device.device_id,'LASS')\"><a href=\"javascript:void(0);\">{{device.device_id}}</a></li>\n              </ul>\n          </div>\n          <p class=\"help-block\" style=\"display:none\">請設定你的使用測站，這將會顯示在首頁</p>\n        </div>\n\n        <button type=\"reset\" class=\"btn btn-default\" (click)=\"reset()\">清空</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveSettings()\">儲存</button>\n\n      </form>\n\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>\n<!-- /.container-fluid -->\n\n<app-loading [loading]=\"loading\"></app-loading>\n"

/***/ }),

/***/ "../../../../../src/app/pages/setting-page/setting-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_device_service__ = __webpack_require__("../../../../../src/app/services/get-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_user_device_service__ = __webpack_require__("../../../../../src/app/services/get-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_set_user_device_service__ = __webpack_require__("../../../../../src/app/services/set-user-device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//noinspection TypeScriptCheckImport

var SettingPageComponent = /** @class */ (function () {
    function SettingPageComponent(_getDeviceService, _getLassDeviceService, _getUserDeviceService, _setUserDeviceService, zone) {
        this._getDeviceService = _getDeviceService;
        this._getLassDeviceService = _getLassDeviceService;
        this._getUserDeviceService = _getUserDeviceService;
        this._setUserDeviceService = _setUserDeviceService;
        this.zone = zone;
        this.LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
        this.deviceList = [];
        this.userDevices = [];
        this.userDevicesTemp = [];
        this._p = '';
        this._p2 = '';
        this.displayNearest = true;
        this.loading = false;
    }
    SettingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        if (!__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check("_p")) {
            document.location.hash = "#";
        }
        //已登入
        this._getDeviceService.getDeviceHttpWithPromise().then(function (res) {
            res.sort(_this.compareDevice_id);
            _this.deviceList = res;
        });
        this._getLassDeviceService.getLassDeviceWithPromise().then(function (res) {
            res.sort(_this.compareDevice_id);
            _this.LASSDeviceList = res;
        });
        this.userDevices = [];
        this._getUserDeviceService.getUserDevicesHttpWithPromise().then(function (res) {
            _this.displayNearest = (__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get('displayNearest') == '1');
            _this.userDevices = res;
            _this.userDevices.push(["請選擇測站", "text"]);
            _this.userDevicesTemp = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](_this.userDevices);
            _this.loading = false;
        });
    };
    SettingPageComponent.prototype.compareDevice_id = function (a, b) {
        if (a.device_id < b.device_id)
            return -1;
        if (a.device_id > b.device_id)
            return 1;
        return 0;
    };
    SettingPageComponent.prototype.saveSettings = function () {
        var _this = this;
        this.loading = true;
        //測站設定
        //unique
        this.userDevices = __WEBPACK_IMPORTED_MODULE_6_lodash__["uniq"](this.userDevices);
        //去掉無效選項
        if (this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('請選擇測站')) {
            this.userDevices.splice(this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('請選擇測站'), 1);
        }
        var test = this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('THU專題測站');
        if (this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('THU專題測站') > 0) {
            this.userDevices.splice(this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('THU專題測站'), 1);
        }
        test = this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('LASS專案測站');
        if (this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('LASS專案測站') > 0) {
            this.userDevices.splice(this.userDevices.map(function (mapObj) { return mapObj[0]; }).indexOf('LASS專案測站'), 1);
        }
        //送出
        this._setUserDeviceService.setUserDevicesHttpWithPromise(this.userDevices, this.displayNearest).then(function (res) {
            _this.loading = false;
            if (res[0] == 'true') {
                //Success
                console.log('Set user device successful.');
                _this.zone.run(function () { window.location.hash = "#"; });
            }
            else if (res[0] == 'insertError') {
                console.error('User devices insert error.');
            }
            else if (res[0] == 'loginError') {
                console.error('User login error.');
            }
        });
        //TODO 密碼變更
    };
    SettingPageComponent.prototype.deviceChange = function (i, device, type) {
        //noinspection TypeScriptUnresolvedVariable
        this.userDevices[i] = [device, type];
        while (__WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.userDevices, [0, "請選擇測站"]) > 0) {
            this.userDevices.splice(__WEBPACK_IMPORTED_MODULE_6_lodash__["findIndex"](this.userDevices, [0, "請選擇測站"]), 1);
        }
        this.userDevices.push(["請選擇測站", "text"]);
    };
    SettingPageComponent.prototype.reset = function () {
        this.userDevices = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](this.userDevicesTemp);
    };
    SettingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting-page',
            template: __webpack_require__("../../../../../src/app/pages/setting-page/setting-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/setting-page/setting-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_device_service__["a" /* GetDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_device_service__["a" /* GetDeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_user_device_service__["a" /* GetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_user_device_service__["a" /* GetUserDeviceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_set_user_device_service__["a" /* SetUserDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_set_user_device_service__["a" /* SetUserDeviceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
    ], SettingPageComponent);
    return SettingPageComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=setting-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/signup-page/signup-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/signup-page/signup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">\n        註冊\n      </h1>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n\n      <form role=\"form\">\n\n        <div class=\"form-group\">\n          <label>電子郵件</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n            <input type=\"email\" class=\"form-control\" placeholder=\"example@example.com\" name=\"_e\"  [(ngModel)]=\"_e\">\n          </div>\n          <p class=\"help-block\">請輸入你的電子郵件，以作為帳號使用</p>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': _p.length<6&&_p.length!=0}\">\n          <label>密碼</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input type=\"password\" class=\"form-control\" placeholder=\"●●●●●●\" name=\"_p\"  [(ngModel)]=\"_p\">\n          </div>\n          <p class=\"help-block\">請輸入6位以上密碼，接受英數符號</p>\n        </div>\n\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': _p2!=_p}\">\n          <label>重複密碼</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input type=\"password\" class=\"form-control\" placeholder=\"●●●●●●\" name=\"_p2\"  [(ngModel)]=\"_p2\">\n          </div>\n          <p class=\"help-block\">請重複輸入密碼</p>\n        </div>\n\n\n        <button type=\"reset\" class=\"btn btn-default\">清空</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signUp()\">送出</button>\n\n      </form>\n\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>\n<!-- /.container-fluid -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/signup-page/signup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/registration.php";
        this._e = "";
        this._p = "";
        this._p2 = "";
    }
    SignupPageComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].check("_e")) {
            this._e = __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].get("_e");
        }
    };
    SignupPageComponent.prototype.signUp = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('_e', this._e);
        params.set('_p', this._p);
        this.signupHttpWithPromise(params).then(function (res) {
            if (res == 'true') {
                //註冊成功
                alert("註冊成功，請重新登入");
                __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].set('_e', _this._e);
                document.location.hash = "#";
            }
            else if (res == 'email') {
                alert("帳號已存在");
                _this._e = _this._p = _this._p2 = "";
            }
            else {
                console.warn("signUp Error:" + res.toString);
            }
        });
    };
    //獲取登入資料
    SignupPageComponent.prototype.signupHttpWithPromise = function (params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */](); }
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.dbURL, params).toPromise().then(function (res) {
            var body = res.text();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            return Promise.resolve(dataIn);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot login.");
            return Promise.resolve(err);
        });
    };
    SignupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__("../../../../../src/app/pages/signup-page/signup-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/signup-page/signup-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], SignupPageComponent);
    return SignupPageComponent;
    var _a;
}());

//# sourceMappingURL=signup-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/portraitWarning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortraitWarningComponent; });
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

var PortraitWarningComponent = /** @class */ (function () {
    function PortraitWarningComponent() {
        this.display = false;
    }
    PortraitWarningComponent.prototype.ngOnInit = function () {
        this.onResize(window);
    };
    PortraitWarningComponent.prototype.onResize = function (event) {
        if (event.innerWidth < event.innerHeight && event.innerWidth < 768) {
            this.display = true;
        }
        else {
            this.display = false;
        }
    };
    PortraitWarningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portraitWarn',
            template: "\n  <span (window:resize)=\"onResize($event.target)\">\n    <div id=\"over\" class=\"over\" *ngIf=\"display\">\n        <div class=\"layout\">\u8ACB\u5C07\u88DD\u7F6E\u6253\u6A6B</div>\n    </div>\n  </span>\n  ",
            styles: ["\n.over {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #494949;\n    opacity:0.7;\n    z-index: 1000;\n}\n\n.layout {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform:translate(-50%,-50%);\n    z-index: 1001;\n    text-align: center;\n    font-size: 50px;\n    color: white;\n    -webkit-writing-mode: vertical-rl;\n    writing-mode: vertical-rl;\n}\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], PortraitWarningComponent);
    return PortraitWarningComponent;
}());

//# sourceMappingURL=portraitWarning.component.js.map

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


var Safe = /** @class */ (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    Safe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], Safe);
    return Safe;
    var _a;
}());

//# sourceMappingURL=safe-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/selective-preloading-strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectivePreloadingStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectivePreloadingStrategy = /** @class */ (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            //noinspection TypeScriptUnresolvedFunction
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
    };
    SelectivePreloadingStrategy = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], SelectivePreloadingStrategy);
    return SelectivePreloadingStrategy;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=selective-preloading-strategy.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_data__ = __webpack_require__("../../../../../src/assets/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetDataService = /** @class */ (function () {
    function GetDataService(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getDBByTimeById.php";
        //查詢參數
        this.device_idList = [];
        this.minDate = "";
        this.maxDate = "";
        //是否已設定查詢對象
        this.isSetParam = false;
        //getParam
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    //設定查詢對象
    GetDataService.prototype.setParam = function (device, minDate, maxDate) {
        if (device === void 0) { device = this.device_idList; }
        this.data = [];
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        this.device_idList = device;
        this.params.set('device_id', JSON.stringify(device));
        this.minDate = __WEBPACK_IMPORTED_MODULE_4_moment__(minDate).utc().format('YYYY-MM-DD HH:mm:ss');
        this.params.set('minDate', this.minDate);
        this.maxDate = __WEBPACK_IMPORTED_MODULE_4_moment__(maxDate).utc().format('YYYY-MM-DD HH:mm:ss');
        this.params.set('maxDate', this.maxDate);
        this.isSetParam = true;
    };
    //獲取空汙資料
    GetDataService.prototype.getDataHttpWithPromise = function () {
        var _this = this;
        if (this.isSetParam) {
            //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
            return this.http.get(this.dbURL, { search: this.params }).toPromise().then(function (res) {
                var body = res.json();
                return body || {};
            }).then(function (dataIn) {
                //成功取得資料
                ////轉換UTC時間為本地時間
                //dataIn.forEach((value,index,array)=>{
                //  //noinspection TypeScriptUnresolvedVariable
                //  let tt = moment.utc(value.time);
                //  //noinspection TypeScriptUnresolvedVariable
                //  array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
                //});
                _this.data = dataIn;
                return Promise.resolve(_this.data);
            }).catch(function (err) {
                //失敗取得資料
                console.warn("Warn: Cannot get airData.");
                _this.data = __WEBPACK_IMPORTED_MODULE_3__assets_mock_data__["a" /* DATA */];
                return Promise.resolve(_this.data);
            });
        }
        else {
            console.warn("Please set device_id, minDate, maxDate before getting air data.");
        }
    };
    GetDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetDataService);
    return GetDataService;
    var _a;
}());

//# sourceMappingURL=get-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_device__ = __webpack_require__("../../../../../src/assets/mock-device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//noinspection TypeScriptCheckImport

var GetDeviceService = /** @class */ (function () {
    function GetDeviceService(http) {
        var _this = this;
        this.http = http;
        //php位置
        this.dbURL = "assets/php/getDBDevice.php";
        this.getDeviceHttpWithPromise().then(function (res) {
            _this.data = res;
        });
    }
    //獲取測站資料
    GetDeviceService.prototype.getDeviceHttpWithPromise = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
        return this.http.get(this.dbURL).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            ////轉換UTC時間為本地時間
            //dataIn.forEach((value,index,array)=>{
            //  //noinspection TypeScriptUnresolvedVariable
            //  let tt = moment.utc(value.time);
            //  //noinspection TypeScriptUnresolvedVariable
            //  array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
            //});
            _this.data = __WEBPACK_IMPORTED_MODULE_4_lodash__["cloneDeep"](dataIn);
            return Promise.resolve(dataIn);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: cannot get air device.");
            _this.data = __WEBPACK_IMPORTED_MODULE_3__assets_mock_device__["a" /* DEVICE */];
            return Promise.resolve([]);
        });
    };
    GetDeviceService.prototype.getDeviceById = function (id, callback) {
        var _this = this;
        if (this.data.length == 0) {
            this.getDeviceHttpWithPromise().then(function (res) {
                for (var key in _this.data) {
                    if (_this.data[key]['device_id'] == id) {
                        (callback && typeof (callback) === "function") && callback(_this.data[key]);
                        break;
                    }
                }
            });
        }
        else {
            for (var key in this.data) {
                if (this.data[key]['device_id'] == id) {
                    (callback && typeof (callback) === "function") && callback(this.data[key]);
                    break;
                }
            }
        }
    };
    GetDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetDeviceService);
    return GetDeviceService;
    var _a;
}());

//# sourceMappingURL=get-device.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-lassdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLASSDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetLASSDataService = /** @class */ (function () {
    function GetLASSDataService(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getLASSByTimeById.php";
        //查詢參數
        this.device_idList = [];
        this.minDate = "";
        this.maxDate = "";
        //是否已設定查詢對象
        this.isSetParam = false;
        //getParam
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    //設定查詢對象
    GetLASSDataService.prototype.setParam = function (device, minDate, maxDate) {
        if (device === void 0) { device = this.device_idList; }
        this.data = [];
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        this.device_idList = device;
        this.params.set('device_id', JSON.stringify(device));
        this.minDate = __WEBPACK_IMPORTED_MODULE_3_moment__(minDate).utc().format('YYYY-MM-DD HH:mm:ss');
        this.params.set('minDate', this.minDate);
        this.maxDate = __WEBPACK_IMPORTED_MODULE_3_moment__(maxDate).utc().format('YYYY-MM-DD HH:mm:ss');
        this.params.set('maxDate', this.maxDate);
        this.isSetParam = true;
    };
    //獲取空汙資料
    GetLASSDataService.prototype.getDataHttpWithPromise = function () {
        var _this = this;
        if (this.isSetParam) {
            //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
            return this.http.get(this.dbURL, { search: this.params }).toPromise().then(function (res) {
                var body = res.json();
                return body || {};
            }).then(function (dataIn) {
                //成功取得資料
                //轉換UTC時間為本地時間
                dataIn.forEach(function (value, index, array) {
                    //noinspection TypeScriptUnresolvedVariable
                    var tt = __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](value.time);
                    //noinspection TypeScriptUnresolvedVariable
                    array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
                });
                _this.data = dataIn;
                return Promise.resolve(_this.data);
            }).catch(function (err) {
                //失敗取得資料
                console.warn("Warn: Cannot get lassData.");
                _this.data = [];
                return Promise.resolve(_this.data);
            });
        }
        else {
            console.warn("Please set device_id, minDate, maxDate before getting data.");
        }
    };
    GetLASSDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetLASSDataService);
    return GetLASSDataService;
    var _a;
}());

//# sourceMappingURL=get-lassdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-lassdevice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLassDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geodesy_latlon_vincenty__ = __webpack_require__("../../../../geodesy/latlon-vincenty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geodesy_latlon_vincenty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_geodesy_latlon_vincenty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//noinspection TypeScriptCheckImport

var GetLassDeviceService = /** @class */ (function () {
    function GetLassDeviceService(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getLASSDevices.php";
        this.LASSDeviceList = [];
        this.nearestAmount = 3;
    }
    GetLassDeviceService.prototype.setLASSDeviceList = function (amount) {
        if (amount === void 0) { amount = this.nearestAmount; }
        this.LASSDeviceList = [];
        this.nearestAmount = amount;
        if (__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get('displayNearest') == '1' || this.LASSDeviceList.length == 0) {
            this.getGeolocation();
        }
    };
    GetLassDeviceService.prototype.getGeolocation = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lat') && __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lon')) {
            this.getNearestLassDevice();
        }
        if (navigator.geolocation) {
            //let timeoutId = setInterval(() => {
            //  //等待過長時彈跳對話框
            //  if (!confirm("裝置位置取得中\n是否要繼續等待?")){
            //    clearInterval(timeoutId);
            //    timeoutId = 0;
            //    console.warn('Cancel getting location.');
            //    setLocToTHU();
            //    this.getNearestLassDevice();
            //  }
            //}, 5000);
            navigator.geolocation.getCurrentPosition(function (position) {
                //if(timeoutId) {
                //  clearInterval(timeoutId);
                //  timeoutId = 0;
                __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set('lat', String(position.coords.latitude));
                __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set('lon', String(position.coords.longitude));
                console.log(position.coords.latitude + "," + position.coords.longitude);
                _this.getNearestLassDevice();
                //}
            }, function (err) {
                //if(timeoutId) {
                //  clearInterval(timeoutId);
                //  timeoutId = 0;
                console.warn('ERROR getting location(' + err.code + '): ' + err.message);
                if (!__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lat') || !__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lon')) {
                    setLocToTHU();
                }
                _this.getNearestLassDevice();
                //}
            }, {
                enableHighAccuracy: false,
                maximumAge: 60000,
                timeout: Infinity
            });
        }
        else {
            console.warn("Geolocation is not supported by this browser.");
            if (!__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lat') && !__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].check('lon')) {
                setLocToTHU();
            }
            this.getNearestLassDevice();
        }
        function setLocToTHU() {
            console.warn('Set default location to THU.');
            __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set('lat', '24.1824695');
            __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set('lon', '120.6025716');
            console.log('24.1824695,120.6025716');
        }
    };
    //Calc Nearest points
    GetLassDeviceService.prototype.getNearestLassDevice = function (lat, lon) {
        var _this = this;
        if (lat === void 0) { lat = Number(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get("lat")); }
        if (lon === void 0) { lon = Number(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].get("lon")); }
        __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set("lat", String(lat));
        __WEBPACK_IMPORTED_MODULE_5_ng2_cookies__["Cookie"].set("lon", String(lon));
        var here = new __WEBPACK_IMPORTED_MODULE_3_geodesy_latlon_vincenty__(lat, lon);
        this.getLassDeviceWithPromise().then(function (res) {
            //排除三點狀況
            if (res.length == 0) {
                console.error("LASS Devices Empty! Please make sure python script is running.");
                alert('Server Error! Please reload or contact server admin!');
            }
            else {
                //建立LatLon物件，並計算距離
                res.forEach(function (value, index, array) {
                    //noinspection TypeScriptUnresolvedVariable
                    array[index].latlon = new __WEBPACK_IMPORTED_MODULE_3_geodesy_latlon_vincenty__(value.gps_lat, value.gps_lon);
                    //noinspection TypeScriptUnresolvedVariable
                    array[index].distance = here.distanceTo(value.latlon);
                });
                //進行排序
                res.sort(function (a, b) {
                    return a.distance - b.distance;
                });
                //從第一個物件開始push到LASSDeviceList
                for (var i = 0; i < _this.nearestAmount; i++) {
                    _this.LASSDeviceList.push([res[i].device_id, 'LASS']);
                    console.log(res[i].distance);
                }
                //unique
                _this.LASSDeviceList = _this.LASSDeviceList.filter(function (value, index, self) {
                    return self.map(function (mapObj) { return mapObj[0]; }).indexOf(value[0]) === index;
                });
            }
            console.log(JSON.stringify(_this.LASSDeviceList));
        });
    };
    //獲取LASS測站資料
    GetLassDeviceService.prototype.getLassDeviceWithPromise = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
        return this.http.get(this.dbURL).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            //轉換UTC時間為本地時間
            dataIn.forEach(function (value, index, array) {
                //noinspection TypeScriptUnresolvedVariable
                var tt = __WEBPACK_IMPORTED_MODULE_4_moment__["utc"](value.time);
                //noinspection TypeScriptUnresolvedVariable
                array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
            });
            _this.data = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](dataIn);
            return Promise.resolve(dataIn);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot get Lass Devices.");
            _this.LASSDeviceList = [];
            return Promise.resolve([]);
        });
    };
    GetLassDeviceService.prototype.getLassDeviceById = function (id, callback) {
        var _this = this;
        if (this.data.length == 0) {
            this.getLassDeviceWithPromise().then(function (res) {
                for (var key in _this.data) {
                    if (_this.data[key]['device_id'] == id) {
                        (callback && typeof (callback) === "function") && callback(_this.data[key]);
                        break;
                    }
                }
            });
        }
        else {
            for (var key in this.data) {
                if (this.data[key]['device_id'] == id) {
                    (callback && typeof (callback) === "function") && callback(this.data[key]);
                    break;
                }
            }
        }
    };
    GetLassDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetLassDeviceService);
    return GetLassDeviceService;
    var _a;
}());

//# sourceMappingURL=get-lassdevice.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-single-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSingleDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_singleData__ = __webpack_require__("../../../../../src/assets/mock-singleData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetSingleDataService = /** @class */ (function () {
    function GetSingleDataService(http) {
        var _this = this;
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getDBByTimeSingleData.php";
        this.getSingleDataHttpWithPromise();
        //重複獲取資料的定時器
        this.getDataInterval = setInterval(function () {
            _this.getSingleDataHttpWithPromise();
        }, 35000);
    }
    //生命週期結束時清理掉定時器
    GetSingleDataService.prototype.ngOnDestroy = function () {
        clearInterval(this.getDataInterval);
    };
    //獲取終端資料
    GetSingleDataService.prototype.getSingleDataHttpWithPromise = function (params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */](); }
        //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
        return this.http.get(this.dbURL, { search: params }).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            _this.data.length = 0;
            dataIn.forEach(function (value, index, array) {
                //noinspection TypeScriptUnresolvedVariable
                _this.data[value.clientNum] = value;
            });
            return Promise.resolve(_this.data);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot get real time data.");
            _this.data = __WEBPACK_IMPORTED_MODULE_3__assets_mock_singleData__["a" /* realTimeDATA */]; //Use mock data
            return Promise.resolve(_this.data);
        });
    };
    GetSingleDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetSingleDataService);
    return GetSingleDataService;
    var _a;
}());

//# sourceMappingURL=get-single-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-single-lassdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSingleLASSDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetSingleLASSDataService = /** @class */ (function () {
    function GetSingleLASSDataService(http) {
        var _this = this;
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getLASSByTimeByIdSingleData.php";
        //查詢對象
        this.device_idList = [];
        this.time = "";
        //是否已設定查詢對象
        this.isSetParam = false;
        this.isSetTime = false;
        //getParam
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        //重複獲取資料的定時器
        this.getDataInterval = setInterval(function () {
            if (_this.isSetParam) {
                _this.getSingleDataHttpWithPromise();
            }
        }, 61000);
    }
    //生命週期結束時清理掉定時器
    GetSingleLASSDataService.prototype.ngOnDestroy = function () {
        if (this.isSetParam) {
            clearInterval(this.getDataInterval);
        }
    };
    //設定查詢對象
    GetSingleLASSDataService.prototype.setParam = function (device, time) {
        if (device === void 0) { device = this.device_idList; }
        this.data = [];
        this.device_idList = device;
        var device_idJSON = JSON.stringify(device);
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        this.params.set('device_id', device_idJSON);
        if (typeof time !== 'undefined') {
            this.time = time;
            this.params.set('time', time);
            this.isSetTime = true;
        }
        else {
            this.time = "";
            this.isSetTime = false;
        }
        this.isSetParam = true;
    };
    //獲取終端資料
    GetSingleLASSDataService.prototype.getSingleDataHttpWithPromise = function () {
        var _this = this;
        if (this.isSetParam) {
            //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
            return this.http.get(this.dbURL, { search: this.params }).toPromise().then(function (res) {
                var body = res.json();
                return body || {};
            }).then(function (dataIn) {
                //成功取得資料
                //轉換UTC時間為本地時間
                dataIn.forEach(function (value, index, array) {
                    //noinspection TypeScriptUnresolvedVariable
                    var tt = __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](value.time);
                    //noinspection TypeScriptUnresolvedVariable
                    array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
                });
                _this.data = dataIn;
                return Promise.resolve(_this.data);
            }).catch(function (err) {
                //失敗取得資料
                console.warn("Warn: Cannot get LASS real time data.");
                _this.data = [];
                return Promise.resolve(_this.data);
            });
        }
        else {
            console.warn("Please set device_id list before getting data.");
        }
    };
    GetSingleLASSDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetSingleLASSDataService);
    return GetSingleLASSDataService;
    var _a;
}());

//# sourceMappingURL=get-single-lassdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-user-device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_lassdevice_service__ = __webpack_require__("../../../../../src/app/services/get-lassdevice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetUserDeviceService = /** @class */ (function () {
    function GetUserDeviceService(http, _getLassDeviceService) {
        this.http = http;
        this._getLassDeviceService = _getLassDeviceService;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/getUserDevices.php";
    }
    //獲取登入資料
    GetUserDeviceService.prototype.getUserDevicesHttpWithPromise = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('_e', __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].get('_e'));
        params.set('_p', __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].get('_p'));
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.dbURL, params).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            _this.data = [];
            dataIn.forEach(function (value) {
                //noinspection TypeScriptUnresolvedVariable
                if (typeof value.device_id !== 'undefined') {
                    //noinspection TypeScriptUnresolvedVariable
                    _this.data.push([value.device_id, value.type]);
                }
            });
            return Promise.resolve(_this.data);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot get user devices.");
            return Promise.resolve(_this.data);
        });
    };
    GetUserDeviceService.prototype.getDevices = function (nearestAmount, callback) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].check("_p")) {
            //已登入
            this.getUserDevicesHttpWithPromise().then(function (res) {
                _this.devices = res;
                if (res.length == 0) {
                    //尋找最靠近點
                    _this._getLassDeviceService.setLASSDeviceList(nearestAmount);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].set('devices', JSON.stringify(res));
                    (callback && typeof (callback) === "function") && callback(_this.devices);
                }
            });
        }
        else {
            //未登入
            this._getLassDeviceService.setLASSDeviceList(nearestAmount);
        }
        var interval = setInterval(function () {
            _this.devices = _this._getLassDeviceService.LASSDeviceList;
            if (_this.devices.length != 0) {
                __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].set('devices', JSON.stringify(_this.devices));
                (callback && typeof (callback) === "function") && callback(_this.devices);
                clearTimeout(interval);
            }
        }, 500);
    };
    GetUserDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__get_lassdevice_service__["a" /* GetLassDeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__get_lassdevice_service__["a" /* GetLassDeviceService */]) === "function" && _b || Object])
    ], GetUserDeviceService);
    return GetUserDeviceService;
    var _a, _b;
}());

//# sourceMappingURL=get-user-device.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/login.php";
    }
    //獲取登入資料
    LoginService.prototype.loginHttpWithPromise = function (params) {
        var _this = this;
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */](); }
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.dbURL, params).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            _this.data = dataIn;
            return Promise.resolve(_this.data);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot login.");
            return Promise.resolve(_this.data);
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/set-user-device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetUserDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetUserDeviceService = /** @class */ (function () {
    function SetUserDeviceService(http) {
        this.http = http;
        //資料
        this.data = [];
        //php位置
        this.dbURL = "assets/php/setUserDevices.php";
    }
    //獲取登入資料
    SetUserDeviceService.prototype.setUserDevicesHttpWithPromise = function (deviceList, displayNearest) {
        var _this = this;
        if (displayNearest === void 0) { displayNearest = true; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('_e', __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].get('_e'));
        params.set('_p', __WEBPACK_IMPORTED_MODULE_3_ng2_cookies__["Cookie"].get('_p'));
        params.set('device_id', JSON.stringify(deviceList));
        params.set('displayNearest', displayNearest);
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.dbURL, params).toPromise().then(function (res) {
            var body = res.json();
            return body || {};
        }).then(function (dataIn) {
            //成功取得資料
            _this.data = dataIn;
            return Promise.resolve(_this.data);
        }).catch(function (err) {
            //失敗取得資料
            console.warn("Warn: Cannot set user devices. Warn:" + String(err));
            _this.data = [];
            return Promise.resolve(_this.data);
        });
    };
    SetUserDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], SetUserDeviceService);
    return SetUserDeviceService;
    var _a;
}());

//# sourceMappingURL=set-user-device.service.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = [{ "no": "1", "0": "1", "time": "2017-10-02 01:52:31", "1": "2017-10-02 01:52:31", "pm1": "33.3", "2": "33.3", "pm10": "67.6", "3": "67.6", "pm25": "53.1", "4": "53.1", "temp": "26.95", "5": "26.95", "humid": "70.7", "6": "70.7", "clientNum": "1", "7": "1" }, { "no": "2", "0": "2", "time": "2017-10-02 01:52:40", "1": "2017-10-02 01:52:40", "pm1": "31.9", "2": "31.9", "pm10": "60.7778", "3": "60.7778", "pm25": "49", "4": "49", "temp": "28.01", "5": "28.01", "humid": "70.61", "6": "70.61", "clientNum": "2", "7": "2" }, { "no": "3", "0": "3", "time": "2017-10-02 01:52:38", "1": "2017-10-02 01:52:38", "pm1": "37.5", "2": "37.5", "pm10": "73.3333", "3": "73.3333", "pm25": "59.3", "4": "59.3", "temp": "26.99", "5": "26.99", "humid": "74.65", "6": "74.65", "clientNum": "0", "7": "0" }, { "no": "4", "0": "4", "time": "2017-10-02 02:02:33", "1": "2017-10-02 02:02:33", "pm1": "31.5", "2": "31.5", "pm10": "63.2", "3": "63.2", "pm25": "50", "4": "50", "temp": "27.08", "5": "27.08", "humid": "70.32", "6": "70.32", "clientNum": "1", "7": "1" }, { "no": "5", "0": "5", "time": "2017-10-02 02:02:41", "1": "2017-10-02 02:02:41", "pm1": "31.8182", "2": "31.8182", "pm10": "61.2", "3": "61.2", "pm25": "49.8182", "4": "49.8182", "temp": "27.9909", "5": "27.9909", "humid": "70.7636", "6": "70.7636", "clientNum": "2", "7": "2" }, { "no": "6", "0": "6", "time": "2017-10-02 02:02:45", "1": "2017-10-02 02:02:45", "pm1": "35.3", "2": "35.3", "pm10": "71.3333", "3": "71.3333", "pm25": "54.6", "4": "54.6", "temp": "26.75", "5": "26.75", "humid": "75.22", "6": "75.22", "clientNum": "0", "7": "0" }, { "no": "7", "0": "7", "time": "2017-10-02 02:12:34", "1": "2017-10-02 02:12:34", "pm1": "30.6", "2": "30.6", "pm10": "62.6", "3": "62.6", "pm25": "48.9", "4": "48.9", "temp": "27.17", "5": "27.17", "humid": "69.8", "6": "69.8", "clientNum": "1", "7": "1" }, { "no": "8", "0": "8", "time": "2017-10-02 02:12:49", "1": "2017-10-02 02:12:49", "pm1": "33.8", "2": "33.8", "pm10": "68.2222", "3": "68.2222", "pm25": "52.5", "4": "52.5", "temp": "26.78", "5": "26.78", "humid": "75.03", "6": "75.03", "clientNum": "0", "7": "0" }, { "no": "9", "0": "9", "time": "2017-10-02 02:13:41", "1": "2017-10-02 02:13:41", "pm1": "31.9", "2": "31.9", "pm10": "61", "3": "61", "pm25": "49.4", "4": "49.4", "temp": "27.91", "5": "27.91", "humid": "70.99", "6": "70.99", "clientNum": "2", "7": "2" }, { "no": "10", "0": "10", "time": "2017-10-02 02:22:35", "1": "2017-10-02 02:22:35", "pm1": "29.3636", "2": "29.3636", "pm10": "57.7273", "3": "57.7273", "pm25": "45.8182", "4": "45.8182", "temp": "27.1091", "5": "27.1091", "humid": "68.6", "6": "68.6", "clientNum": "1", "7": "1" }, { "no": "11", "0": "11", "time": "2017-10-02 02:22:53", "1": "2017-10-02 02:22:53", "pm1": "32.5", "2": "32.5", "pm10": "65.2", "3": "65.2", "pm25": "49.9", "4": "49.9", "temp": "26.8", "5": "26.8", "humid": "74.51", "6": "74.51", "clientNum": "0", "7": "0" }, { "no": "12", "0": "12", "time": "2017-10-02 02:23:42", "1": "2017-10-02 02:23:42", "pm1": "31.2", "2": "31.2", "pm10": "60.3", "3": "60.3", "pm25": "48.7", "4": "48.7", "temp": "27.94", "5": "27.94", "humid": "70.84", "6": "70.84", "clientNum": "2", "7": "2" }, { "no": "13", "0": "13", "time": "2017-10-02 02:32:54", "1": "2017-10-02 02:32:54", "pm1": "31.3", "2": "31.3", "pm10": "63.5", "3": "63.5", "pm25": "49.2", "4": "49.2", "temp": "26.84", "5": "26.84", "humid": "74.33", "6": "74.33", "clientNum": "0", "7": "0" }, { "no": "14", "0": "14", "time": "2017-10-02 02:33:35", "1": "2017-10-02 02:33:35", "pm1": "28.6", "2": "28.6", "pm10": "57.1", "3": "57.1", "pm25": "45.5", "4": "45.5", "temp": "27.04", "5": "27.04", "humid": "68.72", "6": "68.72", "clientNum": "1", "7": "1" }, { "no": "15", "0": "15", "time": "2017-10-02 02:33:43", "1": "2017-10-02 02:33:43", "pm1": "31.7273", "2": "31.7273", "pm10": "61.0909", "3": "61.0909", "pm25": "49.0909", "4": "49.0909", "temp": "27.9091", "5": "27.9091", "humid": "70.8273", "6": "70.8273", "clientNum": "2", "7": "2" }, { "no": "16", "0": "16", "time": "2017-10-02 02:43:03", "1": "2017-10-02 02:43:03", "pm1": "31.6", "2": "31.6", "pm10": "63", "3": "63", "pm25": "49.1", "4": "49.1", "temp": "26.87", "5": "26.87", "humid": "74.28", "6": "74.28", "clientNum": "0", "7": "0" }, { "no": "17", "0": "17", "time": "2017-10-02 02:43:36", "1": "2017-10-02 02:43:36", "pm1": "29.8182", "2": "29.8182", "pm10": "58.7273", "3": "58.7273", "pm25": "46.8182", "4": "46.8182", "temp": "27.1091", "5": "27.1091", "humid": "71.1727", "6": "71.1727", "clientNum": "1", "7": "1" }, { "no": "18", "0": "18", "time": "2017-10-02 02:44:43", "1": "2017-10-02 02:44:43", "pm1": "31.8", "2": "31.8", "pm10": "62", "3": "62", "pm25": "49.8", "4": "49.8", "temp": "27.92", "5": "27.92", "humid": "71.03", "6": "71.03", "clientNum": "2", "7": "2" }, { "no": "19", "0": "19", "time": "2017-10-02 02:53:09", "1": "2017-10-02 02:53:09", "pm1": "31.6", "2": "31.6", "pm10": "63.6", "3": "63.6", "pm25": "48.8", "4": "48.8", "temp": "26.84", "5": "26.84", "humid": "74.43", "6": "74.43", "clientNum": "0", "7": "0" }, { "no": "20", "0": "20", "time": "2017-10-02 02:54:36", "1": "2017-10-02 02:54:36", "pm1": "29.6", "2": "29.6", "pm10": "58.6", "3": "58.6", "pm25": "46.7", "4": "46.7", "temp": "26.92", "5": "26.92", "humid": "69.75", "6": "69.75", "clientNum": "1", "7": "1" }, { "no": "21", "0": "21", "time": "2017-10-02 02:54:44", "1": "2017-10-02 02:54:44", "pm1": "31.1818", "2": "31.1818", "pm10": "60.2", "3": "60.2", "pm25": "48.6364", "4": "48.6364", "temp": "27.9", "5": "27.9", "humid": "71.0364", "6": "71.0364", "clientNum": "2", "7": "2" }, { "no": "22", "0": "22", "time": "2017-10-02 03:03:15", "1": "2017-10-02 03:03:15", "pm1": "31.7", "2": "31.7", "pm10": "62.9", "3": "62.9", "pm25": "48.3", "4": "48.3", "temp": "26.8", "5": "26.8", "humid": "74.47", "6": "74.47", "clientNum": "0", "7": "0" }, { "no": "23", "0": "23", "time": "2017-10-02 03:04:37", "1": "2017-10-02 03:04:37", "pm1": "29.3", "2": "29.3", "pm10": "58.5556", "3": "58.5556", "pm25": "46.3", "4": "46.3", "temp": "26.92", "5": "26.92", "humid": "71.72", "6": "71.72", "clientNum": "1", "7": "1" }, { "no": "24", "0": "24", "time": "2017-10-02 03:05:44", "1": "2017-10-02 03:05:44", "pm1": "30.1", "2": "30.1", "pm10": "58.4", "3": "58.4", "pm25": "47.4", "4": "47.4", "temp": "27.9", "5": "27.9", "humid": "70.84", "6": "70.84", "clientNum": "2", "7": "2" }, { "no": "25", "0": "25", "time": "2017-10-02 03:13:25", "1": "2017-10-02 03:13:25", "pm1": "32.5", "2": "32.5", "pm10": "66.7", "3": "66.7", "pm25": "50.6", "4": "50.6", "temp": "26.48", "5": "26.48", "humid": "75.73", "6": "75.73", "clientNum": "0", "7": "0" }, { "no": "26", "0": "26", "time": "2017-10-02 03:14:38", "1": "2017-10-02 03:14:38", "pm1": "28.4545", "2": "28.4545", "pm10": "56.8", "3": "56.8", "pm25": "45.3636", "4": "45.3636", "temp": "26.8182", "5": "26.8182", "humid": "70.2", "6": "70.2", "clientNum": "1", "7": "1" }, { "no": "27", "0": "27", "time": "2017-10-02 03:15:45", "1": "2017-10-02 03:15:45", "pm1": "30.0909", "2": "30.0909", "pm10": "57.0909", "3": "57.0909", "pm25": "46.5455", "4": "46.5455", "temp": "27.9455", "5": "27.9455", "humid": "70.7636", "6": "70.7636", "clientNum": "2", "7": "2" }, { "no": "28", "0": "28", "time": "2017-10-02 03:23:29", "1": "2017-10-02 03:23:29", "pm1": "32", "2": "32", "pm10": "64.8", "3": "64.8", "pm25": "49.9", "4": "49.9", "temp": "26.44", "5": "26.44", "humid": "76.16", "6": "76.16", "clientNum": "0", "7": "0" }, { "no": "29", "0": "29", "time": "2017-10-02 03:25:38", "1": "2017-10-02 03:25:38", "pm1": "27.8", "2": "27.8", "pm10": "55.3", "3": "55.3", "pm25": "44.3", "4": "44.3", "temp": "26.59", "5": "26.59", "humid": "70.45", "6": "70.45", "clientNum": "1", "7": "1" }, { "no": "30", "0": "30", "time": "2017-10-02 03:26:46", "1": "2017-10-02 03:26:46", "pm1": "29.1818", "2": "29.1818", "pm10": "55.0909", "3": "55.0909", "pm25": "45.3636", "4": "45.3636", "temp": "27.9364", "5": "27.9364", "humid": "70.4182", "6": "70.4182", "clientNum": "2", "7": "2" }, { "no": "31", "0": "31", "time": "2017-10-02 03:33:34", "1": "2017-10-02 03:33:34", "pm1": "31.4", "2": "31.4", "pm10": "62.4", "3": "62.4", "pm25": "48.4", "4": "48.4", "temp": "26.62", "5": "26.62", "humid": "75.47", "6": "75.47", "clientNum": "0", "7": "0" }, { "no": "32", "0": "32", "time": "2017-10-02 03:35:39", "1": "2017-10-02 03:35:39", "pm1": "27.8182", "2": "27.8182", "pm10": "54.9091", "3": "54.9091", "pm25": "44.1818", "4": "44.1818", "temp": "26.4818", "5": "26.4818", "humid": "70.3273", "6": "70.3273", "clientNum": "1", "7": "1" }, { "no": "33", "0": "33", "time": "2017-10-02 03:37:46", "1": "2017-10-02 03:37:46", "pm1": "28.9", "2": "28.9", "pm10": "54.2", "3": "54.2", "pm25": "44.4", "4": "44.4", "temp": "27.88", "5": "27.88", "humid": "70.43", "6": "70.43", "clientNum": "2", "7": "2" }, { "no": "34", "0": "34", "time": "2017-10-02 03:43:41", "1": "2017-10-02 03:43:41", "pm1": "31.9", "2": "31.9", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.6", "5": "26.6", "humid": "75.53", "6": "75.53", "clientNum": "0", "7": "0" }, { "no": "35", "0": "35", "time": "2017-10-02 03:46:39", "1": "2017-10-02 03:46:39", "pm1": "28.3", "2": "28.3", "pm10": "55.8", "3": "55.8", "pm25": "44.8", "4": "44.8", "temp": "26.54", "5": "26.54", "humid": "70.54", "6": "70.54", "clientNum": "1", "7": "1" }, { "no": "36", "0": "36", "time": "2017-10-02 03:47:47", "1": "2017-10-02 03:47:47", "pm1": "28.9", "2": "28.9", "pm10": "55.3", "3": "55.3", "pm25": "45.6", "4": "45.6", "temp": "27.87", "5": "27.87", "humid": "70.43", "6": "70.43", "clientNum": "2", "7": "2" }, { "no": "37", "0": "37", "time": "2017-10-02 03:53:50", "1": "2017-10-02 03:53:50", "pm1": "31.6", "2": "31.6", "pm10": "64.3", "3": "64.3", "pm25": "49.1", "4": "49.1", "temp": "26.56", "5": "26.56", "humid": "75.72", "6": "75.72", "clientNum": "0", "7": "0" }, { "no": "38", "0": "38", "time": "2017-10-02 03:56:40", "1": "2017-10-02 03:56:40", "pm1": "28.7273", "2": "28.7273", "pm10": "57.3333", "3": "57.3333", "pm25": "45.9091", "4": "45.9091", "temp": "26.6545", "5": "26.6545", "humid": "70.7273", "6": "70.7273", "clientNum": "1", "7": "1" }, { "no": "39", "0": "39", "time": "2017-10-02 03:57:48", "1": "2017-10-02 03:57:48", "pm1": "28.6364", "2": "28.6364", "pm10": "53.8182", "3": "53.8182", "pm25": "44.3636", "4": "44.3636", "temp": "27.8909", "5": "27.8909", "humid": "70.3818", "6": "70.3818", "clientNum": "2", "7": "2" }, { "no": "40", "0": "40", "time": "2017-10-02 04:03:56", "1": "2017-10-02 04:03:56", "pm1": "32.1", "2": "32.1", "pm10": "64.3333", "3": "64.3333", "pm25": "50.1", "4": "50.1", "temp": "26.48", "5": "26.48", "humid": "76.18", "6": "76.18", "clientNum": "0", "7": "0" }, { "no": "41", "0": "41", "time": "2017-10-02 04:07:40", "1": "2017-10-02 04:07:40", "pm1": "29", "2": "29", "pm10": "57.1", "3": "57.1", "pm25": "46.1", "4": "46.1", "temp": "26.6", "5": "26.6", "humid": "70.83", "6": "70.83", "clientNum": "1", "7": "1" }, { "no": "42", "0": "42", "time": "2017-10-02 04:08:48", "1": "2017-10-02 04:08:48", "pm1": "27.9", "2": "27.9", "pm10": "52.3333", "3": "52.3333", "pm25": "43.2", "4": "43.2", "temp": "27.87", "5": "27.87", "humid": "70.33", "6": "70.33", "clientNum": "2", "7": "2" }, { "no": "43", "0": "43", "time": "2017-10-02 04:13:58", "1": "2017-10-02 04:13:58", "pm1": "32.4", "2": "32.4", "pm10": "65", "3": "65", "pm25": "50.6", "4": "50.6", "temp": "26.4", "5": "26.4", "humid": "76.81", "6": "76.81", "clientNum": "0", "7": "0" }, { "no": "44", "0": "44", "time": "2017-10-02 04:17:41", "1": "2017-10-02 04:17:41", "pm1": "29.3636", "2": "29.3636", "pm10": "58.2727", "3": "58.2727", "pm25": "46.5455", "4": "46.5455", "temp": "26.6091", "5": "26.6091", "humid": "71.6", "6": "71.6", "clientNum": "1", "7": "1" }, { "no": "45", "0": "45", "time": "2017-10-02 04:18:49", "1": "2017-10-02 04:18:49", "pm1": "27.2727", "2": "27.2727", "pm10": "50.8", "3": "50.8", "pm25": "42.2727", "4": "42.2727", "temp": "27.8091", "5": "27.8091", "humid": "70.4364", "6": "70.4364", "clientNum": "2", "7": "2" }, { "no": "46", "0": "46", "time": "2017-10-02 04:24:07", "1": "2017-10-02 04:24:07", "pm1": "32.8", "2": "32.8", "pm10": "66.8", "3": "66.8", "pm25": "51.4", "4": "51.4", "temp": "26.4", "5": "26.4", "humid": "76.92", "6": "76.92", "clientNum": "0", "7": "0" }, { "no": "47", "0": "47", "time": "2017-10-02 04:28:42", "1": "2017-10-02 04:28:42", "pm1": "29", "2": "29", "pm10": "57", "3": "57", "pm25": "45.7273", "4": "45.7273", "temp": "26.6818", "5": "26.6818", "humid": "71.3818", "6": "71.3818", "clientNum": "1", "7": "1" }, { "no": "48", "0": "48", "time": "2017-10-02 04:29:49", "1": "2017-10-02 04:29:49", "pm1": "26.9", "2": "26.9", "pm10": "49.3", "3": "49.3", "pm25": "41.1", "4": "41.1", "temp": "27.83", "5": "27.83", "humid": "70.35", "6": "70.35", "clientNum": "2", "7": "2" }, { "no": "49", "0": "49", "time": "2017-10-02 04:34:14", "1": "2017-10-02 04:34:14", "pm1": "33", "2": "33", "pm10": "66.4444", "3": "66.4444", "pm25": "51.6", "4": "51.6", "temp": "26.44", "5": "26.44", "humid": "76.56", "6": "76.56", "clientNum": "0", "7": "0" }, { "no": "50", "0": "50", "time": "2017-10-02 04:39:42", "1": "2017-10-02 04:39:42", "pm1": "28.4", "2": "28.4", "pm10": "56.3", "3": "56.3", "pm25": "45.1", "4": "45.1", "temp": "26.61", "5": "26.61", "humid": "70.06", "6": "70.06", "clientNum": "1", "7": "1" }, { "no": "51", "0": "51", "time": "2017-10-02 04:39:50", "1": "2017-10-02 04:39:50", "pm1": "26.3636", "2": "26.3636", "pm10": "48.5455", "3": "48.5455", "pm25": "40.0909", "4": "40.0909", "temp": "27.8818", "5": "27.8818", "humid": "70.2909", "6": "70.2909", "clientNum": "2", "7": "2" }, { "no": "52", "0": "52", "time": "2017-10-02 04:44:22", "1": "2017-10-02 04:44:22", "pm1": "32.2", "2": "32.2", "pm10": "65.7", "3": "65.7", "pm25": "50.1", "4": "50.1", "temp": "26.47", "5": "26.47", "humid": "76.49", "6": "76.49", "clientNum": "0", "7": "0" }, { "no": "53", "0": "53", "time": "2017-10-02 04:49:43", "1": "2017-10-02 04:49:43", "pm1": "27.7273", "2": "27.7273", "pm10": "54.5", "3": "54.5", "pm25": "43.5455", "4": "43.5455", "temp": "26.7364", "5": "26.7364", "humid": "71.7091", "6": "71.7091", "clientNum": "1", "7": "1" }, { "no": "54", "0": "54", "time": "2017-10-02 04:50:50", "1": "2017-10-02 04:50:50", "pm1": "26.1", "2": "26.1", "pm10": "48.8", "3": "48.8", "pm25": "40.6", "4": "40.6", "temp": "27.86", "5": "27.86", "humid": "70.31", "6": "70.31", "clientNum": "2", "7": "2" }, { "no": "55", "0": "55", "time": "2017-10-02 04:54:26", "1": "2017-10-02 04:54:26", "pm1": "31.3", "2": "31.3", "pm10": "62.4", "3": "62.4", "pm25": "48.5", "4": "48.5", "temp": "26.5", "5": "26.5", "humid": "76.19", "6": "76.19", "clientNum": "0", "7": "0" }, { "no": "56", "0": "56", "time": "2017-10-02 05:00:43", "1": "2017-10-02 05:00:43", "pm1": "27.3", "2": "27.3", "pm10": "54.6", "3": "54.6", "pm25": "44", "4": "44", "temp": "26.91", "5": "26.91", "humid": "71.78", "6": "71.78", "clientNum": "1", "7": "1" }, { "no": "57", "0": "57", "time": "2017-10-02 05:00:51", "1": "2017-10-02 05:00:51", "pm1": "26.9", "2": "26.9", "pm10": "49.5", "3": "49.5", "pm25": "41.1", "4": "41.1", "temp": "27.81", "5": "27.81", "humid": "70.44", "6": "70.44", "clientNum": "2", "7": "2" }, { "no": "58", "0": "58", "time": "2017-10-02 05:04:31", "1": "2017-10-02 05:04:31", "pm1": "30.3", "2": "30.3", "pm10": "61.4", "3": "61.4", "pm25": "47.3", "4": "47.3", "temp": "26.45", "5": "26.45", "humid": "76.3", "6": "76.3", "clientNum": "0", "7": "0" }, { "no": "59", "0": "59", "time": "2017-10-02 05:10:44", "1": "2017-10-02 05:10:44", "pm1": "26.9091", "2": "26.9091", "pm10": "52.8182", "3": "52.8182", "pm25": "42.3636", "4": "42.3636", "temp": "26.6545", "5": "26.6545", "humid": "69.4545", "6": "69.4545", "clientNum": "1", "7": "1" }, { "no": "60", "0": "60", "time": "2017-10-02 05:10:52", "1": "2017-10-02 05:10:52", "pm1": "27", "2": "27", "pm10": "50.2", "3": "50.2", "pm25": "41.9091", "4": "41.9091", "temp": "27.7", "5": "27.7", "humid": "70.8818", "6": "70.8818", "clientNum": "2", "7": "2" }, { "no": "61", "0": "61", "time": "2017-10-02 05:14:36", "1": "2017-10-02 05:14:36", "pm1": "30.9", "2": "30.9", "pm10": "61.6", "3": "61.6", "pm25": "47.5", "4": "47.5", "temp": "26.38", "5": "26.38", "humid": "76.38", "6": "76.38", "clientNum": "0", "7": "0" }, { "no": "62", "0": "62", "time": "2017-10-02 05:21:44", "1": "2017-10-02 05:21:44", "pm1": "27.1", "2": "27.1", "pm10": "52.9", "3": "52.9", "pm25": "42.7", "4": "42.7", "temp": "26.57", "5": "26.57", "humid": "69.45", "6": "69.45", "clientNum": "1", "7": "1" }, { "no": "63", "0": "63", "time": "2017-10-02 05:21:52", "1": "2017-10-02 05:21:52", "pm1": "26.7", "2": "26.7", "pm10": "49.3", "3": "49.3", "pm25": "41.2", "4": "41.2", "temp": "27.71", "5": "27.71", "humid": "70.94", "6": "70.94", "clientNum": "2", "7": "2" }, { "no": "64", "0": "64", "time": "2017-10-02 05:24:42", "1": "2017-10-02 05:24:42", "pm1": "31.4", "2": "31.4", "pm10": "62.3333", "3": "62.3333", "pm25": "48.4", "4": "48.4", "temp": "26.39", "5": "26.39", "humid": "75.8", "6": "75.8", "clientNum": "0", "7": "0" }, { "no": "65", "0": "65", "time": "2017-10-02 05:31:45", "1": "2017-10-02 05:31:45", "pm1": "26.4", "2": "26.4", "pm10": "52.6", "3": "52.6", "pm25": "42.5", "4": "42.5", "temp": "26.62", "5": "26.62", "humid": "70.27", "6": "70.27", "clientNum": "1", "7": "1" }, { "no": "66", "0": "66", "time": "2017-10-02 05:31:53", "1": "2017-10-02 05:31:53", "pm1": "27.2727", "2": "27.2727", "pm10": "50.7273", "3": "50.7273", "pm25": "42.2727", "4": "42.2727", "temp": "27.6818", "5": "27.6818", "humid": "70.9182", "6": "70.9182", "clientNum": "2", "7": "2" }, { "no": "67", "0": "67", "time": "2017-10-02 05:34:46", "1": "2017-10-02 05:34:46", "pm1": "31.6", "2": "31.6", "pm10": "62.4444", "3": "62.4444", "pm25": "48.6", "4": "48.6", "temp": "26.41", "5": "26.41", "humid": "75.55", "6": "75.55", "clientNum": "0", "7": "0" }, { "no": "68", "0": "68", "time": "2017-10-02 05:41:46", "1": "2017-10-02 05:41:46", "pm1": "27.8182", "2": "27.8182", "pm10": "54.8182", "3": "54.8182", "pm25": "43.9091", "4": "43.9091", "temp": "26.7273", "5": "26.7273", "humid": "72.1091", "6": "72.1091", "clientNum": "1", "7": "1" }, { "no": "69", "0": "69", "time": "2017-10-02 05:42:53", "1": "2017-10-02 05:42:53", "pm1": "27.3", "2": "27.3", "pm10": "50.7", "3": "50.7", "pm25": "42.2", "4": "42.2", "temp": "27.61", "5": "27.61", "humid": "71.19", "6": "71.19", "clientNum": "2", "7": "2" }, { "no": "70", "0": "70", "time": "2017-10-02 05:44:55", "1": "2017-10-02 05:44:55", "pm1": "31.1", "2": "31.1", "pm10": "60.9", "3": "60.9", "pm25": "47.4", "4": "47.4", "temp": "26.41", "5": "26.41", "humid": "75.66", "6": "75.66", "clientNum": "0", "7": "0" }, { "no": "71", "0": "71", "time": "2017-10-02 05:52:46", "1": "2017-10-02 05:52:46", "pm1": "27.1", "2": "27.1", "pm10": "51.6", "3": "51.6", "pm25": "42.1", "4": "42.1", "temp": "26.82", "5": "26.82", "humid": "69.96", "6": "69.96", "clientNum": "1", "7": "1" }, { "no": "72", "0": "72", "time": "2017-10-02 05:52:54", "1": "2017-10-02 05:52:54", "pm1": "27.4", "2": "27.4", "pm10": "52.1", "3": "52.1", "pm25": "42.8", "4": "42.8", "temp": "27.69", "5": "27.69", "humid": "71.07", "6": "71.07", "clientNum": "2", "7": "2" }, { "no": "73", "0": "73", "time": "2017-10-02 05:54:59", "1": "2017-10-02 05:54:59", "pm1": "30.8", "2": "30.8", "pm10": "62.2", "3": "62.2", "pm25": "47.8", "4": "47.8", "temp": "26.31", "5": "26.31", "humid": "76.04", "6": "76.04", "clientNum": "0", "7": "0" }, { "no": "74", "0": "74", "time": "2017-10-02 06:02:47", "1": "2017-10-02 06:02:47", "pm1": "27.8182", "2": "27.8182", "pm10": "55", "3": "55", "pm25": "44.0909", "4": "44.0909", "temp": "26.6636", "5": "26.6636", "humid": "70.9455", "6": "70.9455", "clientNum": "1", "7": "1" }, { "no": "75", "0": "75", "time": "2017-10-02 06:02:55", "1": "2017-10-02 06:02:55", "pm1": "28", "2": "28", "pm10": "52.0909", "3": "52.0909", "pm25": "43.4545", "4": "43.4545", "temp": "27.6909", "5": "27.6909", "humid": "71.0455", "6": "71.0455", "clientNum": "2", "7": "2" }, { "no": "76", "0": "76", "time": "2017-10-02 06:05:05", "1": "2017-10-02 06:05:05", "pm1": "30.1", "2": "30.1", "pm10": "60.7", "3": "60.7", "pm25": "47.3", "4": "47.3", "temp": "26.38", "5": "26.38", "humid": "75.86", "6": "75.86", "clientNum": "0", "7": "0" }, { "no": "77", "0": "77", "time": "2017-10-02 06:13:47", "1": "2017-10-02 06:13:47", "pm1": "27.1", "2": "27.1", "pm10": "53.3333", "3": "53.3333", "pm25": "43.5", "4": "43.5", "temp": "26.62", "5": "26.62", "humid": "70.54", "6": "70.54", "clientNum": "1", "7": "1" }, { "no": "78", "0": "78", "time": "2017-10-02 06:13:55", "1": "2017-10-02 06:13:55", "pm1": "27.6", "2": "27.6", "pm10": "51.875", "3": "51.875", "pm25": "43.1", "4": "43.1", "temp": "27.72", "5": "27.72", "humid": "70.71", "6": "70.71", "clientNum": "2", "7": "2" }, { "no": "79", "0": "79", "time": "2017-10-02 06:15:11", "1": "2017-10-02 06:15:11", "pm1": "30.1", "2": "30.1", "pm10": "60.6667", "3": "60.6667", "pm25": "46.6", "4": "46.6", "temp": "26.4", "5": "26.4", "humid": "75.71", "6": "75.71", "clientNum": "0", "7": "0" }, { "no": "80", "0": "80", "time": "2017-10-02 06:23:48", "1": "2017-10-02 06:23:48", "pm1": "27.0909", "2": "27.0909", "pm10": "53.5455", "3": "53.5455", "pm25": "42.9091", "4": "42.9091", "temp": "26.4636", "5": "26.4636", "humid": "70.8091", "6": "70.8091", "clientNum": "1", "7": "1" }, { "no": "81", "0": "81", "time": "2017-10-02 06:23:56", "1": "2017-10-02 06:23:56", "pm1": "27.7273", "2": "27.7273", "pm10": "51.0909", "3": "51.0909", "pm25": "42.5455", "4": "42.5455", "temp": "27.8273", "5": "27.8273", "humid": "70.1545", "6": "70.1545", "clientNum": "2", "7": "2" }, { "no": "82", "0": "82", "time": "2017-10-02 06:25:19", "1": "2017-10-02 06:25:19", "pm1": "31.1", "2": "31.1", "pm10": "61.9", "3": "61.9", "pm25": "48", "4": "48", "temp": "26.42", "5": "26.42", "humid": "75.59", "6": "75.59", "clientNum": "0", "7": "0" }, { "no": "83", "0": "83", "time": "2017-10-02 06:34:48", "1": "2017-10-02 06:34:48", "pm1": "27.8", "2": "27.8", "pm10": "54.4", "3": "54.4", "pm25": "44.4", "4": "44.4", "temp": "26.63", "5": "26.63", "humid": "71.6", "6": "71.6", "clientNum": "1", "7": "1" }, { "no": "84", "0": "84", "time": "2017-10-02 06:34:56", "1": "2017-10-02 06:34:56", "pm1": "27.9", "2": "27.9", "pm10": "50.9", "3": "50.9", "pm25": "42.5", "4": "42.5", "temp": "27.89", "5": "27.89", "humid": "69.53", "6": "69.53", "clientNum": "2", "7": "2" }, { "no": "85", "0": "85", "time": "2017-10-02 06:35:25", "1": "2017-10-02 06:35:25", "pm1": "31.4", "2": "31.4", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.4", "5": "26.4", "humid": "75.72", "6": "75.72", "clientNum": "0", "7": "0" }, { "no": "86", "0": "86", "time": "2017-10-02 06:44:49", "1": "2017-10-02 06:44:49", "pm1": "27.6", "2": "27.6", "pm10": "54.1", "3": "54.1", "pm25": "43.7", "4": "43.7", "temp": "26.66", "5": "26.66", "humid": "71.36", "6": "71.36", "clientNum": "1", "7": "1" }, { "no": "87", "0": "87", "time": "2017-10-02 06:44:57", "1": "2017-10-02 06:44:57", "pm1": "27.7", "2": "27.7", "pm10": "50.7778", "3": "50.7778", "pm25": "42.2", "4": "42.2", "temp": "27.97", "5": "27.97", "humid": "68.83", "6": "68.83", "clientNum": "2", "7": "2" }, { "no": "88", "0": "88", "time": "2017-10-02 06:45:33", "1": "2017-10-02 06:45:33", "pm1": "31.5", "2": "31.5", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.36", "5": "26.36", "humid": "76.06", "6": "76.06", "clientNum": "0", "7": "0" }, { "no": "89", "0": "89", "time": "2017-10-02 06:54:50", "1": "2017-10-02 06:54:50", "pm1": "26.8182", "2": "26.8182", "pm10": "52.1818", "3": "52.1818", "pm25": "42.4545", "4": "42.4545", "temp": "26.8545", "5": "26.8545", "humid": "71.2455", "6": "71.2455", "clientNum": "1", "7": "1" }, { "no": "90", "0": "90", "time": "2017-10-02 06:54:58", "1": "2017-10-02 06:54:58", "pm1": "27.2727", "2": "27.2727", "pm10": "49.6364", "3": "49.6364", "pm25": "41.4545", "4": "41.4545", "temp": "28.1182", "5": "28.1182", "humid": "68.6091", "6": "68.6091", "clientNum": "2", "7": "2" }, { "no": "91", "0": "91", "time": "2017-10-02 06:55:36", "1": "2017-10-02 06:55:36", "pm1": "31.3", "2": "31.3", "pm10": "63.7", "3": "63.7", "pm25": "49", "4": "49", "temp": "26.37", "5": "26.37", "humid": "76.03", "6": "76.03", "clientNum": "0", "7": "0" }, { "no": "92", "0": "92", "time": "2017-10-02 07:05:45", "1": "2017-10-02 07:05:45", "pm1": "45.6", "2": "45.6", "pm10": "92.4", "3": "92.4", "pm25": "75.2", "4": "75.2", "temp": "26.43", "5": "26.43", "humid": "75.64", "6": "75.64", "clientNum": "0", "7": "0" }, { "no": "93", "0": "93", "time": "2017-10-02 07:05:50", "1": "2017-10-02 07:05:50", "pm1": "26.8", "2": "26.8", "pm10": "52.7", "3": "52.7", "pm25": "42.5", "4": "42.5", "temp": "27.14", "5": "27.14", "humid": "70.83", "6": "70.83", "clientNum": "1", "7": "1" }, { "no": "94", "0": "94", "time": "2017-10-02 07:05:58", "1": "2017-10-02 07:05:58", "pm1": "27", "2": "27", "pm10": "50", "3": "50", "pm25": "41", "4": "41", "temp": "28.21", "5": "28.21", "humid": "68.17", "6": "68.17", "clientNum": "2", "7": "2" }, { "no": "95", "0": "95", "time": "2017-10-02 07:15:51", "1": "2017-10-02 07:15:51", "pm1": "29.3", "2": "29.3", "pm10": "61.2", "3": "61.2", "pm25": "47.6", "4": "47.6", "temp": "27.3", "5": "27.3", "humid": "70.18", "6": "70.18", "clientNum": "1", "7": "1" }, { "no": "96", "0": "96", "time": "2017-10-02 07:15:48", "1": "2017-10-02 07:15:48", "pm1": "37", "2": "37", "pm10": "77.5", "3": "77.5", "pm25": "60.7", "4": "60.7", "temp": "26.54", "5": "26.54", "humid": "75.07", "6": "75.07", "clientNum": "0", "7": "0" }, { "no": "97", "0": "97", "time": "2017-10-02 07:15:59", "1": "2017-10-02 07:15:59", "pm1": "26.5455", "2": "26.5455", "pm10": "49", "3": "49", "pm25": "41.1818", "4": "41.1818", "temp": "28.2364", "5": "28.2364", "humid": "68.2364", "6": "68.2364", "clientNum": "2", "7": "2" }, { "no": "98", "0": "98", "time": "2017-10-02 07:25:52", "1": "2017-10-02 07:25:52", "pm1": "27.2", "2": "27.2", "pm10": "53.8", "3": "53.8", "pm25": "43.5", "4": "43.5", "temp": "27.45", "5": "27.45", "humid": "69.06", "6": "69.06", "clientNum": "1", "7": "1" }, { "no": "99", "0": "99", "time": "2017-10-02 07:25:53", "1": "2017-10-02 07:25:53", "pm1": "32.3", "2": "32.3", "pm10": "68.1111", "3": "68.1111", "pm25": "50.9", "4": "50.9", "temp": "26.61", "5": "26.61", "humid": "74.48", "6": "74.48", "clientNum": "0", "7": "0" }, { "no": "100", "0": "100", "time": "2017-10-02 07:26:59", "1": "2017-10-02 07:26:59", "pm1": "27", "2": "27", "pm10": "49.2", "3": "49.2", "pm25": "41.3", "4": "41.3", "temp": "28.43", "5": "28.43", "humid": "67.55", "6": "67.55", "clientNum": "2", "7": "2" }, { "no": "101", "0": "101", "time": "2017-10-02 07:35:53", "1": "2017-10-02 07:35:53", "pm1": "26.5455", "2": "26.5455", "pm10": "50.8182", "3": "50.8182", "pm25": "41.3636", "4": "41.3636", "temp": "27.7909", "5": "27.7909", "humid": "68.4909", "6": "68.4909", "clientNum": "1", "7": "1" }, { "no": "102", "0": "102", "time": "2017-10-02 07:35:59", "1": "2017-10-02 07:35:59", "pm1": "31.9", "2": "31.9", "pm10": "65", "3": "65", "pm25": "50.4", "4": "50.4", "temp": "26.54", "5": "26.54", "humid": "74.24", "6": "74.24", "clientNum": "0", "7": "0" }, { "no": "103", "0": "103", "time": "2017-10-02 07:37:00", "1": "2017-10-02 07:37:00", "pm1": "28.2", "2": "28.2", "pm10": "52.4444", "3": "52.4444", "pm25": "43.3", "4": "43.3", "temp": "28.55", "5": "28.55", "humid": "67.07", "6": "67.07", "clientNum": "2", "7": "2" }, { "no": "104", "0": "104", "time": "2017-10-02 07:46:05", "1": "2017-10-02 07:46:05", "pm1": "32.2", "2": "32.2", "pm10": "66", "3": "66", "pm25": "51.2", "4": "51.2", "temp": "26.68", "5": "26.68", "humid": "73.64", "6": "73.64", "clientNum": "0", "7": "0" }, { "no": "105", "0": "105", "time": "2017-10-02 07:46:53", "1": "2017-10-02 07:46:53", "pm1": "27", "2": "27", "pm10": "52.6", "3": "52.6", "pm25": "42.7", "4": "42.7", "temp": "27.98", "5": "27.98", "humid": "67.86", "6": "67.86", "clientNum": "1", "7": "1" }, { "no": "106", "0": "106", "time": "2017-10-02 07:47:01", "1": "2017-10-02 07:47:01", "pm1": "27.6364", "2": "27.6364", "pm10": "52.5", "3": "52.5", "pm25": "43.1818", "4": "43.1818", "temp": "28.5909", "5": "28.5909", "humid": "66.7727", "6": "66.7727", "clientNum": "2", "7": "2" }, { "no": "107", "0": "107", "time": "2017-10-02 07:56:09", "1": "2017-10-02 07:56:09", "pm1": "31.2", "2": "31.2", "pm10": "65.3", "3": "65.3", "pm25": "49.7", "4": "49.7", "temp": "26.7", "5": "26.7", "humid": "73.06", "6": "73.06", "clientNum": "0", "7": "0" }, { "no": "108", "0": "108", "time": "2017-10-02 07:56:54", "1": "2017-10-02 07:56:54", "pm1": "26.2727", "2": "26.2727", "pm10": "49.9091", "3": "49.9091", "pm25": "41.0909", "4": "41.0909", "temp": "28.2636", "5": "28.2636", "humid": "66.0636", "6": "66.0636", "clientNum": "1", "7": "1" }, { "no": "109", "0": "109", "time": "2017-10-02 07:58:01", "1": "2017-10-02 07:58:01", "pm1": "28", "2": "28", "pm10": "52.3", "3": "52.3", "pm25": "43.3", "4": "43.3", "temp": "28.46", "5": "28.46", "humid": "66.91", "6": "66.91", "clientNum": "2", "7": "2" }, { "no": "110", "0": "110", "time": "2017-10-02 08:06:14", "1": "2017-10-02 08:06:14", "pm1": "29.4", "2": "29.4", "pm10": "59.2222", "3": "59.2222", "pm25": "46.4", "4": "46.4", "temp": "26.7", "5": "26.7", "humid": "71.7", "6": "71.7", "clientNum": "0", "7": "0" }, { "no": "111", "0": "111", "time": "2017-10-02 08:07:54", "1": "2017-10-02 08:07:54", "pm1": "25.9", "2": "25.9", "pm10": "50.3", "3": "50.3", "pm25": "41.7", "4": "41.7", "temp": "28.68", "5": "28.68", "humid": "63.92", "6": "63.92", "clientNum": "1", "7": "1" }, { "no": "112", "0": "112", "time": "2017-10-02 08:08:02", "1": "2017-10-02 08:08:02", "pm1": "27.3636", "2": "27.3636", "pm10": "52.2727", "3": "52.2727", "pm25": "43", "4": "43", "temp": "28.3545", "5": "28.3545", "humid": "66.3909", "6": "66.3909", "clientNum": "2", "7": "2" }, { "no": "113", "0": "113", "time": "2017-10-02 08:16:20", "1": "2017-10-02 08:16:20", "pm1": "27", "2": "27", "pm10": "53.9", "3": "53.9", "pm25": "42.4", "4": "42.4", "temp": "26.78", "5": "26.78", "humid": "69.58", "6": "69.58", "clientNum": "0", "7": "0" }, { "no": "114", "0": "114", "time": "2017-10-02 08:17:55", "1": "2017-10-02 08:17:55", "pm1": "26.4", "2": "26.4", "pm10": "50.2", "3": "50.2", "pm25": "41.1", "4": "41.1", "temp": "28.99", "5": "28.99", "humid": "62.36", "6": "62.36", "clientNum": "1", "7": "1" }, { "no": "115", "0": "115", "time": "2017-10-02 08:19:02", "1": "2017-10-02 08:19:02", "pm1": "27.3", "2": "27.3", "pm10": "50", "3": "50", "pm25": "41.8", "4": "41.8", "temp": "28.45", "5": "28.45", "humid": "66.17", "6": "66.17", "clientNum": "2", "7": "2" }, { "no": "116", "0": "116", "time": "2017-10-02 08:26:28", "1": "2017-10-02 08:26:28", "pm1": "26.4", "2": "26.4", "pm10": "52.8", "3": "52.8", "pm25": "41.7", "4": "41.7", "temp": "26.89", "5": "26.89", "humid": "68.37", "6": "68.37", "clientNum": "0", "7": "0" }, { "no": "117", "0": "117", "time": "2017-10-02 08:27:56", "1": "2017-10-02 08:27:56", "pm1": "26.1818", "2": "26.1818", "pm10": "50.0909", "3": "50.0909", "pm25": "41.0909", "4": "41.0909", "temp": "28.9", "5": "28.9", "humid": "61.9818", "6": "61.9818", "clientNum": "1", "7": "1" }, { "no": "118", "0": "118", "time": "2017-10-02 08:29:03", "1": "2017-10-02 08:29:03", "pm1": "26.6", "2": "26.6", "pm10": "49.2", "3": "49.2", "pm25": "41.2", "4": "41.2", "temp": "28.86", "5": "28.86", "humid": "64.76", "6": "64.76", "clientNum": "2", "7": "2" }, { "no": "119", "0": "119", "time": "2017-10-02 08:36:33", "1": "2017-10-02 08:36:33", "pm1": "27.5", "2": "27.5", "pm10": "54.4", "3": "54.4", "pm25": "43.3", "4": "43.3", "temp": "27.01", "5": "27.01", "humid": "68.36", "6": "68.36", "clientNum": "0", "7": "0" }, { "no": "120", "0": "120", "time": "2017-10-02 08:38:56", "1": "2017-10-02 08:38:56", "pm1": "22.4", "2": "22.4", "pm10": "40.9", "3": "40.9", "pm25": "35.2", "4": "35.2", "temp": "28.77", "5": "28.77", "humid": "56.67", "6": "56.67", "clientNum": "1", "7": "1" }, { "no": "121", "0": "121", "time": "2017-10-02 08:39:04", "1": "2017-10-02 08:39:04", "pm1": "25.5455", "2": "25.5455", "pm10": "47.9091", "3": "47.9091", "pm25": "39.7273", "4": "39.7273", "temp": "29.2273", "5": "29.2273", "humid": "62.7727", "6": "62.7727", "clientNum": "2", "7": "2" }, { "no": "122", "0": "122", "time": "2017-10-02 08:46:36", "1": "2017-10-02 08:46:36", "pm1": "31.3", "2": "31.3", "pm10": "63.8", "3": "63.8", "pm25": "49", "4": "49", "temp": "27.1", "5": "27.1", "humid": "69.73", "6": "69.73", "clientNum": "0", "7": "0" }, { "no": "123", "0": "123", "time": "2017-10-02 08:48:57", "1": "2017-10-02 08:48:57", "pm1": "21", "2": "21", "pm10": "36.4545", "3": "36.4545", "pm25": "32.3636", "4": "32.3636", "temp": "28.1273", "5": "28.1273", "humid": "53.0364", "6": "53.0364", "clientNum": "1", "7": "1" }, { "no": "124", "0": "124", "time": "2017-10-02 08:50:04", "1": "2017-10-02 08:50:04", "pm1": "24.2", "2": "24.2", "pm10": "45.5", "3": "45.5", "pm25": "38.6", "4": "38.6", "temp": "29.21", "5": "29.21", "humid": "60.05", "6": "60.05", "clientNum": "2", "7": "2" }, { "no": "125", "0": "125", "time": "2017-10-02 08:56:44", "1": "2017-10-02 08:56:44", "pm1": "30.7", "2": "30.7", "pm10": "63.3", "3": "63.3", "pm25": "48.1", "4": "48.1", "temp": "27.1", "5": "27.1", "humid": "69.27", "6": "69.27", "clientNum": "0", "7": "0" }, { "no": "126", "0": "126", "time": "2017-10-02 08:59:57", "1": "2017-10-02 08:59:57", "pm1": "20.5", "2": "20.5", "pm10": "34.1", "3": "34.1", "pm25": "30.7", "4": "30.7", "temp": "27.67", "5": "27.67", "humid": "49.86", "6": "49.86", "clientNum": "1", "7": "1" }, { "no": "127", "0": "127", "time": "2017-10-02 09:00:05", "1": "2017-10-02 09:00:05", "pm1": "24.4545", "2": "24.4545", "pm10": "45.1818", "3": "45.1818", "pm25": "38", "4": "38", "temp": "29.2909", "5": "29.2909", "humid": "59.9091", "6": "59.9091", "clientNum": "2", "7": "2" }, { "no": "128", "0": "128", "time": "2017-10-02 09:06:49", "1": "2017-10-02 09:06:49", "pm1": "31.3", "2": "31.3", "pm10": "64.2", "3": "64.2", "pm25": "49.3", "4": "49.3", "temp": "27.13", "5": "27.13", "humid": "69.69", "6": "69.69", "clientNum": "0", "7": "0" }, { "no": "129", "0": "129", "time": "2017-10-02 09:09:58", "1": "2017-10-02 09:09:58", "pm1": "21", "2": "21", "pm10": "37.5", "3": "37.5", "pm25": "32.3", "4": "32.3", "temp": "27.4", "5": "27.4", "humid": "51.35", "6": "51.35", "clientNum": "1", "7": "1" }, { "no": "130", "0": "130", "time": "2017-10-02 09:11:06", "1": "2017-10-02 09:11:06", "pm1": "25.3636", "2": "25.3636", "pm10": "46.8182", "3": "46.8182", "pm25": "39.5455", "4": "39.5455", "temp": "29.7727", "5": "29.7727", "humid": "58.5818", "6": "58.5818", "clientNum": "2", "7": "2" }, { "no": "131", "0": "131", "time": "2017-10-02 09:16:51", "1": "2017-10-02 09:16:51", "pm1": "32.4", "2": "32.4", "pm10": "66.7", "3": "66.7", "pm25": "51", "4": "51", "temp": "27.27", "5": "27.27", "humid": "70.21", "6": "70.21", "clientNum": "0", "7": "0" }, { "no": "132", "0": "132", "time": "2017-10-02 09:20:00", "1": "2017-10-02 09:20:00", "pm1": "20.8182", "2": "20.8182", "pm10": "35.8182", "3": "35.8182", "pm25": "31.7273", "4": "31.7273", "temp": "27.5909", "5": "27.5909", "humid": "50.1909", "6": "50.1909", "clientNum": "1", "7": "1" }, { "no": "133", "0": "133", "time": "2017-10-02 09:22:06", "1": "2017-10-02 09:22:06", "pm1": "25.6", "2": "25.6", "pm10": "47", "3": "47", "pm25": "39.4", "4": "39.4", "temp": "30.15", "5": "30.15", "humid": "57.86", "6": "57.86", "clientNum": "2", "7": "2" }, { "no": "134", "0": "134", "time": "2017-10-02 09:26:53", "1": "2017-10-02 09:26:53", "pm1": "31.8", "2": "31.8", "pm10": "66.6", "3": "66.6", "pm25": "50.8", "4": "50.8", "temp": "27.35", "5": "27.35", "humid": "69.46", "6": "69.46", "clientNum": "0", "7": "0" }, { "no": "135", "0": "135", "time": "2017-10-02 09:31:00", "1": "2017-10-02 09:31:00", "pm1": "22.9", "2": "22.9", "pm10": "40.6", "3": "40.6", "pm25": "35.1", "4": "35.1", "temp": "27.55", "5": "27.55", "humid": "51.72", "6": "51.72", "clientNum": "1", "7": "1" }, { "no": "136", "0": "136", "time": "2017-10-02 09:32:07", "1": "2017-10-02 09:32:07", "pm1": "27.2", "2": "27.2", "pm10": "51.6", "3": "51.6", "pm25": "42.6", "4": "42.6", "temp": "29.8", "5": "29.8", "humid": "58.65", "6": "58.65", "clientNum": "2", "7": "2" }, { "no": "137", "0": "137", "time": "2017-10-02 09:37:01", "1": "2017-10-02 09:37:01", "pm1": "32.5", "2": "32.5", "pm10": "66.1", "3": "66.1", "pm25": "50.5", "4": "50.5", "temp": "27.39", "5": "27.39", "humid": "68.61", "6": "68.61", "clientNum": "0", "7": "0" }, { "no": "138", "0": "138", "time": "2017-10-02 09:41:01", "1": "2017-10-02 09:41:01", "pm1": "21.7273", "2": "21.7273", "pm10": "38.7", "3": "38.7", "pm25": "34.2727", "4": "34.2727", "temp": "27.6182", "5": "27.6182", "humid": "51.0182", "6": "51.0182", "clientNum": "1", "7": "1" }, { "no": "139", "0": "139", "time": "2017-10-02 09:42:10", "1": "2017-10-02 09:42:10", "pm1": "26.4", "2": "26.4", "pm10": "49.8", "3": "49.8", "pm25": "41.3", "4": "41.3", "temp": "29.6", "5": "29.6", "humid": "59.55", "6": "59.55", "clientNum": "2", "7": "2" }, { "no": "140", "0": "140", "time": "2017-10-02 09:47:08", "1": "2017-10-02 09:47:08", "pm1": "32.5", "2": "32.5", "pm10": "66.1111", "3": "66.1111", "pm25": "51.5", "4": "51.5", "temp": "27.48", "5": "27.48", "humid": "68.32", "6": "68.32", "clientNum": "0", "7": "0" }, { "no": "141", "0": "141", "time": "2017-10-02 09:52:01", "1": "2017-10-02 09:52:01", "pm1": "21.6", "2": "21.6", "pm10": "38.2", "3": "38.2", "pm25": "33.6", "4": "33.6", "temp": "27.65", "5": "27.65", "humid": "50.38", "6": "50.38", "clientNum": "1", "7": "1" }, { "no": "142", "0": "142", "time": "2017-10-02 09:52:11", "1": "2017-10-02 09:52:11", "pm1": "28", "2": "28", "pm10": "52.7273", "3": "52.7273", "pm25": "43.4545", "4": "43.4545", "temp": "29.6091", "5": "29.6091", "humid": "59.6909", "6": "59.6909", "clientNum": "2", "7": "2" }, { "no": "143", "0": "143", "time": "2017-10-02 09:57:12", "1": "2017-10-02 09:57:12", "pm1": "31.9", "2": "31.9", "pm10": "65.2222", "3": "65.2222", "pm25": "49.8", "4": "49.8", "temp": "27.51", "5": "27.51", "humid": "68.32", "6": "68.32", "clientNum": "0", "7": "0" }, { "no": "144", "0": "144", "time": "2017-10-02 10:02:02", "1": "2017-10-02 10:02:02", "pm1": "23.3636", "2": "23.3636", "pm10": "43.7273", "3": "43.7273", "pm25": "37", "4": "37", "temp": "27.6727", "5": "27.6727", "humid": "52.3909", "6": "52.3909", "clientNum": "1", "7": "1" }, { "no": "145", "0": "145", "time": "2017-10-02 10:03:11", "1": "2017-10-02 10:03:11", "pm1": "29.7", "2": "29.7", "pm10": "56.5", "3": "56.5", "pm25": "46.3", "4": "46.3", "temp": "29.57", "5": "29.57", "humid": "59.97", "6": "59.97", "clientNum": "2", "7": "2" }, { "no": "146", "0": "146", "time": "2017-10-02 10:07:20", "1": "2017-10-02 10:07:20", "pm1": "32.4", "2": "32.4", "pm10": "66.3", "3": "66.3", "pm25": "51.1", "4": "51.1", "temp": "27.62", "5": "27.62", "humid": "67.39", "6": "67.39", "clientNum": "0", "7": "0" }, { "no": "147", "0": "147", "time": "2017-10-02 10:13:12", "1": "2017-10-02 10:13:12", "pm1": "29.4", "2": "29.4", "pm10": "56.1111", "3": "56.1111", "pm25": "46.2", "4": "46.2", "temp": "29.48", "5": "29.48", "humid": "60.16", "6": "60.16", "clientNum": "2", "7": "2" }, { "no": "148", "0": "148", "time": "2017-10-02 10:13:02", "1": "2017-10-02 10:13:02", "pm1": "22.1111", "2": "22.1111", "pm10": "38.8889", "3": "38.8889", "pm25": "34.2222", "4": "34.2222", "temp": "27.8667", "5": "27.8667", "humid": "49.6111", "6": "49.6111", "clientNum": "1", "7": "1" }, { "no": "149", "0": "149", "time": "2017-10-02 10:17:23", "1": "2017-10-02 10:17:23", "pm1": "33.5", "2": "33.5", "pm10": "68.5", "3": "68.5", "pm25": "52.9", "4": "52.9", "temp": "27.75", "5": "27.75", "humid": "66.59", "6": "66.59", "clientNum": "0", "7": "0" }, { "no": "150", "0": "150", "time": "2017-10-02 10:23:13", "1": "2017-10-02 10:23:13", "pm1": "30", "2": "30", "pm10": "57.0909", "3": "57.0909", "pm25": "46.9091", "4": "46.9091", "temp": "29.9545", "5": "29.9545", "humid": "58.2091", "6": "58.2091", "clientNum": "2", "7": "2" }, { "no": "151", "0": "151", "time": "2017-10-02 10:23:33", "1": "2017-10-02 10:23:33", "pm1": "23.2", "2": "23.2", "pm10": "44.1111", "3": "44.1111", "pm25": "36.5", "4": "36.5", "temp": "27.92", "5": "27.92", "humid": "49.95", "6": "49.95", "clientNum": "1", "7": "1" }, { "no": "152", "0": "152", "time": "2017-10-02 10:27:26", "1": "2017-10-02 10:27:26", "pm1": "41.1", "2": "41.1", "pm10": "81.8", "3": "81.8", "pm25": "67.5", "4": "67.5", "temp": "27.87", "5": "27.87", "humid": "67.18", "6": "67.18", "clientNum": "0", "7": "0" }, { "no": "153", "0": "153", "time": "2017-10-02 10:33:34", "1": "2017-10-02 10:33:34", "pm1": "25.5455", "2": "25.5455", "pm10": "50.1", "3": "50.1", "pm25": "40.4545", "4": "40.4545", "temp": "27.7909", "5": "27.7909", "humid": "50.4455", "6": "50.4455", "clientNum": "1", "7": "1" }, { "no": "154", "0": "154", "time": "2017-10-02 10:34:13", "1": "2017-10-02 10:34:13", "pm1": "30.9", "2": "30.9", "pm10": "60.2", "3": "60.2", "pm25": "48.9", "4": "48.9", "temp": "29.74", "5": "29.74", "humid": "58.51", "6": "58.51", "clientNum": "2", "7": "2" }, { "no": "155", "0": "155", "time": "2017-10-02 10:37:28", "1": "2017-10-02 10:37:28", "pm1": "39.5", "2": "39.5", "pm10": "78.1", "3": "78.1", "pm25": "65", "4": "65", "temp": "27.97", "5": "27.97", "humid": "66.51", "6": "66.51", "clientNum": "0", "7": "0" }, { "no": "156", "0": "156", "time": "2017-10-02 10:44:15", "1": "2017-10-02 10:44:15", "pm1": "31", "2": "31", "pm10": "60", "3": "60", "pm25": "48.7", "4": "48.7", "temp": "30.19", "5": "30.19", "humid": "57.21", "6": "57.21", "clientNum": "2", "7": "2" }, { "no": "157", "0": "157", "time": "2017-10-02 10:44:35", "1": "2017-10-02 10:44:35", "pm1": "23.8182", "2": "23.8182", "pm10": "44.9091", "3": "44.9091", "pm25": "37.9091", "4": "37.9091", "temp": "27.7727", "5": "27.7727", "humid": "46.5818", "6": "46.5818", "clientNum": "1", "7": "1" }, { "no": "158", "0": "158", "time": "2017-10-02 10:47:38", "1": "2017-10-02 10:47:38", "pm1": "40.6", "2": "40.6", "pm10": "80.5", "3": "80.5", "pm25": "66.9", "4": "66.9", "temp": "28.17", "5": "28.17", "humid": "65.64", "6": "65.64", "clientNum": "0", "7": "0" }, { "no": "159", "0": "159", "time": "2017-10-02 10:54:19", "1": "2017-10-02 10:54:19", "pm1": "33", "2": "33", "pm10": "64.2", "3": "64.2", "pm25": "51.5", "4": "51.5", "temp": "30.05", "5": "30.05", "humid": "57.26", "6": "57.26", "clientNum": "2", "7": "2" }, { "no": "160", "0": "160", "time": "2017-10-02 10:55:35", "1": "2017-10-02 10:55:35", "pm1": "24.8", "2": "24.8", "pm10": "48.2222", "3": "48.2222", "pm25": "40", "4": "40", "temp": "27.68", "5": "27.68", "humid": "47.68", "6": "47.68", "clientNum": "1", "7": "1" }, { "no": "161", "0": "161", "time": "2017-10-02 10:57:46", "1": "2017-10-02 10:57:46", "pm1": "44.3", "2": "44.3", "pm10": "88.6", "3": "88.6", "pm25": "73.2", "4": "73.2", "temp": "28.21", "5": "28.21", "humid": "66.54", "6": "66.54", "clientNum": "0", "7": "0" }, { "no": "162", "0": "162", "time": "2017-10-02 11:04:20", "1": "2017-10-02 11:04:20", "pm1": "34.3", "2": "34.3", "pm10": "66.6", "3": "66.6", "pm25": "54.9", "4": "54.9", "temp": "30.35", "5": "30.35", "humid": "57.69", "6": "57.69", "clientNum": "2", "7": "2" }, { "no": "163", "0": "163", "time": "2017-10-02 11:05:36", "1": "2017-10-02 11:05:36", "pm1": "26.5455", "2": "26.5455", "pm10": "52", "3": "52", "pm25": "42.7273", "4": "42.7273", "temp": "27.8455", "5": "27.8455", "humid": "47.7273", "6": "47.7273", "clientNum": "1", "7": "1" }, { "no": "164", "0": "164", "time": "2017-10-02 11:07:49", "1": "2017-10-02 11:07:49", "pm1": "46.4", "2": "46.4", "pm10": "89.1", "3": "89.1", "pm25": "76.1", "4": "76.1", "temp": "28.23", "5": "28.23", "humid": "66.79", "6": "66.79", "clientNum": "0", "7": "0" }, { "no": "165", "0": "165", "time": "2017-10-02 11:14:21", "1": "2017-10-02 11:14:21", "pm1": "33.5455", "2": "33.5455", "pm10": "65.3", "3": "65.3", "pm25": "53", "4": "53", "temp": "30.4364", "5": "30.4364", "humid": "57.1", "6": "57.1", "clientNum": "2", "7": "2" }, { "no": "166", "0": "166", "time": "2017-10-02 11:16:36", "1": "2017-10-02 11:16:36", "pm1": "25.4", "2": "25.4", "pm10": "47.5", "3": "47.5", "pm25": "39.3", "4": "39.3", "temp": "27.77", "5": "27.77", "humid": "47.46", "6": "47.46", "clientNum": "1", "7": "1" }, { "no": "167", "0": "167", "time": "2017-10-02 11:17:54", "1": "2017-10-02 11:17:54", "pm1": "44", "2": "44", "pm10": "84", "3": "84", "pm25": "71.5", "4": "71.5", "temp": "28.46", "5": "28.46", "humid": "66.71", "6": "66.71", "clientNum": "0", "7": "0" }, { "no": "168", "0": "168", "time": "2017-10-02 11:25:21", "1": "2017-10-02 11:25:21", "pm1": "34.1", "2": "34.1", "pm10": "65.8", "3": "65.8", "pm25": "53.3", "4": "53.3", "temp": "30.14", "5": "30.14", "humid": "57.87", "6": "57.87", "clientNum": "2", "7": "2" }, { "no": "169", "0": "169", "time": "2017-10-02 11:26:38", "1": "2017-10-02 11:26:38", "pm1": "23.2", "2": "23.2", "pm10": "44.3333", "3": "44.3333", "pm25": "37.1", "4": "37.1", "temp": "27.75", "5": "27.75", "humid": "45.63", "6": "45.63", "clientNum": "1", "7": "1" }, { "no": "170", "0": "170", "time": "2017-10-02 11:28:06", "1": "2017-10-02 11:28:06", "pm1": "42.3", "2": "42.3", "pm10": "79.8", "3": "79.8", "pm25": "68", "4": "68", "temp": "28.55", "5": "28.55", "humid": "66.48", "6": "66.48", "clientNum": "0", "7": "0" }, { "no": "171", "0": "171", "time": "2017-10-02 11:35:22", "1": "2017-10-02 11:35:22", "pm1": "33.8", "2": "33.8", "pm10": "64.7778", "3": "64.7778", "pm25": "52.8", "4": "52.8", "temp": "30.19", "5": "30.19", "humid": "58.36", "6": "58.36", "clientNum": "2", "7": "2" }, { "no": "172", "0": "172", "time": "2017-10-02 11:36:39", "1": "2017-10-02 11:36:39", "pm1": "25.7273", "2": "25.7273", "pm10": "50.8182", "3": "50.8182", "pm25": "40.9091", "4": "40.9091", "temp": "27.6818", "5": "27.6818", "humid": "49.1273", "6": "49.1273", "clientNum": "1", "7": "1" }, { "no": "173", "0": "173", "time": "2017-10-02 11:38:10", "1": "2017-10-02 11:38:10", "pm1": "39.9", "2": "39.9", "pm10": "76.2222", "3": "76.2222", "pm25": "63.5", "4": "63.5", "temp": "28.55", "5": "28.55", "humid": "66.54", "6": "66.54", "clientNum": "0", "7": "0" }, { "no": "174", "0": "174", "time": "2017-10-02 11:45:23", "1": "2017-10-02 11:45:23", "pm1": "33", "2": "33", "pm10": "63.5", "3": "63.5", "pm25": "51.3", "4": "51.3", "temp": "30.42", "5": "30.42", "humid": "56.98", "6": "56.98", "clientNum": "2", "7": "2" }, { "no": "175", "0": "175", "time": "2017-10-02 11:47:39", "1": "2017-10-02 11:47:39", "pm1": "25.5", "2": "25.5", "pm10": "47.8", "3": "47.8", "pm25": "39.2", "4": "39.2", "temp": "27.99", "5": "27.99", "humid": "50.71", "6": "50.71", "clientNum": "1", "7": "1" }, { "no": "176", "0": "176", "time": "2017-10-02 11:48:20", "1": "2017-10-02 11:48:20", "pm1": "37.3", "2": "37.3", "pm10": "73.5556", "3": "73.5556", "pm25": "59.2", "4": "59.2", "temp": "28.53", "5": "28.53", "humid": "66.06", "6": "66.06", "clientNum": "0", "7": "0" }, { "no": "177", "0": "177", "time": "2017-10-02 11:55:24", "1": "2017-10-02 11:55:24", "pm1": "31.9091", "2": "31.9091", "pm10": "60.7273", "3": "60.7273", "pm25": "49.2727", "4": "49.2727", "temp": "30.5364", "5": "30.5364", "humid": "57.5091", "6": "57.5091", "clientNum": "2", "7": "2" }, { "no": "178", "0": "178", "time": "2017-10-02 11:57:40", "1": "2017-10-02 11:57:40", "pm1": "23.5455", "2": "23.5455", "pm10": "43.2727", "3": "43.2727", "pm25": "36.2727", "4": "36.2727", "temp": "27.9364", "5": "27.9364", "humid": "47.8091", "6": "47.8091", "clientNum": "1", "7": "1" }, { "no": "179", "0": "179", "time": "2017-10-02 11:58:23", "1": "2017-10-02 11:58:23", "pm1": "35.1", "2": "35.1", "pm10": "71.4", "3": "71.4", "pm25": "56.3", "4": "56.3", "temp": "28.73", "5": "28.73", "humid": "65.97", "6": "65.97", "clientNum": "0", "7": "0" }, { "no": "180", "0": "180", "time": "2017-10-02 12:06:25", "1": "2017-10-02 12:06:25", "pm1": "31.2727", "2": "31.2727", "pm10": "59.3636", "3": "59.3636", "pm25": "48.2727", "4": "48.2727", "temp": "30.4091", "5": "30.4091", "humid": "57.5273", "6": "57.5273", "clientNum": "2", "7": "2" }, { "no": "181", "0": "181", "time": "2017-10-02 12:08:26", "1": "2017-10-02 12:08:26", "pm1": "34.3", "2": "34.3", "pm10": "68.8", "3": "68.8", "pm25": "53.4", "4": "53.4", "temp": "28.9", "5": "28.9", "humid": "64.77", "6": "64.77", "clientNum": "0", "7": "0" }, { "no": "182", "0": "182", "time": "2017-10-02 12:08:40", "1": "2017-10-02 12:08:40", "pm1": "23.1", "2": "23.1", "pm10": "42.7", "3": "42.7", "pm25": "36.3", "4": "36.3", "temp": "27.69", "5": "27.69", "humid": "47.12", "6": "47.12", "clientNum": "1", "7": "1" }, { "no": "183", "0": "183", "time": "2017-10-02 12:17:25", "1": "2017-10-02 12:17:25", "pm1": "30.5", "2": "30.5", "pm10": "56.7", "3": "56.7", "pm25": "46.7", "4": "46.7", "temp": "30.19", "5": "30.19", "humid": "57.19", "6": "57.19", "clientNum": "2", "7": "2" }, { "no": "184", "0": "184", "time": "2017-10-02 12:18:30", "1": "2017-10-02 12:18:30", "pm1": "34.5", "2": "34.5", "pm10": "69.8", "3": "69.8", "pm25": "54.3", "4": "54.3", "temp": "28.77", "5": "28.77", "humid": "65.26", "6": "65.26", "clientNum": "0", "7": "0" }, { "no": "185", "0": "185", "time": "2017-10-02 12:18:41", "1": "2017-10-02 12:18:41", "pm1": "24.2", "2": "24.2", "pm10": "44.6", "3": "44.6", "pm25": "37.3", "4": "37.3", "temp": "27.62", "5": "27.62", "humid": "48.49", "6": "48.49", "clientNum": "1", "7": "1" }, { "no": "186", "0": "186", "time": "2017-10-02 12:27:26", "1": "2017-10-02 12:27:26", "pm1": "29.8182", "2": "29.8182", "pm10": "55.9091", "3": "55.9091", "pm25": "45.6364", "4": "45.6364", "temp": "30.3273", "5": "30.3273", "humid": "57.1182", "6": "57.1182", "clientNum": "2", "7": "2" }, { "no": "187", "0": "187", "time": "2017-10-02 12:28:43", "1": "2017-10-02 12:28:43", "pm1": "33.1", "2": "33.1", "pm10": "66.5", "3": "66.5", "pm25": "51.5", "4": "51.5", "temp": "28.74", "5": "28.74", "humid": "64.67", "6": "64.67", "clientNum": "0", "7": "0" }, { "no": "188", "0": "188", "time": "2017-10-02 12:28:42", "1": "2017-10-02 12:28:42", "pm1": "22.5", "2": "22.5", "pm10": "41", "3": "41", "pm25": "35.2", "4": "35.2", "temp": "27.54", "5": "27.54", "humid": "46.83", "6": "46.83", "clientNum": "1", "7": "1" }, { "no": "189", "0": "189", "time": "2017-10-02 12:38:27", "1": "2017-10-02 12:38:27", "pm1": "29.4545", "2": "29.4545", "pm10": "55.5455", "3": "55.5455", "pm25": "45.5455", "4": "45.5455", "temp": "30.3818", "5": "30.3818", "humid": "57.1818", "6": "57.1818", "clientNum": "2", "7": "2" }, { "no": "190", "0": "190", "time": "2017-10-02 12:38:47", "1": "2017-10-02 12:38:47", "pm1": "21.9", "2": "21.9", "pm10": "38.7", "3": "38.7", "pm25": "33.7", "4": "33.7", "temp": "27.26", "5": "27.26", "humid": "45.89", "6": "45.89", "clientNum": "1", "7": "1" }, { "no": "191", "0": "191", "time": "2017-10-02 12:38:47", "1": "2017-10-02 12:38:47", "pm1": "33.4", "2": "33.4", "pm10": "68.7778", "3": "68.7778", "pm25": "52.3", "4": "52.3", "temp": "28.82", "5": "28.82", "humid": "64.42", "6": "64.42", "clientNum": "0", "7": "0" }, { "no": "192", "0": "192", "time": "2017-10-02 12:48:48", "1": "2017-10-02 12:48:48", "pm1": "23.8182", "2": "23.8182", "pm10": "44", "3": "44", "pm25": "36.9091", "4": "36.9091", "temp": "27.1909", "5": "27.1909", "humid": "47.8909", "6": "47.8909", "clientNum": "1", "7": "1" }, { "no": "193", "0": "193", "time": "2017-10-02 12:49:00", "1": "2017-10-02 12:49:00", "pm1": "33.6", "2": "33.6", "pm10": "68.1", "3": "68.1", "pm25": "52.6", "4": "52.6", "temp": "28.93", "5": "28.93", "humid": "63.84", "6": "63.84", "clientNum": "0", "7": "0" }, { "no": "194", "0": "194", "time": "2017-10-02 12:49:27", "1": "2017-10-02 12:49:27", "pm1": "28.4", "2": "28.4", "pm10": "53.2", "3": "53.2", "pm25": "44.1", "4": "44.1", "temp": "30.28", "5": "30.28", "humid": "56.9", "6": "56.9", "clientNum": "2", "7": "2" }, { "no": "195", "0": "195", "time": "2017-10-02 12:59:10", "1": "2017-10-02 12:59:10", "pm1": "32.3", "2": "32.3", "pm10": "65", "3": "65", "pm25": "50.5", "4": "50.5", "temp": "29.1", "5": "29.1", "humid": "62.4", "6": "62.4", "clientNum": "0", "7": "0" }, { "no": "196", "0": "196", "time": "2017-10-02 12:59:28", "1": "2017-10-02 12:59:28", "pm1": "29.2727", "2": "29.2727", "pm10": "55.8889", "3": "55.8889", "pm25": "45.8182", "4": "45.8182", "temp": "30.3364", "5": "30.3364", "humid": "57.3182", "6": "57.3182", "clientNum": "2", "7": "2" }, { "no": "197", "0": "197", "time": "2017-10-02 12:59:48", "1": "2017-10-02 12:59:48", "pm1": "24.8", "2": "24.8", "pm10": "47.5", "3": "47.5", "pm25": "39", "4": "39", "temp": "27.23", "5": "27.23", "humid": "50.18", "6": "50.18", "clientNum": "1", "7": "1" }, { "no": "198", "0": "198", "time": "2017-10-02 13:09:18", "1": "2017-10-02 13:09:18", "pm1": "31.1", "2": "31.1", "pm10": "62.1", "3": "62.1", "pm25": "48.8", "4": "48.8", "temp": "29.34", "5": "29.34", "humid": "60.6", "6": "60.6", "clientNum": "0", "7": "0" }, { "no": "199", "0": "199", "time": "2017-10-02 13:09:50", "1": "2017-10-02 13:09:50", "pm1": "23.8", "2": "23.8", "pm10": "45", "3": "45", "pm25": "37.4", "4": "37.4", "temp": "27.3", "5": "27.3", "humid": "48.75", "6": "48.75", "clientNum": "1", "7": "1" }, { "no": "200", "0": "200", "time": "2017-10-02 13:10:29", "1": "2017-10-02 13:10:29", "pm1": "29.6", "2": "29.6", "pm10": "54.7778", "3": "54.7778", "pm25": "45.3", "4": "45.3", "temp": "30.25", "5": "30.25", "humid": "56.89", "6": "56.89", "clientNum": "2", "7": "2" }, { "no": "201", "0": "201", "time": "2017-10-02 13:19:27", "1": "2017-10-02 13:19:27", "pm1": "31.4", "2": "31.4", "pm10": "62.6", "3": "62.6", "pm25": "48.7", "4": "48.7", "temp": "29.52", "5": "29.52", "humid": "60.15", "6": "60.15", "clientNum": "0", "7": "0" }, { "no": "202", "0": "202", "time": "2017-10-02 13:19:51", "1": "2017-10-02 13:19:51", "pm1": "24.3", "2": "24.3", "pm10": "46.3333", "3": "46.3333", "pm25": "38.1", "4": "38.1", "temp": "27.52", "5": "27.52", "humid": "50.4", "6": "50.4", "clientNum": "1", "7": "1" }, { "no": "203", "0": "203", "time": "2017-10-02 13:20:30", "1": "2017-10-02 13:20:30", "pm1": "28.2727", "2": "28.2727", "pm10": "52.5455", "3": "52.5455", "pm25": "43.5455", "4": "43.5455", "temp": "30.2636", "5": "30.2636", "humid": "56.2727", "6": "56.2727", "clientNum": "2", "7": "2" }, { "no": "204", "0": "204", "time": "2017-10-02 13:29:29", "1": "2017-10-02 13:29:29", "pm1": "30.6", "2": "30.6", "pm10": "61", "3": "61", "pm25": "47.9", "4": "47.9", "temp": "29.7", "5": "29.7", "humid": "59.3", "6": "59.3", "clientNum": "0", "7": "0" }, { "no": "205", "0": "205", "time": "2017-10-02 13:29:53", "1": "2017-10-02 13:29:53", "pm1": "23.1", "2": "23.1", "pm10": "41.6", "3": "41.6", "pm25": "35.4", "4": "35.4", "temp": "27.45", "5": "27.45", "humid": "47.94", "6": "47.94", "clientNum": "1", "7": "1" }, { "no": "206", "0": "206", "time": "2017-10-02 13:31:30", "1": "2017-10-02 13:31:30", "pm1": "27.3", "2": "27.3", "pm10": "50.3", "3": "50.3", "pm25": "42.1", "4": "42.1", "temp": "30.35", "5": "30.35", "humid": "55.98", "6": "55.98", "clientNum": "2", "7": "2" }, { "no": "207", "0": "207", "time": "2017-10-02 13:39:39", "1": "2017-10-02 13:39:39", "pm1": "30.4", "2": "30.4", "pm10": "61.4", "3": "61.4", "pm25": "47.8", "4": "47.8", "temp": "29.78", "5": "29.78", "humid": "58.78", "6": "58.78", "clientNum": "0", "7": "0" }, { "no": "208", "0": "208", "time": "2017-10-02 13:39:56", "1": "2017-10-02 13:39:56", "pm1": "23", "2": "23", "pm10": "42.6", "3": "42.6", "pm25": "35.9", "4": "35.9", "temp": "27.29", "5": "27.29", "humid": "49.68", "6": "49.68", "clientNum": "1", "7": "1" }, { "no": "209", "0": "209", "time": "2017-10-02 13:41:32", "1": "2017-10-02 13:41:32", "pm1": "27.4", "2": "27.4", "pm10": "51.6", "3": "51.6", "pm25": "42.6", "4": "42.6", "temp": "30.26", "5": "30.26", "humid": "56.79", "6": "56.79", "clientNum": "2", "7": "2" }, { "no": "210", "0": "210", "time": "2017-10-02 13:49:45", "1": "2017-10-02 13:49:45", "pm1": "29.7", "2": "29.7", "pm10": "59.4", "3": "59.4", "pm25": "46.2", "4": "46.2", "temp": "29.6", "5": "29.6", "humid": "58.47", "6": "58.47", "clientNum": "0", "7": "0" }, { "no": "211", "0": "211", "time": "2017-10-02 13:50:09", "1": "2017-10-02 13:50:09", "pm1": "23.2", "2": "23.2", "pm10": "43.1", "3": "43.1", "pm25": "36.6", "4": "36.6", "temp": "27.45", "5": "27.45", "humid": "50.01", "6": "50.01", "clientNum": "1", "7": "1" }, { "no": "212", "0": "212", "time": "2017-10-02 13:51:33", "1": "2017-10-02 13:51:33", "pm1": "27.7", "2": "27.7", "pm10": "52", "3": "52", "pm25": "43.4", "4": "43.4", "temp": "30.49", "5": "30.49", "humid": "56.85", "6": "56.85", "clientNum": "2", "7": "2" }, { "no": "213", "0": "213", "time": "2017-10-02 13:59:51", "1": "2017-10-02 13:59:51", "pm1": "28.9", "2": "28.9", "pm10": "56.4", "3": "56.4", "pm25": "44.6", "4": "44.6", "temp": "29.37", "5": "29.37", "humid": "58.86", "6": "58.86", "clientNum": "0", "7": "0" }, { "no": "214", "0": "214", "time": "2017-10-02 14:00:10", "1": "2017-10-02 14:00:10", "pm1": "21.8", "2": "21.8", "pm10": "37.2222", "3": "37.2222", "pm25": "32.8", "4": "32.8", "temp": "27.45", "5": "27.45", "humid": "47.43", "6": "47.43", "clientNum": "1", "7": "1" }, { "no": "215", "0": "215", "time": "2017-10-02 14:01:34", "1": "2017-10-02 14:01:34", "pm1": "27.3", "2": "27.3", "pm10": "51.3", "3": "51.3", "pm25": "42.9", "4": "42.9", "temp": "30.37", "5": "30.37", "humid": "56.92", "6": "56.92", "clientNum": "2", "7": "2" }, { "no": "216", "0": "216", "time": "2017-10-02 14:09:56", "1": "2017-10-02 14:09:56", "pm1": "29.1", "2": "29.1", "pm10": "57.1", "3": "57.1", "pm25": "44.9", "4": "44.9", "temp": "29.21", "5": "29.21", "humid": "59", "6": "59", "clientNum": "0", "7": "0" }, { "no": "217", "0": "217", "time": "2017-10-02 14:10:11", "1": "2017-10-02 14:10:11", "pm1": "22.2", "2": "22.2", "pm10": "38.5556", "3": "38.5556", "pm25": "33.4", "4": "33.4", "temp": "27.3", "5": "27.3", "humid": "48.2", "6": "48.2", "clientNum": "1", "7": "1" }, { "no": "218", "0": "218", "time": "2017-10-02 14:11:35", "1": "2017-10-02 14:11:35", "pm1": "27.0909", "2": "27.0909", "pm10": "50.2", "3": "50.2", "pm25": "41.9091", "4": "41.9091", "temp": "30.3364", "5": "30.3364", "humid": "56.8545", "6": "56.8545", "clientNum": "2", "7": "2" }, { "no": "219", "0": "219", "time": "2017-10-02 14:20:03", "1": "2017-10-02 14:20:03", "pm1": "30", "2": "30", "pm10": "60.2", "3": "60.2", "pm25": "47.4", "4": "47.4", "temp": "29.13", "5": "29.13", "humid": "60.13", "6": "60.13", "clientNum": "0", "7": "0" }, { "no": "220", "0": "220", "time": "2017-10-02 14:20:14", "1": "2017-10-02 14:20:14", "pm1": "21.8", "2": "21.8", "pm10": "37.4", "3": "37.4", "pm25": "33.3", "4": "33.3", "temp": "27.24", "5": "27.24", "humid": "48.5", "6": "48.5", "clientNum": "1", "7": "1" }, { "no": "221", "0": "221", "time": "2017-10-02 14:22:35", "1": "2017-10-02 14:22:35", "pm1": "26.7", "2": "26.7", "pm10": "49", "3": "49", "pm25": "41.3", "4": "41.3", "temp": "30.32", "5": "30.32", "humid": "56.57", "6": "56.57", "clientNum": "2", "7": "2" }, { "no": "222", "0": "222", "time": "2017-10-02 14:30:06", "1": "2017-10-02 14:30:06", "pm1": "29.7", "2": "29.7", "pm10": "59.2", "3": "59.2", "pm25": "46.4", "4": "46.4", "temp": "28.99", "5": "28.99", "humid": "59.99", "6": "59.99", "clientNum": "0", "7": "0" }, { "no": "223", "0": "223", "time": "2017-10-02 14:30:15", "1": "2017-10-02 14:30:15", "pm1": "22.0909", "2": "22.0909", "pm10": "38.9091", "3": "38.9091", "pm25": "34.0909", "4": "34.0909", "temp": "27.1636", "5": "27.1636", "humid": "49.3727", "6": "49.3727", "clientNum": "1", "7": "1" }, { "no": "224", "0": "224", "time": "2017-10-02 14:32:36", "1": "2017-10-02 14:32:36", "pm1": "26.6", "2": "26.6", "pm10": "49", "3": "49", "pm25": "40.9", "4": "40.9", "temp": "30.34", "5": "30.34", "humid": "56.53", "6": "56.53", "clientNum": "2", "7": "2" }, { "no": "225", "0": "225", "time": "2017-10-02 14:40:13", "1": "2017-10-02 14:40:13", "pm1": "29.9", "2": "29.9", "pm10": "58.8", "3": "58.8", "pm25": "46.4", "4": "46.4", "temp": "28.86", "5": "28.86", "humid": "60.06", "6": "60.06", "clientNum": "0", "7": "0" }, { "no": "226", "0": "226", "time": "2017-10-02 14:41:15", "1": "2017-10-02 14:41:15", "pm1": "21.1111", "2": "21.1111", "pm10": "37.6667", "3": "37.6667", "pm25": "32.8889", "4": "32.8889", "temp": "27.2778", "5": "27.2778", "humid": "47.6444", "6": "47.6444", "clientNum": "1", "7": "1" }, { "no": "227", "0": "227", "time": "2017-10-02 14:42:37", "1": "2017-10-02 14:42:37", "pm1": "26", "2": "26", "pm10": "48.2", "3": "48.2", "pm25": "40.4", "4": "40.4", "temp": "30.2", "5": "30.2", "humid": "56.53", "6": "56.53", "clientNum": "2", "7": "2" }, { "no": "228", "0": "228", "time": "2017-10-02 14:50:20", "1": "2017-10-02 14:50:20", "pm1": "29.7", "2": "29.7", "pm10": "58.2222", "3": "58.2222", "pm25": "45.6", "4": "45.6", "temp": "28.78", "5": "28.78", "humid": "60.1", "6": "60.1", "clientNum": "0", "7": "0" }, { "no": "229", "0": "229", "time": "2017-10-02 14:51:29", "1": "2017-10-02 14:51:29", "pm1": "22.5", "2": "22.5", "pm10": "41.4", "3": "41.4", "pm25": "34.9", "4": "34.9", "temp": "27.39", "5": "27.39", "humid": "48.37", "6": "48.37", "clientNum": "1", "7": "1" }, { "no": "230", "0": "230", "time": "2017-10-02 14:52:38", "1": "2017-10-02 14:52:38", "pm1": "26.2727", "2": "26.2727", "pm10": "48.7273", "3": "48.7273", "pm25": "40.5455", "4": "40.5455", "temp": "30.0727", "5": "30.0727", "humid": "56.9364", "6": "56.9364", "clientNum": "2", "7": "2" }, { "no": "231", "0": "231", "time": "2017-10-02 15:00:24", "1": "2017-10-02 15:00:24", "pm1": "30.7", "2": "30.7", "pm10": "62", "3": "62", "pm25": "48.4", "4": "48.4", "temp": "28.72", "5": "28.72", "humid": "60.61", "6": "60.61", "clientNum": "0", "7": "0" }, { "no": "232", "0": "232", "time": "2017-10-02 15:01:30", "1": "2017-10-02 15:01:30", "pm1": "21.3", "2": "21.3", "pm10": "39.5", "3": "39.5", "pm25": "34.2", "4": "34.2", "temp": "27.13", "5": "27.13", "humid": "44.89", "6": "44.89", "clientNum": "1", "7": "1" }, { "no": "233", "0": "233", "time": "2017-10-02 15:03:38", "1": "2017-10-02 15:03:38", "pm1": "26.1", "2": "26.1", "pm10": "48.375", "3": "48.375", "pm25": "40", "4": "40", "temp": "29.9", "5": "29.9", "humid": "57.39", "6": "57.39", "clientNum": "2", "7": "2" }, { "no": "234", "0": "234", "time": "2017-10-02 15:10:29", "1": "2017-10-02 15:10:29", "pm1": "30.4", "2": "30.4", "pm10": "60.3", "3": "60.3", "pm25": "47.1", "4": "47.1", "temp": "28.69", "5": "28.69", "humid": "59.96", "6": "59.96", "clientNum": "0", "7": "0" }, { "no": "235", "0": "235", "time": "2017-10-02 15:11:31", "1": "2017-10-02 15:11:31", "pm1": "23.8", "2": "23.8", "pm10": "43.8", "3": "43.8", "pm25": "36.9", "4": "36.9", "temp": "27", "5": "27", "humid": "46.07", "6": "46.07", "clientNum": "1", "7": "1" }, { "no": "236", "0": "236", "time": "2017-10-02 15:13:39", "1": "2017-10-02 15:13:39", "pm1": "26.1", "2": "26.1", "pm10": "48", "3": "48", "pm25": "40.4", "4": "40.4", "temp": "29.94", "5": "29.94", "humid": "57.39", "6": "57.39", "clientNum": "2", "7": "2" }, { "no": "237", "0": "237", "time": "2017-10-02 15:20:39", "1": "2017-10-02 15:20:39", "pm1": "28.9", "2": "28.9", "pm10": "58", "3": "58", "pm25": "45.4", "4": "45.4", "temp": "28.67", "5": "28.67", "humid": "59.9", "6": "59.9", "clientNum": "0", "7": "0" }, { "no": "238", "0": "238", "time": "2017-10-02 15:21:32", "1": "2017-10-02 15:21:32", "pm1": "20.6", "2": "20.6", "pm10": "37.1", "3": "37.1", "pm25": "32.1", "4": "32.1", "temp": "26.76", "5": "26.76", "humid": "42.52", "6": "42.52", "clientNum": "1", "7": "1" }, { "no": "239", "0": "239", "time": "2017-10-02 15:23:40", "1": "2017-10-02 15:23:40", "pm1": "26.6", "2": "26.6", "pm10": "48.5", "3": "48.5", "pm25": "40.6", "4": "40.6", "temp": "30.08", "5": "30.08", "humid": "56.96", "6": "56.96", "clientNum": "2", "7": "2" }, { "no": "240", "0": "240", "time": "2017-10-02 15:30:44", "1": "2017-10-02 15:30:44", "pm1": "28.6", "2": "28.6", "pm10": "55.5", "3": "55.5", "pm25": "43.8", "4": "43.8", "temp": "28.65", "5": "28.65", "humid": "59.8", "6": "59.8", "clientNum": "0", "7": "0" }, { "no": "241", "0": "241", "time": "2017-10-02 15:31:35", "1": "2017-10-02 15:31:35", "pm1": "20.4", "2": "20.4", "pm10": "33.7778", "3": "33.7778", "pm25": "31", "4": "31", "temp": "26.75", "5": "26.75", "humid": "41.39", "6": "41.39", "clientNum": "1", "7": "1" }, { "no": "242", "0": "242", "time": "2017-10-02 15:33:43", "1": "2017-10-02 15:33:43", "pm1": "26.9", "2": "26.9", "pm10": "49.5556", "3": "49.5556", "pm25": "41.5", "4": "41.5", "temp": "29.93", "5": "29.93", "humid": "57.57", "6": "57.57", "clientNum": "2", "7": "2" }, { "no": "243", "0": "243", "time": "2017-10-02 15:40:52", "1": "2017-10-02 15:40:52", "pm1": "27.6", "2": "27.6", "pm10": "53.3", "3": "53.3", "pm25": "42.5", "4": "42.5", "temp": "28.6", "5": "28.6", "humid": "59.98", "6": "59.98", "clientNum": "0", "7": "0" }, { "no": "244", "0": "244", "time": "2017-10-02 15:41:37", "1": "2017-10-02 15:41:37", "pm1": "19.7", "2": "19.7", "pm10": "32.2222", "3": "32.2222", "pm25": "29.9", "4": "29.9", "temp": "26.71", "5": "26.71", "humid": "42.25", "6": "42.25", "clientNum": "1", "7": "1" }, { "no": "245", "0": "245", "time": "2017-10-02 15:43:44", "1": "2017-10-02 15:43:44", "pm1": "25.0909", "2": "25.0909", "pm10": "45.8182", "3": "45.8182", "pm25": "38.7273", "4": "38.7273", "temp": "29.8182", "5": "29.8182", "humid": "56.9818", "6": "56.9818", "clientNum": "2", "7": "2" }, { "no": "246", "0": "246", "time": "2017-10-02 15:51:00", "1": "2017-10-02 15:51:00", "pm1": "26.6", "2": "26.6", "pm10": "51.1", "3": "51.1", "pm25": "40.6", "4": "40.6", "temp": "28.5", "5": "28.5", "humid": "59.32", "6": "59.32", "clientNum": "0", "7": "0" }, { "no": "247", "0": "247", "time": "2017-10-02 15:51:40", "1": "2017-10-02 15:51:40", "pm1": "20.4", "2": "20.4", "pm10": "34.6667", "3": "34.6667", "pm25": "30.9", "4": "30.9", "temp": "26.97", "5": "26.97", "humid": "45.87", "6": "45.87", "clientNum": "1", "7": "1" }, { "no": "248", "0": "248", "time": "2017-10-02 15:54:44", "1": "2017-10-02 15:54:44", "pm1": "23.3", "2": "23.3", "pm10": "42.8", "3": "42.8", "pm25": "36.5", "4": "36.5", "temp": "29.71", "5": "29.71", "humid": "55", "6": "55", "clientNum": "2", "7": "2" }, { "no": "249", "0": "249", "time": "2017-10-02 16:01:05", "1": "2017-10-02 16:01:05", "pm1": "27.5", "2": "27.5", "pm10": "52.5", "3": "52.5", "pm25": "42.4", "4": "42.4", "temp": "28.45", "5": "28.45", "humid": "60.79", "6": "60.79", "clientNum": "0", "7": "0" }, { "no": "250", "0": "250", "time": "2017-10-02 16:01:42", "1": "2017-10-02 16:01:42", "pm1": "19.5", "2": "19.5", "pm10": "33.6", "3": "33.6", "pm25": "30.1", "4": "30.1", "temp": "26.98", "5": "26.98", "humid": "42.96", "6": "42.96", "clientNum": "1", "7": "1" }, { "no": "251", "0": "251", "time": "2017-10-02 16:04:45", "1": "2017-10-02 16:04:45", "pm1": "23.5", "2": "23.5", "pm10": "42.8889", "3": "42.8889", "pm25": "36.3", "4": "36.3", "temp": "29.54", "5": "29.54", "humid": "55.43", "6": "55.43", "clientNum": "2", "7": "2" }, { "no": "252", "0": "252", "time": "2017-10-02 16:11:13", "1": "2017-10-02 16:11:13", "pm1": "27.8", "2": "27.8", "pm10": "54.1", "3": "54.1", "pm25": "43.4", "4": "43.4", "temp": "28.34", "5": "28.34", "humid": "61.56", "6": "61.56", "clientNum": "0", "7": "0" }, { "no": "253", "0": "253", "time": "2017-10-02 16:11:44", "1": "2017-10-02 16:11:44", "pm1": "19.6", "2": "19.6", "pm10": "32.5", "3": "32.5", "pm25": "29.6", "4": "29.6", "temp": "26.91", "5": "26.91", "humid": "44.81", "6": "44.81", "clientNum": "1", "7": "1" }, { "no": "254", "0": "254", "time": "2017-10-02 16:14:46", "1": "2017-10-02 16:14:46", "pm1": "25.0909", "2": "25.0909", "pm10": "46.1818", "3": "46.1818", "pm25": "38.6364", "4": "38.6364", "temp": "29.2818", "5": "29.2818", "humid": "57.1727", "6": "57.1727", "clientNum": "2", "7": "2" }, { "no": "255", "0": "255", "time": "2017-10-02 16:21:20", "1": "2017-10-02 16:21:20", "pm1": "28.1", "2": "28.1", "pm10": "54.1", "3": "54.1", "pm25": "43.3", "4": "43.3", "temp": "28.23", "5": "28.23", "humid": "62.11", "6": "62.11", "clientNum": "0", "7": "0" }, { "no": "256", "0": "256", "time": "2017-10-02 16:21:45", "1": "2017-10-02 16:21:45", "pm1": "20.6", "2": "20.6", "pm10": "35.2222", "3": "35.2222", "pm25": "31.8", "4": "31.8", "temp": "27.15", "5": "27.15", "humid": "46.74", "6": "46.74", "clientNum": "1", "7": "1" }, { "no": "257", "0": "257", "time": "2017-10-02 16:25:46", "1": "2017-10-02 16:25:46", "pm1": "25.3", "2": "25.3", "pm10": "47.6", "3": "47.6", "pm25": "39.5", "4": "39.5", "temp": "29.21", "5": "29.21", "humid": "58.63", "6": "58.63", "clientNum": "2", "7": "2" }, { "no": "258", "0": "258", "time": "2017-10-02 16:31:23", "1": "2017-10-02 16:31:23", "pm1": "26.8", "2": "26.8", "pm10": "50.3", "3": "50.3", "pm25": "40.6", "4": "40.6", "temp": "28.12", "5": "28.12", "humid": "60.8", "6": "60.8", "clientNum": "0", "7": "0" }, { "no": "259", "0": "259", "time": "2017-10-02 16:31:56", "1": "2017-10-02 16:31:56", "pm1": "19.9", "2": "19.9", "pm10": "34.2222", "3": "34.2222", "pm25": "29.8", "4": "29.8", "temp": "27.11", "5": "27.11", "humid": "45.46", "6": "45.46", "clientNum": "1", "7": "1" }, { "no": "260", "0": "260", "time": "2017-10-02 16:35:47", "1": "2017-10-02 16:35:47", "pm1": "26.8182", "2": "26.8182", "pm10": "49.9", "3": "49.9", "pm25": "41.7273", "4": "41.7273", "temp": "29.1364", "5": "29.1364", "humid": "60.1545", "6": "60.1545", "clientNum": "2", "7": "2" }, { "no": "261", "0": "261", "time": "2017-10-02 16:41:30", "1": "2017-10-02 16:41:30", "pm1": "26.5", "2": "26.5", "pm10": "50.5", "3": "50.5", "pm25": "40.8", "4": "40.8", "temp": "28.07", "5": "28.07", "humid": "60.76", "6": "60.76", "clientNum": "0", "7": "0" }, { "no": "262", "0": "262", "time": "2017-10-02 16:41:58", "1": "2017-10-02 16:41:58", "pm1": "17.4", "2": "17.4", "pm10": "29.1111", "3": "29.1111", "pm25": "26.7", "4": "26.7", "temp": "26.96", "5": "26.96", "humid": "42.66", "6": "42.66", "clientNum": "1", "7": "1" }, { "no": "263", "0": "263", "time": "2017-10-02 16:46:48", "1": "2017-10-02 16:46:48", "pm1": "26.5455", "2": "26.5455", "pm10": "50.0909", "3": "50.0909", "pm25": "42", "4": "42", "temp": "28.9727", "5": "28.9727", "humid": "60.4455", "6": "60.4455", "clientNum": "2", "7": "2" }, { "no": "264", "0": "264", "time": "2017-10-02 16:51:44", "1": "2017-10-02 16:51:44", "pm1": "25.9", "2": "25.9", "pm10": "48.8889", "3": "48.8889", "pm25": "39.6", "4": "39.6", "temp": "28.04", "5": "28.04", "humid": "60.57", "6": "60.57", "clientNum": "0", "7": "0" }, { "no": "265", "0": "265", "time": "2017-10-02 16:52:00", "1": "2017-10-02 16:52:00", "pm1": "20.3", "2": "20.3", "pm10": "34.6667", "3": "34.6667", "pm25": "31.3", "4": "31.3", "temp": "26.94", "5": "26.94", "humid": "47.61", "6": "47.61", "clientNum": "1", "7": "1" }, { "no": "266", "0": "266", "time": "2017-10-02 16:57:48", "1": "2017-10-02 16:57:48", "pm1": "27.1", "2": "27.1", "pm10": "50.4444", "3": "50.4444", "pm25": "42.3", "4": "42.3", "temp": "28.93", "5": "28.93", "humid": "59.93", "6": "59.93", "clientNum": "2", "7": "2" }, { "no": "267", "0": "267", "time": "2017-10-02 17:01:53", "1": "2017-10-02 17:01:53", "pm1": "27.3", "2": "27.3", "pm10": "53.4", "3": "53.4", "pm25": "42.4", "4": "42.4", "temp": "28", "5": "28", "humid": "62.35", "6": "62.35", "clientNum": "0", "7": "0" }, { "no": "268", "0": "268", "time": "2017-10-02 17:02:08", "1": "2017-10-02 17:02:08", "pm1": "20.2", "2": "20.2", "pm10": "35.7", "3": "35.7", "pm25": "31.6", "4": "31.6", "temp": "27.18", "5": "27.18", "humid": "47.93", "6": "47.93", "clientNum": "1", "7": "1" }, { "no": "269", "0": "269", "time": "2017-10-02 17:07:49", "1": "2017-10-02 17:07:49", "pm1": "27.5455", "2": "27.5455", "pm10": "51", "3": "51", "pm25": "42.7273", "4": "42.7273", "temp": "28.9727", "5": "28.9727", "humid": "60.2273", "6": "60.2273", "clientNum": "2", "7": "2" }, { "no": "270", "0": "270", "time": "2017-10-02 17:12:01", "1": "2017-10-02 17:12:01", "pm1": "28", "2": "28", "pm10": "55.2", "3": "55.2", "pm25": "43.9", "4": "43.9", "temp": "28", "5": "28", "humid": "62.38", "6": "62.38", "clientNum": "0", "7": "0" }, { "no": "271", "0": "271", "time": "2017-10-02 17:12:12", "1": "2017-10-02 17:12:12", "pm1": "21.6", "2": "21.6", "pm10": "39.5556", "3": "39.5556", "pm25": "33.3", "4": "33.3", "temp": "27.28", "5": "27.28", "humid": "49.77", "6": "49.77", "clientNum": "1", "7": "1" }];
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-device.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEVICE; });
var DEVICE = [{ "no": "0", "0": "0", "name": "\u6771\u6d77\u5225\u5885", "1": "\u6771\u6d77\u5225\u5885", "lat": 24.181598, "2": "24.1787141", "lng": 120.589623, "3": "120.5951078" }, { "no": "1", "0": "1", "name": "\u5927\u667a\u6167\u79d1\u6280\u5927\u6a13(ST)", "1": "\u5927\u667a\u6167\u79d1\u6280\u5927\u6a13(ST)", "lat": 24.1811738, "2": "24.1811738", "lng": 120.594807, "3": "120.594807" }, { "no": "2", "0": "2", "name": "\u897f\u5c6f\u798f\u79d1", "1": "\u897f\u5c6f\u798f\u79d1", "lat": 24.1836697, "2": "24.1836697", "lng": 120.6193887, "3": "120.6193887" }];
//# sourceMappingURL=mock-device.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-singleData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return realTimeDATA; });
var realTimeDATA = [
    {
        "no": "2781",
        "0": "2781",
        "time": "2017-10-02 17:19:08",
        "1": "2017-10-02 17:19:08",
        "pm1": "28",
        "2": "28",
        "pm10": null,
        "3": null,
        "pm25": "1",
        "4": "44",
        "temp": "27.9",
        "5": "27.9",
        "humid": "62.9",
        "6": "62.9",
        "clientNum": "0",
        "7": "0"
    },
    {
        "no": "2782",
        "0": "2782",
        "time": "2017-10-02 17:19:17",
        "1": "2017-10-02 17:19:17",
        "pm1": "19",
        "2": "19",
        "pm10": "300",
        "3": "300",
        "pm25": "30",
        "4": "30",
        "temp": "27.3",
        "5": "27.3",
        "humid": "45",
        "6": "45",
        "clientNum": "1",
        "7": "1"
    },
    {
        "no": "2780",
        "0": "2780",
        "time": "2017-10-02 17:18:50",
        "1": "2017-10-02 17:18:50",
        "pm1": "29",
        "2": "29",
        "pm10": "55",
        "3": "55",
        "pm25": "151",
        "4": "45",
        "temp": "28.8",
        "5": "28.8",
        "humid": "60.3",
        "6": "60.3",
        "clientNum": "2",
        "7": "2"
    }
];
//# sourceMappingURL=mock-singleData.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/animation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/****动画 - 代码库 - NEC : 更好的CSS样式解决方案***/\r\n/****http://nec.netease.com/library/category/animation***/\r\n/* animation */\r\n.a-bounce,.a-flip,.a-flash,.a-shake,.a-swing,.a-wobble,.a-ring{-webkit-animation:1s ease;animation:1s ease;}\r\n.a-fadein,.a-fadeinT,.a-fadeinR,.a-fadeinB,.a-fadeinL,.a-bouncein,.a-bounceinT,.a-bounceinR,.a-bounceinB,.a-bounceinL,.a-rotatein,.a-rotateinLT,.a-rotateinLB,.a-rotateinRT,.a-rotateinRB,.a-flipin,.a-flipinX,.a-flipinY{-webkit-animation:0.75s ease-out backwards;animation:0.75s ease-out backwards;}\r\n.a-fadeout,.a-fadeoutT,.a-fadeoutR,.a-fadeoutB,.a-fadeoutL,.a-bounceout,.a-bounceoutT,.a-bounceoutR,.a-bounceoutB,.a-bounceoutL,.a-rotateout,.a-rotateoutLT,.a-rotateoutLB,.a-rotateoutRT,.a-rotateoutRB,.a-flipout,.a-flipoutX,.a-flipoutY{-webkit-animation:0.75s ease-in forwards;animation:0.75s ease-in forwards;}\r\n/* 淡入 */\r\n.a-fadein{-webkit-animation-name:fadein;animation-name:fadein;}\r\n/* 淡入-从上 */\r\n.a-fadeinT{-webkit-animation-name:fadeinT;animation-name:fadeinT;}\r\n/* 淡入-从右 */\r\n.a-fadeinR{-webkit-animation-name:fadeinR;animation-name:fadeinR;}\r\n/* 淡入-从下 */\r\n.a-fadeinB{-webkit-animation-name:fadeinB;animation-name:fadeinB;}\r\n/* 淡入-从左 */\r\n.a-fadeinL{-webkit-animation-name:fadeinL;animation-name:fadeinL;}\r\n/* 淡出 */\r\n.a-fadeout{-webkit-animation-name:fadeout;animation-name:fadeout;}\r\n/* 淡出-向上 */\r\n.a-fadeoutT{-webkit-animation-name:fadeoutT;animation-name:fadeoutT;}\r\n/* 淡出-向右 */\r\n.a-fadeoutR{-webkit-animation-name:fadeoutR;animation-name:fadeoutR;}\r\n/* 淡出-向下 */\r\n.a-fadeoutB{-webkit-animation-name:fadeoutB;animation-name:fadeoutB;}\r\n/* 淡出-向左 */\r\n.a-fadeoutL{-webkit-animation-name:fadeoutL;animation-name:fadeoutL;}\r\n/* 弹跳 */\r\n.a-bounce{-webkit-animation-name:bounce;animation-name:bounce;}\r\n/* 弹入 */\r\n.a-bouncein{-webkit-animation-name:bouncein;animation-name:bouncein;}\r\n/* 弹入-从上 */\r\n.a-bounceinT{-webkit-animation-name:bounceinT;animation-name:bounceinT;}\r\n/* 弹入-从右 */\r\n.a-bounceinR{-webkit-animation-name:bounceinR;animation-name:bounceinR;}\r\n/* 弹入-从下 */\r\n.a-bounceinB{-webkit-animation-name:bounceinB;animation-name:bounceinB;}\r\n/* 弹入-从左 */\r\n.a-bounceinL{-webkit-animation-name:bounceinL;animation-name:bounceinL;}\r\n/* 弹出 */\r\n.a-bounceout{-webkit-animation-name:bounceout;animation-name:bounceout;}\r\n/* 弹出-向上 */\r\n.a-bounceoutT{-webkit-animation-name:bounceoutT;animation-name:bounceoutT;}\r\n/* 弹出-向右 */\r\n.a-bounceoutR{-webkit-animation-name:bounceoutR;animation-name:bounceoutR;}\r\n/* 弹出-向下 */\r\n.a-bounceoutB{-webkit-animation-name:bounceoutB;animation-name:bounceoutB;}\r\n/* 弹出-向左 */\r\n.a-bounceoutL{-webkit-animation-name:bounceoutL;animation-name:bounceoutL;}\r\n/* 转入 */\r\n.a-rotatein{-webkit-animation-name:rotatein;animation-name:rotatein;}\r\n/* 转入-从左上 */\r\n.a-rotateinLT{-webkit-animation-name:rotateinLT;animation-name:rotateinLT;}\r\n/* 转入-从左下 */\r\n.a-rotateinLB{-webkit-animation-name:rotateinLB;animation-name:rotateinLB;}\r\n/* 转入-从右上 */\r\n.a-rotateinRT{-webkit-animation-name:rotateinRT;animation-name:rotateinRT;}\r\n/* 转入-从右下*/\r\n.a-rotateinRB{-webkit-animation-name:rotateinRB;animation-name:rotateinRB;}\r\n/* 转出 */\r\n.a-rotateout{-webkit-animation-name:rotateout;animation-name:rotateout;}\r\n/* 转出-向左上 */\r\n.a-rotateoutLT{-webkit-animation-name:rotateoutLT;animation-name:rotateoutLT;}\r\n/* 转出-向左下 */\r\n.a-rotateoutLB{-webkit-animation-name:rotateoutLB;animation-name:rotateoutLB;}\r\n/* 转出-向右上 */\r\n.a-rotateoutRT{-webkit-animation-name:rotateoutRT;animation-name:rotateoutRT;}\r\n/* 转出-向右下 */\r\n.a-rotateoutRB{-webkit-animation-name:rotateoutRB;animation-name:rotateoutRB;}\r\n/* 翻转 */\r\n.a-flip{-webkit-animation-name:flip;animation-name:flip;}\r\n/* 翻入-X轴 */\r\n.a-flipinX{-webkit-animation-name:flipinX;animation-name:flipinX;}\r\n/* 翻入-Y轴 */\r\n.a-flipin,.a-flipinY{-webkit-animation-name:flipinY;animation-name:flipinY;}\r\n/* 翻出-X轴 */\r\n.a-flipoutX{-webkit-animation-name:flipoutX;animation-name:flipoutX;}\r\n/* 翻出-Y轴 */\r\n.a-flipout,.a-flipoutY{-webkit-animation-name:flipoutY;animation-name:flipoutY;}\r\n/* 闪烁 */\r\n.a-flash{-webkit-animation-name:flash;animation-name:flash;}\r\n/* 震颤 */\r\n.a-shake{-webkit-animation-name:shake;animation-name:shake;}\r\n/* 摇摆 */\r\n.a-swing{-webkit-animation-name:swing;animation-name:swing;}\r\n/* 摇晃 */\r\n.a-wobble{-webkit-animation-name:wobble;animation-name:wobble;}\r\n/* 震铃 */\r\n.a-ring{-webkit-animation-name:ring;animation-name:ring;}\r\n/* define */\r\n/* 淡入 */\r\n@-webkit-keyframes fadein{\r\n    0%{opacity:0;}\r\n    100%{opacity:1;}\r\n}\r\n@keyframes fadein{\r\n    0%{opacity:0;}\r\n    100%{opacity:1;}\r\n}\r\n/* 淡入-从上 */\r\n@-webkit-keyframes fadeinT{\r\n    0%{opacity:0;-webkit-transform:translateY(-100px);}\r\n    100%{opacity:1;-webkit-transform:translateY(0);}\r\n}\r\n@keyframes fadeinT{\r\n    0%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px);}\r\n    100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}\r\n}\r\n/* 淡入-从右 */\r\n@-webkit-keyframes fadeinR{\r\n    0%{opacity:0;-webkit-transform:translateX(100px);}\r\n    100%{opacity:1;-webkit-transform:translateX(0);}\r\n}\r\n@keyframes fadeinR{\r\n    0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px);}\r\n    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}\r\n}\r\n/* 淡入-从下 */\r\n@-webkit-keyframes fadeinB{\r\n    0%{opacity:0;-webkit-transform:translateY(100px);}\r\n    100%{opacity:1;-webkit-transform:translateY(0);}\r\n}\r\n@keyframes fadeinB{\r\n    0%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);}\r\n    100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}\r\n}\r\n/* 淡入-从左 */\r\n@-webkit-keyframes fadeinL{\r\n    0%{opacity:0;-webkit-transform:translateX(-100px);}\r\n    100%{opacity:1;-webkit-transform:translateX(0);}\r\n}\r\n@keyframes fadeinL{\r\n    0%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px);}\r\n    100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}\r\n}\r\n/* 淡出 */\r\n@-webkit-keyframes fadeout{\r\n    0%{opacity:1;}\r\n    100%{opacity:0;}\r\n}\r\n@keyframes fadeout{\r\n    0%{opacity:1;}\r\n    100%{opacity:0;}\r\n}\r\n/* 淡出-向上 */\r\n@-webkit-keyframes fadeoutT{\r\n    0%{opacity:1;-webkit-transform:translateY(0);}\r\n    100%{opacity:0;-webkit-transform:translateY(-100px);}\r\n}\r\n@keyframes fadeoutT{\r\n    0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}\r\n    100%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px);}\r\n}\r\n/* 淡出-向右 */\r\n@-webkit-keyframes fadeoutR{\r\n    0%{opacity:1;-webkit-transform:translateX(0);}\r\n    100%{opacity:0;-webkit-transform:translateX(100px);}\r\n}\r\n@keyframes fadeoutR{\r\n    0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}\r\n    100%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px);}\r\n}\r\n/* 淡出-向下 */\r\n@-webkit-keyframes fadeoutB{\r\n    0%{opacity:1;-webkit-transform:translateY(0);}\r\n    100%{opacity:0;-webkit-transform:translateY(100px);}\r\n}\r\n@keyframes fadeoutB{\r\n    0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}\r\n    100%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);}\r\n}\r\n/* 淡出-向左 */\r\n@-webkit-keyframes fadeoutL{\r\n    0%{opacity:1;-webkit-transform:translateX(0);}\r\n    100%{opacity:0;-webkit-transform:translateX(-100px);}\r\n}\r\n@keyframes fadeoutL{\r\n    0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}\r\n    100%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px);}\r\n}\r\n/* 弹跳 */\r\n@-webkit-keyframes bounce{\r\n    0%,20%,50%,80%,100%{-webkit-transform:translateY(0);}\r\n    40%{-webkit-transform:translateY(-30px);}\r\n    60%{-webkit-transform:translateY(-15px);}\r\n}\r\n@keyframes bounce{\r\n    0%,20%,50%,80%,100%{-webkit-transform:translateY(0);transform:translateY(0);}\r\n    40%{-webkit-transform:translateY(-30px);transform:translateY(-30px);}\r\n    60%{-webkit-transform:translateY(-15px);transform:translateY(-15px);}\r\n}\r\n/* 弹入 */\r\n@-webkit-keyframes bouncein{\r\n    0%{opacity:0;-webkit-transform:scale(0.3);}\r\n    50%{opacity:1;-webkit-transform:scale(1.05);}\r\n    70%{-webkit-transform:scale(0.9);}\r\n    100%{-webkit-transform:scale(1);}\r\n}\r\n@keyframes bouncein{\r\n    0%{opacity:0;-webkit-transform:scale(0.3);transform:scale(0.3);}\r\n    50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05);}\r\n    70%{-webkit-transform:scale(0.9);transform:scale(0.9);}\r\n    100%{-webkit-transform:scale(1);transform:scale(1);}\r\n}\r\n/* 弹入-从上 */\r\n@-webkit-keyframes bounceinT{\r\n    0%{opacity:0;-webkit-transform:translateY(-100px);}\r\n    60%{opacity:1;-webkit-transform:translateY(30px);}\r\n    80%{-webkit-transform:translateY(-10px);}\r\n    100%{-webkit-transform:translateY(0);}\r\n}\r\n@keyframes bounceinT{\r\n    0%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px);}\r\n    60%{opacity:1;-webkit-transform:translateY(30px);transform:translateY(30px);}\r\n    80%{-webkit-transform:translateY(-10px);transform:translateY(-10px);}\r\n    100%{-webkit-transform:translateY(0);transform:translateY(0);}\r\n}\r\n/* 弹入-从右 */\r\n@-webkit-keyframes bounceinR{\r\n    0%{opacity:0;-webkit-transform:translateX(100px);}\r\n    60%{opacity:1;-webkit-transform:translateX(-30px);}\r\n    80%{-webkit-transform:translateX(10px);}\r\n    100%{-webkit-transform:translateX(0);}\r\n}\r\n@keyframes bounceinR{\r\n    0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px);}\r\n    60%{opacity:1;-webkit-transform:translateX(-30px);transform:translateX(-30px);}\r\n    80%{-webkit-transform:translateX(10px);transform:translateX(10px);}\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n}\r\n/* 弹入-从下 */\r\n@-webkit-keyframes bounceinB{\r\n    0%{opacity:0;-webkit-transform:translateY(100px);}\r\n    60%{opacity:1;-webkit-transform:translateY(-30px);}\r\n    80%{-webkit-transform:translateY(10px);}\r\n    100%{-webkit-transform:translateY(0);}\r\n}\r\n@keyframes bounceinB{\r\n    0%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);}\r\n    60%{opacity:1;-webkit-transform:translateY(-30px);transform:translateY(-30px);}\r\n    80%{-webkit-transform:translateY(10px);transform:translateY(10px);}\r\n    100%{-webkit-transform:translateY(0);transform:translateY(0);}\r\n}\r\n/* 弹入-从左 */\r\n@-webkit-keyframes bounceinL{\r\n    0%{opacity:0;-webkit-transform:translateX(-100px);}\r\n    60%{opacity:1;-webkit-transform:translateX(30px);}\r\n    80%{-webkit-transform:translateX(-10px);}\r\n    100%{-webkit-transform:translateX(0);}\r\n}\r\n@keyframes bounceinL{\r\n    0%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px);}\r\n    60%{opacity:1;-webkit-transform:translateX(30px);transform:translateX(30px);}\r\n    80%{-webkit-transform:translateX(-10px);transform:translateX(-10px);}\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n}\r\n/* 弹出 */\r\n@-webkit-keyframes bounceout{\r\n    0%{-webkit-transform:scale(1);}\r\n    25%{-webkit-transform:scale(0.95);}\r\n    50%{opacity:1;-webkit-transform:scale(1.1);}\r\n    100%{opacity:0;-webkit-transform:scale(0.3);}\r\n}\r\n@keyframes bounceout{\r\n    0%{-webkit-transform:scale(1);transform:scale(1);}\r\n    25%{-webkit-transform:scale(0.95);transform:scale(0.95);}\r\n    50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);}\r\n    100%{opacity:0;-webkit-transform:scale(0.3);transform:scale(0.3);}\r\n}\r\n/* 弹出-向上*/\r\n@-webkit-keyframes bounceoutT{\r\n    0%{-webkit-transform:translateY(0);}\r\n    20%{opacity:1;-webkit-transform:translateY(20px);}\r\n    100%{opacity:0;-webkit-transform:translateY(-100px);}\r\n}\r\n@keyframes bounceoutT{\r\n    0%{-webkit-transform:translateY(0);transform:translateY(0);}\r\n    20%{opacity:1;-webkit-transform:translateY(20px);transform:translateY(20px);}\r\n    100%{opacity:0;-webkit-transform:translateY(-100px);transform:translateY(-100px);}\r\n}\r\n/* 弹出-向右*/\r\n@-webkit-keyframes bounceoutR{\r\n    0%{-webkit-transform:translateX(0);}\r\n    20%{opacity:1;-webkit-transform:translateX(-20px);}\r\n    100%{opacity:0;-webkit-transform:translateX(100px);}\r\n}\r\n@keyframes bounceoutR{\r\n    0%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n    20%{opacity:1;-webkit-transform:translateX(-20px);transform:translateX(-20px);}\r\n    100%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px);}\r\n}\r\n/* 弹出-向下 */\r\n@-webkit-keyframes bounceoutB{\r\n    0%{-webkit-transform:translateY(0);}\r\n    20%{opacity:1;-webkit-transform:translateY(-20px);}\r\n    100%{opacity:0;-webkit-transform:translateY(100px);}\r\n}\r\n@keyframes bounceoutB{\r\n    0%{-webkit-transform:translateY(0);transform:translateY(0);}\r\n    20%{opacity:1;-webkit-transform:translateY(-20px);transform:translateY(-20px);}\r\n    100%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);}\r\n}\r\n/* 弹出-向左 */\r\n@-webkit-keyframes bounceoutL{\r\n    0%{-webkit-transform:translateX(0);}\r\n    20%{opacity:1;-webkit-transform:translateX(20px);}\r\n    100%{opacity:0;-webkit-transform:translateX(-100px);}\r\n}\r\n@keyframes bounceoutL{\r\n    0%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n    20%{opacity:1;-webkit-transform:translateX(20px);transform:translateX(20px);}\r\n    100%{opacity:0;-webkit-transform:translateX(-200px);transform:translateX(-200px);}\r\n}\r\n/* 转入 */\r\n@-webkit-keyframes rotatein{\r\n    0%{opacity:0;-webkit-transform:rotate(-200deg);}\r\n    100%{opacity:1;-webkit-transform:rotate(0);}\r\n}\r\n@keyframes rotatein{\r\n    0%{opacity:0;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);}\r\n    100%{opacity:1;-webkit-transform:rotate(0);transform:rotate(0);}\r\n}\r\n/* 转入-从左上 */\r\n@-webkit-keyframes rotateinLT{\r\n    0%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(-90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(0);opacity:1;}\r\n}\r\n@keyframes rotateinLT{\r\n    0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n}\r\n/* 转入-从左下 */\r\n@-webkit-keyframes rotateineftB{\r\n    0%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(0);opacity:1;}\r\n}\r\n@keyframes rotateineftB{\r\n    0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n}\r\n/* 转入-从右上 */\r\n@-webkit-keyframes rotateinRT{\r\n    0%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(0);opacity:1;}\r\n}\r\n@keyframes rotateinRT{\r\n    0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n}\r\n/* 转入-从右下*/\r\n@-webkit-keyframes rotateinRB{\r\n    0%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(-90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(0);opacity:1;}\r\n}\r\n@keyframes rotateinRB{\r\n    0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0;}\r\n    100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n}\r\n/* 转出 */\r\n@-webkit-keyframes rotateout{\r\n    0%{-webkit-transform-origin:center center;-webkit-transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:center center;-webkit-transform:rotate(200deg);opacity:0;}\r\n}\r\n@keyframes rotateout{\r\n    0%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0;}\r\n}\r\n/* 转出-向左上 */\r\n@-webkit-keyframes rotateoutLT{\r\n    0%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(-90deg);opacity:0;}\r\n}\r\n@keyframes rotateoutLT{\r\n    0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0;}\r\n}\r\n/* 转出-向左下 */\r\n@-webkit-keyframes rotateoutLB{\r\n    0%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:left bottom;-webkit-transform:rotate(90deg);opacity:0;}\r\n}\r\n@keyframes rotateoutLB{\r\n    0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0;}\r\n}\r\n/* 转出-向右上 */\r\n@-webkit-keyframes rotateoutRT{\r\n    0%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(90deg);opacity:0;}\r\n}\r\n@keyframes rotateoutRT{\r\n    0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0;}\r\n}\r\n/* 转出-向右下 */\r\n@-webkit-keyframes rotateoutBR{\r\n    0%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:right bottom;-webkit-transform:rotate(-90deg);opacity:0;}\r\n}\r\n@keyframes rotateoutBR{\r\n    0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(0);transform:rotate(0);opacity:1;}\r\n    100%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0;}\r\n}\r\n/* 翻转 */\r\n@-webkit-keyframes flip{\r\n    0%{-webkit-transform:perspective(400px) rotateY(0);-webkit-animation-timing-function:ease-out;}\r\n    40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(170deg);-webkit-animation-timing-function:ease-out;}\r\n    50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);-webkit-animation-timing-function:ease-in;}\r\n    80%{-webkit-transform:perspective(400px) rotateY(360deg) scale(0.95);-webkit-animation-timing-function:ease-in;}\r\n    100%{-webkit-transform:perspective(400px) scale(1);-webkit-animation-timing-function:ease-in;}\r\n}\r\n@keyframes flip{\r\n    0%{-webkit-transform:perspective(400px) rotateY(0);transform:perspective(400px) rotateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}\r\n    40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(170deg);transform:perspective(400px) translateZ(150px) rotateY(170deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}\r\n    50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);transform:perspective(400px) translateZ(150px) rotateY(190deg) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}\r\n    80%{-webkit-transform:perspective(400px) rotateY(360deg) scale(0.95);transform:perspective(400px) rotateY(360deg) scale(0.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}\r\n    100%{-webkit-transform:perspective(400px) scale(1);transform:perspective(400px) scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}\r\n}\r\n/* 翻入-X轴 */\r\n@-webkit-keyframes flipinX{\r\n    0%{-webkit-transform:perspective(400px) rotateX(90deg);opacity:0;}\r\n    40%{-webkit-transform:perspective(400px) rotateX(-10deg);}\r\n    70%{-webkit-transform:perspective(400px) rotateX(10deg);}\r\n    100%{-webkit-transform:perspective(400px) rotateX(0);opacity:1;}\r\n}\r\n@keyframes flipinX{\r\n    0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0;}\r\n    40%{-webkit-transform:perspective(400px) rotateX(-10deg);transform:perspective(400px) rotateX(-10deg);}\r\n    70%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);}\r\n    100%{-webkit-transform:perspective(400px) rotateX(0);transform:perspective(400px) rotateX(0);opacity:1;}\r\n}\r\n/* 翻入-Y轴 */\r\n@-webkit-keyframes flipinY{\r\n    0%{-webkit-transform:perspective(400px) rotateY(90deg);opacity:0;}\r\n    40%{-webkit-transform:perspective(400px) rotateY(-10deg);}\r\n    70%{-webkit-transform:perspective(400px) rotateY(10deg);}\r\n    100%{-webkit-transform:perspective(400px) rotateY(0);opacity:1;}\r\n}\r\n@keyframes flipinY{\r\n    0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0;}\r\n    40%{-webkit-transform:perspective(400px) rotateY(-10deg);transform:perspective(400px) rotateY(-10deg);}\r\n    70%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);}\r\n    100%{-webkit-transform:perspective(400px) rotateY(0);transform:perspective(400px) rotateY(0);opacity:1;}\r\n}\r\n/* 翻出-X轴 */\r\n@-webkit-keyframes flipoutX{\r\n    0%{-webkit-transform:perspective(400px) rotateX(0);opacity:1;}\r\n    100%{-webkit-transform:perspective(400px) rotateX(90deg);opacity:0;}\r\n}\r\n@keyframes flipoutX{\r\n    0%{-webkit-transform:perspective(400px) rotateX(0);transform:perspective(400px) rotateX(0);opacity:1;}\r\n    100%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0;}\r\n}\r\n/* 翻出-Y轴 */\r\n@-webkit-keyframes flipoutY{\r\n    0%{-webkit-transform:perspective(400px) rotateY(0);opacity:1;}\r\n    100%{-webkit-transform:perspective(400px) rotateY(90deg);opacity:0;}\r\n}\r\n@keyframes flipoutY{\r\n    0%{-webkit-transform:perspective(400px) rotateY(0);transform:perspective(400px) rotateY(0);opacity:1;}\r\n    100%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0;}\r\n}\r\n/* 闪烁 */\r\n@-webkit-keyframes flash{\r\n    0%,50%,100%{opacity:1;}\r\n    25%,75%{opacity:0;}\r\n}\r\n@keyframes flash{\r\n    0%,50%,100%{opacity:1;}\r\n    25%,75%{opacity:0;}\r\n}\r\n/* 震颤 */\r\n@-webkit-keyframes shake{\r\n    0%,100%{-webkit-transform:translateX(0);}\r\n    10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);}\r\n    20%,40%,60%,80%{-webkit-transform:translateX(10px);}\r\n}\r\n@keyframes shake{\r\n    0%,100%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n    10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px);}\r\n    20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px);}\r\n}\r\n/* 摇摆 */\r\n@-webkit-keyframes swing{\r\n    20%{-webkit-transform:rotate(15deg);}\r\n    40%{-webkit-transform:rotate(-10deg);}\r\n    60%{-webkit-transform:rotate(5deg);}\r\n    80%{-webkit-transform:rotate(-5deg);}\r\n    100%{-webkit-transform:rotate(0);}\r\n}\r\n@keyframes swing{\r\n    20%{-webkit-transform:rotate(15deg);transform:rotate(15deg);}\r\n    40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg);}\r\n    60%{-webkit-transform:rotate(5deg);transform:rotate(5deg);}\r\n    80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n    100%{-webkit-transform:rotate(0);transform:rotate(0);}\r\n}\r\n/* 摇晃 */\r\n@-webkit-keyframes wobble{\r\n    0%{-webkit-transform:translateX(0);}\r\n    15%{-webkit-transform:translateX(-100px) rotate(-5deg);}\r\n    30%{-webkit-transform:translateX(80px) rotate(3deg);}\r\n    45%{-webkit-transform:translateX(-65px) rotate(-3deg);}\r\n    60%{-webkit-transform:translateX(40px) rotate(2deg);}\r\n    75%{-webkit-transform:translateX(-20px) rotate(-1deg);}\r\n    100%{-webkit-transform:translateX(0);}\r\n}\r\n@keyframes wobble{\r\n    0%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n    15%{-webkit-transform:translateX(-100px) rotate(-5deg);transform:translateX(-100px) rotate(-5deg);}\r\n    30%{-webkit-transform:translateX(80px) rotate(3deg);transform:translateX(80px) rotate(3deg);}\r\n    45%{-webkit-transform:translateX(-65px) rotate(-3deg);transform:translateX(-65px) rotate(-3deg);}\r\n    60%{-webkit-transform:translateX(40px) rotate(2deg);transform:translateX(40px) rotate(2deg);}\r\n    75%{-webkit-transform:translateX(-20px) rotate(-1deg);transform:translateX(-20px) rotate(-1deg);}\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0);}\r\n}\r\n/* 震铃 */\r\n@-webkit-keyframes ring{\r\n    0%{-webkit-transform:scale(1);}\r\n    10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);}\r\n    30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);}\r\n    40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);}\r\n    100%{-webkit-transform:scale(1) rotate(0);}\r\n}\r\n@keyframes ring{\r\n    0%{-webkit-transform:scale(1);transform:scale(1);}\r\n    10%,20%{-webkit-transform:scale(0.9) rotate(-3deg);transform:scale(0.9) rotate(-3deg);}\r\n    30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg);}\r\n    40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg);}\r\n    100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map