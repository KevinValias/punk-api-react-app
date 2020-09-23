import React, {Component} from 'react';
import LikeBtn from './LikeBtn';
import DisLikeBtn from './DisLikeBtn'

class BeerList extends Component {
    render() {
        return(
            <div>
                <h2>
                    ~~~{this.props.info.name}~~~
                </h2>
                <img src={this.props.info.image_url}/>
                <p>
                    {this.props.info.brewers_tips}
                </p>
                < LikeBtn />
                < DisLikeBtn />
                <p>-------------------------------------------------------------------------------------------------------------------</p>
            </div>
        )
    }
}

export default BeerList;