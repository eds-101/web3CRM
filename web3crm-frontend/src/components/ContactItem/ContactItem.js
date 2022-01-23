import './ContactItem.css'
import React from 'react'; 
import {TiDelete, TiPencil} from 'react-icons/ti'  

//https://react-icons.github.io/react-icons/icons?name=ti

// import {TiPencil} from 'react-icons/ti' 

    function ContactItem(props){  


        function getIdFromContract(event){ props.onIdFromItem(event)}

        return( 
            <div className='Contact'>
            <div className="ContactItem"> 
                <div className="ContactItemEl">
                    <p>Name: {props.name}</p> 
                    <p>Company: {props.company}</p> 
                </div>
                <div className="ContactItemEl">
                    <p>Phone number: {props.phone}</p>
                    <p>Email: {props.email}</p> 
                </div>
            </div>    
            
            <div className="ContactItem">
                <div className='ImportContact'>
                    <p>Contract Worth: {props.contract === 'NaN' ? props.contract : '£' + props.contract }</p> 
                    <p>Notes: {props.notes}</p>  
                </div>    
                <div className='NavItem'>
                    <TiDelete className='iconDelete' onClick={() => getIdFromContract(props.id)} size={35}/> 
                    <TiPencil className='iconEdit' size={30}/>
                </div>
            </div>
                
            </div>
        )
    } 



export default ContactItem