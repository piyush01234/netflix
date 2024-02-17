export const apiKey="883817322ecf4e998c2505ebc8639f7d"
export const openAiApiKey="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"
export const  nowPlayingMoviesUrl="https://api.themoviedb.org/3/movie/now_playing"
export const  popularMoviesUrl="https://api.themoviedb.org/3/movie/popular"
export const  topRatedMoviesUrl="https://api.themoviedb.org/3/movie/top_rated"
export const  upcomingMoviesUrl="https://api.themoviedb.org/3/movie/upcoming"
export const  videoUrl="https://api.themoviedb.org/3/movie/{movie_id}/videos"
export const  searchMovieUrl="https://api.themoviedb.org/3/search/movie?query="
export const accessToken="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODM4MTczMjJlY2Y0ZTk5OGMyNTA1ZWJjODYzOWY3ZCIsInN1YiI6IjY1NzQyY2IxYTg0YTQ3MDBmZTBkZGMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-S700a_P4K-7BTbLb9ws2jXbdH7FLBvxwotuMNuewyo"
export const api_options={
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization:'Bearer '+accessToken

    }
  
}