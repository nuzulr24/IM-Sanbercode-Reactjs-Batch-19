import React, {useState, useEffect} from "react"
import axios from "axios"
// import Navbar from "../../component/Header/Navbar"
import "../../App.css"

const Book = () =>{
  const [buku, setBuku] =  useState(null)
  const [inputName, setInputName] =  useState("")
  const [inputDescription, setInputDescription] =  useState("")
  const [inputReview, setInputReview] =  useState("")
  const [inputRelease, setInputRelease] =  useState("2020")
  const [inputTotalPage, setInputTotalPage] =  useState("0")
  const [inputPrice, setInputPrice] =  useState("0")
  const [inputImage, setInputImage] =  useState("")
  const [currentId, setCurrentId] =  useState(null)
  const [inputTitle, setInputTitle] = useState("")

  useEffect( () => {
    if (buku === null){
      axios.get(`http://backendexample.sanbercloud.com/api/books`)
      .then(res => {
        let data = res.data
        setBuku(data.map(el=> {return {id: el.id, title: el.title, description: el.description, review: el.review, release_year: el.release_year, totalHalaman: el.totalPage, price: el.price }}))
      })
    }
  }, [buku])

  // const handleSubmitSearch = (event) => {
  //   event.preventDefault()
  //   let idPeserta = inputTitle
  //   axios.get(`http://backendexample.sanbercloud.com/api/books/${idPeserta}`)
  //   .then(res => {
  //     let data = res.data
  //     // console.log(data)
  //     setBuku(res.data.map(el=> {return {id: el.id, title: el.title, description: el.description, review: el.review, release_year: el.release_year, totalHalaman: el.totalPage, price: el.price }}))
  //     console.log(buku)
  //   })
  // }

  const handleSubmit = (event) =>{
    event.preventDefault()

    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/books`, {title: inputName, description: inputDescription, review: inputReview, release_year: inputRelease, totalPage: inputTotalPage, price: inputPrice, image_url: inputImage})
      .then(res => {
          let data = res.data
          setBuku([...buku, {id: data.id, title: data.title, description: data.description, review: data.review, release_year: data.release_year, totalHalaman: data.totalPage, price: data.price, image_url: data.image_url}])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/books/${currentId}`, {name: inputName})
      .then(() => {
          let singlePeserta = buku.find(el=> el.id === currentId)
          singlePeserta.title= inputName
          singlePeserta.description= inputDescription
          singlePeserta.review= inputReview
          singlePeserta.release_year= inputRelease
          singlePeserta.totalPage= inputTotalPage
          singlePeserta.price= inputPrice
          singlePeserta.image_url= inputImage
          setBuku([...buku])
      })      
    }
    setInputName("")
    setInputDescription("")
    setInputPrice("")
    setInputReview("")
    setInputImage("")
    setInputTotalPage("")
    setInputRelease("")
  }

  const handleSearch = (event) => {
    let inputValue = event.target.value
    setInputTitle(inputValue)
  }

  const handleChange = (event) =>{
    let inputValue = event.target.value
    setInputName(inputValue)
  }

  const handleDescription = (event) =>{
    let inputValue = event.target.value
    setInputDescription(inputValue)
  }

  const handleReview = (event) =>{
    let inputValue = event.target.value
    setInputReview(inputValue)
  }

  const handleRelease = (event) =>{
    let inputValue = event.target.value
    setInputRelease(inputValue)
  }

  const handlePage = (event) =>{
    let inputValue = event.target.value
    setInputTotalPage(inputValue)
  }

  const handlePrice = (event) =>{
    let inputValue = event.target.value
    setInputPrice(inputValue)
  }

  const handleImage = (event) =>{
    let inputValue = event.target.value
    setInputImage(inputValue)
  }


  const handleEdit = (event) =>{
    let idPeserta = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/books/${idPeserta}`)
    .then(res => {
      let data = res.data
      setInputName(data.title)
      setInputDescription(data.description)
      setInputReview(data.review)
      setInputRelease(data.release_year)
      setInputTotalPage(data.totalPage)
      setInputPrice(data.price)
      setInputImage(data.image_url)
      setCurrentId(data.id)
    })
  }

  const handleDelete = (event) =>{
    let idPeserta = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/books/${idPeserta}`)
    .then(() => {
      let newPesertaLomba = buku.filter(el=> {return el.id !== idPeserta})
      setBuku(newPesertaLomba)
    })
  }

  return(
    <>
      { buku !== null &&
        (<div style={{width: "70%", margin: '85px 0 30px 40px'}}>
          {/* <form onSubmit={handleSubmitSearch}>
              <div className="row">
                  <div class="col-75">
                      <input type="text" value={inputTitle} onChange={handleSearch} placeholder="Search Title"/>
                  </div>
              </div>
              <div class="row">
                  <input type="submit" value="Search"/>
              </div>
          </form> */}
          <h1>Book List</h1>
          <table id="customers">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Review</th>
                <th>Release Year</th>
                <th>Total Page</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  buku.map((item, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.review}</td>
                        <td>{item.release_year}</td>
                        <td>{item.totalHalaman}</td>
                        <td>{item.price}</td>
                        <td>
                          <button onClick={handleEdit} value={item.id}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          {/* Form */}
          <h1>Form Buku</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div class="col-25">
                        <label for="fname">Title</label>
                    </div>
                    <div class="col-75">
                        <input type="text" value={inputName} onChange={handleChange} placeholder="Title"/>
                    </div>
                  </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="subject">Description</label>
                    </div>
                    <div class="col-75">
                        <textarea id="subject" value={inputDescription} onChange={handleDescription} placeholder="Description" style={{height: "100px"}}></textarea>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="subject">Review</label>
                    </div>
                    <div class="col-75">
                        <textarea id="subject" value={inputReview} onChange={handleReview} placeholder="Review" style={{height: "100px"}}></textarea>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="fname">Release Year</label>
                    </div>
                    <div class="col-75">
                        <input type="number" value={inputRelease} onChange={handleRelease} placeholder="Release Year"/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="fname">Total Page</label>
                    </div>
                    <div class="col-75">
                        <input type="number" value={inputTotalPage} onChange={handlePage} placeholder="Total Page"/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="fname">Price</label>
                    </div>
                    <div class="col-75">
                        <input type="number" value={inputPrice} onChange={handlePrice} placeholder="Price"/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-25">
                        <label for="subject">Image Url</label>
                    </div>
                    <div class="col-75">
                        <textarea id="subject" value={inputImage} onChange={handleImage} placeholder="URL Image" style={{height: "100px"}}></textarea>
                    </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>   
            </div>
        </div>)
    }
    </>
  )
}

export default Book
