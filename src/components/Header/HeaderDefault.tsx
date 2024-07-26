import { Link } from "react-router-dom";
import logo from "../../assets/teddy.png";
import NavItemComponents from "./NavItem.components";

const HeaderDefault = () => {
  const nameItems = [
    {
      to: "about",
      text: "About",
    },
    {
      to: "experience",
      text: "Experience",
    },
    {
      to: "skill",
      text: "Skill",
    },
    {
      to: "project",
      text: "Project",
    },
    {
      to: "contact",
      text: "Contact",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="flex-item-gap">
        <img className="h-[50px] w-[50px]" src={logo} alt="logo" />
        <span className="text-tertiary text-3xl">Portfolio</span>
      </Link>
      <div className="flex-item-gap text-tertiary">
        {nameItems.map((item, index) => (
          <NavItemComponents key={index} to={item.to} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HeaderDefault;
