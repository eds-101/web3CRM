import React, { Component } from 'react'; 
import axios from "axios";

class PersonalData extends Component {
    constructor(){ 
        super();
        this.state = {}
    } 

    componentDidMount = () => {
        axios.get("/data").then(res => {
            this.state['data'] = res 
            console.log(this.state.data.data.newObject)
        })  
        .catch(error => console.log(error))
    }   

    render(){
        return(
            <div>
               
            </div>
        )
    }
}  

export default PersonalData