import './index.css'

const TabListItem = props => {
  const {tabItem, setActiveTabId, isActive} = props

  const onClickTab = () => {
    setActiveTabId(tabItem.tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabListItem
