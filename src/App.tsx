import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from '@atlaskit/select';

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
];

function App() {
  return (
    <div className="App">
      <Select
        className="multi-select"
        classNamePrefix="react-select"
        options={[]}
        isMulti
        isSearchable={false}
        placeholder="Choose a city"
      />
    </div>
  );
}

export default App;
