import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { books: [] };
    }

    componentDidMount() {
        axios.get('http://backendexample.sanbercloud.com/api/books')
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="wrapper-users" style={{margin: '85px 0 30px 40px'}}>                  
            <div className="row">
                    <div className="leftcolumn">
                        <center><h2>Daftar Buku Kami</h2></center>
                    {
                      this.state.books.map((data, i) => {
                        return (
                              <div className="card">
                                <h2>{data.title}</h2>
                                <img src={data.image_url} style={{height: '300px'}} />
                                <p>{data.description}
                                <hr/>
                                <ul>
                                    <li>Harga: {data.price}</li>
                                    <li>Total Halaman: {data.totalPage}</li>
                                    <li>Tahun Terbit: {data.release_year}</li>
                                </ul>
                                </p>
                              </div>
                        )
                      })
                    }
                    </div>
                </div>
            </div>
        )
    }
}