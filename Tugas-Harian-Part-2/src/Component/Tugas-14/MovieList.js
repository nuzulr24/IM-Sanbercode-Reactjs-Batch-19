import React, {useContext} from "react"
import {MovieContext} from "./MovieContext"

const MovieList = () =>{
  const [movie] = useContext(MovieContext)

  return(
    <ul>
      {movie.map(el=>{
        return <li>name: {el.title} {el.duration} minutes</li>
      })}
    </ul>
  )

}

export default MovieList
