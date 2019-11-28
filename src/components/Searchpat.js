import React, { Component } from 'react'
import axios from 'axios'
const token = localStorage.getItem('token');
export default class Searchpat extends Component {

    state = {

        user:[]
    }
    async componentDidMount() {
        const res = await axios.get('https://ecg-backend.herokuapp.com/api/patient/user',{
            headers:{ "Authorization": `Bearer ${token}`}})
       /* this.getPatient();
    }

    getPatient = async () => {
        const res = await axios.get('https://ecg-backend.herokuapp.com/api/patient/user',{
            headers:{ "Authorization": `Bearer${token}`}
        });
     /*   this.setState({
            user: res.data
        })*/
        this.setState({
            user: res.data
        }
        )
        console.log(this.state)
    }
  

    render() {
       // const{user}=this.state
        return (
            <div className="row">
                {
                   
                        <div className="col-md-4 p-2">
                            <div className="card">
                                
                                <div className="card-body">
                                    
                                    <p>
                                        Firstname: {this.state.user.firstname}
                                    </p>
                                    <p>
                                        Lastname: {this.state.user.lastname}
                                    </p>
                                    <p>
                                        Gender: {this.state.user.gender}
                                    </p>
                                    <p>
                                        Birthday: {this.state.user.birthday}
                                    </p>
                                    <p>
                                        Address: {this.state.user.address}
                                    </p>
                                    <p>
                                        Email: {this.state.user.email}
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                    
                }
            

        </div>
                  
        )
    }
}
