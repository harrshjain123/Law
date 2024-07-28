import './footer.css'
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import vector from '../assets/Vector.png'
function Footer(){
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-section description" id='footer-detail'>
                <img src={vector} alt="Wix Freaks Law Firm Logo" className="footer-logo"/>
                <h2>Wix Freaks <br/>Law firm</h2>
                <p>We dedicated to providing exceptional legal services with integrity and professionalism. Our experienced attorneys are here to assist with personal injury, family law, corporate law, criminal defense, and real estate matters. Contact us for a consultation and let us help you navigate your legal challenges.</p>
                <div className="social-icons">
                    <a href="#" aria-label="YouTube">
                        <img src={youtube} alt="YouTube"/>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <img src={twitter} alt="Twitter"/>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                </div>
            </div>
            <div className="footer-section company">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Partner With Us</a></li>
                    <li><a href="#">Provide Assistance</a></li>
                    <li><a href="#">Book Us For Talk</a></li>
                    <li><a href="#">Request An Call</a></li>
                </ul>
            </div>
            <div className="footer-section services">
                <h3>SERVICES</h3>
                <ul>
                    <li><a href="#">All Services</a></li>
                    <li><a href="#">Family Law</a></li>
                    <li><a href="#">Corporate Law</a></li>
                    <li><a href="#">Criminal Defense</a></li>
                    <li><a href="#">Ancestry Plan</a></li>
                    <li><a href="#">Wrongful Termination</a></li>
                    <li><a href="#">Unpaid Wages</a></li>
                </ul>
            </div>
            <div className="footer-section newsletter">
                <h3>JOIN OUR NEWSLETTER</h3>
                <form action="">
                <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <button type="submit">SIGN ME UP</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-links">
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
                <a href="tel:+91-98384-49503">+91-98384-49503</a>
            </div>
            <div className="footer-bottom-policy">
                <a href="#">Privacy Policy and Cookie Policy</a>
            </div>
        </div>
        
    </footer>
    )
}

export default Footer;