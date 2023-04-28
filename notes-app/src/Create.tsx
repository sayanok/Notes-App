import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Create: React.FC = () => {
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lengthOfNotes, setLengthOfNotes] = useState<number>();
  const [id, setId] = useState<{ id: number }>(location.state as { id: number });

  useEffect(() => {
    if (id) {
      const hoge = localStorage.getItem(id.toString());
      if (hoge) {
        const note = JSON.parse(hoge);
        setTitle(note.title);
        setText(note.text);
        setId(note.id);
      }
    } else {
      setLengthOfNotes(localStorage.length);
    }
  }, []);

  function onChangeHandler(input: string, item: string) {
    if (item === "title") {
      setTitle(input);
    } else {
      setText(input);
    }
  }

  function updateNote() {
    let data = { id, title, text, status: "active", createdAt: new Date() };
    localStorage.setItem(id.toString(), JSON.stringify(data));
    clear();
  }

  function postNote() {
    let id;
    if (lengthOfNotes) {
      id = lengthOfNotes + 1;
    } else {
      id = 1;
    }

    let data = { id, title, text, status: "active", createdAt: new Date() };
    localStorage.setItem(id.toString(), JSON.stringify(data));
    clear();
  }

  function clear() {
    setTitle("");
    setText("");
  }

  return (
    <>
      <p>タイトル</p>
      <input onChange={(e) => onChangeHandler(e.target.value, "title")} value={title}></input>
      <p>本文</p>
      <textarea onChange={(e) => onChangeHandler(e.target.value, "text")} value={text}></textarea>
      <button onClick={id ? () => updateNote() : () => postNote()} disabled={title === ""}>
        保存
      </button>
      <button onClick={() => clear()}>クリア</button>
      <Link to="/">Home</Link>
    </>
  );
};
export default Create;
