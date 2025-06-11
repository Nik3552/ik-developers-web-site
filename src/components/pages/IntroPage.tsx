export function IntroPage() {
    return (
        <div className="intro-page">
            <div className="intro-page-content-container">
                <div className="get-started">
                    <div>Great <span>Product</span> is</div>
                    <div>built by great <span>teams</span></div>
                    <p>
                        We help build and manage a team of world-class developers to bring your vision to life
                    </p>
                    <button>Let’s get started!</button>
                    <img className="circle-image" src="/icons-elements/intro-page-circle.png" alt="Intro page circle image" />
                </div>
                <img className="intro-image" src="/intro-img.png" alt="Intro image of the people" />
            </div>
        </div>
    )
}