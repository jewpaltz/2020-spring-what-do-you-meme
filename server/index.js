const express = require('express');
const gameController = require('./controllers/game');


const app = express();
const port = 3000;

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .get('/', (req, res) => res.send('This class is awesome!') )
    .use('/game', gameController)


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));