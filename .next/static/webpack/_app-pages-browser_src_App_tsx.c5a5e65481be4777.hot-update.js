"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_App_tsx",{

/***/ "(app-pages-browser)/./src/components/Articles.tsx":
/*!*************************************!*\
  !*** ./src/components/Articles.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article */ \"(app-pages-browser)/./src/components/Article.tsx\");\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: \",\n        \";\\n  overflow: hidden;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  //min-width: 400px;\\n  font-family: \"Arial\", Times;\\n  text-align: center;\\n  /*padding-top: 5%;\\n  //background-color: #004d4d;\\n  \\n  line-height: 1.64;*/\\n  padding: 2% 10% 2%;\\n  color: black;\\n'\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: white;\\n\"\n    ]);\n    _templateObject2 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-size: cover;\\n  object-fit: fill;\\n  border: none;\\n  width: 100%;\\n\\n  //transition: width 2s;\\n  height: auto;\\n  max-height: \",\n        \";\\n  transition: all 0.5s ease-in-out;\\n  -webkit-transition: all 0.5s ease-in-out; /* For Safari 3.1 to 6.0 */\\n\"\n    ]);\n    _templateObject3 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100px;\\n  width: 100%;\\n  background-color: white;\\n  -webkit-mask-image: -webkit-gradient(\\n    linear,\\n    left bottom,\\n    left top,\\n    from(rgba(0, 0, 0, 1)),\\n    to(rgba(0, 0, 0, 0))\\n  );\\n  border-top-right-radius: 100px;\\n  border-top-left-radius: 100px;\\n\\n  h2 {\\n    color: black;\\n    position: relative; //missed\\n    z-index: 2;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nvar Articles = function(param) {\n    var data = param.data, ref_prop = param.ref_prop, backgroundColor = param.backgroundColor;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), collapse = _useState[0], setCollapse = _useState[1];\n    var handleClick = function() {\n        setCollapse(!collapse);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"Articles.useEffect\": function() {\n            if (data.content.length == 1) {\n                setCollapse(false);\n            }\n        }\n    }[\"Articles.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NoOverflow, {\n        bkgrcolor: backgroundColor,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArticlesWrap, {\n                ref: ref_prop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                        children: data.titre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArticlesInside, {\n                        collapse: collapse.toString(),\n                        children: data.content.map(function(cont, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                content: cont,\n                                i: i\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 20\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            data.content.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Collapser, {\n                onClick: handleClick,\n                children: [\n                    \"::before\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: collapse ? \"expand\" : \"close\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\prise\\\\jsproject\\\\portfolio_cool\\\\src\\\\components\\\\Articles.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Articles, \"wQin4aI5P8jndyjAEqK7+jDKUtk=\");\n_c = Articles;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);\nvar NoOverflow = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), function(props) {\n    return props.bkgrcolor ? props.bkgrcolor : \"#004d4d\";\n});\n_c1 = NoOverflow;\nvar ArticlesWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c2 = ArticlesWrap;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1(_templateObject2());\n_c3 = Title;\nvar ArticlesInside = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3(), function(props) {\n    return props.collapse == \"true\" ? \"350px\" : \"3000px\";\n});\n_c4 = ArticlesInside;\nvar Collapser = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4());\n_c5 = Collapser;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Articles\");\n$RefreshReg$(_c1, \"NoOverflow\");\n$RefreshReg$(_c2, \"ArticlesWrap\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ArticlesInside\");\n$RefreshReg$(_c5, \"Collapser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FydGljbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUNQO0FBSWhDLElBQU1LLFdBQVc7UUFDZkMsYUFBQUEsTUFDQUMsaUJBQUFBLFVBQ0FDLHdCQUFBQTs7SUFNQSxJQUFnQ04sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQWxDTyxXQUF5QlAsY0FBZlEsY0FBZVI7SUFDaEMsSUFBTVMsY0FBYztRQUNsQkQsWUFBWSxDQUFDRDtJQUNmO0lBQ0FSLGdEQUFTQTs4QkFBQztZQUNSLElBQUlLLEtBQUtNLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLEdBQUc7Z0JBQzVCSCxZQUFZO1lBQ2Q7UUFDRjs2QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNJO1FBQVdDLFdBQVdQOzswQkFDckIsOERBQUNRO2dCQUFhQyxLQUFLVjs7a0NBQ2pCLDhEQUFDVztrQ0FBT1osS0FBS2EsS0FBSzs7Ozs7O2tDQUNsQiw4REFBQ0M7d0JBQWVYLFVBQVVBLFNBQVNZLFFBQVE7a0NBQ3hDZixLQUFLTSxPQUFPLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxNQUFtQkM7NEJBQ3BDLHFCQUFPLDhEQUFDcEIsZ0RBQU9BO2dDQUFDUSxTQUFTVztnQ0FBTUMsR0FBR0E7K0JBQVFBOzs7Ozt3QkFDNUM7Ozs7Ozs7Ozs7OztZQUdIbEIsS0FBS00sT0FBTyxDQUFDQyxNQUFNLEdBQUcsbUJBQ3JCLDhEQUFDWTtnQkFBVUMsU0FBU2Y7O29CQUFhO2tDQUUvQiw4REFBQ2dCO2tDQUFJbEIsV0FBVyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0FyQ01KO0tBQUFBO0FBdUNOLGlFQUFlQSxRQUFRQSxFQUFDO0FBRXhCLElBQU1TLGFBQWFYLHlEQUFNQSxDQUFDeUIsR0FBRyxvQkFDUCxTQUFDQztXQUNuQkEsTUFBTWQsU0FBUyxHQUFHYyxNQUFNZCxTQUFTLEdBQUc7O01BRmxDRDtBQUtOLElBQU1FLGVBQWViLHlEQUFNQSxDQUFDeUIsR0FBRztNQUF6Qlo7QUFZTixJQUFNRSxRQUFRZix5REFBTUEsQ0FBQzJCLEVBQUU7TUFBakJaO0FBSU4sSUFBTUUsaUJBQWlCakIseURBQU1BLENBQUN5QixHQUFHLHFCQVFqQixTQUFDQztXQUFXQSxNQUFNcEIsUUFBUSxJQUFJLFNBQVMsVUFBVTs7TUFSM0RXO0FBYU4sSUFBTUssWUFBWXRCLHlEQUFNQSxDQUFDeUIsR0FBRztNQUF0QkgiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJpc2VcXGpzcHJvamVjdFxccG9ydGZvbGlvX2Nvb2xcXHNyY1xcY29tcG9uZW50c1xcQXJ0aWNsZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcclxuaW1wb3J0IHsgQ29udGVudFR5cGUsIEV4cGVyaWVuY2VUeXBlIH0gZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvciB9IGZyb20gXCIuLi9mdW5jdGlvbnMvaGV4R2VuZXJhdG9yXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICh7XHJcbiAgZGF0YSxcclxuICByZWZfcHJvcCxcclxuICBiYWNrZ3JvdW5kQ29sb3IsXHJcbn06IHtcclxuICBkYXRhOiBFeHBlcmllbmNlVHlwZTtcclxuICByZWZfcHJvcDogUmVhY3QuTGVnYWN5UmVmPGFueT47XHJcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvbGxhcHNlLCBzZXRDb2xsYXBzZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldENvbGxhcHNlKCFjb2xsYXBzZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEuY29udGVudC5sZW5ndGggPT0gMSkge1xyXG4gICAgICBzZXRDb2xsYXBzZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5vT3ZlcmZsb3cgYmtncmNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9PlxyXG4gICAgICA8QXJ0aWNsZXNXcmFwIHJlZj17cmVmX3Byb3B9PlxyXG4gICAgICAgIDxUaXRsZT57ZGF0YS50aXRyZX08L1RpdGxlPlxyXG4gICAgICAgIDxBcnRpY2xlc0luc2lkZSBjb2xsYXBzZT17Y29sbGFwc2UudG9TdHJpbmcoKX0+XHJcbiAgICAgICAgICB7ZGF0YS5jb250ZW50Lm1hcCgoY29udDogQ29udGVudFR5cGUsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEFydGljbGUgY29udGVudD17Y29udH0gaT17aX0ga2V5PXtpfSAvPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQXJ0aWNsZXNJbnNpZGU+XHJcbiAgICAgIDwvQXJ0aWNsZXNXcmFwPlxyXG4gICAgICB7ZGF0YS5jb250ZW50Lmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgIDxDb2xsYXBzZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgOjpiZWZvcmVcclxuICAgICAgICAgIDxoMj57Y29sbGFwc2UgPyBcImV4cGFuZFwiIDogXCJjbG9zZVwifTwvaDI+XHJcbiAgICAgICAgPC9Db2xsYXBzZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L05vT3ZlcmZsb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xyXG5cclxuY29uc3QgTm9PdmVyZmxvdyA9IHN0eWxlZC5kaXY8eyBia2dyY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCB9PmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmJrZ3Jjb2xvciA/IHByb3BzLmJrZ3Jjb2xvciA6IFwiIzAwNGQ0ZFwifTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5jb25zdCBBcnRpY2xlc1dyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIC8vbWluLXdpZHRoOiA0MDBweDtcclxuICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBUaW1lcztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLypwYWRkaW5nLXRvcDogNSU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDRkO1xyXG4gIFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjY0OyovXHJcbiAgcGFkZGluZzogMiUgMTAlIDIlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEFydGljbGVzSW5zaWRlID0gc3R5bGVkLmRpdjx7IGNvbGxhcHNlOiBzdHJpbmcgfT5gXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy90cmFuc2l0aW9uOiB3aWR0aCAycztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5jb2xsYXBzZSA9PSBcInRydWVcIiA/IFwiMzUwcHhcIiA6IFwiMzAwMHB4XCIpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0OyAvKiBGb3IgU2FmYXJpIDMuMSB0byA2LjAgKi9cclxuYDtcclxuXHJcbmNvbnN0IENvbGxhcHNlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICBsaW5lYXIsXHJcbiAgICBsZWZ0IGJvdHRvbSxcclxuICAgIGxlZnQgdG9wLFxyXG4gICAgZnJvbShyZ2JhKDAsIDAsIDAsIDEpKSxcclxuICAgIHRvKHJnYmEoMCwgMCwgMCwgMCkpXHJcbiAgKTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy9taXNzZWRcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkFydGljbGUiLCJBcnRpY2xlcyIsImRhdGEiLCJyZWZfcHJvcCIsImJhY2tncm91bmRDb2xvciIsImNvbGxhcHNlIiwic2V0Q29sbGFwc2UiLCJoYW5kbGVDbGljayIsImNvbnRlbnQiLCJsZW5ndGgiLCJOb092ZXJmbG93IiwiYmtncmNvbG9yIiwiQXJ0aWNsZXNXcmFwIiwicmVmIiwiVGl0bGUiLCJ0aXRyZSIsIkFydGljbGVzSW5zaWRlIiwidG9TdHJpbmciLCJtYXAiLCJjb250IiwiaSIsIkNvbGxhcHNlciIsIm9uQ2xpY2siLCJoMiIsImRpdiIsInByb3BzIiwiaDEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Articles.tsx\n"));

/***/ })

});