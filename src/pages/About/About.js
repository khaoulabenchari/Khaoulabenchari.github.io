import Resume from "../../components/resume/resume";

export default function About() {
  return (
    <div className="bg-gray-50 py-16 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
        Welcome to My Website Portfolio 👩‍💻
        </h2>
        <div className="mt-10 grid grid-cols-2 flex items-center justify-center  gap-x-2 gap-y-2 ">
          <section className="bg-gray-100 py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto ">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm{" "}
                <span className="font-bold text-indigo-600">
                  Khaoula Benchari
                </span>
                , a passionate Software Development Engineer with over three
                years of experience. I specialize in creating innovative web and
                mobile applications using <strong>.NET</strong>,{" "}
                <strong>Blazor</strong>, and <strong>Angular</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                My work revolves around solving challenging problems and
                delivering impactful solutions. I am constantly exploring
                emerging technologies and enjoy mentoring aspiring developers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Outside of work, I love contributing to open-source projects,
                staying updated on industry trends, and sharing knowledge with
                the tech community.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  A Bit About Me:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    🌱 Currently diving deeper into{" "}
                    <span className="font-semibold">
                      Object-Oriented Design (OOD)
                    </span>{" "}
                    and full-stack development.
                  </li>
                  <li>
                    📚 Avid learner with a love for exploring technology, art,
                    and history.
                  </li>
                  <li>
                    ✨ Passionate about delivering high-quality, maintainable
                    code that solves real-world problems.
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-lg">
                  Feel free to explore my work, share feedback, or collaborate
                  on exciting projects!{" "}
                  <span className="font-semibold text-blue-500">🚀</span>
                </p>
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center justify-start ">
            <img
              src="/assets/images/small.png"
              alt="Khaoula Benchari photo"
              className="mx-auto rounded-lg shadow-md"
            />
            <Resume />
            <div>
              "Currently open for freelance projects and full-time
              opportunities."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
