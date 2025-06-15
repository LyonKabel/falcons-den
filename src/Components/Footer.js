import React from 'react';
import { FaTwitter, FaDiscord, FaYoutube, FaTwitch } from 'react-icons/fa';
import '../Styling/Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p className="footer-logo">Falcons Den</p>

                <div className="footer-links">
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy</a>
                </div>

                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
                </div>

                <p className="footer-copy">&copy; {new Date().getFullYear()} Falcons Den. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
