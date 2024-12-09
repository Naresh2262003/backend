import express from 'express'
import cors from 'cors'

import { PORT } from './config/serverConfig.js'

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

app.get('/ping', (req,res) => {
    console.log("I am in");
    return res.json({ message: "pong" });
});

app.all('*', (req, res) => {
    console.log('all');
    res.send('This matches all routes');
});
  
app.listen(PORT, ()=>{
    console.log(`Server is listening to Port Number: ${PORT} `)
});