import React, {PureComponent} from 'react';
import ListElement from './ListElement'


class ListVIew extends PureComponent {

    render() {
        console.log(this.props.items);
        return (
            <div>
                <ul>
                    {this.props.items.map(item =>
                        <ListElement key={item.Team_name} item={item}/>
                    )}

                </ul>
            </div>
        );
    }
}

export default ListVIew;
