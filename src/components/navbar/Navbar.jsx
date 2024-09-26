import { Link } from 'react-router-dom'
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const user = true
    return (
        <nav>
            <div className="left">
                <a className='logo' href='/'>
                    <img src='/logo.svg' alt=''></img>
                    <span>PropertyPal</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className="right">
                {user ? 
                (<div>
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                        <Link className='profile' to={"/profile"}>
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                </div>) : 
                (<>
                    <a href='/login'>Sign In</a>
                    <a className='register' href='/'>Sign Up</a>
                </>)}
                <div className='menuIcon'>
                    <img src='/menuIcon2.svg' alt='' onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <div className={isOpen ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/login'>Sign In</a>
                    <a href='/'>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar