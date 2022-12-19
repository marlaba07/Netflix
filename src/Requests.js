const key = '8216a0f13a781d5fc95844e0aaea2a9f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US` ,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US` ,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US` ,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US` ,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US` 
}

export default requests