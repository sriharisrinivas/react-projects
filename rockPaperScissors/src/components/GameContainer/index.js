import {Component} from 'react'
import GameContext from '../../Context/GameContext'
import ChoiceItem from '../ChoiceItem'
import {
  GameContainerEl,
  ChoiceCardImage,
  ResultMessage,
  PlayAgainButton,
} from './styledComponents'

class GameContainer extends Component {
  state = {
    showResultPage: false,
  }

  togglePage = () => {
    this.setState({showResultPage: true})
  }

  onPlayAgainClicked = () => {
    this.setState({showResultPage: false})
  }

  renderGamePage = () => {
    const {choicesList} = this.props

    return (
      <GameContainerEl>
        {choicesList.map(eachItem => (
          <ChoiceItem
            key={eachItem.id}
            eachChoiceDetails={eachItem}
            togglePage={this.togglePage}
          />
        ))}
      </GameContainerEl>
    )
  }

  gameResultView = () => (
    <GameContext.Consumer>
      {value => {
        const {selectedData, randomData, updateScore} = value
        let resultMsg

        if (selectedData.id === randomData.id) {
          resultMsg = 'IT IS DRAW'
        } else if (
          selectedData.id === 'SCISSORS' &&
          randomData.id === 'PAPER'
        ) {
          resultMsg = 'YOU WON'
        } else if (selectedData.id === 'ROCK' && randomData.id === 'SCISSORS') {
          resultMsg = 'YOU WON'
        } else if (selectedData.id === 'PAPER' && randomData.id === 'ROCK') {
          resultMsg = 'YOU WON'
        } else {
          resultMsg = 'YOU LOSE'
        }

        return (
          <>
            <GameContainerEl>
              <ChoiceCardImage src={selectedData.image} alt="your choice" />
              <ChoiceCardImage src={randomData.image} alt="opponent choice" />
            </GameContainerEl>
            <ResultMessage>{resultMsg}</ResultMessage>
            <PlayAgainButton onClick={this.onPlayAgainClicked}>
              PLAY AGAIN
            </PlayAgainButton>
          </>
        )
      }}
    </GameContext.Consumer>
  )

  render() {
    const {showResultPage} = this.state
    return <>{showResultPage ? this.gameResultView() : this.renderGamePage()}</>
  }
}

export default GameContainer
