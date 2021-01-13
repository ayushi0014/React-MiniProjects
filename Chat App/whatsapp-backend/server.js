//importing
import express from "express";
import mongoose from "mongoose";
import Messages from './dbMessages.js';
import Pusher from "pusher";
import Cors from 'cors';

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1137578",
    key: "824651d1f50d2e146093",
    secret: "824e9d8152cfcda3fc3f",
    cluster: "ap2",
    useTLS: true
  });

  
//middlewares
app.use(express.json());
app.use(Cors());    


// DB config
const connection_url ="mongodb+srv://admin:whatsapp@cluster0.kv01p.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,    
});

const db = mongoose.connection

db.once('open', () => {
    console.log('Db Connected');
    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();
    changeStream.on('change', (change) => {
        console.log('A change occured', change);
        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
            {
                name: messageDetails.user,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                recieved: messageDetails.recieved
            });
        }
        else{
            console.log('Error triggering Pusher')
        }
    });

   
})

//api routes
app.get('/', (req, res) =>{
    res.status(200).send('hello world');
});

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

//listener
app.listen(port, ()=>{
    console.log(`Listening at localhost :${port}`);
});