import React, {PureComponent} from 'react';
import './Section.css'
import PropTypes from 'prop-types';
import BottomSection from '../../components/BottomSection/BottomSection';

class Section extends PureComponent {

    static propTypes = {
      visability: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        visability: false,
    };


    render() {
        return (
            <div className="Section">
                <section>{this.props.visability ? <BottomSection/> : ''} </section>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
