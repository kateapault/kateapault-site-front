import React from 'react';
// import logo from './logo.svg';
import './index.css';

import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'

class App extends React.Component {
  state = {
    page:'Home',
  }

  changePage = newPage => {
    this.setState({
      page: newPage
    })
  }

  render(){
    return (
      <div className="App">
        <Header currentPage={this.state.page} changePage={this.changePage}/>
        <Main page={this.state.page}/>
        <Footer currentPage={this.state.page}/>
      </div>
    )
  };
}

export default App;
