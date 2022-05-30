"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_parts_PartsRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      requests: [],
      moment: moment
    };
  },
  methods: {
    getPartsRequest: function getPartsRequest() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/admin/api/get-parts-request-data?page=".concat(page)).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.requests = data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    cancelPartRequest: function cancelPartRequest(id, index) {
      var _this2 = this;

      axios.post("/admin/api/cancel-part-request", {
        serviceId: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this2.requests.splice(index, 1);

          swal.fire("Canceled", data.msg, "success");
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    changeStatus: function changeStatus(id, index) {
      var _this3 = this;

      axios.post('/admin/api/complete-part-request', {
        historyId: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");

          _this3.requests.splice(index, 1);

          if ($("#partReqCount").text() == 1) {
            $("#partReqCount").remove();
          } else {
            $("#partReqCount").text($("#partReqCount").text() - 1);
          }
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getPartsRequest();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/parts/PartsRequest.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/parts/PartsRequest.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartsRequest.vue?vue&type=template&id=265eed89& */ "./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89&");
/* harmony import */ var _PartsRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartsRequest.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartsRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__.render,
  _PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/parts/PartsRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartsRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsRequest_vue_vue_type_template_id_265eed89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartsRequest.vue?vue&type=template&id=265eed89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/PartsRequest.vue?vue&type=template&id=265eed89& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("Parts Request"),
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
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(15, function (n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-md-12" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "25px" },
                      }),
                    ],
                    1
                  )
                }),
                0
              )
            : _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-hover table-bordered table-striped",
                    },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.requests, function (req, i) {
                          return _c("tr", { key: i }, [
                            _c("td", [_c("b", [_vm._v(_vm._s(req.id))])]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-pill badge-primary",
                                },
                                [_vm._v(_vm._s(req.machine.label_number))]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(req.description))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(req.created_at)
                                    .format("DD MMM YYYY - hh:mm A")
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-sm btn-primary",
                                    attrs: {
                                      to: {
                                        name: "add-parts",
                                        params: { serviceId: req.id },
                                      },
                                    },
                                  },
                                  [_vm._v("Add parts")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger btn-sm",
                                    on: {
                                      click: function ($event) {
                                        return _vm.cancelPartRequest(req.id, i)
                                      },
                                    },
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-success",
                                    on: {
                                      click: function ($event) {
                                        return _vm.changeStatus(req.id, i)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v("Mark as completed "),
                                    _c("i", {
                                      staticClass: "fas fa-check-circle",
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ])
                        }),
                        0
                      ),
                    ]
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Parts Requests")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Service ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Label")]),
        _vm._v(" "),
        _c("th", [_vm._v("Comments from tech")]),
        _vm._v(" "),
        _c("th", [_vm._v("Request Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);