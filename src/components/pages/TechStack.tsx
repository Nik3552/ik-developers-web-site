export function TechStack() {
    return (
        <div className="our-tech-stack">
            <div className="tech-stack-header">
                <img src="/icons-elements/border-line.png" alt="Header top border line" />
                <h1>Our</h1>
                <h1><span>Tech Stack</span></h1>
            </div>
            <div className="view-stack">
                <button className="selected-stack">Backend <img src="/icons-elements/small-border-line.png" alt="Border line under the button" /></button>
                <button>Frontend</button>
                <button>Databases</button>
                <button>CMS</button>
                <button>CloudTesting</button>
                <button>DevOps</button>
            </div>
            <img src="/backend-stack.png" alt="Backend tech stack of technologies " />
        </div>
    )
}