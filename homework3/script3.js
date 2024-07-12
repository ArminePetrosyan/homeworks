const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action"],
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
  },
  {
    title: "Interstellar",
    director: "Christopher",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
  },
];

function addMovie(title, director, year, genres) {
  const movie = {
    title,
    director,
    year,
    genres,
  };
  movies.push(movie);
}

function findMoviesByDirector(director) {
  const result = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].director === director) {
      result.push(movies[i]);
    }
  }
  return result;
}

function findMoviesByYear(year) {
  const result = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].year === year) {
      result.push(movies[i]);
    }
  }
  return result;
}

function getMoviesByGenre(genre) {
  const result = [];
  for (let i = 0; i < movies.length; i++) {
    const movieGenres = movies[i].genres;

    for (let j = 0; j < movieGenres.length; j++) {
      if (movieGenres[j] === genre) {
        result.push(movies[i]);
        break;
      }
    }
  }
  return result;
}

function sortMoviesBy(criteria) {
  const sortedMovies = [...movies];

  for (let i = 0; i < sortedMovies.length - 1; i++) {
    for (let j = 0; j < sortedMovies.length - 1 - i; j++) {
      if (sortedMovies[j][criteria] > sortedMovies[j + 1][criteria]) {
        const temp = sortedMovies[j];
        sortedMovies[j] = sortedMovies[j + 1];
        sortedMovies[j + 1] = temp;
      }
    }
  }

  return sortedMovies;
}

function removeMovieByTitle(title) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === title) {
      for (let j = i; j < movies.length - 1; j++) {
        movies[j] = movies[j + 1];
      }
      movies.pop();
      break;
    }
  }
}

// addMovie("test", "test", 2000, ["test", "test"]);
// console.log(findMoviesByYear(2014));
// console.log(getMoviesByGenre("Sci-Fi"));
// console.log(sortMoviesBy("title"));
// console.log(sortMoviesBy("director"));
// console.log(sortMoviesBy("year"));

// removeMovieByTitle("Inception");
// console.log(movies);
