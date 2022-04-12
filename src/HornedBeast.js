import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleVotes = () => {
    this.setState( {
      votes: this.state.votes + 1
    })
  }

  render() {
    return (
      <>
        <h2>{this.props.beastName} <small>(💖 {this.state.votes} votes)</small></h2>
        <img
          onClick={this.handleVotes}
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.description}
        />
        <p>{this.props.description}</p>
      </>
    )
  }
}



export default HornedBeast;