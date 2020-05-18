import React from 'react'

const BlogTile = props => {
    return(
        <div className="blog-tile" >
            <img className="tile-image" src={props.postInfo.img} />
            <div className="tile-title">{props.postInfo.title}</div>
            <div className="tile-blurb">{props.postInfo.blurb}</div>
        </div>
    );
};

export default BlogTile;