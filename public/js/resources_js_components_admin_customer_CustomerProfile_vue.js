"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_customer_CustomerProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
      customerData: {},
      machineData: {}
    };
  },
  methods: {
    verifyCustomerId: function verifyCustomerId() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/admin/api/check-customer-info", {
        params: {
          customerId: this.$route.params.customerId
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.customerData = data.customer;

          _this.getCustomerMachines();
        } else {
          _this.$router.push({
            name: "customer.list"
          });
        }
      })["catch"](function (err) {
        console.error(err.response.data);

        _this.$router.push({
          name: "customer.list"
        });
      });
    },
    getCustomerMachines: function getCustomerMachines() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/admin/api/get-customer-machines?page=" + page, {
        params: {
          customerId: this.$route.params.customerId
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this2.machineData = data;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteMachine: function deleteMachine(index, id) {
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
          axios__WEBPACK_IMPORTED_MODULE_0___default().post("/admin/api/delete-machine", {
            machineId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            console.log(data);

            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this3.machineData.data.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.verifyCustomerId();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/customer/CustomerProfile.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/admin/customer/CustomerProfile.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=template&id=76921336& */ "./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336&");
/* harmony import */ var _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/CustomerProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_76921336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfile.vue?vue&type=template&id=76921336& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/CustomerProfile.vue?vue&type=template&id=76921336& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
                _c(
                  "li",
                  { staticClass: "breadcrumb-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "dashboard" } } },
                      [_vm._v("Home")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Customer Profile"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("p", [
            _c("b", [_vm._v("Customer Name :  ")]),
            _vm._v(" " + _vm._s(_vm.customerData.name)),
          ]),
          _vm._v(" "),
          _c("p", [
            _c("b", [_vm._v("Email :  ")]),
            _vm._v(" " + _vm._s(_vm.customerData.email || "Didn't set")),
          ]),
          _vm._v(" "),
          _c("p", [
            _c("b", [_vm._v("Customer phone :  ")]),
            _vm._v(" " + _vm._s(_vm.customerData.phone)),
          ]),
          _vm._v(" "),
          _c("p", [
            _c("b", [_vm._v("Customer address :  ")]),
            _vm._v(" " + _vm._s(_vm.customerData.address)),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header" },
          [
            _c("h4", { staticClass: "text-muted float-left" }, [
              _vm._v("Machine List"),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-sm btn-secondary float-right",
                attrs: {
                  to: {
                    name: "customer.import-sheet",
                    params: { customerId: _vm.customerData.id },
                  },
                },
              },
              [
                _vm._v("Import machines "),
                _c("small", [_vm._v("(excel files)")]),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered table-hover" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.machineData.data.length > 0
                    ? _vm._l(_vm.machineData.data, function (machine, i) {
                        return _c(
                          "tr",
                          { key: i },
                          [
                            _c("td", [_vm._v(_vm._s(machine.title))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(machine.manufacturer))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-warning",
                                },
                                [_vm._v(_vm._s(machine.model))]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-primary",
                                },
                                [_vm._v(_vm._s(machine.bottom_sl))]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-secondary",
                                },
                                [_vm._v(_vm._s(machine.top_sl))]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-success",
                                },
                                [_vm._v(_vm._s(machine.label_number))]
                              ),
                            ]),
                            _vm._v(" "),
                            [
                              machine.last_service == null
                                ? _c("td", [_vm._v("Never")])
                                : _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm
                                          .moment(
                                            machine.last_service.created_at
                                          )
                                          .format("MM / DD / YYYY")
                                      )
                                    ),
                                  ]),
                            ],
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "mb-2 btn btn-sm btn-secondary dropdown-toggle",
                                  attrs: {
                                    type: "button",
                                    id: "dropdownMenuButton",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                          Actions\n                                      "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "dropdown-menu",
                                  attrs: {
                                    "aria-labelledby": "dropdownMenuButton",
                                  },
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: {
                                        to: {
                                          name: "machine.info",
                                          params: { id: machine.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-eye" }),
                                      _vm._v(" Details"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  machine.last_service
                                    ? _c(
                                        "router-link",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: {
                                            to: {
                                              name: "machine.serviceHistory",
                                              params: {
                                                machineId:
                                                  machine.last_service
                                                    .machine_id,
                                                serviceId:
                                                  machine.last_service.id,
                                              },
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-eye",
                                          }),
                                          _vm._v(" Last Service Details"),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: {
                                        to: {
                                          name: "machine.service-record.add",
                                          params: { machineId: machine.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-plus" }),
                                      _vm._v(" Add Service Record"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "dropdown-item text-warning",
                                      attrs: {
                                        to: {
                                          name: "machine.edit",
                                          params: { id: machine.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-edit" }),
                                      _vm._v(" Edit Machine Info"),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "mb-2 btn btn-sm btn-danger",
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteMachine(i, machine.id)
                                    },
                                  },
                                },
                                [
                                  _c("i", { staticClass: "fas fa-trash" }),
                                  _vm._v(" Delete"),
                                ]
                              ),
                            ]),
                          ],
                          2
                        )
                      })
                    : void 0,
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-center" },
              [
                _c("pagination", {
                  attrs: { data: _vm.machineData },
                  on: { "pagination-change-page": _vm.getCustomerMachines },
                }),
              ],
              1
            ),
          ]),
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Customer Profile")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "text-muted" }, [_vm._v("Profile")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Manufacturer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bottom SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Top SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Label Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Service Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);