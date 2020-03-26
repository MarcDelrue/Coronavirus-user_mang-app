(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header style=\"margin-bottom: 25px;\">\n    <ion-toolbar color=\"primary\">\n      <ion-title>Coronavirus  Raspberry</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"align-center\">\n    <div class=\"security-space-vertical\">\n      <ion-label class=\"bold-text\">Launch Raspberry Program </ion-label>\n    </div>\n    <div>\n      <ion-toggle class=\"toggle-app\" [(ngModel)]=\"switchState\" (click)=\"switchProgramState()\"></ion-toggle>\n    </div>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Recognized user</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let user of allUsers | async\">\n      <ion-label>{{user.name}}</ion-label>\n      <ion-button side=\"end\" fill=\"clear\" (click)=\"goToUserEdit(user.id)\">\n        <ion-icon color=\"primary\" name=\"pencil\"></ion-icon>\n      </ion-button>\n      <ion-button side=\"end\" fill=\"clear\" (click)=\"deleteUser(user)\">\n        <ion-icon color=\"danger\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <div>\n  <ion-fab horizontal=\"center\" style=\"margin-top: 25px; margin-bottom: 25px\">\n    <ion-fab-button (click)=\"goToUserEdit('new-user')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </div>\n</ion-content>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/services/firebase.service.ts");






let HomePage = class HomePage {
    constructor(router, alertController, fireStore, loadingController) {
        this.router = router;
        this.alertController = alertController;
        this.fireStore = fireStore;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        // this.presentLoading()
        this.allUsers = this.fireStore.getUsers().valueChanges().subscribe(() => { });
        this.fireStore.getSwitchState().valueChanges().subscribe((data) => {
            this.switchState = data[0].is_launched;
        });
    }
    // async presentLoading() {
    //   this.loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //   });
    //   await this.loading.present();
    // }
    goToUserEdit(id) {
        this.router.navigate(['/user', id]);
    }
    deleteUser(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete ' + user.name,
                message: 'Are you sure you want to <strong>delete ' + user.name + " ?</strong>",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.confirmDeleteUser(user);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmDeleteUser(user) {
        this.fireStore.deleteAllImagesFromUser(user);
        this.fireStore.deleteUser(user);
    }
    switchProgramState() {
        this.fireStore.switchProgramStatus(!this.switchState);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map