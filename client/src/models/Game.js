import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

export let State = {};
export const MyCards = [];

export function Init(){
    myFetch('http://localhost:3000/game')
        .then(x=> { 
            State = x;
            console.log(x);
        });
}