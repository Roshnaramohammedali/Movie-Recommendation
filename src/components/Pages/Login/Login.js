

import React from 'react'
import './Login.css'
import Header from '../../Header/Header'
function Login(props) {
    const {
    Email, 
    setEmail,
    Password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
    }=props
    
    return (
        <>
        <Header/>
        <div className='login'>
            
           <div className="loginContainer">
               <label>Username</label>
               <input type="text" autoFocus required value ={Email} onChange={(e) => setEmail(e.target.value)} />
               <p className='errorMsg'>{emailError}</p>
               <label>Password</label>
               <input type="password" required value={Password} onChange={(e) => setPassword(e.target.value)}/>
               <p className ="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                   {
                       hasAccount ?(
                             <> 
                             <button onClick={handleLogin} >Sign In</button>
                             <p>Don't have an account ?<span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span></p>
                             </>
                       ):(
                        <> 
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ?<span onClick={() => sethasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                          )}
               </div>
            </div> 
        </div>
        </>
    )
}

export default Login
