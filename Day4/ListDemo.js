import {useState} from 'react';
import './List.css'
function DisplayList()
{
    const [list,setList] = useState(['kiwi','Apple'])
    const [item,setItem] = useState('')
    function AddFruits()
    {
        setList([...list,item])
        setItem('')
    }
    return(
        <div id='body'>
            <h2>Enter Fruits name:</h2>
            <input type='text'
                value={item}
                onChange={(e)=>{setItem(e.target.value)}} />
            <br/>
            <button id='but' onClick={AddFruits}>Add</button>
            <br/>
            <ul style={{textAlign:'left',display:'inline-block'}}>
                {
                    list.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default DisplayList;