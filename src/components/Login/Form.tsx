import { FC } from 'react';
import './Form.css';
import { Iform } from '../commons/interfaces/interface_form';


// firebase.initializeApp(firebaseConfig);


const Form: FC<Iform> = ({
  isSingUp,
  setIsSignUp,
  setDataLogin,
  submitData,
  error,
  msg
}) => {
    

  const handleSubmit = (e: any) => {
    
    submitData( e )
    e.preventDefault();
  }


  const handleInputs = (ev:any ) => {
      
    setDataLogin(ev);

  }

  return (
    <>
      <form className="form" onSubmit={(e: any) => {
        
        handleSubmit(e)
      }} >
        
        <input 
        name="email" 
        type="email" 
        placeholder="Email" 
          onChange={(event:any) => {
          handleInputs(event)}} />
        
        <input
          name="password"
          type="password"
          placeholder="Password"
            onChange={(event:any) => {            
            handleInputs(event)
          }} />
        
        {

      isSingUp &&                
        <input
        name="confirm"
        type="password"
        placeholder="Confirm password"
          onChange={(event:any) => {            
          handleInputs(event)
            }} />
        }
        {
          error && <p>{ msg }</p>
        }
        <input name="submit" type="submit" value={isSingUp? 'Create account': 'Sign in'} />
        
      </form>

      <div className="optionContainer">
        <span>- Or -</span>
        <button 
        type="button" 
          onClick={() => setIsSignUp()} >
          {isSingUp ? 'Sign In' : 'Sign Up'}
        
      </button>
      </div>
    
    </>
  )
}


export default Form;
