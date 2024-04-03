import React from 'react';
import Test from './Test';

function App() {
  let data = {name: 'John', age: 30};
  return (
    <Test {...data} />
  );
}

export default App;
