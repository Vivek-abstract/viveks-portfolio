import AmaronSection from "../AmaronSection/AmaronSection";
import HeroSection from "../HeroSection/HeroSection";
import './HomePage.css';

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <hr id="work" />
            <AmaronSection />
            <hr />
            <AmaronSection />
            <hr />
        </div>
    );
}