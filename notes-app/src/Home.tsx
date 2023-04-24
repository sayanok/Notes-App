import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [listOfNotes, setListOfNotes] = useState<Array<string>>([""]);
  const list = ["aaa", "bbb", "ccc"];

  useEffect(() => {
    getListOfNotes();
  }, []);

  function getListOfNotes() {
    setListOfNotes(list);
  }

  function deleteNote(note: string) {
    const index = listOfNotes.indexOf(note);
    listOfNotes.splice(index, 1);
    getListOfNotes();
    // こんな雰囲気？なお動かない
  }

  return (
    <>
      <div>
        <Link to="create">新規作成</Link>
        {listOfNotes.map((note) => (
          <li>
            <Link to={"detail/" + note}>{note}</Link>
            <Link to={"edit/" + note}>
              <button>編集</button>
            </Link>
            <button onClick={() => deleteNote(note)}>削除</button>
          </li>
        ))}
        {listOfNotes}
      </div>
    </>
  );
};
export default Home;
