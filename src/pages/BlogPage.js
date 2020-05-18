import React from 'react';

import BlogTileContainer from '../components/BlogTileContainer'
import Posts from '../posts/_posts'

class BlogPage extends React.Component {
    state = {
        singlePost: false,
        postURL: null
    }

    openPost = postJSON => {
        this.setState({
            postURL: postJSON
        })
    }

    render() {
        return(
            <div className="blog-page">
                <BlogTileContainer posts={Posts}/>
            </div>
        );

    }
};

export default BlogPage;