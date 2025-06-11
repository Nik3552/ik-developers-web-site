import { ArrowRight, ArrowLeft } from 'lucide-react';

type ArrowProps = {
    onClick?: () => void;
    id?: string;
};

export function CustomNextArrow({ onClick, id = "arrow-right" }: ArrowProps) {
    const handleClick = () => {
        document.getElementById(id)?.classList.add("active-arrow");
        document.getElementById("arrow-left")?.classList.remove("active-arrow");
        document.getElementById("arrow-back-reviews")?.classList.remove("active-arrow");
        onClick?.();
    };

    return (
        <ArrowRight
            size={50}
            id={id}
            className="arrow"
            onClick={handleClick}
        />
    );
}

export function CustomBackArrow({ onClick, id = "arrow-left" }: ArrowProps) {
    const handleClick = () => {
        document.getElementById(id)?.classList.add("active-arrow");
        document.getElementById("arrow-right")?.classList.remove("active-arrow");
        document.getElementById("arrow-next-reviews")?.classList.remove("active-arrow");
        onClick?.();
    };

    return (
        <ArrowLeft
            size={50}
            id={id}
            className="arrow"
            onClick={handleClick}
        />
    );
}
