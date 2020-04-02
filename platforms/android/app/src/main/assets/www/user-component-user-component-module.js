(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-component-user-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"buttonText\" [icon]=\"buttonIcon\" defaultHref=\"home\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>User Edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div style=\"text-align: center\">\n      <img *ngIf=\"user.id!=='new-user' && user_photos[0]\" class=\"profile-pic\" [src]=\"user_photos[0]\">\n    </div>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-input [(ngModel)]=\"user.name\" (ionFocus)=\"triedModify = True\" (ionBlur)=\"trySaveUpdates()\"\n          placeholder=\"Insert user full name\"></ion-input>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"user.id!=='new-user'; else createUser\">\n        <ion-item>\n          <ion-label>Photos ({{user.photos.length}}/30)</ion-label>\n          <span *ngIf=\"user && user.photos && user.photos.length > 0\">\n            <ion-button (click)=\"addPhotos()\" side=\"end\" fill=\"clear\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button side=\"end\" fill=\"clear\" color=\"danger\" (click)=\"removeAllPhotos()\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </span>\n        </ion-item>\n        <ion-card-content>\n          <ion-button style=\"display: flex; justify-content: center;\"\n            *ngIf=\"user && user.photos && user.photos.length == 0; else showPhotos\" (click)=\"addPhotos()\">Add photos\n          </ion-button>\n          <ng-template #showPhotos>\n            <div class=\"container\">\n              <div class=\"scroll\" scrollX=\"true\">\n                <span *ngFor=\"let photo of user_photos; let i=index\" style=\"position: relative;\">\n                  <img [src]=\"photo\" class=\"user_photo\">\n                  <ion-button class=\"single-delete\" color=\"danger\" (click)=\"removePhoto(i)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                  </ion-button>\n                </span>\n              </div>\n            </div>\n            <div style=\"text-align: center\">\n              <ion-button (click)=\"requestTraining()\">Request photos training</ion-button>\n            </div>\n          </ng-template>\n        </ion-card-content>\n        <ion-item>\n          <ion-label>Search history</ion-label>\n        </ion-item>\n        <ion-card-content>\n          <ion-label *ngIf=\"user.search_history.length === 0; else historyList\">No searches yet</ion-label>\n          <ng-template #historyList style=\"height: 150px\">\n            <ion-grid style=\"text-align: center;\" fixed=\"true\">\n              <ion-row>\n                <ion-col>Date</ion-col>\n                <ion-col>Data type</ion-col>\n                <ion-col>Number</ion-col>\n                <ion-col>Place</ion-col>\n              </ion-row>\n              <ion-row *ngFor=\"let line of user.search_history\">\n                <ion-col>\n                  {{line.time | date:\"M/d h:mm\"}}\n                </ion-col>\n                <ion-col>\n                  {{line.data_type}}\n                </ion-col>\n                <ion-col>\n                  {{line.number}}\n                </ion-col>\n                <ion-col>\n                  {{line.place | titlecase }}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ng-template>\n        </ion-card-content>\n      </div>\n      <ng-template #createUser>\n        <ion-item lines=\"none\">\n          <ion-label>Securize account with phone ID</ion-label>\n          <ion-checkbox [(ngModel)]=\"uid_verif\">\n          </ion-checkbox>\n        </ion-item>\n        <div style=\"display: flex; justify-content: center;\">\n          <ion-button (click)=\"createNewUser()\">Create User</ion-button>\n        </div>\n      </ng-template>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/user-component/user-component-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-component/user-component-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserComponentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponentPageRoutingModule", function() { return UserComponentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-component.page */ "./src/app/user-component/user-component.page.ts");




var routes = [
    {
        path: '',
        component: _user_component_page__WEBPACK_IMPORTED_MODULE_3__["UserComponentPage"]
    },
    {
        path: ':id',
        component: _user_component_page__WEBPACK_IMPORTED_MODULE_3__["UserComponentPage"]
    }
];
var UserComponentPageRoutingModule = /** @class */ (function () {
    function UserComponentPageRoutingModule() {
    }
    UserComponentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserComponentPageRoutingModule);
    return UserComponentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-component/user-component.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-component/user-component.module.ts ***!
  \*********************************************************/
/*! exports provided: UserComponentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponentPageModule", function() { return UserComponentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _user_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-component-routing.module */ "./src/app/user-component/user-component-routing.module.ts");
/* harmony import */ var _user_component_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-component.page */ "./src/app/user-component/user-component.page.ts");







var UserComponentPageModule = /** @class */ (function () {
    function UserComponentPageModule() {
    }
    UserComponentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _user_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserComponentPageRoutingModule"]
            ],
            declarations: [_user_component_page__WEBPACK_IMPORTED_MODULE_6__["UserComponentPage"]]
        })
    ], UserComponentPageModule);
    return UserComponentPageModule;
}());



/***/ }),

