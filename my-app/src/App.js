import React, { useState } from "react";
import Footer from "./Components/Footer";
import FormArea from "./Components/FormArea";
import Header from "./Components/Header";
import Note from "./Components/Note";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes((preNotes) => {
            return [...preNotes, note];
        });
    }
    function delNote(id) {
        setNotes((preNotes) => {
            return preNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <FormArea addNote={addNote} />
            <div style={{ display: "inline-flex" }}>
                {notes.map((note, index) => (
                    <Note
                        id={index}
                        delNote={delNote}
                        title={note.title}
                        content={note.content}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
