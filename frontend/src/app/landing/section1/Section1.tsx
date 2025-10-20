import Navbar from "@/app/common/Navbar";
import headerImage from "@/app/assert/images/headerimg.png";
import dirtyClothsBoard from "@/app/assert/images/dirtyclothsboard.png";

const Section1 = () => {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-[#0b2214]"
      style={{
        backgroundImage: `linear-gradient(40deg, rgba(215,230,212,0.95) 0%, rgba(215,230,212,0.9) 5%, 
        rgba(215,230,212,0.5) 20%, rgba(215,230,212,0.2) 20%, rgba(215,230,212,0) 20%), 
        url(${headerImage.src})`,
        backgroundPosition: 'center right',
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#d7e6d4]/95 via-[#d7e6d4]/75 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.6),transparent_55%)]" />
      
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 pt-5 sm:gap-12 sm:px-6 sm:pb-16 lg:gap-20 lg:px-10 lg:pb-24 lg:min-h-[80vh]">
        <Navbar />
        
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <div className="relative flex flex-col gap-3 sm:gap-4 lg:gap-5">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
                Welcome to
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-[4.15rem] lg:leading-[1.08]">
                DIRTYCLOTHS
              </h1>
              <div className="pointer-events-none absolute -right-10 top-3 hidden h-24 w-24 rounded-full border-2 border-white/45 lg:block" />
            </div>
            
            <p className="max-w-xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
              Discover our top-notch laundry services, where we combine eco-friendly practices, cutting-edge technology, and a commitment to delivering exceptional results.
            </p>
            
            <div className="mt-6 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815] sm:px-9"
                href="#learn-more"
              >
                Learn More
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white px-8 py-3 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0] sm:px-9"
                href="#book-now"
              >
                Book Now
              </a>
            </div>
            <div className="relative mt-6 flex justify-center sm:hidden">
              <img
                src={dirtyClothsBoard.src}
                alt="DIRTYCLOTHS welcome board"
                className="h-100 w-120 rounded-2xl border border-[#0f351e]/10 shadow-[0_18px_40px_rgba(11,34,20,0.16)]"
              />
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(215,230,212,0.208)]" />
            </div>
          </div>
          
          <div className="hidden h-[420px] lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Section1