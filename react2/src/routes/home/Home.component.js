import React, {PureComponent} from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Section from '../../components/Section/Section'
import './Home.component.css'

class Home extends PureComponent {

    render() {
        return (
            <div className="Home">
                <Header text="text w headerze"/>
                <Section visability={true}>
                    <img src="https://cdn.galleries-dev.smcloud.net/t/photos/gf-NPsW-wVTB-1Shm_kiedy-sadzimy-tulipany.jpg" alt="tulipany"/>
                </Section>
                <Footer footerHeader="Kamila Walkowiak 9.03.2018" text=" to jest text w footerze"/>
            </div>
        );
    }
}

export default Home;
