import HeroSection from "./Sections/HeroSection.jsx";
import "aos/dist/aos.css";
import ThirdSection from "./Sections/ThirdSection.jsx";
import Footer from "./Sections/Footer.jsx";
import TestimonialSection from "./Sections/TestimonialSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import BlogSection from "./Sections/BlogSection.jsx";

const Hero = () => {
  return (
    <div className="w-full-">
      <HeroSection />
      {/*<SecondSection />*/}
      <ThirdSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />

      {/*<Calculator/>*/}

      {/*<RondementChart/>*/}
      {/*<Posters posters={topPosters}/>*/}

      {/*<Video/>*/}

      {/*<Posters posters={mainPosters}/>*/}
      {/*<BottomSection/>*/}
      <Footer />
    </div>
  );
};

export default Hero;
