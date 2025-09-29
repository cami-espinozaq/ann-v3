import { Link, NavLink } from 'react-router';
 
import "./navigation.css";

export const Navigation = ({ backgroundUrl, children }: { backgroundUrl: string; children: React.ReactNode }) => {
    const background = `url(${backgroundUrl})`;
    return (
        <div className="bgded parallax"
            style={{ backgroundImage: background }}>
            <div className="wrapper row2">
                <nav className="mainav hoc clear">
                    <ul className="clear">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper overlay">
                {children}
            </div>
        </div>
    );
};

export const Breadcrumb = ({ activePage }: { activePage: string }) => {
    return (
        <div className="breadcrumb hoc clear"> 
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">{activePage}</Link></li>
            </ul>
        </div>
    );
};