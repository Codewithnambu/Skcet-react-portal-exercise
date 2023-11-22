import React, { useContext } from 'react';

export const Mycontext = React.createContext();

export default function Parent()
{
    return(
        <Mycontext.Provider value="Hello World">
            <Child/>
        </Mycontext.Provider>
    )
}

function Child()
{
    const context = useContext(Mycontext);
    return(
        <div>
            <h2>{context}</h2>
        </div>
    )

}