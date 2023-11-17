import React , {useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "./firebase.js";

function Login() {

    const history = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login .....
    }

    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // It successfully created a new user with email and password
                const user = userCredential.user;
                console.log(user);
                if(user){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        // do some fancy firebase register ....
    }


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>


      <div className="login_container">
        <h1>Sign In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type='submit' className="login_signInButton" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>

      </div>
    </div>
  );
}

export default Login;
