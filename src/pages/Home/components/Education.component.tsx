import { Divider } from "@mui/joy";

const EducationComponent = () => {
  const listEducation = [
    {
      school: "Bangkok University",
      province: "Pathum thani",
      year: "2017-2021",
      description: "Bachelor's degree in Computer Science. 2.89 GPA",
    },
    {
      school: "Phuket Wittayalai School",
      province: "Phuket",
      year: "2011-2017",
      description: "English-Mathematics Program. 2.98 GPA",
    },
  ];

  return (
    <div className="wrapper-child-content">
      <h1 className="text-sub-title text-secondary">Education</h1>
      <div className="w-full wrapper-child-content space-y-2">
        {listEducation &&
          listEducation.map((list, index) => (
            <div className="w-full space-y-4" key={list.province}>
              <div className="w-full">
                <p className="flex justify-between text-base-web">
                  <span>{list.school}</span>
                  <span>{list.province}</span>
                </p>
                <p className="flex justify-between italic text-sm lg:text-base">
                  <span>{list.description}</span>
                  <span>{list.year}</span>
                </p>
              </div>
              {index !== listEducation.length - 1 && <Divider />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EducationComponent;
