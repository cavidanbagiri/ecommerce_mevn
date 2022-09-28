
const express = require('express');
const app = express();
const config = require('./config');
const loader = require('./loaders');
var cors = require('cors')
loader();

const {UserRouter, ProductRouter} = require('./routes');

app.use(express.json());

//Use CORS For Request and Respond Data From Node to Vue
app.use(cors())

app.use('/', ProductRouter);
app.use('/users', UserRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log('start');
})
