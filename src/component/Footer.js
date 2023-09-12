import logo from '../assets/images/logo/LOGO_footer.png';
import '../style/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <p className='footer__p'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;