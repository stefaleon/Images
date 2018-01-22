console.log('The file "main.js" is also auto run by Meteor because it is inside the "client" folder');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Ohai from the App component!
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
