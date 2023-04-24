import React from "react";
import { Link } from "react-router-dom";

const Create: React.FC = () => {
  // 新規作成function
  return (
    <>
      <p>タイトル</p>
      <input></input>
      <p>本文</p>
      <textarea></textarea>
      <Link to="/">Home</Link>
    </>
  );
};
export default Create;
