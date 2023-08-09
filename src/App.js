import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'

import './App.css'

const tabsList = [
  {tabId: 'PROFILE', displayText: 'profile'},
  {tabId: 'PROJECT', displayText: 'project'},
  {tabId: 'POST', displayText: 'post'},
  {tabId: 'SETTING', displayText: 'setting'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'PROFILE',
    imageURL:
      'https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1060&t=st=1691516293~exp=1691516893~hmac=956280a7a52ce308a48c0a2b900427902c2febe410e61829195e40b6b4ac01b3',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'PROFILE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'PROFILE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'PROJECT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: 'Happy Meals',
    description: 'Discover the best foods in over 1,000 restaurants.',
  },
  {
    projectId: 4,
    category: 'PROJECT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'PROJECT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'POST',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'POST',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'Design',
    description:
      'A website to showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 8,
    category: 'POST',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'SETTING',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'SETTING',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
  {
    projectId: 11,
    category: 'SETTING',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <div className="color-container">
          {' '}
          <img
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1691510225~exp=1691510825~hmac=8ccf744f25a27949510513250e48413e935fd73725b5d35464c583c4e6b49120"
            className="profil-pics"
            alt="img"
          />
        </div>
        <div className="header-container">
          <div className="profile-center">
            <h1 className="heading-image">Rose Danson</h1>
            <p>UL/UX DESGIN,USA </p>
          </div>
          <ul className="tabs-container">
            {tabsList.map(tabDetails => (
              <TabItem
                key={tabDetails.tabId}
                tabDetails={tabDetails}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === tabDetails.tabId}
              />
            ))}
          </ul>
        </div>

        <div className="bottom-container-element">
          <div>
            <ul className="project-list-container">
              {filteredProjects.map(projectDetails => (
                <ProjectItem
                  key={projectDetails.projectId}
                  projectDetails={projectDetails}
                />
              ))}
            </ul>
          </div>
          <div className="about-item-container">
            <h1>ABOUT</h1>
            <hr className="hr-line-1" />
            <p>
              Its a long established fact that reader will get distracted by
              readable content of the page while looking at it and its layout
            </p>
            <p>Date Of Birth:6 June 1999</p>
            <p>language:English,French,German </p>
            <p>Place:USA</p>
            <p>Hobbies:Music,reading,Journey</p>
            <h1>Contact</h1>
            <hr className="hr-line-1" />
            <p>Phone:+1234578990</p>
            <p>Mail:Example@Example.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
