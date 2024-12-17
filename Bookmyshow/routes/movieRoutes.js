const express = require('express');
const  movie = require('../model/movieModel');
const Movieroutes = express.Router();

Movieroutes.get('/', (req, res) => {
    return res.render('movie');
})
Movieroutes.get("/showMovie",async(req,res)=>{
    let movies= await movie.find();
    return res.render('showMovie',{movies});
})

Movieroutes.post("/addmovie", async (req,res)=>{
    let newmovie = await movie.create(req.body)
    if(newmovie){
        console.log("movie added");
        return res.redirect("/movie/showMovie")
    }
    else{
        console.log("movie not added");
        return res.redirect("/movie/showMovie");
    }
})


module.exports = Movieroutes