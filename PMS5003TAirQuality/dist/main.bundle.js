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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"\">進資工四畢業專題-樹梅派空汙組</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('HistoryPageComponent')\">歷史數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('RealTimePageComponent')\">即時監測</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <!--sidebar-->\n    <div class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n      <nav>\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('HistoryPageComponent')\">歷史數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('RealTimePageComponent')\">即時監測</a>\n          </li>\n        </ul>\n      </nav>\n      <div class=\"copyright\">\n        v17.10.05.0\n      </div>\n    </div>\n    <!--page-->\n    <div class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n      <!--動態page-->\n      <ng-template appDynamicComponent></ng-template>\n    </div>\n</div>\n<!--router-outlet></router-outlet-->\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]) === "function" && _a || Object)
], AppComponent.prototype, "componentHost", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__safe_html_component__ = __webpack_require__("../../../../../src/app/safe-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dynamic_component_service__ = __webpack_require__("../../../../../src/app/dynamic-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dynamic_component_directive__ = __webpack_require__("../../../../../src/app/dynamic-component.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular_4_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_page_map_page_component__ = __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_history_page_history_page_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_history_page_history_table_history_table_component__ = __webpack_require__("../../../../../src/app/pages/history-page/history-table/history-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_real_time_page_real_time_page_component__ = __webpack_require__("../../../../../src/app/pages/real-time-page/real-time-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//GoogleMap


//innerHtml Safer

//Dynamic Change Component


//Charts

//Angular 2 Data Table Bootstrap 4
//https://www.npmjs.com/package/angular-4-data-table-fix







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_map_page_map_page_component__["a" /* MapPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_history_page_history_table_history_table_component__["a" /* HistoryTableComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_real_time_page_real_time_page_component__["a" /* RealTimePageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__safe_html_component__["a" /* Safe */],
            __WEBPACK_IMPORTED_MODULE_13__dynamic_component_directive__["a" /* DynamicComponentDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
            }),
            __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_15_angular_4_data_table__["DataTableModule"]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__pages_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_map_page_map_page_component__["a" /* MapPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_history_page_history_page_component__["a" /* HistoryPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_real_time_page_real_time_page_component__["a" /* RealTimePageComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__dynamic_component_service__["a" /* DynamicComponentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bs-daterangepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDaterangepickerComponent; });
var BsDaterangepickerComponent = (function () {
    function BsDaterangepickerComponent(minDate, maxDate) {
        if (minDate === void 0) { minDate = (new Date(new Date(new Date((new Date()).setMonth((new Date()).getMonth() - 2))).setHours(0, 0, 0, 0))); }
        if (maxDate === void 0) { maxDate = new Date((new Date()).setHours(23, 59, 59)); }
        this.bsRangeValue = [minDate, maxDate];
    }
    BsDaterangepickerComponent.prototype.setTimeByDate = function (minDate, maxDate) {
        this.bsRangeValue[0] = minDate;
        this.bsRangeValue[1] = maxDate;
    };
    BsDaterangepickerComponent.prototype.getTimeByDate = function () {
        return this.bsRangeValue;
    };
    BsDaterangepickerComponent.prototype.getSQLString = function () {
        return [(new Date((new Date((new Date(new Date(this.bsRangeValue[0]))).toISOString())).getTime() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' '),
            (new Date((new Date((new Date(new Date(this.bsRangeValue[1]))).toISOString())).getTime() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' ')
        ];
    };
    return BsDaterangepickerComponent;
}());

//# sourceMappingURL=bs-daterangepicker.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDynamicComponent]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_real_time_page_real_time_page_component__ = __webpack_require__("../../../../../src/app/pages/real-time-page/real-time-page.component.ts");
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
            RealTimePageComponent: __WEBPACK_IMPORTED_MODULE_4__pages_real_time_page_real_time_page_component__["a" /* RealTimePageComponent */],
        };
    }
    DynamicComponentService.prototype.getComponent = function (componentName) {
        return this.components[componentName];
    };
    return DynamicComponentService;
}());
DynamicComponentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DynamicComponentService);

//# sourceMappingURL=dynamic-component.service.js.map

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

module.exports = "<div>\n  <!--\n      <h1>Dashboard</h1>\n      <section class=\"row text-center placeholders\">\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <div class=\"text-muted\">Something else</div>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n              <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n              <h4>Label</h4>\n              <span class=\"text-muted\">Something else</span>\n          </div>\n      </section>\n  -->\n  <div *ngIf=\"lineChartStandby\" style=\"display: block;\">\n    <canvas class=\"chart\" baseChart width=\"400\" height=\"150\"\n            [datasets]=\"lineChartData\"\n            [labels]=\"lineChartLabels\"\n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\"\n            [legend]=\"lineChartLegend\"\n            [chartType]=\"lineChartType\"></canvas>\n  </div>\n\n  <h2>歷史查詢</h2>\n  <input type=\"text\"\n         value=\"{{ bs[0] | date:'yMd'}} - {{ bs[1] | date:'yMd'}}\"\n         bsDaterangepicker [(bsValue)]=\"bs\"  (change)=\"getDataHttp()\">\n    <span style=\"display: inline-block\">\n      <button class=\"btn btn-success\" (click)=\"drp.toggle()\">選擇日期</button>\n      <bs-daterangepicker #drp [(bsValue)]=\"bs\" placement=\"bottom\" style=\"display: block\"></bs-daterangepicker>\n    </span>\n  <!--div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n      <tr class=\"filter-bar\">\n        <th>time</th>\n        <th>PM1</th>\n        <th>PM2.5</th>\n        <th>PM10</th>\n        <th>temp</th>\n        <th>humid</th>\n        <th>clientNum</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let data of datas\">\n        <td [innerHtml]=\"data.time\"></td>\n        <td [innerHtml]=\"data.pm1\"></td>\n        <td [innerHtml]=\"data.pm25\"></td>\n        <td [innerHtml]=\"data.pm10\"></td>\n        <td [innerHtml]=\"data.temp\"></td>\n        <td [innerHtml]=\"data.humid\"></td>\n        <td [innerHtml]=\"data.clientNum\"></td>\n      </tr>\n      </tbody>\n    </table>\n  </div-->\n  <app-history-table [datas]=\"datas\"></app-history-table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_data__ = __webpack_require__("../../../../../src/assets/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_mock_clientInfo__ = __webpack_require__("../../../../../src/assets/mock-clientInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_array_equal__ = __webpack_require__("../../../../../src/assets/array-equal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_daterangepicker_component__ = __webpack_require__("../../../../../src/app/bs-daterangepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__);
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

//https://stackoverflow.com/a/42692601/8706033

var HistoryPageComponent = (function () {
    function HistoryPageComponent(http) {
        this.http = http;
        this.datas = [];
        this.bsRangeValue = new __WEBPACK_IMPORTED_MODULE_6__bs_daterangepicker_component__["a" /* BsDaterangepickerComponent */]();
        this.bs = this.bsRangeValue.getTimeByDate();
        this.dbURL = "/assets/php/getDBByTime.php";
        this.colorList = [];
        this.clientInfo = [];
        // lineChart
        this.loadedLineChartDataTemplate = false;
        this.lineChartDataTemplate = [
            { data: [], label: 'Client 0', fill: false },
            { data: [], label: 'Client 1', fill: false },
            { data: [], label: 'Client 2', fill: false }
        ];
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.lineChartLabels = [];
        this.lineChartOptions = {
            type: 'line',
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        distribution: 'linear'
                    }]
            },
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(0,0,177,0.2)',
                borderColor: 'rgba(0,0,177,1)',
                pointBackgroundColor: 'rgba(0,0,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,0,0,0.2)',
                borderColor: 'rgba(77,0,0,1)',
                pointBackgroundColor: 'rgba(77,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,0,0,1)'
            },
            {
                backgroundColor: 'rgba(0,159,0,0.2)',
                borderColor: 'rgba(0,159,0,1)',
                pointBackgroundColor: 'rgba(0,159,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,159,0,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartStandby = false;
    }
    HistoryPageComponent.prototype.ngOnInit = function () {
        //Generate Radom Color
        this.getClientDataHttp();
        this.getDataHttp();
    };
    HistoryPageComponent.prototype.ngDoCheck = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_5__assets_array_equal__["a" /* arrayEqual */])(this.bs, this.bsRangeValue.getTimeByDate())) {
            this.bsRangeValue.setTimeByDate(this.bs[0], this.bs[1]);
            this.getDataHttp();
            //console.log('bsRangeValue change detect.');
        }
    };
    HistoryPageComponent.prototype.getDataHttp = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('minDate', this.bsRangeValue.getSQLString()[0]);
        params.set('maxDate', this.bsRangeValue.getSQLString()[1]);
        //console.log(params);
        //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
        return this.http.get(this.dbURL, { search: params }).map(function (res) {
            var body = res.json();
            return body || {};
        }).subscribe(function (dataIn) {
            //console.log(dataIn.toString());
            _this.datas = dataIn;
            if (_this.loadedLineChartDataTemplate) {
                _this.setCharts();
            }
        }, function (err) {
            console.error("Err: " + err);
            _this.datas = __WEBPACK_IMPORTED_MODULE_3__assets_mock_data__["a" /* DATA */]; //Use mock data
            if (_this.loadedLineChartDataTemplate) {
                _this.setCharts();
            }
        });
    };
    HistoryPageComponent.prototype.getClientDataHttp = function () {
        var _this = this;
        this.lineChartStandby = false;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get("/assets/php/getClientInfo.php").map(function (res) {
            var body = res.json();
            return body || {};
        }).subscribe(function (dataIn) {
            //console.log(dataIn.toString());
            _this.clientInfo = dataIn;
            _this.setChartsColor(function () {
                var color = new RColor;
                _this.colorList = [];
                for (var i = 0; i < _this.clientInfo.length; i++) {
                    _this.colorList.push(color.get());
                }
            });
        }, function (err) {
            console.error("Err: " + err);
            _this.clientInfo = __WEBPACK_IMPORTED_MODULE_4__assets_mock_clientInfo__["a" /* CLIENTINFO */];
            _this.setChartsColor(function () {
                var color = new RColor;
                _this.colorList = [];
                for (var i = 0; i < _this.clientInfo.length; i++) {
                    _this.colorList.push(color.get());
                }
            });
        });
    };
    // events
    //public chartClicked(e:any):void {
    //  console.log(e);
    //}
    //public chartHovered(e:any):void {
    //  console.log(e);
    //}
    HistoryPageComponent.prototype.setChartsColor = function (callback) {
        var _this = this;
        callback();
        this.lineChartColors.length = 0;
        this.colorList.forEach(function (value, index, array) {
            _this.lineChartColors.push({
                backgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",0.2)",
                borderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",1)",
                pointBackgroundColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",1)",
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: "rgba(" + value[0] + "," + value[1] + "," + value[2] + ",1)"
            });
        });
        this.setLineChartDataTemplate();
    };
    HistoryPageComponent.prototype.setLineChartDataTemplate = function () {
        var lineChartDataTemplate = [];
        this.clientInfo.forEach(function (value, index, array) {
            lineChartDataTemplate.push({ data: [], label: value['name'], fill: false });
        });
        this.lineChartDataTemplate = __WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"](lineChartDataTemplate);
        this.loadedLineChartDataTemplate = true;
        this.setCharts();
    };
    HistoryPageComponent.prototype.setCharts = function () {
        var _this = this;
        this.lineChartData = __WEBPACK_IMPORTED_MODULE_7_lodash__["cloneDeep"](this.lineChartDataTemplate);
        this.datas.forEach(function (value, index, array) {
            _this.lineChartData[value['clientNum']].data.push({ x: value['time'], y: value['pm25'] });
        });
        this.lineChartStandby = true;
        //if (this.chart && this.chart.chart && this.chart.chart.config) {
        //  setTimeout(()=> {
        //    this.chart.chart.config.colors = this.lineChartColors;
        //    //this.chart.chart.config.data.datasets = this.lineChartData;
        //    this.chart.chart.update();
        //  }, 5000);
        //}
    };
    return HistoryPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], HistoryPageComponent.prototype, "chart", void 0);
HistoryPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history-page',
        template: __webpack_require__("../../../../../src/app/pages/history-page/history-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/history-page/history-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
], HistoryPageComponent);

var _a, _b;
//# sourceMappingURL=history-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-table/history-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-table/history-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"datasIsReady\" style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\">\n    <data-table\n                headerTitle=\" \"\n                [items]=\"items\"\n                [itemCount]=\"itemCount\"\n                (reload)=\"reloadItems($event)\"\n    >\n        <data-table-column\n                property=\"time\"\n                header=\"Time\"\n                sortable=\"true\"\n                width=\"200px\">\n        </data-table-column>\n        <data-table-column\n                property=\"pm1\"\n                header=\"PM1\"\n                sortable=\"true\">\n        </data-table-column>\n        <data-table-column\n                property=\"pm25\"\n                header=\"PM2.5\"\n                sortable=\"true\">\n        </data-table-column>\n        <data-table-column\n                property=\"pm10\"\n                header=\"PM10\"\n                sortable=\"true\">\n        </data-table-column>\n        <data-table-column\n                property=\"temp\"\n                header=\"溫度\"\n                sortable=\"true\">\n        </data-table-column>\n        <data-table-column\n                property=\"humid\"\n                header=\"濕度\"\n                sortable=\"true\">\n        </data-table-column>\n    </data-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/history-page/history-table/history-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTableComponent = (function () {
    function HistoryTableComponent() {
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTableResource"](this.datas);
        this.items = [];
        this.itemCount = 0;
        this.datasIsReady = false;
    }
    HistoryTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (Array.isArray(_this.datas)) {
                clearInterval(interval);
                _this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table__["DataTableResource"](_this.datas);
                _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
                _this.datasIsReady = true;
            }
        }, 500);
    };
    HistoryTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    return HistoryTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HistoryTableComponent.prototype, "datas", void 0);
HistoryTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history-table',
        template: __webpack_require__("../../../../../src/app/pages/history-page/history-table/history-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/history-page/history-table/history-table.component.css")]
    })
], HistoryTableComponent);

//# sourceMappingURL=history-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-history-page></app-history-page>"

/***/ }),

