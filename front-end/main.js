(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user_components/my-dashboard/my-dashboard.component */ "./src/app/components/user_components/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _components_user_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user_components/register/register.component */ "./src/app/components/user_components/register/register.component.ts");
/* harmony import */ var _components_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user_components/login/login.component */ "./src/app/components/user_components/login/login.component.ts");
/* harmony import */ var _components_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user_components/profile/profile.component */ "./src/app/components/user_components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_admin_components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin_components/admin-login/admin-login.component */ "./src/app/components/admin_components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_dash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-dash.component */ "./src/app/components/admin_components/book-dash/book-dash.component.ts");
/* harmony import */ var _components_admin_components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin_components/user-dash/user-dash.component */ "./src/app/components/admin_components/user-dash/user-dash.component.ts");
/* harmony import */ var _components_user_components_collection_dash_collection_dash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user_components/collection-dash/collection-dash.component */ "./src/app/components/user_components/collection-dash/collection-dash.component.ts");
/* harmony import */ var _components_user_components_bookmarks_dash_bookmarks_dash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user_components/bookmarks-dash/bookmarks-dash.component */ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.ts");
/* harmony import */ var _components_user_components_suggest_book_suggest_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user_components/suggest-book/suggest-book.component */ "./src/app/components/user_components/suggest-book/suggest-book.component.ts");
/* harmony import */ var _components_admin_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin_components/notifications/notifications.component */ "./src/app/components/admin_components/notifications/notifications.component.ts");
/* harmony import */ var _components_user_components_afpay_afpay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user_components/afpay/afpay.component */ "./src/app/components/user_components/afpay/afpay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { DueDashComponent } from './components/user_components/due-dash/due-dash.component';



