"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_user_AdminList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      is_loading: true,
      admins: []
    };
  },
  methods: {
    getAdminList: function getAdminList() {
      var _this = this;

      axios.get("/admin/api/get-admin-list").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.status == "ok") {
          _this.admins = data.data;
          _this.is_loading = false;
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    getProfileInfo: function getProfileInfo() {
      var _this2 = this;

      axios.get("/admin/api/get-admin-info").then(function (resp) {
        return resp.data;
      }).then(function (data) {
        if (data.role != "super") {
          _this2.$router.push({
            name: "admin-home"
          });
        } else {
          _this2.getAdminList();
        }
      })["catch"](function (err) {
        console.error(err.response.data);
      });
    },
    deleteAdmin: function deleteAdmin(adminId, index) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (res) {
        if (res.isConfirmed) {
          axios.post("/admin/api/delete-admin", {
            adminId: adminId
          }).then(function (resp) {
            return resp.data;
          }).then(function (data) {
            if (data.status == "ok") {
              swal.fire({
                title: "Success",
                icon: "success",
                text: data.msg,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000
              });

              _this3.admins.splice(index, 1);
            }
          })["catch"](function (err) {
            console.error(err.response.data);
          });
        }
      });
    }
  },
  created: function created() {
    this.getProfileInfo();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/user/AdminList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/user/AdminList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminList.vue?vue&type=template&id=2a310398& */ "./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398&");
/* harmony import */ var _AdminList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminList.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/AdminList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminList_vue_vue_type_template_id_2a310398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminList.vue?vue&type=template&id=2a310398& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/AdminList.vue?vue&type=template&id=2a310398& ***!
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
  return _c("section", { staticClass: "section pt-5" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("h4", [_vm._v("Admin List")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "admin-new" } },
                },
                [
                  _c("i", { staticClass: "fas fa-plus" }),
                  _vm._v(" Create admin"),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.is_loading
              ? _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(10, function (n) {
                    return _c(
                      "div",
                      { key: n, staticClass: "col-12" },
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
              : _vm._e(),
            _vm._v(" "),
            !_vm.is_loading
              ? _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.admins.length == 0
                          ? [_vm._m(1)]
                          : _vm._l(_vm.admins, function (admin, i) {
                              return _c("tr", { key: i }, [
                                _c("td", [
                                  admin.photo
                                    ? _c("img", {
                                        staticClass: "user-round",
                                        attrs: {
                                          src:
                                            "/admin/api/resources/photos/user/" +
                                            admin.photo,
                                          alt: "",
                                        },
                                      })
                                    : _c("img", {
                                        staticClass: "user-round",
                                        attrs: {
                                          src: "/img/portrait-placeholder.png",
                                          alt: "",
                                        },
                                      }),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(admin.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(admin.email))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      admin.role == "super"
                                        ? "Super Admin"
                                        : "Tech"
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
                                        staticClass: "btn btn-success btn-sm",
                                        attrs: {
                                          to: {
                                            name: "admin-edit",
                                            params: { adminId: admin.id },
                                          },
                                          title: "Edit",
                                        },
                                      },
                                      [_c("i", { staticClass: "fas fa-edit" })]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        on: {
                                          click: function ($event) {
                                            return _vm.deleteAdmin(admin.id, i)
                                          },
                                        },
                                      },
                                      [_c("i", { staticClass: "fas fa-trash" })]
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
                ])
              : _vm._e(),
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Admin Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
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
        { staticClass: "text-center text-danger", attrs: { colspan: "5" } },
        [_vm._v("No admin was created")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);