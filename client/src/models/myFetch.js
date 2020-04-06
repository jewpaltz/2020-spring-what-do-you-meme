/* B"H
*/
export default function myFetch(url){
    return fetch(url, { })
        .then(x=> x.json() );
}