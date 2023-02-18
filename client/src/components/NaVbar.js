import React, {useState}from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import '../pages/Landing/Landing.css'
import {useNavigate} from 'react-router'

function Navbar() {
  const navigate=useNavigate();
  const navigateToSignInPage= ()=>{
    navigate('/login')
  }
    const [nav,setNav]=useState(false);
    const changeBackground =()=>{
        if (window.scrollY>=50){
            setNav(true)
        }
        else {setNav(false)
    }
}
window.addEventListener('scroll',changeBackground)
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo'>
      <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'/>
      </label>   
      <ul className='menu'>
        <li><Link to='main' smooth={true} duration={1000}> Header</Link></li>
        <li><Link to='features' smooth={true} duration={1000}> Features</Link></li>
        <li><Link to='presentaion'smooth={true} duration={1000}> Offer</Link></li>
        <li><Link to='about' smooth={true} duration={1000}> About</Link></li>
        <li><a onClick={navigateToSignInPage} href > SignIn</a></li>

        </ul>  
      
        

    </nav>
  )
}

export default Navbar