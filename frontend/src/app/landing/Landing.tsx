import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import HowItWorks from "./howitworks/HowItWorks";
import CtaBand from "../common/CtaBand";

const Landing = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <HowItWorks />
            <Section3 />
            <Section5 />
            <Section4 />
            <CtaBand
                title="Visiting Midigama?"
                description="Drop off your laundry and enjoy your vacation worry-free. We'll have your clothes fresh and ready!"
                primary={{ label: "Message us on WhatsApp", href: "https://wa.me/94721634671" }}
                secondary={{ label: "View services", href: "/services" }}
            />
        </>
    );
};
export default Landing;
