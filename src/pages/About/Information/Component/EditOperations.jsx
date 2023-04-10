import React, { useEffect, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import { timeSlotData } from "../../data/data.js";
import CardTimeSlot from "./CardTimeSlot";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";
import "./styles.scss";

function EditOperations({ show, handleClose, data, onUpdate, completeData }) {
  const [postData, { loading }] = usePatchAsyncReponse(
    "/portalPatchHoursOfOperation"
  );

  const [makeApiCall, setMakeApiCall] = useState(false);

  const [defaultCard, setDefaultCard] = useState({
    day: "All Days",
    active: false,
    startTime: "09:30 am",
    endTime: "06:30 pm",
    index: -1,
  });
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
    if (makeApiCall) {
      const body = {
        hoursOfOperation: [...operationData],
      };

      postData(body, (res) => {
        const arr = JSON.parse(JSON.stringify(completeData));
        arr[0].hoursOfOperation = res[0];
        onUpdate(arr);
        handleClose();
      });
    } else {
      handleClose();
    }
  };

  const onApplySameTimeToAll = (e, i, key, type) => {
    const obj = { ...defaultCard };

    !makeApiCall && setMakeApiCall(true);

    try {
      if (e) {
        const obj2 = [...operationData];
        let t = "";
        operationData.map((item, index) => {
          if (item.active) {
            let time = obj2[index][key];

            if (type === "hour") {
              const hourValue = time?.split(":")?.shift() ?? "09";
              time = time.replace(hourValue, e);
            } else if (type === "minutes") {
              const minutesValue =
                time?.split(":")?.pop().split(" ").shift() ?? "30";
              time = time.replace(minutesValue, e);
            } else if (type === "ampm") {
              const ampm = time?.split(" ")?.pop() ?? "am";

              time = time.replace(ampm, e);
            } else {
              console.log({ time });

              const amPmValue = time?.split(" ");
              time = time.replace(amPmValue, e);
            }
            obj2[index][key] = time;
            obj[key] = time;
            t = time;
          }
        });
        obj[key] = t;
        setDefaultCard({ ...obj });

        setOperationData([...obj2]);
      } else {
        obj.active = !obj.active;

        console.log({ obj });
        setDefaultCard({ ...obj });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (index) => {
    !makeApiCall && setMakeApiCall(true);
    const obj = [...operationData];
    obj[index].active = !obj[index].active;

    setOperationData([...obj]);
  };

  const onTimeChange = (e, index, key, type) => {
    !makeApiCall && setMakeApiCall(true);
    const obj = [...operationData];
    let time = obj[index][key];

    if (type === "hour") {
      const hourValue = time?.split(":")?.shift() ?? "09";
      time = time.replace(hourValue, e);
    } else if (type === "minutes") {
      const minutesValue = time?.split(":")?.pop().split(" ").shift() ?? "30";
      time = time.replace(minutesValue, e);
    } else if (type === "ampm") {
      const ampm = time?.split(" ")?.pop() ?? "am";
      time = time.replace(ampm, e);
    } else {
      const amPmValue = time?.split(" ");
      time = time.replace(amPmValue, e);
    }
    obj[index][key] = time;

    setOperationData([...obj]);
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add drawer-operation"
    >
      <div className="content">
        <DrawerHead
          title="Hours of operation"
          handleClose={handleClose}
          description=" Please provide the hours of operations"
        />
        <div>
          <div>
            <CardTimeSlot
              title={defaultCard.day}
              active={defaultCard.active}
              onChange={onApplySameTimeToAll}
              startTime={defaultCard.startTime}
              endTime={defaultCard.endTime}
              disabled={!defaultCard.active}
              onTimeChange={onApplySameTimeToAll}
            />

            {operationData.map((item, index) => {
              // console.log({ item });

              return (
                <CardTimeSlot
                  title={item.day}
                  active={item.active}
                  disabled={!item.active}
                  onChange={onChangeHandler}
                  startTime={item.startTime}
                  endTime={item.endTime}
                  index={index}
                  onTimeChange={onTimeChange}
                />
              );
            })}
          </div>

          <BtnTitleCenter title={"SAVE"} onClick={sendHOO} loading={loading} />
        </div>
      </div>
    </Offcanvas>
  );
}

export default EditOperations;
