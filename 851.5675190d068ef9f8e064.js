"use strict";
(self["webpackChunkabhinavrai23_github_io"] = self["webpackChunkabhinavrai23_github_io"] || []).push([[851],{

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);

function ExpBlock(_ref) {
  let {
    designation,
    organization,
    duration,
    description
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column flex-md-row justify-content-between mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-0"
  }, designation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "subheading mb-3"
  }, organization), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-primary"
  }, duration)));
}
function Experience(_ref2) {
  let {
    experiences = []
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "resume-section",
    id: "experience"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resume-section-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-5"
  }, "Experience"),
  // eslint-disable-next-line react/jsx-props-no-spreading
  experiences.map(exp => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExpBlock, exp))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ })

}]);