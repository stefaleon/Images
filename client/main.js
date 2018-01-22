console.log('The file "main.js" is also auto run by Meteor because it is inside the "client" folder');

import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div className="app">
      <h2>Images</h2>
      <h4>A Photo App with React on Meteor</h4>
      <ImageList />
      <footer>maimousAppz 2018</footer>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
