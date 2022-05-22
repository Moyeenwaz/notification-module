import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

export const Wysiwyg = () => {
  const [text, setText] = useState("");
  const parseText = () => parse(text);
  return (
    <div className="editor">
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
      {/* <p>{parseText()}</p> */}
    </div>
  );
};
