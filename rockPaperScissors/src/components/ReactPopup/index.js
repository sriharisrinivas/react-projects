import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import {
  ModalContainer,
  CloseButton,
  RulesButton,
  RulesImage,
} from './styledComponents'

const ReactPopUp = () => (
  <>
    <Popup
      modal
      trigger={
        <RulesButton type="button" className="rules-button">
          Rules
        </RulesButton>
      }
      className="popup-content"
    >
      {close => (
        <ModalContainer>
          <CloseButton
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  </>
)

export default ReactPopUp
