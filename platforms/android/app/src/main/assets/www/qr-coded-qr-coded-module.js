(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-coded-qr-coded-module"],{

/***/ "./src/app/qr-coded/qr-coded-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/qr-coded/qr-coded-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: QrCodedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodedPageRoutingModule", function() { return QrCodedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _qr_coded_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-coded.page */ "./src/app/qr-coded/qr-coded.page.ts");




var routes = [
    {
        path: '',
        component: _qr_coded_page__WEBPACK_IMPORTED_MODULE_3__["QrCodedPage"]
    }
];
var QrCodedPageRoutingModule = /** @class */ (function () {
    function QrCodedPageRoutingModule() {
    }
    QrCodedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], QrCodedPageRoutingModule);
    return QrCodedPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/qr-coded/qr-coded.module.ts":
/*!*********************************************!*\
  !*** ./src/app/qr-coded/qr-coded.module.ts ***!
  \*********************************************/
/*! exports provided: QrCodedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodedPageModule", function() { return QrCodedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _qr_coded_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-coded-routing.module */ "./src/app/qr-coded/qr-coded-routing.module.ts");
/* harmony import */ var _qr_coded_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-coded.page */ "./src/app/qr-coded/qr-coded.page.ts");







var QrCodedPageModule = /** @class */ (function () {
    function QrCodedPageModule() {
    }
    QrCodedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _qr_coded_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrCodedPageRoutingModule"]
            ],
            declarations: [_qr_coded_page__WEBPACK_IMPORTED_MODULE_6__["QrCodedPage"]]
        })
    ], QrCodedPageModule);
    return QrCodedPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=qr-coded-qr-coded-module.js.map