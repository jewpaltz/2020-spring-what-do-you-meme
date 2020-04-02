
const users = require("./Users");
const CaptionsDeck = require('../models/quoteCards');

const DEAL_AMOUNT = 3;

let iCurrentCaption = 0;

const Players = [
    { Name: 'Bernie', Score: 0, isDealer: true }
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

let CurrentPicture = "";

const CardsInPlay = [];

function SubmitCaption(caption, playerId){
    const player = Players[playerId];
    if(player.isDealer){
        throw Error('Dealer is not allowed to sumbit a caption')
    } 
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Join(userId){
    const user = users.Get(userId);
    Players.push( { Name: user.Name, Score: 0, isDealer: false })

    const myCards = CaptionsDeck.list.slice(iCurrentCaption, iCurrentCaption + DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

    return { playerId: Players.length -1, myCards }
}

module.exports = {
    Players, PictureDeck, CurrentPicture,
    CardsInPlay: CardsInPlay,
    SubmitCaption, Join
}