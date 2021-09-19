const db = require('../database/models');

module.exports ={
    list: (req, res) =>{
        const moviesPromise = db.Movies.findAll()
        .then( (moviesPromise)=>{  //Lo que va dentro del then puede tener cualquier otro nombre
            res.render('moviesList', {
                movies: moviesPromise
            })
        }
            
        )
    },
    detail: (req, res) => {
        const id = +req.params.id;
        const moviePromise = db.Movies.findByPk(id)
        .then( (moviePromise)=>{
            res.render('moviesDetail', {
                movie: moviePromise
            })
        }

        )
    },
    new: (req, res) => {
        const moviesPromise = db.Movies.findAll({
            order:[['release_date', 'DESC']]
        })
        .then((moviePromise)=>{
            res.render('newestMovies', {
                movies: moviePromise
            })
        })
    },
    recomended: (req, res) => {
        const moviesPromise = db.Movies.findAll({
            order:[['rating', 'DESC']]
        })
        .then((moviePromise)=>{
            res.render('recommendedMovies', {
                movies: moviePromise
            })
        })
    }
}