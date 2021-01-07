import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from'./dbCards.js';


//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:lnubdPar0vGe6qKD@cluster0.ywhp0.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares
app.use(express.json());
app.use(Cors());    

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Tinder');
});

app.post('/tinder/card', (req, res) =>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/card', (req, res) =>{
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

//Listner
app.listen(port, () => {
    console.log(`listening to localhost: ${port}`);
})