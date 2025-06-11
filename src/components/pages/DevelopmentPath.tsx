export function DevelopmentPath() {
    return (
        <div className="development-path">
            <div className="development-path-header">
                <img src="/icons-elements/border-line.png" alt="Top border line" />
                <h1>How development</h1>
                <h1><span>through Alcaline works</span></h1>
            </div>
            <div className="path-container" id="path-container-up">
                <div className="path-card">
                    <h5><span>#1</span> Assemble the right team</h5>
                    <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                </div>
                <div className="path-card">
                    <h5><span>#3</span> Tech architecture</h5>
                    <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently</p>
                </div>
                <div className="path-card">
                    <h5><span>#5</span> Code reviews</h5>
                    <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
                </div>
            </div>
            <div className="line-between-containers" >
                <div className="line" >
                    <div className="up-lines">
                        <div className="up-line"></div>
                        <div className="up-line"></div>
                        <div className="up-line"></div>
                    </div>
                    <div className="down-lines">
                        <div className="down-line"></div>
                        <div className="down-line"></div>
                        <div className="down-line"></div>
                    </div>
                </div>
                <img src="/icons-elements/trophy.png" alt="A trophy" />
            </div>
            <div className="path-container" id="path-container-down">
                <div className="path-card">
                    <h5><span>#2</span> Sprint planning</h5>
                    <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
                </div>
                <div className="path-card">
                    <h5><span>#4</span> Standups & weekly demos</h5>
                    <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
                </div>
                <div className="path-card">
                    <h5><span>#6</span> Iterative delivery</h5>
                    <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
                </div>
            </div>
        </div>
    )
}