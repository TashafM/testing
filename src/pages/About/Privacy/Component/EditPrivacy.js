import React, { useState } from "react";
import TextInput from "../../../../components/Input/TextInput";
import EditorInput from "../../../../components/Input/EditorInput";
import { faqData } from "../../data/data";

function EditPrivacy() {
  const [value, setValue] = useState("Agreement");
  const [editorState, setEditorState] = useState("");

  return (
    <div>
      <div style={{}}>
        <TextInput
          name="officeName"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          //   placeholder={item.questions}
        />

        <EditorInput
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />

        <div className="d-flex edit-term-container align-items-center justify-content-center">
          <div
            className="upload-btn-job"
            onClick={() => alert("add topic button clicked")}
          >
            <span className="me-3">
              {/* <img src={deleteIcon} alt="" /> */}
            </span>
            <span>Add more topic</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default EditPrivacy;
