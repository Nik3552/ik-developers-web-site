import Slider from "react-slick"
import { ArrowRight } from "lucide-react";

export function FeaturedResources() {
    interface SliderSettings {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    }

    const settings: SliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <div className="featured-resources">
            <div className="featured-resources-header">
                <img src="/icons-elements/border-line.png" alt="Header top border line" />
                <h1>Featured</h1>
                <h1><span>Resources</span></h1>
            </div>
            <Slider {...settings}>
                <div className="slider-card">
                    <img src="/featured-resources/image-1.png" alt="A man using PC" />
                    <p>How to Build a Scalable Application up to 1 Million Users on AWS</p>
                    <button>Read More <ArrowRight /></button>
                </div>
                <div className="slider-card">
                    <img src="/featured-resources/image-2.png" alt="Many PC's and a phone" />
                    <p>How to Build a Scalable Application up to 1 Million Users on AWS</p>
                    <button>Read More <ArrowRight /></button>
                </div>
                <div className="slider-card">
                    <img src="/featured-resources/image-3.png" alt="A laptop with a notebook on the right" />
                    <p>How to Build a Scalable Application up to 1 Million Users on AWS</p>
                    <button>Read More <ArrowRight /></button>
                </div>
                <div className="slider-card">
                    <img src="/featured-resources/image-4.png" alt="A screen of the PC" />
                    <p>How to Build a Scalable Application up to 1 Million Users on AWS</p>
                    <button>Read More <ArrowRight /></button>
                </div>
                <div className="slider-card">
                    <img src="/featured-resources/image-5.png" alt="Laptop behind the glasses" />
                    <p>How to Build a Scalable Application up to 1 Million Users on AWS</p>
                    <button>Read More <ArrowRight /></button>
                </div>
            </Slider>
        </div>
    )
}