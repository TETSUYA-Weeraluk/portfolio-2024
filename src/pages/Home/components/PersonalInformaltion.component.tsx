const PersonalInformaltionComponent = () => {
  const listAboueMe = [
    {
      title: "Name",
      value: "Weeraluk Sopapan",
      icons: "",
    },
    {
      title: "Date of Birth",
      value: "08/07/1998",
    },
    {
      title: "Email",
      value: "Weeraluk.sopa@gmail.com",
    },
    {
      title: "Phone",
      value: "064-0534466",
    },
    {
      title: "Github",
      value: "https://github.com/TETSUYA-Weeraluk",
    },
  ];
  return (
    <div className="wrapper-child-content">
      <h1 className="text-sub-title text-secondary">Personal Information</h1>
      <div className="w-full">
        {listAboueMe &&
          listAboueMe.map((list, index) => (
            <p key={index} className="text-base-web flex items-center gap-1">
              <span>{list.title} : </span>
              <span>{list.value}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default PersonalInformaltionComponent;
