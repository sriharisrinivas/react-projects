import {Component} from 'react'

import AppItem from '../AppItem'
import TabItem from '../TabItem'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en_IN&gl=US',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.facebook.orca&hl=en_IN&gl=US',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en_IN&gl=US',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.twitter.android&hl=en_IN&gl=US',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.pinterest&hl=en_IN&gl=US',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.tencent.mm&hl=en_IN&gl=US',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN&gl=US',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en_IN&gl=US',
  },
  {
    appId: 10,
    appName: 'BGMI',
    imageUrl:
      'https://techburner.in/wp-content/uploads/2021/06/bgmi-featured-.jpg',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en_IN&gl=US',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad&hl=en_IN&gl=US',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.crazyplex.superchefcooking&hl=en_IN&gl=US',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.rovio.baba&hl=en_IN&gl=US',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.fingersoft.hcr2&hl=en_IN&gl=US',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun&hl=en_IN&gl=US',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.ansangha.drdriving&hl=en_IN&gl=US',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.sonypicturestelevision.smurfslostvillage&hl=en_IN&gl=US',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.kevinbradford.games.thirdgrade&hl=en_IN&gl=US',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtomfree&hl=en_IN&gl=US',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.nis.app&hl=en_IN&gl=US',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com&hl=en_IN&gl=US',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.google.android.apps.magazines&hl=en_IN&gl=US',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=flipboard.app&hl=en_IN&gl=US',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=jp.gocro.smartnews.android&hl=en_IN&gl=US',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&hl=en_IN&gl=US',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone&hl=en_IN&gl=US',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/search?q=daily%20wire&c=apps&hl=en_IN&gl=US',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=mnn.Android&hl=en_IN&gl=US',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.particlenews.newsbreak&hl=en_IN&gl=US',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.dominospizza&hl=en_IN&gl=US',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=order.food.online.delivery.offers.deals&hl=en_IN&gl=US',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.instacart.client&hl=en_IN&gl=US',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.saucey&hl=en_IN&gl=US',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.waitrapp&hl=en_IN&gl=US',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.grubhub.android&hl=en_IN&gl=US',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=com.mercato.android.client&hl=en_IN&gl=US',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    downloadUrl:
      'https://play.google.com/store/apps/details?id=mobile.appmcY3xFe6m6&hl=en_IN&gl=US',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-store-container">
        <div className="app-store">
          <h1 className="heading">App Store</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppItem key={eachApp.appId} appDetails={eachApp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppStore
