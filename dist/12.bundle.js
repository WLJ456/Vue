webpackJsonp([12],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__goodslist_vue_vue_type_template_id_7368bbca_scoped_true___ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goodslist_vue_vue_type_script_lang_js___ = __webpack_require__(296);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__goodslist_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__goodslist_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goodslist_vue_vue_type_style_index_0_id_7368bbca_scoped_true_lang_css___ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(139);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__goodslist_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__goodslist_vue_vue_type_template_id_7368bbca_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__goodslist_vue_vue_type_template_id_7368bbca_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "7368bbca",
  null
  
)

/* hot reload */
if (false) {
  var api = require("D:\\WebLearn\\webpack-appDemo\\node_modules\\_vue-hot-reload-api@2.3.4@vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7368bbca')) {
      api.createRecord('7368bbca', component.options)
    } else {
      api.reload('7368bbca', component.options)
    }
    module.hot.accept("./goodslist.vue?vue&type=template&id=7368bbca&scoped=true&", function () {
      api.rerender('7368bbca', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/components/goods/goodslist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js___ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "",
  data: function data() {
    return {
      //模拟商品数据
      goodsMsg: this.$root.goodsMsg
    };
  },

  methods: {
    goodsListInfo: function goodsListInfo(id) {
      this.$router.push({ name: "goodslistinfo", params: { id: id } });
    }
  }
};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(360);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_template_id_7368bbca_scoped_true___ = __webpack_require__(358);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_template_id_7368bbca_scoped_true___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_template_id_7368bbca_scoped_true___["b"]; });


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods-list" },
    _vm._l(_vm.goodsMsg, function(item, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass: "goods-item",
          on: {
            click: function($event) {
              return _vm.goodsListInfo(item.id)
            }
          }
        },
        [
          _c("img", {
            attrs: { src: item.src, height: "200px", width: "200px" }
          }),
          _vm._v(" "),
          _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(item.title))]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("p", { staticClass: "price" }, [
              _c("span", { staticClass: "now" }, [
                _vm._v("￥" + _vm._s(item.nowsell))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "old" }, [
                _vm._v("￥" + _vm._s(item.oldsell))
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "sell" }, [
              _c("span", [_vm._v("热卖中")]),
              _vm._v(" "),
              _c("span", [_vm._v("库存" + _vm._s(item.numbers))])
            ])
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_1_0_0_style_loader_dist_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_style_index_0_id_7368bbca_scoped_true_lang_css___ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_1_0_0_style_loader_dist_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_style_index_0_id_7368bbca_scoped_true_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_1_0_0_style_loader_dist_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_style_index_0_id_7368bbca_scoped_true_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_1_0_0_style_loader_dist_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_goodslist_vue_vue_type_style_index_0_id_7368bbca_scoped_true_lang_css____default.a); 

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.goods-list[data-v-7368bbca] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  /* 换行排列  流式布局在listdiv中用一个padding 将元素往中间挤一个7像素，再进行俩边布局*/\r\n  padding: 7px;\r\n  justify-content: space-between;\n}\n.goods-item[data-v-7368bbca] {\r\n  width: 49%;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0px 0px 8px #ccc;\r\n  margin: 4px 0;\r\n  /* 改变主轴方向 即纵向spacebetween */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 200px;\n}\n.goods-item img[data-v-7368bbca] {\r\n  width: 100%;\n}\n.title[data-v-7368bbca] {\r\n  font-size: 16px;\n}\n.info[data-v-7368bbca] {\r\n  background-color: #cccc;\n}\n.price[data-v-7368bbca] {\r\n  margin: 0;\r\n  padding: 4px;\n}\n.now[data-v-7368bbca] {\r\n  color: red;\r\n  font-weight: bold;\r\n  font-size: 16px;\n}\n.old[data-v-7368bbca] {\r\n  text-decoration: line-through;\r\n  font-size: 12px;\r\n  margin-left: 10px;\n}\n.sell[data-v-7368bbca] {\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.goods-item[data-v-7368bbca]:hover {\r\n  transition: all 0.4s ease-out;\r\n  box-shadow: 5px 5px 4px #ccc;\r\n  transform: scale(130%);\n}\r\n", ""]);


/***/ })

});