"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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
//# sourceMappingURL=MemberListItem.js.map