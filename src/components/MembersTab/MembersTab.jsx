import React, { useEffect, useState } from "react";

const MembersTab = ({apiUrl, Title}) => {
  const api = apiUrl;
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api);
      const res = await data.json();
      setData(res.users);
      setLoading(false);
    };
    fetchData();
  },[]);

  return (
    <div>
      <h1>{Title}</h1>
    </div>
  );
};

export default MembersTab;
