import React, { useState } from "react";
import TextInput from "../../../../components/Input/TextInput";
import EditorInput from "../../../../components/Input/EditorInput";
import { faqData } from "../../data/data";

function EditFAQ() {
  const [value, setValue] = useState("");
  const [editorState, setEditorState] = useState("");

  return (
    <div>
      {faqData.map((item, index) => {
        return (
          <div style={{ marginTop: index === 0 ? 0 : "40px" }}>
            <TextInput
              name="officeName"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={item.questions}
            />

            <EditorInput
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EditFAQ;
