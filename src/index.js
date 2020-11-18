import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

class App extends React.Component {

  state = {
    color: 'Purple'
  }

  onColorChange = e => {
    this.setState({
      color: e.target.value,
    })
  }

  render(){
    const styleObj = {
      background: this.state.color
    };
    return(
      <div className="container" style={styleObj}>
        <div className="card p-4">
          <h1 className="card title">Enter Color</h1>
          <input className="input-group my-2"
          onChange={this.onColorChange}
          value={this.state.color}
          type="text"
          />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

