import React, { Component } from 'react';
import img from './img.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      articles: []
    }
  }

  componentDidMount() {
    
    var that = this;
    fetch('/articles')
    .then(function(articles){
      that.setState({articles})
      console.log(that)
    })
    .catch(function(error){
      console.log(error)
    });
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={img} className="App-logo" alt="logo" />
      <h1 className="App-title">Articles Website</h1>
      </header>
      <p className="App-intro">
      need edit
      </p>
      
      </div>
      );
  }
}

export default App;
