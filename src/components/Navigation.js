import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>
                        Bibliotèque
                    </li>
                </NavLink>
                <NavLink to="/Cherche" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>
                        Recherche dans les livres en stock
                    </li>
                </NavLink>

            </ul>
        </div >
    );
};

export default Navigation;