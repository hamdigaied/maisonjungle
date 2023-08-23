import logo from './../../assets/logo.png';
import './Header.css'

function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='logo' />
            <h1>La maison jungle</h1>
        </header>
    )
}

export default Header;