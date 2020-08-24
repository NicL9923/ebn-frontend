import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li><img className="logo" src="/EbnLogo.svg" alt="logo"/></li>
                    <li><Link href="/"><a className="navLink" style={{fontWeight: "bold"}}>Explorers By Nature</a></Link></li>

                    <li><Link href="/podcast"><a className="navLink">Podcast</a></Link></li>
                    <li><Link href="/blog"><a className="navLink">Blog</a></Link></li>
                    <li><Link href="/store"><a className="navLink">Store</a></Link></li>
                    <li><Link href="/aboutus"><a className="navLink">About Us</a></Link></li>
                    <li><Link href="/contactus"><a className="navLink">Contact Us</a></Link></li>
                </ul>

                <style jsx>{`
                    .navbar {
                        display: block;
                        background-color: #004507;
                    }

                    .navbar ul {
                        list-style-type: none;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .navbar ul li {
                        display: block;
                        padding: 5px 10px;
                    }

                    .navLink {
                        color: #fafafa;
                        text-decoration: none;
                        transition: ease 0.3s;
                        font-size: 18px;
                    }

                    .navLink:hover {
                        color: #ababab;
                    }

                    .logo {
                        filter: invert(95%) sepia(41%) saturate(1%) hue-rotate(219deg) brightness(110%) contrast(84%);
                    }
                `}</style>
            </nav>
        );
    }
}

export default Navbar;