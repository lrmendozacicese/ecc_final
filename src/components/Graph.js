import React, { Component } from 'react'
import axios from 'axios'

import {
   Bar,Line,Pie
} from 'react-chartjs-2'


const token = localStorage.getItem('token');
export default class Graph extends Component {
    state = {

        user:[]
       /* firstname: '',
        lastname: '',
        gender:'',
        birthday: '',
        address: '',
        email: '',
        password: ''*/
    }
    async componentDidMount() {
        const res = await axios.get('https://ecg-backend.herokuapp.com/api/patient/user/records',{
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
  
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['10','20','30','40','50','60','70','80','90','100'],
                datasets:[
                    {
                        label:'Pulsaciones',
                        data:[
                           20,10,35,40,10,80,90,70,60,30
                        ],
                        backgroundColor:['rgba (255,99,132,0.6)']
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
               <Line
  data={this.state.chartData}
  width={100}
  height={500}
  options={{ maintainAspectRatio: false }}
/>
            </div>
        )
    }
}
