import {NavLink} from "react-router-dom";
import React from "react";
import './Navbar.css'
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    return (
        <div >
            <Menu>
                <nav className={'links'}>
                    <ul>
                        <li className="menu-item"><NavLink to={'/monday'}>Monday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/tuesday'}>Tuesday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/wednesday'}>Wednesday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/thursday'}>Thursday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/friday'}>Friday</NavLink></li>
                    </ul>

                </nav>
            </Menu>
        </div>
    )
}

export default Navbar;