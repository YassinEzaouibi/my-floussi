import investVector from "../../../../assets/imgs/Finance-rafiki.svg";

const SecondSection = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg flex items-center bg-cyan-500  p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Liberté financière ou travail à vie ?
                </h2>
                <p className="text-white/90 sm:mt-4 pt-4">
                  Liberté financière ou travail à vie ? Découvrez votre liberté
                  financière avec Hikma Invest. Nous vous accompagnons pour un
                  parcours professionnel enrichissant et vous offrons les outils
                  nécessaires pour naviguer avec confiance. Explorez de
                  nouvelles possibilités dès aujourd'hui.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Questionnaire
                  </a>
                </div>
              </div>
            </div>
            <img
              alt=""
              src={investVector}
              className="h-full w-full object-cover sm:h-full md:h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
