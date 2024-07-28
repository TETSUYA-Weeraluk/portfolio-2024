import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const PersonalInformaltionComponent = () => {
  // const dynamicIconWithData = ({
  //   icon,
  //   title,
  //   value,
  // }: {
  //   icon: string;
  //   title: string;
  //   value: string;
  // }) => {
  //   const Icon = Icons[icon as keyof typeof Icons];

  //   return (
  // <p key={title} className="text-base-web flex items-baseline gap-1">
  //   {Icon && <Icon fontSize="medium" />}
  //   <span>{title} : </span>
  //   <span>{value}</span>
  // </p>
  //   );
  // };

  const dynamicIcon = (icon: string, library: "Fa" | "Md") => {
    switch (library) {
      case "Fa": {
        const Icon = FaIcons[icon as keyof typeof FaIcons];
        return Icon && <Icon fontSize="20" />;
      }
      case "Md": {
        const Icon = MdIcons[icon as keyof typeof MdIcons];
        return Icon && <Icon fontSize="20" />;
      }
      default:
        return null;
    }
  };

  const listAboueMe: {
    icon: string;
    title: string;
    value: string;
    library: "Fa" | "Md";
  }[] = [
    {
      title: "Name",
      value: "Weeraluk Sopapan",
      icon: "FaAddressCard",
      library: "Fa",
    },
    {
      title: "Date of Birth",
      value: "08/07/1998",
      icon: "FaBirthdayCake",
      library: "Fa",
    },
    {
      title: "Email",
      value: "Weeraluk.sopa@gmail.com",
      icon: "MdEmail",
      library: "Md",
    },
    {
      title: "Phone",
      value: "064-0534466",
      icon: "FaPhoneAlt",
      library: "Fa",
    },
    {
      title: "Github",
      value: "https://github.com/TETSUYA-Weeraluk",
      icon: "FaGithub",
      library: "Fa",
    },
  ];

  return (
    <div className="wrapper-child-content">
      <h1 className="text-sub-title text-secondary">Personal Information</h1>
      <div className="w-full">
        {listAboueMe &&
          listAboueMe.map((list) => (
            <p
              key={list.title}
              className="text-base-web items-stretch flex gap-1"
            >
              {dynamicIcon(list.icon, list.library)}

              <span>{list.title} : </span>
              <span>{list.value}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default PersonalInformaltionComponent;
