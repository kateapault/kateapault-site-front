import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div>
                {this.props.post}
            </div>
        )
    }
};

export default Post;