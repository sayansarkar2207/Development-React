import { Fab, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function FormArea({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    function clickHandler() {
        addNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    function changeHandler(event) {
        const { name, value } = event.target;
        setNote((preValues) => {
            return {
                ...preValues,
                [name]: value,
            };
        });
    }
    return (
        <div>
            <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
                <form>
                    <TextField
                        onChange={changeHandler}
                        name="title"
                        value={note.title}
                        style={{ paddingBottom: "10px" }}
                        label="Title"
                        fullWidth
                        autoComplete="Off"
                    />
                    <TextField
                        onChange={changeHandler}
                        name="content"
                        value={note.content}
                        label="Content"
                        multiline
                        rows={4}
                        fullWidth
                        autoComplete="Off"
                    />
                    <Fab onClick={clickHandler} style={{ marginTop: "20px" }}>
                        <AddIcon></AddIcon>
                    </Fab>
                </form>
            </Paper>
        </div>
    );
}

export default FormArea;
