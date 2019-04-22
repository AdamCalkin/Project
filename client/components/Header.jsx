import React from 'react'
import Image from 'react-bootstrap/Image'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            style: {
                width: '100%',
                height: '100px',
                // backgroundImage: "url('https://previews.123rf.com/images/mce128/mce1280705/mce128070500037/934063-patch-of-grass-for-use-as-background-texture.jpg')"
            }
         }
    }

    
    render() { 
        const style = this.state.style
        return ( 
            <React.Fragment>                
                <div
                 style={style}>
                </div>
                <Image  src="https://www.cleanandgreen.co.nz/images/502/75/clean-and-green-logo.jpg?h=24f00450" alt="Clean and Green " rounded />

            </React.Fragment>
         );
    }
}
 
export default Header