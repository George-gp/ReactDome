import React from 'react';
import './App.css';
// import List from './day01/list'
import List from './day02/List'
import Clock from './day02/Clock'

function App() {
  let msg = "hello word"
  return (
    <div className="App">
      {/* {msg}
      <List/>
      <List a='haha' b={3} c={[1,2,3]}></List> */}
      <List/>
      <Clock/>
    </div>
  );
}

export default App;
