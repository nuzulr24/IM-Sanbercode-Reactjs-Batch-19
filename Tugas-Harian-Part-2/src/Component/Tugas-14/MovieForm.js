import React, {useContext, useState} from "react"
import { MovieContext } from "./MovieContext"

const MovieForm = ()=>{
  const [movie, setMovie] = useContext(MovieContext)
  const [input, setInput] = useState({title: "", duration: 0})

  const handleChange = (event)=>{
    let typeOfInput = event.target.name
    let value = event.target.value
    
    if (typeOfInput === "title"){
      setInput({...input, title: value})
    }else if (typeOfInput === "duration"){
      setInput({...input, duration: parseInt(value)})
    }
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    setMovie([...movie, {title: input.title, duration: input.duration}])
    setInput({title: "", duration: 0})
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <strong className="label-movie-form">Title</strong>
        <input type="text" value={input.title} onChange={handleChange} name="title"/>
        <br/>
        <strong className="label-movie-form">Duration</strong>
        <input type="number" value={input.duration} onChange={handleChange} name="duration"/>
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default MovieForm
