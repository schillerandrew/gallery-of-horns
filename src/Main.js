import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
      {this.props.data.map( beast => {
          return (
            <HornedBeast
              name={beast.title}
              imageUrl={beast.image_url}
              key={beast._id}
              description={beast.description}
              showBeastHandler={this.props.showBeastHandler}
            />
          )
        })
      }
      </main>
    )
  }
}

export default Main;