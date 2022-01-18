import './ShowFormButton.css'

function showFormButton(props){ 

    function showForm(){ props.getShowForm()}

    return(<div className='showFormCon'>
         <button className='showForm' onClick={showForm}>New Contact</button>   
    </div>)
} 

export default showFormButton