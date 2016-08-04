/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Room_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Room_1.Room, {url: "/getMembers"}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var MemberListItem_1 = __webpack_require__(4);
	var Room = (function (_super) {
	    __extends(Room, _super);
	    function Room(props) {
	        _super.call(this, props);
	        //this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
	        this.state = {
	            data: [
	                { "_id": "1", "name": "Pete Hunt" },
	                { "_id": "2", "name": "Jordan Walke" }
	            ]
	        };
	    }
	    Room.prototype.componentDidMount = function () {
	        // $.ajax({
	        //     url: this.props.url,
	        //     dataType: 'json',
	        //     cache: false,
	        //     success: function(data) {
	        //         this.setState({data: data});
	        //     }.bind(this),
	        //     error: function(xhr, status, err) {
	        //         console.error(this.props.url, status, err.toString());
	        //     }.bind(this)
	        // });
	        // socket.onmessage = function(e) {
	        //     console.log(e);
	        // }
	    };
	    Room.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("h1", {className: "text-center"}, "Members in the room"), React.createElement("ul", {className: "list-group"}, this.state.data.map(function (member) {
	            return React.createElement(MemberListItem_1.MemberListItem, {key: member._id, text: member.name});
	        }))));
	    };
	    return Room;
	}(React.Component));
	exports.Room = Room;
	// ReactDOM.render(
	//     <Room url="/getMembers" />,
	//     document.getElementById('membersList')
	// ); 


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var MemberListItem = (function (_super) {
	    __extends(MemberListItem, _super);
	    function MemberListItem() {
	        _super.apply(this, arguments);
	    }
	    MemberListItem.prototype.render = function () {
	        return (React.createElement("li", {className: "list-group-item"}, this.props.text));
	    };
	    return MemberListItem;
	}(React.Component));
	exports.MemberListItem = MemberListItem;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map