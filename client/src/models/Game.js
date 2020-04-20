import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

export let State = {};
export let MyCards = [];

let interval;
export function Init(){
    myFetch('/game/join', {})
        .then(x=> { 
            MyCards = x;
            console.log(x);
        });
}

export function Run(){
    myFetch('/game')
        .then(x=> { 
            State = x;
            console.log(x);
        });
}

export function Start(){
    interval = setInterval(Run, 2000 )
}
export function Pause(){
    clearInterval(interval);
}