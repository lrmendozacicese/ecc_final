import React, { Component } from 'react'
import axios from 'axios'
const token = localStorage.getItem('token');
export default class Registerdata extends Component {

    state = {
        content:''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const newRecord = {
            content: this.state.content
        };
        await axios.post('https://ecg-backend.herokuapp.com/api/patient/user/records', newRecord,{
            headers:{ "Authorization": `Bearer ${token}`}})
            }

    render() {
        return (
            <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Record</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                name='content'
                                placeholder='Content'
                                onChange={this.onInputChange}
                                value={this.state.content}
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
