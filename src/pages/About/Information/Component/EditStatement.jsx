import React, { useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextArea from "../../../../components/Input/TextArea";
import CardStatement from "./CardStatement";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import "./styles.scss";
import { useContextProvider } from "../../../../context";

function EditStatement({ companyStatement }) {
  const { openDrawer } = useContextProvider();
  const [statement, setStatement] = useState(openDrawer.data ?? "");
  const [postData, { loading }] = usePostAsyncResponse(
    "/portalPostCompanyStatement"
  );

  const onSaveStatement = () => {
    const body = {
      companyStatement: statement,
    };
    console.log({ body });

    postData(body);
  };
  return (
    <div>
      <p className="drawer-title">
        Write down the Statement of the Company to convey your vision to your
        Potential Customer
      </p>

      <TextArea
        value={statement}
        onChange={(e) => {
          console.log(e.target.value);
          setStatement(e.target.value);
        }}
      />
      <BtnTitleCenter title="Save" type="button" onClick={onSaveStatement} />
    </div>
  );
}

export default EditStatement;
