import React from 'react';
import './header.component.css';
import {Link} from "react-router-dom";

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 className="main-header">Библиотека книг</h1>
                <div className={'nav-menu'}>
                    <Link to={'/catalog'}>Каталог</Link>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;
