import React, { Component } from 'react'

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

        // let home = './Home/Home'
        // let blog = './Blog/Blog'
        // let about = './About/About'

        return ( 
            <React.Fragment>
                <div className="navigation">
                    <a href='./Home/Home'>Home</a> &nbsp; | &nbsp;
                    <a href={Blog}>Blog</a> &nbsp; | &nbsp;
                    <a href={About}>About me </a> 
                </div>
            </React.Fragment>
         )
    }
}
 