/*eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./TeamMembers.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import DataTable from "../../../components/DataTable/DataTable";

// import TabItems from "../TabItems/TabItems";



const TeamMembers = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const column = [
    {title: 'Index no.' , value:'id'},
    {title: 'First Name', value: 'firstName'},
    {title: 'Gender', value: 'gender'},
    {title: 'Password', value: 'password'},
    {title: 'University', value: 'university'},
    {title: 'Domain', value: 'domain'},
    {title: 'Mac Address', value: 'macAddress'},
    {title: 'University', value: 'university'},
    {title: 'Domain', value: 'domain'},
    {title: 'Mac Address', value: 'macAddress'},
  ]

  useEffect(()=>{
    const api = 'https://dummyjson.com/users'
    const myapi = async () => {
      const data = await fetch(api)
      const res = await data.json()
      setData(res.users);
      setLoading(false);
    }
    myapi()
  },[])

  return (
    <>
      <div className="upper-content">
        <DataTable data={data} columns={column}/>
        {console.log(data)}
      </div>
    </>
  );
};

export default TeamMembers;
