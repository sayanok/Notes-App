import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Create: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [createdAt, setCreatedAt] = useState<Date>();
  const [lengthOfNotes, setLengthOfNotes] = useState<number>();

  useEffect(() => {
    setLengthOfNotes(localStorage.length);
  }, []);

  function onChangeHandler(input: string, item: string) {
    if (item === "title") {
      setTitle(input);
    } else {
      setText(input);
    }
  }

  function postNote() {
    setCreatedAt(new Date());
    let id;
    if (lengthOfNotes) {
      id = lengthOfNotes + 1;
    } else {
      id = 1;
    }

    let data = [{ title }, { text }, { createdAt }];
    localStorage.setItem(id.toString(), JSON.stringify(data));
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
      <button onClick={() => postNote()} disabled={title === ""}>
        保存
      </button>
      <button onClick={() => clear()}>クリア</button>
      <Link to="/">Home</Link>
    </>
  );
};
export default Create;
