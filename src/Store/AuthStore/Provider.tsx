import { createContext, useState } from 'react';
import { node } from 'prop-types';
import { store } from './store';

export const AuthContext:any = createContext(store);

const AuthProvider = ({ children }:any) => {  

  const [User, setUser] = useState(store);

  const state = [
    User,
    setUser
  ]

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
};

AuthProvider.propTypes = {
  children: node,
}
AuthProvider.defaultProps = {
  children: null
}

export default AuthProvider;
