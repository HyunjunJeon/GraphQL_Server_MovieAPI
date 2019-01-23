import { getMovies, getById, addMovies, deleteMovie } from "./db"

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovies: (_, {name, score}) => addMovies(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
}

export default resolvers;