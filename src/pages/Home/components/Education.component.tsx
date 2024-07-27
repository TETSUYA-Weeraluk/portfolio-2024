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
      <div className="w-full wrapper-child-content ">
        {listEducation &&
          listEducation.map((list, index) => (
            <div className="w-full" key={list.province}>
              <div className="w-full">
                <p className="flex justify-between text-lg">
                  <span>{list.school}</span>
                  <span>{list.province}</span>
                </p>
                <p className="flex justify-between italic">
                  <span>{list.description}</span>
                  <span>{list.year}</span>
                </p>
              </div>
              {index !== listEducation.length - 1 && (
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[1px] w-full border border-dashed mt-2"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EducationComponent;
