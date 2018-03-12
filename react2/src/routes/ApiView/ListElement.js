import React, {PureComponent} from 'react';


class ListElement extends PureComponent {

    render() {
        return (
            <li>
                {this.props.item.Team_name}
            </li>
        );
    }
}

export default ListElement;
