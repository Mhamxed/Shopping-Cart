import '../index.css'
import home from '../assets/img/homepage.jpg'
import { Link } from 'react-router-dom'


function HomePage() {
    return (
        <div className="home-page">
            <img src={home}/>
            <div className="welcome">
                <h1>Welcome to Shopping Cart</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to='/all-products'><button>shop now</button></Link>
            </div>
        </div>
    )
}

export default HomePage;