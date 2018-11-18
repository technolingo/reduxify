import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActionCreators from '../../store/actions/counter';
import * as resultActionCreators from '../../store/actions/result';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counterValue} />
        <CounterControl label='Increment' clicked={this.props.onIncrement} />
        <CounterControl label='Decrement' clicked={this.props.onDecrement} />
        <CounterControl label='Add 5' clicked={this.props.onAddition} />
        <CounterControl label='Subtract 5' clicked={this.props.onSubtraction} />
        <hr />
        <button onClick={this.props.onStoreResult.bind(this, this.props.counterValue)} type='button'>Store Result</button>
        <ul>
          {this.props.storedResults.map(r => (
            <li key={r.id} onClick={this.props.onDeleteResult.bind(this, r.id)}>{r.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Redux state management
// Map the global Redux state to props on this component
const mapStateToProps = state => {
  return {
    counterValue: state.ctr.counter,
    storedResults: state.res.results
  };
};

// Map the dispatch actions to props to be called as event handlers
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(counterActionCreators.increment()),
    onDecrement: () => dispatch(counterActionCreators.decrement()),
    onAddition: () => dispatch(counterActionCreators.add(5)),
    onSubtraction: () => dispatch(counterActionCreators.subtract(5)),
    onStoreResult: (result) => dispatch(resultActionCreators.storeResultAsync(result)),
    onDeleteResult: (id) => dispatch(resultActionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
