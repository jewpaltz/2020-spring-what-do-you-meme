
const CurrentUser = require("./Users");

const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
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
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Init(){
    // This only made sense at the client.
    // TODO: Rethink how this works at the server
    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: true })

    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}

module.exports = {
    Players, PictureDeck, CurrentPicture,
    CardsInPlay: CardsInPlay,
    SubmitCaption, Init
}