import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import DatePicker from './components/DatePicker';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Route exact path='/' component = {Home} />
      <Route path='/date-picker' component = {DatePicker} />
      <Route path='/contact' component = {Contact} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
