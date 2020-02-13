import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import './styles.scss';

const INITIAL_STATE = {
  count: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const toDoReducer = (state = INITIAL_STATE, action) => {
  const type = action.type;

  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  } else if (type === RESET) {
    return {
      count: 0,
    };
  } else if (type === DECREMENT) {
    if (state.count) {
      return {
        count: state.count - 1,
      };
    }
  }

  return state;
};

const incrementValue = () => ({
  type: INCREMENT,
});

const decrementValue = () => ({
  type: DECREMENT,
});

const resetCounter = () => ({
  type: RESET,
});

const store = createStore(toDoReducer);

class Counter extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  increment: incrementValue,
  decrement: decrementValue,
  reset: resetCounter,
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
