import React, { useContext, useState, useEffect } from 'react'
import Login from '../../components/Login';
import { AuthContext } from '../../Store/AuthStore/Provider';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { store } from './../../Store/AuthStore/store'

interface mainsubmit {
  email: string
  password: string
  confirm: string
};


const Home:React.FC = (props: any) => {

  const auth = useContext(AuthContext);
  
  const [{ User }, setUser]: any = auth;

  const fireBase = useFirebaseApp();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [isUseConfirm, setIsUseConfirm] = useState(false);

  const [FirebaseUser, setFirebaseUser] = useState(null);
  const [useFirebaseUser, setuseFirebaseUser] = useState(false)
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
    confirm:""
  })

  useEffect(() => {

    
    if (User?.session === false) {
      
      console.log("========================>>>>>>", User);
      
      setFirebaseUser(null)
      
    }

    if (isUseConfirm === true ) {      
      setDataLogin({ ...dataLogin, confirm: "" })      
      setIsUseConfirm(false);
    }

    if (useFirebaseUser) {

      store.User.session = true;
      const neww = store;
      setUser(neww); 
      setuseFirebaseUser(false)
      

    }

  }, [
    dataLogin, 
    isSignUp, 
    isUseConfirm,
    setUser,
    User, 
    auth,
    useFirebaseUser,
    FirebaseUser
  ])


  const mainAuth = ({ email, password, confirm }: mainsubmit) => {

    if (isSignUp === true && confirm.length < 6) {
      setMsg("Todos los campos son necesarios")
      setError(true);
      return
    }

    setError(false);
    setMsg('');
    try {
      
      if (confirm.length > 0 && confirm === password && isSignUp === true) {

        fireBase.auth().createUserWithEmailAndPassword(email, password)
          .then(async (result: any) => {
            
            setIsSignUp(false)

 
          }).catch((err) => {
         
            console.log(` hay un ${err}`);
          
            setIsSignUp(false)
          

          })
      } else {

        fireBase.auth().signInWithEmailAndPassword(email, password)
          .then(async (result: any) => {
            console.log("result", result);
            
            setFirebaseUser(result.user);
                    
            if (await result.user) {

              setuseFirebaseUser(true)
            }
            // if (!!userFirebase) {
            
            //   setIsSignUp( false )

            // }
 
          }).catch((err) => {
         
            console.log(` hay un ${err}`);
          
            setIsSignUp(true)

          })
        
      }

    } catch (err) {
      
      console.log(`hay un error ${err}`);
          
    }

  };
  
  return (
    <>
      { !FirebaseUser &&
              <Login
        
              error={error}
      
              msg={msg}
              
              isSingUp={isSignUp}
      
              setIsSignUp={() => setIsSignUp(!isSignUp)}
      
              setDataLogin={({ target: { name, value } }: any) => setDataLogin({
                
                ...dataLogin,
      
                [name]: value
      
              })}
      
              submitData={(e:any) => mainAuth(dataLogin)}
            />
      }

      <h1>Hommie</h1>

    </>
  )
}

// Home.propTypes = {

// }

export default Home

