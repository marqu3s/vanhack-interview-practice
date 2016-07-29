var ListItem = React.createClass({
    render: function() {
        return <li className="list-group-item">{this.props.text}</li>;
    }
});

var List = React.createClass({
    getInitialState: function() {
        return {data: [
            {"_id": "1", "name": "Pete Hunt"},
            {"_id": "2", "name": "Jordan Walke"}
        ]};
    },
    componentDidMount: function() {
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
    },
    render: function() {
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
});

ReactDOM.render(
    <List url="/getMembers" />,
    document.getElementById('membersList')
);