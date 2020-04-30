<template>
  <form class="container" @submit.prevent="login">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
            <button class="button is-primary" @click.prevent="google_login" >
                Login with Google
            </button>
        </div>
  </form>
</template>

<script>
import { Login } from "../models/Users";
const GOOGLE_CLIENT_ID = "54172377215-0k6du17ds6up5gm3i1v0d62ehcmno6v2.apps.googleusercontent.com";
let auth2 = null;

export default {
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    created(){
        const googleScriptTag = document.createElement('script')
        googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
        document.head.appendChild(googleScriptTag)

        googleScriptTag.onload = () => {
            // the global gapi variable is created by loading that script
            gapi.load('auth2', () => {
                auth2 = gapi.auth2.init({
                    client_id: GOOGLE_CLIENT_ID,
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                })
            })

        }
    },
    methods: {
        async login(){
            try {
                await Login(this.email, this.password);
                this.$router.push('/game');
            } catch (error) {
                this.error = error;
            }
        },
        google_login(){
                auth2.signIn()
                .then(googleUser =>{
                    console.log(googleUser);
                    
                    const profile = googleUser.getBasicProfile();
                    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
                    console.log('Full Name: ' + profile.getName());
                    console.log('Given Name: ' + profile.getGivenName());
                    console.log('Family Name: ' + profile.getFamilyName());
                    console.log("Image URL: " + profile.getImageUrl());
                    console.log("Email: " + profile.getEmail());
                } )
                .catch(error => console.error(error))

        }
    }
}
</script>

<style>

</style>