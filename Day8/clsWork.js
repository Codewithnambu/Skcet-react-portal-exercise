import {useState,useEffect} from 'react';
function UseEffectDemo()
{
    const [message,setMessage] = useState("Hello dear one,learing react..?");

    useEffect(()=>{
        console.log('use effect hook called');
        const timer = setTimeout(()=>{
            setMessage("Great.. This is time to learn about HOOKS");
        },2000)
        return () => clearTimeout(timer);
    },[]);
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}
export default UseEffectDemo;