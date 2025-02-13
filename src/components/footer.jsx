import '../index.css'
import logo from '../assets/img/logo.png'

function Footer() {
    return (
        <footer>
            <div className='footer-top'>
                <div className="about">
                    <img src={logo}/>
                </div>
                <div className="mission">
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="policies">
                    <h3>Policies</h3>
                    <ul>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Shipping Policy</a></li>
                        <li><a href="/">Returns & Cancellation</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms Of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025, Shopping Cart</p>
            </div>
        </footer>
    )
}

export default Footer