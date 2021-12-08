import React from 'react';
import Banner from './banner/Banner';
import Introduction from './introduction/Introduction';
import MoreInfo from './more-info/MoreInfo';

class HomePage extends React.Component{
    render(){
        return(
            <>
                <Banner />
                <Introduction />
                <MoreInfo />
            </>
        );
    }
}

export default HomePage;