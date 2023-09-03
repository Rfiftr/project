import facebook_icon from '../images/facebook.svg'
import instagram_icon from '../images/instagram.svg'
import twitter_icon from '../images/twitter.svg'

export default function Contant() {
    return(
        <footer className="contant-footer">
            <ul className="footer-company">
                <h3>Company</h3>
                <li><a href="#">home</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">The chef</a></li>
            </ul>
            <ul className="footer-language">
                <h3>Language</h3>
                <li><a href="#">עברית</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">sodkdv</a></li>
            </ul>
            <ul  className="footer-contact">
                <h3>Contact us</h3>
                <span><a href="https://www.facebook.com"><img src={facebook_icon}></img></a></span>
                <span><a href=""><img src={instagram_icon}></img></a></span>
                <span><a href=""><img src={twitter_icon}></img></a></span>
            </ul>
        </footer>
    )
}