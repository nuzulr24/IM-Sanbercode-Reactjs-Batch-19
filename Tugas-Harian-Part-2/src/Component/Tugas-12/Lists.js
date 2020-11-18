import React, {Component} from "react"
import '../../List.css'

class Lists extends Component{
  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ],
     inputName : "",
     mauEdit: 0    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputName: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.inputName)
    this.setState({
      pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
      inputName: ""
    })
  }

  showEdit(){
    this.setState({mauEdit: 1});
  }

  render(){
    return(
      <>
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th colspan="2">Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  var berat = (val.berat/1000).toFixed(1);
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val.nama}</td>
                      <td>{val.harga}</td>
                      <td>{berat}</td>
                      <td><button onClick={this.showEdit}>Edit</button></td>
                      <td><button onClick={this.delete}>Delete</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <label>nama buah:</label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
          <label>harga buah:</label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
          <label>berat buah:</label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
          <button>submit</button>
        </form>
        {
          this.state.mauEdit && 
          (
            <>
              <h1>Edit Buah</h1>
            <form onSubmit={this.handleEdit}>
              <label>nama buah:</label>          
              <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
              <label>harga buah:</label>          
              <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
              <label>berat buah:</label>          
              <input type="text" value={this.state.inputName} onChange={this.handleChange}/><br/>
              <button>edit</button>
            </form>
            </>
          )
        }
      </>
    )
  }
}

export default Lists