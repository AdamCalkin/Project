import React, { Component } from 'react'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clickStyle: {
                color: 'khaki'
            },
            fontStyle: {
                fontSize: '24px'
            }
         }
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="heading_hw" style={fontStyle}>
                    What are the best practices associated with using classes vs. ids?
                </div>

                <p className="welcome_p">
                    This blog will show the best practices associated with using classes vs. ids.<br /><br />
                    Click <a href="sprint2-technical.html" style={clickStyle}>Here</a> to view the blog post.
                 </p>

                <div className="heading_hw">
                    Html, CSS & DOM
                </div>

                <p className="welcome_p">
                This blog will descibe what the difference is between HTML and CSS, also describing the DOM of HTML. As well as some other points.<br /><br />
                Click <a href="sprint3-technical.html" style={clickStyle}>Here</a> to view the blog post. 
                </p>

                <div className="heading_hw">
                    Problem Solving
                </div>

                <p className="welcome_p">
                    This blog is my reflection on times I've been stuck on a problem and ways to problem solve.<br /><br />
                    Click <a href="sprint4-technical.html" style={clickStyle}>Here</a> to view my experience with problem solving post.
                </p>

                <div className="heading_hw">
                    Learning Plan
                </div>

                <p className="welcome_p">
                    This blog is my learning plan that I have set for myself, for the duration of this course.<br />
                    <br />
                    Click <a href="sprint2-cultural.html" style={clickStyle}>Here</a> to view my learning plan. 
                </p>

                <div class="heading_hw">
                    Emotional Intelligence
                </div>

                <p className="welcome_p">
                    This blog is describing in my words what Emotional Intelligence is and my experience with meditation.<br />
                    <br />
                    Click <a href="sprint3-cultural.html" style={clickStyle}>Here</a> to view my emotional intelligence post.
                </p>

                <div className="heading_hw">
                    Neuroplasticity & Growth Mindset
                </div>

                <p className="welcome_p">
                    This blog is going to descibe my understanding of Neuroplasticity and Growth Mindset on how it influences my learning.<br />
                    <br />
                    Click <a href="sprint4-cultural.html" style={clickStyle}>Here</a> to view my Neuroplasticity & Growth Mindset post.
                </p>

                <div className="heading_hw">
                    Reflection Time 
                </div>

                <p className="welcome_p">
                    This blog post is all about my reflection on the five sprints of foundations and what I hae accomplished.<br />
                    <br />
                    Click <a href="sprint5-cultural.html" style={clickStyle}>Here</a> to view my reflection on the whole of foundations.
                </p>

                <div className="heading_hw">
                    Story
                </div>

                <div className="welcome_p">
                    <h2>Click <a href="sprint1-technical.html" style={clickStyle}>Here</a> to read the story of Te Houtaewa </h2>
                </div>

                <div className="heading_hw">
                    Reflctions | Core
                </div>

                <h3>Sprint 1</h3>

                <p>
                    1.<br /> 
                        How do you improve human skills?<br />
                        You can improve this by spending time with more people, by introducing yourself to more people and trying to be kind, honest and reliable <br />
                        <br />
                        Is it hard to lerarn human skills?<br />
                        Yes and No it can differ from persmon to person, some people can have more or less anxiety. But no matter who you are you can always improve easy or hard <br />
                        <br />
                        What is the difference between tech and core skills?<br />
                        Tech skills is the skill that are used on devices, the code and all the technocal things on a computer. Core skills are human skills like communication between employees and or employors, or anyone in the industry the you come across to be nicer and kind <br />
                        <br />
                    2.<br /> 
                        Describe the process for solving problems<br />
                        The proccess of solving problems is not what everybody would think it too be. Some people usually think to solve a problem it is to just sit there and think what to do but that probably wont work most of the time, what you should do is not something to do with the problem (just do make sure to go over the code or whatever and make sure its not something that you can fix just by going back like a spelling mistake) but just relax right down the problem, draw out a diagram of your prblem, draw out what the process of the problem was, tell someone what the problem is and try to just meditate sometimes after a good meditation you can be very relaz and clean so once you sit down it just comes to you.<br />  
                        <br />
                </p>
            </React.Fragment>
         )
    }
}
 
