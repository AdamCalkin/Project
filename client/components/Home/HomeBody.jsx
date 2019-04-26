import React from'react'

class HomeBody extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      clickStyle: {
        color: 'khaki'
        },
      fontStyle: {
        fontSize: '24px'
      }
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className="main" >

            <div className="heading_hw">
              Hello World! 
            </div>

            <p className="welcome_p"> 
              This is the beginning of my <a href="#">Blog</a> website home page.
            </p>
            
            <p className="welcome_p"> 
              This is still a Work In Process
            </p>
          
            <div className="heading_hw" style={this.state.fontStyle}>
              What are the best practices associated with using classes vs. ids?
            </div>

            <p className="welcome_p">
              This blog will show the best practices associated with using classes vs. ids.<br /><br />
              Click <a href="#" style={this.state.clickStyle}>Here</a> to view the blog post.
            </p>
          
          <div className="heading_hw">
            Reflection Notes
          </div>

          <p className="welcome_p">
            I will be showcasing my reflection notes from sprint 1,<br /> this will shown at the bottom of my <a href="#">Blog</a> page.
          </p>

          <div className="heading_hw">
            About Me     
          </div>
            
          <p className="welcome_p">
            My name is Adam Calkin, I grew up on the Kapiti Coast and have lived there for most of my life.<br /> I moved into wellington though to be able to do this course. 
            <br />
            <br />
            You can find more info about me at the page <a href="#">About Me</a>.
          </p>

        </div>
      </React.Fragment>      
  )
    }
}


export default HomeBody