import React , { useContext, useEffect, useState }  from "react";
import { Link  } from "react-router-dom";
import { Imenu } from "./interface";
import { Menu  } from './constants'
import { AuthContext } from '../../Store/AuthStore/Provider';
import { store } from './../../Store/AuthStore/store'

// interface navBarProps{
//   session: boolean;
// }

const Navbar: React.FC = () => {

  const auth:any = useContext(AuthContext);
          
  const [{ User }, setUser]: any = auth;
  const [booleanVar, setBooleanVar] = useState(false);

  console.log("auth ======= nav =======", auth);
  
  useEffect(() => {

    console.log(auth);
    
    
    if(auth[0]?.User?.session === true) {

      setBooleanVar(auth[0].User?.session )
      
        }      
  }, [User , auth, booleanVar])

          
  return (
    <>

      {
        Menu && Menu.map((el: Imenu, i: number) => {

          return (
        
            <Link
        
              to={el.path}
        
              key={"key" + i} >
              
              {el.Titulo}
          
            </Link>
          )

        })
      }
      {
        booleanVar &&
        <button type="button"
          onClick={() => {

            store.User.session = false;
            setUser(store);
            setBooleanVar(false)
          }}>
          Logout
        </button>

      }

    </>
  );
}




export default Navbar;