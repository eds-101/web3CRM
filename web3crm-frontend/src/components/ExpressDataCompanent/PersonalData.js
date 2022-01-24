import React, { Component } from 'react';  
import { useEffect, useState } from 'react'; 
import axios from "axios";


function GetData() {
    const [Personaldata, setdata] = useState([])    
    
        useEffect(() => { 
            getArrayOfData()  
        }, [])    

        const getArrayOfData = () => {
            axios.get("/data").then((response) => {    
                setdata(response.data)  
            }).catch(error => {
                console.log(`Error: ${error}`)
            })    
        }    

        // return Personaldata
}  

export default GetData 

