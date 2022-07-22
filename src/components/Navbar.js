import './Navbar.css';
import logo from '../assets/sing.jpeg';
import { Link } from 'react-scroll';


const Navbar = () =>{

    return (

        <div className="nav">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="links">
               <div className='about'>
                  <Link to='header' smooth={true} duration={1000} className='about-link'>ABOUT</Link>
               </div>
               <div className='gallery-nav'>
                  <Link to='gallery' smooth={true} duration={1000} className='gallery-link'>GALLERY</Link>
               </div>
               <div className='home'>
                  <Link to='contact' smooth={true} duration={1000} className='contact-link'>CONTACT</Link>
               </div>
            </div>

        </div>
    );
}


export default Navbar