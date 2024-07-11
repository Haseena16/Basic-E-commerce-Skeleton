import React, { createContext, useContext, useEffect, useState } from 'react';

//intial context
const AuthContext = createContext();
const AuthProvider = ({children}) => {

    //state management
    const [auth, setAuth] = useState({
        user: null,
        token: "",
      });

      //side effects
      useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
          const parseData = JSON.parse(data);
          setAuth({
            ...auth,
            user: parseData.username,
            userid:parseData.userid,
            token: parseData.token,
          });
        }
      }, []);

    return (
        <AuthContext.Provider 
        value={[auth, setAuth]}>
        {children}
      </AuthContext.Provider>
    );
};

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };