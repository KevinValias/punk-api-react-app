import React, { Component } from 'react';
import BeerList from './BeerList';
class FetchComponent extends Component {
    
    state = {
        beers: []
    }

    FetchComponent = () => {
        
             fetch('https://api.punkapi.com/v2/beers')
             .then(response => response.json())
             .then((data) => {
                 console.log(data);
                 this.setState({beers:data})
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

export default FetchComponent;

// how to fetch using some CLASSIES //

