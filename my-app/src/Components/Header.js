import React from "react";
import Paper from "@mui/material/Paper";

function Header() {
    return (
        <Paper style={{ padding: "5px", display: "flex" }} elevation={10}>
            <img
                style={{ width: "55px" }}
                src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-notes-icon-png-image_539571.jpg"
                alt="logo"
            ></img>
            <h1 style={{ margin: "0", fontSize: "45px" }}>Notes</h1>
        </Paper>
    );
}

export default Header;
