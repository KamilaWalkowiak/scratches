import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import Menu from './Menu';

class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,

        };
    }

    static propTypes = {
        header: PropTypes.string,
        text: PropTypes.string,
        version: PropTypes.string
    };

    static defaultProps = {
        header: "mój domyślny header",
        text: "mój domyślny text",
        version: "1.0.10"
    };

    handleOnClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    };

    render() {
        return (
            <div className="Header">
                {this.props.header}
                <p>{this.props.text}{this.props.version}</p>
                <button onClick={this.handleOnClick}>hamburger</button>
                <div><Menu display={this.state.showMenu}/></div>
            </div>
        );
    }
}

export default Header;
