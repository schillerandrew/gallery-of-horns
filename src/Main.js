import React from 'react';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.data
    };
  }

  handleHornSelect = (event) => {
    event.preventDefault();
    if (Number.isInteger(event.target.value*1) === true) {
      let newData = this.props.data.filter(beast => beast.horns === event.target.value*1);
      this.setState({filteredData: newData});
    }
  }

  render() {
    return (
      <main>
        <Form>
          <Form.Select onChange={this.handleHornSelect}>
            <option>Choose your number of horns! (1, 2, 3, or 100)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form>
        {this.state.filteredData.map(beast => {
          return (
            <HornedBeast
              name={beast.title}
              imageUrl={beast.image_url}
              key={beast._id}
              description={beast.description}
              showBeastHandler={this.props.showBeastHandler}
            />
          );
          // if (this.state.numberOfHorns === 0) {
          //   return (
          //     <HornedBeast
          //       name={beast.title}
          //       imageUrl={beast.image_url}
          //       key={beast._id}
          //       description={beast.description}
          //       showBeastHandler={this.props.showBeastHandler}
          //     />
          //   );
          // } else if (beast.horns === 1 && this.state.numberOfHorns === 1) {
          //   return (
          //     <HornedBeast
          //       name={beast.title}
          //       imageUrl={beast.image_url}
          //       key={beast._id}
          //       description={beast.description}
          //       showBeastHandler={this.props.showBeastHandler}
          //     />
          //   );
          // } else if (beast.horns === 2 && this.state.numberOfHorns === 2) {
          //   return (
          //     <HornedBeast
          //       name={beast.title}
          //       imageUrl={beast.image_url}
          //       key={beast._id}
          //       description={beast.description}
          //       showBeastHandler={this.props.showBeastHandler}
          //     />
          //   );
          // } else if (beast.horns === 3 && this.state.numberOfHorns === 3) {
          //   return (
          //     <HornedBeast
          //       name={beast.title}
          //       imageUrl={beast.image_url}
          //       key={beast._id}
          //       description={beast.description}
          //       showBeastHandler={this.props.showBeastHandler}
          //     />
          //   );
          // } else if (beast.horns === 100 && this.state.numberOfHorns === 100) {
          //   return (
          //     <HornedBeast
          //       name={beast.title}
          //       imageUrl={beast.image_url}
          //       key={beast._id}
          //       description={beast.description}
          //       showBeastHandler={this.props.showBeastHandler}
          //     />
          //   );
        }
        )}
      </main>
    )
  }
}

export default Main;