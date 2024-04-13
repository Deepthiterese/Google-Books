import React, { useState ,useEffect} from 'react';
import bg from './images/OIP.jpg'
import { Card } from './Card';
import axios from 'axios';

export const Main = () => {
  const [search,setSearch]=useState("")
  const[bookData,setBookData]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=React Js&key=AIzaSyDh4MxVZ0u-yRyTTT_LYtrJUFAGvwOHmEI&maxResults=40').then(res => setBookData(res.data.items),
          setIsLoading(false))
          .catch(err => console.log(err))

  }, []);
  const searchBook = async (evt) => {
      if (evt.key === "Enter") {
          axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDh4MxVZ0u-yRyTTT_LYtrJUFAGvwOHmEI&maxResults=40').then(res => setBookData(res.data.items), setIsLoading(false))
              .catch(err => console.log(err))

      }
  }
  
    return (
    <div>
    <div className='header' style={{ backgroundImage: `url(${bg})`,
    height: "610px",
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", }}>
    <div className='row1'>
    <h1 style={{color:'white',textAlign:'center',fontSize:'100px'}}>Google Books</h1>
    
    </div>
    <div className='row2'>
    <h2 style={{textAlign:'center',color:'white',fontSize:'60px'}}>Find your Book</h2>
    <div className='search' style={{textAlign:'center',color:'white',fontSize:'20px'}}>
    <input type='text' placeholder='Enter your book name'
    value={search} onChange={(e)=>setSearch(e.target.value)}  onKeyPress={searchBook}/>
    
    
    <button >Submit</button>
    </div>
    
    
    </div>
    
    </div>
    
    <div className='container'>
{
    <Card book={bookData}/>
   
}
    </div>
    
    </div>
  )
}
