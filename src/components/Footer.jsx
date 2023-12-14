import './Footer.css'
import Logo from "../../images/GDG logo 1.png"
import social from "../../images/fb ig twitter.png"

function Footer() {
  return (
    <div className='footerClass'>
        <div className='gdgLogo'>
            <img src={Logo} alt='Logo'/>
        </div>
        <div className="infosection">
          <h3 className='finUS'>You can find us on</h3>
          <div className="imgcont">
            <img src={social} alt="socials" />
          </div>
          <h3 className='Rights'>© All Rights Reserved For GDG Batna 2023.</h3>
        </div>
        <div className="placeHolder">

        </div>
      
      </div>
  )
}

export default Footer