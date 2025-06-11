import { Header } from "./partials/Header";
import { IntroPage } from "./components/pages/IntroPage";
import { OfferedServices } from "./components/pages/OfferedServices";
import { AboutUs } from "./components/pages/AboutUs";
import { BrandsCaraousel } from "./components/pages/BrandsCarousel";
import { CustomerReviews } from "./components/pages/CustomerReviews";
import { OurStudies } from "./components/pages/OurStudies";
import { WayOfBuilding } from "./components/pages/WayOfBuilding";
import { OurApproach } from "./components/pages/OurApproach";
import { TechStack } from "./components/pages/TechStack";
import { DevelopmentPath } from "./components/pages/DevelopmentPath";
import { FeaturedResources } from "./components/pages/FeaturedResources";
import { Banner } from "./components/ui/Banner";
import { Footer } from "./partials/Footer";

export function SoftwareCompanyWeb() {
    return (
        <>
            <Header />
            <IntroPage />
            <OfferedServices />
            <AboutUs />
            <BrandsCaraousel />
            <CustomerReviews />
            <OurStudies />
            <WayOfBuilding />
            <OurApproach />
            <TechStack />
            <DevelopmentPath />
            <FeaturedResources />
            <Banner />
            <Footer />
        </>
    )
}