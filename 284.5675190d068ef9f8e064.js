"use strict";
(self["webpackChunkabhinavrai23_github_io"] = self["webpackChunkabhinavrai23_github_io"] || []).push([[284],{

/***/ 284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* eslint-disable camelcase */

function About(_ref) {
  let {
    about: {
      name,
      about,
      address,
      phone_number,
      email_id,
      socials: {
        linkedin,
        github,
        twitter
      } = {}
    } = {}
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "resume-section",
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resume-section-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-primary"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "subheading mb-5"
  }, address, ' · (+91) ', phone_number, ' · ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: `mailto:${email_id}`
  }, email_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "lead mb-5"
  }, about), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "social-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "social-icon",
    href: linkedin,
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fab fa-linkedin-in"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "social-icon",
    href: github,
    "aria-label": "GitHub"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fab fa-github"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "social-icon",
    href: twitter,
    "aria-label": "Twitter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fab fa-twitter"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '60px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/Abhinav-Rai(FrontEnd-Developer).pdf",
    className: "btn border-primary text-primary"
  }, "Download Resume", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-download",
    style: {
      marginLeft: '5px'
    }
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ })

}]);