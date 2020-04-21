import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

let interval;

export default { 
    State: {},
    MyCards: [],
    Init(){
        myFetch('/game/join', {})
            .then(x=> { 
                this.MyCards = x;
                console.log(x);
            });
    },
    Run(){
        myFetch('/game')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    Start(){
        interval = setInterval(()=> this.Run(), 2000 )
    },
    Pause(){
        clearInterval(interval);
    } 
}