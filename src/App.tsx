import React from 'react';
import { ScrollContainer } from './components/ScrollContainer/ScrollContainer';
import { ScrollSection } from './components/ScrollContainer/ScrollSection/ScrollSection';

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollSection style={{backgroundColor:"cadetblue"}}>hey!</ScrollSection>
        <ScrollSection style={{backgroundColor:"cornflowerblue"}}>hello!</ScrollSection>
        <ScrollSection style={{backgroundColor:"seagreen"}}>sup!</ScrollSection>
      </ScrollContainer>
    </div>
  );
}

export default App;
