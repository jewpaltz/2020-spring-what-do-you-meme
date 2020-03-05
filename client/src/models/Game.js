import { CurrentUser } from "./Users";

export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];

export const MyCards = [];

export const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

export const CaptionsDeck = [
    'For me, math class is like watching a foreign movie without subtitles.',
    'Maybe if we tell people the brain is an app, they will start using it.',
    'When nothing goes right, go left.',
    'A cop pulled me over and told me “Papers”, so I said “Scissors, I win!” and drove off.',
    'Mom: Why is everything on the floor? Me: Gravity!',
    'Sure, I do marathons. On Netflix.',
    'Did it for the memories – totally worth it!',
];

export let CurrentPicture = "";

export const CardsInPlay = [];

export function Init(){
    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: true })

    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}