// MDB Angular Pro
var routes = [
    { path: '', component: _components_user_components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["MyDashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'collection', component: _components_user_components_collection_dash_collection_dash_component__WEBPACK_IMPORTED_MODULE_10__["CollectionDashComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'bookmarks', component: _components_user_components_bookmarks_dash_bookmarks_dash_component__WEBPACK_IMPORTED_MODULE_11__["BookmarksDashComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    // {path: 'dues', component: DueDashComponent, canActivate: [AuthGuard]},
    { path: 'suggest-book', component: _components_user_components_suggest_book_suggest_book_component__WEBPACK_IMPORTED_MODULE_12__["SuggestBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'register', component: _components_user_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _components_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _components_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'admin-login', component: _components_admin_components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_7__["AdminLoginComponent"] },
    { path: 'admin-books', component: _components_admin_components_book_dash_book_dash_component__WEBPACK_IMPORTED_MODULE_8__["BookDashComponent"] },
    { path: 'admin-users', component: _components_admin_components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_9__["UserDashComponent"] },
    { path: 'admin-notices', component: _components_admin_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"] },
    { path: 'afpay', component: _components_user_components_afpay_afpay_component__WEBPACK_IMPORTED_MODULE_14__["AfpayComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\r\n<ng-flash-message></ng-flash-message>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages/module */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_user_components_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user_components/my-nav/my-nav.component */ "./src/app/components/user_components/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_user_components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user_components/my-dashboard/my-dashboard.component */ "./src/app/components/user_components/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _components_user_components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user_components/register/register.component */ "./src/app/components/user_components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user_components/login/login.component */ "./src/app/components/user_components/login/login.component.ts");
/* harmony import */ var _components_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user_components/profile/profile.component */ "./src/app/components/user_components/profile/profile.component.ts");
/* harmony import */ var _components_admin_components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin_components/admin-login/admin-login.component */ "./src/app/components/admin_components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_components_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin_components/admin-nav/admin-nav.component */ "./src/app/components/admin_components/admin-nav/admin-nav.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_dash_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-dash.component */ "./src/app/components/admin_components/book-dash/book-dash.component.ts");
/* harmony import */ var _components_admin_components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin_components/user-dash/user-dash.component */ "./src/app/components/admin_components/user-dash/user-dash.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_table_book_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-table/book-table.component */ "./src/app/components/admin_components/book-dash/book-table/book-table.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_dialog_book_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-dialog/book-dialog.component */ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_table_book_del_warn_book_del_warn_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component */ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.ts");
/* harmony import */ var _components_admin_components_book_dash_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin_components/book-dash/book-edit/book-edit.component */ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.ts");
/* harmony import */ var _components_user_components_my_dashboard_conf_borr_conf_borr_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user_components/my-dashboard/conf-borr/conf-borr.component */ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.ts");
/* harmony import */ var _components_user_components_collection_dash_collection_dash_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user_components/collection-dash/collection-dash.component */ "./src/app/components/user_components/collection-dash/collection-dash.component.ts");
/* harmony import */ var _components_user_components_bookmarks_dash_bookmarks_dash_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/user_components/bookmarks-dash/bookmarks-dash.component */ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.ts");
/* harmony import */ var _components_user_components_suggest_book_suggest_book_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/user_components/suggest-book/suggest-book.component */ "./src/app/components/user_components/suggest-book/suggest-book.component.ts");
/* harmony import */ var _components_user_components_collection_dash_un_borrow_un_borrow_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user_components/collection-dash/un-borrow/un-borrow.component */ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.ts");
/* harmony import */ var _components_admin_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin_components/notifications/notifications.component */ "./src/app/components/admin_components/notifications/notifications.component.ts");
/* harmony import */ var _components_admin_components_user_dash_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin_components/user-dash/user-table/user-table.component */ "./src/app/components/admin_components/user-dash/user-table/user-table.component.ts");
/* harmony import */ var _components_user_components_afpay_afpay_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/user_components/afpay/afpay.component */ "./src/app/components/user_components/afpay/afpay.component.ts");
/* harmony import */ var _re_re_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./re/re.component */ "./src/app/re/re.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// import { DueDashComponent } from './components/user_components/due-dash/due-dash.component';






function tokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_user_components_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_10__["MyNavComponent"],
                _components_user_components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["MyDashboardComponent"],
                _components_user_components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _components_user_components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_user_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _components_admin_components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_22__["AdminLoginComponent"],
                _components_admin_components_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_23__["AdminNavComponent"],
                _components_admin_components_book_dash_book_dash_component__WEBPACK_IMPORTED_MODULE_24__["BookDashComponent"], _components_admin_components_book_dash_book_table_book_table_component__WEBPACK_IMPORTED_MODULE_26__["BookTableComponent"],
                _components_admin_components_user_dash_user_dash_component__WEBPACK_IMPORTED_MODULE_25__["UserDashComponent"],
                _components_admin_components_book_dash_book_dialog_book_dialog_component__WEBPACK_IMPORTED_MODULE_27__["BookDialogComponent"],
                _components_admin_components_book_dash_book_table_book_del_warn_book_del_warn_component__WEBPACK_IMPORTED_MODULE_28__["BookDelWarnComponent"],
                _components_admin_components_book_dash_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_29__["BookEditComponent"],
                _components_user_components_my_dashboard_conf_borr_conf_borr_component__WEBPACK_IMPORTED_MODULE_30__["ConfBorrComponent"],
                _components_user_components_collection_dash_collection_dash_component__WEBPACK_IMPORTED_MODULE_31__["CollectionDashComponent"],
                _components_user_components_bookmarks_dash_bookmarks_dash_component__WEBPACK_IMPORTED_MODULE_32__["BookmarksDashComponent"],
                // DueDashComponent,
                _components_user_components_suggest_book_suggest_book_component__WEBPACK_IMPORTED_MODULE_33__["SuggestBookComponent"],
                _components_user_components_collection_dash_un_borrow_un_borrow_component__WEBPACK_IMPORTED_MODULE_34__["UnBorrowComponent"],
                _components_admin_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_35__["NotificationsComponent"],
                _components_admin_components_user_dash_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_36__["UserTableComponent"],
                _components_user_components_afpay_afpay_component__WEBPACK_IMPORTED_MODULE_37__["AfpayComponent"],
                _re_re_component__WEBPACK_IMPORTED_MODULE_38__["ReComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                }), _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"]
            ],
            entryComponents: [
                _components_admin_components_book_dash_book_dialog_book_dialog_component__WEBPACK_IMPORTED_MODULE_27__["BookDialogComponent"],
                _components_admin_components_book_dash_book_table_book_del_warn_book_del_warn_component__WEBPACK_IMPORTED_MODULE_28__["BookDelWarnComponent"],
                _components_admin_components_book_dash_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_29__["BookEditComponent"],
                _components_user_components_my_dashboard_conf_borr_conf_borr_component__WEBPACK_IMPORTED_MODULE_30__["ConfBorrComponent"],
                _components_user_components_collection_dash_un_borrow_un_borrow_component__WEBPACK_IMPORTED_MODULE_34__["UnBorrowComponent"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_12__["ShowOnDirtyErrorStateMatcher"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin_components/admin-login/admin-login.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-login/admin-login.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n  Login form css\r\n*/\r\n\r\n  \r\n.mat-card {    \r\n    text-align: -webkit-center;    \r\n  }\r\n\r\n  \r\n.demo-toolbar {    \r\n    display: flex;    \r\n    align-items: center;    \r\n    width: 100%;        \r\n  }\r\n\r\n  \r\n.demo-form {    \r\n    min-width: 150px;    \r\n    max-width: 500px;    \r\n    width: 100%;    \r\n  }\r\n\r\n  \r\n.demo-full-width {    \r\n    width: 100%;    \r\n  }\r\n\r\n  \r\nbody {    \r\n    margin: 0;    \r\n    font-family: Roboto, sans-serif;      \r\n  }\r\n\r\n  \r\nmatInput {\r\n    font-size: 30px;\r\n  }\r\n\r\n  \r\nmat-card {    \r\n    max-width: 80%;    \r\n    margin: 2em auto;    \r\n    text-align: center;\r\n    font-size: 30px;    \r\n  }\r\n\r\n  \r\nmat-toolbar-row {    \r\n    justify-content: space-between;    \r\n  }\r\n\r\n  \r\n.done {    \r\n    position: fixed;    \r\n    bottom: 20px;    \r\n    right: 20px;    \r\n    color: white;    \r\n  }\r\n\r\n  \r\n.content-center {    \r\n    text-align: -webkit-center;         \r\n  } \r\n  "

/***/ }),

/***/ "./src/app/components/admin_components/admin-login/admin-login.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-login/admin-login.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Toolbar of an App -->    \r\n<mat-toolbar color=\"primary\">    \r\n  <span>UCSC E-Library System</span>      \r\n\r\n</mat-toolbar>\r\n\r\n<mat-card>\r\n    <!-- Title of an Card -->    \r\n    <mat-card-title>    \r\n      Admin Login\r\n    </mat-card-title>\r\n    \r\n    <mat-card-content>    \r\n      <form (submit)=\"loginAdmin()\">    \r\n          <table>    \r\n              <tr>    \r\n                  <td colspan=\"2\">    \r\n                      <mat-form-field class=\"demo-full-width\">    \r\n                          <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">    \r\n                      </mat-form-field>    \r\n                  </td>                      \r\n              </tr>    \r\n              <tr>    \r\n                <td colspan=\"2\">    \r\n                  <mat-form-field class=\"demo-full-width\">    \r\n                      <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\">    \r\n                  </mat-form-field>    \r\n              </td>        \r\n              </tr>    \r\n                \r\n              <tr>    \r\n                  <td colspan=\"2\">    \r\n  \r\n                  </td>    \r\n              </tr>    \r\n              <tr>    \r\n                  <td colspan=\"2\" class=\"content-center\">    \r\n                      <button mat-raised-button color=\"primary\" style=\"margin: 8%\" type=\"submit\">Submit</button>                          \r\n                  </td>    \r\n              </tr>    \r\n          </table>    \r\n      </form>          \r\n    </mat-card-content> \r\n    \r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/admin_components/admin-login/admin-login.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-login/admin-login.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(authService, router, ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAdminLoggedIn()) {
            this.router.navigate(['/admin-books']);
        }
    };
    AdminLoginComponent.prototype.loginAdmin = function () {
        var admin = {
            username: this.username,
            password: this.password
        };
        console.log('trying to authenticate with api');
        if (1) {
            console.log('Forwording to admin page.........');
            this.router.navigate(['/admin-books']);
        }
        else {}
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/components/admin_components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/components/admin_components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/admin-nav/admin-nav.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-nav/admin-nav.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;  \r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n  color:#97b3ce;\r\n  background-color:#1f2637;\r\n}\r\n\r\n.center-toolbar {    \r\n  display: flex;    \r\n  align-items: center;    \r\n  width: 100%;        \r\n}\r\n\r\n.side-nav-items {\r\n  text-decoration:none;        \r\n  color:#97b3ce;\r\n  transition:all .2s ease-in-out\r\n}\r\n\r\n.side-nav-active-item{\r\n  background-color:#009bfc;\r\n  text-decoration:none;        \r\n  color:#97b3ce;\r\n  transition:all .2s ease-in-out\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin_components/admin-nav/admin-nav.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-nav/admin-nav.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n\r\n      <a mat-list-item (click)=\"switchToManageBooks()\" \r\n         [ngClass]=\"{'side-nav-active-item': (apptitle === 'Manage Books'),\r\n                     'side-nav-items': !(apptitle === 'Manage Books')}\">\r\n      <mat-icon aria-hidden=\"true\">book</mat-icon>Manage Books</a>      \r\n      <a mat-list-item (click)=\"switchToManageUsers()\"\r\n         [ngClass]=\"{'side-nav-active-item': (apptitle === 'Manage Users'),\r\n                     'side-nav-items': !(apptitle === 'Manage Users')}\">\r\n      <mat-icon aria-hidden=\"true\">person</mat-icon> Manage Users</a>\r\n      <a mat-list-item (click)=\"swithToNotifications()\"\r\n         [ngClass]=\"{'side-nav-active-item': (apptitle === 'Notifications'),\r\n                     'side-nav-items': !(apptitle === 'Notifications')}\">\r\n      <mat-icon aria-hidden=\"true\">notification_important</mat-icon>Notifications</a>\r\n      <!-- <a mat-list-item (click)=\"switchToManageFines()\"\r\n         [ngClass]=\"{'side-nav-active-item': (apptitle === 'Manage Fines'),\r\n                     'side-nav-items': !(apptitle === 'Manage Fines')}\">\r\n      <mat-icon aria-hidden=\"true\">attach_money</mat-icon> Manage Fines</a>       -->\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>{{ apptitle }}</span>\r\n      <span class=\"center-toolbar\"></span>\r\n      <button *ngIf=\"authService.isAdminLoggedIn()\" mat-button routerLink=\"/admin-books\">Dashboard</button>\r\n      <button *ngIf=\"authService.isAdminLoggedIn()\" mat-button routerLink=\"/admin/profile\">Profile</button>\r\n      <button *ngIf=\"authService.isAdminLoggedIn()\" mat-button (click)=\"onLogoutClick()\">Logout</button>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/admin_components/admin-nav/admin-nav.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin_components/admin-nav/admin-nav.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavComponent", function() { return AdminNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminNavComponent = /** @class */ (function () {
    function AdminNavComponent(breakpointObserver, authService, flashMessage, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.apptitle = 'Manage Books';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        if (this.router.url === '/admin-books') {
            this.apptitle = 'Manage Books';
        }
        else if (this.router.url === '/admin-users') {
            this.apptitle = 'Manage Users';
        }
        else if (this.router.url === '/admin-fines') {
            this.apptitle = 'Manage Fines';
        }
        else if (this.router.url === '/admin-notices') {
            this.apptitle = 'Notifications';
        }
    }
    AdminNavComponent.prototype.onLogoutClick = function () {
        console.log('You clicked Logout for admin');
        this.authService.adminLogout();
        this.flashMessage.show('You have logged out as an admin', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/admin-login']);
        return false;
    };
    AdminNavComponent.prototype.switchToManageBooks = function () {
        this.apptitle = 'Manage Books';
        this.router.navigate(['/admin-books']);
    };
    AdminNavComponent.prototype.switchToManageUsers = function () {
        this.apptitle = 'Manage Users';
        this.router.navigate(['/admin-users']);
    };
    AdminNavComponent.prototype.switchToManageFines = function () {
        this.apptitle = 'Manage Fines';
    };
    AdminNavComponent.prototype.swithToNotifications = function () {
        this.apptitle = 'Notifications';
        this.router.navigate(['/admin-notices']);
    };
    AdminNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin-nav',
            template: __webpack_require__(/*! ./admin-nav.component.html */ "./src/app/components/admin_components/admin-nav/admin-nav.component.html"),
            styles: [__webpack_require__(/*! ./admin-nav.component.css */ "./src/app/components/admin_components/admin-nav/admin-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminNavComponent);
    return AdminNavComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dash.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dash.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 220px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;  \r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dash.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dash.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-nav></admin-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">Book Dashboard</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{card.title}}\r\n            <button mat-mini-fab class=\"more-button\" color=\"primary\" (click)=\"addBook()\" aria-label=\"Toggle menu\">\r\n              <mat-icon>note_add</mat-icon>\r\n            </button>            \r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-book-table></app-book-table>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dash.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dash.component.ts ***!
  \******************************************************************************/
/*! exports provided: BookDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDashComponent", function() { return BookDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _book_dialog_book_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-dialog/book-dialog.component */ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.ts");
/* harmony import */ var _book_table_book_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-table/book-table.component */ "./src/app/components/admin_components/book-dash/book-table/book-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDashComponent = /** @class */ (function () {
    function BookDashComponent(dialog, bookService) {
        this.dialog = dialog;
        this.bookService = bookService;
        this.cards = [
            { title: '', cols: 2, rows: 2 }
        ];
    }
    BookDashComponent.prototype.isMobileDashboard = function () {
        // Return false for web view.
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    BookDashComponent.prototype.addBook = function () {
        var _this = this;
        console.log('Adding a book');
        // code here
        var dialogRef = this.dialog.open(_book_dialog_book_dialog_component__WEBPACK_IMPORTED_MODULE_3__["BookDialogComponent"], {
            height: '575px',
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Add-Book-Dialog was closed');
            _this.tablecomp.refreshAPIData();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_book_table_book_table_component__WEBPACK_IMPORTED_MODULE_4__["BookTableComponent"]),
        __metadata("design:type", _book_table_book_table_component__WEBPACK_IMPORTED_MODULE_4__["BookTableComponent"])
    ], BookDashComponent.prototype, "tablecomp", void 0);
    BookDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book-dash',
            template: __webpack_require__(/*! ./book-dash.component.html */ "./src/app/components/admin_components/book-dash/book-dash.component.html"),
            styles: [__webpack_require__(/*! ./book-dash.component.css */ "./src/app/components/admin_components/book-dash/book-dash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BookDashComponent);
    return BookDashComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .container{\r\n    margin-top: 10px\r\n  }\r\n  \r\n  .green-btn{\r\n    background-color: #4CAF50\r\n  }\r\n  \r\n  .example-button-row {\r\n     display: flex; \r\n     align-items: center; \r\n     justify-content: space-around; \r\n  }\r\n  \r\n  .save-btn{\r\n    padding-top: 10%;\r\n  }\r\n  \r\n  .progress-spin-vals{\r\n    margin: 0 130px;\r\n  }\r\n  \r\n  .warn-text{\r\n    margin-left: 12.5%\r\n  }"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Add Book</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <button mat-mini-fab (click)=\"onNoClick()\" color=\"primary\" aria-label=\"Toggle menu\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<mat-card-content>\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"_bookForm\" (submit)=\"onSubmit()\">\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-label>Title</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"Title\" placeholder=\"Title\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-label>Author</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"Author\" placeholder=\"Author\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-select placeholder=\"Availability\" formControlName=\"Available\">\r\n          <mat-option value=\"true\">Yes</mat-option>\r\n          <mat-option value=\"false\">No</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-select placeholder=\"Category\" formControlName=\"Category\">\r\n          <mat-option value=\"Arts-and-Music\">Arts & Music</mat-option>\r\n          <mat-option value=\"Biographies\">Biographies</mat-option>\r\n          <mat-option value=\"Business\">Business</mat-option>\r\n          <mat-option value=\"Computers-and-Tech\">Computers & Tech</mat-option>\r\n          <mat-option value=\"Education\">Educational</mat-option>\r\n          <mat-option value=\"History\">History</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-label>Price</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"Price\" placeholder=\"Author\">\r\n      </mat-form-field>\r\n      \r\n      <div class=\"button-row\">\r\n        <mat-label>Attach Image </mat-label>\r\n        <button mat-button color=\"primary\" mat-mini-fab type=\"button\" (click)=\"imgFileInput.click()\">\r\n          <mat-icon>attachment</mat-icon>\r\n        </button>        \r\n      </div>\r\n\r\n      <div class=\"button-row\">\r\n        <mat-label>Attach Book File </mat-label>\r\n        <button mat-button color=\"primary\" mat-mini-fab type=\"button\" (click)=\"imgFileInput1.click()\">\r\n          <mat-icon>attachment</mat-icon>\r\n        </button>        \r\n      </div>\r\n      \r\n      <input hidden type=\"file\" #imgFileInput (change)=\"changeImage($event)\" accept=\".png,.jpg\">\r\n      <input hidden type=\"file\" #imgFileInput1 (change)=\"changebookImage($event)\" accept=\".pdf\">\r\n              \r\n      <div class=\"save-btn\">\r\n        <button *ngIf=\"imagebookAvailable()\" class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n        <button *ngIf=\"allSetToGo()\" class=\"btn btn-success\" style=\"margin-left: 10px\" (click)=\"commit()\">Commit</button>\r\n      </div>\r\n            \r\n      <mat-progress-spinner \r\n        class=\"progress-spin-vals\"\r\n        diameter=\"40\"       \r\n        color=\"primary\"\r\n        mode=\"determinate\"\r\n        [value]=\"uploadPercent\">        \r\n      </mat-progress-spinner>\r\n\r\n      <div class=\"warn-text\" *ngIf=\"allSetToGo()\">You must commit to save to database</div>\r\n    </form>\r\n  </div>\r\n\r\n  \r\n</mat-card-content>"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BookDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDialogComponent", function() { return BookDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







// aws.config.update({
//   secretAccessKey: "pCyaSUPJq4+BMtzbaorBwfpOxxtCo1f1HV8hWOWc",
//   accessKeyId: "AKIAIHU6I6EDKXHPJLWA",
//   region: 'us-east-1' //E.g us-east-1
//  });
var BookDialogComponent = /** @class */ (function () {
    function BookDialogComponent(_formBuilder, dialogRef, _bookService, uploadservice, ngFlashMessageService, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._bookService = _bookService;
        this.uploadservice = uploadservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.data = data;
        //This is the proper imageURL we should receive
        this.image = null;
        this.bookimage = null;
        this.uploadPercent = '0.00';
    }
    BookDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BookDialogComponent.prototype.ngOnInit = function () {
        this._bookForm = this._formBuilder.group({
            _id: [],
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Category: ['Arts-and-Music', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Available: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    BookDialogComponent.prototype.ngDoCheck = function () {
    };
    BookDialogComponent.prototype.onSubmit = function () {
        //Firebase Image upload should be here 
        this.uploadImage();
        this.uploadbookImage();
        //Wait until there is a value for this.image
        while (this.image != null) {
            return true;
        }
    };
    BookDialogComponent.prototype.commit = function () {
        var _this = this;
        var book = {
            title: this._bookForm.value.Title,
            author: this._bookForm.value.Author,
            category: this._bookForm.value.Category,
            image: this.image,
            price: this._bookForm.value.Price,
            bookimage: this.bookimage,
            available: (this._bookForm.value.Available === 'true')
        };
        console.log('Before Registering the book: ', book);
        //Register a book
        this._bookService.registerBook(book).subscribe(function (data) {
            console.log('data received: ', data);
            if (data.success) {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Book Registered Successfully"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'info'
                });
            }
            else {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Book Failed to Register"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    BookDialogComponent.prototype.changeImage = function (event) {
        //Assigns the attached image to class scope variable
        var _this = this;
        this.imageFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.image = event.target.result;
        };
        this.image = "https://esdbookshelf1.s3.amazonaws.com/" + event.target.files[0].name;
        console.log('Image path', event.target.files[0].name);
    };
    BookDialogComponent.prototype.changebookImage = function (event) {
        //Assigns the attached image to class scope variable
        var _this = this;
        this.bookimageFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.bookimage = event.target.result;
        };
        this.bookimage = "https://esdbookshelf1.s3.amazonaws.com/book/" + event.target.files[0].name;
        console.log('Image path', event.target.files[0].name);
    };
    BookDialogComponent.prototype.uploadImage = function () {
        console.log(this.imageFile);
        this.uploadservice.uploadFile(this.imageFile);
        console.log('This is the address of file', this.image);
    };
    BookDialogComponent.prototype.uploadbookImage = function () {
        console.log(this.bookimageFile);
        this.uploadservice.uploadbookFile(this.bookimageFile);
        console.log('This is the address of book file', this.bookimage);
    };
    BookDialogComponent.prototype.allSetToGo = function () {
        var flag = false;
        console.log(this.image);
        while (this.image != null) {
            // while an imageURL is returned check if all fields are not empty
            if (this._bookForm.value.Title != '' && this._bookForm.value.Author != '') {
                flag = true;
            }
            break;
        }
        return flag;
    };
    BookDialogComponent.prototype.imageAvailable = function () {
        var flag = false;
        while (this.imageFile != undefined) {
            //checks if image upload button is clicked
            flag = true;
            break;
        }
        if (flag) {
            if (this.imagebookAvailable()) {
                return true;
            }
            else {
                return false;
            }
        }
        return flag;
    };
    BookDialogComponent.prototype.imagebookAvailable = function () {
        var flag = false;
        while (this.imageFile != undefined) {
            //checks if image upload button is clicked
            flag = true;
            break;
        }
        return flag;
    };
    BookDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-dialog',
            template: __webpack_require__(/*! ./book-dialog.component.html */ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.html"),
            styles: [__webpack_require__(/*! ./book-dialog.component.css */ "./src/app/components/admin_components/book-dash/book-dialog/book-dialog.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"], Object])
    ], BookDialogComponent);
    return BookDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-edit/book-edit.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .container{\r\n    margin-top: 10px\r\n  }\r\n  \r\n  .green-btn{\r\n    background-color: #4CAF50\r\n  }\r\n  \r\n  .progress-spin-vals{\r\n    margin: 0 220px;\r\n  }\r\n  \r\n  .warn-text{\r\n    margin-left: 12.5%\r\n  }"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-edit/book-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Edit Book</span>\r\n    <span class=\"example-spacer\"></span>\r\n    <button mat-mini-fab (click)=\"onNoClick()\" color=\"primary\" aria-label=\"Toggle menu\">\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<mat-card-content>\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"_editBookForm\" (submit)=\"onSubmitEdit()\">\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-label>Title</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"Title\" placeholder=\"Title\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-label>Author</mat-label>\r\n        <input matInput type=\"text\" formControlName=\"Author\" placeholder=\"Author\">\r\n      </mat-form-field>      \r\n      <mat-form-field class=\"example-form\" appearance=\"outline\">\r\n        <mat-select placeholder=\"Category\" formControlName=\"Category\">\r\n          <mat-option value=\"Arts-and-Music\">Arts & Music</mat-option>\r\n          <mat-option value=\"Biographies\">Biographies</mat-option>\r\n          <mat-option value=\"Business\">Business</mat-option>\r\n          <mat-option value=\"Computers-and-Tech\">Computers & Tech</mat-option>\r\n          <mat-option value=\"Education\">Educational</mat-option>\r\n          <mat-option value=\"History\">History</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div class=\"button-row\">\r\n        <mat-label>Attach Image </mat-label>\r\n        <button mat-button color=\"primary\" mat-mini-fab type=\"button\" (click)=\"imgFileInput.click()\">\r\n          <mat-icon>attachment</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <input hidden type=\"file\" #imgFileInput (change)=\"changeImage($event)\" accept=\".png,.jpg\">\r\n\r\n\r\n      <div class=\"save-btn\">\r\n        <button *ngIf=\"imageAvailable()\" class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n        <button *ngIf=\"allSetToGo()\" class=\"btn btn-success\" style=\"margin-left: 10px\" (click)=\"commit()\">Commit</button>\r\n      </div>\r\n\r\n      <mat-progress-spinner class=\"progress-spin-vals\" diameter=\"35\" color=\"primary\" mode=\"determinate\" [value]=\"uploadPercent\">\r\n      </mat-progress-spinner>\r\n\r\n      <div class=\"warn-text\" *ngIf=\"allSetToGo()\">You must commit to save to database</div>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card-content>"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-edit/book-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(dialogRef, _formBuilder, _bookService, ngFlashMessageService, data) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        this._bookService = _bookService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.data = data;
        //This is the proper imageURL we should receive
        this.image = null;
        this.uploadPercent = '0.00';
    }
    BookEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BookEditComponent.prototype.ngOnInit = function () {
        this._editBookForm = this._formBuilder.group({
            _id: [],
            Title: [this.data.bookTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Author: [this.data.bookAuthor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Category: [this.data.bookCategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    BookEditComponent.prototype.changeImage = function (event) {
        //Assigns the attached image to class scope variable
        this.imageFile = event.target.files[0];
    };
    BookEditComponent.prototype.onSubmitEdit = function () {
        //Firebase Image upload should be here 
        this.uploadImage();
        //Wait until there is a value for this.image
        while (this.image != null) {
            return true;
        }
    };
    BookEditComponent.prototype.commit = function () {
        var _this = this;
        var editedBook = {
            title: this._editBookForm.value.Title,
            author: this._editBookForm.value.Author,
            category: (this._editBookForm.value.Category),
            image: this.image
        };
        //Edit Book - you can't edit the availability through this though
        this._bookService.editBook(this.data.editId, editedBook).subscribe(function (data) {
            console.log('On Edit Data received: ', data);
            if (data.success) {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Book updated successfully"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'info'
                });
            }
            else {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Book Failed to update"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    BookEditComponent.prototype.uploadImage = function () {
    };
    BookEditComponent.prototype.allSetToGo = function () {
        var flag = false;
        while (this.image != null) {
            // while an imageURL is returned check if all fields are not empty
            if (this._editBookForm.value.Title != '' && this._editBookForm.value.Author != '') {
                flag = true;
            }
            break;
        }
        return flag;
    };
    BookEditComponent.prototype.imageAvailable = function () {
        var flag = false;
        while (this.imageFile != undefined) {
            //checks if image upload button is clicked
            flag = true;
            break;
        }
        return flag;
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"], Object])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.middlespanner{\r\n  justify-content: space-between; \r\n}"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>Remove the book ?</span>\r\n    <span class=\"example-spacer\"></span>    \r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div mat-dialog-actions style=\"margin-left: 3%; margin-right: 3%;\">\r\n      <button mat-button class=\"btn btn-danger\" (click)=\"confirmDelete()\">Delete</button>      \r\n      <button mat-button class=\"btn btn-primary\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BookDelWarnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDelWarnComponent", function() { return BookDelWarnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/books.service */ "./src/app/services/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BookDelWarnComponent = /** @class */ (function () {
    function BookDelWarnComponent(dialogRef, _bookService, ngFlashMessageService, data) {
        this.dialogRef = dialogRef;
        this._bookService = _bookService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.data = data;
    }
    BookDelWarnComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BookDelWarnComponent.prototype.ngOnInit = function () {
    };
    BookDelWarnComponent.prototype.confirmDelete = function () {
        //Code here to delete after warn
        var _this = this;
        console.log('This will be removed: ', this.data.deleteID);
        this._bookService.deleteBook(this.data.deleteID).subscribe(function (Rdata) {
            console.log('delete status ', Rdata);
            if (Rdata.success) {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Deleted Successfully"],
                    dismissible: true,
                    timeout: 8000,
                    type: 'info'
                });
            }
            else {
                _this.dialogRef.close();
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Failed to delete"],
                    dismissible: true,
                    timeout: 8000,
                    type: 'danger'
                });
            }
        });
    };
    BookDelWarnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-del-warn',
            template: __webpack_require__(/*! ./book-del-warn.component.html */ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.html"),
            styles: [__webpack_require__(/*! ./book-del-warn.component.css */ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"], Object])
    ], BookDelWarnComponent);
    return BookDelWarnComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-table.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-table.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n    position: relative;\r\n  }\r\n.example-header {\r\n    min-height: 64px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 24px;\r\n    font-size: 20px;\r\n  }\r\n.example-table {\r\n    overflow: auto;\r\n    min-height: 300px;\r\n  }\r\n.example-loading-shade {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 56px;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.15);\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n.example-rate-limit-reached {\r\n    color: #980000;\r\n    max-width: 360px;\r\n    text-align: center;\r\n  }\r\n/* Column Widths */\r\n.mat-column-number,\r\n  .mat-column-state {\r\n    max-width: 64px;\r\n    text-align: left\r\n  }\r\n.mat-column-created {\r\n    max-width: 124px;\r\n  }  "

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-table.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-table.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Results\">\r\n  </mat-form-field>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <!--_id-->\r\n            <ng-container matColumnDef=\"_id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>_id</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row._id}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--title-->\r\n            <ng-container matColumnDef=\"title\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>title</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.title}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--author-->    \r\n            <ng-container matColumnDef=\"author\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>author</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\"> {{row.author }} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--category-->\r\n            <ng-container matColumnDef=\"category\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>category</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\"> {{row.category}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--image-->\r\n            <ng-container matColumnDef=\"image\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>image</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\">\r\n                    <a href=\"{{row.image}}\" target=\"_blank\">\r\n                        <mat-icon>image</mat-icon>\r\n                    </a>  \r\n                </mat-cell>\r\n            </ng-container>\r\n            \r\n            <!--available-->\r\n            <ng-container matColumnDef=\"available\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>availability</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.available }} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>action</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <button mat-icon-button (click)=\"editBook(row._id, row.title, row.author, row.available, row.category)\" aria-label=\"Toggle menu\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"deleteBook(row._id)\" aria-label=\"Toggle menu\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button *ngIf=\"!row.available\" (click)=\"makeBookAvailable(row._id)\" aria-label=\"Toggle menu\">\r\n                        <mat-icon>compare_arrows</mat-icon>\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator\r\n                [length]=\"dataSource.filteredData.length\"\r\n                [pageIndex]=\"0\"\r\n                [pageSize]=\"5\"\r\n                [pageSizeOptions]=\"[5, 9]\">\r\n        </mat-paginator>"

/***/ }),

/***/ "./src/app/components/admin_components/book-dash/book-table/book-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin_components/book-dash/book-table/book-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BookTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTableComponent", function() { return BookTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _book_del_warn_book_del_warn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-del-warn/book-del-warn.component */ "./src/app/components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-edit/book-edit.component */ "./src/app/components/admin_components/book-dash/book-edit/book-edit.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookTableComponent = /** @class */ (function () {
    function BookTableComponent(bookService, userService, dialog) {
        this.bookService = bookService;
        this.userService = userService;
        this.dialog = dialog;
        this.displayedColumns = ['title', 'author', 'category', 'image', 'available', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    BookTableComponent.prototype.ngOnInit = function () {
        this.refreshAPIData();
    };
    BookTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BookTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BookTableComponent.prototype.editBook = function (bookID, titleVal, authorVal, availVal, catVal) {
        var _this = this;
        console.log('Editing Book: ', bookID);
        // code here to edit book
        var dialogRef = this.dialog.open(_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__["BookEditComponent"], {
            height: '560px',
            width: '600px',
            data: { editId: bookID,
                bookTitle: titleVal,
                bookAuthor: authorVal,
                bookAvailability: availVal,
                bookCategory: catVal
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The edit-dialog was closed');
            _this.refreshAPIData();
        });
    };
    BookTableComponent.prototype.refreshAPIData = function () {
        var _this = this;
        //Dynamic Data check bro this was the only way
        return this.bookService.getBooks().subscribe(function (dataBooks) {
            _this.dataSource.data = dataBooks;
        });
    };
    BookTableComponent.prototype.deleteBook = function (bookID) {
        var _this = this;
        console.log('Deleting Book ID: ', bookID);
        // code here to delete book
        var dialogRef = this.dialog.open(_book_del_warn_book_del_warn_component__WEBPACK_IMPORTED_MODULE_3__["BookDelWarnComponent"], {
            data: { deleteID: bookID }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The delete-dialog was closed');
            _this.refreshAPIData();
        });
    };
    BookTableComponent.prototype.makeBookAvailable = function (bookID) {
        var _this = this;
        console.log('trying to make', bookID, 'available');
        //For patching the book with available true
        var update = {
            available: true
        };
        var borrowBook = {
            bookId: bookID
        };
        this.bookService.makeAvailable(bookID, update).subscribe(function (data) {
            console.log('book datas id: ', data.borrowedUser._id);
            //Remove the BookObject from the user.borrows
            if (data.success) {
                _this.userService.removeBorrows(borrowBook, data.borrowedUser._id).subscribe(function (subData) {
                    console.log('Book made available and removed from user.borrows');
                });
            }
            _this.refreshAPIData();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BookTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BookTableComponent.prototype, "sort", void 0);
    BookTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-table',
            template: __webpack_require__(/*! ./book-table.component.html */ "./src/app/components/admin_components/book-dash/book-table/book-table.component.html"),
            styles: [__webpack_require__(/*! ./book-table.component.css */ "./src/app/components/admin_components/book-dash/book-table/book-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BookTableComponent);
    return BookTableComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/notifications/notifications.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin_components/notifications/notifications.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 220px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/admin_components/notifications/notifications.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/admin_components/notifications/notifications.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-nav></admin-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">\r\n    <div *ngIf=\"messages.length\">Notifications</div>\r\n    <div *ngIf=\"!messages.length\">No Notifications Received</div>\r\n  </h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <div *ngFor=\"let message of messages\">\r\n      <mat-card>\r\n        <mat-card-subtitle>\r\n          {{ message.message }}\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <button mat-button (click)=\"deleteNotification(message.id)\">Dismiss</button>          \r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin_components/notifications/notifications.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin_components/notifications/notifications.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notificationService, ngFlashMessageService) {
        this.notificationService = notificationService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.messages = [];
        this.getNotifications();
    }
    NotificationsComponent.prototype.isMobileDashboard = function () {
        // Return false for web view.
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.notificationService.getAllNotifications().subscribe(function (data) {
            console.log(data);
            data.forEach(function (element) {
                _this.messages.push({ message: element.message, id: element._id });
            });
        });
    };
    NotificationsComponent.prototype.deleteNotification = function (notiId) {
        var _this = this;
        this.notificationService.deleteNotificationById(notiId).subscribe(function (res) {
            if (res.success) {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Notification Deleted"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'info'
                });
                _this.refreshNotifications();
            }
            else {
            }
        });
    };
    NotificationsComponent.prototype.refreshNotifications = function () {
        //empty the messages array
        this.messages.length = 0;
        this.getNotifications();
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/admin_components/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/components/admin_components/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-dash.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-dash.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 220px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;  \r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-dash.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-dash.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<admin-nav></admin-nav>\r\n<div class=\"grid-container\" [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">User Dashboard</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>          \r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-user-table></app-user-table>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-dash.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-dash.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashComponent", function() { return UserDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserDashComponent = /** @class */ (function () {
    function UserDashComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
        ];
    }
    UserDashComponent.prototype.isMobileDashboard = function () {
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    UserDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-dash',
            template: __webpack_require__(/*! ./user-dash.component.html */ "./src/app/components/admin_components/user-dash/user-dash.component.html"),
            styles: [__webpack_require__(/*! ./user-dash.component.css */ "./src/app/components/admin_components/user-dash/user-dash.component.css")]
        })
    ], UserDashComponent);
    return UserDashComponent;
}());



/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-table/user-table.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-table/user-table.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-table/user-table.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-table/user-table.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Results\">\r\n  </mat-form-field>\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <!--_id-->\r\n            <ng-container matColumnDef=\"_id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>_id</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">  </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--title-->\r\n            <ng-container matColumnDef=\"name\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>name</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.name}}  </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--author-->    \r\n            <ng-container matColumnDef=\"username\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>username</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\"> {{row.username}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--category-->\r\n            <ng-container matColumnDef=\"category\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>category</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\"> {{row.category}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--image-->\r\n            <ng-container matColumnDef=\"image\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>image</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\" class=\"mycolor2\">\r\n                    <a href=\"{{row.image}}\" target=\"_blank\">\r\n                        <mat-icon>image</mat-icon>\r\n                    </a>  \r\n                </mat-cell>\r\n            </ng-container>\r\n            \r\n            <!--available-->\r\n            <ng-container matColumnDef=\"available\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>availability</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\"> {{row.available }} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header>action</mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row\">\r\n                    <!-- <button mat-icon-button aria-label=\"Toggle menu\">\r\n                        <mat-icon>edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button aria-label=\"Toggle menu\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>                     -->\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator\r\n                [length]=\"dataSource.filteredData.length\"\r\n                [pageIndex]=\"0\"\r\n                [pageSize]=\"5\"\r\n                [pageSizeOptions]=\"[5, 9]\">\r\n        </mat-paginator>"

/***/ }),

/***/ "./src/app/components/admin_components/user-dash/user-table/user-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin_components/user-dash/user-table/user-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(userService) {
        this.userService = userService;
        this.genUsers = [];
        this.displayedColumns = ['name', 'username', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    UserTableComponent.prototype.ngOnInit = function () {
        this.refreshAPIData();
    };
    UserTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UserTableComponent.prototype.refreshAPIData = function () {
        var _this = this;
        //Dynamic Data handling
        this.userService.getAllUsers().subscribe(function (userdata) {
            console.log('userdata: ', userdata);
            userdata.user.forEach(function (element) {
                if (element.role === 'User') {
                    _this.genUsers.push(element);
                }
            });
            console.log('genUsers', _this.genUsers);
            _this.dataSource.data = _this.genUsers;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserTableComponent.prototype, "sort", void 0);
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/components/admin_components/user-dash/user-table/user-table.component.html"),
            styles: [__webpack_require__(/*! ./user-table.component.css */ "./src/app/components/admin_components/user-dash/user-table/user-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/afpay/afpay.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/user_components/afpay/afpay.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user_components/afpay/afpay.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/user_components/afpay/afpay.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  afpay works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user_components/afpay/afpay.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user_components/afpay/afpay.component.ts ***!
  \*********************************************************************/
/*! exports provided: AfpayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfpayComponent", function() { return AfpayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AfpayComponent = /** @class */ (function () {
    function AfpayComponent(_bookService, _userService, ngFlashMessageService, router) {
        this._bookService = _bookService;
        this._userService = _userService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    AfpayComponent.prototype.ngOnInit = function () {
        // constructor(private router: Router)
        var _this = this;
        var updateBook = {
            available: true
        };
        //borrowBook
        var borrowBook = JSON.parse(localStorage.getItem("borrowBook"));
        //
        // var borbook = JSON.parse(localStorage.getItem("borbook"))
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        //title
        this._bookService.borrowBook(localStorage.getItem("borbook"), updateBook).subscribe(function (data) {
            if (data.success) {
                //book available updated to false
                console.log(localStorage.getItem("title"), 'availability is now false');
                //Then update the user.borrow
                _this._userService.addToBorrows(borrowBook, loggedUserId).subscribe(function (subData) {
                    if (subData.success) {
                        console.log('Added to the borrowed list of user');
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["You bought " + localStorage.getItem("title")],
                            dismissible: true,
                            timeout: 4000,
                            type: 'info'
                        });
                    }
                    else {
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["Something went wrong"],
                            dismissible: true,
                            timeout: 4000,
                            type: 'danger'
                        });
                    }
                });
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Something went wrong"],
                    dismissible: true,
                    timeout: 4000,
                    type: 'danger'
                });
            }
        });
        this.router.navigate(['/']);
    };
    AfpayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-afpay',
            template: __webpack_require__(/*! ./afpay.component.html */ "./src/app/components/user_components/afpay/afpay.component.html"),
            styles: [__webpack_require__(/*! ./afpay.component.css */ "./src/app/components/user_components/afpay/afpay.component.css")]
        }),
        __metadata("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AfpayComponent);
    return AfpayComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 205px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.example-card {\r\n  max-width: 250px;\r\n  max-height: 250px;\r\n  margin-left: 2.5%;\r\n  margin-right: 2.5%;\r\n  margin-top: 0.75%;\r\n}\r\n\r\n.book-pagination-controls{\r\n  margin-left: 13.5%; \r\n  margin-right: 13.5%\r\n}\r\n\r\n.card-pagination-controls{\r\n  margin-left: 32.5%; \r\n  margin-right: 32.5%;\r\n}"

/***/ }),

/***/ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-nav></my-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">\r\n    <div *ngIf=\"cards.length\">Your Flagged Books</div>\r\n    <div *ngIf=\"!cards.length\">The list is empty</div>\r\n  </h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <!--Cards represent the categories || That is paginated also-->\r\n    <mat-grid-tile *ngFor=\"let card of cards | paginate: {\r\n                                                            id: 'outer-cards',\r\n                                                            itemsPerPage: 4,\r\n                                                            currentPage: x,\r\n                                                            totalItems: cards.length }\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{card.title}}\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <!--For Books in card.books display books || Requires pagination for each card-->\r\n          <mat-card class=\"example-card\" *ngFor=\"let book of card.books | paginate: {\r\n                                                                                      id: card.title, \r\n                                                                                      itemsPerPage: 4,\r\n                                                                                      currentPage: p[card.title]}\">\r\n            <mat-card-header>\r\n              <mat-card-title>{{book.title}}</mat-card-title>\r\n              <mat-card-subtitle>{{book.author}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-sm-image src=\"{{book.image}}\" alt=\"Photo of a Shiba Inu\" style=\"height: auto;\">\r\n            <mat-card-actions>\r\n              <button mat-button (click)=\"borrowBook(book)\">BORROW</button>\r\n              <button mat-button (click)=\"unFlagBook(book)\">UNFLAG</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BookmarksDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksDashComponent", function() { return BookmarksDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarksDashComponent = /** @class */ (function () {
    function BookmarksDashComponent(_userService) {
        this._userService = _userService;
        //Categories of books
        this.EducationBooks = [];
        this.AMBooks = [];
        this.CTBooks = [];
        this.HistoryBooks = [];
        this.BioraphyBooks = [];
        this.BusinessBooks = [];
        this.cards = [];
        //Pagination Data
        this.p = {};
        this.x = 1;
        this.getUserBookmarksData();
    }
    BookmarksDashComponent.prototype.getUserBookmarksData = function () {
        var _this = this;
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        this._userService.getBookData(loggedUserId).subscribe(function (data) {
            if (data.success) {
                data.user.bookmarks.forEach(function (element) {
                    //You need to remove the duplicates still though
                    //if element.category === 'category' push to '#categorybook'
                    if (element.category === "Education") {
                        _this.EducationBooks.push(element);
                    }
                    else if (element.category === "Arts-and-Music") {
                        _this.AMBooks.push(element);
                    }
                    else if (element.category === "Computers-and-Tech") {
                        _this.CTBooks.push(element);
                    }
                    else if (element.category === "History") {
                        _this.HistoryBooks.push(element);
                    }
                    else if (element.category === "Biographies") {
                        _this.BioraphyBooks.push(element);
                    }
                    else if (element.category === "Business") {
                        _this.BusinessBooks.push(element);
                    }
                }),
                    _this.addBooksToCards();
            }
        });
    };
    BookmarksDashComponent.prototype.isMobileDashboard = function () {
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    BookmarksDashComponent.prototype.borrowBook = function (book) {
        console.log('Borrowing :', book);
    };
    BookmarksDashComponent.prototype.unFlagBook = function (book) {
        console.log('Unflagging :', book);
        //code here to unflag
    };
    BookmarksDashComponent.prototype.addBooksToCards = function () {
        if (this.AMBooks.length > 0) {
            this.cards.push({ title: 'Arts & Music', cols: 1, rows: 2, books: this.AMBooks });
        }
        if (this.CTBooks.length > 0) {
            this.cards.push({ title: 'Computer & Tech', cols: 1, rows: 2, books: this.CTBooks });
        }
        if (this.EducationBooks.length > 0) {
            this.cards.push({ title: 'Education', cols: 1, rows: 2, books: this.EducationBooks });
        }
        if (this.HistoryBooks.length > 0) {
            this.cards.push({ title: 'History', cols: 1, rows: 2, books: this.HistoryBooks });
        }
        if (this.BioraphyBooks.length > 0) {
            this.cards.push({ title: 'Biographies', cols: 1, rows: 2, books: this.BioraphyBooks });
        }
        if (this.BusinessBooks.length > 0) {
            this.cards.push({ title: 'Business', cols: 1, rows: 2, books: this.BusinessBooks });
        }
    };
    BookmarksDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bookmarks-dash',
            template: __webpack_require__(/*! ./bookmarks-dash.component.html */ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.html"),
            styles: [__webpack_require__(/*! ./bookmarks-dash.component.css */ "./src/app/components/user_components/bookmarks-dash/bookmarks-dash.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], BookmarksDashComponent);
    return BookmarksDashComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/collection-dash/collection-dash.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/collection-dash.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 205px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.example-card {\r\n  max-width: 250px;\r\n  max-height: 250px;\r\n  margin-left: 2.5%;\r\n  margin-right: 2.5%;\r\n  margin-top: 0.75%;\r\n}\r\n\r\n.book-pagination-controls{\r\n  margin-left: 13.5%; \r\n  margin-right: 13.5%\r\n}\r\n\r\n.card-pagination-controls{\r\n  margin-left: 32.5%; \r\n  margin-right: 32.5%;\r\n}\r\n\r\n.main-div{\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/components/user_components/collection-dash/collection-dash.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/collection-dash.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-nav></my-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">\r\n    <div *ngIf=\"cards.length\">Reserved Books</div>\r\n    <div *ngIf=\"!cards.length\">You have not reserved any book</div>\r\n  </h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <!--Cards represent the categories || That is paginated also-->\r\n    <mat-grid-tile *ngFor=\"let card of cards | paginate: {\r\n                                                            id: 'outer-cards',\r\n                                                            itemsPerPage: 4,\r\n                                                            currentPage: x,\r\n                                                            totalItems: cards.length }\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n \r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{card.title}}            \r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <!--For Books in card.books display books || Requires pagination for each card-->\r\n          <mat-card class=\"example-card\" *ngFor=\"let book of card.books | paginate: {\r\n                                                                                      id: card.title, \r\n                                                                                      itemsPerPage: 4,\r\n                                                                                      currentPage: p[card.title]}\">\r\n            <mat-card-header>\r\n              <mat-card-title>{{book.title}}</mat-card-title>\r\n              <mat-card-subtitle>{{book.author}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-sm-image src= {{book.image}} alt=\"Photo of a Shiba Inu\" style=\"height: auto;\">\r\n            <mat-card-actions>\r\n              <button mat-button (click)=\"goToLink(book.bookimage)\">Open</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        \r\n        </mat-card-content>\r\n        <div class=\"book-pagination-controls\">\r\n          <!--pagination controls here-->\r\n          <pagination-controls [id]='card.title' (pageChange)=\"p[card.title] = $event\"></pagination-controls>\r\n        </div>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n  <div class=\"card-pagination-controls\">\r\n    <!--pagination controls of cards-->\r\n    <pagination-controls *ngIf=\"cards.length\" id='outer-cards'(pageChange)=\"x = $event\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/collection-dash/collection-dash.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/collection-dash.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CollectionDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionDashComponent", function() { return CollectionDashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _un_borrow_un_borrow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./un-borrow/un-borrow.component */ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CollectionDashComponent = /** @class */ (function () {
    function CollectionDashComponent(_userService, _bookService, _DomSanitizationService, dialog) {
        this._userService = _userService;
        this._bookService = _bookService;
        this._DomSanitizationService = _DomSanitizationService;
        this.dialog = dialog;
        //Categories of books
        this.EducationBooks = [];
        this.AMBooks = [];
        this.CTBooks = [];
        this.HistoryBooks = [];
        this.BioraphyBooks = [];
        this.BusinessBooks = [];
        this.cards = [];
        //Pagination Data
        this.p = {};
        this.x = 1;
        this.getUserBorrowData();
    }
    CollectionDashComponent.prototype.getUserBorrowData = function () {
        var _this = this;
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        this._userService.getBookData(loggedUserId).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                data.user.borrows.forEach(function (element) {
                    //if element._id.category === 'category' push to '#categorybook'
                    if (element._id.category === "Education") {
                        _this.EducationBooks.push(element._id);
                    }
                    else if (element._id.category === "Arts-and-Music") {
                        _this.AMBooks.push(element._id);
                    }
                    else if (element._id.category === "Computers-and-Tech") {
                        _this.CTBooks.push(element._id);
                    }
                    else if (element._id.category === "History") {
                        _this.HistoryBooks.push(element._id);
                    }
                    else if (element._id.category === "Biographies") {
                        _this.BioraphyBooks.push(element._id);
                    }
                    else if (element._id.category === "Business") {
                        _this.BusinessBooks.push(element._id);
                    }
                }),
                    _this.addBooksToCards();
            }
        });
    };
    CollectionDashComponent.prototype.isMobileDashboard = function () {
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    CollectionDashComponent.prototype.goToLink = function (url) {
        window.open(url, "_blank");
    };
    CollectionDashComponent.prototype.openSite = function (siteUrl) {
        window.open("//" + siteUrl, '_blank');
    };
    CollectionDashComponent.prototype.addBooksToCards = function () {
        if (this.AMBooks.length > 0) {
            this.cards.push({ title: 'Arts & Music', cols: 1, rows: 2, books: this.AMBooks });
        }
        if (this.CTBooks.length > 0) {
            this.cards.push({ title: 'Computer & Tech', cols: 1, rows: 2, books: this.CTBooks });
        }
        if (this.EducationBooks.length > 0) {
            this.cards.push({ title: 'Education', cols: 1, rows: 2, books: this.EducationBooks });
        }
        if (this.HistoryBooks.length > 0) {
            this.cards.push({ title: 'History', cols: 1, rows: 2, books: this.HistoryBooks });
        }
        if (this.BioraphyBooks.length > 0) {
            this.cards.push({ title: 'Biographies', cols: 1, rows: 2, books: this.BioraphyBooks });
        }
        if (this.BusinessBooks.length > 0) {
            this.cards.push({ title: 'Business', cols: 1, rows: 2, books: this.BusinessBooks });
        }
    };
    CollectionDashComponent.prototype.unBorrowBook = function (book) {
        var _this = this;
        //code here to unborrow
        var dialogRef = this.dialog.open(_un_borrow_un_borrow_component__WEBPACK_IMPORTED_MODULE_5__["UnBorrowComponent"], {
            data: { unBorrow: book }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.refreshCardsData();
        });
    };
    CollectionDashComponent.prototype.refreshCardsData = function () {
        //empty all the #category books cards also cards
        this.cards.length = 0;
        this.EducationBooks.length = 0;
        this.AMBooks.length = 0;
        this.CTBooks.length = 0;
        this.HistoryBooks.length = 0;
        this.BioraphyBooks.length = 0;
        this.BusinessBooks.length = 0;
        //Then add the data to cards again
        this.getUserBorrowData();
        this.addBooksToCards();
    };
    CollectionDashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collection-dash',
            template: __webpack_require__(/*! ./collection-dash.component.html */ "./src/app/components/user_components/collection-dash/collection-dash.component.html"),
            styles: [__webpack_require__(/*! ./collection-dash.component.css */ "./src/app/components/user_components/collection-dash/collection-dash.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CollectionDashComponent);
    return CollectionDashComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Return {{data.unBorrow.title}} ?</h1>\r\n\r\n<div mat-dialog-actions style=\"margin-left: 3%; margin-right: 3%;\">\r\n  <button mat-button class=\"btn btn-success\" (click)=\"confirmUnBorrow()\">Borrow</button>\r\n  <button mat-button class=\"btn btn-primary\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UnBorrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnBorrowComponent", function() { return UnBorrowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/notifications.service */ "./src/app/services/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UnBorrowComponent = /** @class */ (function () {
    function UnBorrowComponent(dialogRef, _notificationService, _userService, ngFlashMessageService, data) {
        this.dialogRef = dialogRef;
        this._notificationService = _notificationService;
        this._userService = _userService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.data = data;
    }
    UnBorrowComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UnBorrowComponent.prototype.ngOnInit = function () {
    };
    UnBorrowComponent.prototype.confirmUnBorrow = function () {
        var _this = this;
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        //Get the user data first to send a notification
        this._userService.getUserDatabyId(loggedUserId).subscribe(function (userdata) {
            if (userdata.success) {
                var username = userdata.user.username;
                var message = {
                    message: username + ' wants to hand-over ' + _this.data.unBorrow.title
                };
                //Send the message to mongocollection
                _this._notificationService.sendNotification(message).subscribe(function (ndata) {
                    if (ndata.success) {
                        _this.dialogRef.close();
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["Admin has been notified to withdraw book"],
                            dismissible: true,
                            timeout: 3000,
                            type: 'info'
                        });
                    }
                    else {
                        _this.dialogRef.close();
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["Failed to Notify the Admin"],
                            dismissible: true,
                            timeout: 3000,
                            type: 'danger'
                        });
                    }
                });
            }
        });
    };
    UnBorrowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-un-borrow',
            template: __webpack_require__(/*! ./un-borrow.component.html */ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.html"),
            styles: [__webpack_require__(/*! ./un-borrow.component.css */ "./src/app/components/user_components/collection-dash/un-borrow/un-borrow.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"], Object])
    ], UnBorrowComponent);
    return UnBorrowComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/login/flash.css":
/*!************************************************************!*\
  !*** ./src/app/components/user_components/login/flash.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\r\n    position: relative;\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 1rem;\r\n    margin-left: 5rem;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n}\r\n\r\n.flash-message\r\n{   \r\n    float: right;    \r\n}\r\n\r\np {\r\n    float: right;     \r\n}"

/***/ }),

/***/ "./src/app/components/user_components/login/login.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/user_components/login/login.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n  Login form css\r\n*/\r\n\r\n  \r\n.mat-card {    \r\n    text-align: -webkit-center;    \r\n  }\r\n\r\n  \r\n.demo-toolbar {    \r\n    display: flex;    \r\n    align-items: center;    \r\n    width: 100%;        \r\n  }\r\n\r\n  \r\n.demo-form {    \r\n    min-width: 150px;    \r\n    max-width: 500px;    \r\n    width: 100%;    \r\n  }\r\n\r\n  \r\n.demo-full-width {    \r\n    width: 100%;    \r\n  }\r\n\r\n  \r\nbody {    \r\n    margin: 0;    \r\n    font-family: Roboto, sans-serif;      \r\n  }\r\n\r\n  \r\nmatInput {\r\n    font-size: 30px;\r\n  }\r\n\r\n  \r\nmat-card {    \r\n    max-width: 80%;    \r\n    margin: 2em auto;    \r\n    text-align: center;\r\n    font-size: 30px;    \r\n  }\r\n\r\n  \r\nmat-toolbar-row {    \r\n    justify-content: space-between;    \r\n  }\r\n\r\n  \r\n.done {    \r\n    position: fixed;    \r\n    bottom: 20px;    \r\n    right: 20px;    \r\n    color: white;    \r\n  }\r\n\r\n  \r\n.content-center {    \r\n    text-align: -webkit-center;         \r\n  } \r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/user_components/login/login.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/user_components/login/login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Toolbar of an App -->    \r\n<mat-toolbar color=\"primary\">    \r\n  <span>TCET Bookshelf</span>    \r\n  <span class=\"demo-toolbar\"></span>    \r\n  <button mat-button routerLink=\"/\">Home</button> \r\n  <button mat-button routerLink=\"/admin-login\">Admin</button>   \r\n  \r\n</mat-toolbar>    \r\n \r\n<mat-card>    \r\n  <!-- Title of an Card -->    \r\n  <mat-card-title>    \r\n      Login as a user\r\n  </mat-card-title>    \r\n  \r\n  <mat-card-content>    \r\n      <form (submit)=\"loginUser()\">    \r\n          <table>    \r\n              <tr>    \r\n                  <td colspan=\"2\">    \r\n                      <mat-form-field class=\"demo-full-width\">    \r\n                          <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">    \r\n                      </mat-form-field>    \r\n                  </td>                      \r\n              </tr>    \r\n              <tr>    \r\n                <td colspan=\"2\">    \r\n                  <mat-form-field class=\"demo-full-width\">    \r\n                      <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\">    \r\n                  </mat-form-field>    \r\n              </td>        \r\n              </tr>    \r\n                \r\n              <tr>    \r\n                  <td colspan=\"2\">    \r\n  \r\n                  </td>    \r\n              </tr>    \r\n              <tr>    \r\n                  <td colspan=\"2\" class=\"content-center\">    \r\n                      <button mat-raised-button color=\"primary\" style=\"margin: 8%\" type=\"submit\">Submit</button>                          \r\n                  </td>    \r\n              </tr>    \r\n          </table>    \r\n      </form>    \r\n\r\n      <h6>Don't have an account ? <a routerLink=\"/register\">Register</a></h6>\r\n  </mat-card-content>    \r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/user_components/login/login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user_components/login/login.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _flash_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flash.css */ "./src/app/components/user_components/login/flash.css");
/* harmony import */ var _flash_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_flash_css__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, ngFlashMessageService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log('trying to authenticate with api');
        console.log(user);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success && data.user.role === "User") {
                _this.authService.storeUserData(data.token, data.user);
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["You have succefully logged in"],
                    dismissible: true,
                    timeout: 4000,
                    type: 'info'
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: [data.msg],
                    dismissible: true,
                    timeout: 4000,
                    type: 'danger'
                });
                _this.router.navigate(['/login']);
                _this.username = null;
                _this.password = null;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user_components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user_components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Buy {{data.borBook.title}} ?</h1>\r\n\r\n<div mat-dialog-actions style=\"margin-left: 3%; margin-right: 3%;\">\r\n  <button mat-button class=\"btn btn-success\" (click)=\"confirmBorrow()\">Buy</button>\r\n  <button mat-button class=\"btn btn-primary\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfBorrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfBorrComponent", function() { return ConfBorrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ConfBorrComponent = /** @class */ (function () {
    function ConfBorrComponent(dialogRef, _bookService, _userService, ngFlashMessageService, document, data) {
        this.dialogRef = dialogRef;
        this._bookService = _bookService;
        this._userService = _userService;
        this.ngFlashMessageService = ngFlashMessageService;
        this.document = document;
        this.data = data;
    }
    ConfBorrComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfBorrComponent.prototype.ngOnInit = function () {
    };
    ConfBorrComponent.prototype.confirmBorrow = function () {
        //code here to borrow the book
        //patch availability to false
        var updateBook = {
            available: true
        };
        var borrowBook = {
            bookId: this.data.borBook._id
        };
        console.log("YES I AM CALLED");
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        //update book available as false
        localStorage.setItem('updateBook', JSON.stringify(updateBook));
        localStorage.setItem('borbook', this.data.borBook._id);
        localStorage.setItem('borrowBook', JSON.stringify(borrowBook));
        localStorage.setItem('title', this.data.borBook.title);
        // this._bookService.paytmpay();
        return this.document.location.href = 'http://localhost:3000/paytm';
        // this._bookService.buybook();
        // this._bookService.borrowBook(this.data.borBook._id, updateBook).subscribe(data => {
        //   if (data.success) {
        //     //book available updated to false
        //     console.log(this.data.borBook.title, 'availability is now false');        
        //     //Then update the user.borrow
        //     this._userService.addToBorrows(borrowBook, loggedUserId).subscribe(subData=>{
        //       if (subData.success) {
        //         console.log('Added to the borrowed list of user');            
        //         this.dialogRef.close();
        //         this.ngFlashMessageService.showFlashMessage({
        //           messages: ["You borrowed " + this.data.borBook.title],
        //           dismissible: true,
        //           timeout: 4000,
        //           type: 'info'
        //         })
        //       }else {
        //         this.ngFlashMessageService.showFlashMessage({
        //           messages: ["Something went wrong"],
        //           dismissible: true,
        //           timeout: 4000,
        //           type: 'danger'
        //         });
        //       }
        //     })       
        //   } else {
        //     this.ngFlashMessageService.showFlashMessage({
        //       messages: ["Something went wrong"],
        //       dismissible: true,
        //       timeout: 4000,
        //       type: 'danger'
        //     });
        //   }
        // })  
    };
    ConfBorrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conf-borr',
            template: __webpack_require__(/*! ./conf-borr.component.html */ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.html"),
            styles: [__webpack_require__(/*! ./conf-borr.component.css */ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            Document, Object])
    ], ConfBorrComponent);
    return ConfBorrComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/my-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/my-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 205px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;  \r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.example-card {\r\n  max-width: 250px;\r\n  max-height: 250px;\r\n  margin-left: 2.5%;\r\n  margin-right: 2.5%;\r\n  margin-top: 0.75%;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.book-pagination-controls{\r\n  margin-left: 13.5%; \r\n  margin-right: 13.5%\r\n}\r\n\r\n.card-pagination-controls{\r\n  margin-left: 32.5%; \r\n  margin-right: 32.5%;\r\n}\r\n\r\n.main-div{\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/my-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/my-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-nav></my-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\"><div *ngIf=\"cards.length\">Available books</div>\r\n      <div *ngIf=\"!cards.length\">Oops it seems that all books have been borrowed</div>\r\n  </h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    \r\n    <!--Cards represent the categories || That is paginated also-->\r\n    <mat-grid-tile *ngFor=\"let card of cards | paginate: {\r\n                                                           id: 'outer-cards',\r\n                                                           itemsPerPage: 4,\r\n                                                           currentPage: x,\r\n                                                           totalItems: cards.length\r\n    }\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n    <div class = \"mat-card-cvr\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{card.title}}\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"row\">             \r\n            <!--For Books in card.books display books || Requires pagination for each card-->\r\n            <mat-card class=\"example-card\" *ngFor=\"let book of card.books | paginate: {\r\n                                                                                        id: card.title, \r\n                                                                                        itemsPerPage: 4,\r\n                                                                                        currentPage: p[card.title]\r\n            }\">\r\n              <mat-card-header>                \r\n                <mat-card-title>{{book.title}}</mat-card-title>\r\n                <mat-card-subtitle>{{book.author}}</mat-card-subtitle>           \r\n                <mat-card-subtitle>Price :- {{book.price}} RS.</mat-card-subtitle> \r\n              </mat-card-header>\r\n              <img mat-card-sm-image [src]= \"sanitizeImageUrl(book.image)\" alt=\"Book Cover\" style=\"height: auto;\">              \r\n               \r\n              <!-- <img mat-card-sm-image [src]=\"sanitizeImageUrl(book.image)\" /> -->\r\n              <mat-card-actions>\r\n                <button mat-button (click)=\"borrowBook(book)\">Buy</button>\r\n                <button mat-button (click)=\"addToBookmarks(book)\">Bookmark</button>                \r\n              </mat-card-actions>\r\n            </mat-card>  \r\n                               \r\n          </div>          \r\n        </mat-card-content>\r\n        <div class=\"book-pagination-controls\">\r\n          <!--pagination controls here-->\r\n          <pagination-controls [id]='card.title' (pageChange)=\"p[card.title] = $event\"></pagination-controls>\r\n        </div>\r\n      </mat-card>\r\n    </div>       \r\n    </mat-grid-tile>        \r\n  </mat-grid-list>\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"card-pagination-controls\">\r\n      <!--pagination controls of cards-->\r\n      <pagination-controls *ngIf=\"cards.length\" id='outer-cards'(pageChange)=\"x = $event\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/my-dashboard/my-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user_components/my-dashboard/my-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _conf_borr_conf_borr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conf-borr/conf-borr.component */ "./src/app/components/user_components/my-dashboard/conf-borr/conf-borr.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(_bookService, _userSevice, ngFlashMessageService, sanitizer, dialog) {
        this._bookService = _bookService;
        this._userSevice = _userSevice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        //Categories of books
        this.EducationBooks = [];
        this.AMBooks = [];
        this.CTBooks = [];
        this.HistoryBooks = [];
        this.BioraphyBooks = [];
        this.BusinessBooks = [];
        this.cards = [];
        //Pagination Data
        this.p = {};
        this.x = 1;
        //get book data when page starts
        this.getBooks();
        console.log('cards: ', this.cards);
    }
    // constructor(private sanitizer: DomSanitizer) { }
    MyDashboardComponent.prototype.sanitizeImageUrl = function (img) {
        return this.sanitizer.bypassSecurityTrustUrl(img);
    };
    MyDashboardComponent.prototype.isMobileDashboard = function () {
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    MyDashboardComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBooks().subscribe(function (dataBooks) {
            _this.apiBooks = dataBooks,
                console.log('APIBooks:', _this.apiBooks);
            dataBooks.forEach(function (element) {
                console.log('databook elements: ', element.title, ",", element.category);
                //if element.category === 'category' && element.available push to '#categorybook'
                //then from each #categorybook create objects and push to cards
                if (element.category === "Education") {
                    _this.EducationBooks.push(element);
                    console.log('In education add');
                }
                else if (element.category === "Arts-and-Music" && element.available) {
                    _this.AMBooks.push(element);
                }
                else if (element.category === "Computers-and-Tech" && element.available) {
                    _this.CTBooks.push(element);
                }
                else if (element.category === "History" && element.available) {
                    _this.HistoryBooks.push(element);
                }
                else if (element.category === "Biographies" && element.available) {
                    _this.BioraphyBooks.push(element);
                }
                else if (element.category === "Business" && element.available) {
                    _this.BusinessBooks.push(element);
                }
            }),
                _this.addBooksToCards();
        });
    };
    MyDashboardComponent.prototype.addToBookmarks = function (book) {
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        var bmBook = {
            bookId: book._id
        };
        console.log('adding bookid', bmBook, 'to user of id', loggedUserId);
        //Adding to Bookmarks of user
        this._userSevice.addToBookmark(bmBook, loggedUserId).subscribe(function (data) {
            console.log('On adding to Bookmark', data);
        });
        this.ngFlashMessageService.showFlashMessage({
            messages: [book.title + " was added to your bookmarks"],
            dismissible: true,
            timeout: 4000,
            type: 'info'
        });
    };
    MyDashboardComponent.prototype.addBooksToCards = function () {
        if (this.AMBooks.length > 0) {
            this.cards.push({ title: 'Arts & Music', cols: 1, rows: 2, books: this.AMBooks });
        }
        if (this.CTBooks.length > 0) {
            this.cards.push({ title: 'Computer & Tech', cols: 1, rows: 2, books: this.CTBooks });
        }
        if (this.EducationBooks.length > 0) {
            this.cards.push({ title: 'Education', cols: 1, rows: 2, books: this.EducationBooks });
        }
        if (this.HistoryBooks.length > 0) {
            this.cards.push({ title: 'History', cols: 1, rows: 2, books: this.HistoryBooks });
        }
        if (this.BioraphyBooks.length > 0) {
            this.cards.push({ title: 'Biographies', cols: 1, rows: 2, books: this.BioraphyBooks });
        }
        if (this.BusinessBooks.length > 0) {
            this.cards.push({ title: 'Business', cols: 1, rows: 2, books: this.BusinessBooks });
        }
    };
    MyDashboardComponent.prototype.borrowBook = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(_conf_borr_conf_borr_component__WEBPACK_IMPORTED_MODULE_5__["ConfBorrComponent"], {
            data: { borBook: book },
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.refreshCardsData();
        });
    };
    MyDashboardComponent.prototype.refreshCardsData = function () {
        //empty all the #category books cards also cards
        this.cards.length = 0;
        this.EducationBooks.length = 0;
        this.AMBooks.length = 0;
        this.CTBooks.length = 0;
        this.HistoryBooks.length = 0;
        this.BioraphyBooks.length = 0;
        this.BusinessBooks.length = 0;
        //Then add to cards 
        this.getBooks();
        this.addBooksToCards();
    };
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/components/user_components/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/components/user_components/my-dashboard/my-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/my-nav/my-nav.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user_components/my-nav/my-nav.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;  \r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n  color:#97b3ce;\r\n  background-color:#1f2637;\r\n}\r\n\r\n.center-toolbar {    \r\n  display: flex;    \r\n  align-items: center;    \r\n  width: 100%;        \r\n}\r\n\r\n.side-nav-items {\r\n  text-decoration:none;        \r\n  color:#97b3ce;\r\n  transition:all .2s ease-in-out\r\n}\r\n\r\n.side-nav-active-item{\r\n  background-color:#009bfc;\r\n  text-decoration:none;        \r\n  color:#97b3ce;\r\n  transition:all .2s ease-in-out\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user_components/my-nav/my-nav.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user_components/my-nav/my-nav.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item (click)=\"switchToBrowseBooks()\" \r\n      [ngClass]=\"{'side-nav-active-item': (apptitle === 'Browse Books'),\r\n                  'side-nav-items': !(apptitle === 'Browse Books')}\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i>&nbsp; Browse Books</a>\r\n      <a mat-list-item (click)=\"switchToMyCollections()\" \r\n      [ngClass]=\"{'side-nav-active-item': (apptitle === 'My Collections'),\r\n                  'side-nav-items': !(apptitle === 'My Collections')}\"><i class=\"fa fa-database\" aria-hidden=\"true\"></i>&nbsp; My Collection</a>\r\n      <a mat-list-item (click)=\"switchToBookMarks()\" \r\n      [ngClass]=\"{'side-nav-active-item': (apptitle === 'Flagged Books'),\r\n                  'side-nav-items': !(apptitle === 'Flagged Books')}\"><i class=\"fa fa-flag\" aria-hidden=\"true\"></i>&nbsp; Bookmarks</a>\r\n      <a mat-list-item (click)=\"switchToSuggestBook()\" \r\n      [ngClass]=\"{'side-nav-active-item': (apptitle === 'Suggest A Book'),\r\n                  'side-nav-items': !(apptitle === 'Suggest A Book')}\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>&nbsp; Suggest A Book</a>\r\n      <!-- <a mat-list-item (click)=\"switchToNewReleases()\" \r\n      [ngClass]=\"{'side-nav-active-item': (apptitle === 'New Releases'),\r\n                  'side-nav-items': !(apptitle === 'New Releases')}\"><i class=\"fa fa-hourglass-2\" aria-hidden=\"true\"></i>&nbsp; New Releases</a> -->\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>{{ apptitle }}</span>\r\n      <span class=\"center-toolbar\"></span>\r\n      <button *ngIf=\"authService.isLoggedIn()\" mat-button routerLink=\"/\">Dashboard</button>   \r\n      <button *ngIf=\"authService.isLoggedIn()\" mat-button routerLink=\"/profile\">Profile</button>         \r\n      <button *ngIf=\"!authService.isLoggedIn()\" mat-button routerLink=\"/register\">Register</button>  \r\n      <button *ngIf=\"!authService.isLoggedIn()\" mat-button routerLink=\"/login\">Login</button>  \r\n      <button *ngIf=\"authService.isLoggedIn()\" mat-button (click)=\"onLogoutClick()\">Logout</button>  \r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/user_components/my-nav/my-nav.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user_components/my-nav/my-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver, authService, flashMessage, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.apptitle = 'Browse Books';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        console.log('isLoggedIn: ', this.authService.isLoggedIn());
        if (this.router.url === '/') {
            this.apptitle = 'Browse Books';
        }
        else if (this.router.url === '/collection') {
            this.apptitle = 'My Collections';
        }
        else if (this.router.url === '/bookmarks') {
            this.apptitle = 'Flagged Books';
        }
        else if (this.router.url === '/dues') {
            this.apptitle = 'My Dues';
        }
        else if (this.router.url === '/suggest-book') {
            this.apptitle = 'Suggest A Book';
        }
    }
    MyNavComponent.prototype.onLogoutClick = function () {
        console.log('You clicked Logout');
        this.authService.logout();
        this.flashMessage.show('You have logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    MyNavComponent.prototype.switchToBrowseBooks = function () {
        this.apptitle = 'Browse Books';
        this.router.navigate(['/']);
    };
    MyNavComponent.prototype.switchToMyCollections = function () {
        this.apptitle = 'My Collections';
        this.router.navigate(['/collection']);
    };
    MyNavComponent.prototype.switchToBookMarks = function () {
        this.apptitle = 'Flagged Books';
        this.router.navigate(['/bookmarks']);
    };
    MyNavComponent.prototype.switchToMyDues = function () {
        this.apptitle = 'My Dues';
        this.router.navigate(['/dues']);
    };
    MyNavComponent.prototype.switchToSuggestBook = function () {
        this.apptitle = 'Suggest A Book';
        this.router.navigate(['/suggest-book']);
    };
    MyNavComponent.prototype.switchToNewReleases = function () {
        this.apptitle = 'New Releases';
        console.log('You are in', this.apptitle);
    };
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/components/user_components/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/components/user_components/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/profile/profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user_components/profile/profile.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-toolbar {    \r\n    display: flex;    \r\n    align-items: center;    \r\n    width: 100%;        \r\n}  \r\n\r\n.mat-card {    \r\n    text-align: -webkit-center;    \r\n}  \r\n\r\nmat-card {    \r\n    max-width: 80%;    \r\n    margin: 2em auto;    \r\n    text-align: center;\r\n    font-size: 30px;    \r\n  } "

/***/ }),

/***/ "./src/app/components/user_components/profile/profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/user_components/profile/profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Toolbar of an App -->    \r\n<mat-toolbar color=\"primary\">    \r\n  <span>UCSC E-Library System</span>    \r\n  <span class=\"demo-toolbar\"></span>    \r\n  <button mat-button routerLink=\"/\">Home</button>    \r\n  \r\n</mat-toolbar>  \r\n\r\n<mat-card *ngIf=\"user\">\r\n  <mat-card-title>\r\n    {{user.name}}\r\n  </mat-card-title>\r\n  \r\n  <mat-card-content>\r\n    <table>\r\n      <tr>\r\n        <p>Username : {{user.username}}</p>\r\n      </tr>\r\n      <tr>\r\n        <p>Email : {{user.email}}</p>\r\n      </tr>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/user_components/profile/profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user_components/profile/profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user_components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user_components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/register/register.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/user_components/register/register.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n  Reactive form css\r\n*/\r\n\r\n  \r\n.mat-card {    \r\n  text-align: -webkit-center;    \r\n}\r\n\r\n  \r\n.demo-toolbar {    \r\n  display: flex;    \r\n  align-items: center;    \r\n  width: 100%;        \r\n}\r\n\r\n  \r\n.demo-form {    \r\n  min-width: 150px;    \r\n  max-width: 500px;    \r\n  width: 100%;    \r\n}\r\n\r\n  \r\n.demo-full-width {    \r\n  width: 100%;    \r\n}\r\n\r\n  \r\nbody {    \r\n  margin: 0;    \r\n  font-family: Roboto, sans-serif;      \r\n}\r\n\r\n  \r\nmatInput {\r\n  font-size: 30px;\r\n}\r\n\r\n  \r\nmat-card {    \r\n  max-width: 80%;    \r\n  margin: 2em auto;    \r\n  text-align: center;\r\n  font-size: 30px;    \r\n}\r\n\r\n  \r\nmat-toolbar-row {    \r\n  justify-content: space-between;    \r\n}\r\n\r\n  \r\n.done {    \r\n  position: fixed;    \r\n  bottom: 20px;    \r\n  right: 20px;    \r\n  color: white;    \r\n}\r\n\r\n  \r\n.content-center {    \r\n  text-align: -webkit-center;    \r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/components/user_components/register/register.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user_components/register/register.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Toolbar of an App -->  \r\n<mat-toolbar color=\"primary\">  \r\n  <span>UCSC E Libray System</span>  \r\n  <span class=\"demo-toolbar\"></span>  \r\n  <button mat-button routerLink=\"/\">Home</button>  \r\n\r\n</mat-toolbar>  \r\n\r\n<!-- Card container that binds all togather -->  \r\n<mat-card>  \r\n  <!-- Title of an Card -->  \r\n  <mat-card-title>  \r\n      Register as a user  \r\n  </mat-card-title>  \r\n\r\n  <!-- Actual content starts from here -->  \r\n  <mat-card-content>  \r\n      <form [formGroup]=\"regiForm\" (ngSubmit)=\"onFormSubmit(regiForm.value)\">  \r\n          <table>  \r\n              <tr>  \r\n                  <td>  \r\n                      <mat-form-field class=\"demo-full-width\">  \r\n                          <input formControlName=\"name\" matInput placeholder=\"Name\" [(ngModel)]=\"name\">  \r\n                      </mat-form-field>  \r\n                      <mat-error>  \r\n                          <span *ngIf=\"!regiForm.get('name').valid && regiForm.get('name').touched\">Please enter First Name !!!</span>  \r\n                      </mat-error>  \r\n                  </td>  \r\n                  <td>  \r\n                      <mat-form-field class=\"demo-full-width\">  \r\n                          <input formControlName=\"username\" matInput placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">  \r\n                      </mat-form-field>  \r\n                      <mat-error>  \r\n                          <span *ngIf=\"!regiForm.get('username').valid && regiForm.get('username').touched\">Please enter username!!!</span>  \r\n                      </mat-error>  \r\n                  </td>  \r\n              </tr>                  \r\n                            \r\n              <tr>  \r\n                  <td colspan=\"2\">  \r\n                      <mat-form-field class=\"demo-full-width\">  \r\n                          <input formControlName=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"email\">  \r\n                          <mat-hint>use like : demo@demo.com</mat-hint>  \r\n                          <mat-error>  \r\n                              <span *ngIf=\"!regiForm.get('email').valid && regiForm.get('email').touched\">Enter proper Email !!!</span>  \r\n                          </mat-error>  \r\n                      </mat-form-field>  \r\n                  </td>  \r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"1\">\r\n                  <mat-form-field>\r\n                    <input formControlName=\"password\" matInput placeholder=\"password\" type=\"password\" [(ngModel)]=\"password\">                    \r\n                  </mat-form-field>\r\n                  <mat-error>  \r\n                    <span *ngIf=\"!regiForm.get('password').valid && regiForm.get('password').touched\">Please enter a password</span>  \r\n                </mat-error> \r\n                </td>\r\n              </tr>  \r\n              <tr>  \r\n                  <td colspan=\"2\">  \r\n                      <mat-slide-toggle formControlName=\"IsAccepted\" (change)=\"onChange($event)\">Accept Terms & Conditions</mat-slide-toggle>  \r\n                  </td>  \r\n              </tr>  \r\n              <tr>  \r\n                  <td colspan=\"2\" class=\"content-center\">  \r\n                      <button mat-raised-button color=\"primary\" [disabled]=\"!regiForm.valid || IsAccepted==0\">Submit</button>  \r\n                  </td>  \r\n              </tr>  \r\n              <tr>  \r\n                  <td></td>  \r\n              </tr>  \r\n          </table>  \r\n      </form>  \r\n  </mat-card-content>  \r\n</mat-card>  "

/***/ }),

/***/ "./src/app/components/user_components/register/register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user_components/register/register.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Must import to use Forms functionality  



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flashMessage, router, fb) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.name = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.IsAccepted = 0;
        // To initialize FormGroup  
        this.regiForm = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'IsAccepted': [null]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // On Change event of Toggle Button  
    RegisterComponent.prototype.onChange = function (event) {
        if (event.checked == true) {
            this.IsAccepted = 1;
        }
        else {
            this.IsAccepted = 0;
        }
    };
    // Executed When Form Is Submitted  
    RegisterComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        console.log(user);
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log('login success', data);
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/login']);
            }
            else {
                console.log('login failed', data);
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user_components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user_components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user_components/suggest-book/suggest-book.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/user_components/suggest-book/suggest-book.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-mobile-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.grid-web-container {\r\n  margin-left: 205px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/user_components/suggest-book/suggest-book.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user_components/suggest-book/suggest-book.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-nav></my-nav>\r\n<div [ngClass]=\"{'grid-mobile-container': isMobileDashboard(), 'grid-web-container': !isMobileDashboard()}\">\r\n  <h1 class=\"mat-h1\">Suggest A Book</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile colspan=2>\r\n      <mat-card class=\"dashboard-card\">\r\n        <form [formGroup]=\"_suggestForm\" (submit)=\"onSubmit()\">\r\n          <div class=\"example-container\">            \r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Title\" formControlName=\"Title\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                  <input matInput placeholder=\"Author\" formControlName=\"Author\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Category\" formControlName=\"Category\">\r\n                  <mat-option value=\"Arts-and-Music\">Arts & Music</mat-option>\r\n                  <mat-option value=\"Biographies\">Biographies</mat-option>\r\n                  <mat-option value=\"Business\">Business</mat-option>\r\n                  <mat-option value=\"Computers-and-Tech\">Computers & Tech</mat-option>\r\n                  <mat-option value=\"Education\">Educational</mat-option>\r\n                  <mat-option value=\"History\">History</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <button class=\"btn btn-success\" type=\"submit\">suggest</button>\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user_components/suggest-book/suggest-book.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user_components/suggest-book/suggest-book.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SuggestBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestBookComponent", function() { return SuggestBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/notifications.service */ "./src/app/services/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuggestBookComponent = /** @class */ (function () {
    function SuggestBookComponent(_formBuilder, _userService, _notificationService, ngFlashMessageService) {
        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._notificationService = _notificationService;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    SuggestBookComponent.prototype.ngOnInit = function () {
        this._suggestForm = this._formBuilder.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Category: ['Arts-and-Music', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    SuggestBookComponent.prototype.isMobileDashboard = function () {
        if (innerWidth > 960 || (innerWidth > 600 && innerWidth < 639)) {
            return false;
        }
        return true;
    };
    SuggestBookComponent.prototype.onSubmit = function () {
        var _this = this;
        //Create a Notification to mongocollection notification
        //current logged in user
        var loggedUserId = JSON.parse(localStorage.getItem("user")).id.toString();
        //get the user data first before comitting to collection
        this._userService.getUserDatabyId(loggedUserId).subscribe(function (userdata) {
            if (userdata.success) {
                var username = userdata.user.username;
                var message = {
                    message: username + ' suggests to add ' + _this._suggestForm.value.Title + ' by ' + _this._suggestForm.value.Author + 'to the library'
                };
                //Send the message to mongocollection
                _this._notificationService.sendNotification(message).subscribe(function (ndata) {
                    if (ndata.success) {
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["Admin has been notified to add the book"],
                            dismissible: true,
                            timeout: 3000,
                            type: 'info'
                        });
                    }
                    else {
                        _this.ngFlashMessageService.showFlashMessage({
                            messages: ["Failed to Notify the Admin"],
                            dismissible: true,
                            timeout: 3000,
                            type: 'danger'
                        });
                    }
                });
                console.log(message);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({
                    messages: ["Failed to Notify the Admin"],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
            }
        });
    };
    SuggestBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'suggest-book',
            template: __webpack_require__(/*! ./suggest-book.component.html */ "./src/app/components/user_components/suggest-book/suggest-book.component.html"),
            styles: [__webpack_require__(/*! ./suggest-book.component.css */ "./src/app/components/user_components/suggest-book/suggest-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], SuggestBookComponent);
    return SuggestBookComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.flashMessage.show('You must login first', { cssClass: 'alert-danger', timeout: 2000 });
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/re/re.component.css":
/*!*************************************!*\
  !*** ./src/app/re/re.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/re/re.component.html":
/*!**************************************!*\
  !*** ./src/app/re/re.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  re works!\n</p>\n"

/***/ }),

/***/ "./src/app/re/re.component.ts":
/*!************************************!*\
  !*** ./src/app/re/re.component.ts ***!
  \************************************/
/*! exports provided: ReComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReComponent", function() { return ReComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReComponent = /** @class */ (function () {
    function ReComponent() {
    }
    ReComponent.prototype.ngOnInit = function () {
    };
    ReComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-re',
            template: __webpack_require__(/*! ./re.component.html */ "./src/app/re/re.component.html"),
            styles: [__webpack_require__(/*! ./re.component.css */ "./src/app/re/re.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReComponent);
    return ReComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAdminProfile = function () {
        var adminheaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadAdminToken();
        adminheaders.append('Authorization', this.adminAuthToken);
        adminheaders.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/user/profile', { headers: adminheaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeAdminData = function (admintoken, admin) {
        localStorage.setItem('admin_id_token', admintoken);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.adminAuthToken = admintoken;
        this.admin = admin;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadAdminToken = function () {
        var token = localStorage.getItem('admin_id_token');
        this.adminAuthToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.adminLogout = function () {
        this.adminAuthToken = null;
        this.admin = null;
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('id_token');
        return token != null && !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.isAdminLoggedIn = function () {
        var adminToken = localStorage.getItem('admin_id_token');
        return adminToken != null && !this.jwtHelper.isTokenExpired(adminToken);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksService = /** @class */ (function () {
    function BooksService(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.API_URL = "http://localhost:3000/api/books";
    }
    BooksService.prototype.getBooks = function () {
        return this.httpClient.get(this.API_URL);
    };
    BooksService.prototype.getBookById = function (bookId) {
        return this.http.get('http://localhost:3000/api/books/' + bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService.prototype.registerBook = function (book) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.API_URL, book, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService.prototype.editBook = function (bookId, book) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/books/' + bookId, book, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService.prototype.deleteBook = function (bookId) {
        return this.http.delete('http://localhost:3000/api/books/' + bookId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService.prototype.borrowBook = function (bookId, update) {
        //patch to make availability false in conf-borrow
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/api/books/' + bookId, update, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService.prototype.buybook = function () {
        // return this.httpClient.get('http://localhost:3000/paytm');
        // this.httpClient.get()
    };
    BooksService.prototype.makeAvailable = function (bookId, update) {
        //Make availability true and pop the borrower in books
        console.log('bookid is :', bookId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch('http://localhost:3000/api/book/' + bookId, update, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.sendNotification = function (message) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/notification', message, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationsService.prototype.getAllNotifications = function () {
        return this.http.get('http://localhost:3000/notification')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationsService.prototype.deleteNotificationById = function (notiId) {
        return this.http.delete('http://localhost:3000/notification/' + notiId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService() {
        this.image = null;
    }
    UploadService.prototype.uploadFile = function (file) {
        var contentType = file.type;
        var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: 'AKIARLXQJHR5IDWYQBTV',
            secretAccessKey: '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',
            region: 'ap-south-1'
        });
        var params = {
            Bucket: 'esdbookshelf1',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data.Location);
            // this.image =  bucket.getSignedUrl('getObject', {Key: params.Key});
            console.log('returning addres', data.Location);
            return data.Location;
        });
        //for upload progress   
        /*bucket.upload(params).on('httpUploadProgress', function (evt) {
                  console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
              }).send(function (err, data) {
                  if (err) {
                      console.log('There was an error uploading your file: ', err);
                      return false;
                  }
                  console.log('Successfully uploaded file.', data);
                  return true;
              });*/
    };
    UploadService.prototype.uploadbookFile = function (file) {
        var contentType = file.type;
        var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: 'AKIARLXQJHR5IDWYQBTV',
            secretAccessKey: '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',
            region: 'ap-south-1'
        });
        var params = {
            Bucket: 'esdbookshelf1/book',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data.Location);
            // this.image =  bucket.getSignedUrl('getObject', {Key: params.Key});
            console.log('returning addres', data.Location);
            return data.Location;
        });
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.addToBookmark = function (bookId, userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/bookmark/' + userId, bookId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getUserDatabyId = function (userId) {
        return this.http.get('http://localhost:3000/user/' + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.addToBorrows = function (bookId, userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/borrow/' + userId, bookId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.removeBorrows = function (bookId, userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/drop/' + userId, bookId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getBookData = function (userId) {
        return this.http.get('http://localhost:3000/user/' + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getAllUsers = function () {
        //get all users data
        return this.http.get('http://localhost:3000/user/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()));
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD31yJRJIg3TEvivPWA747-R6p6QXKXkfQ",
        authDomain: "ng-firebase-b5fcd.firebaseapp.com",
        databaseURL: "https://ng-firebase-b5fcd.firebaseio.com",
        projectId: "ng-firebase-b5fcd",
        storageBucket: "ng-firebase-b5fcd.appspot.com",
        messagingSenderId: "107054392213"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASU\Desktop\DB\ESD\ESD_p\mean-book-library\front-end\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map