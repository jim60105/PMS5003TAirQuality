webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"TODO\">Dashboard</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">歷史數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"displayComponent('MapPageComponent')\">即時監測</a>\n      </li>\n    </ul>\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--sidebar-->\n    <div class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n      <nav>\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MainPageComponent')\">總覽<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">偵測站地圖</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">歷史數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">平均數據</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"pill\" (click)=\"displayComponent('MapPageComponent')\">即時監測</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <!--page-->\n    <div class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n      <!--動態page-->\n      <ng-template appDynamicComponent></ng-template>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__ = __webpack_require__("../../../../../src/app/dynamic-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__ = __webpack_require__("../../../../../src/app/dynamic-component.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dynamic_component_directive__["a" /* DynamicComponentDirective */]) === "function" && _a || Object)
], AppComponent.prototype, "componentHost", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__dynamic_component_service__["a" /* DynamicComponentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["V" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["V" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_page_component__ = __webpack_require__("../../../../../src/app/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_page_component__ = __webpack_require__("../../../../../src/app/map-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_component_service__ = __webpack_require__("../../../../../src/app/dynamic-component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dynamic_component_directive__ = __webpack_require__("../../../../../src/app/dynamic-component.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__safe_html_component__ = __webpack_require__("../../../../../src/app/safe-html.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//GoogleMap

//innerHtml Safer

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__map_page_component__["a" /* MapPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__safe_html_component__["a" /* Safe */],
            __WEBPACK_IMPORTED_MODULE_9__dynamic_component_directive__["a" /* DynamicComponentDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
            }),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__map_page_component__["a" /* MapPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__dynamic_component_service__["a" /* DynamicComponentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-component.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentDirective; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[appDynamicComponent]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */]) === "function" && _a || Object])
], DynamicComponentDirective);

var _a;
//# sourceMappingURL=dynamic-component.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_component__ = __webpack_require__("../../../../../src/app/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_page_component__ = __webpack_require__("../../../../../src/app/map-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentService; });
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
            MainPageComponent: __WEBPACK_IMPORTED_MODULE_1__main_page_component__["a" /* MainPageComponent */],
            MapPageComponent: __WEBPACK_IMPORTED_MODULE_2__map_page_component__["a" /* MapPageComponent */]
        };
    }
    DynamicComponentService.prototype.getComponent = function (componentName) {
        return this.components[componentName];
    };
    return DynamicComponentService;
}());
DynamicComponentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DynamicComponentService);

//# sourceMappingURL=dynamic-component.service.js.map

/***/ }),

/***/ "../../../../../src/app/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n    <h1>Dashboard</h1>\r\n\r\n    <section class=\"row text-center placeholders\">\r\n        <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <div class=\"text-muted\">Something else</div>\r\n        </div>\r\n        <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n        </div>\r\n        <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n        </div>\r\n        <div class=\"col-6 col-sm-3 placeholder\">\r\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n            <h4>Label</h4>\r\n            <span class=\"text-muted\">Something else</span>\r\n        </div>\r\n    </section>\r\n\r\n    <h2>Section title</h2>\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n                <th>Header</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td>1,001</td>\r\n                <td>Lorem</td>\r\n                <td>ipsum</td>\r\n                <td>dolor</td>\r\n                <td>sit</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,002</td>\r\n                <td>amet</td>\r\n                <td>consectetur</td>\r\n                <td>adipiscing</td>\r\n                <td>elit</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,003</td>\r\n                <td>Integer</td>\r\n                <td>nec</td>\r\n                <td>odio</td>\r\n                <td>Praesent</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,003</td>\r\n                <td>libero</td>\r\n                <td>Sed</td>\r\n                <td>cursus</td>\r\n                <td>ante</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,004</td>\r\n                <td>dapibus</td>\r\n                <td>diam</td>\r\n                <td>Sed</td>\r\n                <td>nisi</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,005</td>\r\n                <td>Nulla</td>\r\n                <td>quis</td>\r\n                <td>sem</td>\r\n                <td>at</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,006</td>\r\n                <td>nibh</td>\r\n                <td>elementum</td>\r\n                <td>imperdiet</td>\r\n                <td>Duis</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,007</td>\r\n                <td>sagittis</td>\r\n                <td>ipsum</td>\r\n                <td>Praesent</td>\r\n                <td>mauris</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,008</td>\r\n                <td>Fusce</td>\r\n                <td>nec</td>\r\n                <td>tellus</td>\r\n                <td>sed</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,009</td>\r\n                <td>augue</td>\r\n                <td>semper</td>\r\n                <td>porta</td>\r\n                <td>Mauris</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,010</td>\r\n                <td>massa</td>\r\n                <td>Vestibulum</td>\r\n                <td>lacinia</td>\r\n                <td>arcu</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,011</td>\r\n                <td>eget</td>\r\n                <td>nulla</td>\r\n                <td>Class</td>\r\n                <td>aptent</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,012</td>\r\n                <td>taciti</td>\r\n                <td>sociosqu</td>\r\n                <td>ad</td>\r\n                <td>litora</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,013</td>\r\n                <td>torquent</td>\r\n                <td>per</td>\r\n                <td>conubia</td>\r\n                <td>nostra</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,014</td>\r\n                <td>per</td>\r\n                <td>inceptos</td>\r\n                <td>himenaeos</td>\r\n                <td>Curabitur</td>\r\n            </tr>\r\n            <tr>\r\n                <td>1,015</td>\r\n                <td>sodales</td>\r\n                <td>ligula</td>\r\n                <td>in</td>\r\n                <td>libero</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
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
        this.dbURL = "php/getDB.php";
        this.subscription = this.getDataHttp().subscribe(function (data) {
            console.log(data.toString());
        }, function (err) {
            console.error("Err: " + err);
        });
    }
    MainPageComponent.prototype.getDataHttp = function () {
        return this.http.get(this.dbURL).map(function (res) {
            var body = res.json();
            return body || {};
        });
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'main-page',
        template: __webpack_require__("../../../../../src/app/main-page.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainPageComponent);

var _a;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\r\n       * element that contains the map. */\r\nagm-map {\r\n    height: calc(100vh - 55.47px - 1rem);\r\n    margin: 0;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/map-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'map-page',
        template: __webpack_require__("../../../../../src/app/map-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-page.component.css")]
    })
], MapPageComponent);

//# sourceMappingURL=map-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Safe; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map