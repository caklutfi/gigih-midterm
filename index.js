require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const Song = require('./model/song');
const json = require('body-parser/lib/types/json');


const uri = "mongodb+srv://admin:admin@cluster0.w1aqzen.mongodb.net/gigih?retryWrites=true&w=majority"
mongoose.connect(uri)
//  .then(() => console.log('Connected!'));

const database = mongoose.connection;
database.on('error',(error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})


//const routes = require('./routes/routes');
const app = express()


const PORT = 8000
const HOST = '0.0.0.0'


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//app.use('/api', routes);

router.get('/', (req,res) => {
    res.send('hello worldss');
    console.log('apa yang terjadi')
})

app.post('/', (req, res) => {
    const song = new Song({
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year
    })

    try {
        const songToSave = song.save();
        res.status(200).send(song.title)
    
    }
    catch(error){
        res.status(400).json({message: error.message})
    }

})

app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
