import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css'

const Footer = (props) => (
    <footer>{props.footerHeader}{props.text}{props.rights}</footer>
);

Footer.propTypes = {
    text: PropTypes.string.isRequired,
    rights: PropTypes.string
};

Footer.defaultProps = {
    text: "mój domyślny text w stoopeczce",
    rights: "Copywright"
};

export default Footer