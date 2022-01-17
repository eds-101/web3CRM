import ContactItem from '../ContactItem/ContactItem'  

import './ContactList.css'

function ContactList(props){ 

    return(
        <div className='Contactlist'>
            {props.data.map((item, index) => {
               return <ContactItem key={index} name={item['name']} company={item['company']} phone={item['phone']} email={item['email']} notes={item['notes']} contract={item['contractWorth']} />
            })}
        </div>
    )
} 

export default ContactList 