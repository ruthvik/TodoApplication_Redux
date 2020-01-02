import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { increment, decrement } from '../Actions/actions';
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  incrementIfOdd =() => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    console.log(this.props)
    console.log(value)
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}
const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
});

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);