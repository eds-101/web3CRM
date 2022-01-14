import './App.css';  

import { useState } from 'react'

import ContactList from './components/ContactList/ContactList'

const DummyData = [{'name': 'Alice', 
'company': 'Apple', 
'phone': 39465928364, 
'email': 'AliceTom@gmail.com', 
'notes': 'Meeting tomorrow', 
'contract worth': 2300}]

function App() { 

  const [Data, setData] = useState(DummyData)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    // name={item['name']} company={item['company']} phone={item['phone']} email={item['email']} notes={item['notes']} contract={item['contract worth']}
    const newContact = {
      'name': e.target[0].value,
      'company': e.target[1].value,
      'phone': e.target[2].value,
      'email': e.target[3].value,
      'notes': e.target[4].value,
      'contract': e.target[5].value
    }
    // update Data to push object
    setData(prev => [...prev, newContact])

  }

  return (
    <div className="App">
      <ContactList data={Data}/>
      <form
        onSubmit={handleSubmit}>
        <label> Name: <input type="text" name="name" /> </label> <br />
        <label> Company: <input type="text" name="name" /> </label> <br />
        <label> Phone: <input type="text" name="name" /> </label> <br />
        <label> Email: <input type="text" name="name" /> </label> <br />
        <label> Notes: <input type="text" name="name" /> </label> <br />
        <label> Contract Worth: <input type="text" name="name" /> </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;

//
// Create fields to input the data

// have the data update in the correct area of the program

// ?validation

// move to backend