let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let answer1 = prompt('Axirinci baxdiginiz film?');
let answer2 = prompt('Bu kinonu neche bal ile qiymetlendirisiniz?');

personalMovieDB.movies[answer1] = answer2;

console.log(personalMovieDB);
