import React from 'react'
import { mainPosters } from '../../../utils/hero/mainPostsers.js'
import { topPosters } from '../../../utils/hero/topPosters.js'
import BottomSection from './bottom-section/BottomSection.jsx'
import Calculator from './calculator/Calculator'
import RondementChart from './chart/RondementChart.jsx'
import HeroSection from './Sections/HeroSection.jsx'
import Posters from './poster/Potsers'
import Video from './video/Video.jsx'
import 'aos/dist/aos.css';
import SecondSection from "./Sections/SecondSection.jsx";
import ThirdSection from "./Sections/ThirdSection.jsx";
import Footer from "./Sections/Footer.jsx";
import TestimonialSection from "./Sections/TestimonialSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import BlogSection from "./Sections/BlogSection.jsx";



const Hero = () => {
    return (
        <div className="w-full-">
            <HeroSection />
            <SecondSection />
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
    )
}

export default Hero