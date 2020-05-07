import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Login } from "../models/Users";
import { InitFacebook, InitGoogle } from "../models/oAuthHelpers";
/*global gapi, FB */

let auth2 = null;

export default function Nav(){

    const history = useHistory();
    console.log({history})

    const [error, setError] = useState('');
    const [profile_picture, setProfile_picture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        InitFacebook();
        InitGoogle();
    }, [])
      
    const login = async e=> {
        e.preventDefault();
        try {
            await Login(email, password);
            history.push('/game');
        } catch (error) {
            setError( error.message );
        }
    } 
    const google_login = e=> {
        window.auth2.signIn()
        .then(googleUser =>{
            console.log(googleUser);
            
            return Login("google", googleUser.getAuthResponse().access_token)
                    .then(x=> history.push('/game'))
        } )
        .catch(error => this.error = error)
        e.preventDefault();
    }     
    const facebook_login = e=> {
        FB.login(response => {
            console.log(response);

            FB.api('/me?fields=email,name,picture', response => {
                console.log(response);
            });
            Login("facebook", response.authResponse.accessToken)
                .then(x=> history.push('/game'))
                .catch(error => setError( error) )

        }, 
        {scope: 'email'}
        );
        e.preventDefault();
    } 
    
    return (<form className="container" onSubmit={login}>
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
          <input className="input" type="password" placeholder="Password" value={password}  onChange={e=> setPassword(e.target.value)} />
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

      <img src={profile_picture} v-if={profile_picture} />
    </form>)
}