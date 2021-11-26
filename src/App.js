import React, { useEffect, useState } from "react"
import fire from "./Fire"
import HomePage from "./components/Pages/HomePage/HomePage"
import Login from "./components/Pages/Login/Login"
import { Header } from "semantic-ui-react"





function App() {
const [User, setUser] = useState()
const [Email, setEmail] = useState()
const [Password, setPassword] = useState()
const [emailError, setemailError] = useState()
const [passwordError, setpasswordError] = useState()
const [hasAccount, sethasAccount] = useState(false)

const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  

const clearErrors = () => {
 setemailError('')
 setpasswordError('')
}

const handleLogin = () => {
    clearErrors()
    fire
    .auth()
    .signInWithEmailAndPassword(Email,Password)
    .catch(err =>{
        switch(err.code){
            case "auth/invalid-Email":
            case "auth/User-disabled":
            case "auth/User-not-found":
                setemailError(err.message)
                break
                case "auth/wrong-password":
                    setpasswordError(err.message)
                    break
        }
    })
}

const handleSignup = () =>{
    clearErrors()
    fire
    .auth()
    .createUserWithEmailAndPassword(Email,Password)
    .catch(err =>{
        switch(err.code){
            case "auth/Email-already-in-use":
            case "auth/invalid-Email":
                setemailError(err.message)
                break
                case "auth/weak-password":
                    setpasswordError(err.message)
                    break
        }
    })

}
const handleLogout = () => {
    fire.auth().signOut()
  }
  
  const authListener = () => {
    fire.auth().onAuthStateChanged(User => {
        if(User) {
            clearInputs();
            setUser(User);
        }
        else {
            setUser("")
        }
    })
  }
  
  useEffect(() => {
  authListener()
  }, [])

 
  return (


 

    <div className='App'>
   <Header handleLogout={handleLogout}/>
      
          {
            User?(
              <HomePage/>
            
            ) :(
              <Login
    Email={Email}
    setEmail={setEmail}
    Password={Password}
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleSignup={handleSignup}
    hasAccount={hasAccount}
    sethasAccount={sethasAccount}
    emailError={emailError}
    passwordError={passwordError}
     />
            )
          }
    </div>


 
  )
}

export default App
