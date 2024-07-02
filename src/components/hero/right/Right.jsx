import { useEffect } from "react";
import hero from "../../../assets/imgs/vectors/hero.svg";
import AOS from "aos";

const Right = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className=" flex flex-col gap-y-5 text-center py-10"
    >
      <h4 className=" text-xl text-black ">Robo advisor X</h4>
      <p className=" font-semibold text-sm text-grayLight">
        Votre partenaire de confiance pour la gestion de patrimoine automatisée.
      </p>
      <img src={hero} alt="" />
    </div>
  );
};

export default Right;
