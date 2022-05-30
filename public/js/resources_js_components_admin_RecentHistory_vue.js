"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_RecentHistory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      histories: [],
      paginateData: {},
      moment: moment,
      startDate: '',
      endDate: '',
      filterMode: false
    };
  },
  methods: {
    getHistories: function getHistories() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/admin/api/get-service-history", {
        params: {
          page: page,
          startDate: this.startDate,
          endDate: this.endDate
        }
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        console.log(data);
        _this.histories = data.data;
        _this.paginateData = data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    triggerFilter: function triggerFilter() {
      if (this.startDate != "" || this.endDate != "") {
        this.filterMode = true;
        this.getHistories();
      } else {
        this.filterMode = false;
        this.getHistories();
      }
    },
    clearSearch: function clearSearch() {
      this.filterMode = false;
      this.startDate = "";
      this.endDate = "";
      this.getHistories();
    }
  },
  mounted: function mounted() {
    this.getHistories();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/RecentHistory.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/RecentHistory.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentHistory.vue?vue&type=template&id=3ca49c5e& */ "./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e&");
/* harmony import */ var _RecentHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/RecentHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecentHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentHistory_vue_vue_type_template_id_3ca49c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecentHistory.vue?vue&type=template&id=3ca49c5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/RecentHistory.vue?vue&type=template&id=3ca49c5e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h4", [_vm._v("List")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-4" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6 col-md-3 form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Date starts from"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.startDate,
                      expression: "startDate",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.startDate },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.startDate = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-md-3 form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Date ends at")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.endDate,
                      expression: "endDate",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.endDate },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.endDate = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 form-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-secondary",
                    on: { click: _vm.triggerFilter },
                  },
                  [_c("i", { staticClass: "fas fa-search" }), _vm._v(" Filter")]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(10, function (n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-12 mb-2" },
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
            : _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "w-100 text-right" }, [
                  _vm.filterMode
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger ml-2 mr-2",
                          on: { click: _vm.clearSearch },
                        },
                        [
                          _c("i", { staticClass: "fas fa-times" }),
                          _vm._v(" Clear Search"),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                !_vm.filterMode
                  ? _c("p", { staticClass: "ml-2" }, [
                      _vm._v("Showing recent results"),
                    ])
                  : _vm.filterMode && _vm.startDate == "" && _vm.endDate != ""
                  ? _c("p", { staticClass: "ml-2" }, [
                      _vm._v(
                        "\r\n                        Showing results before - "
                      ),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.moment(_vm.endDate).format("DD MMMM YYYY"))
                        ),
                      ]),
                    ])
                  : _vm.filterMode && _vm.startDate != "" && _vm.endDate == ""
                  ? _c("p", { staticClass: "ml-2" }, [
                      _vm._v(
                        "\r\n                        Showing results after - "
                      ),
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            _vm.moment(_vm.startDate).format("DD MMMM YYYY")
                          )
                        ),
                      ]),
                    ])
                  : _vm.filterMode && _vm.startDate != "" && _vm.endDate != ""
                  ? _c("p", { staticClass: "ml-2" }, [
                      _vm._v(
                        "\r\n                        Showing results from "
                      ),
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            _vm.moment(_vm.startDate).format("DD MMMM YYYY")
                          )
                        ),
                      ]),
                      _vm._v(", to \r\n                        "),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.moment(_vm.endDate).format("DD MMMM YYYY"))
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mt-3" }, [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.histories, function (history, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [_vm._v(_vm._s(history.id))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-primary" },
                                  [_vm._v(_vm._s(history.machine.label_number))]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(history.serviceType))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(history.techName))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm
                                      .moment(history.serviceDate)
                                      .format("DD MMMM YYYY")
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
                                      staticClass:
                                        "mb-2 btn btn-sm btn-success",
                                      attrs: {
                                        to: {
                                          name: "machine.serviceHistory",
                                          params: {
                                            machineId: history.machine.id,
                                            serviceId: history.id,
                                          },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-eye" }),
                                      _vm._v(" View"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "mb-2 btn btn-sm btn-primary",
                                      attrs: {
                                        to: {
                                          name: "machine.info",
                                          params: {
                                            id: history.machine.id,
                                          },
                                        },
                                      },
                                    },
                                    [_vm._v("Machine Info")]
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
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center" },
            [
              _c("pagination", {
                attrs: { data: _vm.paginateData },
                on: { "pagination-change-page": _vm.getHistories },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        staticStyle: { display: "none" },
        attrs: { id: "modal-lg", "aria-hidden": "true" },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("p", [
                _vm._v("Type :   \r\n                    "),
                !_vm.filterMode
                  ? _c("span", { staticClass: "text-primary" }, [
                      _vm._v("Recent Records"),
                    ])
                  : _vm.filterMode && _vm.startDate == "" && _vm.endDate != ""
                  ? _c("span", { staticClass: "text-primary" }, [
                      _vm._v("\r\n                        Records before - "),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.moment(_vm.endDate).format("DD MMMM YYYY"))
                        ),
                      ]),
                    ])
                  : _vm.filterMode && _vm.startDate != "" && _vm.endDate == ""
                  ? _c("span", { staticClass: "text-primary" }, [
                      _vm._v("\r\n                        Records after - "),
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            _vm.moment(_vm.startDate).format("DD MMMM YYYY")
                          )
                        ),
                      ]),
                    ])
                  : _vm.filterMode && _vm.startDate != "" && _vm.endDate != ""
                  ? _c("span", { staticClass: "text-primary" }, [
                      _vm._v("\r\n                        Records from "),
                      _c("b", [
                        _vm._v(
                          _vm._s(
                            _vm.moment(_vm.startDate).format("DD MMMM YYYY")
                          )
                        ),
                      ]),
                      _vm._v(", to \r\n                        "),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.moment(_vm.endDate).format("DD MMMM YYYY"))
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _vm._m(6),
            ]),
          ]),
        ]),
      ]
    ),
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
                _vm._v("Recent Service Histories"),
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
                  _vm._v("Recent Service History"),
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
    return _c("h6", { staticClass: "mb-4" }, [
      _c("b", [_vm._v("Show records in a specific date range")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-info ml-2 mr-2",
        attrs: { "data-toggle": "modal", "data-target": "#modal-lg" },
      },
      [_c("i", { staticClass: "fas fa-download" }), _vm._v(" Export Excel")]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Machine Label")]),
        _vm._v(" "),
        _c("th", [_vm._v("Service Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tech Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Service Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Export current records to Excel"),
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Export options :")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-6 form-group mb-3" }, [
        _c("label", { attrs: { for: "" } }, [
          _vm._v("Choose how much data you want to export"),
        ]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control" }, [
          _c("option", { attrs: { value: "" } }, [_vm._v("Only Current page")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "" } }, [_vm._v("Everything")]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 form-group mb-3 mt-4" }, [
        _c("button", { staticClass: "btn btn-success" }, [
          _vm._v("Download Excel "),
          _c("i", { staticClass: "fas fa-download" }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);