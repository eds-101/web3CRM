
import './App.css';  
import { useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import AddContact from './components/AddContact/AddContact'; 
import DummyData from './components/DummyData/CRMData';   
import NavBar from './components/NavBar/NavBar'

function App() { 

  const [Data, setData] = useState(DummyData)
  
  function updateContacts(contact) {setData(data => [...data, contact])}

  return (
    <div className="App">     
      <NavBar/>
      <AddContact onFetchData={updateContacts}/>
      <ContactList data={Data}/> 
    </div>
  );
}

export default App;
