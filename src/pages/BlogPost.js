import React from 'react';

const BlogPost = props => {

    return(
        <div className="blog-post">
            <h1>{props.post.title}</h1>
            <h3>{props.post.subtitle}</h3>
            <div>
                {props.post.content}
            </div>
        </div>
    );
};

export default BlogPost;