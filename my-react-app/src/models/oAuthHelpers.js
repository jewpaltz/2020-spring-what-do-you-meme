const GOOGLE_CLIENT_ID = "54172377215-0k6du17ds6up5gm3i1v0d62ehcmno6v2.apps.googleusercontent.com";
const FACEBOOK_CLIENT_ID = "599472083988800";
/* globals gapi, FB */

export function IntiGoogle(){
    const googleScriptTag = document.createElement('script')
    googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
    document.head.appendChild(googleScriptTag)

    googleScriptTag.onload = () => {
        // the global gapi variable is created by loading that script
        gapi.load('auth2', () => {
            window.auth2 = gapi.auth2.init({
                client_id: GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            })
        })

    }
}

export function InitFacebook(){
    window.fbAsyncInit = function() {
        FB.init({
        appId      : FACEBOOK_CLIENT_ID,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.0'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}