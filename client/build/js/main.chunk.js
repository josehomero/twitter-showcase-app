(this["webpackJsonptwitter-showcase-app"] = this["webpackJsonptwitter-showcase-app"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Home */ "./src/Pages/Home.js");
/* harmony import */ var _Pages_UserTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/UserTweet */ "./src/Pages/UserTweet.js");
/* harmony import */ var _Pages_TweetFinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/TweetFinder */ "./src/Pages/TweetFinder.js");
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\App.js";






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    className: "navbar navbar-dark bg-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link",
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link",
    to: "/tweetfinder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Tweet Finder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link",
    to: "/usertweet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "User Tweet")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/tweetfinder",
    component: _Pages_TweetFinder__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/usertweet",
    component: _Pages_UserTweet__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _Pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Pages/Home.js":
/*!***************************!*\
  !*** ./src/Pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_corvette_png_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/corvette.png.jpg */ "./src/images/corvette.png.jpg");
/* harmony import */ var _images_corvette_png_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_corvette_png_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\Pages\\Home.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, "Twitter Showcase App!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_corvette_png_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
      className: "float-right",
      alt: "corvette",
      width: "300",
      height: "300",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "This app utilizes data from the Twitter API to allow a person to search for recent tweets of specific Twitter users. There is also a random tweet showcase for my favorite Twitter users. Give it a try and look around!"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Pages/TweetFinder.js":
/*!**********************************!*\
  !*** ./src/Pages/TweetFinder.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\Pages\\TweetFinder.js";




class TweetFinder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.submitted = this.submitted.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {
      name,
      value
    } = e.target;
    this.setState({
      [name]: value
    });
  }

  submitted(e) {
    e.preventDefault();
    this.setState({
      name: this.state.search
    });
    e.target.reset();
  }

  componentDidMount() {
    const fetchItems = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_2___default()(`/api/search-data`);
      console.log(result);
    };

    fetchItems();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.submitted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-control",
      name: "search",
      type: "text",
      placeholder: "Search?",
      onChange: this.handleChange,
      value: this.state.value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, this.state.name));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TweetFinder);

/***/ }),

/***/ "./src/Pages/UserTweet.js":
/*!********************************!*\
  !*** ./src/Pages/UserTweet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TweetCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TweetCard */ "./src/components/TweetCard.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\Pages\\UserTweet.js";





class UserTweet extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      andy: [],
      corvette: [],
      twoSetViolin: [],
      batmanDC: [],
      starWars: [],
      random: []
    };
  }

  componentDidMount() {
    const fetchItems1 = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-andy`);
      this.setState({
        andy: result.data
      });
    };

    fetchItems1();

    const fetchItems2 = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-corvette`);
      this.setState({
        corvette: result.data
      });
    };

    fetchItems2();

    const fetchItems3 = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-twosetviolin`);
      this.setState({
        twoSetViolin: result.data
      });
    };

    fetchItems3();

    const fetchItems4 = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-batman-dc`);
      this.setState({
        batmanDC: result.data
      });
    };

    fetchItems4();

    const fetchItems5 = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-starwars`);
      this.setState({
        starWars: result.data
      });
    };

    fetchItems5();
  }

  getRandomData() {
    const fetchItems = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/user-random`);
      this.setState({
        random: result.data
      });
    };

    fetchItems();
  }

  render() {
    const tweet1 = this.state.andy.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }));
    const tweet2 = this.state.corvette.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }));
    const tweet3 = this.state.twoSetViolin.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }));
    const tweet4 = this.state.batmanDC.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }));
    const tweet5 = this.state.starWars.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }));
    const randomTweet = this.state.random.map(tweet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TweetCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: tweet.user,
      id: tweet.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, tweet1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, tweet2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, tweet3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, tweet4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, tweet5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "form-row py-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserTweet);

/***/ }),

/***/ "./src/components/TweetCard.js":
/*!*************************************!*\
  !*** ./src/components/TweetCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\components\\TweetCard.js";


function TweetCard({
  user
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: user.id,
    width: "50",
    height: "20",
    className: "bg-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.profile_image_url,
    alt: "Profile-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, user.name), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 34
    }
  }, "@", user.screen_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "@", user.description));
}

/* harmony default export */ __webpack_exports__["default"] = (TweetCard);

/***/ }),

/***/ "./src/images/corvette.png.jpg":
/*!*************************************!*\
  !*** ./src/images/corvette.png.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/corvette.png.f752490f.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Joseh\\OneDrive\\Desktop\\project folder\\twitter-showcase-app\\client\\src\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Joseh\OneDrive\Desktop\project folder\twitter-showcase-app\client\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map