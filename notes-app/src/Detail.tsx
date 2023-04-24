import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail: React.FC = () => {
  const [note, setNote] = useState<{
    title: string;
    text: string;
    createdAt: string;
  }>();
  const demoData = { title: "メモのタイトル", text: "メモ本文", createdAt: "2023-02-03" };

  useEffect(() => {
    getNote();
  }, []);

  function getNote() {
    setNote(demoData);
  }

  function deleteNote() {
    // 削除してHomeに遷移する
  }
  return note ? (
    <>
      <p>メモタイトル: {note.title}</p>
      <p>メモ詳細: {note.text}</p>
      <p>作成日時: {note.createdAt}</p>
      <Link to={"/edit/" + note.title}>
        <button>編集</button>
      </Link>{" "}
      <button onClick={() => deleteNote()}>削除</button>
      <Link to="/">Home</Link>
    </>
  ) : null;
};
export default Detail;
