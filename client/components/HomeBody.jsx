import React from'react'

const HomeBody = () => {
      <React.Component>
        <div className="main" >

            <div className="heading_hw">
              Hello World! 
            </div>

            <p className="welcome_p"> 
              This is the beginning of my <a href="#"{/*href="blog/blog.html"*/...React}>Blog</a> website home page.
            </p>
            
            <p className="welcome_p"> 
              This is still a Work In Process
            </p>
          
            <div className="heading_hw" style="font-size:24px;">
              What are the best practices associated with using classes vs. ids?
            </div>

            <p className="welcome_p">
              This blog will show the best practices associated with using classes vs. ids.<br /><br />
              Click <a href="blog/sprint2-technical.html" style="color:khaki;">Here</a> to view the blog post.
            </p>
          
          <div className="heading_hw">
            Reflection Notes
          </div>

          <p className="welcome_p">
            I will be showcasing my reflection notes from sprint 1,<br /> this will shown at the bottom of my <a href="blog/blog.html">Blog</a> page.
          </p>

          <div className="heading_hw">
            About Me     
          </div>
            
          <p className="welcome_p">
            My name is Adam Calkin, I grew up on the Kapiti Coast and have lived there for most of my life.<br /> I moved into wellington though to be able to do this course. 
            <br />
            <br />
            You can find more info about me at the page <a href="about.html">About Me</a>.
          </p>

        </div>
      </React.Component>      
}


export default HomeBody;