import GameContext from '../../Context/GameContext'
import {Button, ChoiceCard} from './styledComponents'

const ChoiceItem = props => {
  const {eachChoiceDetails, togglePage} = props

  return (
    <GameContext.Consumer>
      {value => {
        const {choiceItemClicked, updateScore} = value
        const itemClicked = () => {
          choiceItemClicked(eachChoiceDetails)
          togglePage()
          updateScore()
        }

        return (
          <Button
            type="button"
            data-testid={`${eachChoiceDetails.id.toLowerCase()}Button`}
            onClick={itemClicked}
          >
            <ChoiceCard
              src={eachChoiceDetails.image}
              className="choice-card"
              alt={eachChoiceDetails.id}
            />
          </Button>
        )
      }}
    </GameContext.Consumer>
  )
}

export default ChoiceItem
