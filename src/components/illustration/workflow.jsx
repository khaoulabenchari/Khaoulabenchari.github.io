import React from 'react';

const Workflow = () => {
  return (
    <div className="flex items-center justify-around py-10 bg-gray-100">
      {/* Cloud Section */}
      <div className="text-center">
        <div className="bg-blue-100 p-5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 15a4 4 0 01.88-7.874A5.5 5.5 0 0112 3.6a5.5 5.5 0 018.08 5.524A4 4 0 0115 18H5a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <p className="mt-2 text-gray-600">Cloud</p>
      </div>

      {/* Shield Section */}
      <div className="text-center">
        <div className="bg-blue-500 p-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 22c6.075 0 10-4.925 10-10V5.832c0-1.221-.773-2.31-1.923-2.705l-7.048-2.347a2 2 0 00-1.934 0L4.923 3.127A2.992 2.992 0 003 5.832V12c0 5.075 3.925 10 9 10z"
            />
          </svg>
        </div>
        <p className="mt-2 text-blue-500 font-semibold">Secure</p>
      </div>

      {/* Server Section */}
      <div className="text-center">
        <div className="bg-blue-100 p-5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M10 18h4M4 6v12M20 6v12"
            />
          </svg>
        </div>
        <p className="mt-2 text-gray-600">Server</p>
      </div>
    </div>
  );
};

export default Workflow;
