import React from 'react'
import InvoiceTable from '../../../../../components/InvoiceTable/InvoiceTable'
import { pastOrderColumn, pastOrderData } from '../components/data'
import './PastOrder.scss'

const PastOrder = () => {
  return (
    <InvoiceTable datum={pastOrderData} columns={pastOrderColumn}/>
  )
}

export default PastOrder
