import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Form Pembelian Buah</h1>
      <table>
        <tr>
          <td>Nama Pelanggan: </td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>Daftar Item</td>
          <td>
            <label><input type="checkbox"/> Semangka</label>
            <label><input type="checkbox"/> Jeruk</label>
            <label><input type="checkbox"/> Nanas</label>
            <label><input type="checkbox"/> Apel</label>
            <label><input type="checkbox"/> Anggur</label>
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
