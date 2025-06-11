export function Footer() {
    return (
        <footer>
            <div className="page-speed">
                <div className="companies-logo">
                    <img src="/header-logo.png" alt="Companies logo" />
                    <p>Ik developers</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <img src="/footer/page-speed.png" alt="Page speed" />
            </div>
            <div className="links">
                <h5>Links</h5>
                <ul>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Case Studies</a>
                    </li>
                    <li>
                        <a href="/">How it works</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li>
                        <a href="/">Areas We Serve</a>
                    </li>
                </ul>
            </div>
            <div className="contact-us">
                <h5>Contact Us</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p>+923183561921</p>
            </div>
            <div className="socials">
                <button>
                    <img src="/footer/facebook.png" alt="Facebook logo" />
                </button>
                <button>
                    <img src="/footer/instagram.png" alt="Instagram logo" />
                </button>
                <button>
                    <img src="/footer/twitter.png" alt="Twitter logo" />
                </button>
                <button>
                    <img src="/footer/linkedin.png" alt="Linkedin logo" />
                </button>
            </div>
            <div className="copyright">
                © 2023 Copyright by IK Developers. All rights reserved.
            </div>
        </footer>
    )
}