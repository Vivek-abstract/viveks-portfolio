import WorkSample from "../WorkSample/WorkSample";
import HeroSection from "../HeroSection/HeroSection";
import './HomePage.css';
import amaron_login_img from '../../assets/amaron_login.png';
import amaron_menu_img from '../../assets/amaron_menu.png';
import cyberguard_report_img from '../../assets/cyberguard_report.png';
import cyberguard_complaint_img from '../../assets/cyberguard_complaint.png';

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <hr id="work" />
            <WorkSample title={<>Amaron <br />Malaysia</>} oneLiner="BATTERY WARRANTY CHECKER APP"
                description={<>Developed an app for Amaron Malaysia, allowing dealers to register newly purchased car batteries
                    and customers to register and check their warranty info using a barcode scanner.<br />
                    Currently being used by 5000+ users.</>}
                link="https://bit.ly/Amaron-Malaysia"
                image1={amaron_login_img}
                image2={amaron_menu_img}
                titleColor="#048961" />
            <hr />
            <WorkSample title="Cyber Guard" oneLiner="CYBERCRIME REPORTING APP"
                description={<>Developed an app for reporting cybercrime online and to provide counselling to the victim.
                    Additionally, the app features a chatbot to address frequently asked questions.<br />
                    Our efforts were recognized, and we proudly secured the 2nd runner-up prize in the Smart India Hackathon.</>}
                image1={cyberguard_report_img}
                image2={cyberguard_complaint_img}
                titleColor="#5905ff" />
            <hr />
        </div>
    );
}