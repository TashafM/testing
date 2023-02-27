import React from 'react'
import { Row } from 'react-bootstrap'
import OrderDetailsBox from '../OrderDetailsBox/OrderDetailsBox'
import truck from '../../../../../assets/images/truck.svg'
import bill from '../../../../../assets/images/bill.svg'

const OrderDetails = () => {
  return (
    <div className='upper-content'>
      <Row>
        <OrderDetailsBox icon={bill} icon2={truck}/>
        <OrderDetailsBox />
      </Row>
    </div>
  )
}

export default OrderDetails
