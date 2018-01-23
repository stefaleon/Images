console.log('The file "main.js" is also auto run by Meteor because it is inside the "client" folder');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    const url = 'https://api.imgur.com/3/gallery/hot/viral/0';
    axios.get(url)
    .then(response => this.setState({ images: response.data.data }))
    .catch((error) => {
          if(error.response) {
            console.log("Response Error!", error.response.status);
          } else if (error.request) {
            console.log("Request Error!", error.request.status);
          }
          console.log("Error!", error.message);
        });
  }

  render() {
    console.log(this.state.images);
    return (
      <div className="app">
        <h2>Images</h2>
        <h4>A Photo App with React on Meteor</h4>
        <ImageList imagesprop={this.state.images} />
        <footer>maimousAppz 2018</footer>
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
