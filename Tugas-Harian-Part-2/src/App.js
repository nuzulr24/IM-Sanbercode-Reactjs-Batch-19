import './App.css';
import Form from './Component/Tugas-9/Form'
import List from './Component/Tugas-10/List'
import Lists from './Component/Tugas-12/Lists'
import Timer from './Component/Tugas-11/Timer'

function App() {
  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  return (
    <div className="App">
      {/* <Form/>
      <br></br>
      <table>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
      {dataHargaBuah.map(item => {
        return (
          <List name={item.nama} price={item.harga} weight={item.berat}/>
        )
      })}
      </table> */}
      <Lists/>
      {/* <Timer/> */}
    </div>
  );
}

export default App;
