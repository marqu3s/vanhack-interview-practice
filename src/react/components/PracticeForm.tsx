import * as React from 'react';
import * as io from 'socket.io-client';

interface PracticeProps {
    topic: string,
    url: string
}

interface PracticeState {
    practice: {}
}

interface websocketMsg {
    action: string,
    data: any
}

export class PracticeForm extends React.Component <PracticeProps, PracticeState> {
    public practices: PracticeProps[];
    private socket: SocketIOClient.Socket;

    public topic: HTMLInputElement;
    public url: HTMLInputElement;

    constructor () {
        super();
        this.state = {
            practice: null
        };
    }

    componentDidMount() {
        // Socket IO
        this.socket = io();
        this.socket.on('msg', (msg: websocketMsg): void => {
            console.log('Action: %s; Data: %s.', msg.action, msg.data);
            switch (msg.action) {
                case 'practice':
                    // if (msg.data.length === 0) {
                    //     console.log('mostra form');
                    // }
                    this.setState({practice: msg.data});
                    break;
                default:
                    break
            }
        });
    }

    _getPractices () {
        return [
            {topic: 'topic 1', url: 'url 1'},
            {topic: 'topic 2', url: 'url 2'},
        ];
    }

    handleCreatePractice () {
        console.log(this.topic.value);
        // let topic = this.refs.topic;
        // let url = this.refs.url;
        // let data = {topic: topic, url: url};
        // console.log(data);
        // this.socket.emit('createPractice', data);
    }

    render () {
        if (this.state.practice === null) {
            return (
                <div>
                    <h2 className="text-center">Create Practice</h2>
                    <div className="form-group">
                        <label htmlFor="topic">Today's topic</label>
                        <input type="text" id="topic" name="topic" ref={(ref) => this.topic = ref} className="form-control" defaultValue="What is your passion?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInpuurltEmail1">Meeting URL</label>
                        <input type="text" id="url" name="url" ref={(ref) => this.url = ref} className="form-control" defaultValue="" />
                    </div>
                    <button id="btn-join" className="btn btn-primary btn-block" onClick={this.handleCreatePractice}>
                        Open Interview Practice
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <a href="">{this.state.practice}</a>
                </div>
            );
        }
    }
}