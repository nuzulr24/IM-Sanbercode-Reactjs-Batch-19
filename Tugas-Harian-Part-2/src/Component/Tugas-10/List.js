import React, { Component } from 'react'
import '../../List.css'

class List extends Component {
    render() {
        var berat = (this.props.weight/1000).toFixed(1);
    return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td>{berat}</td>
        </tr>
    )}
}

export default List