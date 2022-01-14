import ContactItem from '../ContactItem/ContactItem'


function ContactList(props){ 

    return(
        <div>
            {props.data.map((item) => {
               return <ContactItem name={item['name']} company={item['company']} phone={item['phone']} email={item['email']} notes={item['notes']} contract={item['contract worth']} />
            })}
        </div>
    )
} 

export default ContactList