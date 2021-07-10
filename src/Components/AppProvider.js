import React, { useEffect , useState, createContext } from 'react';
import { usePath } from 'hookrouter'

export const AppContext = createContext()
export default function(props) {
    const  path = usePath();

    const [ route , setRoute ] = useState('dashboard');
    const [sidebar, setSidebar] = useState(false)

    useEffect (() => {
        console.log(path);
    },[path])

    return(
        <AppContext.Provider value={{
            path,
            sidebar,
            setSidebar
        }}>
            {props.children} 
        </AppContext.Provider>

    )
}
