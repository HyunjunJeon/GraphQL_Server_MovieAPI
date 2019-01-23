import fetch from "node-fetch"

const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = () => {
    return fetch(API_URL)
                .then(res => res.json())
                .then(json => json.data.movies)
}

export const getMovies2 = (limit, orderBy) => {
    let original_URL = API_URL + `?limit=${limit}&order_by=${orderBy}`
    return fetch(original_URL)
                .then(res => res.json())
                .then(json => json.data.movies)
}