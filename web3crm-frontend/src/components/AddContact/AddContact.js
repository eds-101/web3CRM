function AddContact(props) {

    function handleSubmit(e) {
        e.preventDefault()
        const newContact = {
          'name': e.target[0].value,
          'company': e.target[1].value,
          'phone': e.target[2].value,
          'email': e.target[3].value, 
          'notes': e.target[4].value,
          'contractWorth': e.target[5].value
        }  
        console.log(newContact)
        props.onFetchData(newContact) 
      } 

      

    return(
        <form onSubmit={handleSubmit}>
        <label> Name: <input type="text" name="name" /> </label> <br />
        <label> Company: <input type="text" name="name" /> </label> <br />
        <label> Phone: <input type="text" name="name" /> </label> <br />
        <label> Email: <input type="text" name="name" /> </label> <br />
        <label> Notes: <input type="text" name="name" /> </label> <br />
        <label> Contract Worth: <input type="text" name="name" /> </label>
        <input type="submit" value="Submit" />
      </form>

    )

}

export default AddContact