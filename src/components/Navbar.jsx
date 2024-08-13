import React from "react";
import '../CSS/Navbar.css'
import { Link } from "react-router-dom";
var Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-dark justify-content-end'>
                <ul className='navbar-nav'>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/home'><span class="material-symbols-outlined">
                        home
                    </span>Home</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/feed'><span class="material-symbols-outlined">
                        newspaper
                    </span>Feed</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/league'><span class="material-symbols-outlined">
                        sports_score
                    </span>Leagues</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/fantasy'><span class="material-symbols-outlined">
                        sports_soccer
                    </span>Fantasy</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/profile'><span class="material-symbols-outlined">
                        person
                    </span>Profile</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/userteam'><span class="material-symbols-outlined">
                        person
                    </span>User Teams</Link></li>
                    <li className='nav-item m-3'><Link className='nav-link text-light' to='/contact'><span class="material-symbols-outlined">
                        settings
                    </span>Settings</Link></li>

                </ul>
            </nav>
        </div>
    )
}
export default Navbar 