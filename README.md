# Components

A component is an independent, reusable code block, which divides the UI into smaller pieces.  
We don’t really want to have thousands of lines of code together in one single file. Maintenance of the code gets more and more complex as the project gets bigger.

Components may accept props and return React elements.

### What is props

React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object, passed from parent component to child components.

### What is state

The state in React component is an observable object which controls the behaviour of the component.  
In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

## Class based components (Statefull)

Class Components are ES6 classes. They can include constructor, lifecycle methods, render() function and state(data) management.  
These are called Stateful components because state is part of the class React.Component which is extended by the component.

```javascript
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }

  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```

## Functional components (Stateless)

Functional components are javascript or ES6 functions.  
They are called stateless components as they do not inherit state by extending any class.

***Functional component can  __`useState`__ using React hooks***

```javascript
const Person = (props) => {
  return (
    <div>
      <h1>Hello Person</h1>
    </div>
  );
};
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
