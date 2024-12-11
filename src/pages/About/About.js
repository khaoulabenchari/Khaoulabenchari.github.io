import Resume from '../../components/resume/resume'

export default function About() {
  return (
    <div
      className="
    isolate bg-white px-6 py-16 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="grid grid-cols-2 flex items-center justify-center  gap-x-2 gap-y-2">

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome to My Website Portfolio 👩‍💻
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hello! I'm{" "}
            <span className="font-semibold text-gray-800">Khawla</span>, a
            passionate software engineer with a strong foundation in{" "}
            <span className="text-blue-500 font-semibold">.NET</span> and{" "}
            <span className="text-blue-500 font-semibold">Angular</span>{" "}
            development. My work focuses on creating efficient, scalable, and
            user-friendly solutions. I enjoy tackling challenging problems,
            learning new technologies, and continuously improving my skills.
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              What You'll Find Here:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <span className="font-semibold text-gray-800">
                  Dynamic Web Applications:
                </span>{" "}
                Projects using .NET, Angular, and modern frameworks.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Innovative Problem-Solving:
                </span>{" "}
                Examples of creative solutions, from invoice printing systems to
                optimized code structures.
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Collaborative Endeavors:
                </span>{" "}
                Contributions to team projects showcasing teamwork and
                leadership skills.
              </li>
            </ul>
          </div>

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
                📚 Avid learner with a love for exploring technology, art, and
                history.
              </li>
              <li>
                ✨ Passionate about delivering high-quality, maintainable code
                that solves real-world problems.
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-lg">
              Feel free to explore my work, share feedback, or collaborate on
              exciting projects!{" "}
              <span className="font-semibold text-blue-500">🚀</span>
            </p>
          </div>
          <Resume/>
          <a href="/files/Khaoula_Benchari_en.pdf" download className="px-4 py-2 bg-gray-800 text-white rounded">
  Download My Resume
</a>
"Currently open for freelance projects and full-time opportunities."


        </div>
        <div>
        <img
        src="/assets/images/small.png"
        alt="Khaoula Benchari photo"
        className="mx-auto rounded-lg shadow-md"    />
            </div>
      </div>
    </div>
  );
}
