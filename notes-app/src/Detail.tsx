import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Detail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [note, setNote] = useState<{
    id: number;
    title: string;
    text: string;
    status: string;
    createdAt: string;
  }>();
  const [id, setId] = useState<number>(location.state as number);

  useEffect(() => {
    getAndSetNote();
  }, []);

  function getAndSetNote() {
    console.log(id);
    const data = localStorage.getItem(id.toString());
    if (data) {
      setNote(JSON.parse(data));
    } else {
      console.log("error: データの取得に失敗しました");
    }
  }

  function editNote() {
    navigate("/edit/" + note?.title, { state: note?.id });
  }

  function deleteNote() {
    if (note) {
      const title = note.title;
      const text = note.text;
      const status = "inactive";
      const createdAt = note.createdAt;

      const inactiveNote = { id, title, text, status, createdAt };
      localStorage.setItem(id.toString(), JSON.stringify(inactiveNote));
      alert("メモを削除しました");
      navigate("/");
    } else {
      console.log("error: データが存在しないよ");
    }
  }
  return note ? (
    <>
      <p>メモタイトル: {note.title}</p>
      <p>メモ詳細: {note.text}</p>
      <p>作成日時: {note.createdAt}</p>
      <button onClick={() => editNote()}>編集</button>
      <button onClick={() => deleteNote()}>削除</button>
      <Link to="/">Home</Link>
    </>
  ) : null;
};
export default Detail;
