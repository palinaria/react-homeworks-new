import React from "react";
import logo from "../../assets/logo_svg.svg";
import inst from "../../assets/inst_svg.svg";
import twitter from "../../assets/twitter_svg.svg";
import tube from "../../assets/tube_svg.svg";
import './Footer.css';

const Footer: React.FC = () => {
    const googleLink : string = "https://www.google.com/";

    return (
        <footer className="footer">
            <div className="container_up">
                <div className="footer_up_left">
                    <img src={logo} className="footer_logo" alt="Logo" />
                    <div className="takeaway_text">
                        Takeaway & Delivery template for small-medium businesses.
                    </div>
                </div>
                <div className="footer_up_right">
                    <div className="footer_column common_font">
                        <p className="footer__column--uppercase">COMPANY</p>
                        <a href="#">Home</a>
                        <a href="#">Order</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="footer_column common_font">
                        <p className="footer__column--uppercase">TEMPLATE</p>
                        <a href={googleLink}>Style Guide</a>
                        <a href={googleLink}>Changelog</a>
                        <a href={googleLink}>Licence</a>
                        <a href={googleLink}>Webflow University</a>
                    </div>
                    <div className="footer_column common_font">
                        <p className="footer__column--uppercase">FLOWBASE</p>
                        <a href="#">More Cloneables</a>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="container_down">
                <div className="footer_down_left">
                    <div className="font">
                        Built by <a href="#" className="highlight">Flowbase</a> · Powered by <a href="#" className="highlight">WebFlow</a>
                    </div>
                </div>
                <div className="footer_down_right">
                    <img src={inst} alt="Instagram" className="footer_icon" />
                    <img src={twitter} alt="Twitter" className="footer_icon" />
                    <img src={tube} alt="YouTube" className="footer_icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;