import React, { useEffect, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import Checkbox from "../../../../components/Input/Checkbox";
import { useContextProvider } from "../../../../context";
import { timeSlotData } from "../../data/data.js";
import CardTimeSlot from "./CardTimeSlot";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";

function EditOperations() {
  const { openDrawer } = useContextProvider();

  const [postData, { data, loading }] = usePatchAsyncReponse(
    "/portalPatchHoursOfOperation"
  );

  useEffect(() => {
    if (
      openDrawer.data &&
      openDrawer?.data?.hoursOfOperationObject &&
      openDrawer?.data?.hoursOfOperationObject.length
    ) {
      setOperationData(openDrawer.data?.hoursOfOperationObject);
    } else {
      setOperationData(timeSlotData ?? []);
    }
  }, [openDrawer.data]);

  const [operationData, setOperationData] = useState([]);

  const sendHOO = () => {
    const body = {
      hoursOfOperation: [...operationData],
    };

    postData(body);
  };

  const onChangeHandler = (index) => {
    const obj = [...operationData];
    obj[index].active = !obj[index].active;

    setOperationData([...obj]);
  };
  return (
    <div>
      <p className="drawer-title">Please provide the hours of operations</p>
      <div>
        <div className="d-flex">
          <Checkbox />
          <span className="apply-all-checked">Apply same timings to all</span>
        </div>

        {operationData.map((item, index) => {
          console.log(item);
          return (
            <CardTimeSlot
              title={item.day}
              active={item.active}
              onChange={onChangeHandler}
              index={index}
            />
          );
        })}
      </div>

      <BtnTitleCenter title={"SAVE"} onClick={sendHOO} />
    </div>
  );
}

export default EditOperations;
