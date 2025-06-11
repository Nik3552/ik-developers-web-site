import { CustomNextArrow, CustomBackArrow } from '../Slider/CustomArrows';
import { ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';

export function AboutUs() {

    function deleteBlur() {
        const player = document.getElementById("video-player");
        player?.classList.remove("video-player-blur")
    }

    return (
        <div className="about-us-page">
            <img id='top-circle' src="/icons-elements/intro-page-circle.png" alt="Image of the circle" />
            <div className="about-us-container">
                <div className="about-us-info">
                    <img src="/icons-elements/border-line.png" alt="Border line above the text" />
                    <h1>Leading companies trust us</h1>
                    <h1><span>to develop software</span></h1>
                    <p>We <span>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
                </div>
                <button>See more information <ArrowRight /></button>
                <div className='about-us-add-info'>
                    <img src="/icons-elements/border-line.png" alt="Border line above the text" />
                    <h1>Meet the People</h1>
                    <h1><span>We are Working With</span></h1>
                </div>
            </div>
            <ReactPlayer id="video-player" className="video-player-blur" light={true} volume={0} width={600} height={370} url="https://www.youtube.com/watch?v=WBl31Pyr_M8" onClickPreview={deleteBlur} />
            <div className="arrows-container">
                <CustomBackArrow />
                <CustomNextArrow />
            </div>
            <img id='bottom-circle' src="/icons-elements/intro-page-circle.png" alt="Image of the circle" />
        </div>
    )
}