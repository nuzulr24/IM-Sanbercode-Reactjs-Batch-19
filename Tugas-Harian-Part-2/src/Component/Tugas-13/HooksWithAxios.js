import React, {useState, useEffect} from "react"
import axios from "axios"

const HooksWithAxios = () =>{
  const [pesertaLomba, setPesertaLomba] =  useState(null)
  const [inputName, setInputName] =  useState("")
  const [currentId, setCurrentId] =  useState(null)

  useEffect( () => {
    if (pesertaLomba === null){
      axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
      .then(res => {
        let data = res.data
        setPesertaLomba(data.map(el=> {return {id: el.id, name: el.name}}))
      })
    }
  }, [pesertaLomba])

  const handleSubmit = (event) =>{
    event.preventDefault()

    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/contestants`, {name: inputName})
      .then(res => {
          let data = res.data
          setPesertaLomba([...pesertaLomba, {id: data.id, name: data.name}])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name: inputName})
      .then(() => {
          let singlePeserta = pesertaLomba.find(el=> el.id === currentId)
          singlePeserta.name= inputName
          setPesertaLomba([...pesertaLomba])
      })      
    }
    setInputName("")
  }

  const handleChange = (event) =>{
    let inputValue = event.target.value
    setInputName(inputValue)
  }

  const handleEdit = (event) =>{
    let idPeserta = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
    .then(res => {
      let data = res.data
      setInputName(data.name)
      setCurrentId(data.id)
    })
  }

  const handleDelete = (event) =>{
    let idPeserta = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
    .then(() => {
      let newPesertaLomba = pesertaLomba.filter(el=> {return el.id !== idPeserta})
      setPesertaLomba(newPesertaLomba)
    })
  }

  return(
    <>
      { pesertaLomba !== null &&
        (<div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
          <h1>Daftar Peserta Lomba</h1>
          <table className="peserta-lomba">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  pesertaLomba.map((item, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
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
          <h1>Form Peserta</h1>
          <form style={{paddingBottom: "20px"}}onSubmit={handleSubmit}>
            <label>
              Masukkan nama peserta:
            </label>          
            <input type="text" value={inputName} onChange={handleChange}/>
            <button>submit</button>
          </form>
        </div>)
      }

    </>
  )
}

export default HooksWithAxios
