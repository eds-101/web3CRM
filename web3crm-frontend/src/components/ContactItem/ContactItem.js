import './ContactItem.css'

function ContactItem(props){ 

    return( 
        <div className='Contact'>
        <div className="ContactItem"> 
            <div className="ContactItemEl">
                <p>Name: {props.name}</p> 
                <p>Company: {props.company}</p> 
            </div>
            <div className="ContactItemEl">
                <p>Phone number: {props.phone}</p>
                <p>Email: {props.email}</p> 
            </div>
        </div>   
            <div className='ImportContact'>
                <p>Contract Worth: £{props.contract}</p> 
                <p>Notes: {props.notes}</p> 
            </div>
        </div>
    )
} 

export default ContactItem