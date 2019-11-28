import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {

    state = {
        firstname: '',
        lastname: '',
        gender:'',
        birthday: '',
        address: '',
        email: '',
        password: ''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            gender: this.state.gender,
            lastname: this.state.lastname,
            birthday: this.state.birthday,
            address: this.state.address
        };
        await axios.post('https://ecg-backend.herokuapp.com/api/patient/register', newUser)

        window.location.href = '/';
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Register</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                name='firstname'
                                placeholder='Firstname'
                                onChange={this.onInputChange}
                                value={this.state.firstname}
                            />
                        <input
                                type="text"
                                className="form-control"
                                name='lastname'
                                placeholder='Lastname'
                                onChange={this.onInputChange}
                                value={this.state.lastname}
                            />
                            <input
                                type="text"
                                className="form-control"
                                name='gender'
                                placeholder='Gender'
                                onChange={this.onInputChange}
                                value={this.state.gender}
                            />
                        <input
                                type="text"
                                className="form-control"
                                name='birthday'
                                placeholder='Birthday'
                                onChange={this.onInputChange}
                                value={this.state.birthday}
                            />
                        <input
                                type="text"
                                className="form-control"
                                name='address'
                                placeholder='Address'
                                onChange={this.onInputChange}
                                value={this.state.address}
                            />
                      
                            <input
                                type="text"
                                className="form-control"
                                name='email'
                                placeholder='Email'
                                onChange={this.onInputChange}
                                value={this.state.email}
                            />
                            <input
                                type="text"
                                className="form-control"
                                name='password'
                                placeholder='Password'
                                onChange={this.onInputChange}
                                value={this.state.password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Register
                </button>
                    </form>
                </div>
            </div>

        </div>
                  
        )
    }
}
