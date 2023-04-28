import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [listOfNotes, setListOfNotes] =
    useState<Array<{ id: string; title: string; text: string; status: string; createdAt: Date }>>();

  useEffect(() => {
    getAndSetListOfNotes();
  }, []);

  function getAndSetListOfNotes() {
    let listOfData = [];

    for (let i = 1; i - 1 < localStorage.length; i++) {
      const data = localStorage.getItem(i.toString());
      if (data && JSON.parse(data).status === "active") {
        listOfData.push(JSON.parse(data));
      }
    }
    setListOfNotes(listOfData);
  }

  function deleteNote(id: string) {
    const originalData = localStorage.getItem(id);
    if (originalData) {
      const title = JSON.parse(originalData).title;
      const text = JSON.parse(originalData).text;
      const status = "inactive";
      const createdAt = JSON.parse(originalData).createdAt;

      const inactiveNote = { id, title, text, status, createdAt };
      localStorage.setItem(id, JSON.stringify(inactiveNote));
      getAndSetListOfNotes();
    } else {
      console.log("error: データが存在しないよ");
    }
  }

  return listOfNotes ? (
    <>
      <div>
        <Link to="create">新規作成</Link>
        {listOfNotes?.map((note) => (
          <li>
            <Link to={{ pathname: "detail/" + note.title }} state={{ id: note.id }}>
              {note.title}
            </Link>
            <Link to={"edit/" + note}>
              <button>編集</button>
            </Link>
            <button onClick={() => deleteNote(note.id)}>削除</button>
          </li>
        ))}
      </div>
    </>
  ) : (
    <>
      <p>登録されているメモがありません</p>
      <Link to="create">新規作成</Link>
    </>
  );
};
export default Home;
