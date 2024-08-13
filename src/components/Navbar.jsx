import React from "react";
import '../CSS/Navbar.css'
import { Link } from "react-router-dom";
var Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-dark justify-content-end'>
                <ul className='navbar-nav'>
                    <li className='nav-item m-3'><Link className='nav-link navp' to='/home'><span class="material-symbols-outlined">
                        home
                    </span>Home</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link navp'  to='/league'><span class="material-symbols-outlined">
                        sports_score
                    </span>Leagues</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link navp' to='/fantasy'><span class="material-symbols-outlined">
                        sports_soccer
                    </span>Your Team</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link navp' to='/userteam'><span class="material-symbols-outlined">
                        groups
                    </span>User Teams</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link navp' to='/profile'><span class="material-symbols-outlined">
                        person
                    </span>Profile</Link></li>

                </ul>
            </nav>
        </div>
    )
}
export default Navbar 