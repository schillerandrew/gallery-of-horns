import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
      {this.props.data.map(beast => {
          return (
            <HornedBeast
              beastName={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          )
        })
      }
      </main>
    )
  }
}

export default Main;