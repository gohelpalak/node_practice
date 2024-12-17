const express = require('express');
const movie = require('../model/movieModel');
const Movieroutes = express.Router();

Movieroutes.get('/', (req, res) => {
    return res.render('movie');
})
Movieroutes.get("/showMovie", async (req, res) => {
    let movieData = await movie.find();
    return res.render('showMovie', { movieData });
})

Movieroutes.post("/addmovie", async (req, res) => {
    let newmovie = await movie.create(req.body)
    if (newmovie) {
        console.log("movie added");
        return res.redirect("/movie/showMovie")
    }
    else {
        console.log("movie not added");
        return res.redirect("/movie/showMovie");
    }
})

Movieroutes.get('/deletebook/:id', async (req, res) => {
    let id = await movie.findById(req.params.id);
    console.log(id);
    if (id) {
        await movie.findByIdAndDelete(id)
        return res.redirect("/movie/showMovie");
    }
    else {
        return res.redirect("/movie/showMovie")
    }
})
Movieroutes.get("/editmovie/:id", async (req, res) => {
    let movies = await movie.findById(req.params.id)
    if (movies) {
        res.render("editmovie", { movie: movies })
    }
    else {
        console.log('somthing wrong');
        return res.redirect("/movie/showMovie");

    }
})
Movieroutes.post("/updatemovie/:id", async (req, res) => {
    let movieup = movie.findById(req.params.id)
    console.log(movieup);
    if (movieup) {
        await movie.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect("/movie/showMovie");
    }
    else {
        console.log("somthing wrong");
        return res.redirect("/movie/showMovie");

    }

})


module.exports = Movieroutes