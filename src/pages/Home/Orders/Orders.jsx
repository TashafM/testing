import axios from 'axios';
import React, { useEffect, useState } from 'react';
import orders from '../../../assets/images/orders.svg'
import PlainTable from '../../../components/PlainTable/PlainTable';
import Description from '../Description/Description'

const Orders = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchOrders = () => {
    setIsLoading(true)
    const api = `https://63f848b56978b1f910564a41.mockapi.io/orders`;
    axios.get(api)
    .then((response)=>{
      setData(response.data)
      setIsLoading(false)
    })
  }
  useEffect(()=>{
    fetchOrders()
  },[])

  const columns = [
    {title: '#', value: 'id'},
    {title: 'Code', value: 'code'},
    {title: 'Name', value: 'name'},
    {title: 'Contact Person', value: 'person'},
    {title: 'Currency', value: 'currency'},
    {title: 'Place of Supply', value: 'place'},
    {title: 'Order Date', value: 'date'},
    {title: 'No. of Items', value: 'quantity'},
    {title: 'Total', value: 'Total'},

  ]
  return (
    <div className='upper-content'>
    <Description icon={orders} title="Orders" count={70} noButtons/>
    {isLoading ? 'Loading...' : <PlainTable columns={columns} datum={data}/>}
    </div>
  )
}

export default Orders
