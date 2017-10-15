import React, { Component } from 'react';
import img from './photos/img.png';
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
      for (var i = 0; i < data.length; i++) {
        if(!data[i].data.preview){
          data[i].data.preview = {images:[{source: {url: "http://fabwriting.com/wp-content/uploads/2011/11/writing.jpg"}}]};
        }
        if(data[i].data.selftext === "") {
          data[i].data.selftext = "No description provided."
        }
      }
      this.setState({data: data})
      console.log(data)
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
          <div className="container" key={i}>
          <div className="media">
          <div className="media-left">
          <img src={item.data.preview.images[0].source.url} className="media-object" alt="describing the title" style={{width: "60px"}} /><br /><br />
          <span><strong>Title:</strong> </span><span style={{color: "#800000"}}>{item.data.title}</span>
          </div>
          <div className="media-body">
          <span className="media-heading"><strong>Author:</strong></span> <i style={{color: "#800000"}}>{item.data.author}</i><br />
          <span className="media-heading"><strong>Description:</strong></span> <i style={{color: "#DB7093"}}>{item.data.selftext}</i><br />
          <span><strong>Score:</strong> </span><span style={{color: "#800000"}}>{item.data.score}</span><br />
          <a href={item.data.url}><strong>Read the article <span className="glyphicon glyphicon-hand-right"></span></strong></a>
          </div>
          </div>
          <hr />
          </div>

        )
      }
      </div>
      </div>
      );
  }
}

export default App;
