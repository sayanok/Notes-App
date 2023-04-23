import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [listOfNotes, setListOfNotes] = useState<Array<string>>(["aaa", "bbb", "ccc"]);

  return (
    <>
      {/* ページ上にメモ新規作成ボタン */}
      <button>新規作成</button>
      {/* 新規作成の画面が必要 */}

      {/* メモ一覧 */}
      <div>
        {listOfNotes.map((note) => (
          <li>
            <a href={note}>{note}</a>
            <button>削除</button>
          </li>
        ))}
      </div>
      {/* 一覧の横にメモ表示ボタンとメモ削除ボタン */}

      {/* メモ表示ボタン→メモ詳細ページ行く？
      メモ詳細ページにはメモ表示ボタン設置
      マークダウンするなら一言メモじゃないよな... */}
    </>
  );
};

export default App;
