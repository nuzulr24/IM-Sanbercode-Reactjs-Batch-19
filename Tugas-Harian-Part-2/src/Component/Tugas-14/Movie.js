import React from "react"
import {MovieProvider} from "./MovieContext"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"

const Movie = () =>{
  return(
    <div style={{width: "50%", margin: "0 auto"}}>
      <MovieProvider>
        <MovieList/>
        <MovieForm/>
      </MovieProvider>
    </div>
  )
}

export default Movie
