import './AddContact.css' 
import React from 'react'
import {useState, useEffect} from 'react'

function AddContact(props) {  


    const [submit, setsubmit] = useState(false) 

    console.log(submit)

    const [Name, setName] = useState('')  
    const [VaildName, setVaildName] = useState(true)

    const [Email, setEmail] = useState('')  
    const [VaildEmail, setVaildEmail] = useState(true)

    const [PhoneNumber, setphoneNumber] = useState('')  
    const [VaildPhoneNumber, setVaildphoneNumber] = useState(true)

    const [Company, setCompany] = useState('')  
    const [VaildCompany, setVaildCompany] = useState(true)

    const [Notes, setNotes] = useState('') 
    const [VaildNotes, setVaildNotes] = useState(true)

    const [ContractWorth, setContractWorth] = useState('')  
    const [VaildContractWorth, setVaildContractWorth] = useState(true)

    function getName(event){  setName(event.target.value) } 
    function getCompany(event) { setCompany(event.target.value) }  
    function getPhoneNumber(event) { setphoneNumber(event.target.value) } 
    function getEmail(event){ setEmail(event.target.value)} 
    function getNotes(event){ setNotes(event.target.value)} 
    function getContractWorth(event) {setContractWorth(event.target.value)} 

    useEffect(() => { setVaildName(Name.length > 1)}, [Name]) 
    useEffect(() => { setVaildCompany(Company.length > 1)}, [Company]) 
    useEffect(() => { setVaildEmail(Email.includes('@'))}, [Email]) 
    useEffect(() => { setVaildphoneNumber(PhoneNumber.length > 8)}, [PhoneNumber]) 
    useEffect(() => { setVaildContractWorth(ContractWorth >= 0)}, [ContractWorth]) 


    function checkNewContract(e){ 

      let newContact = {}

      e.target[0].value === '' ?  newContact['name'] = 'NaN' : newContact['name'] = e.target[0].value
      e.target[1].value === '' ? newContact['company'] = 'NaN' : newContact['company'] = e.target[1].value 
      e.target[2].value === '' ? newContact['phone'] = 'NaN' : newContact['phone'] = e.target[2].value
      e.target[3].value === '' ? newContact['email'] = 'NaN' : newContact['email'] = e.target[3].value
      e.target[4].value === '' ? newContact['notes'] = 'NaN' : newContact['notes'] = e.target[4].value
      e.target[5].value === '' ? newContact['contractWorth'] = 'NaN' : newContact['contractWorth'] = e.target[5].value

      return newContact
    }


    function handleSubmit(e) { 

        e.preventDefault()     

        if (Name.length === 0) { return }

        const CreateContact = checkNewContract(e)
        props.onFetchData(CreateContact)   

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
          <label> Name: <span>{VaildName || Name.length === 0 ? null : 'Needs one more character'}</span></label>   
          <input type="text" name="name" onChange={getName} value={Name} style={VaildName || Name.length === 0 ? {'background': 'white'} : {'background': 'pink'}}/> 
          <label> Company: <span>{VaildCompany || Company.length === 0 ? null : 'Needs more character'}</span></label> 
          <input type="text" name="comapny" onChange={getCompany} value={Company} style={VaildCompany || Company.length === 0 ? {'background': 'white'} : {'background': 'pink'}}/>
         </div>

          <div className='form-item'>
          <label> Phone: <span>{VaildPhoneNumber || PhoneNumber.length === 0 ? null : 'Must be a vaild phone number'}</span></label>  
          <input type="text" name="phone" onChange={getPhoneNumber} value={PhoneNumber} style={VaildPhoneNumber || PhoneNumber.length === 0 ? {'background': 'white'} : {'background': 'pink'}}/> 
          <label> Email: <span>{VaildEmail || Email.length === 0 ? null : 'Needs @'}</span></label>  
          <input type="text"  name="email" onChange={getEmail} value={Email} style={VaildEmail || Email.length === 0 ? {'background': 'white'} : {'background': 'pink'}}/> 
          </div>

          <div className='form-item'>
            <label> Notes: </label> 
            <input type="textarea" name="notes" onChange={getNotes} value={Notes}/>
            <label> Contract Worth: <span>{VaildContractWorth || ContractWorth.length === 0 ? null : 'Postive number'}</span></label>  
            <input type="number" min={0.00}  name="ContractWorth" onChange={getContractWorth} value={ContractWorth} style={VaildContractWorth || ContractWorth.length === 0 ? {'background': 'white'} : {'background': 'pink'}}/> 
          </div> 
          </div> 
            <input type="submit" value="Submit" className='submit' onMouseEnter={() => setsubmit(true)} onMouseLeave={() => setsubmit(false)} style={!VaildName ? {'opacity': '0.5'} : {'opacity': '1'} }/><span className='submitError'>{submit && Name.length <= 1? 'To creat a new task you must add a name.' : null}</span> 
        </form> 
      </div>
    )

}

export default AddContact