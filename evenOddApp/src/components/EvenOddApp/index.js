import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const randomNumber = Math.ceil(Math.random(0, 100) * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const typeOfNum = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="desc">Count is {typeOfNum}</p>
          <button type="button" onClick={this.increment} className="button">
            Increment
          </button>
          <p className="desc">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
