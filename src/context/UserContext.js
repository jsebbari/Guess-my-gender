import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();


export function UserContextProvider({children}) {

    const [user, setUser] = useState(null)

    useEffect(() => {
      console.log(user);
    
    }, [user])
    

    

  
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}