import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBF6BFWIIfzEkFwm8uizmhZCOyOk7ujE6M",
    authDomain: "fir-jwt-gp.firebaseapp.com",
    projectId: "fir-jwt-gp",
    storageBucket: "fir-jwt-gp.appspot.com",
    messagingSenderId: "995236985958",
    appId: "1:995236985958:web:dce706b0e79acc6e5d41a7",
    measurementId: "G-W729G75157"
  };

export default function Login({ setIsLoggedIn }) {
    const handleSignIn = () => {
        //connect to firebase project
        const app = initializeApp(firebaseConfig);
        //connect to auth
        const auth = getAuth(app);
        // create a provider
        const provider = new GoogleAuthProvider();
        // popup signing window
        signInWithPopup(auth, provider)
        // handle .then and .catch
            .then(() => setIsLoggedIn(true))
            .catch(alert)
    }
    return(
        <>
        <h1>Login</h1>
        <button onClick={handleSignIn}>Sign in with google</button>
        </>
    )
}