
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAocm4qXNz9W5kg4wbLD_8XF0Uilu2j3gA",
  authDomain: "cinemax-51551.firebaseapp.com",
  projectId: "cinemax-51551",
  storageBucket: "cinemax-51551.appspot.com",
  messagingSenderId: "480980202822",
  appId: "1:480980202822:web:9c94e140e901df63756147"
};

 const fire = firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();


 export {auth}
 export default fire;


 



 