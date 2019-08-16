import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export const doIncrement = (prevState) => ({
  counter: prevState.counter + 1
});

export const doDecrement = (prevState) => ({
  counter: prevState.counter - 1
});


class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      asyncCounters: null,
      fetchError: null
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  componentDidMount() {
    axios.get('http://mydomain/counter')
      .then(response => this.setState({ asyncCounters: response.data }))
      .catch(error => this.setState({ fetchError: error.message }));
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>My Counter</h1>
        <Counter counter={counter} />

        <button
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}


export const Counter = ({ counter }) => 
  <p>{counter}</p>


export default App;
