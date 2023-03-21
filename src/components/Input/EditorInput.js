import React from "react";
import { Editor } from "react-draft-wysiwyg";

function EditorInput({ editorState, setEditorState }) {
  return (
    <Editor
      className="editor-container"
      editorState={editorState}
      onEditorStateChange={(editorstate) => {
        console.log(editorstate);
      }}
      editorClassName="editor-container"
      wrapperClassName="editor-wrapper"
    />
  );
}

export default EditorInput;
