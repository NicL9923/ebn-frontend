import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li>
                        <img className="logo" src="/EbnLogo.svg"/>
                        <Link href="/"><a>Explorers By Nature</a></Link>
                    </li>
                    <li><Link href="/podcast"><a>Podcast</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/store"><a>Store</a></Link></li>
                    <li><Link href="/aboutus"><a>About Us</a></Link></li>
                    <li><Link href="/contactus"><a>Contact Us</a></Link></li>
                </ul>

                <style jsx>{`
                    .navbar {
                        display: block;
                        background-color: #004507;
                    }

                    .navbar ul {
                        list-style-type: none;
                    }

                    .navbar ul li {
                        display: inline-block;
                        padding: 5px 10px;
                    }

                    .logo {

                    }
                `}</style>
            </nav>
        );
    }
}

export default Navbar;