import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';
// import './common/css/app.sass'
import './common/css/app.styl'

import { Button } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        init
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
