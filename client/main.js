console.log('The file "main.js" is also auto run by Meteor because it is inside the "client" folder');

import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      Ohai from the App component!
      <h3>Image List</h3>
      <ImageList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
