import React from "react";

const EducationCertification = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Education & Certifications
        </h2>
        <div className="space-y-8">
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  State Engineer Diploma
                </h4>
                <p className="text-gray-700">
                  <span className="font-semibold">Hassania School of Public Works (EHTP)</span>, 2021
                </p>
                <p className="text-gray-600">Specialization: Computer Engineering</p>
                <p className="text-gray-600">
                  Activities: Member of the FORUM EHTP ENTREPRISE Association (2019)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  Scientific and Technical University Diploma
                </h4>
                <p className="text-gray-700">
                  <span className="font-semibold">Faculty of Science and Technology (FST)</span>, 2018
                </p>
                <p className="text-gray-600">Specialization: Mathematics, Computer Science, and Physics</p>
                <p className="text-gray-600">Achievements: Top graduate of the 2017 class</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Certifications</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Advanced Blazor WebAssembly with ASP.NET Core</li>
              <li>Advanced ASP.NET Core: Unit Testing</li>
              <li>Advanced Web APIs Utilizing ASP.NET Core in .NET 6</li>
              <li>Advanced .NET: Commands, C# Enhancements</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertification;
