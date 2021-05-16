const anime = [
    {
        title: 'Cowboy Bebop',
        socre: 99
    },
    {
        title: 'RE: Zero',
        score: 85
    },
    {
        title: 'Trigun',
        score: 95
    },
    {
        title: 'KON!',
        score: 90
    },
    {
        title: 'Durarara',
        score: 80
    }
]

// const animeRatings = anime.map(function(movie) {
//     return `${movie.title} - {movie.score / 10}`;
// });

const animeRatings = anime.map(anime => (
    `${anime.title} - ${anime.score / 10}`
))