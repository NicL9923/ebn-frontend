import React from 'react';

class BlogpostPreview extends React.Component {
    render() {
        return(
            <div className="blogpostPreview">
                <h4>*Blog title*</h4>
                <p>*Author*</p>
                <p>*Date*</p>
                <p>*First few lines of blog (blurred)...*</p>

                <style jsx>{`
                    .blogpostPreview {
                        
                    }
                `}</style>
            </div>
        );
    }
}

export default BlogpostPreview;