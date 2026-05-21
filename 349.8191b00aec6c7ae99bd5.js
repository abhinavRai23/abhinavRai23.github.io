"use strict";
(self["webpackChunkabhinavrai23_github_io"] = self["webpackChunkabhinavrai23_github_io"] || []).push([[349],{

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);

function AwardBlock(_ref) {
  let {
    title,
    date = '',
    organiser = '',
    details = ''
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fa-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-trophy text-warning"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, `${title} ${organiser}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, date && `, ${date}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, details));
}
function Awards(_ref2) {
  let {
    awards = []
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "resume-section",
    id: "awards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resume-section-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-5"
  }, "Awards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "fa-ul mb-0"
  },
  // eslint-disable-next-line react/jsx-props-no-spreading
  awards.map(award => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwardBlock, award)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Awards);

/***/ })

}]);