import React from "react";
import { Link } from "react-router-dom";

const Detail: React.FC = () => {
  // 詳細を取得するfunction
  return (
    <>
      <p>detail</p>
      <button>削除</button>
      <Link to="/">Home</Link>
    </>
  );
};
export default Detail;
