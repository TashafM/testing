import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import TopBar from '../../../Components/TopBar/TopBar';
import './products.scss'

const Products = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='products'>
      <TopBar title={'Print Heads'}/>
      <div>
        <div className='img-category-main'>
        kjkkkkkkkkkkkkkkkkkkk

        <Button onClick={()=>navigate(`/dealers/all-products`)}>go back</Button>
        </div>
      </div>
    </div>
    <div className='bottom-strip'>
        
    </div>
    </>
  )
}

export default Products