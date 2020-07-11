import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import { Home, About, Users} from './views';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gram: 0,
      kg: 0,
      name:'',
      pekerjaan:'',
      theme: 'dark'
    }
  
  this._handleThemeChange = this._handleThemeChange.bind(this);
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  _handleThemeChange = () =>{
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'white' : 'dark'
    }))
  }
  onSubmit(event){
    event.preventDefault();
    alert(`Pesanan Atas Nama ${this.state.name}, Membeli Jenis Telur ${this.state.pekerjaan} Terima Kasih`);
  }

  onChangegram = (e) => {
    let gram = e.target.value;
    let kg = (parseFloat(gram) * 15000).toString();
    this.setState({gram, kg})
  }

  onChangekg = (e) => {
    let kg = e.target.value;
    let gram = (parseFloat(kg) / 15000).toString();
    this.setState({gram, kg})
  }

  onChange = (event) => {
    const { name,value } = event.target;
    this.setState({ [name]: value })
  }

  
  render() {
  const {gram, kg} = this.state;
  const { name,pekerjaan } = this.state;

  return (

    
      <form onSubmit={this.onSubmit}>
      <div class="header">
  <h1>Telur Ayam Negeri</h1></div>

<div class="topnav">
  <a href="#">HOME</a>
  <a href="https://news.labsatu.com/mengenal-manfaat-dan-kandungan-dari-telur-ayam/">INFO</a>
  <a href="index.js">BIO</a>
</div>
<div class="columns">
    <center><h1><b>PT. JAGO TELUR</b></h1></center>
    <p>Telur Ayam adalah makanan yang sangat terkenal di kalangan orang Indonesia, bukan hanya di Indonesia namun juga di seluruh dunia. Banyak makanan yang tercipta karena adanya telur di salah satu bahannya,
       namun kita pun perlu tahu apa sebenernya telur ayam itu, dan apa manfaatnya .Telur mengandung sumber protein yang berkualitas tinggi. Lebih dari separuh protein telur ditemukan di putih telur bersamaan dengan vitamin B2 dan jumlah lemak dan kolesterol lebih rendah daripada kuning telur. Putih telur adalah sumber kaya selenium, vitamin D, B6, B12, dan mineral seperti seng, besi, dan tembaga. Kuning telur mengandung lebih banyak kalori dan lemak. Telur adalah sumber kolesterol, vitamin larut lemak A, D, E, dan K serta lesitin yang memungkinkan penguapan dalam resep seperti mayones.
      Beberapa telur sekarang mengandung asam lemak omega-3, tergantung pada apa yang telah diberi makan ayam. Telur dianggap sebagai sumber protein yang lengkap karena mengandung delapan asam amino esensial.</p>
  </div>

<div class="row">
  <div class="column">
    <h2>Customer Toko Andika</h2>
    <p>Saya sangat berterima kasih pada <b>JAGO TELUR</b>. Karena kualitas telurnya yang terbaik dan higenis menjadikan banyak sekali pelanngan ke toko  saya untuk membeli telur </p>
  </div>
  
  <div class="column">
    <h2>Customer Grosir Wahyu</h2>
    <p>Senang sekali grosir saya bisa bermitra dengan <b>JAGO TELUR</b>. Berkat saya Order di <b>JAGO TELUR</b> Omset penjualan telur saya semakin meningkat dan membuat grosir saya semakin bergkembang . Mudah mudahan <b>JAGO TELUR</b> semakin sukses dan berkembang dan bisa bermitra terus bersama grosir saya terima kasih. </p>
  </div>
  
  <div class="column">
    <h2>Customer RM.Sindang Abadi</h2>
    <p>Assalamu'alaikum . Mas pesanan telur nya sudah sampai dengan Aman dan tanpa kendala apapun . Pengiriman cepat,rapih dan dari pihak <b>JAGO TELUR</b> sangat ramah responnya. </p>
  </div>
</div>
      <h2>Isi Data Order </h2>
      <label>
         Kilo Gram:
        <input type="number" value={gram} onChange={this.onChangegram}/>
      </label>
      <br />
      <label>
        Harga /KG:
        <input type="number" value={kg} onChange={this.onChangekg} />
      </label>
      <br />
      
    
    <label>Nama:
    <input name="name" type="text" value={name} onChange={this.onChange}/> 
    </label>
    <br />
    <label>Jenis Telur:
    <input name="pekerjaan" type="text" placeholder="telur kampung/negeri" value={pekerjaan} onChange={this.onChange}/>
    </label>
    <br />
    <button type="submit">Order</button>
    <div className="footers">
      <h2>PT.JAGO TELUR</h2> 
      <p>Jl.Kebon Jeruk Raya Indah No 30
         Telp : (022) 5432219
         Gmail: ptjagotelur.id@gmail.com
         Owner: Yudistira Viandy Putra 
      </p>
    </div>
  </form>
  

  
    );  
  }
}

export default App;



