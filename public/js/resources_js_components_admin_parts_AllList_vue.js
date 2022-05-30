"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_parts_AllList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      parts: {},
      moment: moment,
      searchText: "",
      searchMode: false
    };
  },
  methods: {
    getAllPartsList: function getAllPartsList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/admin/api/get-all-parts-list?page=" + page + "&q=" + this.searchText).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.parts = data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deletePart: function deletePart(id, index) {
      var _this2 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "This will delete the part data from server",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post("/admin/api/delete-part", {
            partId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            console.log(data);

            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this2.parts.data.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    },
    searchMachine: function searchMachine() {
      if (this.searchText != "") {
        this.searchMode = true;
      } else {
        this.searchMode = false;
      }

      this.getAllPartsList();
    },
    cancelSearch: function cancelSearch() {
      this.searchText = "";
      this.searchMode = false;
      this.getAllPartsList();
    },
    changeStatus: function changeStatus(id, index) {
      var _this3 = this;

      axios.post('/admin/api/update-part-status', {
        partId: id
      }).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          swal.fire("Success", data.msg, "success");
          _this3.parts.data[index].status = data.new_status;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getAllPartsList();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/parts/AllList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/parts/AllList.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllList.vue?vue&type=template&id=f539b656& */ "./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656&");
/* harmony import */ var _AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/parts/AllList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_f539b656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllList.vue?vue&type=template&id=f539b656& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/parts/AllList.vue?vue&type=template&id=f539b656& ***!
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
                  _vm._v("Parts List"),
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
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "form",
              {
                staticClass: "col-md-6",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.searchMachine()
                  },
                },
              },
              [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchText,
                        expression: "searchText",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Search by tacking number...",
                    },
                    domProps: { value: _vm.searchText },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.searchText = $event.target.value
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(1),
                ]),
                _vm._v(" "),
                _vm.searchMode
                  ? _c("div", { staticClass: "form-group" }, [
                      _c("p", [
                        _vm._v(
                          "\r\n                                Search Result for :   "
                        ),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(_vm._s(_vm.searchText)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn text-danger",
                            attrs: { type: "button", title: "Cancel Search" },
                            on: { click: _vm.cancelSearch },
                          },
                          [_c("i", { staticClass: "fas fa-times" })]
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-12 mt-3" },
              [
                _c("h4", [_vm._v("List")]),
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
                  : [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-striped table-hover table-bordered",
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.parts.data.length == 0
                                  ? [_vm._m(3)]
                                  : _vm._l(_vm.parts.data, function (part, i) {
                                      return _c("tr", { key: i }, [
                                        _c("td", [_vm._v(_vm._s(part.name))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(part.part_number)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(part.vendor))]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(part.po))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(part.track_number)),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-secondary",
                                            },
                                            [_vm._v(_vm._s(part.service_id))]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "badge badge-primary",
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  part.machine.label_number
                                                )
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          part.status == "need_to_order"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-warning",
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-clock",
                                                  }),
                                                  _vm._v(" Need to order"),
                                                ]
                                              )
                                            : part.status == "ordered"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-pending",
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-check",
                                                  }),
                                                  _vm._v(" Ordered"),
                                                ]
                                              )
                                            : part.status == "shipped"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-shipped",
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-truck",
                                                  }),
                                                  _vm._v(" Shipped"),
                                                ]
                                              )
                                            : part.status == "installed"
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-success",
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-check-circle",
                                                  }),
                                                  _vm._v(" Installed"),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            part.status == "need_to_order"
                                              ? _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-primary",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.changeStatus(
                                                          part.id,
                                                          i
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Mark as ordered")]
                                                )
                                              : part.status == "ordered"
                                              ? _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm btn-secondary",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.changeStatus(
                                                          part.id,
                                                          i
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Mark as shipped")]
                                                )
                                              : part.status == "shipped"
                                              ? _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-sm badge-shipped",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.changeStatus(
                                                          part.id,
                                                          i
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [_vm._v("Mark as installed")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-success",
                                                attrs: {
                                                  to: {
                                                    name: "edit-part",
                                                    params: { partId: part.id },
                                                  },
                                                  title: "Edit",
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-edit",
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
                                                    return _vm.deletePart(
                                                      part.id,
                                                      i
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
                                    }),
                              ],
                              2
                            ),
                          ]
                        ),
                      ]),
                    ],
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
                attrs: { data: _vm.parts },
                on: { "pagination-change-page": _vm.getAllPartsList },
              }),
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("All Parts List")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-search" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Part Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Part Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Vendor")]),
        _vm._v(" "),
        _c("th", [_vm._v("PO")]),
        _vm._v(" "),
        _c("th", [_vm._v("Track Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Service ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Assigned Machine Label")]),
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
      _c(
        "td",
        { staticClass: "text-center text-danger", attrs: { colspan: "10" } },
        [_vm._v("No listed parts was found")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);