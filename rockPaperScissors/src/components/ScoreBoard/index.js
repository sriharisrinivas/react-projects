import GameContext from '../../Context/GameContext'
import {
  ScoreBoardContainer,
  ChoicesContainer,
  Choice,
  ScoreCard,
  ScoreHeading,
  Score,
} from './styledComponents'

const ScoreBoard = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value
      return (
        <ScoreBoardContainer>
          <ChoicesContainer>
            <Choice>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </Choice>
          </ChoicesContainer>
          <ScoreCard>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreBoardContainer>
      )
    }}
  </GameContext.Consumer>
)

export default ScoreBoard
