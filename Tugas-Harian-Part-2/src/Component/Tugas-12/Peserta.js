import React, {Component} from "react"

class Peserta extends Component{

  constructor(props){
    super(props)
    this.state ={
      pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
      input: "",
      currentIndex: -1 // ini berarti create
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // method dengan function biasa
  handleSubmit(event){
    event.preventDefault()
    let currentIndex = this.state.currentIndex
    let pesertaLomba = this.state.pesertaLomba
    let input = this.state.input
    if (currentIndex === -1 ){
      // untuk create
      this.setState({
        pesertaLomba: [...pesertaLomba, input],
        input: ""
      })
    }else{
      //untuk edit karena currentIndex bukan -1
      pesertaLomba[currentIndex] = input;
      this.setState({
        pesertaLomba,
        input: "",
        currentIndex: -1
      })
    }
  }

  handleChange(event){
    let inputValue = event.target.value
    this.setState({
      input: inputValue
    })
  }

  // method dengan arrow function
  handleEdit = (event) =>{
    let index = event.target.value
    let peserta = this.state.pesertaLomba[index]
    this.setState({
      input: peserta,
      currentIndex: index
    })
  }

  handleDelete = (event) =>{
    let index = parseInt(event.target.value)
    let newPesertaLomba = this.state.pesertaLomba.filter((val, idx) => {
      return idx !== index 
    })
    this.setState({pesertaLomba: newPesertaLomba})
  }

  render(){
    return(
      <div style={{width: "70%", margin: "0 auto"}}>
        <h1 style={{textAlign: "center"}}>Daftar Peserta Lomba</h1>
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
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val}</td>
                      <td>
                        <button onClick={this.handleEdit} value={index} style={{marginRight: "10px"}}>Edit</button>
                        <button onClick={this.handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit} style={{textAlign: "center", marginTop: "20px"}}>
          <label>
            Masukkan nama peserta:
          </label>          
          <input required onChange={this.handleChange} value={this.state.input} type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Peserta
