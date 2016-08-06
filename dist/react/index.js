"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var PracticeForm_1 = require("./components/PracticeForm");
var JoinForm_1 = require("./components/JoinForm");
var Room_1 = require("./components/Room");
ReactDOM.render((React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: PracticeForm_1.PracticeForm}), React.createElement(react_router_1.Route, {path: "/join", component: JoinForm_1.JoinForm}), React.createElement(react_router_1.Route, {path: "/room", component: Room_1.Room}))), document.getElementById("react-app"));
//# sourceMappingURL=index.js.map