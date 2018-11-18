import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
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
    onIncrement: () => dispatch(actionCreators.increment()),
    onDecrement: () => dispatch(actionCreators.decrement()),
    onAddition: () => dispatch(actionCreators.add(5)),
    onSubtraction: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreators.storeResultAsync(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
