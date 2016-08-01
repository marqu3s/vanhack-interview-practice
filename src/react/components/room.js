import React, { Component, PropTypes } from 'react'

export default class Room extends React.Component {
    constructor (props) {
        super(props)
        //this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
        this.state = {
            data: [
                {"_id": "1", "name": "Pete Hunt"},
                {"_id": "2", "name": "Jordan Walke"}
            ]
        }
    }

    componentDidMount () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        socket.onmessage = function(e) {
            console.log(e);
        }
    }

    render () {
        return (
            <div>
                <h1 className="text-center">Members in the room</h1>
                <ul className="list-group">
                {this.state.data.map(function(member) {
                    return <ListItem key={member._id} text={member.name} />;
                })}
                </ul>
            </div>
        );
    }
}

var ListItem = React.createClass({
    render: function() {
        return <li className="list-group-item">{this.props.text}</li>;
    }
});



ReactDOM.render(
    <Room url="/getMembers" />,
    document.getElementById('membersList')
);