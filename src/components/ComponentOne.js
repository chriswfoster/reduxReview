import React, { Component } from "react"
import { connect } from "react-redux"
import { addNumbers } from "../redux/reducer"

class ComponentOne extends Component {
  constructor() {
    super()
    this.state = {
      firstNumber: 0,
      secondNumber: 0
    }
  }

  onChangeOne(val) {
    this.setState({ firstNumber: parseInt(val) })
  }
  onChangeTwo(val) {
    this.setState({ secondNumber: parseInt(val) })
  }

  render() {
    console.log(this.state)
    const { addNumbers } = this.props
    return (
      <div>
        <input
          placeholder="First Number"
          onChange={e => this.onChangeOne(e.target.value)}
        />
        <input
          placeholder="Second Number"
          onChange={e => this.onChangeTwo(e.target.value)}
        />
        <button
          onClick={() =>
            addNumbers(this.state.firstNumber, this.state.secondNumber)
          }
        >
          GO!
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state // do this to pass the state of the parent component down as props. Mapping that state into props.

export default connect(mapStateToProps, { addNumbers })(ComponentOne) //connect to redux store, give us parts of state, and map it to this component specifically.
