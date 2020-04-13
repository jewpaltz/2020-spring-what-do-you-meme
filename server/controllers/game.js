/* B"H
*/
const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router();


router.use(function(req, res, next) {
    if(req.userId != null ){
        req.playerId = game.GetPalyerId(req.userId)
    }
    console.log({ userId: req.userId, playerId: req.playerId })
    next();
});

router
    .get('/', (req, res) => { 
        console.log(game)
        res.send({
            Players: game.Players, PictureDeck: game.PictureDeck, CurrentPicture: game.CurrentPicture,
            CardsInPlay: game.CardsInPlay.map(x=> ({...x, PlayerId: 'unknown' }) ) 
        });

    })

    .post('/join', (req, res)=> res.send(game.Join(req.body.userId)) )
    .post('/flipPicture', (req, res)=> res.send(game.FlipPicture()) )

    .get('/quoteCards', (req, res) => res.send(quoteCards) )
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.body.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })

   .post('/cardsInPlay', (req, res) => {
        game.SubmitCaption(req.body.caption, req.playerId);
        res.send({ success: true })
    })


module.exports = router;