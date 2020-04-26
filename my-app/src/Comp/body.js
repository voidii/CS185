import React, { Component } from 'react';
import Home from './Home'
import My_League from './My_League'
import My_Overwatch from './My_Overwatch'
import My_MHW from './My_MHW'

class body extends Component {
    displayContent = () => {
        
        if(this.props.activeTab === 1)
            return <Home/>
        else if(this.props.activeTab === 2)
            return <My_League/>
        else if(this.props.activeTab === 3)
            return <My_Overwatch/>
        else
            return <My_MHW/>
    }
    render() {
        return (
            this.displayContent()
        );
    }
}

export default body;