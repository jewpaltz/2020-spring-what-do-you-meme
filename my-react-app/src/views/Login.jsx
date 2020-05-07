import React, { useState } from 'react';

export default function Nav(){

    const [error, setError] = useState('');
    const [profile_picture, setProfile_picture] = useState('');

    const login = e=> {
        setError("Login Clicked");
        e.preventDefault();
    } 
    const google_login = e=> {
        setError("Google Login Clicked");
        e.preventDefault();
    }     
    const facebook_login = e=> {
        setError("Facebook Login Clicked")
        e.preventDefault();
    } 
    
    return (<form className="container" onSubmit={login}>
    {error}
    <div className="field">
      <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" v-model="email" />
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
          <input className="input" type="password" placeholder="Password" v-model="password" />
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