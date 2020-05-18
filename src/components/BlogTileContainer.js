import React from 'react'

import BlogTile from './BlogTile'

const BlogTileContainer = props => {
    return(
        <div className="blog-tile-container">
            {props.posts.map(postInfo => 
                <BlogTile postInfo={postInfo}/>
            )}
        </div>
    );
};

export default BlogTileContainer;