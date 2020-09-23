import React, {Component} from 'react';

class DisLikeBtn extends Component {
  state = {
    dislikes: 0
  };

  render() {
      return <button onClick={this.minusLike}> Nah Bruh: {this.state.dislikes} </button>
  }

  minusLike = () => {
      let newCount = this.state.dislikes - 1;
        this.setState({
        dislikes: newCount
      });
  };
}

export default DisLikeBtn;