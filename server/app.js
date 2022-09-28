
const express = require('express');
const app = express();
const config = require('./config');
const loader = require('./loaders');
loader();

const {UserRouter, ProductRouter} = require('./routes');

app.use(express.json());




app.use('/', ProductRouter);
app.use('/users', UserRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log('start');
})
