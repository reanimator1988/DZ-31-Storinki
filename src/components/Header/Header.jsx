import React from 'react';
import MenuItem from './MenuItem.jsx';


export default () => {
    return <div>
        <header>
            <h1>ДЗ 28. Простий сайт на react</h1>
            <ul className="MenuItem">
                <MenuItem>ГОЛОВНА</MenuItem>
                <MenuItem>ПИТАННЯ</MenuItem>
                <MenuItem>МАТЕРІАЛИ</MenuItem>
                <MenuItem>КОНТАКТИ</MenuItem>
            </ul>
        </header>
    </div>
}

