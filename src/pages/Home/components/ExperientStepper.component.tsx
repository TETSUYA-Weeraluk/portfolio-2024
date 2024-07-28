const ExperientStepperComponent = () => {
  const listExperience = [
    {
      company: "Maya Wizard Co.,Ltd.",
      date: "April 2022 - April 2023",
      position: "Frontend Developer",
      description: [
        `Developed and improved web applications for Back-office, focusing on high performance and
responsiveness. Used TypeScript to increase code stability and reduce errors.`,
        `Developed and improved systems for displaying datasets in tables and charts, making it easier for
users to analyze.`,
        `Contributed to the development of an Event Management System for creating and managing events,
including schedule management and forms validation to ensure accurate and complete user data entry,
improving user convenience and reducing operational issues.`,
        `Contributed to the development of an E-Commerce system capable of managing products, orders, and
promotions. Enabled easy and convenient creation and editing of web pages through a management
system.`,
        `Worked closely with UX/UI designers and backend developers to design and resolve various issues,
incorporating user feedback to continuously improve the system.
`,
      ],
    },
    {
      company: "Nilecon Thailand Co., Ltd.",
      date: "January 2021 - April 2021",
      position: "Frontend Developer Intern",
      description: [
        `Developed complex user interfaces with HTML, CSS, JavaScript, and React, ensuring a user-friendly
experience.`,
        `Developed and tested responsive design support for all screen sizes.`,
        `Designed, developed, and tested APIs using Node.js and Express, connecting to Mysql databases and
sending data back to the client to ensure correct functionality.`,
      ],
    },
  ];
  return (
    <>
      {listExperience &&
        listExperience.map((experience, index) => (
          <div className="wrapper-content">
            <div key={experience.company} className="mb-4">
              <p className="flex items-center justify-between">
                <span className="text-base-web">{experience.company}</span>
                <span className="text-base-web">{experience.date}</span>
              </p>
              <span className="text-sm lg:text-base italic">
                {experience.position}
              </span>
              <ul className="text-base-web space-y-4 mt-4">
                {experience.description.map((desc, index) => (
                  <li key={index}>- {desc}</li>
                ))}
              </ul>
            </div>
            {index !== listExperience.length - 1 && (
              <div className="wrapper-content items-center justify-center w-full mb-4">
                <div className="w-[10px] h-[10px] rounded-full bg-gray-400"></div>
                <div className="h-[100px] w-[1px] bg-gray-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-gray-400"></div>
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default ExperientStepperComponent;
