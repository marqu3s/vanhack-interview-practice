"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var JoinForm = (function (_super) {
    __extends(JoinForm, _super);
    function JoinForm() {
        _super.apply(this, arguments);
    }
    JoinForm.prototype.handleJoin = function (e) {
        console.log(e);
    };
    JoinForm.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("p", {className: "text-center"}, "Enter your name"), React.createElement("input", {type: "text", id: "name", name: "name", className: "form-control", value: "joao"}), React.createElement("button", {id: "btn-join", className: "btn btn-primary btn-block", onClick: this.handleJoin}, "Join Interview Practice")));
    };
    return JoinForm;
}(React.Component));
exports.JoinForm = JoinForm;
// ReactDOM.render(
//     <JoinForm />,
//     document.getElementById('joinForm')
// ); 
//# sourceMappingURL=JoinForm.js.map