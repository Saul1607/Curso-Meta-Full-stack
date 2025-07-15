import React from "react";

function Header(props) {
    const headerStyle = {
        background: "lightblue",
        maxWidth: "100%",
    }
    return (
        <h1 style={headerStyle}>Header content here</h1>
    )
}

export default Header;