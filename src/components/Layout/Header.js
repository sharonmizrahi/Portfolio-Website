import './Header.css';
import main1 from '../../assets/main1.jpeg';
import cover from '../../assets/cover.jpeg';
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () =>{

    return (
      <div id='header'>
          <div className='social-media'>
                <a target="_blank" rel="noopener noreferrer" className='instagram' href='https://www.instagram.com/tbm________/'><FaInstagram size="25px"/></a>
                <a target="_blank" rel="noopener noreferrer" className='facebook' href='https://www.facebook.com/tal.benmagal'>  <FaFacebook size="25px" /></a>
          </div>
          <div className='container'>
             <div className='artist-summry'>
                 <div className='name'>
                    <h1>TAL BEN MAGAL</h1>
                </div>
                <div className='summry'>
                    <p>my name is tal ben magal and i'm an artist</p>
                </div>
             </div>
             <div className='img-header'>
                 <img src={cover} className='introduction-img'></img>
             </div>
           </div>
     </div>
    );
}


export default Header