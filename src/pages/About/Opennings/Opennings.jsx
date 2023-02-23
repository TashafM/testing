import React from "react";
import { jobsData } from "../data/data";
import CardJobs from "./Component/CardJobs";
import BtnTitleCenter from "../../../components/Button/BtnTitleCenter";
import { useNavigate } from "react-router-dom";

function Opennings() {
  const navigate = useNavigate();
  const createJobsHandler = () => {
    navigate("/home/about/create-jobs/applications");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {jobsData.map((item) => {
          return (
            <div className="col-3">
              <CardJobs
                title={item.title}
                logo={item.logo}
                totle={item.totle}
              />
            </div>
          );
        })}
      </div>
      <BtnTitleCenter title="Create Job Post" onClick={createJobsHandler} />
    </div>
  );
}

export default Opennings;
