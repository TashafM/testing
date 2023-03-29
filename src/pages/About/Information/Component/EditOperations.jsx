import React, { useEffect, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import Checkbox from "../../../../components/Input/Checkbox";
import { timeSlotData } from "../../data/data.js";
import CardTimeSlot from "./CardTimeSlot";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";

function EditOperations({ show, handleClose, data, onUpdate, completeData }) {
  const [postData, { loading }] = usePatchAsyncReponse(
    "/portalPatchHoursOfOperation"
  );

  useEffect(() => {
    if (
      data &&
      data?.hoursOfOperationObject &&
      data?.hoursOfOperationObject.length
    ) {
      setOperationData(data?.hoursOfOperationObject);
    } else {
      setOperationData(timeSlotData ?? []);
    }
  }, [data]);

  const [operationData, setOperationData] = useState([]);

  const sendHOO = () => {
    const body = {
      hoursOfOperation: [...operationData],
    };

    postData(body, (res) => {
      const arr = JSON.parse(JSON.stringify(completeData));
      arr[0].hoursOfOperation = res[0];
      onUpdate(arr);
      handleClose();
    });
  };

  const onApplySameTimeToAll = () => {
    // operationData.map
  };

  const onChangeHandler = (index) => {
    const obj = [...operationData];
    obj[index].active = !obj[index].active;

    setOperationData([...obj]);
  };

  const onTimeChange = (e, index, key) => {
    const obj = [...operationData];
    obj[index][key] = e;

    console.log({ e });

    setOperationData([...obj]);
  };
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">Hours of operations</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p className="drawer-title">
              Please provide the hours of operations
            </p>
            <div>
              <div className="d-flex">
                <Checkbox />
                <span className="apply-all-checked">
                  Apply same timings to all
                </span>
              </div>

              {operationData.map((item, index) => {
                console.log({ item });

                function convert12to24(hour12, amPm) {
                  let hour24 = parseInt(hour12, 10);

                  if (amPm === "am" && hour24 === 12) {
                    hour24 = 0;
                  } else if (amPm === "pm" && hour24 < 12) {
                    hour24 += 12;
                  }

                  return hour24;
                }
                return (
                  <CardTimeSlot
                    title={item.day}
                    active={item.active}
                    onChange={onChangeHandler}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    index={index}
                    onTimeChange={onTimeChange}
                  />
                );
              })}
            </div>

            <BtnTitleCenter
              title={"SAVE"}
              onClick={sendHOO}
              loading={loading}
            />
          </div>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}

export default EditOperations;
