/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routesConfig */ \"./src/routesConfig.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actionCreators/auth */ \"./src/store/actionCreators/auth.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader-react18/useStyles */ \"isomorphic-style-loader-react18/useStyles\");\n/* harmony import */ var isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  var store = _ref.store;\n  // useStyles(styles);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n}\nApp.loadData = function (store) {\n  return store.dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].validate());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://reactssr/./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar request = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n// 客户端 request('/api/user') \n// 服务端 request('http://localhost:4000/api/user')\n\n//# sourceURL=webpack://reactssr/./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actionCreators/auth */ \"./src/store/actionCreators/auth.js\");\n\n\n\n\nfunction Header() {\n  // const dispatch = useDispatch();\n  // useEffect(() => {\n  //   dispatch(actionCreators.validate());\n  // }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/counter\"\n  }, \"Counter\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/user\"\n  }, \"User\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/login\"\n  }, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/logout\"\n  }, \"Logout\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/profile\"\n  }, \"Profile\")));\n}\n\n//# sourceURL=webpack://reactssr/./src/components/Header.js?");

/***/ }),

/***/ "./src/routes/Counter.js":
/*!*******************************!*\
  !*** ./src/routes/Counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actionCreators/counter */ \"./src/store/actionCreators/counter.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Counter(props) {\n  var number = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.counter.number;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var add = _store_actionCreators_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"\\u6211\\u662F\\u8BA1\\u6570\\u5668\\u7684\\u6807\\u9898\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"\\u6211\\u662F\\u8BA1\\u6570\\u5668\\u9875\\u7684\\u63CF\\u8FF0\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch(add());\n    }\n  }, \"add\"));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n//# sourceURL=webpack://reactssr/./src/routes/Counter.js?");

/***/ }),

/***/ "./src/routes/Home.js":
/*!****************************!*\
  !*** ./src/routes/Home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ \"./src/routes/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader-react18/useStyles */ \"isomorphic-style-loader-react18/useStyles\");\n/* harmony import */ var isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_useStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader-react18/withStyles */ \"isomorphic-style-loader-react18/withStyles\");\n/* harmony import */ var isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n  // console.log(styles, styles._getContent(), styles._getCss(), 'styles---')\n  // useStyles(styles);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_Home_css__WEBPACK_IMPORTED_MODULE_1___default().theme)\n  }, \"Home\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_react18_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_Home_css__WEBPACK_IMPORTED_MODULE_1___default()))(Home));\n\n//# sourceURL=webpack://reactssr/./src/routes/Home.js?");

/***/ }),

/***/ "./src/routes/Login.js":
/*!*****************************!*\
  !*** ./src/routes/Login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actionCreators/auth */ \"./src/store/actionCreators/auth.js\");\n\n\n\nfunction Login() {\n  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var name = nameRef.current.value;\n    var user = {\n      name: name\n    };\n    dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login(user));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, \"\\u7528\\u6237\\u540D\\uFF1A\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    ref: nameRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"\\u63D0\\u4EA4\"));\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/Login.js?");

/***/ }),

/***/ "./src/routes/Logout.js":
/*!******************************!*\
  !*** ./src/routes/Logout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actionCreators/auth */ \"./src/store/actionCreators/auth.js\");\n\n\n\nfunction Logout() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var handleLogout = function handleLogout() {\n    dispatch(_store_actionCreators_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout());\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: handleLogout\n  }, \"\\u9000\\u51FA\"));\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/Logout.js?");

/***/ }),

/***/ "./src/routes/NotFound.js":
/*!********************************!*\
  !*** ./src/routes/NotFound.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotFound)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"NotFound\");\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/NotFound.js?");

/***/ }),

/***/ "./src/routes/Profile.js":
/*!*******************************!*\
  !*** ./src/routes/Profile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Profile() {\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.auth.user;\n  });\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!user) {\n      navigate('/login');\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"\\u5F53\\u524D\\u767B\\u9646\\u7528\\u6237\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"name: \", user && user.name));\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/Profile.js?");

/***/ }),

/***/ "./src/routes/User.js":
/*!****************************!*\
  !*** ./src/routes/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction User() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/user/add\"\n  }, \"\\u6DFB\\u52A0\\u7528\\u6237\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/user/list\"\n  }, \"\\u7528\\u6237\\u5217\\u8868\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/User.js?");

/***/ }),

