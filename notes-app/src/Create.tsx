import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Create: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lengthOfNotes, setLengthOfNotes] = useState<number>();
  const [createdAt, setCreatedAt] = useState();
  const [id, setId] = useState<{ id: number }>(location.state as { id: number });

  useEffect(() => {
    if (id) {
      const data = localStorage.getItem(id.toString());
      if (data) {
        const note = JSON.parse(data);
        setTitle(note.title);
        setText(note.text);
        setId(note.id);
        setCreatedAt(note.createdAt);
      }
    } else {
      setLengthOfNotes(localStorage.length);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnloadEvent = (event: BeforeUnloadEvent): void => {
      event.preventDefault();
      location.pathname.match("/edit/") ? updateNote() : createNote();

      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnloadEvent);
    return () => window.removeEventListener("beforeunload", handleBeforeUnloadEvent);
  }, [title, text]);

  function onChangeHandler(input: string, item: string) {
    if (item === "title") {
      setTitle(input);
    } else {
      setText(input);
    }
  }

  function updateNote() {
    let data = { id, title, text, status: "active", createdAt };
    localStorage.setItem(id.toString(), JSON.stringify(data));
    navigate("/detail/" + title, { state: id });
  }

  function createNote() {
    let id;
    if (lengthOfNotes) {
      id = lengthOfNotes + 1;
    } else {
      id = 1;
    }

    let data = { id, title, text, status: "active", createdAt: new Date() };
    localStorage.setItem(id.toString(), JSON.stringify(data));
    navigate("/detail/" + title, { state: id });
  }

  function clear() {
    setTitle("");
    setText("");
  }

  return (
    <>
      <p>タイトル(※)</p>
      <input onChange={(e) => onChangeHandler(e.target.value, "title")} value={title}></input>
      <p>本文</p>
      <textarea onChange={(e) => onChangeHandler(e.target.value, "text")} value={text}></textarea>
      <button onClick={id ? () => updateNote() : () => createNote()} disabled={title === ""}>
        保存
      </button>
      <button onClick={() => clear()}>クリア</button>
      <Link to="/">Home</Link>
    </>
  );
};
export default Create;
