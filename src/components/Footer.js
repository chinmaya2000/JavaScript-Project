import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: chinmayab00@gmail.com</p>
                <p className="footer-contact-access">Mobile: +91-6371773005</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="#"><i><FaFacebook /></i></a>
                    <a href="#"><i><FaInstagram /></i></a>
                    <a href="#"><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;