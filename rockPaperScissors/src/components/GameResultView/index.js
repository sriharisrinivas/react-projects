import GameContext from '../../Context/GameContext'

import {
  GameContainerEl,
  ChoiceCardImage,
  ResultMessage,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {onPlayAgainClicked} = props

  const onClickPlayButton = () => {
    onPlayAgainClicked()
  }
  return (
    <GameContext.Consumer>
      {value => {
        const {
          selectedData,
          randomData,
          onIncrementScore,
          onDecrementScore,
        } = value
        let resultMsg
        const randomChoicesList = ['rock', 'paper', 'scissors']
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
            <PlayAgainButton type="button" onClick={onClickPlayButton}>
              PLAY AGAIN
            </PlayAgainButton>
          </>
        )
      }}
    </GameContext.Consumer>
  )
}
export default GameResultView