/***/ "../../../../../src/app/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/pages/main-page/main-page.component.html"),
    })
], MainPageComponent);

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\nagm-map {\r\n    height: calc(100vh - 55.47px - 1rem);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n    <!--agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n        <agm-snazzy-info-window [isOpen]=\"true\">\r\n            <ng-template>\r\n                !Center!\r\n            </ng-template>\r\n        </agm-snazzy-info-window>\r\n    </agm-marker-->\r\n\r\n    <agm-marker *ngFor=\"let data of clientDatas\" [latitude]=\"data.lat\" [longitude]=\"data.lng\">\r\n        <agm-snazzy-info-window [isOpen]=\"true\" [maxWidth]=\"300\" class=\"myClass\">\r\n            <ng-template>\r\n                Name: {{data.name}}\r\n                <div *ngIf=\"mapMarkerText[data.no]\">\r\n                    PM1: {{mapMarkerText[data.no].pm1}}<br>\r\n                    PM2.5: {{mapMarkerText[data.no].pm25}}<br>\r\n                    PM10: {{mapMarkerText[data.no].pm10}}<br>\r\n                    溫度: {{mapMarkerText[data.no].temp}}<br>\r\n                    濕度: {{mapMarkerText[data.no].humid}}<br>\r\n                    時間: {{mapMarkerText[data.no].time}}\r\n                </div>\r\n            </ng-template>\r\n        </agm-snazzy-info-window>\r\n    </agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/pages/map-page/map-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
/* unused harmony export dataObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_clientInfo__ = __webpack_require__("../../../../../src/assets/mock-clientInfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPageComponent = (function () {
    function MapPageComponent(http) {
        this.http = http;
        this.mapMarkerText = {};
        this.lat = 24.1814718;
        this.lng = 120.6053346;
        this.zoom = 15;
        this.clientDatas = [];
        this.dbURL = "/assets/php/getClientInfo.php";
    }
    MapPageComponent.prototype.ngOnInit = function () {
        this.convertLatLngToNumber(__WEBPACK_IMPORTED_MODULE_3__assets_mock_clientInfo__["a" /* CLIENTINFO */]); //Use mock data
        this.getClientDataHttp();
    };
    MapPageComponent.prototype.getClientDataHttp = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.dbURL).map(function (res) {
            var body = res.json();
            return body || {};
        }).subscribe(function (dataIn) {
            //console.log(dataIn.toString());
            _this.convertLatLngToNumber(dataIn);
        }, function (err) {
            console.error("Err: " + err);
        });
    };
    MapPageComponent.prototype.convertLatLngToNumber = function (datas) {
        datas.forEach(function (value, index, array) {
            //console.log(clientDatas[index].lat);
            datas[index].lat = Number(datas[index].lat);
            datas[index].lng = Number(datas[index].lng);
        });
        this.clientDatas = datas;
    };
    return MapPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapPageComponent.prototype, "mapMarkerText", void 0);
MapPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-page',
        template: __webpack_require__("../../../../../src/app/pages/map-page/map-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map-page/map-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MapPageComponent);

var dataObject = (function () {
    function dataObject() {
    }
    return dataObject;
}());

var _a;
//# sourceMappingURL=map-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/real-time-page/real-time-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/real-time-page/real-time-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-map-page [mapMarkerText]=\"realTimeAirData\"></app-map-page>\n"

/***/ }),

/***/ "../../../../../src/app/pages/real-time-page/real-time-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_mock_realTimeData__ = __webpack_require__("../../../../../src/assets/mock-realTimeData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RealTimePageComponent = (function () {
    function RealTimePageComponent(http) {
        this.http = http;
        this.realTimeAirData = {};
        this.dbURL = "/assets/php/getDBRealTime.php";
    }
    RealTimePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.realTimeAirData = __WEBPACK_IMPORTED_MODULE_3__assets_mock_realTimeData__["a" /* realTimeDATA */]; //Use mock data
        this.getRealTimeAirDataHttp();
        this.getDataInterval = setInterval(function () {
            _this.getRealTimeAirDataHttp();
        }, 61000);
    };
    RealTimePageComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.getDataInterval);
    };
    RealTimePageComponent.prototype.getRealTimeAirDataHttp = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.dbURL).map(function (res) {
            var body = res.json();
            return body || {};
        }).subscribe(function (dataIn) {
            _this.realTimeAirData = {};
            dataIn.forEach(function (value, index, array) {
                _this.realTimeAirData[value.clientNum] = value;
            });
        }, function (err) {
            console.error("Err: " + err);
        });
    };
    return RealTimePageComponent;
}());
RealTimePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-real-time-page',
        template: __webpack_require__("../../../../../src/app/pages/real-time-page/real-time-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/real-time-page/real-time-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RealTimePageComponent);

var _a;
//# sourceMappingURL=real-time-page.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], Safe);

var _a;
//# sourceMappingURL=safe-html.component.js.map

/***/ }),

