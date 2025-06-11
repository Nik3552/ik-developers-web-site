// import { useState } from 'react';
import { CustomNextArrow, CustomBackArrow } from '../Slider/CustomArrows';
import Slider from "react-slick"

export function CustomerReviews() {
    // const [currentUser, setCurrentUser] = useState<number>(3)

    // function styleCurrentUser() {
    //     setCurrentUser(prev => prev + 1)
    //     console.log(currentUser)
    //     switch (currentUser) {
    //         case 1:
    //             document.getElementById("avatar-card-1")?.classList.add("active-customer-avatar-card")
    //             break;
    //         case 2:
    //             document.getElementById("avatar-card-2")?.classList.add("active-customer-avatar-card")
    //             break;
    //         case 3:
    //             document.getElementById("avatar-card-3")?.classList.add("active-customer-avatar-card")
    //             break;
    //         case 4:
    //             document.getElementById("avatar-card-4")?.classList.add("active-customer-avatar-card")
    //             break;
    //         case 5:
    //             document.getElementById("avatar-card-5")?.classList.add("active-customer-avatar-card")
    //             break;
    //     }
    // }

    interface customerInterface {
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number,
        nextArrow?: React.ReactElement,
        prevArrow?: React.ReactElement
    }

    const settings: customerInterface = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow id='arrow-next-reviews' />,
        prevArrow: <CustomBackArrow id='arrow-back-reviews' />,
    }
    return (
        <div className="customer-reviews">
            <div className="header-paragraph">
                <img src="/icons-elements/border-line.png" alt="Top border line" />
                <h1>Why customers love</h1>
                <h1><span>working with us</span></h1>
            </div>
            <div className="customer-review-container">
                <img id="quote-icon-1" src="/icons-elements/quote-icon.png" alt="Quote icon" />
                <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>
                <img id="quote-icon-2" src="/icons-elements/quote-icon.png" alt="Quote icon" />
            </div>
            <div className="customer-avatar-slider">
                <Slider {...settings}>
                    <div id="avatar-card-1" className="customer-avatar-card">
                        <img src="/customer-avatars/avatar-1.png" alt="Customer avatar number one" />
                        <img className="five-stars" src="/icons-elements/five-stars.png" alt="Five stars review image" />
                        <h1>Romeena De Silva</h1>
                        <h2>Janet Cosmetics</h2>
                    </div>
                    <div id="avatar-card-2" className="customer-avatar-card">
                        <img src="/customer-avatars/avatar-2.png" alt="Customer avatar number two" />
                        <img className="five-stars" src="/icons-elements/five-stars.png" alt="Five stars review image" />
                        <h1>Romeena De Silva</h1>
                        <h2>Janet Cosmetics</h2>
                    </div>
                    <div id="avatar-card-3" className="customer-avatar-card">
                        <img src="/customer-avatars/avatar-3.png" alt="Customer avatar number three" />
                        <img className="five-stars" src="/icons-elements/five-stars.png" alt="Five stars review image" />
                        <h1>Imran Khan</h1>
                        <h2>Software Engineer</h2>
                    </div>
                    <div id="avatar-card-4" className="customer-avatar-card">
                        <img src="/customer-avatars/avatar-4.png" alt="Customer avatar number four" />
                        <img className="five-stars" src="/icons-elements/five-stars.png" alt="Five stars review image" />
                        <h1>Romeena De Silva</h1>
                        <h2>Janet Cosmetics</h2>
                    </div>
                    <div id="avatar-card-5" className="customer-avatar-card">
                        <img src="/customer-avatars/avatar-5.png" alt="Customer avatar number five" />
                        <img className="five-stars" src="/icons-elements/five-stars.png" alt="Five stars review image" />
                        <h1>Romeena De Silva</h1>
                        <h2>Janet Cosmetics</h2>
                    </div>
                </Slider>
            </div>
        </div>
    )
}