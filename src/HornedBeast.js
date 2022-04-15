import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }

  handleImageClick = () => {
    this.setState({
      votes: this.state.votes + 1
    });
    this.props.showBeastHandler(this.props.name, this.props.imageUrl,this.props.description);
  }

  render() {
    return (
        <Card>
          <Card.Header>💖 {this.state.votes} votes</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <img
              onClick={this.handleImageClick}
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.description}
            />
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default HornedBeast;