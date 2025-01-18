import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <header>
            <Link to="/">
                <img 
                    className='logo' 
                    src={logo}
                />
            </Link>
            <div className="nav">
                <Link to={"/all-products"}><button>Shop All</button></Link>
                <Link to={"/cart"}>
                    <button>
                        <FontAwesomeIcon 
                        className='shopping-cart'
                        icon={faBagShopping}
                        />
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header