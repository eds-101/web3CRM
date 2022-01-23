
import './App.css';  
import { useEffect, useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import AddContact from './components/AddContact/AddContact'; 
import DummyData from './components/DummyData/CRMData';     
// import NewPersonalData from './components/ExpressDataCompanent/PersonalData';
import NavBar from './components/NavBar/NavBar' 
import ShowFormButton from './components/ShowFormButton/ShowFormButton'   
import NoContactsMessage from './components/NoContactsMessage/NoContactsMessage'; 
import ContactMessageCalled from './components/ContactMessageCalled/ContactMessageCalled'

function App() {     

  const [Data, setData] = useState(DummyData)     

  const [Form, setForm] = useState(false)    

  const [message, setMessage] = useState(false)

  function showForm(){ Form ? setForm(false) : setForm(true)}  
  
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
