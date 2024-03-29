"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_customer_ImportSheet_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      customerData: {},
      fileErrors: {
        isExcel: true,
        invalidExcelStructure: false
      },
      form: new Form({
        excel: null
      }),
      uploadProgress: 0,
      sheetData: null,
      tableSheet: [],
      importForm: new Form({
        sheetName: "",
        customerId: this.$route.params.customerId
      })
    };
  },
  methods: {
    verifyCustomerId: function verifyCustomerId() {
      var _this = this;

      axios.get("/admin/api/check-customer-info", {
        params: {
          customerId: this.$route.params.customerId
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.customerData = data.customer;
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
    uploadExcel: function uploadExcel(e) {
      var excel = e.target.files[0];
      var allowedExec = ["xls", "xlsx"];

      if (excel) {
        var fileType = excel.name.split(".").pop();

        if (allowedExec.includes(fileType)) {
          this.form.excel = excel;
          this.fileErrors.isExcel = true;
          this.submitForm();
        } else {
          this.fileErrors.isExcel = false;
          $("#excelFile").val("");
        }
      } else {
        this.excel = null;
      }
    },
    submitForm: function submitForm() {
      var _this2 = this;

      var _self = this;

      this.form.post("/admin/api/upload-excel-sheet", {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentCompleted = progressEvent.loaded * 100 / progressEvent.total;
          _self.uploadProgress = percentCompleted.toFixed(2);
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this2.sheetData = data;
        _this2.tableSheet = _this2.sheetData.data[0].sheet1;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    changeSheet: function changeSheet(sheet, dataIndex) {
      this.tableSheet = this.sheetData.data[dataIndex][sheet];
    },
    importSheet: function importSheet() {
      this.importForm.sheetName = this.sheetData.sheetName;
      this.importForm.post("/admin/api/import-from-sheet").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success").then(function () {
            window.location.reload();
          });
        } else {
          swal.fire("Failed", data.msg, "error");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.verifyCustomerId();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/customer/ImportSheet.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/customer/ImportSheet.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportSheet.vue?vue&type=template&id=11f6c4b4& */ "./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4&");
/* harmony import */ var _ImportSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportSheet.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/ImportSheet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportSheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportSheet_vue_vue_type_template_id_11f6c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportSheet.vue?vue&type=template&id=11f6c4b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/customer/ImportSheet.vue?vue&type=template&id=11f6c4b4& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("Import Machine"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.importSheet.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Customer Name"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Customer name",
                      disabled: "",
                    },
                    domProps: { value: _vm.customerData.name },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Contact number"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Contact number",
                      disabled: "",
                    },
                    domProps: { value: _vm.customerData.phone },
                  }),
                ]),
                _vm._v(" "),
                _vm.uploadProgress > 0
                  ? _c("div", { staticClass: "col-md-12 form-group mt-5" }, [
                      _vm.uploadProgress < 100
                        ? _c("label", { attrs: { for: "" } }, [
                            _vm._v(
                              "Progress  " + _vm._s(_vm.uploadProgress) + "%"
                            ),
                          ])
                        : _c("p", { staticClass: "text-success" }, [
                            _c("i", { staticClass: "fas fa-check-circle" }),
                            _vm._v(" Upload complete   100%"),
                          ]),
                      _vm._v(" "),
                      _vm.uploadProgress < 100
                        ? _c("div", { staticClass: "progress" }, [
                            _c("div", {
                              staticClass:
                                "progress-bar progress-bar-striped progress-bar-animated",
                              style: { width: _vm.uploadProgress + "%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": _vm.uploadProgress,
                                "aria-valuemin": "0",
                                "aria-valuemax": "100",
                              },
                            }),
                          ])
                        : _vm._e(),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.fileErrors.isExcel
                  ? _c("div", { staticClass: "col-md-12 form-group" }, [
                      _vm._m(2),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Upload Excel File"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control-file",
                    attrs: {
                      type: "file",
                      accept: ".xls,.xlsx",
                      id: "excelFile",
                    },
                    on: { change: _vm.uploadExcel },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _vm.sheetData
                ? _c("div", { staticClass: "row mt-2" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "btn-group btn-group-toggle",
                          attrs: { "data-toggle": "buttons" },
                        },
                        _vm._l(_vm.sheetData.data, function (sheet, i) {
                          return _c(
                            "label",
                            {
                              key: i,
                              staticClass: "btn btn-outline-primary",
                              class: { active: i == 0 },
                            },
                            [
                              _c("input", {
                                attrs: {
                                  type: "radio",
                                  name: "options",
                                  id: "option" + i + 1,
                                  checked: "",
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeSheet("sheet" + (i + 1), i)
                                  },
                                },
                              }),
                              _vm._v(
                                " Sheet " +
                                  _vm._s(i + 1) +
                                  "\r\n                                "
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 mt-2" }, [
                      _c("div", { staticClass: "sheet-table" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "table-responsive" }, [
                          _c(
                            "table",
                            { staticClass: "table table-bordered" },
                            [
                              _vm._m(4),
                              _vm._v(" "),
                              _vm._l(_vm.tableSheet, function (data, i) {
                                return _c(
                                  "tbody",
                                  { key: i },
                                  [
                                    i != 0
                                      ? [
                                          data[0] != ""
                                            ? _c("tr", [
                                                _c("td", [
                                                  _c("b", [_vm._v(_vm._s(i))]),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(data[0])),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(data[1])),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(data[1])),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(data[2])),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(data[3])),
                                                ]),
                                              ])
                                            : _vm._e(),
                                        ]
                                      : _vm._e(),
                                  ],
                                  2
                                )
                              }),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.sheetData
                ? _c("div", { staticClass: "row mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c(
                          "Button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { form: _vm.importForm, type: "submit" },
                          },
                          [_vm._v("Import Data")]
                        ),
                      ],
                      1
                    ),
                  ])
                : _vm._e(),
            ]
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("i", { staticClass: "fas fa-plus" }),
        _vm._v(" Import Excel Sheet"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "alert alert-warning alert-dismissible fade show",
        attrs: { role: "alert" },
      },
      [
        _c("strong", [_vm._v("Invalid File !")]),
        _vm._v(
          " You should upload a xls or xlsx file.\r\n                                "
        ),
        _c(
          "button",
          {
            staticClass: "close",
            attrs: {
              type: "button",
              "data-dismiss": "alert",
              "aria-label": "Close",
            },
          },
          [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mt-2" }, [_c("b", [_vm._v("Sheet1")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Label number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Manufacturer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bottom Serial")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);