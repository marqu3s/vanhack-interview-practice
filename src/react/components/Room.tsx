import * as React from "react";
import { MemberListItem } from "./MemberListItem";

interface Member {
    _id: string,
    name: string
}
interface RoomProps {
    url: string
}
interface RoomState {
    data: [Member]
}

export class Room extends React.Component <RoomProps, RoomState> {
    constructor (props: RoomProps) {
        super(props);
        this.state = {
            data: [
                {"_id": "1", "name": "Pete Hunt"},
                {"_id": "2", "name": "Jordan Walke"}
            ]
        }
    }

    componentDidMount () {
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
    }

    render () {
        return (
            <div>
                <h2 className="text-center">Members in the room</h2>
                <ul className="list-group">
                 {this.state.data.map(function(member) {
                     return <MemberListItem key={member._id} text={member.name} />;
                 })}
                </ul>
            </div>
        );
    }
}