/***/ "./src/routes/UserAdd.js":
/*!*******************************!*\
  !*** ./src/routes/UserAdd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserAdd)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actionCreators/user */ \"./src/store/actionCreators/user.js\");\n\n\n\n\nfunction UserAdd() {\n  var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var name = nameRef.current.value;\n    dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addUser({\n      id: Date.now(),\n      name: name\n    }));\n    // 跳转到用户列表\n    navigate('/user/list');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, \"\\u7528\\u6237\\u540D\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    ref: nameRef,\n    type: \"text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"\\u6DFB\\u52A0\"));\n}\n\n//# sourceURL=webpack://reactssr/./src/routes/UserAdd.js?");

/***/ }),

/***/ "./src/routes/UserList.js":
/*!********************************!*\
  !*** ./src/routes/UserList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actionCreators/user */ \"./src/store/actionCreators/user.js\");\n\n\n\n\nfunction UserList() {\n  var list = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.user.list;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // 只会在客户端执行，不会在服务端执行\n    if (list.length === 0) {\n      // api接口提供用户列表服务，将数据放置到仓库中\n      dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getUserList());\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, list.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: user.id\n    }, user.name);\n  }));\n}\n// 当前的路由组件在服务端获取数据的方法\nUserList.loadData = function (store) {\n  // 等待此promise完成之后，仓库中就有数据了，然后可以用仓库store中的数据渲染带有真实数据的组件HTML了，然后发送给客户端\n  // ! 难点\n  // 1 loadData如何执行，什么时候执行，如何统一执行\n  //   服务器端没有componentWillMount，useEffect这些声明周期，也不能操作DOM，所以需要自己实现一套数据的加载逻辑\n  // 2 loadData返回的是什么： 是一个promise，也就是 axios.get('/api/users').then()\n  return store.dispatch(_store_actionCreators_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getUserList());\n};\n\n/**\n * redux:dispatch\n * function dispatch(action) {\n *  return action;\n * }\n */\n\n/**\n * redux-thunk\n */\n// const middleware: ThunkMiddleware<State, BasicAction, ExtraThunkArg> =\n//   ({ dispatch, getState }) =>\n//     next =>\n//       action => {\n//         if (typeof action === 'function') {\n//           return action(dispatch, getState, extraArgument)\n//         }\n//         return next(action)\n//       }\n\n//# sourceURL=webpack://reactssr/./src/routes/UserList.js?");

/***/ }),

