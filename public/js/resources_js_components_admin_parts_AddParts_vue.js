"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_parts_AddParts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        machineId: null,
        serviceId: null,
        label: null,
        partName: "",
        partNumber: "",
        vendor: "",
        price: "",
        shippingCost: "",
        po: "",
        trackingNumber: "",
        status: ""
      })
    };
  },
  methods: {
    getServiceData: function getServiceData() {
      var _this = this;

      axios.get("/admin/api/get-service-data", {
        params: {
          serviceId: this.$route.params.serviceId
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.form.machineId = data.data.machine_id;
          _this.form.serviceId = data.data.id;
          _this.form.label = data.data.machine.label_number;
        } else {
          _this.$router.push({
            name: 'parts-request'
          });
        }
      })["catch"](function (err) {
        _this.$router.push({
          name: 'parts-request'
        });

        console.error(err.response.data);
      });
    },
    addPart: function addPart() {
      var _this2 = this;

      this.form.post("/admin/api/add-parts").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");
          _this2.form.partName = "";
          _this2.form.partNumber = "";
          _this2.form.vendor = "";
          _this2.form.price = "";
          _this2.form.shippingCost = "";
          _this2.form.po = "";
          _this2.form.trackingNumber = "";
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getServiceData();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/parts/AddParts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/parts/AddParts.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddParts.vue?vue&type=template&id=8343dc8e& */ "./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e&");
/* harmony import */ var _AddParts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddParts.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddParts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/parts/AddParts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddParts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddParts_vue_vue_type_template_id_8343dc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddParts.vue?vue&type=template&id=8343dc8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AddParts.vue?vue&type=template&id=8343dc8e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                _c(
                  "li",
                  { staticClass: "breadcrumb-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "parts-request" } } },
                      [_vm._v("Parts Request")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Listed Machine"),
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
                  return _vm.addPart.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Service Id")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.serviceId,
                        expression: "form.serviceId",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", disabled: "" },
                    domProps: { value: _vm.form.serviceId },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "serviceId", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Machine Label"),
                  ]),
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
                    attrs: { type: "text", disabled: "" },
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
                ]),
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Parts info")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-3 form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Part name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.partName,
                          expression: "form.partName",
                        },
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("partName") },
                      attrs: { type: "text", placeholder: "Part name..." },
                      domProps: { value: _vm.form.partName },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "partName", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("HasError", {
                      attrs: { form: _vm.form, field: "partName" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Part number")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.partNumber,
                        expression: "form.partNumber",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Part number..." },
                    domProps: { value: _vm.form.partNumber },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "partNumber", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Vendor")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.vendor,
                        expression: "form.vendor",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Vendor name..." },
                    domProps: { value: _vm.form.vendor },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "vendor", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Price ($)")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.price,
                        expression: "form.price",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Price cost..." },
                    domProps: { value: _vm.form.price },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "price", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Shipping Cost ($)"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.shippingCost,
                        expression: "form.shippingCost",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Shippig cost..." },
                    domProps: { value: _vm.form.shippingCost },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "shippingCost", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("PO Number")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.po,
                        expression: "form.po",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "PO number..." },
                    domProps: { value: _vm.form.po },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "po", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Tracking Number"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.trackingNumber,
                        expression: "form.trackingNumber",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Tracking number..." },
                    domProps: { value: _vm.form.trackingNumber },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "trackingNumber",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-3 form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Part Status"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.status,
                            expression: "form.status",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("status") },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "status",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", hidden: "" } }, [
                          _vm._v("Choose Status"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "need_to_order" } }, [
                          _vm._v("Need to order"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "ordered" } }, [
                          _vm._v("Ordered"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "shipped" } }, [
                          _vm._v("Shipped"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "installed" } }, [
                          _vm._v("Installed"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("HasError", {
                      attrs: { form: _vm.form, field: "status" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-12 form-group" },
                  [
                    _c(
                      "Button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { form: _vm.form },
                      },
                      [_vm._v("Add parts")]
                    ),
                  ],
                  1
                ),
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Parts Data")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Add parts data")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);