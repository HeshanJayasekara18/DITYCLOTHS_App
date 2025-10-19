import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Footer from "../common/Footerpart";

const Landing = () => {
    return (
        <>
            <main className="font-sans">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </main>
            <a
                href="https://wa.me/+94721634671"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-6 w-6"
                >
                    <path d="M16.003 3C9.384 3 4 8.383 4 15.003c0 2.64.86 5.083 2.317 7.077L4.09 28.825a.5.5 0 00.678.64l6.056-2.51A11.937 11.937 0 0016.003 27C22.623 27 28 21.617 28 15.003 28 8.383 22.623 3 16.003 3zm0 2c5.517 0 9.997 4.479 9.997 10.003 0 5.518-4.48 10-9.997 10a9.93 9.93 0 01-4.954-1.33.5.5 0 00-.412-.033l-4.885 2.027 1.52-4.748a.5.5 0 00-.078-.454A7.955 7.955 0 016.006 15C6.006 9.48 10.486 5 16.003 5zm-4.47 4.748a1.3 1.3 0 00-1.228.769c-.318.69-.974 2.213-.974 3.223 0 .95.555 2.181 1.028 2.782.26.333 1.64 2.57 3.963 3.497 2.311.924 2.782.74 3.283.694.5-.045 1.617-.658 1.847-1.296.23-.638.23-1.186.162-1.296-.067-.11-.26-.18-.555-.318-.295-.14-1.742-.86-2.014-.957-.27-.1-.467-.141-.664.14-.197.282-.762.957-.934 1.154-.173.198-.342.223-.636.084-.295-.14-1.246-.466-2.373-1.49-.877-.783-1.47-1.75-1.642-2.039-.172-.29-.018-.447.13-.59.134-.132.295-.34.443-.51.147-.17.197-.283.295-.481.099-.198.05-.372-.025-.51-.075-.139-.665-1.609-.912-2.203-.24-.576-.487-.487-.636-.497z" />
                </svg>
                <span className="hidden md:inline">Chat on WhatsApp</span>
            </a>
        </>
    );
};
export default Landing;