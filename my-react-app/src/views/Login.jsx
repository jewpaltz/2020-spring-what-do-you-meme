import React, { useState } from 'react';
import { Login } from "../models/Users";
import { useHistory } from 'react-router-dom';

export default function LoginComponent(){

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e){
        e.preventDefault();
        try {
            await Login(email, password);
            history.push('/game');
        } catch (ex) {
            setError(ex.message);
        }

    }
    function google_login(e){
        setError('You Logged In with Google')
        e.preventDefault();
    }
    function facebook_login(e){
        setError('You Logged In eith Facebook')
        e.preventDefault();
    }

    return (
        <form className="container" onSubmit={login}>
        {error}
        <div className="field">
          <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)} />
              <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
              </span>
          </p>
          </div>
          <div className="field">
          <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password"  value={password} onChange={e=> setPassword(e.target.value)} />
              <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
              </span>
          </p>
          </div>
          <div className="field">
          <p className="control">
              <button className="button is-success">
              Login
              </button>
          </p>
              <button className="button is-primary" onClick={google_login} >
                  Login with Google
              </button>
              <br /><br />
              <button className="button is-primary" onClick={facebook_login} >
                  Login with Facebook
              </button>
  
          </div>
    </form>
      )
}