import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    currenUser: {},
    userToken: null,
    userRole: {},
    setCurrentUser: () => {},
    setUserToken: () => {},
    setUserRole: () => {},
    userPermission: {},
    setUserPermission: null,
})

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    const [userPermission, setUserPermission] = useState();
    const [userRole, setUserRole] = useState();
    
    const setUserToken = (token) => {
        if (token) {
          localStorage.setItem('TOKEN', token)
        } else {
          localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
      }

  

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            userPermission,
            setUserPermission,
            userRole,
            setUserRole
        }}>

        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)