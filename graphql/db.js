let movies = [
  {
    id: 0,
    name: "1111111111111111",
    score: 1
  },
  {
    id: 1,
    name: "2222222222222222",
    score: 2
  },
  {
    id: 2,
    name: "33333333333333333",
    score: 3
  },
  {
    id: 3,
    name: "444444444444444444",
    score: 4
  },
  {
    id: 4,
    name: "5555555555555555555",
    score: 5
  }
]

export const getMovies = () => movies

export const getById = id => {
    const filterdMovies = movies.filter(movie => id === movie.id)
    return filterdMovies[0];
}

export const deleteMovie = id => {
    const numOfMovie = movies.findIndex(id)
    movies = [...movies.slice(0,numOfMovie), ...movies.slice(numOfMovie+1)]
    return true
}
