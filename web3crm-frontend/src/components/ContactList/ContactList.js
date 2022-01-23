import ContactItem from '../ContactItem/ContactItem'  

import './ContactList.css'

function ContactList(props){   

    function GetIdFromItem(event){ props.onGetIdFromList(event) }

    return(
        <div className='Contactlist'>
            {props.data.map((item) => {
               return <ContactItem key={item['id']} id={item['id']} name={item['name']} company={item['company']} phone={item['phone']} email={item['email']} notes={item['notes']} contract={item['contractWorth']} onIdFromItem={GetIdFromItem}/>
            })}
        </div>
    )
} 

export default ContactList 