import React from "react";
import { format } from "date-fns";
// The two above are importing npm packages in the node_modules folder....
import ExampleComponent from "./ExampleComponent";
// import ExampleComponent is not importing a package,  imprting something from project's file tree, to make available Example Component. 
import TestComponent from './TestComponent';
import { Test } from "mocha";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent /> 

      <TestComponent />

    </div>
  );
}

// Allowing other files to import things from the App.js file. 
export default App;
