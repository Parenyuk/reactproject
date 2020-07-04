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
                        <li className="menu-item"><NavLink to={'/monday'} activeClassName={'active'} >Monday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/tuesday'} activeClassName={'active'}>Tuesday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/wednesday'} activeClassName={'active'}>Wednesday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/thursday'}activeClassName={'active'}>Thursday</NavLink></li>
                        <li className="menu-item"><NavLink to={'/friday'} activeClassName={'active'}>Friday</NavLink></li>
                    </ul>
                </nav>
            </Menu>
        </div>
    )
}

export default Navbar;