/***/ "../../../../../src/assets/array-equal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayEqual;
function arrayEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length != b.length)
        return false;
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=array-equal.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-clientInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLIENTINFO; });
var CLIENTINFO = [{ "no": "0", "0": "0", "name": "\u6771\u6d77\u5225\u5885", "1": "\u6771\u6d77\u5225\u5885", "lat": 24.181598, "2": "24.1787141", "lng": 120.589623, "3": "120.5951078" }, { "no": "1", "0": "1", "name": "\u5927\u667a\u6167\u79d1\u6280\u5927\u6a13(ST)", "1": "\u5927\u667a\u6167\u79d1\u6280\u5927\u6a13(ST)", "lat": 24.1811738, "2": "24.1811738", "lng": 120.594807, "3": "120.594807" }, { "no": "2", "0": "2", "name": "\u897f\u5c6f\u798f\u79d1", "1": "\u897f\u5c6f\u798f\u79d1", "lat": 24.1836697, "2": "24.1836697", "lng": 120.6193887, "3": "120.6193887" }];
//# sourceMappingURL=mock-clientInfo.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = [{ "no": "1", "0": "1", "time": "2017-10-02 01:52:31", "1": "2017-10-02 01:52:31", "pm1": "33.3", "2": "33.3", "pm10": "67.6", "3": "67.6", "pm25": "53.1", "4": "53.1", "temp": "26.95", "5": "26.95", "humid": "70.7", "6": "70.7", "clientNum": "1", "7": "1" }, { "no": "2", "0": "2", "time": "2017-10-02 01:52:40", "1": "2017-10-02 01:52:40", "pm1": "31.9", "2": "31.9", "pm10": "60.7778", "3": "60.7778", "pm25": "49", "4": "49", "temp": "28.01", "5": "28.01", "humid": "70.61", "6": "70.61", "clientNum": "2", "7": "2" }, { "no": "3", "0": "3", "time": "2017-10-02 01:52:38", "1": "2017-10-02 01:52:38", "pm1": "37.5", "2": "37.5", "pm10": "73.3333", "3": "73.3333", "pm25": "59.3", "4": "59.3", "temp": "26.99", "5": "26.99", "humid": "74.65", "6": "74.65", "clientNum": "0", "7": "0" }, { "no": "4", "0": "4", "time": "2017-10-02 02:02:33", "1": "2017-10-02 02:02:33", "pm1": "31.5", "2": "31.5", "pm10": "63.2", "3": "63.2", "pm25": "50", "4": "50", "temp": "27.08", "5": "27.08", "humid": "70.32", "6": "70.32", "clientNum": "1", "7": "1" }, { "no": "5", "0": "5", "time": "2017-10-02 02:02:41", "1": "2017-10-02 02:02:41", "pm1": "31.8182", "2": "31.8182", "pm10": "61.2", "3": "61.2", "pm25": "49.8182", "4": "49.8182", "temp": "27.9909", "5": "27.9909", "humid": "70.7636", "6": "70.7636", "clientNum": "2", "7": "2" }, { "no": "6", "0": "6", "time": "2017-10-02 02:02:45", "1": "2017-10-02 02:02:45", "pm1": "35.3", "2": "35.3", "pm10": "71.3333", "3": "71.3333", "pm25": "54.6", "4": "54.6", "temp": "26.75", "5": "26.75", "humid": "75.22", "6": "75.22", "clientNum": "0", "7": "0" }, { "no": "7", "0": "7", "time": "2017-10-02 02:12:34", "1": "2017-10-02 02:12:34", "pm1": "30.6", "2": "30.6", "pm10": "62.6", "3": "62.6", "pm25": "48.9", "4": "48.9", "temp": "27.17", "5": "27.17", "humid": "69.8", "6": "69.8", "clientNum": "1", "7": "1" }, { "no": "8", "0": "8", "time": "2017-10-02 02:12:49", "1": "2017-10-02 02:12:49", "pm1": "33.8", "2": "33.8", "pm10": "68.2222", "3": "68.2222", "pm25": "52.5", "4": "52.5", "temp": "26.78", "5": "26.78", "humid": "75.03", "6": "75.03", "clientNum": "0", "7": "0" }, { "no": "9", "0": "9", "time": "2017-10-02 02:13:41", "1": "2017-10-02 02:13:41", "pm1": "31.9", "2": "31.9", "pm10": "61", "3": "61", "pm25": "49.4", "4": "49.4", "temp": "27.91", "5": "27.91", "humid": "70.99", "6": "70.99", "clientNum": "2", "7": "2" }, { "no": "10", "0": "10", "time": "2017-10-02 02:22:35", "1": "2017-10-02 02:22:35", "pm1": "29.3636", "2": "29.3636", "pm10": "57.7273", "3": "57.7273", "pm25": "45.8182", "4": "45.8182", "temp": "27.1091", "5": "27.1091", "humid": "68.6", "6": "68.6", "clientNum": "1", "7": "1" }, { "no": "11", "0": "11", "time": "2017-10-02 02:22:53", "1": "2017-10-02 02:22:53", "pm1": "32.5", "2": "32.5", "pm10": "65.2", "3": "65.2", "pm25": "49.9", "4": "49.9", "temp": "26.8", "5": "26.8", "humid": "74.51", "6": "74.51", "clientNum": "0", "7": "0" }, { "no": "12", "0": "12", "time": "2017-10-02 02:23:42", "1": "2017-10-02 02:23:42", "pm1": "31.2", "2": "31.2", "pm10": "60.3", "3": "60.3", "pm25": "48.7", "4": "48.7", "temp": "27.94", "5": "27.94", "humid": "70.84", "6": "70.84", "clientNum": "2", "7": "2" }, { "no": "13", "0": "13", "time": "2017-10-02 02:32:54", "1": "2017-10-02 02:32:54", "pm1": "31.3", "2": "31.3", "pm10": "63.5", "3": "63.5", "pm25": "49.2", "4": "49.2", "temp": "26.84", "5": "26.84", "humid": "74.33", "6": "74.33", "clientNum": "0", "7": "0" }, { "no": "14", "0": "14", "time": "2017-10-02 02:33:35", "1": "2017-10-02 02:33:35", "pm1": "28.6", "2": "28.6", "pm10": "57.1", "3": "57.1", "pm25": "45.5", "4": "45.5", "temp": "27.04", "5": "27.04", "humid": "68.72", "6": "68.72", "clientNum": "1", "7": "1" }, { "no": "15", "0": "15", "time": "2017-10-02 02:33:43", "1": "2017-10-02 02:33:43", "pm1": "31.7273", "2": "31.7273", "pm10": "61.0909", "3": "61.0909", "pm25": "49.0909", "4": "49.0909", "temp": "27.9091", "5": "27.9091", "humid": "70.8273", "6": "70.8273", "clientNum": "2", "7": "2" }, { "no": "16", "0": "16", "time": "2017-10-02 02:43:03", "1": "2017-10-02 02:43:03", "pm1": "31.6", "2": "31.6", "pm10": "63", "3": "63", "pm25": "49.1", "4": "49.1", "temp": "26.87", "5": "26.87", "humid": "74.28", "6": "74.28", "clientNum": "0", "7": "0" }, { "no": "17", "0": "17", "time": "2017-10-02 02:43:36", "1": "2017-10-02 02:43:36", "pm1": "29.8182", "2": "29.8182", "pm10": "58.7273", "3": "58.7273", "pm25": "46.8182", "4": "46.8182", "temp": "27.1091", "5": "27.1091", "humid": "71.1727", "6": "71.1727", "clientNum": "1", "7": "1" }, { "no": "18", "0": "18", "time": "2017-10-02 02:44:43", "1": "2017-10-02 02:44:43", "pm1": "31.8", "2": "31.8", "pm10": "62", "3": "62", "pm25": "49.8", "4": "49.8", "temp": "27.92", "5": "27.92", "humid": "71.03", "6": "71.03", "clientNum": "2", "7": "2" }, { "no": "19", "0": "19", "time": "2017-10-02 02:53:09", "1": "2017-10-02 02:53:09", "pm1": "31.6", "2": "31.6", "pm10": "63.6", "3": "63.6", "pm25": "48.8", "4": "48.8", "temp": "26.84", "5": "26.84", "humid": "74.43", "6": "74.43", "clientNum": "0", "7": "0" }, { "no": "20", "0": "20", "time": "2017-10-02 02:54:36", "1": "2017-10-02 02:54:36", "pm1": "29.6", "2": "29.6", "pm10": "58.6", "3": "58.6", "pm25": "46.7", "4": "46.7", "temp": "26.92", "5": "26.92", "humid": "69.75", "6": "69.75", "clientNum": "1", "7": "1" }, { "no": "21", "0": "21", "time": "2017-10-02 02:54:44", "1": "2017-10-02 02:54:44", "pm1": "31.1818", "2": "31.1818", "pm10": "60.2", "3": "60.2", "pm25": "48.6364", "4": "48.6364", "temp": "27.9", "5": "27.9", "humid": "71.0364", "6": "71.0364", "clientNum": "2", "7": "2" }, { "no": "22", "0": "22", "time": "2017-10-02 03:03:15", "1": "2017-10-02 03:03:15", "pm1": "31.7", "2": "31.7", "pm10": "62.9", "3": "62.9", "pm25": "48.3", "4": "48.3", "temp": "26.8", "5": "26.8", "humid": "74.47", "6": "74.47", "clientNum": "0", "7": "0" }, { "no": "23", "0": "23", "time": "2017-10-02 03:04:37", "1": "2017-10-02 03:04:37", "pm1": "29.3", "2": "29.3", "pm10": "58.5556", "3": "58.5556", "pm25": "46.3", "4": "46.3", "temp": "26.92", "5": "26.92", "humid": "71.72", "6": "71.72", "clientNum": "1", "7": "1" }, { "no": "24", "0": "24", "time": "2017-10-02 03:05:44", "1": "2017-10-02 03:05:44", "pm1": "30.1", "2": "30.1", "pm10": "58.4", "3": "58.4", "pm25": "47.4", "4": "47.4", "temp": "27.9", "5": "27.9", "humid": "70.84", "6": "70.84", "clientNum": "2", "7": "2" }, { "no": "25", "0": "25", "time": "2017-10-02 03:13:25", "1": "2017-10-02 03:13:25", "pm1": "32.5", "2": "32.5", "pm10": "66.7", "3": "66.7", "pm25": "50.6", "4": "50.6", "temp": "26.48", "5": "26.48", "humid": "75.73", "6": "75.73", "clientNum": "0", "7": "0" }, { "no": "26", "0": "26", "time": "2017-10-02 03:14:38", "1": "2017-10-02 03:14:38", "pm1": "28.4545", "2": "28.4545", "pm10": "56.8", "3": "56.8", "pm25": "45.3636", "4": "45.3636", "temp": "26.8182", "5": "26.8182", "humid": "70.2", "6": "70.2", "clientNum": "1", "7": "1" }, { "no": "27", "0": "27", "time": "2017-10-02 03:15:45", "1": "2017-10-02 03:15:45", "pm1": "30.0909", "2": "30.0909", "pm10": "57.0909", "3": "57.0909", "pm25": "46.5455", "4": "46.5455", "temp": "27.9455", "5": "27.9455", "humid": "70.7636", "6": "70.7636", "clientNum": "2", "7": "2" }, { "no": "28", "0": "28", "time": "2017-10-02 03:23:29", "1": "2017-10-02 03:23:29", "pm1": "32", "2": "32", "pm10": "64.8", "3": "64.8", "pm25": "49.9", "4": "49.9", "temp": "26.44", "5": "26.44", "humid": "76.16", "6": "76.16", "clientNum": "0", "7": "0" }, { "no": "29", "0": "29", "time": "2017-10-02 03:25:38", "1": "2017-10-02 03:25:38", "pm1": "27.8", "2": "27.8", "pm10": "55.3", "3": "55.3", "pm25": "44.3", "4": "44.3", "temp": "26.59", "5": "26.59", "humid": "70.45", "6": "70.45", "clientNum": "1", "7": "1" }, { "no": "30", "0": "30", "time": "2017-10-02 03:26:46", "1": "2017-10-02 03:26:46", "pm1": "29.1818", "2": "29.1818", "pm10": "55.0909", "3": "55.0909", "pm25": "45.3636", "4": "45.3636", "temp": "27.9364", "5": "27.9364", "humid": "70.4182", "6": "70.4182", "clientNum": "2", "7": "2" }, { "no": "31", "0": "31", "time": "2017-10-02 03:33:34", "1": "2017-10-02 03:33:34", "pm1": "31.4", "2": "31.4", "pm10": "62.4", "3": "62.4", "pm25": "48.4", "4": "48.4", "temp": "26.62", "5": "26.62", "humid": "75.47", "6": "75.47", "clientNum": "0", "7": "0" }, { "no": "32", "0": "32", "time": "2017-10-02 03:35:39", "1": "2017-10-02 03:35:39", "pm1": "27.8182", "2": "27.8182", "pm10": "54.9091", "3": "54.9091", "pm25": "44.1818", "4": "44.1818", "temp": "26.4818", "5": "26.4818", "humid": "70.3273", "6": "70.3273", "clientNum": "1", "7": "1" }, { "no": "33", "0": "33", "time": "2017-10-02 03:37:46", "1": "2017-10-02 03:37:46", "pm1": "28.9", "2": "28.9", "pm10": "54.2", "3": "54.2", "pm25": "44.4", "4": "44.4", "temp": "27.88", "5": "27.88", "humid": "70.43", "6": "70.43", "clientNum": "2", "7": "2" }, { "no": "34", "0": "34", "time": "2017-10-02 03:43:41", "1": "2017-10-02 03:43:41", "pm1": "31.9", "2": "31.9", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.6", "5": "26.6", "humid": "75.53", "6": "75.53", "clientNum": "0", "7": "0" }, { "no": "35", "0": "35", "time": "2017-10-02 03:46:39", "1": "2017-10-02 03:46:39", "pm1": "28.3", "2": "28.3", "pm10": "55.8", "3": "55.8", "pm25": "44.8", "4": "44.8", "temp": "26.54", "5": "26.54", "humid": "70.54", "6": "70.54", "clientNum": "1", "7": "1" }, { "no": "36", "0": "36", "time": "2017-10-02 03:47:47", "1": "2017-10-02 03:47:47", "pm1": "28.9", "2": "28.9", "pm10": "55.3", "3": "55.3", "pm25": "45.6", "4": "45.6", "temp": "27.87", "5": "27.87", "humid": "70.43", "6": "70.43", "clientNum": "2", "7": "2" }, { "no": "37", "0": "37", "time": "2017-10-02 03:53:50", "1": "2017-10-02 03:53:50", "pm1": "31.6", "2": "31.6", "pm10": "64.3", "3": "64.3", "pm25": "49.1", "4": "49.1", "temp": "26.56", "5": "26.56", "humid": "75.72", "6": "75.72", "clientNum": "0", "7": "0" }, { "no": "38", "0": "38", "time": "2017-10-02 03:56:40", "1": "2017-10-02 03:56:40", "pm1": "28.7273", "2": "28.7273", "pm10": "57.3333", "3": "57.3333", "pm25": "45.9091", "4": "45.9091", "temp": "26.6545", "5": "26.6545", "humid": "70.7273", "6": "70.7273", "clientNum": "1", "7": "1" }, { "no": "39", "0": "39", "time": "2017-10-02 03:57:48", "1": "2017-10-02 03:57:48", "pm1": "28.6364", "2": "28.6364", "pm10": "53.8182", "3": "53.8182", "pm25": "44.3636", "4": "44.3636", "temp": "27.8909", "5": "27.8909", "humid": "70.3818", "6": "70.3818", "clientNum": "2", "7": "2" }, { "no": "40", "0": "40", "time": "2017-10-02 04:03:56", "1": "2017-10-02 04:03:56", "pm1": "32.1", "2": "32.1", "pm10": "64.3333", "3": "64.3333", "pm25": "50.1", "4": "50.1", "temp": "26.48", "5": "26.48", "humid": "76.18", "6": "76.18", "clientNum": "0", "7": "0" }, { "no": "41", "0": "41", "time": "2017-10-02 04:07:40", "1": "2017-10-02 04:07:40", "pm1": "29", "2": "29", "pm10": "57.1", "3": "57.1", "pm25": "46.1", "4": "46.1", "temp": "26.6", "5": "26.6", "humid": "70.83", "6": "70.83", "clientNum": "1", "7": "1" }, { "no": "42", "0": "42", "time": "2017-10-02 04:08:48", "1": "2017-10-02 04:08:48", "pm1": "27.9", "2": "27.9", "pm10": "52.3333", "3": "52.3333", "pm25": "43.2", "4": "43.2", "temp": "27.87", "5": "27.87", "humid": "70.33", "6": "70.33", "clientNum": "2", "7": "2" }, { "no": "43", "0": "43", "time": "2017-10-02 04:13:58", "1": "2017-10-02 04:13:58", "pm1": "32.4", "2": "32.4", "pm10": "65", "3": "65", "pm25": "50.6", "4": "50.6", "temp": "26.4", "5": "26.4", "humid": "76.81", "6": "76.81", "clientNum": "0", "7": "0" }, { "no": "44", "0": "44", "time": "2017-10-02 04:17:41", "1": "2017-10-02 04:17:41", "pm1": "29.3636", "2": "29.3636", "pm10": "58.2727", "3": "58.2727", "pm25": "46.5455", "4": "46.5455", "temp": "26.6091", "5": "26.6091", "humid": "71.6", "6": "71.6", "clientNum": "1", "7": "1" }, { "no": "45", "0": "45", "time": "2017-10-02 04:18:49", "1": "2017-10-02 04:18:49", "pm1": "27.2727", "2": "27.2727", "pm10": "50.8", "3": "50.8", "pm25": "42.2727", "4": "42.2727", "temp": "27.8091", "5": "27.8091", "humid": "70.4364", "6": "70.4364", "clientNum": "2", "7": "2" }, { "no": "46", "0": "46", "time": "2017-10-02 04:24:07", "1": "2017-10-02 04:24:07", "pm1": "32.8", "2": "32.8", "pm10": "66.8", "3": "66.8", "pm25": "51.4", "4": "51.4", "temp": "26.4", "5": "26.4", "humid": "76.92", "6": "76.92", "clientNum": "0", "7": "0" }, { "no": "47", "0": "47", "time": "2017-10-02 04:28:42", "1": "2017-10-02 04:28:42", "pm1": "29", "2": "29", "pm10": "57", "3": "57", "pm25": "45.7273", "4": "45.7273", "temp": "26.6818", "5": "26.6818", "humid": "71.3818", "6": "71.3818", "clientNum": "1", "7": "1" }, { "no": "48", "0": "48", "time": "2017-10-02 04:29:49", "1": "2017-10-02 04:29:49", "pm1": "26.9", "2": "26.9", "pm10": "49.3", "3": "49.3", "pm25": "41.1", "4": "41.1", "temp": "27.83", "5": "27.83", "humid": "70.35", "6": "70.35", "clientNum": "2", "7": "2" }, { "no": "49", "0": "49", "time": "2017-10-02 04:34:14", "1": "2017-10-02 04:34:14", "pm1": "33", "2": "33", "pm10": "66.4444", "3": "66.4444", "pm25": "51.6", "4": "51.6", "temp": "26.44", "5": "26.44", "humid": "76.56", "6": "76.56", "clientNum": "0", "7": "0" }, { "no": "50", "0": "50", "time": "2017-10-02 04:39:42", "1": "2017-10-02 04:39:42", "pm1": "28.4", "2": "28.4", "pm10": "56.3", "3": "56.3", "pm25": "45.1", "4": "45.1", "temp": "26.61", "5": "26.61", "humid": "70.06", "6": "70.06", "clientNum": "1", "7": "1" }, { "no": "51", "0": "51", "time": "2017-10-02 04:39:50", "1": "2017-10-02 04:39:50", "pm1": "26.3636", "2": "26.3636", "pm10": "48.5455", "3": "48.5455", "pm25": "40.0909", "4": "40.0909", "temp": "27.8818", "5": "27.8818", "humid": "70.2909", "6": "70.2909", "clientNum": "2", "7": "2" }, { "no": "52", "0": "52", "time": "2017-10-02 04:44:22", "1": "2017-10-02 04:44:22", "pm1": "32.2", "2": "32.2", "pm10": "65.7", "3": "65.7", "pm25": "50.1", "4": "50.1", "temp": "26.47", "5": "26.47", "humid": "76.49", "6": "76.49", "clientNum": "0", "7": "0" }, { "no": "53", "0": "53", "time": "2017-10-02 04:49:43", "1": "2017-10-02 04:49:43", "pm1": "27.7273", "2": "27.7273", "pm10": "54.5", "3": "54.5", "pm25": "43.5455", "4": "43.5455", "temp": "26.7364", "5": "26.7364", "humid": "71.7091", "6": "71.7091", "clientNum": "1", "7": "1" }, { "no": "54", "0": "54", "time": "2017-10-02 04:50:50", "1": "2017-10-02 04:50:50", "pm1": "26.1", "2": "26.1", "pm10": "48.8", "3": "48.8", "pm25": "40.6", "4": "40.6", "temp": "27.86", "5": "27.86", "humid": "70.31", "6": "70.31", "clientNum": "2", "7": "2" }, { "no": "55", "0": "55", "time": "2017-10-02 04:54:26", "1": "2017-10-02 04:54:26", "pm1": "31.3", "2": "31.3", "pm10": "62.4", "3": "62.4", "pm25": "48.5", "4": "48.5", "temp": "26.5", "5": "26.5", "humid": "76.19", "6": "76.19", "clientNum": "0", "7": "0" }, { "no": "56", "0": "56", "time": "2017-10-02 05:00:43", "1": "2017-10-02 05:00:43", "pm1": "27.3", "2": "27.3", "pm10": "54.6", "3": "54.6", "pm25": "44", "4": "44", "temp": "26.91", "5": "26.91", "humid": "71.78", "6": "71.78", "clientNum": "1", "7": "1" }, { "no": "57", "0": "57", "time": "2017-10-02 05:00:51", "1": "2017-10-02 05:00:51", "pm1": "26.9", "2": "26.9", "pm10": "49.5", "3": "49.5", "pm25": "41.1", "4": "41.1", "temp": "27.81", "5": "27.81", "humid": "70.44", "6": "70.44", "clientNum": "2", "7": "2" }, { "no": "58", "0": "58", "time": "2017-10-02 05:04:31", "1": "2017-10-02 05:04:31", "pm1": "30.3", "2": "30.3", "pm10": "61.4", "3": "61.4", "pm25": "47.3", "4": "47.3", "temp": "26.45", "5": "26.45", "humid": "76.3", "6": "76.3", "clientNum": "0", "7": "0" }, { "no": "59", "0": "59", "time": "2017-10-02 05:10:44", "1": "2017-10-02 05:10:44", "pm1": "26.9091", "2": "26.9091", "pm10": "52.8182", "3": "52.8182", "pm25": "42.3636", "4": "42.3636", "temp": "26.6545", "5": "26.6545", "humid": "69.4545", "6": "69.4545", "clientNum": "1", "7": "1" }, { "no": "60", "0": "60", "time": "2017-10-02 05:10:52", "1": "2017-10-02 05:10:52", "pm1": "27", "2": "27", "pm10": "50.2", "3": "50.2", "pm25": "41.9091", "4": "41.9091", "temp": "27.7", "5": "27.7", "humid": "70.8818", "6": "70.8818", "clientNum": "2", "7": "2" }, { "no": "61", "0": "61", "time": "2017-10-02 05:14:36", "1": "2017-10-02 05:14:36", "pm1": "30.9", "2": "30.9", "pm10": "61.6", "3": "61.6", "pm25": "47.5", "4": "47.5", "temp": "26.38", "5": "26.38", "humid": "76.38", "6": "76.38", "clientNum": "0", "7": "0" }, { "no": "62", "0": "62", "time": "2017-10-02 05:21:44", "1": "2017-10-02 05:21:44", "pm1": "27.1", "2": "27.1", "pm10": "52.9", "3": "52.9", "pm25": "42.7", "4": "42.7", "temp": "26.57", "5": "26.57", "humid": "69.45", "6": "69.45", "clientNum": "1", "7": "1" }, { "no": "63", "0": "63", "time": "2017-10-02 05:21:52", "1": "2017-10-02 05:21:52", "pm1": "26.7", "2": "26.7", "pm10": "49.3", "3": "49.3", "pm25": "41.2", "4": "41.2", "temp": "27.71", "5": "27.71", "humid": "70.94", "6": "70.94", "clientNum": "2", "7": "2" }, { "no": "64", "0": "64", "time": "2017-10-02 05:24:42", "1": "2017-10-02 05:24:42", "pm1": "31.4", "2": "31.4", "pm10": "62.3333", "3": "62.3333", "pm25": "48.4", "4": "48.4", "temp": "26.39", "5": "26.39", "humid": "75.8", "6": "75.8", "clientNum": "0", "7": "0" }, { "no": "65", "0": "65", "time": "2017-10-02 05:31:45", "1": "2017-10-02 05:31:45", "pm1": "26.4", "2": "26.4", "pm10": "52.6", "3": "52.6", "pm25": "42.5", "4": "42.5", "temp": "26.62", "5": "26.62", "humid": "70.27", "6": "70.27", "clientNum": "1", "7": "1" }, { "no": "66", "0": "66", "time": "2017-10-02 05:31:53", "1": "2017-10-02 05:31:53", "pm1": "27.2727", "2": "27.2727", "pm10": "50.7273", "3": "50.7273", "pm25": "42.2727", "4": "42.2727", "temp": "27.6818", "5": "27.6818", "humid": "70.9182", "6": "70.9182", "clientNum": "2", "7": "2" }, { "no": "67", "0": "67", "time": "2017-10-02 05:34:46", "1": "2017-10-02 05:34:46", "pm1": "31.6", "2": "31.6", "pm10": "62.4444", "3": "62.4444", "pm25": "48.6", "4": "48.6", "temp": "26.41", "5": "26.41", "humid": "75.55", "6": "75.55", "clientNum": "0", "7": "0" }, { "no": "68", "0": "68", "time": "2017-10-02 05:41:46", "1": "2017-10-02 05:41:46", "pm1": "27.8182", "2": "27.8182", "pm10": "54.8182", "3": "54.8182", "pm25": "43.9091", "4": "43.9091", "temp": "26.7273", "5": "26.7273", "humid": "72.1091", "6": "72.1091", "clientNum": "1", "7": "1" }, { "no": "69", "0": "69", "time": "2017-10-02 05:42:53", "1": "2017-10-02 05:42:53", "pm1": "27.3", "2": "27.3", "pm10": "50.7", "3": "50.7", "pm25": "42.2", "4": "42.2", "temp": "27.61", "5": "27.61", "humid": "71.19", "6": "71.19", "clientNum": "2", "7": "2" }, { "no": "70", "0": "70", "time": "2017-10-02 05:44:55", "1": "2017-10-02 05:44:55", "pm1": "31.1", "2": "31.1", "pm10": "60.9", "3": "60.9", "pm25": "47.4", "4": "47.4", "temp": "26.41", "5": "26.41", "humid": "75.66", "6": "75.66", "clientNum": "0", "7": "0" }, { "no": "71", "0": "71", "time": "2017-10-02 05:52:46", "1": "2017-10-02 05:52:46", "pm1": "27.1", "2": "27.1", "pm10": "51.6", "3": "51.6", "pm25": "42.1", "4": "42.1", "temp": "26.82", "5": "26.82", "humid": "69.96", "6": "69.96", "clientNum": "1", "7": "1" }, { "no": "72", "0": "72", "time": "2017-10-02 05:52:54", "1": "2017-10-02 05:52:54", "pm1": "27.4", "2": "27.4", "pm10": "52.1", "3": "52.1", "pm25": "42.8", "4": "42.8", "temp": "27.69", "5": "27.69", "humid": "71.07", "6": "71.07", "clientNum": "2", "7": "2" }, { "no": "73", "0": "73", "time": "2017-10-02 05:54:59", "1": "2017-10-02 05:54:59", "pm1": "30.8", "2": "30.8", "pm10": "62.2", "3": "62.2", "pm25": "47.8", "4": "47.8", "temp": "26.31", "5": "26.31", "humid": "76.04", "6": "76.04", "clientNum": "0", "7": "0" }, { "no": "74", "0": "74", "time": "2017-10-02 06:02:47", "1": "2017-10-02 06:02:47", "pm1": "27.8182", "2": "27.8182", "pm10": "55", "3": "55", "pm25": "44.0909", "4": "44.0909", "temp": "26.6636", "5": "26.6636", "humid": "70.9455", "6": "70.9455", "clientNum": "1", "7": "1" }, { "no": "75", "0": "75", "time": "2017-10-02 06:02:55", "1": "2017-10-02 06:02:55", "pm1": "28", "2": "28", "pm10": "52.0909", "3": "52.0909", "pm25": "43.4545", "4": "43.4545", "temp": "27.6909", "5": "27.6909", "humid": "71.0455", "6": "71.0455", "clientNum": "2", "7": "2" }, { "no": "76", "0": "76", "time": "2017-10-02 06:05:05", "1": "2017-10-02 06:05:05", "pm1": "30.1", "2": "30.1", "pm10": "60.7", "3": "60.7", "pm25": "47.3", "4": "47.3", "temp": "26.38", "5": "26.38", "humid": "75.86", "6": "75.86", "clientNum": "0", "7": "0" }, { "no": "77", "0": "77", "time": "2017-10-02 06:13:47", "1": "2017-10-02 06:13:47", "pm1": "27.1", "2": "27.1", "pm10": "53.3333", "3": "53.3333", "pm25": "43.5", "4": "43.5", "temp": "26.62", "5": "26.62", "humid": "70.54", "6": "70.54", "clientNum": "1", "7": "1" }, { "no": "78", "0": "78", "time": "2017-10-02 06:13:55", "1": "2017-10-02 06:13:55", "pm1": "27.6", "2": "27.6", "pm10": "51.875", "3": "51.875", "pm25": "43.1", "4": "43.1", "temp": "27.72", "5": "27.72", "humid": "70.71", "6": "70.71", "clientNum": "2", "7": "2" }, { "no": "79", "0": "79", "time": "2017-10-02 06:15:11", "1": "2017-10-02 06:15:11", "pm1": "30.1", "2": "30.1", "pm10": "60.6667", "3": "60.6667", "pm25": "46.6", "4": "46.6", "temp": "26.4", "5": "26.4", "humid": "75.71", "6": "75.71", "clientNum": "0", "7": "0" }, { "no": "80", "0": "80", "time": "2017-10-02 06:23:48", "1": "2017-10-02 06:23:48", "pm1": "27.0909", "2": "27.0909", "pm10": "53.5455", "3": "53.5455", "pm25": "42.9091", "4": "42.9091", "temp": "26.4636", "5": "26.4636", "humid": "70.8091", "6": "70.8091", "clientNum": "1", "7": "1" }, { "no": "81", "0": "81", "time": "2017-10-02 06:23:56", "1": "2017-10-02 06:23:56", "pm1": "27.7273", "2": "27.7273", "pm10": "51.0909", "3": "51.0909", "pm25": "42.5455", "4": "42.5455", "temp": "27.8273", "5": "27.8273", "humid": "70.1545", "6": "70.1545", "clientNum": "2", "7": "2" }, { "no": "82", "0": "82", "time": "2017-10-02 06:25:19", "1": "2017-10-02 06:25:19", "pm1": "31.1", "2": "31.1", "pm10": "61.9", "3": "61.9", "pm25": "48", "4": "48", "temp": "26.42", "5": "26.42", "humid": "75.59", "6": "75.59", "clientNum": "0", "7": "0" }, { "no": "83", "0": "83", "time": "2017-10-02 06:34:48", "1": "2017-10-02 06:34:48", "pm1": "27.8", "2": "27.8", "pm10": "54.4", "3": "54.4", "pm25": "44.4", "4": "44.4", "temp": "26.63", "5": "26.63", "humid": "71.6", "6": "71.6", "clientNum": "1", "7": "1" }, { "no": "84", "0": "84", "time": "2017-10-02 06:34:56", "1": "2017-10-02 06:34:56", "pm1": "27.9", "2": "27.9", "pm10": "50.9", "3": "50.9", "pm25": "42.5", "4": "42.5", "temp": "27.89", "5": "27.89", "humid": "69.53", "6": "69.53", "clientNum": "2", "7": "2" }, { "no": "85", "0": "85", "time": "2017-10-02 06:35:25", "1": "2017-10-02 06:35:25", "pm1": "31.4", "2": "31.4", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.4", "5": "26.4", "humid": "75.72", "6": "75.72", "clientNum": "0", "7": "0" }, { "no": "86", "0": "86", "time": "2017-10-02 06:44:49", "1": "2017-10-02 06:44:49", "pm1": "27.6", "2": "27.6", "pm10": "54.1", "3": "54.1", "pm25": "43.7", "4": "43.7", "temp": "26.66", "5": "26.66", "humid": "71.36", "6": "71.36", "clientNum": "1", "7": "1" }, { "no": "87", "0": "87", "time": "2017-10-02 06:44:57", "1": "2017-10-02 06:44:57", "pm1": "27.7", "2": "27.7", "pm10": "50.7778", "3": "50.7778", "pm25": "42.2", "4": "42.2", "temp": "27.97", "5": "27.97", "humid": "68.83", "6": "68.83", "clientNum": "2", "7": "2" }, { "no": "88", "0": "88", "time": "2017-10-02 06:45:33", "1": "2017-10-02 06:45:33", "pm1": "31.5", "2": "31.5", "pm10": "64", "3": "64", "pm25": "49.1", "4": "49.1", "temp": "26.36", "5": "26.36", "humid": "76.06", "6": "76.06", "clientNum": "0", "7": "0" }, { "no": "89", "0": "89", "time": "2017-10-02 06:54:50", "1": "2017-10-02 06:54:50", "pm1": "26.8182", "2": "26.8182", "pm10": "52.1818", "3": "52.1818", "pm25": "42.4545", "4": "42.4545", "temp": "26.8545", "5": "26.8545", "humid": "71.2455", "6": "71.2455", "clientNum": "1", "7": "1" }, { "no": "90", "0": "90", "time": "2017-10-02 06:54:58", "1": "2017-10-02 06:54:58", "pm1": "27.2727", "2": "27.2727", "pm10": "49.6364", "3": "49.6364", "pm25": "41.4545", "4": "41.4545", "temp": "28.1182", "5": "28.1182", "humid": "68.6091", "6": "68.6091", "clientNum": "2", "7": "2" }, { "no": "91", "0": "91", "time": "2017-10-02 06:55:36", "1": "2017-10-02 06:55:36", "pm1": "31.3", "2": "31.3", "pm10": "63.7", "3": "63.7", "pm25": "49", "4": "49", "temp": "26.37", "5": "26.37", "humid": "76.03", "6": "76.03", "clientNum": "0", "7": "0" }, { "no": "92", "0": "92", "time": "2017-10-02 07:05:45", "1": "2017-10-02 07:05:45", "pm1": "45.6", "2": "45.6", "pm10": "92.4", "3": "92.4", "pm25": "75.2", "4": "75.2", "temp": "26.43", "5": "26.43", "humid": "75.64", "6": "75.64", "clientNum": "0", "7": "0" }, { "no": "93", "0": "93", "time": "2017-10-02 07:05:50", "1": "2017-10-02 07:05:50", "pm1": "26.8", "2": "26.8", "pm10": "52.7", "3": "52.7", "pm25": "42.5", "4": "42.5", "temp": "27.14", "5": "27.14", "humid": "70.83", "6": "70.83", "clientNum": "1", "7": "1" }, { "no": "94", "0": "94", "time": "2017-10-02 07:05:58", "1": "2017-10-02 07:05:58", "pm1": "27", "2": "27", "pm10": "50", "3": "50", "pm25": "41", "4": "41", "temp": "28.21", "5": "28.21", "humid": "68.17", "6": "68.17", "clientNum": "2", "7": "2" }, { "no": "95", "0": "95", "time": "2017-10-02 07:15:51", "1": "2017-10-02 07:15:51", "pm1": "29.3", "2": "29.3", "pm10": "61.2", "3": "61.2", "pm25": "47.6", "4": "47.6", "temp": "27.3", "5": "27.3", "humid": "70.18", "6": "70.18", "clientNum": "1", "7": "1" }, { "no": "96", "0": "96", "time": "2017-10-02 07:15:48", "1": "2017-10-02 07:15:48", "pm1": "37", "2": "37", "pm10": "77.5", "3": "77.5", "pm25": "60.7", "4": "60.7", "temp": "26.54", "5": "26.54", "humid": "75.07", "6": "75.07", "clientNum": "0", "7": "0" }, { "no": "97", "0": "97", "time": "2017-10-02 07:15:59", "1": "2017-10-02 07:15:59", "pm1": "26.5455", "2": "26.5455", "pm10": "49", "3": "49", "pm25": "41.1818", "4": "41.1818", "temp": "28.2364", "5": "28.2364", "humid": "68.2364", "6": "68.2364", "clientNum": "2", "7": "2" }, { "no": "98", "0": "98", "time": "2017-10-02 07:25:52", "1": "2017-10-02 07:25:52", "pm1": "27.2", "2": "27.2", "pm10": "53.8", "3": "53.8", "pm25": "43.5", "4": "43.5", "temp": "27.45", "5": "27.45", "humid": "69.06", "6": "69.06", "clientNum": "1", "7": "1" }, { "no": "99", "0": "99", "time": "2017-10-02 07:25:53", "1": "2017-10-02 07:25:53", "pm1": "32.3", "2": "32.3", "pm10": "68.1111", "3": "68.1111", "pm25": "50.9", "4": "50.9", "temp": "26.61", "5": "26.61", "humid": "74.48", "6": "74.48", "clientNum": "0", "7": "0" }, { "no": "100", "0": "100", "time": "2017-10-02 07:26:59", "1": "2017-10-02 07:26:59", "pm1": "27", "2": "27", "pm10": "49.2", "3": "49.2", "pm25": "41.3", "4": "41.3", "temp": "28.43", "5": "28.43", "humid": "67.55", "6": "67.55", "clientNum": "2", "7": "2" }, { "no": "101", "0": "101", "time": "2017-10-02 07:35:53", "1": "2017-10-02 07:35:53", "pm1": "26.5455", "2": "26.5455", "pm10": "50.8182", "3": "50.8182", "pm25": "41.3636", "4": "41.3636", "temp": "27.7909", "5": "27.7909", "humid": "68.4909", "6": "68.4909", "clientNum": "1", "7": "1" }, { "no": "102", "0": "102", "time": "2017-10-02 07:35:59", "1": "2017-10-02 07:35:59", "pm1": "31.9", "2": "31.9", "pm10": "65", "3": "65", "pm25": "50.4", "4": "50.4", "temp": "26.54", "5": "26.54", "humid": "74.24", "6": "74.24", "clientNum": "0", "7": "0" }, { "no": "103", "0": "103", "time": "2017-10-02 07:37:00", "1": "2017-10-02 07:37:00", "pm1": "28.2", "2": "28.2", "pm10": "52.4444", "3": "52.4444", "pm25": "43.3", "4": "43.3", "temp": "28.55", "5": "28.55", "humid": "67.07", "6": "67.07", "clientNum": "2", "7": "2" }, { "no": "104", "0": "104", "time": "2017-10-02 07:46:05", "1": "2017-10-02 07:46:05", "pm1": "32.2", "2": "32.2", "pm10": "66", "3": "66", "pm25": "51.2", "4": "51.2", "temp": "26.68", "5": "26.68", "humid": "73.64", "6": "73.64", "clientNum": "0", "7": "0" }, { "no": "105", "0": "105", "time": "2017-10-02 07:46:53", "1": "2017-10-02 07:46:53", "pm1": "27", "2": "27", "pm10": "52.6", "3": "52.6", "pm25": "42.7", "4": "42.7", "temp": "27.98", "5": "27.98", "humid": "67.86", "6": "67.86", "clientNum": "1", "7": "1" }, { "no": "106", "0": "106", "time": "2017-10-02 07:47:01", "1": "2017-10-02 07:47:01", "pm1": "27.6364", "2": "27.6364", "pm10": "52.5", "3": "52.5", "pm25": "43.1818", "4": "43.1818", "temp": "28.5909", "5": "28.5909", "humid": "66.7727", "6": "66.7727", "clientNum": "2", "7": "2" }, { "no": "107", "0": "107", "time": "2017-10-02 07:56:09", "1": "2017-10-02 07:56:09", "pm1": "31.2", "2": "31.2", "pm10": "65.3", "3": "65.3", "pm25": "49.7", "4": "49.7", "temp": "26.7", "5": "26.7", "humid": "73.06", "6": "73.06", "clientNum": "0", "7": "0" }, { "no": "108", "0": "108", "time": "2017-10-02 07:56:54", "1": "2017-10-02 07:56:54", "pm1": "26.2727", "2": "26.2727", "pm10": "49.9091", "3": "49.9091", "pm25": "41.0909", "4": "41.0909", "temp": "28.2636", "5": "28.2636", "humid": "66.0636", "6": "66.0636", "clientNum": "1", "7": "1" }, { "no": "109", "0": "109", "time": "2017-10-02 07:58:01", "1": "2017-10-02 07:58:01", "pm1": "28", "2": "28", "pm10": "52.3", "3": "52.3", "pm25": "43.3", "4": "43.3", "temp": "28.46", "5": "28.46", "humid": "66.91", "6": "66.91", "clientNum": "2", "7": "2" }, { "no": "110", "0": "110", "time": "2017-10-02 08:06:14", "1": "2017-10-02 08:06:14", "pm1": "29.4", "2": "29.4", "pm10": "59.2222", "3": "59.2222", "pm25": "46.4", "4": "46.4", "temp": "26.7", "5": "26.7", "humid": "71.7", "6": "71.7", "clientNum": "0", "7": "0" }, { "no": "111", "0": "111", "time": "2017-10-02 08:07:54", "1": "2017-10-02 08:07:54", "pm1": "25.9", "2": "25.9", "pm10": "50.3", "3": "50.3", "pm25": "41.7", "4": "41.7", "temp": "28.68", "5": "28.68", "humid": "63.92", "6": "63.92", "clientNum": "1", "7": "1" }, { "no": "112", "0": "112", "time": "2017-10-02 08:08:02", "1": "2017-10-02 08:08:02", "pm1": "27.3636", "2": "27.3636", "pm10": "52.2727", "3": "52.2727", "pm25": "43", "4": "43", "temp": "28.3545", "5": "28.3545", "humid": "66.3909", "6": "66.3909", "clientNum": "2", "7": "2" }, { "no": "113", "0": "113", "time": "2017-10-02 08:16:20", "1": "2017-10-02 08:16:20", "pm1": "27", "2": "27", "pm10": "53.9", "3": "53.9", "pm25": "42.4", "4": "42.4", "temp": "26.78", "5": "26.78", "humid": "69.58", "6": "69.58", "clientNum": "0", "7": "0" }, { "no": "114", "0": "114", "time": "2017-10-02 08:17:55", "1": "2017-10-02 08:17:55", "pm1": "26.4", "2": "26.4", "pm10": "50.2", "3": "50.2", "pm25": "41.1", "4": "41.1", "temp": "28.99", "5": "28.99", "humid": "62.36", "6": "62.36", "clientNum": "1", "7": "1" }, { "no": "115", "0": "115", "time": "2017-10-02 08:19:02", "1": "2017-10-02 08:19:02", "pm1": "27.3", "2": "27.3", "pm10": "50", "3": "50", "pm25": "41.8", "4": "41.8", "temp": "28.45", "5": "28.45", "humid": "66.17", "6": "66.17", "clientNum": "2", "7": "2" }, { "no": "116", "0": "116", "time": "2017-10-02 08:26:28", "1": "2017-10-02 08:26:28", "pm1": "26.4", "2": "26.4", "pm10": "52.8", "3": "52.8", "pm25": "41.7", "4": "41.7", "temp": "26.89", "5": "26.89", "humid": "68.37", "6": "68.37", "clientNum": "0", "7": "0" }, { "no": "117", "0": "117", "time": "2017-10-02 08:27:56", "1": "2017-10-02 08:27:56", "pm1": "26.1818", "2": "26.1818", "pm10": "50.0909", "3": "50.0909", "pm25": "41.0909", "4": "41.0909", "temp": "28.9", "5": "28.9", "humid": "61.9818", "6": "61.9818", "clientNum": "1", "7": "1" }, { "no": "118", "0": "118", "time": "2017-10-02 08:29:03", "1": "2017-10-02 08:29:03", "pm1": "26.6", "2": "26.6", "pm10": "49.2", "3": "49.2", "pm25": "41.2", "4": "41.2", "temp": "28.86", "5": "28.86", "humid": "64.76", "6": "64.76", "clientNum": "2", "7": "2" }, { "no": "119", "0": "119", "time": "2017-10-02 08:36:33", "1": "2017-10-02 08:36:33", "pm1": "27.5", "2": "27.5", "pm10": "54.4", "3": "54.4", "pm25": "43.3", "4": "43.3", "temp": "27.01", "5": "27.01", "humid": "68.36", "6": "68.36", "clientNum": "0", "7": "0" }, { "no": "120", "0": "120", "time": "2017-10-02 08:38:56", "1": "2017-10-02 08:38:56", "pm1": "22.4", "2": "22.4", "pm10": "40.9", "3": "40.9", "pm25": "35.2", "4": "35.2", "temp": "28.77", "5": "28.77", "humid": "56.67", "6": "56.67", "clientNum": "1", "7": "1" }, { "no": "121", "0": "121", "time": "2017-10-02 08:39:04", "1": "2017-10-02 08:39:04", "pm1": "25.5455", "2": "25.5455", "pm10": "47.9091", "3": "47.9091", "pm25": "39.7273", "4": "39.7273", "temp": "29.2273", "5": "29.2273", "humid": "62.7727", "6": "62.7727", "clientNum": "2", "7": "2" }, { "no": "122", "0": "122", "time": "2017-10-02 08:46:36", "1": "2017-10-02 08:46:36", "pm1": "31.3", "2": "31.3", "pm10": "63.8", "3": "63.8", "pm25": "49", "4": "49", "temp": "27.1", "5": "27.1", "humid": "69.73", "6": "69.73", "clientNum": "0", "7": "0" }, { "no": "123", "0": "123", "time": "2017-10-02 08:48:57", "1": "2017-10-02 08:48:57", "pm1": "21", "2": "21", "pm10": "36.4545", "3": "36.4545", "pm25": "32.3636", "4": "32.3636", "temp": "28.1273", "5": "28.1273", "humid": "53.0364", "6": "53.0364", "clientNum": "1", "7": "1" }, { "no": "124", "0": "124", "time": "2017-10-02 08:50:04", "1": "2017-10-02 08:50:04", "pm1": "24.2", "2": "24.2", "pm10": "45.5", "3": "45.5", "pm25": "38.6", "4": "38.6", "temp": "29.21", "5": "29.21", "humid": "60.05", "6": "60.05", "clientNum": "2", "7": "2" }, { "no": "125", "0": "125", "time": "2017-10-02 08:56:44", "1": "2017-10-02 08:56:44", "pm1": "30.7", "2": "30.7", "pm10": "63.3", "3": "63.3", "pm25": "48.1", "4": "48.1", "temp": "27.1", "5": "27.1", "humid": "69.27", "6": "69.27", "clientNum": "0", "7": "0" }, { "no": "126", "0": "126", "time": "2017-10-02 08:59:57", "1": "2017-10-02 08:59:57", "pm1": "20.5", "2": "20.5", "pm10": "34.1", "3": "34.1", "pm25": "30.7", "4": "30.7", "temp": "27.67", "5": "27.67", "humid": "49.86", "6": "49.86", "clientNum": "1", "7": "1" }, { "no": "127", "0": "127", "time": "2017-10-02 09:00:05", "1": "2017-10-02 09:00:05", "pm1": "24.4545", "2": "24.4545", "pm10": "45.1818", "3": "45.1818", "pm25": "38", "4": "38", "temp": "29.2909", "5": "29.2909", "humid": "59.9091", "6": "59.9091", "clientNum": "2", "7": "2" }, { "no": "128", "0": "128", "time": "2017-10-02 09:06:49", "1": "2017-10-02 09:06:49", "pm1": "31.3", "2": "31.3", "pm10": "64.2", "3": "64.2", "pm25": "49.3", "4": "49.3", "temp": "27.13", "5": "27.13", "humid": "69.69", "6": "69.69", "clientNum": "0", "7": "0" }, { "no": "129", "0": "129", "time": "2017-10-02 09:09:58", "1": "2017-10-02 09:09:58", "pm1": "21", "2": "21", "pm10": "37.5", "3": "37.5", "pm25": "32.3", "4": "32.3", "temp": "27.4", "5": "27.4", "humid": "51.35", "6": "51.35", "clientNum": "1", "7": "1" }, { "no": "130", "0": "130", "time": "2017-10-02 09:11:06", "1": "2017-10-02 09:11:06", "pm1": "25.3636", "2": "25.3636", "pm10": "46.8182", "3": "46.8182", "pm25": "39.5455", "4": "39.5455", "temp": "29.7727", "5": "29.7727", "humid": "58.5818", "6": "58.5818", "clientNum": "2", "7": "2" }, { "no": "131", "0": "131", "time": "2017-10-02 09:16:51", "1": "2017-10-02 09:16:51", "pm1": "32.4", "2": "32.4", "pm10": "66.7", "3": "66.7", "pm25": "51", "4": "51", "temp": "27.27", "5": "27.27", "humid": "70.21", "6": "70.21", "clientNum": "0", "7": "0" }, { "no": "132", "0": "132", "time": "2017-10-02 09:20:00", "1": "2017-10-02 09:20:00", "pm1": "20.8182", "2": "20.8182", "pm10": "35.8182", "3": "35.8182", "pm25": "31.7273", "4": "31.7273", "temp": "27.5909", "5": "27.5909", "humid": "50.1909", "6": "50.1909", "clientNum": "1", "7": "1" }, { "no": "133", "0": "133", "time": "2017-10-02 09:22:06", "1": "2017-10-02 09:22:06", "pm1": "25.6", "2": "25.6", "pm10": "47", "3": "47", "pm25": "39.4", "4": "39.4", "temp": "30.15", "5": "30.15", "humid": "57.86", "6": "57.86", "clientNum": "2", "7": "2" }, { "no": "134", "0": "134", "time": "2017-10-02 09:26:53", "1": "2017-10-02 09:26:53", "pm1": "31.8", "2": "31.8", "pm10": "66.6", "3": "66.6", "pm25": "50.8", "4": "50.8", "temp": "27.35", "5": "27.35", "humid": "69.46", "6": "69.46", "clientNum": "0", "7": "0" }, { "no": "135", "0": "135", "time": "2017-10-02 09:31:00", "1": "2017-10-02 09:31:00", "pm1": "22.9", "2": "22.9", "pm10": "40.6", "3": "40.6", "pm25": "35.1", "4": "35.1", "temp": "27.55", "5": "27.55", "humid": "51.72", "6": "51.72", "clientNum": "1", "7": "1" }, { "no": "136", "0": "136", "time": "2017-10-02 09:32:07", "1": "2017-10-02 09:32:07", "pm1": "27.2", "2": "27.2", "pm10": "51.6", "3": "51.6", "pm25": "42.6", "4": "42.6", "temp": "29.8", "5": "29.8", "humid": "58.65", "6": "58.65", "clientNum": "2", "7": "2" }, { "no": "137", "0": "137", "time": "2017-10-02 09:37:01", "1": "2017-10-02 09:37:01", "pm1": "32.5", "2": "32.5", "pm10": "66.1", "3": "66.1", "pm25": "50.5", "4": "50.5", "temp": "27.39", "5": "27.39", "humid": "68.61", "6": "68.61", "clientNum": "0", "7": "0" }, { "no": "138", "0": "138", "time": "2017-10-02 09:41:01", "1": "2017-10-02 09:41:01", "pm1": "21.7273", "2": "21.7273", "pm10": "38.7", "3": "38.7", "pm25": "34.2727", "4": "34.2727", "temp": "27.6182", "5": "27.6182", "humid": "51.0182", "6": "51.0182", "clientNum": "1", "7": "1" }, { "no": "139", "0": "139", "time": "2017-10-02 09:42:10", "1": "2017-10-02 09:42:10", "pm1": "26.4", "2": "26.4", "pm10": "49.8", "3": "49.8", "pm25": "41.3", "4": "41.3", "temp": "29.6", "5": "29.6", "humid": "59.55", "6": "59.55", "clientNum": "2", "7": "2" }, { "no": "140", "0": "140", "time": "2017-10-02 09:47:08", "1": "2017-10-02 09:47:08", "pm1": "32.5", "2": "32.5", "pm10": "66.1111", "3": "66.1111", "pm25": "51.5", "4": "51.5", "temp": "27.48", "5": "27.48", "humid": "68.32", "6": "68.32", "clientNum": "0", "7": "0" }, { "no": "141", "0": "141", "time": "2017-10-02 09:52:01", "1": "2017-10-02 09:52:01", "pm1": "21.6", "2": "21.6", "pm10": "38.2", "3": "38.2", "pm25": "33.6", "4": "33.6", "temp": "27.65", "5": "27.65", "humid": "50.38", "6": "50.38", "clientNum": "1", "7": "1" }, { "no": "142", "0": "142", "time": "2017-10-02 09:52:11", "1": "2017-10-02 09:52:11", "pm1": "28", "2": "28", "pm10": "52.7273", "3": "52.7273", "pm25": "43.4545", "4": "43.4545", "temp": "29.6091", "5": "29.6091", "humid": "59.6909", "6": "59.6909", "clientNum": "2", "7": "2" }, { "no": "143", "0": "143", "time": "2017-10-02 09:57:12", "1": "2017-10-02 09:57:12", "pm1": "31.9", "2": "31.9", "pm10": "65.2222", "3": "65.2222", "pm25": "49.8", "4": "49.8", "temp": "27.51", "5": "27.51", "humid": "68.32", "6": "68.32", "clientNum": "0", "7": "0" }, { "no": "144", "0": "144", "time": "2017-10-02 10:02:02", "1": "2017-10-02 10:02:02", "pm1": "23.3636", "2": "23.3636", "pm10": "43.7273", "3": "43.7273", "pm25": "37", "4": "37", "temp": "27.6727", "5": "27.6727", "humid": "52.3909", "6": "52.3909", "clientNum": "1", "7": "1" }, { "no": "145", "0": "145", "time": "2017-10-02 10:03:11", "1": "2017-10-02 10:03:11", "pm1": "29.7", "2": "29.7", "pm10": "56.5", "3": "56.5", "pm25": "46.3", "4": "46.3", "temp": "29.57", "5": "29.57", "humid": "59.97", "6": "59.97", "clientNum": "2", "7": "2" }, { "no": "146", "0": "146", "time": "2017-10-02 10:07:20", "1": "2017-10-02 10:07:20", "pm1": "32.4", "2": "32.4", "pm10": "66.3", "3": "66.3", "pm25": "51.1", "4": "51.1", "temp": "27.62", "5": "27.62", "humid": "67.39", "6": "67.39", "clientNum": "0", "7": "0" }, { "no": "147", "0": "147", "time": "2017-10-02 10:13:12", "1": "2017-10-02 10:13:12", "pm1": "29.4", "2": "29.4", "pm10": "56.1111", "3": "56.1111", "pm25": "46.2", "4": "46.2", "temp": "29.48", "5": "29.48", "humid": "60.16", "6": "60.16", "clientNum": "2", "7": "2" }, { "no": "148", "0": "148", "time": "2017-10-02 10:13:02", "1": "2017-10-02 10:13:02", "pm1": "22.1111", "2": "22.1111", "pm10": "38.8889", "3": "38.8889", "pm25": "34.2222", "4": "34.2222", "temp": "27.8667", "5": "27.8667", "humid": "49.6111", "6": "49.6111", "clientNum": "1", "7": "1" }, { "no": "149", "0": "149", "time": "2017-10-02 10:17:23", "1": "2017-10-02 10:17:23", "pm1": "33.5", "2": "33.5", "pm10": "68.5", "3": "68.5", "pm25": "52.9", "4": "52.9", "temp": "27.75", "5": "27.75", "humid": "66.59", "6": "66.59", "clientNum": "0", "7": "0" }, { "no": "150", "0": "150", "time": "2017-10-02 10:23:13", "1": "2017-10-02 10:23:13", "pm1": "30", "2": "30", "pm10": "57.0909", "3": "57.0909", "pm25": "46.9091", "4": "46.9091", "temp": "29.9545", "5": "29.9545", "humid": "58.2091", "6": "58.2091", "clientNum": "2", "7": "2" }, { "no": "151", "0": "151", "time": "2017-10-02 10:23:33", "1": "2017-10-02 10:23:33", "pm1": "23.2", "2": "23.2", "pm10": "44.1111", "3": "44.1111", "pm25": "36.5", "4": "36.5", "temp": "27.92", "5": "27.92", "humid": "49.95", "6": "49.95", "clientNum": "1", "7": "1" }, { "no": "152", "0": "152", "time": "2017-10-02 10:27:26", "1": "2017-10-02 10:27:26", "pm1": "41.1", "2": "41.1", "pm10": "81.8", "3": "81.8", "pm25": "67.5", "4": "67.5", "temp": "27.87", "5": "27.87", "humid": "67.18", "6": "67.18", "clientNum": "0", "7": "0" }, { "no": "153", "0": "153", "time": "2017-10-02 10:33:34", "1": "2017-10-02 10:33:34", "pm1": "25.5455", "2": "25.5455", "pm10": "50.1", "3": "50.1", "pm25": "40.4545", "4": "40.4545", "temp": "27.7909", "5": "27.7909", "humid": "50.4455", "6": "50.4455", "clientNum": "1", "7": "1" }, { "no": "154", "0": "154", "time": "2017-10-02 10:34:13", "1": "2017-10-02 10:34:13", "pm1": "30.9", "2": "30.9", "pm10": "60.2", "3": "60.2", "pm25": "48.9", "4": "48.9", "temp": "29.74", "5": "29.74", "humid": "58.51", "6": "58.51", "clientNum": "2", "7": "2" }, { "no": "155", "0": "155", "time": "2017-10-02 10:37:28", "1": "2017-10-02 10:37:28", "pm1": "39.5", "2": "39.5", "pm10": "78.1", "3": "78.1", "pm25": "65", "4": "65", "temp": "27.97", "5": "27.97", "humid": "66.51", "6": "66.51", "clientNum": "0", "7": "0" }, { "no": "156", "0": "156", "time": "2017-10-02 10:44:15", "1": "2017-10-02 10:44:15", "pm1": "31", "2": "31", "pm10": "60", "3": "60", "pm25": "48.7", "4": "48.7", "temp": "30.19", "5": "30.19", "humid": "57.21", "6": "57.21", "clientNum": "2", "7": "2" }, { "no": "157", "0": "157", "time": "2017-10-02 10:44:35", "1": "2017-10-02 10:44:35", "pm1": "23.8182", "2": "23.8182", "pm10": "44.9091", "3": "44.9091", "pm25": "37.9091", "4": "37.9091", "temp": "27.7727", "5": "27.7727", "humid": "46.5818", "6": "46.5818", "clientNum": "1", "7": "1" }, { "no": "158", "0": "158", "time": "2017-10-02 10:47:38", "1": "2017-10-02 10:47:38", "pm1": "40.6", "2": "40.6", "pm10": "80.5", "3": "80.5", "pm25": "66.9", "4": "66.9", "temp": "28.17", "5": "28.17", "humid": "65.64", "6": "65.64", "clientNum": "0", "7": "0" }, { "no": "159", "0": "159", "time": "2017-10-02 10:54:19", "1": "2017-10-02 10:54:19", "pm1": "33", "2": "33", "pm10": "64.2", "3": "64.2", "pm25": "51.5", "4": "51.5", "temp": "30.05", "5": "30.05", "humid": "57.26", "6": "57.26", "clientNum": "2", "7": "2" }, { "no": "160", "0": "160", "time": "2017-10-02 10:55:35", "1": "2017-10-02 10:55:35", "pm1": "24.8", "2": "24.8", "pm10": "48.2222", "3": "48.2222", "pm25": "40", "4": "40", "temp": "27.68", "5": "27.68", "humid": "47.68", "6": "47.68", "clientNum": "1", "7": "1" }, { "no": "161", "0": "161", "time": "2017-10-02 10:57:46", "1": "2017-10-02 10:57:46", "pm1": "44.3", "2": "44.3", "pm10": "88.6", "3": "88.6", "pm25": "73.2", "4": "73.2", "temp": "28.21", "5": "28.21", "humid": "66.54", "6": "66.54", "clientNum": "0", "7": "0" }, { "no": "162", "0": "162", "time": "2017-10-02 11:04:20", "1": "2017-10-02 11:04:20", "pm1": "34.3", "2": "34.3", "pm10": "66.6", "3": "66.6", "pm25": "54.9", "4": "54.9", "temp": "30.35", "5": "30.35", "humid": "57.69", "6": "57.69", "clientNum": "2", "7": "2" }, { "no": "163", "0": "163", "time": "2017-10-02 11:05:36", "1": "2017-10-02 11:05:36", "pm1": "26.5455", "2": "26.5455", "pm10": "52", "3": "52", "pm25": "42.7273", "4": "42.7273", "temp": "27.8455", "5": "27.8455", "humid": "47.7273", "6": "47.7273", "clientNum": "1", "7": "1" }, { "no": "164", "0": "164", "time": "2017-10-02 11:07:49", "1": "2017-10-02 11:07:49", "pm1": "46.4", "2": "46.4", "pm10": "89.1", "3": "89.1", "pm25": "76.1", "4": "76.1", "temp": "28.23", "5": "28.23", "humid": "66.79", "6": "66.79", "clientNum": "0", "7": "0" }, { "no": "165", "0": "165", "time": "2017-10-02 11:14:21", "1": "2017-10-02 11:14:21", "pm1": "33.5455", "2": "33.5455", "pm10": "65.3", "3": "65.3", "pm25": "53", "4": "53", "temp": "30.4364", "5": "30.4364", "humid": "57.1", "6": "57.1", "clientNum": "2", "7": "2" }, { "no": "166", "0": "166", "time": "2017-10-02 11:16:36", "1": "2017-10-02 11:16:36", "pm1": "25.4", "2": "25.4", "pm10": "47.5", "3": "47.5", "pm25": "39.3", "4": "39.3", "temp": "27.77", "5": "27.77", "humid": "47.46", "6": "47.46", "clientNum": "1", "7": "1" }, { "no": "167", "0": "167", "time": "2017-10-02 11:17:54", "1": "2017-10-02 11:17:54", "pm1": "44", "2": "44", "pm10": "84", "3": "84", "pm25": "71.5", "4": "71.5", "temp": "28.46", "5": "28.46", "humid": "66.71", "6": "66.71", "clientNum": "0", "7": "0" }, { "no": "168", "0": "168", "time": "2017-10-02 11:25:21", "1": "2017-10-02 11:25:21", "pm1": "34.1", "2": "34.1", "pm10": "65.8", "3": "65.8", "pm25": "53.3", "4": "53.3", "temp": "30.14", "5": "30.14", "humid": "57.87", "6": "57.87", "clientNum": "2", "7": "2" }, { "no": "169", "0": "169", "time": "2017-10-02 11:26:38", "1": "2017-10-02 11:26:38", "pm1": "23.2", "2": "23.2", "pm10": "44.3333", "3": "44.3333", "pm25": "37.1", "4": "37.1", "temp": "27.75", "5": "27.75", "humid": "45.63", "6": "45.63", "clientNum": "1", "7": "1" }, { "no": "170", "0": "170", "time": "2017-10-02 11:28:06", "1": "2017-10-02 11:28:06", "pm1": "42.3", "2": "42.3", "pm10": "79.8", "3": "79.8", "pm25": "68", "4": "68", "temp": "28.55", "5": "28.55", "humid": "66.48", "6": "66.48", "clientNum": "0", "7": "0" }, { "no": "171", "0": "171", "time": "2017-10-02 11:35:22", "1": "2017-10-02 11:35:22", "pm1": "33.8", "2": "33.8", "pm10": "64.7778", "3": "64.7778", "pm25": "52.8", "4": "52.8", "temp": "30.19", "5": "30.19", "humid": "58.36", "6": "58.36", "clientNum": "2", "7": "2" }, { "no": "172", "0": "172", "time": "2017-10-02 11:36:39", "1": "2017-10-02 11:36:39", "pm1": "25.7273", "2": "25.7273", "pm10": "50.8182", "3": "50.8182", "pm25": "40.9091", "4": "40.9091", "temp": "27.6818", "5": "27.6818", "humid": "49.1273", "6": "49.1273", "clientNum": "1", "7": "1" }, { "no": "173", "0": "173", "time": "2017-10-02 11:38:10", "1": "2017-10-02 11:38:10", "pm1": "39.9", "2": "39.9", "pm10": "76.2222", "3": "76.2222", "pm25": "63.5", "4": "63.5", "temp": "28.55", "5": "28.55", "humid": "66.54", "6": "66.54", "clientNum": "0", "7": "0" }, { "no": "174", "0": "174", "time": "2017-10-02 11:45:23", "1": "2017-10-02 11:45:23", "pm1": "33", "2": "33", "pm10": "63.5", "3": "63.5", "pm25": "51.3", "4": "51.3", "temp": "30.42", "5": "30.42", "humid": "56.98", "6": "56.98", "clientNum": "2", "7": "2" }, { "no": "175", "0": "175", "time": "2017-10-02 11:47:39", "1": "2017-10-02 11:47:39", "pm1": "25.5", "2": "25.5", "pm10": "47.8", "3": "47.8", "pm25": "39.2", "4": "39.2", "temp": "27.99", "5": "27.99", "humid": "50.71", "6": "50.71", "clientNum": "1", "7": "1" }, { "no": "176", "0": "176", "time": "2017-10-02 11:48:20", "1": "2017-10-02 11:48:20", "pm1": "37.3", "2": "37.3", "pm10": "73.5556", "3": "73.5556", "pm25": "59.2", "4": "59.2", "temp": "28.53", "5": "28.53", "humid": "66.06", "6": "66.06", "clientNum": "0", "7": "0" }, { "no": "177", "0": "177", "time": "2017-10-02 11:55:24", "1": "2017-10-02 11:55:24", "pm1": "31.9091", "2": "31.9091", "pm10": "60.7273", "3": "60.7273", "pm25": "49.2727", "4": "49.2727", "temp": "30.5364", "5": "30.5364", "humid": "57.5091", "6": "57.5091", "clientNum": "2", "7": "2" }, { "no": "178", "0": "178", "time": "2017-10-02 11:57:40", "1": "2017-10-02 11:57:40", "pm1": "23.5455", "2": "23.5455", "pm10": "43.2727", "3": "43.2727", "pm25": "36.2727", "4": "36.2727", "temp": "27.9364", "5": "27.9364", "humid": "47.8091", "6": "47.8091", "clientNum": "1", "7": "1" }, { "no": "179", "0": "179", "time": "2017-10-02 11:58:23", "1": "2017-10-02 11:58:23", "pm1": "35.1", "2": "35.1", "pm10": "71.4", "3": "71.4", "pm25": "56.3", "4": "56.3", "temp": "28.73", "5": "28.73", "humid": "65.97", "6": "65.97", "clientNum": "0", "7": "0" }, { "no": "180", "0": "180", "time": "2017-10-02 12:06:25", "1": "2017-10-02 12:06:25", "pm1": "31.2727", "2": "31.2727", "pm10": "59.3636", "3": "59.3636", "pm25": "48.2727", "4": "48.2727", "temp": "30.4091", "5": "30.4091", "humid": "57.5273", "6": "57.5273", "clientNum": "2", "7": "2" }, { "no": "181", "0": "181", "time": "2017-10-02 12:08:26", "1": "2017-10-02 12:08:26", "pm1": "34.3", "2": "34.3", "pm10": "68.8", "3": "68.8", "pm25": "53.4", "4": "53.4", "temp": "28.9", "5": "28.9", "humid": "64.77", "6": "64.77", "clientNum": "0", "7": "0" }, { "no": "182", "0": "182", "time": "2017-10-02 12:08:40", "1": "2017-10-02 12:08:40", "pm1": "23.1", "2": "23.1", "pm10": "42.7", "3": "42.7", "pm25": "36.3", "4": "36.3", "temp": "27.69", "5": "27.69", "humid": "47.12", "6": "47.12", "clientNum": "1", "7": "1" }, { "no": "183", "0": "183", "time": "2017-10-02 12:17:25", "1": "2017-10-02 12:17:25", "pm1": "30.5", "2": "30.5", "pm10": "56.7", "3": "56.7", "pm25": "46.7", "4": "46.7", "temp": "30.19", "5": "30.19", "humid": "57.19", "6": "57.19", "clientNum": "2", "7": "2" }, { "no": "184", "0": "184", "time": "2017-10-02 12:18:30", "1": "2017-10-02 12:18:30", "pm1": "34.5", "2": "34.5", "pm10": "69.8", "3": "69.8", "pm25": "54.3", "4": "54.3", "temp": "28.77", "5": "28.77", "humid": "65.26", "6": "65.26", "clientNum": "0", "7": "0" }, { "no": "185", "0": "185", "time": "2017-10-02 12:18:41", "1": "2017-10-02 12:18:41", "pm1": "24.2", "2": "24.2", "pm10": "44.6", "3": "44.6", "pm25": "37.3", "4": "37.3", "temp": "27.62", "5": "27.62", "humid": "48.49", "6": "48.49", "clientNum": "1", "7": "1" }, { "no": "186", "0": "186", "time": "2017-10-02 12:27:26", "1": "2017-10-02 12:27:26", "pm1": "29.8182", "2": "29.8182", "pm10": "55.9091", "3": "55.9091", "pm25": "45.6364", "4": "45.6364", "temp": "30.3273", "5": "30.3273", "humid": "57.1182", "6": "57.1182", "clientNum": "2", "7": "2" }, { "no": "187", "0": "187", "time": "2017-10-02 12:28:43", "1": "2017-10-02 12:28:43", "pm1": "33.1", "2": "33.1", "pm10": "66.5", "3": "66.5", "pm25": "51.5", "4": "51.5", "temp": "28.74", "5": "28.74", "humid": "64.67", "6": "64.67", "clientNum": "0", "7": "0" }, { "no": "188", "0": "188", "time": "2017-10-02 12:28:42", "1": "2017-10-02 12:28:42", "pm1": "22.5", "2": "22.5", "pm10": "41", "3": "41", "pm25": "35.2", "4": "35.2", "temp": "27.54", "5": "27.54", "humid": "46.83", "6": "46.83", "clientNum": "1", "7": "1" }, { "no": "189", "0": "189", "time": "2017-10-02 12:38:27", "1": "2017-10-02 12:38:27", "pm1": "29.4545", "2": "29.4545", "pm10": "55.5455", "3": "55.5455", "pm25": "45.5455", "4": "45.5455", "temp": "30.3818", "5": "30.3818", "humid": "57.1818", "6": "57.1818", "clientNum": "2", "7": "2" }, { "no": "190", "0": "190", "time": "2017-10-02 12:38:47", "1": "2017-10-02 12:38:47", "pm1": "21.9", "2": "21.9", "pm10": "38.7", "3": "38.7", "pm25": "33.7", "4": "33.7", "temp": "27.26", "5": "27.26", "humid": "45.89", "6": "45.89", "clientNum": "1", "7": "1" }, { "no": "191", "0": "191", "time": "2017-10-02 12:38:47", "1": "2017-10-02 12:38:47", "pm1": "33.4", "2": "33.4", "pm10": "68.7778", "3": "68.7778", "pm25": "52.3", "4": "52.3", "temp": "28.82", "5": "28.82", "humid": "64.42", "6": "64.42", "clientNum": "0", "7": "0" }, { "no": "192", "0": "192", "time": "2017-10-02 12:48:48", "1": "2017-10-02 12:48:48", "pm1": "23.8182", "2": "23.8182", "pm10": "44", "3": "44", "pm25": "36.9091", "4": "36.9091", "temp": "27.1909", "5": "27.1909", "humid": "47.8909", "6": "47.8909", "clientNum": "1", "7": "1" }, { "no": "193", "0": "193", "time": "2017-10-02 12:49:00", "1": "2017-10-02 12:49:00", "pm1": "33.6", "2": "33.6", "pm10": "68.1", "3": "68.1", "pm25": "52.6", "4": "52.6", "temp": "28.93", "5": "28.93", "humid": "63.84", "6": "63.84", "clientNum": "0", "7": "0" }, { "no": "194", "0": "194", "time": "2017-10-02 12:49:27", "1": "2017-10-02 12:49:27", "pm1": "28.4", "2": "28.4", "pm10": "53.2", "3": "53.2", "pm25": "44.1", "4": "44.1", "temp": "30.28", "5": "30.28", "humid": "56.9", "6": "56.9", "clientNum": "2", "7": "2" }, { "no": "195", "0": "195", "time": "2017-10-02 12:59:10", "1": "2017-10-02 12:59:10", "pm1": "32.3", "2": "32.3", "pm10": "65", "3": "65", "pm25": "50.5", "4": "50.5", "temp": "29.1", "5": "29.1", "humid": "62.4", "6": "62.4", "clientNum": "0", "7": "0" }, { "no": "196", "0": "196", "time": "2017-10-02 12:59:28", "1": "2017-10-02 12:59:28", "pm1": "29.2727", "2": "29.2727", "pm10": "55.8889", "3": "55.8889", "pm25": "45.8182", "4": "45.8182", "temp": "30.3364", "5": "30.3364", "humid": "57.3182", "6": "57.3182", "clientNum": "2", "7": "2" }, { "no": "197", "0": "197", "time": "2017-10-02 12:59:48", "1": "2017-10-02 12:59:48", "pm1": "24.8", "2": "24.8", "pm10": "47.5", "3": "47.5", "pm25": "39", "4": "39", "temp": "27.23", "5": "27.23", "humid": "50.18", "6": "50.18", "clientNum": "1", "7": "1" }, { "no": "198", "0": "198", "time": "2017-10-02 13:09:18", "1": "2017-10-02 13:09:18", "pm1": "31.1", "2": "31.1", "pm10": "62.1", "3": "62.1", "pm25": "48.8", "4": "48.8", "temp": "29.34", "5": "29.34", "humid": "60.6", "6": "60.6", "clientNum": "0", "7": "0" }, { "no": "199", "0": "199", "time": "2017-10-02 13:09:50", "1": "2017-10-02 13:09:50", "pm1": "23.8", "2": "23.8", "pm10": "45", "3": "45", "pm25": "37.4", "4": "37.4", "temp": "27.3", "5": "27.3", "humid": "48.75", "6": "48.75", "clientNum": "1", "7": "1" }, { "no": "200", "0": "200", "time": "2017-10-02 13:10:29", "1": "2017-10-02 13:10:29", "pm1": "29.6", "2": "29.6", "pm10": "54.7778", "3": "54.7778", "pm25": "45.3", "4": "45.3", "temp": "30.25", "5": "30.25", "humid": "56.89", "6": "56.89", "clientNum": "2", "7": "2" }, { "no": "201", "0": "201", "time": "2017-10-02 13:19:27", "1": "2017-10-02 13:19:27", "pm1": "31.4", "2": "31.4", "pm10": "62.6", "3": "62.6", "pm25": "48.7", "4": "48.7", "temp": "29.52", "5": "29.52", "humid": "60.15", "6": "60.15", "clientNum": "0", "7": "0" }, { "no": "202", "0": "202", "time": "2017-10-02 13:19:51", "1": "2017-10-02 13:19:51", "pm1": "24.3", "2": "24.3", "pm10": "46.3333", "3": "46.3333", "pm25": "38.1", "4": "38.1", "temp": "27.52", "5": "27.52", "humid": "50.4", "6": "50.4", "clientNum": "1", "7": "1" }, { "no": "203", "0": "203", "time": "2017-10-02 13:20:30", "1": "2017-10-02 13:20:30", "pm1": "28.2727", "2": "28.2727", "pm10": "52.5455", "3": "52.5455", "pm25": "43.5455", "4": "43.5455", "temp": "30.2636", "5": "30.2636", "humid": "56.2727", "6": "56.2727", "clientNum": "2", "7": "2" }, { "no": "204", "0": "204", "time": "2017-10-02 13:29:29", "1": "2017-10-02 13:29:29", "pm1": "30.6", "2": "30.6", "pm10": "61", "3": "61", "pm25": "47.9", "4": "47.9", "temp": "29.7", "5": "29.7", "humid": "59.3", "6": "59.3", "clientNum": "0", "7": "0" }, { "no": "205", "0": "205", "time": "2017-10-02 13:29:53", "1": "2017-10-02 13:29:53", "pm1": "23.1", "2": "23.1", "pm10": "41.6", "3": "41.6", "pm25": "35.4", "4": "35.4", "temp": "27.45", "5": "27.45", "humid": "47.94", "6": "47.94", "clientNum": "1", "7": "1" }, { "no": "206", "0": "206", "time": "2017-10-02 13:31:30", "1": "2017-10-02 13:31:30", "pm1": "27.3", "2": "27.3", "pm10": "50.3", "3": "50.3", "pm25": "42.1", "4": "42.1", "temp": "30.35", "5": "30.35", "humid": "55.98", "6": "55.98", "clientNum": "2", "7": "2" }, { "no": "207", "0": "207", "time": "2017-10-02 13:39:39", "1": "2017-10-02 13:39:39", "pm1": "30.4", "2": "30.4", "pm10": "61.4", "3": "61.4", "pm25": "47.8", "4": "47.8", "temp": "29.78", "5": "29.78", "humid": "58.78", "6": "58.78", "clientNum": "0", "7": "0" }, { "no": "208", "0": "208", "time": "2017-10-02 13:39:56", "1": "2017-10-02 13:39:56", "pm1": "23", "2": "23", "pm10": "42.6", "3": "42.6", "pm25": "35.9", "4": "35.9", "temp": "27.29", "5": "27.29", "humid": "49.68", "6": "49.68", "clientNum": "1", "7": "1" }, { "no": "209", "0": "209", "time": "2017-10-02 13:41:32", "1": "2017-10-02 13:41:32", "pm1": "27.4", "2": "27.4", "pm10": "51.6", "3": "51.6", "pm25": "42.6", "4": "42.6", "temp": "30.26", "5": "30.26", "humid": "56.79", "6": "56.79", "clientNum": "2", "7": "2" }, { "no": "210", "0": "210", "time": "2017-10-02 13:49:45", "1": "2017-10-02 13:49:45", "pm1": "29.7", "2": "29.7", "pm10": "59.4", "3": "59.4", "pm25": "46.2", "4": "46.2", "temp": "29.6", "5": "29.6", "humid": "58.47", "6": "58.47", "clientNum": "0", "7": "0" }, { "no": "211", "0": "211", "time": "2017-10-02 13:50:09", "1": "2017-10-02 13:50:09", "pm1": "23.2", "2": "23.2", "pm10": "43.1", "3": "43.1", "pm25": "36.6", "4": "36.6", "temp": "27.45", "5": "27.45", "humid": "50.01", "6": "50.01", "clientNum": "1", "7": "1" }, { "no": "212", "0": "212", "time": "2017-10-02 13:51:33", "1": "2017-10-02 13:51:33", "pm1": "27.7", "2": "27.7", "pm10": "52", "3": "52", "pm25": "43.4", "4": "43.4", "temp": "30.49", "5": "30.49", "humid": "56.85", "6": "56.85", "clientNum": "2", "7": "2" }, { "no": "213", "0": "213", "time": "2017-10-02 13:59:51", "1": "2017-10-02 13:59:51", "pm1": "28.9", "2": "28.9", "pm10": "56.4", "3": "56.4", "pm25": "44.6", "4": "44.6", "temp": "29.37", "5": "29.37", "humid": "58.86", "6": "58.86", "clientNum": "0", "7": "0" }, { "no": "214", "0": "214", "time": "2017-10-02 14:00:10", "1": "2017-10-02 14:00:10", "pm1": "21.8", "2": "21.8", "pm10": "37.2222", "3": "37.2222", "pm25": "32.8", "4": "32.8", "temp": "27.45", "5": "27.45", "humid": "47.43", "6": "47.43", "clientNum": "1", "7": "1" }, { "no": "215", "0": "215", "time": "2017-10-02 14:01:34", "1": "2017-10-02 14:01:34", "pm1": "27.3", "2": "27.3", "pm10": "51.3", "3": "51.3", "pm25": "42.9", "4": "42.9", "temp": "30.37", "5": "30.37", "humid": "56.92", "6": "56.92", "clientNum": "2", "7": "2" }, { "no": "216", "0": "216", "time": "2017-10-02 14:09:56", "1": "2017-10-02 14:09:56", "pm1": "29.1", "2": "29.1", "pm10": "57.1", "3": "57.1", "pm25": "44.9", "4": "44.9", "temp": "29.21", "5": "29.21", "humid": "59", "6": "59", "clientNum": "0", "7": "0" }, { "no": "217", "0": "217", "time": "2017-10-02 14:10:11", "1": "2017-10-02 14:10:11", "pm1": "22.2", "2": "22.2", "pm10": "38.5556", "3": "38.5556", "pm25": "33.4", "4": "33.4", "temp": "27.3", "5": "27.3", "humid": "48.2", "6": "48.2", "clientNum": "1", "7": "1" }, { "no": "218", "0": "218", "time": "2017-10-02 14:11:35", "1": "2017-10-02 14:11:35", "pm1": "27.0909", "2": "27.0909", "pm10": "50.2", "3": "50.2", "pm25": "41.9091", "4": "41.9091", "temp": "30.3364", "5": "30.3364", "humid": "56.8545", "6": "56.8545", "clientNum": "2", "7": "2" }, { "no": "219", "0": "219", "time": "2017-10-02 14:20:03", "1": "2017-10-02 14:20:03", "pm1": "30", "2": "30", "pm10": "60.2", "3": "60.2", "pm25": "47.4", "4": "47.4", "temp": "29.13", "5": "29.13", "humid": "60.13", "6": "60.13", "clientNum": "0", "7": "0" }, { "no": "220", "0": "220", "time": "2017-10-02 14:20:14", "1": "2017-10-02 14:20:14", "pm1": "21.8", "2": "21.8", "pm10": "37.4", "3": "37.4", "pm25": "33.3", "4": "33.3", "temp": "27.24", "5": "27.24", "humid": "48.5", "6": "48.5", "clientNum": "1", "7": "1" }, { "no": "221", "0": "221", "time": "2017-10-02 14:22:35", "1": "2017-10-02 14:22:35", "pm1": "26.7", "2": "26.7", "pm10": "49", "3": "49", "pm25": "41.3", "4": "41.3", "temp": "30.32", "5": "30.32", "humid": "56.57", "6": "56.57", "clientNum": "2", "7": "2" }, { "no": "222", "0": "222", "time": "2017-10-02 14:30:06", "1": "2017-10-02 14:30:06", "pm1": "29.7", "2": "29.7", "pm10": "59.2", "3": "59.2", "pm25": "46.4", "4": "46.4", "temp": "28.99", "5": "28.99", "humid": "59.99", "6": "59.99", "clientNum": "0", "7": "0" }, { "no": "223", "0": "223", "time": "2017-10-02 14:30:15", "1": "2017-10-02 14:30:15", "pm1": "22.0909", "2": "22.0909", "pm10": "38.9091", "3": "38.9091", "pm25": "34.0909", "4": "34.0909", "temp": "27.1636", "5": "27.1636", "humid": "49.3727", "6": "49.3727", "clientNum": "1", "7": "1" }, { "no": "224", "0": "224", "time": "2017-10-02 14:32:36", "1": "2017-10-02 14:32:36", "pm1": "26.6", "2": "26.6", "pm10": "49", "3": "49", "pm25": "40.9", "4": "40.9", "temp": "30.34", "5": "30.34", "humid": "56.53", "6": "56.53", "clientNum": "2", "7": "2" }, { "no": "225", "0": "225", "time": "2017-10-02 14:40:13", "1": "2017-10-02 14:40:13", "pm1": "29.9", "2": "29.9", "pm10": "58.8", "3": "58.8", "pm25": "46.4", "4": "46.4", "temp": "28.86", "5": "28.86", "humid": "60.06", "6": "60.06", "clientNum": "0", "7": "0" }, { "no": "226", "0": "226", "time": "2017-10-02 14:41:15", "1": "2017-10-02 14:41:15", "pm1": "21.1111", "2": "21.1111", "pm10": "37.6667", "3": "37.6667", "pm25": "32.8889", "4": "32.8889", "temp": "27.2778", "5": "27.2778", "humid": "47.6444", "6": "47.6444", "clientNum": "1", "7": "1" }, { "no": "227", "0": "227", "time": "2017-10-02 14:42:37", "1": "2017-10-02 14:42:37", "pm1": "26", "2": "26", "pm10": "48.2", "3": "48.2", "pm25": "40.4", "4": "40.4", "temp": "30.2", "5": "30.2", "humid": "56.53", "6": "56.53", "clientNum": "2", "7": "2" }, { "no": "228", "0": "228", "time": "2017-10-02 14:50:20", "1": "2017-10-02 14:50:20", "pm1": "29.7", "2": "29.7", "pm10": "58.2222", "3": "58.2222", "pm25": "45.6", "4": "45.6", "temp": "28.78", "5": "28.78", "humid": "60.1", "6": "60.1", "clientNum": "0", "7": "0" }, { "no": "229", "0": "229", "time": "2017-10-02 14:51:29", "1": "2017-10-02 14:51:29", "pm1": "22.5", "2": "22.5", "pm10": "41.4", "3": "41.4", "pm25": "34.9", "4": "34.9", "temp": "27.39", "5": "27.39", "humid": "48.37", "6": "48.37", "clientNum": "1", "7": "1" }, { "no": "230", "0": "230", "time": "2017-10-02 14:52:38", "1": "2017-10-02 14:52:38", "pm1": "26.2727", "2": "26.2727", "pm10": "48.7273", "3": "48.7273", "pm25": "40.5455", "4": "40.5455", "temp": "30.0727", "5": "30.0727", "humid": "56.9364", "6": "56.9364", "clientNum": "2", "7": "2" }, { "no": "231", "0": "231", "time": "2017-10-02 15:00:24", "1": "2017-10-02 15:00:24", "pm1": "30.7", "2": "30.7", "pm10": "62", "3": "62", "pm25": "48.4", "4": "48.4", "temp": "28.72", "5": "28.72", "humid": "60.61", "6": "60.61", "clientNum": "0", "7": "0" }, { "no": "232", "0": "232", "time": "2017-10-02 15:01:30", "1": "2017-10-02 15:01:30", "pm1": "21.3", "2": "21.3", "pm10": "39.5", "3": "39.5", "pm25": "34.2", "4": "34.2", "temp": "27.13", "5": "27.13", "humid": "44.89", "6": "44.89", "clientNum": "1", "7": "1" }, { "no": "233", "0": "233", "time": "2017-10-02 15:03:38", "1": "2017-10-02 15:03:38", "pm1": "26.1", "2": "26.1", "pm10": "48.375", "3": "48.375", "pm25": "40", "4": "40", "temp": "29.9", "5": "29.9", "humid": "57.39", "6": "57.39", "clientNum": "2", "7": "2" }, { "no": "234", "0": "234", "time": "2017-10-02 15:10:29", "1": "2017-10-02 15:10:29", "pm1": "30.4", "2": "30.4", "pm10": "60.3", "3": "60.3", "pm25": "47.1", "4": "47.1", "temp": "28.69", "5": "28.69", "humid": "59.96", "6": "59.96", "clientNum": "0", "7": "0" }, { "no": "235", "0": "235", "time": "2017-10-02 15:11:31", "1": "2017-10-02 15:11:31", "pm1": "23.8", "2": "23.8", "pm10": "43.8", "3": "43.8", "pm25": "36.9", "4": "36.9", "temp": "27", "5": "27", "humid": "46.07", "6": "46.07", "clientNum": "1", "7": "1" }, { "no": "236", "0": "236", "time": "2017-10-02 15:13:39", "1": "2017-10-02 15:13:39", "pm1": "26.1", "2": "26.1", "pm10": "48", "3": "48", "pm25": "40.4", "4": "40.4", "temp": "29.94", "5": "29.94", "humid": "57.39", "6": "57.39", "clientNum": "2", "7": "2" }, { "no": "237", "0": "237", "time": "2017-10-02 15:20:39", "1": "2017-10-02 15:20:39", "pm1": "28.9", "2": "28.9", "pm10": "58", "3": "58", "pm25": "45.4", "4": "45.4", "temp": "28.67", "5": "28.67", "humid": "59.9", "6": "59.9", "clientNum": "0", "7": "0" }, { "no": "238", "0": "238", "time": "2017-10-02 15:21:32", "1": "2017-10-02 15:21:32", "pm1": "20.6", "2": "20.6", "pm10": "37.1", "3": "37.1", "pm25": "32.1", "4": "32.1", "temp": "26.76", "5": "26.76", "humid": "42.52", "6": "42.52", "clientNum": "1", "7": "1" }, { "no": "239", "0": "239", "time": "2017-10-02 15:23:40", "1": "2017-10-02 15:23:40", "pm1": "26.6", "2": "26.6", "pm10": "48.5", "3": "48.5", "pm25": "40.6", "4": "40.6", "temp": "30.08", "5": "30.08", "humid": "56.96", "6": "56.96", "clientNum": "2", "7": "2" }, { "no": "240", "0": "240", "time": "2017-10-02 15:30:44", "1": "2017-10-02 15:30:44", "pm1": "28.6", "2": "28.6", "pm10": "55.5", "3": "55.5", "pm25": "43.8", "4": "43.8", "temp": "28.65", "5": "28.65", "humid": "59.8", "6": "59.8", "clientNum": "0", "7": "0" }, { "no": "241", "0": "241", "time": "2017-10-02 15:31:35", "1": "2017-10-02 15:31:35", "pm1": "20.4", "2": "20.4", "pm10": "33.7778", "3": "33.7778", "pm25": "31", "4": "31", "temp": "26.75", "5": "26.75", "humid": "41.39", "6": "41.39", "clientNum": "1", "7": "1" }, { "no": "242", "0": "242", "time": "2017-10-02 15:33:43", "1": "2017-10-02 15:33:43", "pm1": "26.9", "2": "26.9", "pm10": "49.5556", "3": "49.5556", "pm25": "41.5", "4": "41.5", "temp": "29.93", "5": "29.93", "humid": "57.57", "6": "57.57", "clientNum": "2", "7": "2" }, { "no": "243", "0": "243", "time": "2017-10-02 15:40:52", "1": "2017-10-02 15:40:52", "pm1": "27.6", "2": "27.6", "pm10": "53.3", "3": "53.3", "pm25": "42.5", "4": "42.5", "temp": "28.6", "5": "28.6", "humid": "59.98", "6": "59.98", "clientNum": "0", "7": "0" }, { "no": "244", "0": "244", "time": "2017-10-02 15:41:37", "1": "2017-10-02 15:41:37", "pm1": "19.7", "2": "19.7", "pm10": "32.2222", "3": "32.2222", "pm25": "29.9", "4": "29.9", "temp": "26.71", "5": "26.71", "humid": "42.25", "6": "42.25", "clientNum": "1", "7": "1" }, { "no": "245", "0": "245", "time": "2017-10-02 15:43:44", "1": "2017-10-02 15:43:44", "pm1": "25.0909", "2": "25.0909", "pm10": "45.8182", "3": "45.8182", "pm25": "38.7273", "4": "38.7273", "temp": "29.8182", "5": "29.8182", "humid": "56.9818", "6": "56.9818", "clientNum": "2", "7": "2" }, { "no": "246", "0": "246", "time": "2017-10-02 15:51:00", "1": "2017-10-02 15:51:00", "pm1": "26.6", "2": "26.6", "pm10": "51.1", "3": "51.1", "pm25": "40.6", "4": "40.6", "temp": "28.5", "5": "28.5", "humid": "59.32", "6": "59.32", "clientNum": "0", "7": "0" }, { "no": "247", "0": "247", "time": "2017-10-02 15:51:40", "1": "2017-10-02 15:51:40", "pm1": "20.4", "2": "20.4", "pm10": "34.6667", "3": "34.6667", "pm25": "30.9", "4": "30.9", "temp": "26.97", "5": "26.97", "humid": "45.87", "6": "45.87", "clientNum": "1", "7": "1" }, { "no": "248", "0": "248", "time": "2017-10-02 15:54:44", "1": "2017-10-02 15:54:44", "pm1": "23.3", "2": "23.3", "pm10": "42.8", "3": "42.8", "pm25": "36.5", "4": "36.5", "temp": "29.71", "5": "29.71", "humid": "55", "6": "55", "clientNum": "2", "7": "2" }, { "no": "249", "0": "249", "time": "2017-10-02 16:01:05", "1": "2017-10-02 16:01:05", "pm1": "27.5", "2": "27.5", "pm10": "52.5", "3": "52.5", "pm25": "42.4", "4": "42.4", "temp": "28.45", "5": "28.45", "humid": "60.79", "6": "60.79", "clientNum": "0", "7": "0" }, { "no": "250", "0": "250", "time": "2017-10-02 16:01:42", "1": "2017-10-02 16:01:42", "pm1": "19.5", "2": "19.5", "pm10": "33.6", "3": "33.6", "pm25": "30.1", "4": "30.1", "temp": "26.98", "5": "26.98", "humid": "42.96", "6": "42.96", "clientNum": "1", "7": "1" }, { "no": "251", "0": "251", "time": "2017-10-02 16:04:45", "1": "2017-10-02 16:04:45", "pm1": "23.5", "2": "23.5", "pm10": "42.8889", "3": "42.8889", "pm25": "36.3", "4": "36.3", "temp": "29.54", "5": "29.54", "humid": "55.43", "6": "55.43", "clientNum": "2", "7": "2" }, { "no": "252", "0": "252", "time": "2017-10-02 16:11:13", "1": "2017-10-02 16:11:13", "pm1": "27.8", "2": "27.8", "pm10": "54.1", "3": "54.1", "pm25": "43.4", "4": "43.4", "temp": "28.34", "5": "28.34", "humid": "61.56", "6": "61.56", "clientNum": "0", "7": "0" }, { "no": "253", "0": "253", "time": "2017-10-02 16:11:44", "1": "2017-10-02 16:11:44", "pm1": "19.6", "2": "19.6", "pm10": "32.5", "3": "32.5", "pm25": "29.6", "4": "29.6", "temp": "26.91", "5": "26.91", "humid": "44.81", "6": "44.81", "clientNum": "1", "7": "1" }, { "no": "254", "0": "254", "time": "2017-10-02 16:14:46", "1": "2017-10-02 16:14:46", "pm1": "25.0909", "2": "25.0909", "pm10": "46.1818", "3": "46.1818", "pm25": "38.6364", "4": "38.6364", "temp": "29.2818", "5": "29.2818", "humid": "57.1727", "6": "57.1727", "clientNum": "2", "7": "2" }, { "no": "255", "0": "255", "time": "2017-10-02 16:21:20", "1": "2017-10-02 16:21:20", "pm1": "28.1", "2": "28.1", "pm10": "54.1", "3": "54.1", "pm25": "43.3", "4": "43.3", "temp": "28.23", "5": "28.23", "humid": "62.11", "6": "62.11", "clientNum": "0", "7": "0" }, { "no": "256", "0": "256", "time": "2017-10-02 16:21:45", "1": "2017-10-02 16:21:45", "pm1": "20.6", "2": "20.6", "pm10": "35.2222", "3": "35.2222", "pm25": "31.8", "4": "31.8", "temp": "27.15", "5": "27.15", "humid": "46.74", "6": "46.74", "clientNum": "1", "7": "1" }, { "no": "257", "0": "257", "time": "2017-10-02 16:25:46", "1": "2017-10-02 16:25:46", "pm1": "25.3", "2": "25.3", "pm10": "47.6", "3": "47.6", "pm25": "39.5", "4": "39.5", "temp": "29.21", "5": "29.21", "humid": "58.63", "6": "58.63", "clientNum": "2", "7": "2" }, { "no": "258", "0": "258", "time": "2017-10-02 16:31:23", "1": "2017-10-02 16:31:23", "pm1": "26.8", "2": "26.8", "pm10": "50.3", "3": "50.3", "pm25": "40.6", "4": "40.6", "temp": "28.12", "5": "28.12", "humid": "60.8", "6": "60.8", "clientNum": "0", "7": "0" }, { "no": "259", "0": "259", "time": "2017-10-02 16:31:56", "1": "2017-10-02 16:31:56", "pm1": "19.9", "2": "19.9", "pm10": "34.2222", "3": "34.2222", "pm25": "29.8", "4": "29.8", "temp": "27.11", "5": "27.11", "humid": "45.46", "6": "45.46", "clientNum": "1", "7": "1" }, { "no": "260", "0": "260", "time": "2017-10-02 16:35:47", "1": "2017-10-02 16:35:47", "pm1": "26.8182", "2": "26.8182", "pm10": "49.9", "3": "49.9", "pm25": "41.7273", "4": "41.7273", "temp": "29.1364", "5": "29.1364", "humid": "60.1545", "6": "60.1545", "clientNum": "2", "7": "2" }, { "no": "261", "0": "261", "time": "2017-10-02 16:41:30", "1": "2017-10-02 16:41:30", "pm1": "26.5", "2": "26.5", "pm10": "50.5", "3": "50.5", "pm25": "40.8", "4": "40.8", "temp": "28.07", "5": "28.07", "humid": "60.76", "6": "60.76", "clientNum": "0", "7": "0" }, { "no": "262", "0": "262", "time": "2017-10-02 16:41:58", "1": "2017-10-02 16:41:58", "pm1": "17.4", "2": "17.4", "pm10": "29.1111", "3": "29.1111", "pm25": "26.7", "4": "26.7", "temp": "26.96", "5": "26.96", "humid": "42.66", "6": "42.66", "clientNum": "1", "7": "1" }, { "no": "263", "0": "263", "time": "2017-10-02 16:46:48", "1": "2017-10-02 16:46:48", "pm1": "26.5455", "2": "26.5455", "pm10": "50.0909", "3": "50.0909", "pm25": "42", "4": "42", "temp": "28.9727", "5": "28.9727", "humid": "60.4455", "6": "60.4455", "clientNum": "2", "7": "2" }, { "no": "264", "0": "264", "time": "2017-10-02 16:51:44", "1": "2017-10-02 16:51:44", "pm1": "25.9", "2": "25.9", "pm10": "48.8889", "3": "48.8889", "pm25": "39.6", "4": "39.6", "temp": "28.04", "5": "28.04", "humid": "60.57", "6": "60.57", "clientNum": "0", "7": "0" }, { "no": "265", "0": "265", "time": "2017-10-02 16:52:00", "1": "2017-10-02 16:52:00", "pm1": "20.3", "2": "20.3", "pm10": "34.6667", "3": "34.6667", "pm25": "31.3", "4": "31.3", "temp": "26.94", "5": "26.94", "humid": "47.61", "6": "47.61", "clientNum": "1", "7": "1" }, { "no": "266", "0": "266", "time": "2017-10-02 16:57:48", "1": "2017-10-02 16:57:48", "pm1": "27.1", "2": "27.1", "pm10": "50.4444", "3": "50.4444", "pm25": "42.3", "4": "42.3", "temp": "28.93", "5": "28.93", "humid": "59.93", "6": "59.93", "clientNum": "2", "7": "2" }, { "no": "267", "0": "267", "time": "2017-10-02 17:01:53", "1": "2017-10-02 17:01:53", "pm1": "27.3", "2": "27.3", "pm10": "53.4", "3": "53.4", "pm25": "42.4", "4": "42.4", "temp": "28", "5": "28", "humid": "62.35", "6": "62.35", "clientNum": "0", "7": "0" }, { "no": "268", "0": "268", "time": "2017-10-02 17:02:08", "1": "2017-10-02 17:02:08", "pm1": "20.2", "2": "20.2", "pm10": "35.7", "3": "35.7", "pm25": "31.6", "4": "31.6", "temp": "27.18", "5": "27.18", "humid": "47.93", "6": "47.93", "clientNum": "1", "7": "1" }, { "no": "269", "0": "269", "time": "2017-10-02 17:07:49", "1": "2017-10-02 17:07:49", "pm1": "27.5455", "2": "27.5455", "pm10": "51", "3": "51", "pm25": "42.7273", "4": "42.7273", "temp": "28.9727", "5": "28.9727", "humid": "60.2273", "6": "60.2273", "clientNum": "2", "7": "2" }, { "no": "270", "0": "270", "time": "2017-10-02 17:12:01", "1": "2017-10-02 17:12:01", "pm1": "28", "2": "28", "pm10": "55.2", "3": "55.2", "pm25": "43.9", "4": "43.9", "temp": "28", "5": "28", "humid": "62.38", "6": "62.38", "clientNum": "0", "7": "0" }, { "no": "271", "0": "271", "time": "2017-10-02 17:12:12", "1": "2017-10-02 17:12:12", "pm1": "21.6", "2": "21.6", "pm10": "39.5556", "3": "39.5556", "pm25": "33.3", "4": "33.3", "temp": "27.28", "5": "27.28", "humid": "49.77", "6": "49.77", "clientNum": "1", "7": "1" }];
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-realTimeData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return realTimeDATA; });
var realTimeDATA = [{ "no": "2781", "0": "2781", "time": "2017-10-02 17:19:08", "1": "2017-10-02 17:19:08", "pm1": "28", "2": "28", "pm10": null, "3": null, "pm25": "44", "4": "44", "temp": "27.9", "5": "27.9", "humid": "62.9", "6": "62.9", "clientNum": "0", "7": "0" }, { "no": "2782", "0": "2782", "time": "2017-10-02 17:19:17", "1": "2017-10-02 17:19:17", "pm1": "19", "2": "19", "pm10": "32", "3": "32", "pm25": "30", "4": "30", "temp": "27.3", "5": "27.3", "humid": "45", "6": "45", "clientNum": "1", "7": "1" }, { "no": "2780", "0": "2780", "time": "2017-10-02 17:18:50", "1": "2017-10-02 17:18:50", "pm1": "29", "2": "29", "pm10": "55", "3": "55", "pm25": "45", "4": "45", "temp": "28.8", "5": "28.8", "humid": "60.3", "6": "60.3", "clientNum": "2", "7": "2" }];
//# sourceMappingURL=mock-realTimeData.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

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