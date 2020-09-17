import React from 'react';
//TODO: render markdown using react-markdown

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