"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_ListMachine_ServiceDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      historyData: {},
      machineData: {},
      isLoading: true,
      moment: moment,
      parts: []
    };
  },
  methods: {
    getHistoryData: function getHistoryData() {
      var _this = this;

      axios.get("/admin/api/service-history-details?machineId=".concat(this.$route.params.machineId, "&historyId=").concat(this.$route.params.serviceId)).then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.isLoading = false;
          _this.historyData = data.service;
          _this.machineData = data.machine;
          _this.parts = data.parts;
        } else {
          _this.$router.go(-1);
        }
      })["catch"](function (err) {
        _this.$router.go(-1);

        console.error(err.response.data);
      });
    },
    deleteServicePhoto: function deleteServicePhoto(index, photoId) {
      var _this2 = this;

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
          axios.post("/admin/api/delete-service-photo", {
            photoId: photoId
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire("Success", data.msg, "success");

              _this2.historyData.photos.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getHistoryData();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/ServiceDetails.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/ServiceDetails.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceDetails.vue?vue&type=template&id=10a94c9e& */ "./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e&");
/* harmony import */ var _ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ListMachine/ServiceDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_10a94c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceDetails.vue?vue&type=template&id=10a94c9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/ListMachine/ServiceDetails.vue?vue&type=template&id=10a94c9e& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                      {
                        attrs: {
                          to: {
                            name: "machine.info",
                            params: { id: _vm.$route.params.machineId },
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.machineData.title))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v("Service History"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-7" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header d-flex justify-content-end" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-sm btn-primary",
                attrs: {
                  to: {
                    name: "machine.edit-service",
                    params: {
                      serviceId: _vm.$route.params.serviceId,
                      machineId: _vm.$route.params.machineId,
                    },
                  },
                },
              },
              [_vm._v("Edit "), _c("i", { staticClass: "fas fa-edit" })]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "mb-4 ml-2 badge badge-primary" }, [
              _vm._v("Bottom SL : " + _vm._s(_vm.machineData.bottom_sl)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-4 ml-2 badge badge-secondary" }, [
              _vm._v("Top SL : " + _vm._s(_vm.machineData.top_sl)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-4 ml-2 badge badge-warning" }, [
              _vm._v("Label Number : " + _vm._s(_vm.machineData.label_number)),
            ]),
          ]),
          _vm._v(" "),
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "row mt-5" },
                _vm._l(9, function (n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-md-4 mb-4" },
                    [
                      _c("skeleton", {
                        attrs: { width: "40%", height: "25px" },
                      }),
                      _vm._v(" "),
                      _c("skeleton", {
                        attrs: { width: "100%", height: "20px" },
                      }),
                      _vm._v(" "),
                      _c("skeleton", {
                        attrs: { width: "100%", height: "20px" },
                      }),
                    ],
                    1
                  )
                }),
                0
              )
            : _c("div", { staticClass: "row mt-5" }, [
                _c("div", { staticClass: "col-4 mb-4" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(
                      _vm._s(
                        _vm
                          .moment(_vm.historyData.serviceDate)
                          .format("MM/DD/YYYY")
                      )
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4 mb-4" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.historyData.serviceType)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4 mb-4" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.historyData.techName)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12 mb-4" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.historyData.description)),
                  ]),
                ]),
              ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-5" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm._m(6),
          _vm._v(" "),
          _vm.isLoading
            ? _c(
                "div",
                { staticClass: "row mt-5" },
                _vm._l(4, function (n) {
                  return _c(
                    "div",
                    { key: n, staticClass: "col-md-6 mb-4" },
                    [
                      _c("skeleton", {
                        attrs: { width: "100%", height: "200px" },
                      }),
                    ],
                    1
                  )
                }),
                0
              )
            : _c(
                "div",
                { staticClass: "row mt-5" },
                [
                  _vm.historyData.photos.length <= 0
                    ? [_vm._m(7)]
                    : _vm._l(_vm.historyData.photos, function (photo, i) {
                        return _c(
                          "div",
                          { key: i, staticClass: "col-md-6 mb-4" },
                          [
                            _c("img", {
                              staticClass: "service-photo",
                              attrs: {
                                src:
                                  "/admin/api/resources/photos/service/" +
                                  photo.img,
                                alt: "",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-danger",
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteServicePhoto(i, photo.id)
                                  },
                                },
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            ),
                          ]
                        )
                      }),
                ],
                2
              ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm.historyData.needParts == "yes"
      ? _c("div", { staticClass: "col-md-7" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._m(8),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm.parts.length <= 0
                        ? [_vm._m(10)]
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
                                        _c("i", {
                                          staticClass: "fas fa-clock",
                                        }),
                                        _vm._v(" Need to order"),
                                      ]
                                    )
                                  : part.status == "ordered"
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-pending" },
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
                                      { staticClass: "badge badge-shipped" },
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
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Service History")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h4", [_vm._v("Service Details")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("b", [_vm._v("Service Date")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("b", [_vm._v("Service Type")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("b", [_vm._v("Technician Name")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [_c("b", [_vm._v("Service Description")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h4", [_vm._v("Service Photos")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c("h4", { staticClass: "text-danger" }, [_vm._v("No photos available")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("h4", [_vm._v("Parts List")]),
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