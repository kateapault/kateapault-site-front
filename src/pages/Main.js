import React from 'react';

import HomePage from './HomePage'
import BlogPage from './BlogPage'
import AboutPage from './AboutPage'
import BlogPost from './BlogPost'

import TestA from '../components/TestA'

const Main = props => {
    switch(props.page) {
        case 'Home':
            return(
                <div className="main-home">
                    <HomePage />
                </div>
            );
        case 'Blog':
            return(
                <div className="main">
                    <BlogPage />
                </div>
            );
        case 'About':
            return(
                <div className="main">
                    <AboutPage />
                </div>
            );
        case 'Post':
            return(
                <div className="main">
                    <BlogPost post={TestA}/>
                </div>
            );
        default:
            return(
                <div className="main">
                    Page not found
                </div>
            )
    }
};

export default Main;