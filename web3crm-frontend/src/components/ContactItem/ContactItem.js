function ContactItem(props){ 

    return(
        <div className="ContactItem">
            <p>{props.name}</p> 
            <p>{props.company}</p> 
            <p>Phone number {props.phone}</p>
            <p>{props.email}</p>
            <p>{props.notes}</p>
            <p>£ {props.contract}</p>
        </div>
    )
} 

export default ContactItem