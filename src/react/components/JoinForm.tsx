import * as React from "react";

export class JoinForm extends React.Component <{}, {}> {
    handleJoin (e: any) {
        console.log(e);
    }
    
    render () {
        return (
            <div>
                <h2 className="text-center">Enter your name</h2>
                <input type="text" id="name" name="name" className="form-control" defaultValue="joao" />
                <button id="btn-join" className="btn btn-primary btn-block" onClick={this.handleJoin}>
                    Join Interview Practice
                </button>
            </div>
        );
    }
}