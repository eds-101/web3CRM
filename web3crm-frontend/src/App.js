
import './App.css';  
import { useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import AddContact from './components/AddContact/AddContact'; 
import DummyData from './components/DummyData/CRMData';   
import NavBar from './components/NavBar/NavBar' 
import ShowFormButton from './components/ShowFormButton/ShowFormButton' 

function App() { 

  const [Data, setData] = useState(DummyData) 
  const [Form, setForm] = useState(false) 

  function showForm(){ Form ? setForm(false) : setForm(true)} 
  
  function updateContacts(contact) { 
    setData(data => [...data, contact])
    setForm(false)
  } 



  return (
    <div className="App">     
      <NavBar/>   
      { !Form ? <ShowFormButton getShowForm={showForm}/> : null}
      { Form ? <AddContact onFetchData={updateContacts} getShowForm={showForm}/> : null}
      <ContactList data={Data}/>  

    </div>  
  );
}

export default App;
