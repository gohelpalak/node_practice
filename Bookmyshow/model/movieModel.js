const mongoose = require("mongoose");

const movieschema = mongoose.Schema({
    title: String,
    
    desc: String,
    Genre: String,
    Lang: String,
    Time: Number,
    img:String
})
const Movie = mongoose.model("Movie",movieschema)
module.exports=Movie;
