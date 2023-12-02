let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < numberOfFilms; i++) {

    let answer1 = prompt('Axirinci baxdiginiz film?');
    let answer2 = prompt('Bu kinonu neche bal ile qiymetlendirisiniz?');

    if (answer1 == '' || answer1 == null || answer2 == '' || answer2 == null || answer1.length > 50) {
        console.log("Sehv bash verdi");
        i--;
    } else {
        personalMovieDB.movies[answer1] = answer2;
    }
}

personalMovieDB.count < 10 ? console.log('Cox az filme baxmisiniz')
: personalMovieDB.count < 30 ? console.log("Klassik Film izleyicisi")
: personalMovieDB.count > 30 ? console.log('Siz Kinomansiniz')
: console.log("Sehv bas verdi");

console.log(personalMovieDB);
