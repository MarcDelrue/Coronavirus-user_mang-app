(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-component-user-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserComponentUserComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"buttonText\" [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>User Edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div style=\"text-align: center\">\n      <img *ngIf=\"user.id!=='new-user' && user_photos[0]\" class=\"profile-pic\" [src]=\"user_photos[0]\">\n    </div>\n    <ion-card-header>\n      <ion-card-title>\n        <ion-input [(ngModel)]=\"user.name\" (ionFocus)=\"triedModify = True\" (ionBlur)=\"trySaveUpdates()\"\n          placeholder=\"Insert user full name\"></ion-input>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div *ngIf=\"user.id!=='new-user'; else createUser\">\n        <ion-item>\n          <ion-label>Photos</ion-label>\n          <span *ngIf=\"user && user.photos && user.photos.length > 0\">\n            <ion-button (click)=\"addPhotos()\" side=\"end\" fill=\"clear\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button side=\"end\" fill=\"clear\" color=\"danger\" (click)=\"removeAllPhotos()\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </span>\n        </ion-item>\n        <ion-card-content>\n          <ion-button style=\"display: flex; justify-content: center;\"\n            *ngIf=\"user && user.photos && user.photos.length == 0; else showPhotos\" (click)=\"addPhotos()\">Add photos\n          </ion-button>\n          <ng-template #showPhotos>\n            <div class=\"container\">\n              <div class=\"scroll\" scrollX=\"true\">\n                <span *ngFor=\"let photo of user_photos; let i=index\" style=\"position: relative;\">\n                  <img [src]=\"photo\" class=\"user_photo\">\n                  <ion-button class=\"single-delete\" color=\"danger\" (click)=\"removePhoto(photo, i)\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                  </ion-button>\n                </span>\n              </div>\n            </div>\n          </ng-template>\n        </ion-card-content>\n        <ion-item>\n          <ion-label>Search history</ion-label>\n        </ion-item>\n        <ion-card-content>\n          <ion-label *ngIf=\"!user.search_history\">No searches yet</ion-label>\n        </ion-card-content>\n      </div>\n      <ng-template #createUser>\n        <!-- <ion-labe></ion-labe>\n        <ion-checkbox>\n        </ion-checkbox> -->\n        <div style=\"display: flex; justify-content: center;\">\n          <ion-button (click)=\"createNewUser()\">Create User</ion-button>\n        </div>\n      </ng-template>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/user-component/user-component-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user-component/user-component-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UserComponentPageRoutingModule */

  /***/
  function srcAppUserComponentUserComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponentPageRoutingModule", function () {
      return UserComponentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_component_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-component.page */
    "./src/app/user-component/user-component.page.ts");

    const routes = [{
      path: '',
      component: _user_component_page__WEBPACK_IMPORTED_MODULE_3__["UserComponentPage"]
    }, {
      path: ':id',
      component: _user_component_page__WEBPACK_IMPORTED_MODULE_3__["UserComponentPage"]
    }];
    let UserComponentPageRoutingModule = class UserComponentPageRoutingModule {};
    UserComponentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserComponentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user-component/user-component.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user-component/user-component.module.ts ***!
    \*********************************************************/

  /*! exports provided: UserComponentPageModule */

  /***/
  function srcAppUserComponentUserComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponentPageModule", function () {
      return UserComponentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-component-routing.module */
    "./src/app/user-component/user-component-routing.module.ts");
    /* harmony import */


    var _user_component_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-component.page */
    "./src/app/user-component/user-component.page.ts");

    let UserComponentPageModule = class UserComponentPageModule {};
    UserComponentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserComponentPageRoutingModule"]],
      declarations: [_user_component_page__WEBPACK_IMPORTED_MODULE_6__["UserComponentPage"]]
    })], UserComponentPageModule);
    /***/
  },

  /***/
  "./src/app/user-component/user-component.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/user-component/user-component.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserComponentUserComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user_photo {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n  margin-right: 5px;\n}\n\n.container {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: scroll;\n}\n\n.single-delete {\n  position: absolute;\n  bottom: 0;\n  right: 3px;\n  font-size: 14px;\n  --border-radius: 65% 0 0 0;\n}\n\n.profile-pic {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35vh;\n  height: 35vh;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmMvUFJPSkVDVFMvQ2hpbmUgMjAxOS0yMDIwL0JKVFUvRW1iZWRkZWQgc3lzdGVtL0Nvcm9uYXZpcnVzLXVzZXItbWFuYWdlci1hcHAvc3JjL2FwcC91c2VyLWNvbXBvbmVudC91c2VyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXItY29tcG9uZW50L3VzZXItY29tcG9uZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxhQUFBO0FDRU47O0FEQUk7RUFDRSxnQkFBQTtBQ0VOOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0NOOztBREVFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29tcG9uZW50L3VzZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX3Bob3RvIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG4uY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNjcm9sbCB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgfVxuXG4gIC5zaW5nbGUtZGVsZXRle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNjUlIDAgMCAwO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMzV2aDtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9IiwiLnVzZXJfcGhvdG8ge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29udGFpbmVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAuc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNpbmdsZS1kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDY1JSAwIDAgMDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXZoO1xuICBoZWlnaHQ6IDM1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user-component/user-component.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user-component/user-component.page.ts ***!
    \*******************************************************/

  /*! exports provided: UserComponentPage */

  /***/
  function srcAppUserComponentUserComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponentPage", function () {
      return UserComponentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/firebase.service */
    "./src/services/firebase.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/storage */
    "./node_modules/firebase/storage/dist/index.esm.js");

    let UserComponentPage = class UserComponentPage {
      constructor(route, navCtrl, fireStore, alert, uniqueDeviceID) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.fireStore = fireStore;
        this.alert = alert;
        this.uniqueDeviceID = uniqueDeviceID;
        this.user = {
          id: "new-user",
          name: ""
        };
        this.user_photos = [];
        this.triedModify = false;
      }

      ngOnInit() {
        this.route.params.subscribe(params => {
          console.log(params);

          if (params.id !== "new-user") {
            this.getUserDataAndWatch(params.id).subscribe(data => {
              this.user = data;
              if (this.user.photos.length > 0) this.getUserPhotos();else this.user_photos.push('./assets/user.png');
            });
          }
        });
      }

      getUserDataAndWatch(id) {
        return this.fireStore.getUserById(id).valueChanges();
      }

      getUserPhotos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.user_photos = [];

          for (let photo of this.user.photos) {
            let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref(photo);
            this.user_photos.push((yield storageRef.getDownloadURL()));
          }
        });
      }

      addPhotos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            header: 'Add photos to ' + this.user.name,
            message: 'Look straight at the camera from a 30cm distance.\nVerify that you\'re in a room with good light, then press <strong>Ok</strong>',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: "OK",
              handler: () => {
                this.user.request_photos = true;
                this.saveUpdates();
              }
            }]
          });
          yield alert.present();
        });
      }

      trySaveUpdates() {
        if (this.triedModify) this.saveUpdates();
      }

      saveUpdates() {
        if (this.user.id) this.fireStore.updateUser(this.user);
      }

      createNewUser() {
        if (this.user.name) {
          this.uniqueDeviceID.get().then(uuid => console.log(uuid)).catch(error => console.log(error)); // this.fireStore.createUser(this.user.name).then((id) => {
          //   this.getUserDataAndWatch(id).subscribe(data => {
          //     this.user = data;
          //   })
          // }
          // );
        }
      }

      removePhoto(photo, index) {
        this.fireStore.deleteImage(this.user.photos[index]);
        this.user_photos.splice(index, 1);
        this.user.photos.splice(index, 1);
        this.saveUpdates();
      }

      confirmDeleteAllPhotos() {
        this.fireStore.deleteAllImagesFromUser(this.user.photos);
        this.user_photos = [];
        this.user.photos = [];
        this.saveUpdates();
      }

      removeAllPhotos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alert.create({
            header: 'Delete all your photos',
            message: 'Are you sure you want to <strong>delete all your photos ?</strong>',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Delete all',
              handler: () => {
                this.confirmDeleteAllPhotos();
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    UserComponentPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"]
    }];

    UserComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-component/user-component.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-component.page.scss */
      "./src/app/user-component/user-component.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"]])], UserComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=user-component-user-component-module-es5.js.map