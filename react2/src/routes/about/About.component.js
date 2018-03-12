import React, {PureComponent} from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Section from '../../components/Section/Section'
import './About.component.css'

class About extends PureComponent {

    render() {

        return (
            <div className="About">
                <Header text="text w headerze"/>
                <Section>
                    <p>o mnię</p>
                </Section>
                <Footer footerHeader="Kamila Walkowiak 9.03.2018" text=" to jest text w footerze"/>
            </div>
        );
    }
}

export default About;
