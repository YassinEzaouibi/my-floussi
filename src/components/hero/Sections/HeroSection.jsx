import { useEffect } from "react";
import AOS from "aos";
import investImage from "../../../assets/imgs/vectors/Revenue-bro.svg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the element
      easing: "ease-in-out", // Easing type
    });
  }, []);
  return (
    <div className="overflow-hidden bg-white pb-8 sm:pb-12 lg:pb-12 px-24 pt-6">
      <div className=" pt-8 sm:pt-12 lg:relative lg:py-48">
        <div className="relative mx-auto max-w-xl px-4 sm:px-12 lg:max-w-7xl lg:px-8">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Investissez sereinement pour vos projets de vie
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Hikam Invest est la plateforme d'investissement idéale pour
                  vous aider à atteindre vos objectifs financiers, qu'il
                  s'agisse de préparer votre retraite, financer vos études ou
                  acheter un bien immobilier.
                </p>
              </div>
              <div className="mt-2 sm:mt-3">
                <div className="sm:flex">
                  <div className="mt-3 sm:mt-0 text-center">
                    <a className="block w-full rounded-md bg-gradient-to-r from-cyan-600 to-cyan-500 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">
                      Commencer le questionnaire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img
                className="w-1/2  lg:h-full lg:w-auto lg:max-w-none"
                src={investImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
