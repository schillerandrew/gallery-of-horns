import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js'
import Footer from './Footer.js';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      // name: ''
    };
  }

  hideBeastHandler = () => {
    this.setState({
      showModal: false
    });
  }

  showBeastHandler = (name, imageUrl, description) => {
    this.setState({
      showModal: true,
      name: name,
      url: imageUrl,
      desc: description
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main
          showBeastHandler={this.showBeastHandler}
          data={data}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          hideBeastHandler={this.hideBeastHandler}
          name={this.state.name}
          url={this.state.url}
          description={this.state.desc}
        />
        <Footer />
      </>
    )
  }
}

export default App;