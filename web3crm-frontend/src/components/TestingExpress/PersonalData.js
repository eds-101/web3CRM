import React, { Component } from 'react';  
import { useEffect, useState } from 'react';
import axios from "axios";


export default function GetData(props) {
    const [data, setdata] = useState(null) 

    useEffect(() => {
        axios.get("/data").then((response) =>{
            setdata(response.data)
        })
    }, [])  

    props.getDataFromExpress(data)  

    return(<div></div>)

}


// class PersonalData extends Component {
//     constructor(){ 
//         super();
//         this.state = { Data: [] }
//     } 

//     componentDidMount = () => {
//         axios.get("/data").then(res => {
//             console.log(res.data[0]['message'])
//         })  
//         .catch(error => console.log(error))
//     }   

//    render(){
//        return(
//            <div>
             
//            </div>
//        )
//    }
// }   


// export default PersonalData