
const express = require('express');
const app = express();
const config = require('./config');
const loader = require('./loaders');
var cors = require('cors')
loader();

//Import Routers
const {UserRouter, ParfumeryRouter, ProductRouter, MakeUpRouter, AccessoriesRouter} = require('./routes');


//Use CORS For Request and Respond Data From Node to Vue
app.use(cors(
    {
        origin:'http://localhost:5173',
        // methods: [
        //     "GET","POST"
        // ]
        // credentials:false
    },
    
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('uploads'));

//Use Routers
app.use('/', ProductRouter);
app.use('/perfumes', ParfumeryRouter);
app.use('/makeup', MakeUpRouter);
app.use('/accessories', AccessoriesRouter);
app.use('/users', UserRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log('start');
})
