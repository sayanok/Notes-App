import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface State {
  id: string;
}

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
  const { id } = location.state as State;

  useEffect(() => {
    getAndSetNote();
  }, []);

  function getAndSetNote() {
    const data = localStorage.getItem(id);
    if (data) {
      setNote(JSON.parse(data));
    } else {
      console.log("error: データの取得に失敗しました");
    }
  }

  function deleteNote() {
    if (note) {
      const title = note.title;
      const text = note.text;
      const status = "inactive";
      const createdAt = note.createdAt;

      const inactiveNote = { id, title, text, status, createdAt };
      localStorage.setItem(id, JSON.stringify(inactiveNote));
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
      <Link to={"/edit/" + note.title}>
        <button>編集</button>
      </Link>
      <button onClick={() => deleteNote()}>削除</button>
      <Link to="/">Home</Link>
    </>
  ) : null;
};
export default Detail;
