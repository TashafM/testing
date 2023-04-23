import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const navigate = useNavigate()
    const {Component} = props;
    useEffect(()=>{
        let login = localStorage.getItem('accessToken');
        if(!login){
            navigate(`/`);
        }
    },[])
  return (
    <>
        <Component/>
    </>
  )
}

export default ProtectedRoutes