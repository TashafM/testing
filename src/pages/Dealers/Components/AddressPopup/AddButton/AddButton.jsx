import React from 'react';
import './addbutton.scss';
import addBtn from '../../../../../assets/images/add-default.png'

const AddButton = ({onClick}) => {
  return (
    <div className='addbutton-address' onClick={onClick}>
      <img src={addBtn} alt="" />
      <div className='text'>Add a new address</div>
    </div>
  )
}

export default AddButton
