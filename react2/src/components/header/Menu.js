import React, {PureComponent} from 'react';
import './Menu.css'


class Menu extends PureComponent {

    render() {
        return (
            <nav className={this.props.display ? "active" : "hide"}>
                <ul>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">contact</a>
                </ul>
            </nav>
        );
    }
}

export default Menu;
