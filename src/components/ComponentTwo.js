import React, { Component } from "react"
import { connect } from "react-redux"

class ComponentTwo extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>The sum is:{this.props.numbersAdded}</p>
      </div>
    )
  }
}
const mapStateToProps = state => state // do this to pass the state of the parent component down as props. Mapping that state into props.
export default connect(mapStateToProps)(ComponentTwo)
