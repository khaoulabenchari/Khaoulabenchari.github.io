import TechBadge from '../../components/illustration/TechBadge'
export default function Projects() {
  const technologies = [
    { tech: ".NET 8", color: "bg-blue-100" },
    { tech: "Web API", color: "bg-green-100 " },
    { tech: "JWT", color: "bg-purple-100" },
    { tech: "Swagger", color: "bg-yellow-100 " },
    { tech: "Dapper", color: "bg-red-100" },
    { tech: "SQL Server", color: "bg-indigo-100 " },
    { tech: "C#", color: "bg-teal-100" },
    { tech: "Visual Studio", color: "bg-gray-100" },
    { tech: "RESTful API", color: "bg-pink-100" },
    { tech: "LINQ", color: "bg-orange-100 " },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Highlighted Projects
        </h2>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Praxis - Wealth Management Platform (Team Contribution)
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Collaborated with a cross-functional team to design and
                  develop the wealth management platform using a microservices
                  architecture. Focused on specific modules, including managing
                  categories, asset characteristics, and the exchange and
                  transfer of assets.
                  <br />
                  Worked on the inventory management module of the mobile
                  application
                  <br />
                  Implementing an interface connecting the existing database
                  with the new mobile application, ensuring seamless data
                  synchronization.
                </p>
                <div>
                  <h3 class="text-lg font-semibold text-indigo-600 mb-2">
                    Technologies Used
                  </h3>
                  <p class="text-gray-700">
                    <span class="font-semibold">Backend:</span> .NET Core,
                    Entity Framework Core, C# <br />
                    <span class="font-semibold">Frontend:</span> Angular,
                    PrimeNG <br />
                    <span class="font-semibold">Tools:</span> Azure DevOps{" "}
                    <br />
                    <span class="font-semibold">Architecture:</span>{" "}
                    Microservices
                  </p>
                </div>
              </div>
              <div className="relative min-h-[25rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="/assets/images/praxis.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Portail OS (Team Contribution)
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  The{" "}
                  <span className="font-semibold text-indigo-600">
                    OS Portal
                  </span>{" "}
                  project involved designing and developing a user-friendly
                  portal for managing validation workflows. This included a
                  robust notification and monitoring system, ensuring
                  streamlined processes and improved operational efficiency.
                  <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Developed using <strong>.NET 6</strong> and{" "}
                      <strong>Blazor WebAssembly</strong> for a seamless user
                      experience.
                    </li>
                    <li>
                      Integrated a modern UI with <strong>MudBlazor</strong>{" "}
                      components for intuitive navigation.
                    </li>
                    <li>
                      Designed a flexible validation workflow with automated
                      notifications.
                    </li>
                    <li>
                      Implemented a monitoring system for tracking and auditing
                      validation processes.
                    </li>
                  </ul>
                  <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                     <TechBadge key={index} tech={tech.tech} color={tech.color} />
                    ))}
                  </div>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Automated Price Management System
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Automated critical retail price updates using .NET 8. Ensured
                  system reliability with multithreading and Polly for
                  resilience.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Gold API
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  The{" "}
                  <span className="font-semibold text-indigo-600">
                    Gold API
                  </span>{" "}
                  project involved the design and development of a scalable and
                  secure RESTful API to connect the
                  <span className="font-semibold"> GOLD ERP system</span> with
                  external systems. The solution ensured seamless data exchange
                  and adhered to modern best practices.
                </p>
                <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Built with <strong>.NET 8</strong> for high performance and
                    scalability.
                  </li>
                  <li>
                    Implemented secure authentication and authorization using{" "}
                    <strong>JWT</strong>.
                  </li>
                  <li>
                    Designed API endpoints with comprehensive documentation
                    using <strong>Swagger</strong>.
                  </li>
                  <li>
                    Optimized database interactions with <strong>Dapper</strong>{" "}
                    for efficient query execution.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3">
                  Technologies Used
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                  <li>.NET 8</li>
                  <li>Web API</li>
                  <li>JWT</li>
                  <li>Swagger</li>
                  <li>Dapper</li>
                  <li>SQL Server</li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
