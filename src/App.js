
import './App.css';
import {Welcome} from './components/Welcome';
import { Component } from 'react';
import Greet from './components/Greet';


class App extends Component
{
  render()
  {
    console.log('inside render of app');
    return(
      <div className="App">
        
        <Welcome/>
        <hr/>
        <Greet/>
      </div>
    );
  }
}

export default App;
