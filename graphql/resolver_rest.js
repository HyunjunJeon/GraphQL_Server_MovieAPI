import { getMovies, getMovies2 } from "./db_rest" 

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movies2: (_, {limit, orderBy} ) => getMovies2(limit, orderBy)
    }
}

export default resolvers;