/***/ "./src/routesConfig.js":
/*!*****************************!*\
  !*** ./src/routesConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/Home.js */ \"./src/routes/Home.js\");\n/* harmony import */ var _routes_Counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/Counter.js */ \"./src/routes/Counter.js\");\n/* harmony import */ var _routes_User_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/User.js */ \"./src/routes/User.js\");\n/* harmony import */ var _routes_UserAdd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/UserAdd.js */ \"./src/routes/UserAdd.js\");\n/* harmony import */ var _routes_UserList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/UserList.js */ \"./src/routes/UserList.js\");\n/* harmony import */ var _routes_Login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/Login.js */ \"./src/routes/Login.js\");\n/* harmony import */ var _routes_Logout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/Logout.js */ \"./src/routes/Logout.js\");\n/* harmony import */ var _routes_Profile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Profile.js */ \"./src/routes/Profile.js\");\n/* harmony import */ var _routes_NotFound_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/NotFound.js */ \"./src/routes/NotFound.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  index: true,\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n}, {\n  path: '/counter',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n}, {\n  path: '/user',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_User_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n  children: [{\n    path: '/user/add',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserAdd_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n    index: true\n  }, {\n    path: '/user/list',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_UserList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }]\n}, {\n  path: '/login',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Login_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n}, {\n  path: '/logout',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_Logout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n}, {\n  path: '*',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes_NotFound_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)\n}]);\n\n//# sourceURL=webpack://reactssr/./src/routesConfig.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader-react18/StyleContext */ \"isomorphic-style-loader-react18/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _routesConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routesConfig */ \"./src/routesConfig.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\n\n\n\n\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\nvar app = express();\n\n// 将public作为静态资源的存储目录\n// localhost:3000/public\napp.use(express[\"static\"]('public'));\napp.use('/api', expressHttpProxy('http://localhost:4000', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/api\".concat(req.url);\n  }\n}));\napp.get('*', function (req, res) {\n  var matchRouteList = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.matchRoutes)(_routesConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    pathname: req.url\n  });\n  if (matchRouteList) {\n    var _getServerStore = (0,_store__WEBPACK_IMPORTED_MODULE_5__.getServerStore)(req),\n      store = _getServerStore.store,\n      history = _getServerStore.history;\n    var loadDataPromises = matchRouteList.map(function (match) {\n      if (match.route.element.type.loadData) {\n        // 默认情况下，我们可能有很多组件都需要调用loadData，这时如果有一个失败了，整个数组都失败了，这个其实是不合理的\n        // then(data => data, error => error)是根据promise的then返回的数据都作为resolve(data)来将失败的promise作为成功返回\n        return match.route.element.type.loadData(store).then(function (data) {\n          return data;\n        }, function (error) {\n          return error;\n        });\n      }\n    })\n    // 路由匹配中是没有App的，所以需要加上App的loadData方法\n    .concat(_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadData && _App__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadData(store)).filter(Boolean);\n    Promise.all(loadDataPromises).then(function (values) {\n      if (req.url === '/profile' && !store.getState().auth.user) {\n        return res.redirect('/login');\n      } else if (req.url.slice(-1) === '*') {\n        res.status = 404;\n      }\n      var css = new Set();\n      var insertCss = function insertCss() {\n        for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n          styles[_key] = arguments[_key];\n        }\n        styles.forEach(function (style) {\n          css.add(style._getCss());\n        });\n      };\n      var styles = '';\n      if (css.size > 0) {\n        styles = \"<style> \".concat(_toConsumableArray(css).join(''), \"</style>\");\n      }\n      var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet.renderStatic();\n      var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n        location: req.url\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((isomorphic_style_loader_react18_StyleContext__WEBPACK_IMPORTED_MODULE_4___default().Provider), {\n        value: {\n          insertCss: insertCss\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        store: store\n      }))));\n      console.log(\"🚀 ~ app.get ~ html:\", html);\n      // 返回html\n      // todo 使用nunjucks模版来完成\n      res.send(\"\\n    <html>\\n       <head>\\n          <meta charset=\\\"UTF-8\\\">\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n          <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n          \".concat(helmet.title.toString(), \"\\n          \").concat(helmet.meta.toString(), \"\\n          \").concat(styles, \"\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(html, \"</div>\\n          <script>\\n            var context = {state: \").concat(JSON.stringify(store.getState()), \"}\\n          </script>\\n          <script src=\\\"/client.js\\\"></script>\\n        </body>\\n    </html>\\n    \"));\n    });\n  } else {\n    // 没有匹配的路由，返回404\n    res.sendStatus(404);\n  }\n});\napp.listen(3000, function () {\n  return console.log('server listen on 3000');\n});\n\n//# sourceURL=webpack://reactssr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar request = function request(req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:4000/',\n    headers: {\n      cookie: req.get('cookie')\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n// 服务端走的是http://localhost:4000\n\n//# sourceURL=webpack://reactssr/./src/server/request.js?");

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD: () => (/* binding */ ADD),\n/* harmony export */   ADD_USER: () => (/* binding */ ADD_USER),\n/* harmony export */   LOGIN_FAIL: () => (/* binding */ LOGIN_FAIL),\n/* harmony export */   LOGIN_SUCCESS: () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   LOGOUT_SUCCESS: () => (/* binding */ LOGOUT_SUCCESS),\n/* harmony export */   SET_USERLIST: () => (/* binding */ SET_USERLIST)\n/* harmony export */ });\nvar ADD = 'ADD';\n// 调用接口拿到用户数据，然后放到列表中\nvar SET_USERLIST = 'SET_USERLIST';\nvar ADD_USER = 'ADD_USER';\nvar LOGIN_SUCCESS = 'LOGIN_SUCCESS';\nvar LOGIN_FAIL = 'LOGIN_FAIL';\nvar LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';\n\n//# sourceURL=webpack://reactssr/./src/store/action-types.js?");

