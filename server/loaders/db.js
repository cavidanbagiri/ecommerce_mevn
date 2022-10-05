
const mongoose = require('mongoose');

const db = mongoose.connection;
db.once("open",()=>{
    console.log("Connection Opened");
})

const connectDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/ecommercemevn");
}
module.exports = {
    connectDB
}