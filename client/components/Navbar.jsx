import React, { Component } from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'


import Home from './Home/Home'
import Blog from './Blog/Blog'
import About from './About/About'


export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                style: {
                    color: 'pink'
            } 
        }
    }

    render() { 

        const homeNav = () => {
            return (
                <React.Fragment>
                    <Home />
                </React.Fragment>
            )
        }

        const blogNav = () => {
            return (
                <React.Fragment>
                    <Blog />
                </React.Fragment>
            )
        }

        const aboutNav = () => {
            return (
                <React.Fragment>
                    <About />
                </React.Fragment>
            )
        }

        return ( 
        <React.Fragment>
                <div className="navigation">
                    <a href='#' />Home &nbsp; | &nbsp;
                    <a href='#' />Blog &nbsp; | &nbsp;
                    <a href='#' />About me 
                </div>

            {/* <div className="navigation">
                <a href={<Home />} onClick={e => {
                    e.preventDefault();
                    console.log('click');
                }}>Home </a> &nbsp; |

                <a href={<Blog />} onClick={e => {
                    e.preventDefault();
                    console.log('click');
                }}>Blog </a> &nbsp; |

                <a onClick={e => {
                    e.preventDefault();
                    aboutNav();
                }}>About </a> &nbsp; |
            </div> */}

        </React.Fragment>
         )
    }
}
 