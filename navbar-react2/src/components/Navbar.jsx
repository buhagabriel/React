
import { FaBars } from "react-icons/fa6";
import "./navbar.css"
import { useState } from "react";

function Navbar() {
    const[isOpen,setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <header>
        <div className='container'>
            <nav>
                <div className='logo'><h2>Design Studio</h2></div>   
                <ul className={isOpen ? "nav-link active" : "nav-link"}>
                    <li><a href='/home' className="active">Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/services'>Services</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
                <div className="icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </div>
    </header>
        <div className="container">
            <div className="content">
            <h2>Responsive Navbar</h2>
            </div>
        </div>
    </>
  )
}

export default Navbar
