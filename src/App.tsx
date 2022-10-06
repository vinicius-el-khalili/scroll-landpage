import React from 'react';
import { ScrollContainer } from './components/ScrollContainer/ScrollContainer';

function App() {
  return (
    <div className="App">
      <ScrollContainer style={{backgroundColor:"cadetblue"}}>Hello</ScrollContainer>
      <ScrollContainer style={{backgroundColor:"coral"}}>This is very...</ScrollContainer>
      <ScrollContainer style={{backgroundColor:"blueviolet"}}>...Awesome</ScrollContainer>
    </div>
  );
}

export default App;
