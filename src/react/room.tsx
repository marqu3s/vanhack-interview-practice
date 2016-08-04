import * as React from "react";
import * as ReactDOM from "react-dom";

import { Room } from "./components/Room";
import { MemberListItem } from "./components/MemberListItem";

ReactDOM.render(
    <Room url="/getMembers" />,
    document.getElementById("example")
);
