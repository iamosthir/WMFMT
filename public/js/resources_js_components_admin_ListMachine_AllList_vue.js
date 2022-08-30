"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_ListMachine_AllList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true,
      machines: {},
      moment: moment,
      searchText: "",
      searchMode: false
    };
  },
  methods: {
    getAllMachineList: function getAllMachineList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/admin/api/get-all-machine-list?page=" + page + "&q=" + this.searchText).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        _this.machines = data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteMachine: function deleteMachine(index, id) {
      var _this2 = this;

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
          axios.post("/admin/api/delete-machine", {
            machineId: id
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            console.log(data);

            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this2.machines.data.splice(index, 1);
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

      this.getAllMachineList();
    },
    cancelSearch: function cancelSearch() {
      this.searchText = "";
      this.searchMode = false;
      this.getAllMachineList();
    }
  },
  mounted: function mounted() {
    this.getAllMachineList();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/AllList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/AllList.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllList.vue?vue&type=template&id=60789744& */ "./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744&");
/* harmony import */ var _AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ListMachine/AllList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllList_vue_vue_type_template_id_60789744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllList.vue?vue&type=template&id=60789744& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/AllList.vue?vue&type=template&id=60789744& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                      placeholder:
                        "Search by machine title, top sl, bottom sl, label, customer name, phone...",
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
                                _vm.machines.data.length == 0
                                  ? [_vm._m(3)]
                                  : _vm._l(
                                      _vm.machines.data,
                                      function (machine, i) {
                                        return _c(
                                          "tr",
                                          { key: i },
                                          [
                                            _c("td", [_vm._v(_vm._s(i + 1))]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(machine.title)),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(machine.manufacturer)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-pill badge-warning",
                                                },
                                                [_vm._v(_vm._s(machine.model))]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-pill badge-primary",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(machine.bottom_sl)
                                                  ),
                                                ]
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
                                                  staticClass:
                                                    "badge badge-pill badge-success",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(machine.label_number)
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(machine.customer_name)
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
                                                            machine.last_service
                                                              .created_at
                                                          )
                                                          .format(
                                                            "MM / DD / YYYY"
                                                          )
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
                                                    "\r\n                                                        Actions\r\n                                                    "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "dropdown-menu",
                                                  attrs: {
                                                    "aria-labelledby":
                                                      "dropdownMenuButton",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name: "machine.info",
                                                          params: {
                                                            id: machine.id,
                                                          },
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-eye",
                                                      }),
                                                      _vm._v(" Details"),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  machine.last_service
                                                    ? _c(
                                                        "router-link",
                                                        {
                                                          staticClass:
                                                            "dropdown-item",
                                                          attrs: {
                                                            to: {
                                                              name: "machine.serviceHistory",
                                                              params: {
                                                                machineId:
                                                                  machine
                                                                    .last_service
                                                                    .machine_id,
                                                                serviceId:
                                                                  machine
                                                                    .last_service
                                                                    .id,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-eye",
                                                          }),
                                                          _vm._v(
                                                            " Last Service Details"
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name: "machine.service-record.add",
                                                          params: {
                                                            machineId:
                                                              machine.id,
                                                          },
                                                        },
                                                        href: "#",
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-plus",
                                                      }),
                                                      _vm._v(
                                                        " Add Service Record"
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item text-warning",
                                                      attrs: {
                                                        to: {
                                                          name: "machine.edit",
                                                          params: {
                                                            id: machine.id,
                                                          },
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-edit",
                                                      }),
                                                      _vm._v(
                                                        " Edit Machine Info"
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "mb-2 btn btn-sm btn-danger",
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.deleteMachine(
                                                        i,
                                                        machine.id
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-trash",
                                                  }),
                                                  _vm._v(" Delete"),
                                                ]
                                              ),
                                            ]),
                                          ],
                                          2
                                        )
                                      }
                                    ),
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
                attrs: { data: _vm.machines },
                on: { "pagination-change-page": _vm.getAllMachineList },
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
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0" }, [_vm._v("All Machines List")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Machine List"),
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
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
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
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Service Date")]),
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
        [_vm._v("No listed machine was found")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);