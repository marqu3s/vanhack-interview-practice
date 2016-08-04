import * as react from "react";

export interface MemberProps { text: string; }

export class MemberListItem <MemberProps, {}> {
    render () {
        return <li className="list-group-item">{this.props.text}</li>
    }
}