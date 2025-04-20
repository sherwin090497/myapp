import React, { useState } from 'react';
import { Card, CardContent } from '~/components/card';

const ResumePage = () => {
  const [isSWEPopupVisible, setIsSWEPopupVisible] = useState(false);
  const [isSTEPopupVisible, setIsSTEPopupVisible] = useState(false);
  const [isSQAEPopupVisible, setIsSQAEPopupVisible] = useState(false);

  const handleSWEClick = () => {
    setIsSWEPopupVisible(true);
  };

  const handleSTEClick = () => {
    setIsSTEPopupVisible(true);
  };

  const handleSQAEClick = () => {
    setIsSQAEPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsSWEPopupVisible(false);
    setIsSTEPopupVisible(false);
    setIsSQAEPopupVisible(false);
  };

  const softwareDeveloperDescription = (
    <>
      <li className="text-gray-700 mb-2">
        Developed and implemented software solutions to meet project requirements.
      </li>
      <li className="text-gray-700 mb-2">
        Collaborated with cross-functional teams to design, develop, and test software applications.
      </li>
      <li className="text-gray-700 mb-2">
        Utilized programming languages such as Python for backend and React for frontend to create
        efficient and scalable code.
      </li>
      <li className="text-gray-700 mb-2">
        Participated in code reviews and provided constructive feedback to improve code quality.
      </li>
      <li className="text-gray-700 mb-2">
        Troubleshot and resolved software defects and issues.
      </li>
      <li className="text-gray-700">
        Contributed to the continuous improvement of development processes and practices.
      </li>
    </>
  );

  const softwareTestEngineerDescription = (
    <>
      <li className="text-gray-700 mb-2">
        Developed and implemented automated testing strategies using IDT's Test Manager to execute tests against IDT-developed software, such as AEP.
      </li>
      <li className="text-gray-700 mb-2">
        Increased test coverage using Test Manager.
      </li>
      <li className="text-gray-700 mb-2">
        Allocated requirements to test procedures, working closely with development teams to ensure test procedures verify requirement intent, with a focus on utilizing Test Manager.
      </li>
      <li className="text-gray-700 mb-2">
        Gathered and understood requirements to provide optimal automated test solutions, with a particular emphasis on the capabilities of Test Manager.
      </li>
      <li className="text-gray-700 mb-2">
        Supported and enhanced existing testing processes by suggesting continuous improvement initiatives, often centered around the use of Test Manager.
      </li>
      <li className="text-gray-700">
      Worked with minimal supervision to implement solutions, frequently utilizing Test Manager to streamline and automate testing tasks.
      </li>
    </>
  );

  const softwareQualityAssuranceEngineerDescription = (
    <>
      <li className="text-gray-700 mb-2">
        Develops and documents application test plans based on software requirements and technical specifications.       </li>
      <li className="text-gray-700 mb-2">
        Creates and executes manual and automated test scripts.
      </li>
      <li className="text-gray-700 mb-2">
        Accurately records and clearly documents all actual and expected results.      
      </li>
      <li className="text-gray-700 mb-2">
        Provides support to technical teams on troubleshooting software issues
      </li>
      <li className="text-gray-700 mb-2">
        Coordinates with team members to ensure testing environments meet key performance and usability requirements.
      </li>
      <li className="text-gray-700">
        Create daily test metrics and perform post release testing, black box testing, positive and negative testing.
      </li>
    </>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
          .font-ubuntu {
            font-family: 'Ubuntu', sans-serif;
          }
        `}
      </style>
      <img
        src="/images/word_header.png"
        alt="Microsoft Word Menu"
        className="w-full mb-3 p-2" 
      />

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-8 border border-gray-300">
        {/* headers */}
        <header className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-blue-400 tracking-tight">Sherwin Labadan</h1>
              <h2 className="text-md text-gray-700 mt-1">SOFTWARE ENGINEER</h2>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>sherwin090497@gmail.com</p>
              <p>(619) 573-8087</p>
              <p>San Diego, California</p>
              <a
                href="https://www.linkedin.com/in/sherwin-labadan-a51393197/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://www.linkedin.com/in/sherwin-labadan-a51393197/
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        {/* Left Column */}
          <div>
            <section className="mb-4">
              <h1 className="text-xl font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                <span className="border-b border-blue-400">Work Experience</span>
              </h1>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://idtus.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:underline"
                  >
                    Innovative Defense Technologies
                  </a>
                  <img
                    src="/images/Link.svg"
                    className="h-5 w-3 inline-block ml-1 mb-2" 
                  />
                  <h3
                    className="text-md text-gray-700 ml-2 cursor-pointer hover:underline"
                    onClick={handleSWEClick}
                  >
                    Software Engineer (Developer)
                  <img
                    src="/images/Popup.svg"
                    className="h-3 w-3 inline-block mb-2" 
                  />
                  </h3>
                  <p className="text-sm text-gray-500 ml-4">2024 - Present | San Diego, California</p>
                  <h4 
                    className="text-md text-gray-700 ml-2 cursor-pointer hover:underline"
                    onClick={handleSTEClick}
                  >
                    Software Test Engineer
                  <img
                    src="/images/Popup.svg"
                    className="h-3 w-3 inline-block mb-2" 
                  />
                  </h4>
                  <p className="text-sm text-gray-500 ml-4">2023 - 2024 | San Diego, California</p>
                </div>
                <div className="mb-4">
                  <a
                    href="https://argen.com/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:underline"
                  >
                    Argen Corporation
                  </a>
                  <img
                    src="/images/Link.svg"
                    className="h-5 w-3 inline-block ml-1 mb-2" 
                  />
                  <h4 
                    className="text-md text-gray-700 ml-2 cursor-pointer hover:underline"
                    onClick={handleSQAEClick}
                  >
                    Software Quality Assurance Engineer
                  <img
                    src="/images/Popup.svg"
                    className="h-3 w-3 inline-block mb-2" 
                  />
                  </h4>
                  <p className="text-sm text-gray-500 ml-4">2021 - 2023 | San Diego, California</p>
                </div>
              </div>
            </section>

            <section>
              <h1 className="text-xl font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                <span className="border-b border-blue-400">Education</span>
              </h1>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">San Diego State University</h2>
                <p className="text-md text-gray-700 ml-2">Course: B.S. in Computer Science</p>
                <p className="text-md text-gray-700 ml-2">Networking: COMPTIA Networking+ (In Progress)</p>
              </div>
            </section>
          </div>
        {/* Right Column */}
          <div>
            <section className="mb-4">
              <h1 className="text-xl font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                <span className="border-b border-blue-400">Projects</span>
              </h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-md text-gray-700 ml-2">VTEA Project</h2>
                  <h3 className="text-md text-gray-700 ml-2">PCM Head Project</h3>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h1 className="text-xl font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                <span className="border-b border-blue-400">Technical Skills</span>
              </h1>
              <h2 className="text-md text-gray-700 ml-2">Programming Languages</h2>
              <h2 className="text-md text-gray-700 ml-2">Testing Tools</h2>
              <h2 className="text-md text-gray-700 ml-2">Operating Systems</h2>
              <h2 className="text-md text-gray-700 ml-2">CI/CD & DevOps</h2>
              <h2 className="text-md text-gray-700 ml-2">Others</h2>
            </section>

            <section>
                <h1 className="text-xl font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                  <span className="border-b border-blue-400">Soft Skills</span>
                </h1>
              </section>
          </div>
        </div>
      </div>

      {isSWEPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <Card className="relative w-full max-w-xl">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Software Engineer (Developer) Details
              </h2>
              <ul className="list-disc list-inside">
                {softwareDeveloperDescription}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
      
      {isSTEPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <Card className="relative w-full max-w-xl">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Software Test Engineer Details
              </h2>
              <ul className="list-disc list-inside">
                {softwareTestEngineerDescription}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {isSQAEPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <Card className="relative w-full max-w-xl">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Software Quality Assurance Engineer Details
              </h2>
              <ul className="list-disc list-inside">
                {softwareQualityAssuranceEngineerDescription}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

    </div>
  );
};

export default ResumePage;