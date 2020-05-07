import React, { useState, useEffect } from 'react';
import { Login } from "../models/Users";
import { useHistory } from 'react-router-dom';
import { IntiGoogle, InitFacebook } from '../models/oAuthHelpers';
/* globals FB */

export default function LoginComponent(){

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    useEffect(()=>{
        IntiGoogle();
        InitFacebook();
    }, [])

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
        e.preventDefault();
        window.auth2.signIn()
        .then(googleUser =>{
            console.log(googleUser);
            
            return Login("google", googleUser.getAuthResponse().access_token)
                    .then(x=> history.push('/game'))
        } )
        .catch(error => setError( error ) )

    }
    function facebook_login(e){
        e.preventDefault();
        FB.login(response => {
            console.log(response);

            FB.api('/me?fields=email,name,picture', response => {
                console.log(response);
            });
            Login("facebook", response.authResponse.accessToken)
                .then(x=> history.push('/game'))
                .catch(error => setError( error ) )

        }, 
        {scope: 'email'}
    );

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