
const express = require('express');
const app = express();
const config = require('./config');
const loader = require('./loaders');
loader();

//Importing Routers
const user_router = require('./routes/user_router');

app.use(express.json());




//Use User Router
app.use('/users', user_router);

app.listen(process.env.APP_PORT, ()=>{
    console.log('start');
})
