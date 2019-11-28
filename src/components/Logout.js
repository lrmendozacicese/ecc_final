import React, { Component } from 'react'
import axios from 'axios'
const token = localStorage.getItem('token');
export default class Login extends Component {
    async componentDidMount() {
        const res = await axios.post('https://ecg-backend.herokuapp.com/api/patient/user/logout',token,{
            headers:{ "Authorization": `Bearer ${token}`}})
     
        console.log(this.state)
    }
    render() {
        return (
            <div>
              <h1>
                  Good bye
              </h1>
            </div>
        )
    }
}
