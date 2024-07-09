import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center  w-[70%] mx-auto max-[640px]:mb-40 ">
      <div className="my-20 h-[200px]  flex flex-col gap-10 ">
        <h1 className=" font-bold text-5xl text-center text-darkBlue">
          Simulateur de patrimoine
        </h1>
        <p className=" text-center text-graySecondary text-lg font-semibold">
          Voyez combien de revenu passif mensuel vous pouvez obtenir en fonction
          de votre patrimoine et de vos investissements. Il vous suffit d'entrer
          quelques informations de base dans notre simulateur de patrimoine.
        </p>
      </div>
    </div>
  );
};

export default Header;
