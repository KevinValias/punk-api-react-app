import React, {Component} from 'react';

class BeerList extends Component {
    render() {
        return(
            <div>
                <p>
                    {this.props.info.name}
                </p>
                <p>
                    {this.props.info.brewers_tips}
                </p>
            </div>
        )
    }
}

export default BeerList;