import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdLocationOn, MdBusinessCenter} from 'react-icons/md'
import {BsStarFill} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemsRoute extends Component {
  state = {
    jobDetails: {},
    apiJobItemStatus: apiStatusConstants.initial,
    similarJobDetails: [],
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({apiJobItemStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const jobItemData = await response.json()
      const jobDetails = jobItemData.job_details
      console.log(jobDetails)
      const similarJobDetails = jobItemData.similar_jobs

      const updatedJobDetails = {
        companyLogoUrl: jobDetails.company_logo_url,
        companyWebsiteUrl: jobDetails.company_website_url,
        jobDescription: jobDetails.job_description,
        employmentType: jobDetails.employment_type,
        id: jobDetails.id,
        title: jobDetails.title,
        location: jobDetails.location,
        packagePerAnnum: jobDetails.package_per_annum,
        rating: jobDetails.rating,
        skills: jobDetails.skills.map(eachSkill => ({
          name: eachSkill.name,
          imageUrl: eachSkill.image_url,
        })),
        lifeAtCompany: {
          description: jobDetails.life_at_company.description,
          imageUrl: jobDetails.life_at_company.image_url,
        },
      }

      const updatedSimilarJobDetails = similarJobDetails.map(
        eachSimilarJobData => ({
          companyLogoUrl: eachSimilarJobData.company_logo_url,
          jobDescription: eachSimilarJobData.job_description,
          employmentType: eachSimilarJobData.employment_type,
          id: eachSimilarJobData.id,
          location: eachSimilarJobData.location,
          rating: eachSimilarJobData.rating,
          title: eachSimilarJobData.title,
        }),
      )

      this.setState({
        jobDetails: updatedJobDetails,
        similarJobDetails: updatedSimilarJobDetails,
        apiJobItemStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiJobItemStatus: apiStatusConstants.failure})
    }
  }

  renderJobDetails = () => {
    const {jobDetails, similarJobDetails} = this.state
    const {
      companyLogoUrl,
      location,
      rating,
      packagePerAnnum,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      skills,
      title,
    } = jobDetails
    return (
      <>
        <li className="job-item-card-container">
          <div className="job-item-about-container">
            <div className="job-item-image-container">
              <img
                src={companyLogoUrl}
                alt="job details company logo"
                className="job-item-company-logo"
              />
            </div>
            <div className="job-item-title-and-rating-container">
              <h1 className="job-item-title">{title}</h1>
              <div className="job-item-star-and-rating-container">
                <BsStarFill className="job-item-star" />
                <p className="job-item-rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="job-item-location-salary-container">
            <div className="job-item-location-type-of-emp-card">
              <MdLocationOn />
              <p className="job-item-details">{location}</p>
              <MdBusinessCenter />
              <p className="job-item-details">{employmentType}</p>
            </div>
            <p className="job-item-ctc">{packagePerAnnum}</p>
          </div>
          <hr className="job-item-horizontal-line" />
          <div className="description-and-website-link">
            <h1 className="job-item-sub-heading">Description</h1>
            <a href={companyWebsiteUrl} className="visit-link">
              Visit
            </a>
          </div>
          <p className="job-item-description">{jobDescription}</p>
          <h1 className="job-item-sub-heading">Skills</h1>
          <div className="skills-container">
            {skills.map(eachSkill => (
              <div className="skill-container" key={eachSkill.name}>
                <img
                  src={eachSkill.imageUrl}
                  className="skill-logo"
                  alt={eachSkill.name}
                />
                <p className="skill-name">{eachSkill.name}</p>
              </div>
            ))}
          </div>
          <h1 className="job-item-sub-heading">Life at Company</h1>
          <div className="life-at-company-container">
            <p>{lifeAtCompany.description}</p>
            <img src={lifeAtCompany.imageUrl} alt="life at company" />
          </div>
        </li>
        <div className="align">
          <h1 className="job-item-sub-heading">Similar Jobs</h1>
        </div>
        <div className="similar-jobs-container">
          {similarJobDetails.map(eachSimilarJob => (
            <div className="similar-job-card-container" key={eachSimilarJob.id}>
              <div className="about-container">
                <div className="similar-job-image-container">
                  <img
                    src={eachSimilarJob.companyLogoUrl}
                    alt="similar job company logo"
                    className="company-logo"
                  />
                </div>
                <div className="title-and-rating-container">
                  <h1 className="title">{eachSimilarJob.title}</h1>
                  <div className="star-and-rating-container">
                    <BsStarFill className="star" />
                    <p className="rating">{eachSimilarJob.rating}</p>
                  </div>
                </div>
              </div>
              <div className="location-salary-container">
                <div className="location-type-of-emp-card">
                  <MdLocationOn />
                  <p className="details">{eachSimilarJob.location}</p>
                  <MdBusinessCenter />
                  <p className="details">{eachSimilarJob.employmentType}</p>
                </div>
                <p className="ctc">{eachSimilarJob.packagePerAnnum}</p>
              </div>
              <hr className="job-horizontal-line" />
              <h1 className="description-heading">Description</h1>
              <p className="description">{eachSimilarJob.jobDescription}</p>
            </div>
          ))}
        </div>
      </>
    )
  }

  renderLoadingViewInJobItemsRoute = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderApiStatusView = () => {
    const {apiJobItemStatus} = this.state
    switch (apiJobItemStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetails()
      case apiJobItemStatus.failure:
        return null
      case apiJobItemStatus.inProgress:
        return this.renderLoadingViewInJobItemsRoute()
      default:
        return null
    }
  }

  render() {
    const {jobDetails, similarJobDetails, apiJobItemStatus} = this.state

    return (
      <>
        <Header />
        <ul className="job-item-container">{this.renderApiStatusView()}</ul>
      </>
    )
  }
}

export default JobItemsRoute
