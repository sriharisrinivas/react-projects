import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(props.children)

  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
