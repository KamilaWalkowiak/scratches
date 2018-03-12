import React, {PureComponent} from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Section from '../../components/Section/Section'
import './Contact.component.css'

class Contact extends PureComponent {

    render() {
        return (
            <div className="Contact">
                <Header text="text w headerze"/>
                <Section>
                    <img src="http://www.instalacjebudowlane.pl/galeria/zdjecia/190613hager24.jpg" alt="kontakt"/>
                </Section>
                <Footer footerHeader="Kamila Walkowiak 9.03.2018" text=" to jest text w footerze"/>
            </div>
        );
    }
}

export default Contact;
