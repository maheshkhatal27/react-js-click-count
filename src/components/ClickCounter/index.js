import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickingCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="count-text">
          The button has been clicked
          <span className="count"> {count}</span> times
        </h1>
        <p className="information">Click the button to increase the count!</p>
        <button className="button" onClick={this.clickingCount}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
