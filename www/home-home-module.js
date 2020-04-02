(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/vibration/ngx/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic-native/vibration/ngx/index.js ***!
  \***********************************************************/
/*! exports provided: Vibration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vibration", function() { return Vibration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var Vibration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "vibrate", { "sync": true }, arguments); };
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
    Vibration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Vibration);
    return Vibration;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpYnJhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFxQ3pDLDZCQUFpQjs7OztJQVM5QywyQkFBTyxhQUFDLElBQXVCOzs7Ozs7SUFUcEIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQXRDdEI7RUFzQytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuLyoqXG4gKiBAbmFtZSBWaWJyYXRpb25cbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyB0aGUgZGV2aWNlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpYnJhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdmlicmF0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gVmlicmF0ZSB0aGUgZGV2aWNlIGZvciBhIHNlY29uZFxuICogLy8gRHVyYXRpb24gaXMgaWdub3JlZCBvbiBpT1MuXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xuICpcbiAqIC8vIFZpYnJhdGUgMiBzZWNvbmRzXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcbiAqIC8vIFZpYnJhdGUgZm9yIDIgc2Vjb25kc1xuICogLy8gUGF0dGVybnMgd29yayBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XG4gKlxuICogLy8gU3RvcCBhbnkgY3VycmVudCB2aWJyYXRpb25zIGltbWVkaWF0ZWx5XG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWJyYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpYnJhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVmlicmF0ZXMgdGhlIGRldmljZSBmb3IgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB0aW1lIHtudW1iZXJ8bnVtYmVyW119IE1pbGxpc2Vjb25kcyB0byB2aWJyYXRlIHRoZSBkZXZpY2UuIElmIHBhc3NlZCBhbiBhcnJheSBvZiBudW1iZXJzLCBpdCB3aWxsIGRlZmluZSBhIHZpYnJhdGlvbiBwYXR0ZXJuLiBQYXNzIDAgdG8gc3RvcCBhbnkgdmlicmF0aW9uIGltbWVkaWF0ZWx5LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgdmlicmF0ZSh0aW1lOiBudW1iZXIgfCBudW1iZXJbXSkgeyB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header style=\"margin-bottom: 25px;\">\n    <ion-toolbar color=\"primary\">\n      <ion-title>Coronavirus  Raspberry</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"align-center\">\n    <div class=\"security-space-vertical\">\n      <ion-label class=\"bold-text\">Launch Raspberry Program </ion-label>\n    </div>\n    <div>\n      <ion-toggle class=\"toggle-app\" [(ngModel)]=\"switchState\" (click)=\"switchProgramState()\"></ion-toggle>\n    </div>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Recognized user</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let user of allUsers\">\n      <ion-icon name=\"lock-closed\" *ngIf=\"!user.accept_modify_account; else unlock\"></ion-icon>\n      <ng-template #unlock>\n      <ion-icon name=\"lock-open-outline\"></ion-icon>\n      </ng-template>\n      <ion-label>{{user.name}}</ion-label>\n      <ion-button side=\"end\" fill=\"clear\" (click)=\"goToUserEdit(user)\">\n        <ion-icon color=\"primary\" name=\"pencil\"></ion-icon>\n      </ion-button>\n      <ion-button side=\"end\" fill=\"clear\" (click)=\"deleteUser(user)\">\n        <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <div>\n  <ion-fab horizontal=\"center\" style=\"margin-top: 25px; margin-bottom: 25px\">\n    <ion-fab-button (click)=\"goToUserEdit('new-user')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.toggle-app {\n  zoom: 2.5;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.security-space {\n  margin: 25px;\n}\n\n.security-space-vertical {\n  margin: 25px;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmMvUFJPSkVDVFMvQ2hpbmUgMjAxOS0yMDIwL0JKVFUvRW1iZWRkZWQgc3lzdGVtL0Nvcm9uYXZpcnVzLXVzZXItbWFuYWdlci1hcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRvZ2dsZS1hcHAge1xuICB6b29tOiAyLjU7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnNlY3VyaXR5LXNwYWNlIHtcbiAgbWFyZ2luOiAyNXB4XG59XG5cbi5zZWN1cml0eS1zcGFjZS12ZXJ0aWNhbCB7XG4gIG1hcmdpbjogMjVweFxufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi50b2dnbGUtYXBwIHtcbiAgem9vbTogMi41O1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdXJpdHktc3BhY2Uge1xuICBtYXJnaW46IDI1cHg7XG59XG5cbi5zZWN1cml0eS1zcGFjZS12ZXJ0aWNhbCB7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var _qr_coded_qr_coded_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qr-coded/qr-coded.page */ "./src/app/qr-coded/qr-coded.page.ts");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");








var HomePage = /** @class */ (function () {
    function HomePage(router, alertController, fireStore, modalController, vibration) {
        this.router = router;
        this.alertController = alertController;
        this.fireStore = fireStore;
        this.modalController = modalController;
        this.vibration = vibration;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.fireStore.getUsers().valueChanges().subscribe(function (data) {
            _this.allUsers = data;
        });
        this.fireStore.getSwitchState().valueChanges().subscribe(function (data) {
            _this.switchState = data[0].is_launched;
        });
    };
    HomePage.prototype.goToUserEdit = function (user) {
        var _this = this;
        if (user.accept_modify_account === false) {
            this.presentModal(user);
            this.fireStore.getUserById(user.id).valueChanges().subscribe(function (data) {
                if (data["accept_modify_account"] == true) {
                    _this.vibration.vibrate(1000);
                    _this.modal.dismiss();
                    user.request_security_check = false;
                    user.accept_modify_account = false;
                    _this.fireStore.updateUser(user).then(function () {
                        _this.router.navigate(['/user', user.id || user]);
                    });
                }
            });
        }
        else
            this.router.navigate(['/user', user.id || user]);
    };
    HomePage.prototype.presentModal = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        user.request_security_check = true;
                        this.fireStore.updateUser(user);
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _qr_coded_qr_coded_page__WEBPACK_IMPORTED_MODULE_5__["QrCodedPage"]
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        this.modal.onDidDismiss().then(function () {
                            user.request_security_check = false;
                            _this.fireStore.updateUser(user);
                        });
                        return [4 /*yield*/, this.modal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    HomePage.prototype.deleteUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete ' + user.name,
                            message: 'Are you sure you want to <strong>delete ' + user.name + " ?</strong>",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.confirmDeleteUser(user);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.confirmDeleteUser = function (user) {
        var _this = this;
        if (user.accept_modify_account === false) {
            user.request_security_check = true;
            this.fireStore.updateUser(user);
            this.presentModal(user);
            this.fireStore.getUserById(user.id).valueChanges().subscribe(function (data) {
                if (data["accept_modify_account"] == true) {
                    _this.vibration.vibrate(1000);
                    _this.modal.dismiss();
                    _this.fireStore.deleteAllImagesFromUser(data.photos);
                    _this.fireStore.deleteUser(data);
                }
            });
        }
        else {
            this.fireStore.deleteUser(user);
            this.fireStore.deleteAllImagesFromUser(user.photos);
        }
    };
    HomePage.prototype.switchProgramState = function () {
        this.fireStore.switchProgramStatus(!this.switchState);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            providers: [_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map