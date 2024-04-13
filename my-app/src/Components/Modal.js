import React from 'react';

export const Modal = ({show,item,onClose}) => {
  if(!show){
    return null;
  }
  let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  
  
    return (
    <div>
    <div className='overlay'>
    <div className='overlay-inner'>
    <button className='close' onClick={onclose}>close</button>
    <div className='inner-box'>
    <img src={thumbnail} alt=""/>
    <div className='info'>
    <div className='title'>{item.volumeInfo.title}</div>
    <h3>{item.volumeInfo.authors}</h3>
    <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
    <a href={item.volumeInfo.previewLink}><button>More</button></a>
    </div>
    </div>
    <p className='description'>{item.volumeInfo.description}</p>
    </div>
    </div>
    
    </div>
  )
}
