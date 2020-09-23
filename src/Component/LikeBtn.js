import React, {Component} from 'react';

class LikeBtn extends Component {
  state = {
    likes: 0
  };

  render() {
      return <button onClick={this.addLike}> YAS Queen: {this.state.likes} </button>
  }

  addLike = () => {
      let newCount = this.state.likes + 1;
        this.setState({
        likes: newCount
      });
  };
}



export default LikeBtn;