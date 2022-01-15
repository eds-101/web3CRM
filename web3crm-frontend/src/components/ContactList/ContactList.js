import ContactItem from '../ContactItem/ContactItem' 
import './ContactList.css'

function ContactList(props){ 

    return(
        <div className='Contactlist'>
            {props.data.map((item) => {
               return <ContactItem name={item['name']} company={item['company']} phone={item['phone']} email={item['email']} notes={item['notes']} contract={item['contractWorth']} />
            })}
        </div>
    )
} 

export default ContactList 