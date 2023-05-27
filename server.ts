import express from "express"
const app = express()
import mongoose from "mongoose"
require('dotenv').config();

const URI: any = process.env.MONGO_URI


app.get('/', (req, res) => {
    res.send('Hello World')
});



mongoose.connect(URI)
mongoose.connection.once('open', () => {
    console.log('Connection to MongoDB established.')
});

// Connect to local host 4000
app.listen(4000, ()=> (
    console.log('App is listening on port 4000')
));

