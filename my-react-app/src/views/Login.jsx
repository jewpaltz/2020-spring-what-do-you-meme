import React from 'react';

export default function LoginComponent(){

    const error = "No Error";

    function login(e){
        e.preventDefault();
    }
    function google_login(e){
        e.preventDefault();
    }
    function facebook_login(e){
        e.preventDefault();
    }

    return (
        <form className="container" onSubmit={login}>
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
    </form>
      )
}