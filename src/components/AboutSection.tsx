const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Redux" },
  { skill: "Git" },
  { skill: "GitHub" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Acerca de mi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Me presento!
            </h1>
            <p>
              Hola, mi nombre es Robinson y soy un Ingeniero en Software{" "}
              <span className="font-bold">{"altamente ambisioso"}</span>,
              <span className="font-bold">{" automotivado"}</span>, y
              <span className="font-bold">{" motivado"}</span>
            </p>
            <br />
            <p>
              Me gradué de la Universidad de las Fuerzas Armadas ESPE, en 2023
              con un grado en Ingeniería en Software y he estado trabajando en
              el campo desde entonces.
            </p>
            <br />
            <p>
              Tengo una amplia gama de pasatiempos y pasiones que me mantienen
              ocupado. Desde leer, practicar deportes, viajar hasta escuchar
              música, siempre estoy buscando nuevas experiencias y me encanta
              mantenerme comprometido y aprendiendo cosas nuevas.
            </p>
            <br />
            <p>
              Mi filosofía de vida se centra en un principio fundamental:{" "}
              <span className="font-bold text-teal-500">
                nunca dejar de crecer.
              </span>{" "}
              Mi pasión por la tecnología me impulsa a desafiar constantemente
              los límites de lo que es posible. Estoy emocionado por el camino
              que mi carrera tomará en el futuro y siempre estoy dispuesto a
              abrazar nuevas oportunidades. ¡Así que, adelante, descubre más
              sobre mí y lo que puedo aportar! 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Tecnologías que manejo</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
