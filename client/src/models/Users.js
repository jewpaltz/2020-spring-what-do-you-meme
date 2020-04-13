/* B"H
*/
import myFetch, { User } from "./myFetch";

export let CurrentUser = null;

export async function Login(email, password) {

    const user = await myFetch('/users/login', { email, password }) ;

    return CurrentUser = user;
}