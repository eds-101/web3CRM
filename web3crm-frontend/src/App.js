
import './App.css';  
import { useEffect, useState } from 'react'
import axios from "axios";
import ContactList from './components/ContactList/ContactList'
import AddContact from './components/AddContact/AddContact'; 
import NavBar from './components/NavBar/NavBar' 
import ShowFormButton from './components/ShowFormButton/ShowFormButton'   
import NoContactsMessage from './components/NoContactsMessage/NoContactsMessage'; 
import ContactMessageCalled from './components/ContactMessageCalled/ContactMessageCalled'

function App() {     

  const [Data, setData] = useState([])     

  const [Form, setForm] = useState(false)    
  const [message, setMessage] = useState(false)   

  useEffect(() => { 
    axios.get("/data").then((response) => {
      setData(response.data) 
      })
  }, [])  


  function showForm(){ Form ? setForm(false) : setForm(true)}     

  // where the new data from the back-end is being called
  // console.log(NewPersonalData())


  // This shows the contact being added to the list message
  function updateContacts(contact) { 
    setData(data => [...data, contact]) 
    setForm(false) 
    ContactHasBeenAdd() 
    setTimeout(endContactHasBeenAdd, 3000)
  }      
  async function ContactHasBeenAdd() {setMessage(true)} 
  async function endContactHasBeenAdd() {setMessage(false)}

  // This funaction delets the message. 
  function UpdataDataList(event) { setData(data => data.filter((item) => item['id'] !== event))} 


  return (
    <div className="App">     
      <NavBar/>    
      {message ? <ContactMessageCalled/> : null}
      { !Form ? <ShowFormButton getShowForm={showForm}/> : null}
      { Form ? <AddContact onFetchData={updateContacts} getShowForm={showForm}/> : null}
      <ContactList data={Data} onGetIdFromList={UpdataDataList}/>      
      { Data.length === 0 ? <NoContactsMessage/> : null}
    </div>  
  );
}

export default App;
