import * as React from 'react';
import * as io from 'socket.io-client';
// import 'promise';

interface PracticeProps {
    topic: string,
    url: string
}

interface websocketMsg {
    action: string,
    data: any
}

export class PracticeForm extends React.Component <PracticeProps, {}> {
    public practices: PracticeProps[];
    private socket: SocketIOClient.Socket;

    constructor () {
        super();

        // Socket IO
        this.socket = io();
        this.socket.on('msg', (msg: websocketMsg): void => {
            console.log('Action: %s; Data: %s.', msg.action, msg.data);
        });

        // Are there any practices already open?
        // this.practices = this._getPractices();
        // this.setState(this.practices);
    }

    _getPractices () {
        return [
            {topic: 'topic 1', url: 'url 1'},
            {topic: 'topic 2', url: 'url 2'},
        ];
    }

    handleCreatePractice () {
        
    }

    render () {
        return (
            <div>
                <h2 className="text-center">Create Practice</h2>
                <div className="form-group">
                    <label htmlFor="topic">Today's topic</label>
                    <input type="text" id="topic" name="topic" className="form-control" defaultValue="What is your passion?" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInpuurltEmail1">Meeting URL</label>
                    <input type="text" id="url" name="url" className="form-control" defaultValue="" />
                </div>
                <button id="btn-join" className="btn btn-primary btn-block" onClick={this.handleCreatePractice}>
                    Open Interview Practice
                </button>
            </div>
        );
    }
}