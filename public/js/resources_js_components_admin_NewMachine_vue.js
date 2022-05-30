"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_NewMachine_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        title: '',
        manufacturer: '',
        model: '',
        bottom: '',
        top: '',
        label: '',
        machinePhoto: '',
        customerName: '',
        customerLocation: '',
        customerNumber: '',
        customerPhoto: ''
      })
    };
  },
  methods: {
    machinePhoto: function machinePhoto(e) {
      var file = e.target.files[0];

      if (file) {
        this.form.machinePhoto = file;
      } else {
        this.form.machinePhoto = null;
      }
    },
    customerPhoto: function customerPhoto(e) {
      var file = e.target.files[0];

      if (file) {
        this.form.customerPhoto = file;
      } else {
        this.form.customerPhoto = null;
      }
    },
    submitForm: function submitForm() {
      var _this = this;

      this.form.post("/admin/api/add-new-machine-data").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");

          _this.form.reset();

          $('input[type="file"]').val("");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/NewMachine.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/NewMachine.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMachine.vue?vue&type=template&id=59314432& */ "./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432&");
/* harmony import */ var _NewMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMachine.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/NewMachine.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMachine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMachine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMachine_vue_vue_type_template_id_59314432___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMachine.vue?vue&type=template&id=59314432& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/NewMachine.vue?vue&type=template&id=59314432& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.submitForm.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Machine Title")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("title") },
                        attrs: {
                          type: "text",
                          placeholder: "Machine Title...",
                        },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "title" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Mnufacturer")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.manufacturer,
                            expression: "form.manufacturer",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("manufacturer"),
                        },
                        attrs: {
                          type: "text",
                          placeholder: "Manufacturer Name...",
                        },
                        domProps: { value: _vm.form.manufacturer },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "manufacturer",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "manufacturer" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Model Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.model,
                            expression: "form.model",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("model") },
                        attrs: { type: "text", placeholder: "Model Number..." },
                        domProps: { value: _vm.form.model },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "model", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "model" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Bottom Serial")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.bottom,
                            expression: "form.bottom",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("bottom") },
                        attrs: {
                          type: "text",
                          placeholder: "Bottom Serial Number...",
                        },
                        domProps: { value: _vm.form.bottom },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "bottom", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "bottom" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Top Serial Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.top,
                            expression: "form.top",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("top") },
                        attrs: {
                          type: "text",
                          placeholder: "Top Serial Number...",
                        },
                        domProps: { value: _vm.form.top },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "top", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "top" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Label Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.label,
                            expression: "form.label",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("label") },
                        attrs: { type: "text", placeholder: "Label Number..." },
                        domProps: { value: _vm.form.label },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "label", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "label" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control-file",
                      attrs: { type: "file", accept: "image/*" },
                      on: { change: _vm.machinePhoto },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Customer Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.customerName,
                            expression: "form.customerName",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("customerName"),
                        },
                        attrs: {
                          type: "text",
                          placeholder: "Customer name...",
                        },
                        domProps: { value: _vm.form.customerName },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "customerName",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "customerName" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Customer Location / Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.customerLocation,
                            expression: "form.customerLocation",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("customerLocation"),
                        },
                        attrs: {
                          type: "text",
                          placeholder: "Location / Address...",
                        },
                        domProps: { value: _vm.form.customerLocation },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "customerLocation",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "customerLocation" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", [_vm._v("Contact Number")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.customerNumber,
                            expression: "form.customerNumber",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("customerNumber"),
                        },
                        attrs: {
                          type: "text",
                          placeholder: "Customer name...",
                        },
                        domProps: { value: _vm.form.customerNumber },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "customerNumber",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("HasError", {
                        attrs: { form: _vm.form, field: "customerNumber" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control-file",
                      attrs: { type: "file", accept: "image/*" },
                      on: { change: _vm.customerPhoto },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "Button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { form: _vm.form },
                        },
                        [_vm._v("Submit")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
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
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0" }, [
                _vm._v("Add new machine data"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Add new machine"),
                ]),
              ]),
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
    return _c("label", [
      _vm._v("Machine Photograph "),
      _c("small", [_vm._v("(optional)")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h5", [_vm._v("Customer Info")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Customer Photograph "),
      _c("small", [_vm._v("(optional)")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);