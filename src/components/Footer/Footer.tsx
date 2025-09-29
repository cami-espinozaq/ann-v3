import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Badges from '../../assets/images/footer/badges.png';
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <div className="wrapper upperRow">
                <footer className="footer hoc clear"> 
                    <div className="centeredBlock">
                        <h6 id="contact-me" className="heading">Contact Me</h6>
                        <div className="listWithImg">
                            <ul className="linklist">
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    +44 (0) 121 707 8538
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                    +44 (0) 7922 532760
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    ann@anncarrtours.co.uk
                                </li>                                
                            </ul>
                            <img src={Badges} alt="badges"/>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="wrapper lowerRow">
                <div className="copyright hoc clear"> 
                    <p>
                        Copyright &copy; 2019 - All Rights Reserved - anncarrtours.co.uk
                    </p>
                    <p>
                        <a 
                            href="https://www.os-templates.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Free Website Templates">
                            Thanks to OS Templates
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};