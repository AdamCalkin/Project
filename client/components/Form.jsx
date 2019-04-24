import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        // this.state = { form }
    }
    render() { 
        return (
            <React.Fragment>
                <form action="">
                <input type="text" name="fname" placeholder="Name" />
                <button onChange={(e) => e.preventDefault} value="Submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}
 
export default Form;