import React, { Component } from 'react';  
import { useEffect, useState } from 'react';
import axios from "axios";


function GetData() {
    const [Personaldata, setdata] = useState([])    
    
        useEffect(() => { 
            axios.get("/data").then((response) => {
                setdata(response.data) 
            }) 
        }, [])   
        
        return Personaldata
}  

export default GetData 

