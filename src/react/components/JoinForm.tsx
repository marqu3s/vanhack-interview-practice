import * as React from "react";

export class JoinForm extends React.Component<{}, {}> {
    handleJoin (e: any) {
        console.log(e);
    }
    
    render () {
        return (
            <div>
                <p className="text-center">Enter your name</p>
                <input type="text" id="name" name="name" className="form-control" value="joao" />
                <button id="btn-join" className="btn btn-primary btn-block" onClick={this.handleJoin}>
                    Join Interview Practice
                </button>
            </div>
        );
    }
}

// ReactDOM.render(
//     <JoinForm />,
//     document.getElementById('joinForm')
// );