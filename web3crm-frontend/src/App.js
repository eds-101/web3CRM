import './App.css';  

import { useState } from 'react'

import ContactList from './components/ContactList/ContactList'
import AddContact from './components/AddContact/AddContact';

const DummyData = [{'name': 'Alice', 
'company': 'Apple', 
'phone': 39465928364, 
'email': 'AliceTom@gmail.com', 
'notes': 'Meeting tomorrow', 
'contract worth': 2300}]

function App() { 

  const [Data, setData] = useState(DummyData)
  
  function updateContacts(contact) {
    setData(prev => [...prev, contact])
  }

  return (
    <div className="App">
      <ContactList data={Data}/>
      <AddContact onFetchData={updateContacts}/>
    </div>
  );
}

export default App;
