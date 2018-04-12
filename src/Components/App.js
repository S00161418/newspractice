import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      news1:{
        type: 'top-headlines',
        query:'sources=bbc-news'
      },
      news2:{
        type:'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3:{
        type:'top-headlines',
        query: 'sources=rte'
      },
      news4:{
        type:'top-headlines',
        query: 'sources=axios'
      }
    };
  }
  render() {
    return (
     <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center">Feed</a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
        <News news={this.state.news1}/> 
        <News news={this.state.news3}/>
        </div>
        <div className="col s4">
          <Sidenews news={this.state.news4}/>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
