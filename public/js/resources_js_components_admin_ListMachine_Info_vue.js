"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_ListMachine_Info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isLoading: true,
      machineData: {},
      serviceHistory: {},
      moment: moment,
      parts: []
    };
  },
  methods: {
    getMachineInfo: function getMachineInfo() {
      var _this = this;

      axios.get("/admin/api/get-machine-data", {
        params: {
          machineId: this.$route.params.id
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.machineData = data.machineData;
        _this.parts = data.parts;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getServiceHistory: function getServiceHistory() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/admin/api/service-history-list?machineId=".concat(this.$route.params.id, "&page=").concat(page)).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this2.isLoading = false;

        if (data.status == "ok") {
          _this2.serviceHistory = data.data;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteServiceHistory: function deleteServiceHistory(index, id) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post("/admin/api/delete-service-history", {
            historyId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this3.serviceHistory.data.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getMachineInfo();
    this.getServiceHistory();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/Info.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/Info.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info.vue?vue&type=template&id=ed960382& */ "./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382&");
/* harmony import */ var _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__.render,
  _Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ListMachine/Info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Info_vue_vue_type_template_id_ed960382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Info.vue?vue&type=template&id=ed960382& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/Info.vue?vue&type=template&id=ed960382& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0" }, [
                _vm._v(_vm._s(_vm.machineData.title)),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
                _c(
                  "li",
                  { staticClass: "breadcrumb-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "machine.all-list" } } },
                      [_vm._v("Listed Machine")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Information"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header d-flex justify-content-end" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-sm btn-primary mr-2",
                attrs: {
                  to: {
                    name: "machine.service-record.add",
                    params: { machineId: _vm.$route.params.id },
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
                staticClass: "btn btn-sm btn-warning mr-2",
                attrs: {
                  to: {
                    name: "machine.edit",
                    params: { id: _vm.$route.params.id },
                  },
                },
              },
              [_c("i", { staticClass: "fas fa-edit" }), _vm._v(" Edit")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 p-4" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.machineData.machine_photo
                ? _c("div", { staticClass: "form-group" }, [
                    _c("img", {
                      staticClass: "machine-thumb",
                      attrs: {
                        src:
                          "/admin/api/resources/photos/machines/" +
                          _vm.machineData.machine_photo,
                        alt: "",
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.title))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Manufacturer")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.manufacturer))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Model")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.model))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Bottom SL")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.bottom_sl))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Top SL")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.top_sl))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 mt-4" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Label Number")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.label_number))]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 p-4" }, [
              _vm._m(1),
              _vm._v(" "),
              _vm.machineData.customer_photo
                ? _c("div", { staticClass: "form-group text-center" }, [
                    _c("img", {
                      staticClass: "customer-thumb",
                      attrs: {
                        src:
                          "/admin/api/resources/photos/customer/" +
                          _vm.machineData.customer_photo,
                        alt: "",
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 mt-4 text-center" }, [
                  _c("h6", { staticClass: "title" }, [_vm._v("Customer Name")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.customer_name))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mt-4 text-center" }, [
                  _c("h6", { staticClass: "title" }, [
                    _vm._v("Customer Location"),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.customer_location))]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mt-4 text-center" }, [
                  _c("h6", { staticClass: "title" }, [
                    _vm._v("Customer Number"),
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.machineData.customer_phone))]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm._m(2),
          _vm._v(" "),
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(10, function (n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-12" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "35px" },
                      }),
                    ],
                    1
                  )
                }),
                0
              )
            : _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "table",
                    { staticClass: "table table-hover table-bordered" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.serviceHistory.data.length <= 0
                            ? [_vm._m(4)]
                            : _vm._l(
                                _vm.serviceHistory.data,
                                function (history, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm
                                            .moment(history.serviceDate)
                                            .format("MM / DD / YYYY")
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(history.serviceType)),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("b", [
                                        _vm._v(_vm._s(history.techName)),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: {
                                              to: {
                                                name: "machine.serviceHistory",
                                                params: {
                                                  machineId:
                                                    _vm.$route.params.id,
                                                  serviceId: history.id,
                                                },
                                              },
                                              title: "View",
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye",
                                            }),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-danger",
                                            attrs: { title: "Delete" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteServiceHistory(
                                                  i,
                                                  history.id
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-trash",
                                            }),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ])
                                }
                              ),
                        ],
                        2
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 d-flex mt-3 justify-content-center" },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.serviceHistory },
                      on: { "pagination-change-page": _vm.getServiceHistory },
                    }),
                  ],
                  1
                ),
              ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-7" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.parts.length <= 0
                    ? [_vm._m(7)]
                    : _vm._l(_vm.parts, function (part, i) {
                        return _c("tr", { key: i }, [
                          _c("td", [_vm._v(_vm._s(i + 1))]),
                          _vm._v(" "),
                          _c("td", [_c("b", [_vm._v(_vm._s(part.name))])]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(part.part_number))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(part.vendor))]),
                          _vm._v(" "),
                          _c("td", [
                            part.status == "need_to_order"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-warning" },
                                  [
                                    _c("i", { staticClass: "fas fa-clock" }),
                                    _vm._v(" Need to order"),
                                  ]
                                )
                              : part.status == "ordered"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-pending" },
                                  [
                                    _c("i", { staticClass: "fas fa-check" }),
                                    _vm._v(" Ordered"),
                                  ]
                                )
                              : part.status == "shipped"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-shipped" },
                                  [
                                    _c("i", { staticClass: "fas fa-truck" }),
                                    _vm._v(" Shipped"),
                                  ]
                                )
                              : part.status == "installed"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-success" },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-check-circle",
                                    }),
                                    _vm._v(" Installed"),
                                  ]
                                )
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            part.status == "installed"
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm
                                        .moment(part.updated_at)
                                        .format("MM-DD-YYYY")
                                    )
                                  ),
                                ])
                              : _c("span", [_vm._v("Not installed yet")]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-sm btn-secondary",
                                  attrs: {
                                    to: {
                                      name: "edit-part",
                                      params: { partId: part.id },
                                    },
                                  },
                                },
                                [_vm._v("View / Edit")]
                              ),
                            ],
                            1
                          ),
                        ])
                      }),
                ],
                2
              ),
            ]),
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
    return _c("div", { staticClass: "form-group" }, [
      _c("h5", [_vm._v("Machine Info")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c("h5", [_vm._v("Customer Info")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h5", [_vm._v("Service History")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tech Name")]),
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
      _c(
        "td",
        { staticClass: "text-center text-danger", attrs: { colspan: "4" } },
        [_vm._v("No service record")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h4", [
        _c("i", { staticClass: "fas fa-check-circle" }),
        _vm._v("   Installed Parts"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SL No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Part name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Part number")]),
        _vm._v(" "),
        _c("th", [_vm._v("vendor")]),
        _vm._v(" "),
        _c("th", [_vm._v("status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Installation date")]),
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
      _c("td", { staticClass: "text-center", attrs: { colspan: "6" } }, [
        _c("span", { staticClass: "text-muted" }, [
          _vm._v("No parts were assigned"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);