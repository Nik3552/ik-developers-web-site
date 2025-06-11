import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";

export default function ServicesSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    const [progressBarValue, setProgressBarValue] = useState<number>(20)

    useEffect(() => {
        console.log(currentSlideIndex);

        switch (currentSlideIndex) {
            case 0:
                setProgressBarValue(20)
                break;
            case 1:
                setProgressBarValue(40)
                break;
            case 2:
                setProgressBarValue(60)
                break;
            case 3:
                setProgressBarValue(80)
                break;
            case 4:
                setProgressBarValue(100)
                break;
            default:
                setProgressBarValue(20)
        }
    }, [currentSlideIndex])

    interface SliderSettings {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
        appendDots: (dots: React.ReactNode) => React.ReactElement;
        afterChange?: (currentSlideIndex: number) => void;
    }

    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: (dots: React.ReactNode): React.ReactElement => (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <ul>
                    {dots}
                </ul>
                <div className="progress-bar-container">
                    <span>01</span>
                    <ProgressBar className="progress-bar" completed={progressBarValue} borderRadius="0" width="100px" height="3px" customLabel=" " />
                    <span>05</span>
                </div>
            </div >
        ),
        afterChange: (index) => setCurrentSlideIndex(index)
    };
    return (
        <Slider {...settings}>
            <div className="slider-card" id="slider-card-0">
                <img src="/slider-images/slider-img-1.png" alt="Slider image number 1" />
                <h3>Web Design & Development</h3>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div className="slider-card" id="slider-card-1">
                <img src="/slider-images/slider-img-2.png" alt="Slider image number 2" />
                <h3>Mobile App Development</h3>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div className="slider-card" id="slider-card-2">
                <img src="/slider-images/slider-img-1.png" alt="Slider image number 1" />
                <h3>Web Design & Development</h3>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div className="slider-card" id="slider-card-3">
                <img src="/slider-images/slider-img-3.png" alt="Slider image number 3" />
                <h3>Software Testing Service</h3>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div className="slider-card" id="slider-card-4">
                <img src="/slider-images/slider-img-1.png" alt="Slider image number 1" />
                <h3>Software Testing Service</h3>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
        </Slider>
    );
}