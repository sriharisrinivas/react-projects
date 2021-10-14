import {BsStarFill, BsSearch} from 'react-icons/bs'
import {MdLocationOn, MdBusinessCenter} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobsRoute extends Component {
  state = {
    apiProfileStatus: apiStatusConstants.initial,
    profileData: {},
    apiJobsStatus: apiStatusConstants.initial,
    jobsData: [],
    searchInput: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchProfile()
    this.fetchJobs()
  }

  fetchProfile = async () => {
    this.setState({apiProfileStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response1 = await fetch(apiUrl, options)
    if (response1.ok === true) {
      const data = await response1.json()
      const updatedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        apiProfileStatus: apiStatusConstants.success,
        profileData: updatedData,
      })
    } else {
      this.setState({apiProfileStatus: apiStatusConstants.failure})
    }
  }

  fetchJobs = async () => {
    this.setState({apiJobsStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response2 = await fetch(apiUrl, options)

    if (response2.ok === true) {
      const data2 = await response2.json()
      const {jobs} = data2
      const updatedData = jobs.map(eachJobData => ({
        companyLogoUrl: eachJobData.company_logo_url,
        jobDescription: eachJobData.job_description,
        employmentType: eachJobData.employment_type,
        id: eachJobData.id,
        location: eachJobData.location,
        packagePerAnnum: eachJobData.package_per_annum,
        rating: eachJobData.rating,
        title: eachJobData.title,
      }))
      console.log(updatedData)
      this.setState({
        apiJobsStatus: apiStatusConstants.success,
        jobsData: updatedData,
      })
    } else {
      this.setState({apiJobsStatus: apiStatusConstants.failure})
    }
  }

  renderJobsOnFailure = () => (
    <div className="jobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="failure-view"
        alt="failure view"
      />
    </div>
  )

  renderJobs = () => {
    const {jobsData} = this.state
    return (
      <div className="search-bar-and-content-container">
        <div className="search-and-button">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeInput}
          />
          <button
            type="button"
            testid="searchButton"
            onClick={this.onClickSearchButton}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <ul className="jobs-container">
          {jobsData.map(eachJobItem => (
            <Link to={`/jobs/${eachJobItem.id}`} className="nav-link">
              <li className="job-card-container" key={eachJobItem.id}>
                <div className="about-container">
                  <div className="image-container">
                    <img
                      src={eachJobItem.companyLogoUrl}
                      alt="company logo"
                      className="company-logo"
                    />
                  </div>
                  <div className="title-and-rating-container">
                    <h1 className="title">{eachJobItem.title}</h1>
                    <div className="star-and-rating-container">
                      <BsStarFill className="star" />
                      <p className="rating">{eachJobItem.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="location-salary-container">
                  <div className="location-type-of-emp-card">
                    <MdLocationOn />
                    <p className="details">{eachJobItem.location}</p>
                    <MdBusinessCenter />
                    <p className="details">{eachJobItem.employmentType}</p>
                  </div>
                  <p className="ctc">{eachJobItem.packagePerAnnum}</p>
                </div>
                <hr className="job-horizontal-line" />
                <h1 className="description-heading">Description</h1>
                <p className="description">{eachJobItem.jobDescription}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }

  renderApiStatusView = () => {
    const {apiJobsStatus} = this.state

    switch (apiJobsStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderJobs()
      case apiJobsStatus.failure:
        return this.renderJobsOnFailure()

      default:
        return null
    }
  }

  renderSalaryRangeContainer = () => (
    <ul className="salary-range-container">
      <h1 className="title">Salary Range</h1>
      {salaryRangesList.map(eachItem => (
        <li className="label-and-input-container" key={eachItem.salaryRangeId}>
          <input type="radio" id={eachItem.salaryRangeId} name="salary-range" />
          <label htmlFor={eachItem.salaryRangeId} className="label">
            {eachItem.label}
          </label>
          <br />
        </li>
      ))}
    </ul>
  )

  renderTypeOfEmploymentContainer = () => (
    <ul className="type-of-employment-container">
      <h1 className="title">Type of Employment</h1>
      {employmentTypesList.map(eachItem => (
        <li
          className="label-and-input-container"
          key={eachItem.employmentTypeId}
        >
          <input type="checkbox" id={eachItem.employmentTypeId} />
          <label htmlFor={eachItem.employmentTypeId} className="label">
            {eachItem.label}
          </label>
          <br />
        </li>
      ))}
    </ul>
  )

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileOnFailure = () => <h1>ghjgghjhjg</h1>

  renderProfileOnSuccess = () => {
    const {profileData} = this.state
    const {profileImageUrl, name, shortBio} = profileData

    return (
      <div className="profile-card">
        <img src={profileImageUrl} className="profile-pic" alt="profile pic" />
        <h3 className="profile-name">{name}</h3>
        <p className="designation">{shortBio}</p>
      </div>
    )
  }

  renderApiProfileView = () => {
    const {apiProfileStatus} = this.state

    switch (apiProfileStatus) {
      case apiStatusConstants.success:
        return this.renderProfileOnSuccess()
      case apiProfileStatus.failure:
        return this.renderProfileOnFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderOptions = () => (
    <div className="profile-type_of_employ_salary_container">
      {this.renderApiProfileView()}
      <hr className="horizontal-line" />

      {this.renderTypeOfEmploymentContainer()}

      <hr className="horizontal-line" />

      {this.renderSalaryRangeContainer()}
    </div>
  )

  render() {
    const {searchInput, apiProfileStatus} = this.state
    console.log(apiProfileStatus)
    return (
      <>
        <Header />
        <div className="job-route-container">
          {this.renderOptions()}
          {this.renderApiStatusView()}
        </div>
      </>
    )
  }
}

export default JobsRoute