/***/ }),

/***/ "./src/store/actionCreators/auth.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/auth.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-first-history */ \"redux-first-history\");\n/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar actionCreators = {\n  login: function login(user) {\n    return function (dispatch, getState, request) {\n      return request.post('/api/login', user).then(function (response) {\n        var _response$data = response.data,\n          success = _response$data.success,\n          data = _response$data.data,\n          error = _response$data.error;\n        if (success) {\n          dispatch({\n            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS,\n            payload: data\n          });\n          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_1__.push)('/profile'));\n        } else {\n          dispatch({\n            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_FAIL,\n            payload: error\n          });\n        }\n      });\n    };\n  },\n  logout: function logout() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/logout').then(function (response) {\n        var success = response.data.success;\n        if (success) {\n          dispatch({\n            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_SUCCESS\n          });\n          dispatch((0,redux_first_history__WEBPACK_IMPORTED_MODULE_1__.push)('/login'));\n        }\n      });\n    };\n  },\n  validate: function validate() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/validate').then(function (response) {\n        var _response$data2 = response.data,\n          success = _response$data2.success,\n          data = _response$data2.data,\n          error = _response$data2.error;\n        if (success) {\n          dispatch({\n            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS,\n            payload: data\n          });\n        } else {\n          dispatch({\n            type: _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_FAIL,\n            payload: error\n          });\n        }\n      });\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);\n\n//# sourceURL=webpack://reactssr/./src/store/actionCreators/auth.js?");

/***/ }),

/***/ "./src/store/actionCreators/counter.js":
/*!*********************************************!*\
  !*** ./src/store/actionCreators/counter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar actionCreators = {\n  add: function add() {\n    return {\n      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);\n\n//# sourceURL=webpack://reactssr/./src/store/actionCreators/counter.js?");

/***/ }),

/***/ "./src/store/actionCreators/user.js":
/*!******************************************!*\
  !*** ./src/store/actionCreators/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar actionCreators = {\n  getUserList: function getUserList() {\n    return function (dispatch, getState, request) {\n      // console.log(dispatch, getState, 'getState--')\n      // console.log(request, 'request------')\n      return request.get('/api/users').then(function (response) {\n        var _response$data = response.data,\n          code = _response$data.code,\n          data = _response$data.data;\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USERLIST,\n          payload: data\n        });\n      });\n    };\n  },\n  addUser: function addUser(payload) {\n    return {\n      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER,\n      payload: payload\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionCreators);\n\n//# sourceURL=webpack://reactssr/./src/store/actionCreators/user.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClientStore: () => (/* binding */ getClientStore),\n/* harmony export */   getServerStore: () => (/* binding */ getServerStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise */ \"redux-promise\");\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/counter */ \"./src/store/reducers/counter.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/user */ \"./src/store/reducers/user.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/auth */ \"./src/store/reducers/auth.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-first-history */ \"redux-first-history\");\n/* harmony import */ var redux_first_history__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_first_history__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nfunction getClientStore() {\n  var initialstate = window.context.state;\n  var _createReduxHistoryCo = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_10__.createReduxHistoryContext)({\n      history: (0,history__WEBPACK_IMPORTED_MODULE_9__.createBrowserHistory)()\n      //other options if needed \n    }),\n    createReduxHistory = _createReduxHistoryCo.createReduxHistory,\n    routerMiddleware = _createReduxHistoryCo.routerMiddleware,\n    routerReducer = _createReduxHistoryCo.routerReducer;\n  var reducers = {\n    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    router: routerReducer\n  };\n  var combineRecer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((0,redux_thunk__WEBPACK_IMPORTED_MODULE_1__.withExtraArgument)(_client_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), (redux_promise__WEBPACK_IMPORTED_MODULE_3___default()), routerMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_2___default()))(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combineRecer, initialstate);\n  var history = createReduxHistory(store);\n  return {\n    history: history,\n    store: store\n  };\n}\nfunction getServerStore(req) {\n  var _createReduxHistoryCo2 = (0,redux_first_history__WEBPACK_IMPORTED_MODULE_10__.createReduxHistoryContext)({\n      history: (0,history__WEBPACK_IMPORTED_MODULE_9__.createMemoryHistory)()\n      //other options if needed \n    }),\n    createReduxHistory = _createReduxHistoryCo2.createReduxHistory,\n    routerMiddleware = _createReduxHistoryCo2.routerMiddleware,\n    routerReducer = _createReduxHistoryCo2.routerReducer;\n  var reducers = {\n    counter: _reducers_counter__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    router: routerReducer\n  };\n  var combineRecer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((0,redux_thunk__WEBPACK_IMPORTED_MODULE_1__.withExtraArgument)((0,_server_request__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(req)), (redux_promise__WEBPACK_IMPORTED_MODULE_3___default()), routerMiddleware, (redux_logger__WEBPACK_IMPORTED_MODULE_2___default()))(redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(combineRecer);\n  var history = createReduxHistory(store);\n  return {\n    history: history,\n    store: store\n  };\n}\n\n//# sourceURL=webpack://reactssr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar initialstate = {\n  user: null,\n  error: null\n};\nfunction auth() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGIN_FAIL:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.payload\n      });\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: null\n      });\n    default:\n      return state;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n//# sourceURL=webpack://reactssr/./src/store/reducers/auth.js?");

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initialstate = {\n  number: 0\n};\nfunction counter() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD:\n      return {\n        number: state.number + 1\n      };\n    default:\n      return state;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://reactssr/./src/store/reducers/counter.js?");

