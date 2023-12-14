import logo from '../../images/gdg.png';
import RButton from '../../images/register-button.svg';
import './Nav.css'


function Nav() {
  return (
    <header className="App-header">
        <div className="header-content">
          <img src={logo} className="nav-App-logo" alt="logo" />
          <div className='nav-register-button'>
            <div className='nav-container'>
              <img src={RButton} alt="register" />
              <div>Register</div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Nav