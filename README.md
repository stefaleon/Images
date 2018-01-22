# Images
* React introductory app

&nbsp;
## 00 Initial

* Setup a dev folder with Meteor.

```
C:\Code> meteor create images
```
```
C:\Code> cd MeteorDefault
```
```
C:\Code\images> meteor
[[[[[ C:\Code\MeteorDefault ]]]]]

=> Started proxy.
=> Started MongoDB.
=> Started your app.

=> App running at: http://localhost:3000/
   Type Control-C twice to stop.
```

* Remove the default autogenerated by Meteor *client* and *server* directories.

* Install the *React* dependency.
```
$ npm install --save react
```

&nbsp;
## 01 display static content

* Add the *client* folder and *main.html*.

* Add *test.js* inside *client*. It is automatically run by Meteor.


&nbsp;
## 02 render a component

* Add *main.js* inside *client*.  

* Import *React* and add the *App* component.

* Install *react-dom*, import it and render *App*. Use *Meteor.startup* in order to have the render request run after page has finished loading.  

```
$ npm install --save react-dom
```

*main.js*
```
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
```

&nbsp;
## 03 Nest the image_list component

* Add the *Components* folder and the *image_list.js* file.

* Nest the *ImageList* component into *App*.


&nbsp;
## 04 image_detail

* Add the *image_detail.js* file.

* Render *ImageDetail* components in the *ImageList*.



&nbsp;
## 05 Pass props and render mapped data

* Add an array of images and ender its mapping to the *ImageList*.

* The mapping function is returning *ImageDetail* components while passing image objects as props to them.
