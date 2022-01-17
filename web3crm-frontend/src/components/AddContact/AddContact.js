import './AddContact.css' 
import React from 'react'
import {useState} from 'react'

function AddContact(props) { 

    const [Name, setName] = useState() 
    const [Email, setEmail] = useState()
    const [PhoneNumber, setphoneNumber] = useState()
    const [Company, setCompany] = useState()
    const [Notes, setNotes] = useState()
    const [ContractWorth, setContractWorth] = useState() 

    function getName(event){  setName(event.target.value) } 
    function getCompany(event) { setCompany(event.target.value) }  
    function getPhoneNumber(event) { setphoneNumber(event.target.value) } 
    function getEmail(event){ setEmail(event.target.value)} 
    function getNotes(event){ setNotes(event.target.value)} 
    function getContractWorth(event) {setContractWorth(event.target.value)}


    function handleSubmit(e) { 

        e.preventDefault()   

        console.log(e)

        const newContact = { 'name': e.target[0].value, 'company': e.target[1].value, 'phone': e.target[2].value,
          'email': e.target[3].value, 'notes': e.target[4].value,'contractWorth': e.target[5].value }  
        props.onFetchData(newContact)   

        setName('')  
        setEmail('')
        setNotes('')  
        setphoneNumber('') 
        setCompany('')
        setContractWorth('') 

      } 

      

    return( 
      <div className="formContaner">  
         <form onSubmit={handleSubmit} className="form">   
         <p className='formHeader'>Form</p>
            <div className='formCon'>

         <div className='form-item'>
          <label> Name: </label>  
          <input type="text" name="name" onChange={getName} value={Name}/> 
          <label> Company: </label> 
          <input type="text" name="comapny" onChange={getCompany} value={Company}/>
         </div>

          <div className='form-item'>
          <label> Phone:</label>  
          <input type="text" name="phone" onChange={getPhoneNumber} value={PhoneNumber}/> 
          <label> Email: </label>  
          <input type="text"  name="email" onChange={getEmail} value={Email}/> 
          </div>

          <div className='form-item'>
            <label> Notes: </label> 
            <input type="text" name="notes" onChange={getNotes} value={Notes}/>
            <label> Contract Worth: </label>  
            <input type="text"  name="ContractWorth" onChange={getContractWorth} value={ContractWorth}/> 
          </div> 
          </div> 
            <input type="submit" value="Submit" className='submit'/> 
        </form> 
      </div>
    )

}

export default AddContact