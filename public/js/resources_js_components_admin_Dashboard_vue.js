"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_RequestSlide_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/RequestSlide.vue */ "./resources/js/components/partials/RequestSlide.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    RequestSlide: _partials_RequestSlide_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isLoading: true,
      bookings: [],
      paginateData: {},
      moment: moment,
      bookingType: "pending"
    };
  },
  methods: {
    getBookings: function getBookings() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/admin/api/get-pending-services-all?page=".concat(page, "&bookingType=").concat(this.bookingType)).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.isLoading = false;

        if (data.status == "ok") {
          _this.bookings = data.bookingData.data;
          _this.paginateData = data.bookingData;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    approvePending: function approvePending(id, index) {
      var _this2 = this;

      axios.post("/admin/api/approve-pending-service", {
        serviceId: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          $(".request-details").removeClass("slide-opened");
          swal.fire("Success", data.msg, "success");

          _this2.bookings.splice(index, 1);
        } else {
          swal.fire("Failed", data.msg, "error");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteService: function deleteService(id, index) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "This will delete all service records as well",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post("/admin/api/cancel-pending-service", {
            serviceId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              $(".request-details").removeClass("slide-opened");
              swal.fire("Success", data.msg, "success");

              _this3.bookings.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    },
    openSlide: function openSlide(booking) {
      this.$root.$refs.detailsSlider.triggerSlide(booking);
    }
  },
  mounted: function mounted() {
    this.getBookings();
  },
  created: function created() {
    this.$root.$refs.DashboardComponent = this;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      bookingData: {},
      isLoading: true,
      moment: moment,
      bookingIndex: null
    };
  },
  methods: {
    triggerSlide: function triggerSlide(data, index) {
      var _slef = this;

      _slef.isLoading = true;
      $(".request-details").addClass("slide-opened");
      var bookingInfo = data;
      _slef.bookingData = bookingInfo;
      _slef.bookingIndex = index;
      setTimeout(function () {
        _slef.isLoading = false;
      }, 500);
    },
    closeSlide: function closeSlide() {
      $(".request-details").removeClass("slide-opened");
    },
    triggerDelete: function triggerDelete() {
      this.$root.$refs.DashboardComponent.deleteService(this.bookingData.id, this.bookingIndex);
    },
    triggerApprove: function triggerApprove() {
      this.$root.$refs.DashboardComponent.approvePending(this.bookingData.id, this.bookingIndex);
    }
  },
  created: function created() {
    this.$root.$refs.detailsSlider = this;
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=12658639& */ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/RequestSlide.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/partials/RequestSlide.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestSlide.vue?vue&type=template&id=da2d40b8& */ "./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8&");
/* harmony import */ var _RequestSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestSlide.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/RequestSlide.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestSlide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestSlide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_12658639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=12658639& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&");


/***/ }),

/***/ "./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestSlide_vue_vue_type_template_id_da2d40b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestSlide.vue?vue&type=template&id=da2d40b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Dashboard.vue?vue&type=template&id=12658639& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-4" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group btn-group-toggle",
                        attrs: { "data-toggle": "buttons" },
                      },
                      [
                        _c(
                          "label",
                          { staticClass: "btn bg-secondary active" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.bookingType,
                                  expression: "bookingType",
                                },
                              ],
                              attrs: {
                                type: "radio",
                                name: "options",
                                autocomplete: "off",
                                checked: "",
                                value: "pending",
                              },
                              domProps: {
                                checked: _vm._q(_vm.bookingType, "pending"),
                              },
                              on: {
                                change: [
                                  function ($event) {
                                    _vm.bookingType = "pending"
                                  },
                                  _vm.getBookings,
                                ],
                              },
                            }),
                            _vm._v(
                              " Pendings\r\n                                "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("label", { staticClass: "btn bg-secondary" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.bookingType,
                                expression: "bookingType",
                              },
                            ],
                            attrs: {
                              type: "radio",
                              name: "options",
                              autocomplete: "off",
                              value: "accepted",
                            },
                            domProps: {
                              checked: _vm._q(_vm.bookingType, "accepted"),
                            },
                            on: {
                              change: [
                                function ($event) {
                                  _vm.bookingType = "accepted"
                                },
                                _vm.getBookings,
                              ],
                            },
                          }),
                          _vm._v(
                            " Accepted\r\n                                "
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm.isLoading
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(15, function (n) {
                        return _c(
                          "div",
                          { key: n, staticClass: "col-12" },
                          [
                            _c("skeleton", {
                              attrs: { width: "100%", height: "30px" },
                            }),
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-striped table-bordered tabler-hover",
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.bookings.length > 0
                                  ? _vm._l(_vm.bookings, function (booking, i) {
                                      return _c("tr", { key: i }, [
                                        _c("td", [
                                          _vm._v("#" + _vm._s(booking.id)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(booking.customerName)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(booking.machine.id)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(booking.subject)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm
                                                .moment(booking.created_at)
                                                .format("MM-DD-YYYY hh:mm a")
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          booking.status == "pending"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-pill badge-warning",
                                                },
                                                [_vm._v("Pending")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          booking.status == "accepted"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-pill badge-success",
                                                },
                                                [_vm._v("Approved")]
                                              )
                                            : _vm._e(),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary mb-2",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.openSlide(
                                                      booking,
                                                      i
                                                    )
                                                  },
                                                },
                                              },
                                              [_vm._v("Show Details")]
                                            ),
                                            _vm._v(" "),
                                            booking.status == "pending"
                                              ? _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-success mb-2",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.approvePending(
                                                          booking.id,
                                                          i
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Approve")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-danger mb-2",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.deleteService(
                                                      booking.id,
                                                      i
                                                    )
                                                  },
                                                },
                                              },
                                              [_vm._v("Cancel & Delete")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-warning mb-2",
                                                attrs: {
                                                  to: {
                                                    name: "machine.info",
                                                    params: {
                                                      id: booking.machineId,
                                                    },
                                                  },
                                                },
                                              },
                                              [_vm._v("View Machine")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ])
                                    })
                                  : [_vm._m(3)],
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex justify-content-center" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.paginateData },
                            on: { "pagination-change-page": _vm.getBookings },
                          }),
                        ],
                        1
                      ),
                    ],
              ],
              2
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("RequestSlide"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Service Requests")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Ticket ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subject")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created At")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "7" } }, [
        _vm._v("No available service requests"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/RequestSlide.vue?vue&type=template&id=da2d40b8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "request-details" }, [
    _c("div", { staticClass: "header" }, [
      _c(
        "button",
        {
          staticClass: "close-btn",
          attrs: { title: "Close" },
          on: { click: _vm.closeSlide },
        },
        [_c("i", { staticClass: "fas fa-times" })]
      ),
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col-6" },
            [
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "50%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "60%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "70%", height: "20px" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6" },
            [
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "50%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "60%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "70%", height: "20px" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 mt-5" },
            [
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "50%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "50%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "60%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "60%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "100%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "100%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "80%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "80%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "70%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "70%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "100%", height: "20px" },
              }),
              _vm._v(" "),
              _c("skeleton", {
                staticClass: "mb-2",
                attrs: { width: "100%", height: "20px" },
              }),
            ],
            1
          ),
        ])
      : _c("div", { staticClass: "details-body" }, [
          _vm.bookingData.status == "pending"
            ? _c("p", { staticClass: "text-warning" }, [
                _c("i", { staticClass: "fas fa-circle" }),
                _vm._v(" Pending"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.bookingData.status == "accepted"
            ? _c("p", { staticClass: "text-success" }, [
                _c("i", { staticClass: "fas fa-circle" }),
                _vm._v(" Approved"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("h5", { staticClass: "title" }, [
            _vm._v("Ticket #" + _vm._s(_vm.bookingData.id) + " "),
            _c("small", [
              _vm._v(
                "\n          (Date : " +
                  _vm._s(
                    _vm
                      .moment(_vm.bookingData.created_at)
                      .format("MM-DD-YYYY hh:mm a")
                  ) +
                  ")"
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("p", [
                  _c("b", [_vm._v("Customer Name : ")]),
                  _vm._v(" " + _vm._s(_vm.bookingData.customerName)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Phone : ")]),
                  _vm._v(" " + _vm._s(_vm.bookingData.phone)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Email : ")]),
                  _vm._v(" " + _vm._s(_vm.bookingData.email || "N/A")),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Address : ")]),
                  _vm._v(" " + _vm._s(_vm.bookingData.address)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Subject : ")]),
                  _vm._v(" " + _vm._s(_vm.bookingData.subject)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("ID :   ")]),
                  _vm._v(_vm._s(_vm.bookingData.machine.id)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Top SL. :   ")]),
                  _vm._v(_vm._s(_vm.bookingData.machine.top_sl)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Bottom SL. :   ")]),
                  _vm._v(_vm._s(_vm.bookingData.machine.bottom_sl)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Label Number :   ")]),
                  _vm._v(_vm._s(_vm.bookingData.machine.label_number)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("p", { staticClass: "details-text" }, [
                  _vm._v(
                    "\n              " +
                      _vm._s(_vm.bookingData.description) +
                      "\n            "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 mt-5" },
                [
                  _vm.bookingData.status == "pending"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-success mb-2",
                          on: { click: _vm.triggerApprove },
                        },
                        [_vm._v("Approve")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger mb-2",
                      on: { click: _vm.triggerDelete },
                    },
                    [_vm._v("Cancel & Delete")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-warning mb-2",
                      attrs: {
                        to: {
                          name: "machine.info",
                          params: { id: _vm.bookingData.machineId },
                        },
                      },
                    },
                    [_vm._v("View Machine")]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("Machine Info")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-5 text-muted" }, [
      _c("b", [_vm._v("Complain / Description")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);