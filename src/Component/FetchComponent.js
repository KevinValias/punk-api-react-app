import React, { Component } from 'react';
import BeerList from './BeerList';
import axios from 'axios'
class FetchComponent extends Component {
    state = {
        beers: []
    }
    FetchComponent = () => {
        return axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                const beers2 = res.data
                this.setState({ beers: beers2 });
                })
            }

    render() {
        return(
           <div>
             <button onClick={this.FetchComponent}>List beers</button>
             {this.state.beers.map((beer) => {return <BeerList key={beer.id} info={beer}/>;
              })}
            </div>
        )
     }
}

export default FetchComponent;

// Functional Components
// const FetchComponent = () => {
//          fetch('https://api.punkapi.com/v2/beers')
//              .then(response => response.json())
//              .then((data) => {
//                  console.log(data)
//                  this.setState({beers: data})
//                 })

// return (
//     <div>
//                  <button onClick={this.FetchComponent}>List beers</button>

//     </div>
// )
// }

