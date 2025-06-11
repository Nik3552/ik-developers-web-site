import Slider from "react-slick"

export function BrandsCaraousel() {
    interface CarouselSettings {
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number,
        autoplay: boolean,
        autoplaySpeed: number,
        cssEase: string
    }

    const settings: CarouselSettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: "linear"
    };
    return (
        <div style={{ padding: "50px 0", border: "1px solid rgb(128, 128, 128, 0.5)" }}>
            <Slider {...settings}>
                <img src="/brends-caraousel.png" alt="Brands we are working with" />
                <img src="/brends-caraousel.png" alt="Brands we are working with" />
            </Slider>
        </div>
    )
}