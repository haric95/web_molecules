// This functional component only mounts the AppContainer component to the Window.
// AppContainer component is where most of the logic is contained.

import React from 'react';
import './App.css';
import AppContainer from "./components/AppContainer"
// import ThreeD from "./components/ThreeD"



function App() {
  return (
    <AppContainer /> 
  );

}
export default App;