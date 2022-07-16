import * as React from 'react';
import SmallButton from "@components/Buttons/SmallButton";
import './footer.css';
////import SmallButton from './SmallButton';



const Footer = () => {
  return (
    <footer>
      <ul className="socials-list flex">
        <li className="social-link"><SmallButton src="/src/assets/img/Twitter Icon.svg" href="http://bitly.ws/ZT9"/></li>
        <li className="social-link"><SmallButton src="/src/assets/img/Facebook Icon.svg" href="http://bitly.ws/ZT9"/></li>
        <li className="social-link"><SmallButton src="/src/assets/img/Instagram Icon.svg" href="http://bitly.ws/ZT9"/></li>
        <li className="social-link"><SmallButton src="/src/assets/img/Linkedin Icon.svg" href="http://bitly.ws/ZT9"/></li>
        <li className="social-link"><SmallButton src="/src/assets/img/GitHub Icon.svg" href="http://bitly.ws/ZT9"/></li>
      </ul>
    </footer>
  )
}

export default Footer;