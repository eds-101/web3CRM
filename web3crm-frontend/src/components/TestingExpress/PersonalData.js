import React, { Component } from 'react';  
import { useEffect, useState } from 'react';
import axios from "axios";


export default function GetData(props) {
    const [data, setdata] = useState(null) 

    useEffect(() => { 
    async function GrabData() {
        // axios.get("/data").then((response) =>{
        //     setdata(response.data)
        // })  
       let PersonalData = await axios.get("/data")  
       console.log(PersonalData)
       setdata(PersonalData)
    }    
    GrabData()
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