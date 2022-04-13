import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {
    return (
      <>
        <Card>
          <Card.Header>💖 {this.state.votes} votes</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.beastName}</Card.Title>
            <img
              onClick={this.handleVotes}
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.description}
            />
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
        {/* <h2>{this.props.beastName} <small>(💖 {this.state.votes} votes)</small></h2>
        <img
          onClick={this.handleVotes}
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.description}
        />
        <p>{this.props.description}</p> */}
      </>
    )
  }
}



export default HornedBeast;