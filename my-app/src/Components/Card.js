import React from 'react';
import img1 from './images/In_His_Image.jpg'
import { useState } from 'react';
import { Modal } from './Modal';

export const Card = ({book}) => {
  
    const[show,setShow]=useState(false);
    const[bookItem,setItem]=useState();
    console.log(book)
  
    return (
    <div>
{
book.map((item)=>{
let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
 let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
 if(thumbnail!== undefined && amount!== undefined)
 {

return( 
<div>
<div className='card' onClick={()=>{setShow(true);setItem(item)}}>
    <img src={thumbnail} alt=''/>
    <div className='bottom'>
    <h3 className='title'>{item.volumeInfo.title}</h3>
    <p className='amount'>&#8377;{amount}</p>
    </div>
     </div>
    <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
    
    </div>
  )
 }
})


}
</div>
)
 }


