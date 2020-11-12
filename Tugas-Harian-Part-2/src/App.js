import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Form Pembelian Buah</h1>
      <table id="customers">
  <tr>
    <td>Nama Pengguna</td>
    <td><input type="text"/></td>
  </tr>
  <tr>
    <td>Daftar Item</td>
    <td>
    <ul className="Listku">
    	<li><input type="checkbox"/> Semangka</li>
        <li><input type="checkbox"/> Jeruk</li>
        <li><input type="checkbox"/> Nanas</li>
        <li><input type="checkbox"/> Salak</li>
        <li><input type="checkbox"/> Anggur</li>
    </ul>
    </td>
  </tr>
  <tr>
  	<td><button type="submit">Kirim</button></td>
  </tr>
</table>
    </div>
  );
}

export default App;
