import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import { PracticeForm } from "./components/PracticeForm";
import { JoinForm } from "./components/JoinForm";
import { Room } from "./components/Room";

ReactDOM.render ((
    <Router history={hashHistory}>
        <Route path="/" component={PracticeForm}/>
        <Route path="/join" component={JoinForm}/>
        <Route path="/room" component={Room}/>
     </Router>
), document.getElementById("react-app"));
