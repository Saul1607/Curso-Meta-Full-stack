import React from "react";

function Main(props) {
    const mainStyle = {
        backgorund: "lightgoldenrodyellow",
        width: "calc(70% - 10px)",
        marginRight: "10px"
    }
    return  (
        <div style={mainStyle}>
            <h2>Hello, {props.userName}</h2>
            <p>You are in position no. {props.num} </p>
        </div>
    )
}

export default Main;