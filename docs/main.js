"use strict";
(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);

const AppRoutes = [{
  path: '',
  component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 8877)).then(m => m.MaterialComponentsModule)
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
  }]
}];

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);



class AppComponent {
  constructor() {
    this.title = 'previsao-app';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 1183);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-material-module */ 5408);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PathLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent, _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__.AppHeaderComponent, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 5408:
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": () => (/* binding */ DemoMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 3773);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) {
  return new (t || DemoMaterialModule)();
};
DemoMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: DemoMaterialModule
});
DemoMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
    exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule]
  });
})();

/***/ }),

/***/ 6729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _shared_menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/menu-items/menu-filter-items */ 4080);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 1183);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/spinner.component */ 3812);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 2991);













/** @title Responsive sidenav */
class FullComponent {
  constructor(changeDetectorRef, media, menuItems) {
    this.menuItems = menuItems;
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
}
FullComponent.ɵfac = function FullComponent_Factory(t) {
  return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems));
};
FullComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FullComponent,
  selectors: [["app-full-layout"]],
  decls: 24,
  vars: 5,
  consts: [[1, "main-container"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "index.html", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], [2, "color", "white"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav", ""], [1, "page-wrapper"], [1, "page-content"]],
  template: function FullComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "div", 2)(3, "a", 3)(4, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4)(6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Umbrela Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullComponent_Template_button_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 10)(15, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-sidenav-container", 11)(17, "mat-sidenav", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-sidenav-content", 14)(21, "div", 15)(22, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "app-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultShowHideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.AppSidebarComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1183:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AppHeaderComponent {}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) {
  return new (t || AppHeaderComponent)();
};
AppHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppHeaderComponent,
  selectors: [["app-header"]],
  decls: 0,
  vars: 0,
  template: function AppHeaderComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 2991:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _shared_menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-filter-items */ 4080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 9502);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 7725);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 5903);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);











function AppSidebarComponent_mat_list_item_6_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("label label-", badge_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](badge_r4);
  }
}
const _c0 = function (a1) {
  return ["/", a1];
};
function AppSidebarComponent_mat_list_item_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_6_a_1_span_6_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuitem_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
  }
}
function AppSidebarComponent_mat_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_6_a_1_Template, 7, 6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuitem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("group", menuitem_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuitem_r1.type === "link");
  }
}
class AppSidebarComponent {
  constructor(changeDetectorRef, media, menuItems) {
    this.menuItems = menuItems;
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
  return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems));
};
AppSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppSidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 7,
  vars: 1,
  consts: [[1, "user-profile", 2, "background", "url(assets/images/background/umbrela1.jpg) no-repeat", "height", "200px"], [1, "profile-text"], [1, "ti-angle-down", "font-12", "m-l-5"], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]],
  template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Ola ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-nav-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_6_Template, 2, 2, "mat-list-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionLinkDirective, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive],
  encapsulation: 2
});

/***/ }),

/***/ 5903:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AccordionDirective {
  closeOtherLinks(selectedLink) {
    this.navlinks.forEach(link => {
      if (link !== selectedLink) {
        link.selected = false;
      }
    });
  }
  addLink(link) {
    this.navlinks.push(link);
  }
  removeGroup(link) {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }
  checkOpenLinks() {
    this.navlinks.forEach(link => {
      if (link.group) {
        const routeUrl = this.router.url;
        const currentUrl = routeUrl.split('/');
        if (currentUrl.indexOf(link.group) > 0) {
          link.selected = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }
  ngAfterContentChecked() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(e => this.checkOpenLinks());
  }
  constructor(router) {
    this.router = router;
    this.navlinks = [];
    setTimeout(() => this.checkOpenLinks());
  }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) {
  return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AccordionDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: AccordionDirective,
  selectors: [["", "appAccordion", ""]]
});

/***/ }),

/***/ 9502:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AccordionAnchorDirective {
  constructor(navlink) {
    this.navlink = navlink;
  }
  onClick(e) {
    this.navlink.toggle();
  }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) {
  return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective));
};
AccordionAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: AccordionAnchorDirective,
  selectors: [["", "appAccordionToggle", ""]],
  hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});

/***/ }),

/***/ 7725:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AccordionLinkDirective {
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }
  constructor(nav) {
    this._selected = false;
    this.nav = nav;
  }
  ngOnInit() {
    this.nav.addLink(this);
  }
  ngOnDestroy() {
    this.nav.removeGroup(this);
  }
  toggle() {
    this.selected = !this.selected;
  }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) {
  return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective));
};
AccordionLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: AccordionLinkDirective,
  selectors: [["", "appAccordionLink", ""]],
  hostVars: 2,
  hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    }
  },
  inputs: {
    group: "group",
    selected: "selected"
  }
});

/***/ }),

/***/ 8836:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective),
/* harmony export */   "AccordionDirective": () => (/* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective),
/* harmony export */   "AccordionLinkDirective": () => (/* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 9502);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 7725);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 5903);




/***/ }),

/***/ 4080:
/*!********************************************************!*\
  !*** ./src/app/shared/menu-items/menu-filter-items.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const MENUITEMS = [{
  state: 'dashboard',
  name: 'Inicio',
  type: 'link',
  icon: 'home',
  badge: ''
}
// { state: 'button', type: 'link', name: 'Filtros', icon: 'crop_7_5', badge: '' },
// { state: 'dashboard', name: 'Inicio', type: 'link', icon: 'home', badge: ''},
// { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5', badge: '' },
// { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy', badge: '' },
// { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list', badge: '' },
// { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline', badge: '' },
// { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab', badge: '' },
// { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web', badge: '' },
// {
//   state: 'expansion',
//   type: 'link',
//   name: 'Expansion Panel',
//   icon: 'vertical_align_center'
//   , badge: ''
// },
// { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette', badge: '' },
// { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail', badge: '' },
// {
//   state: 'progress-snipper',
//   type: 'link',
//   name: 'Progress snipper',
//   icon: 'border_horizontal', badge: ''
// },
// {
//   state: 'progress',
//   type: 'link',
//   name: 'Progress Bar',
//   icon: 'blur_circular', badge: ''
// },
// {
//   state: 'dialog',
//   type: 'link',
//   name: 'Dialog',
//   icon: 'assignment_turned_in', badge: ''
// },
// { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant', badge: '' },
// { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb', badge: '' },
// { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode', badge: '' },
// {
//   state: 'slide-toggle',
//   type: 'link',
//   name: 'Slide Toggle',
//   icon: 'all_inclusive', badge: ''
// }
];

class MenuItems {
  getMenuitem() {
    return MENUITEMS;
  }
}
MenuItems.ɵfac = function MenuItems_Factory(t) {
  return new (t || MenuItems)();
};
MenuItems.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MenuItems,
  factory: MenuItems.ɵfac
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-filter-items */ 4080);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ 8836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [_menu_items_menu_filter_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective],
    exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective]
  });
})();

/***/ }),

/***/ 3812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);





function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class SpinnerComponent {
  constructor(router, document) {
    this.router = router;
    this.document = document;
    this.isSpinnerVisible = true;
    this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        this.isSpinnerVisible = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
        this.isSpinnerVisible = false;
      }
    }, () => {
      this.isSpinnerVisible = false;
    });
  }
  ngOnDestroy() {
    this.isSpinnerVisible = false;
  }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
SpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SpinnerComponent,
  selectors: [["app-spinner"]],
  inputs: {
    backgroundColor: "backgroundColor"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map