import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <span>Copyright © 2020 Explorers by Nature</span>

                <style jsx>{`
                    .footer {
                        background-color: #004507;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        padding 15px 5px;
                    }
            
                    .footer * {
                        color: #fafafa;
                    }
                `}</style>
            </footer>
        );
    }
}

export default Footer;