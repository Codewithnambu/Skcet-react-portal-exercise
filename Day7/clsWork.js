import React , {useState,useEffect} from 'react';
import axios from 'axios';

function DataFetch()
{
    const [book,setBook] = useState([]);

    useEffect(()=>{
        const apiURL = "http://localhost:3001/books";
        axios.get(apiURL)
            .then(response =>{
                setBook(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },[]);
    return(
        <div>
            <h1>Books Name</h1>
            <ul>
                {
                    book.map(items=>(
                        <li key={items.id}>{items.title}</li>
                    ))
                }
            </ul>
            
        </div>
    )
}
export default DataFetch;