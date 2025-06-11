export function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src="header-logo.png" alt="Company's logo" />
                <p>Ik developers</p>
            </div>
            <ul className="links">
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Case Studies</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">How it Works</a>
                </li>
                <li>
                    <a href="">Hire</a>
                </li>
            </ul>
            <button>Contact us</button>
        </header>
    )
}