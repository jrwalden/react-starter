import React from 'react';
import ReactDOM from 'react-dom';

import ExampleComponent from './components/exampleComponent/ExampleComponent';

const App = () => {
  return (
    <ExampleComponent>
      <h1>React starter</h1>
      <p>Boilerplate for React</p>
    </ExampleComponent>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
