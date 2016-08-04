import * as React from "react";

export interface MemberProps { text: string; }

export class MemberListItem extends React.Component <MemberProps, {}> {
    render () {
        return (
            <li className="list-group-item">{this.props.text}</li>
        );
    }
}