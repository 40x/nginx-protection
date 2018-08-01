import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    file: '',
    api: ''
  };

  selectAPI = api => {
    this.setState({ api: api });
  };

  getFile = e => {
    e.preventDefault();
    this.setState({ file: e.target.files[0] });
  };

  upload = () => {
    axios.post(`/api/${this.state.api}`, this.state.file);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Upload Test</h1>
        </header>
        <div className="App-intro">
          <div className="question">
            <div>Which API do you want to hit?</div>
            <button
              className={this.state.api === 'unlimited' ? 'active' : ''}
              onClick={() => this.selectAPI('unlimited')}
            >
              Unlimited
            </button>
            <button
              className={this.state.api === 'limited' ? 'active' : ''}
              onClick={() => this.selectAPI('limited')}
            >
              10MB limit
            </button>
          </div>

          <div className="question">
            <div>What do you wish to upload?</div>
            <input type="file" onChange={this.getFile} />
          </div>

          {this.state.file &&
            this.state.api && <button onClick={this.upload}>Upload!</button>}
        </div>
      </div>
    );
  }
}

export default App;
