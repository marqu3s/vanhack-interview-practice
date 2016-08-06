"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var io = require('socket.io-client');
var PracticeForm = (function (_super) {
    __extends(PracticeForm, _super);
    function PracticeForm() {
        _super.call(this);
        // Socket IO
        this.socket = io();
        this.socket.on('msg', function (msg) {
            console.log('Action: %s; Data: %s.', msg.action, msg.data);
        });
        // Are there any practices already open?
        // this.practices = this._getPractices();
        // this.setState(this.practices);
    }
    PracticeForm.prototype._getPractices = function () {
        return [
            { topic: 'topic 1', url: 'url 1' },
            { topic: 'topic 2', url: 'url 2' },
        ];
    };
    PracticeForm.prototype.handleCreatePractice = function () {
    };
    PracticeForm.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", {className: "text-center"}, "Create Practice"), React.createElement("div", {className: "form-group"}, React.createElement("label", {htmlFor: "topic"}, "Today's topic"), React.createElement("input", {type: "text", id: "topic", name: "topic", className: "form-control", defaultValue: "What is your passion?"})), React.createElement("div", {className: "form-group"}, React.createElement("label", {htmlFor: "exampleInpuurltEmail1"}, "Meeting URL"), React.createElement("input", {type: "text", id: "url", name: "url", className: "form-control", defaultValue: ""})), React.createElement("button", {id: "btn-join", className: "btn btn-primary btn-block", onClick: this.handleCreatePractice}, "Open Interview Practice")));
    };
    return PracticeForm;
}(React.Component));
exports.PracticeForm = PracticeForm;
//# sourceMappingURL=PracticeForm.js.map