/***/ "./src/app/user-component/user-component.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/user-component/user-component.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user_photo {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n  margin-right: 5px;\n}\n\n.container {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: scroll;\n}\n\n.single-delete {\n  position: absolute;\n  bottom: 0;\n  right: 3px;\n  font-size: 14px;\n  --border-radius: 65% 0 0 0;\n}\n\n.profile-pic {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35vh;\n  height: 35vh;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmMvUFJPSkVDVFMvQ2hpbmUgMjAxOS0yMDIwL0JKVFUvRW1iZWRkZWQgc3lzdGVtL0Nvcm9uYXZpcnVzLXVzZXItbWFuYWdlci1hcHAvc3JjL2FwcC91c2VyLWNvbXBvbmVudC91c2VyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXItY29tcG9uZW50L3VzZXItY29tcG9uZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxhQUFBO0FDRU47O0FEQUk7RUFDRSxnQkFBQTtBQ0VOOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0NOOztBREVFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29tcG9uZW50L3VzZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX3Bob3RvIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG4uY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNjcm9sbCB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgfVxuXG4gIC5zaW5nbGUtZGVsZXRle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNjUlIDAgMCAwO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMzV2aDtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9IiwiLnVzZXJfcGhvdG8ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29udGFpbmVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAuc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNpbmdsZS1kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDY1JSAwIDAgMDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXZoO1xuICBoZWlnaHQ6IDM1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-component/user-component.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-component/user-component.page.ts ***!
  \*******************************************************/
/*! exports provided: UserComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponentPage", function() { return UserComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");










var UserComponentPage = /** @class */ (function () {
    function UserComponentPage(route, navCtrl, fireStore, alert, uniqueDeviceID, loadingController) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.fireStore = fireStore;
        this.alert = alert;
        this.uniqueDeviceID = uniqueDeviceID;
        this.loadingController = loadingController;
        this.user = {
            id: "new-user",
            name: "",
            uid: ""
        };
        this.user_photos = [];
        this.triedModify = false;
        this.uid_verif = false;
    }
    UserComponentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id !== "new-user") {
                _this.getUserDataAndWatch(params.id).subscribe(function (data) {
                    console.log(data);
                    _this.setNewData(data);
                });
            }
        });
    };
    UserComponentPage.prototype.setNewData = function (data) {
        this.user = data;
        if (this.user && (this.user.request_train === true || this.user.request_photos === true)) {
            this.presentLoading();
        }
        else {
            try {
                this.loading.dismiss();
            }
            catch (error) {
            }
        }
        if (this.user && this.user.photos && this.user.photos.length > 0)
            this.getUserPhotos();
        else
            this.user_photos.push('./assets/user.png');
    };
    UserComponentPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait ...',
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    UserComponentPage.prototype.getUserDataAndWatch = function (id) {
        return this.fireStore.getUserById(id).valueChanges();
    };
    UserComponentPage.prototype.getUserPhotos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, photo, storageRef, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user_photos = [];
                        _i = 0, _a = this.user.photos;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        photo = _a[_i];
                        storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_5__["storage"]()
                            .ref(photo);
                        _c = (_b = this.user_photos).push;
                        return [4 /*yield*/, storageRef.getDownloadURL()];
                    case 2:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserComponentPage.prototype.addPhotos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Add photos to ' + this.user.name,
                            message: 'Look straight at the camera from a 30cm distance.\nVerify that you\'re in a room with good light, then press <strong>Ok</strong>',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                },
                                {
                                    text: "OK",
                                    handler: function () {
                                        _this.user.request_photos = true;
                                        _this.saveUpdates();
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
    UserComponentPage.prototype.requestTraining = function () {
        this.user.request_train = true;
        this.saveUpdates();
    };
    UserComponentPage.prototype.trySaveUpdates = function () {
        if (this.triedModify)
            this.saveUpdates();
    };
    UserComponentPage.prototype.saveUpdates = function () {
        if (this.user.id)
            this.fireStore.updateUser(this.user);
    };
    UserComponentPage.prototype.finishCreateUser = function () {
        var _this = this;
        this.fireStore.getUsers().get().subscribe(function (snap) {
            _this.fireStore.createUser(_this.user.name, _this.user.uid, (snap.size + 1).toString()).then(function (id) {
                console.log(id);
                _this.getUserDataAndWatch(id).subscribe(function (data) {
                    _this.setNewData(data);
                });
            });
        });
    };
    UserComponentPage.prototype.createNewUser = function () {
        var _this = this;
        if (this.user.name) {
            if (this.uid_verif) {
                this.uniqueDeviceID.get()
                    .then(function (uuid) {
                    _this.user.uid = uuid;
                    _this.finishCreateUser();
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.finishCreateUser();
                });
            }
            else {
                this.finishCreateUser();
            }
        }
    };
    UserComponentPage.prototype.removePhoto = function (index) {
        this.fireStore.deleteImage(this.user.photos[index]);
        this.user_photos.splice(index, 1);
        this.user.photos.splice(index, 1);
        this.saveUpdates();
    };
    UserComponentPage.prototype.confirmDeleteAllPhotos = function () {
        this.fireStore.deleteAllImagesFromUser(this.user.photos);
        this.user_photos = [];
        this.user.photos = [];
        this.saveUpdates();
    };
    UserComponentPage.prototype.removeAllPhotos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Delete all your photos',
                            message: 'Are you sure you want to <strong>delete all your photos ?</strong>',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }, {
                                    text: 'Delete all',
                                    handler: function () {
                                        _this.confirmDeleteAllPhotos();
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
    UserComponentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    UserComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-component.page.scss */ "./src/app/user-component/user-component.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], UserComponentPage);
    return UserComponentPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-component-user-component-module.js.map