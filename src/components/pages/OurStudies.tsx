import { ChevronRight } from "lucide-react"

export function OurStudies() {
    return (
        <>
            <div className="interpage-elements">
                <img id="arrow-1" src="/icons-elements/arrow-1.png" alt="Decorative arrow number one" />
                <img id="ball" src="/icons-elements/ball-image.png" alt="Decorative ball image" />
                <img id="arrow-2" src="/icons-elements/arrow-2.png" alt="Decorative arrow number two" />
            </div>
            <div className="our-studies">
                <div className="our-studies-header">
                    <img src="/icons-elements/border-line.png" alt="border-line" />
                    <h1>Our recent</h1>
                    <h1><span>Case studies</span></h1>
                </div>
                <div className="design-example-card">
                    <img src="/custom-studies/design-ex-1.png" alt="Design example number one" />
                    <div className="design-info-container">
                        <h1>Website Design for SCFC Canada</h1>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                        <button>Read more <ChevronRight size={16} /></button>
                    </div>
                </div>
                <div className="design-example-card">
                    <img src="/custom-studies/design-ex-2.png" alt="Design example number two" />
                    <div className="design-info-container">
                        <h1>Website Design for SCFC Canada</h1>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                        <button>Read more <ChevronRight size={16} /></button>
                    </div>
                </div>
                <div className="design-example-card">
                    <img src="/custom-studies/design-ex-3.png" alt="Design example number three" />
                    <div className="design-info-container">
                        <h1>Website Design for SCFC Canada</h1>
                        <p>Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                        <button>Read more <ChevronRight size={16} /></button>
                    </div>
                </div>
                <button>Read more case studies <ChevronRight size={16} /></button>
            </div>
        </>

    )
}