/***/ }),

/***/ "./src/store/reducers/user.js":
/*!************************************!*\
  !*** ./src/store/reducers/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar initialstate = {\n  list: []\n};\nfunction user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SET_USERLIST:\n      return {\n        list: action.payload\n      };\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ADD_USER:\n      return {\n        list: [].concat(_toConsumableArray(state.list), [action.payload])\n      };\n    default:\n      return state;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);\n\n//# sourceURL=webpack://reactssr/./src/store/reducers/user.js?");

/***/ }),

/***/ "./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/App.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/App.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.src-App__theme {\n  color: red;\n}`, \"\"]);\n// Exports\nvar theme = `src-App__theme`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reactssr/./src/App.css?./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_store_css_loader_7_1_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.src-routes-Home__theme {\n  color: blue;\n}`, \"\"]);\n// Exports\nvar theme = `src-routes-Home__theme`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reactssr/./src/routes/Home.css?./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./App.css */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/App.css\");\n    var css_default = css.default || css;\n    var insertCss = __webpack_require__(/*! !../node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js */ \"./node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js\");\n    var content = typeof css_default === 'string' ? [[module.id, css_default, '']] : css_default;\n\n    exports = module.exports = css_default.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css_default; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://reactssr/./src/App.css?");

/***/ }),

/***/ "./src/routes/Home.css":
/*!*****************************!*\
  !*** ./src/routes/Home.css ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./Home.css */ \"./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/routes/Home.css\");\n    var css_default = css.default || css;\n    var insertCss = __webpack_require__(/*! !../../node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js */ \"./node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js\");\n    var content = typeof css_default === 'string' ? [[module.id, css_default, '']] : css_default;\n\n    exports = module.exports = css_default.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css_default; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://reactssr/./src/routes/Home.css?");

/***/ }),

/***/ "./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://reactssr/./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://reactssr/./node_modules/.store/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n\n//# sourceURL=webpack://reactssr/./node_modules/.store/isomorphic-style-loader-react18@5.9.2/node_modules/isomorphic-style-loader-react18/insertCss.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("history");

/***/ }),

/***/ "isomorphic-style-loader-react18/StyleContext":
/*!***************************************************************!*\
  !*** external "isomorphic-style-loader-react18/StyleContext" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader-react18/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader-react18/useStyles":
/*!************************************************************!*\
  !*** external "isomorphic-style-loader-react18/useStyles" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader-react18/useStyles");

/***/ }),

/***/ "isomorphic-style-loader-react18/withStyles":
/*!*************************************************************!*\
  !*** external "isomorphic-style-loader-react18/withStyles" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader-react18/withStyles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-first-history":
/*!**************************************!*\
  !*** external "redux-first-history" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-first-history");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-promise");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;