import React, { Component } from 'react';
import img from './img.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state= {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/Articles.json')
    .then((Response) => 
      Response.json())
    .then((result) => {
      var data = result['data']['children'];
      this.setState({data: data})
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
      <div>
       {
        this.state.data.map((item, i) =>
          <li>{item.data.author}</li>
        )
      }
      </div>
      </div>
      );
  }
}

export default App;
