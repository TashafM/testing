import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Content.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import DataTable from "../DataTable/DataTable";
// import TabItems from "../TabItems/TabItems";



const Content = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  // const column = ["firstName", "lastName"]
  const column = [
    {title: 'Index no.' , value:'id'},
    {title: 'First Name', value: 'firstName'},
    {title: 'University', value: 'university'}
  ]

  useEffect(()=>{
    const api = 'https://dummyjson.com/users'
    const myapi = async () => {
      const data = await fetch(api)
      const res = await data.json()
      setData(res.users);
      setLoading(false)
    }
    myapi()
  },[])

  return (
    <>
      <div className="upper-content">
        <DataTable data={data} columns={column}/>
        
      </div>
    </>
  );
};

export default Content;
