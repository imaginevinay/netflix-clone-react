import React, {useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {
    function changeColor(){
        window.scrollY > 100 ? handleShow(true) : handleShow(false)
    }
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", changeColor)

        return () => {
            window.removeEventListener("scroll", changeColor);
        }
    })
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>

            <img className="nav_avatar" src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small" alt="profile icon"/>
        </div>
    )
}

export default Navbar
