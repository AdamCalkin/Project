import React from 'react'

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            style: {
                width: '100%',
                height: '100%',
                backgroundImage: "url('https://previews.123rf.com/images/mce128/mce1280705/mce128070500037/934063-patch-of-grass-for-use-as-background-texture.jpg')"
            } 
        }
    }
    render() { 
        const { style } = this.state.style;
        return ( 
            <React.Fragment>
                    <div
                    style={style}>
                    </div>
            </React.Fragment>
         )
    }
}
 
export default Background;