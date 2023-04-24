import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [listOfNotes, setListOfNotes] = useState<Array<string>>(["aaa", "bbb", "ccc"]);

  return (
    <>
      <div>
        {listOfNotes.map((note) => (
          <li>
            <Link to={note}>{note}</Link>
            <button>削除</button>
          </li>
        ))}
      </div>

      {/* メモ表示ボタン→メモ詳細ページ行く？
      メモ詳細ページにはメモ表示ボタン設置
      マークダウンするなら一言メモじゃないよな... */}
    </>
  );
};
export default Home;
