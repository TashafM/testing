import React from "react";
import DealersTable from "./component/tables/DealersTable";
import {
  delalersCurrentOrderColumn,
  delalersCurrentOrderData,
} from "../../../About/data/data";

function DealerPastOrder() {
  return (
    <div>
      <DealersTable
        column={delalersCurrentOrderColumn}
        row={delalersCurrentOrderData}
        showIcon={false}
      />
    </div>
  );
}

export default DealerPastOrder;
