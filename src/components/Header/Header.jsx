import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>ДЗ.31 Сторінки</h1>
            <nav>
                <li><Link to="/">ГОЛОВНА</Link></li>
                <li><Link to="/questions">ПИТАННЯ</Link></li>
                <li><Link to="/materials">МАТЕРІАЛИ</Link></li>
                <li><Link to="/contacts">КОНТАКТИ</Link></li>
            </nav>
        </div>
    );
};

export default Header;
