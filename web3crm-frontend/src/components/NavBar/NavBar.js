import './NavBar.css'
import {BiUserCircle} from 'react-icons/bi'  

function NavBar(){
    return(<div className="NavBar"> 
        <div className="NavBarItem">
            <p className='header'>Web3CRM</p>
        </div> 
        <div className="NavBarListItem"> 
            <button className='AboutUs'>About Us</button>
            <BiUserCircle size={40} className='userIcon'/>  
        </div>
    </div>)
} 

export default NavBar