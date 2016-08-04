"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MemberListItem_1 = require("./MemberListItem");
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
//# sourceMappingURL=Room.js.map