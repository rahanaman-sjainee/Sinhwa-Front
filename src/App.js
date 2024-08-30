import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import React from "react";
import Library from "./test/Library";

import Book from "./test/Book";
import Login from "./Auth/Login";
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return(
        <div className="App">
          <Routes>
            <Route path = "/" element={<Library/>}></Route>
            <Route path="/book" element={<Book/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </div>
    )
  }

  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  componentWillUnmount() {
  }
}

export default App;
