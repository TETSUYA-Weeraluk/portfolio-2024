import { Link } from "react-router-dom";
// import logo from "../../assets/teddy.png";
import NavItemComponents from "./NavItem.components";

const HeaderDefault = () => {
  const nameItems = [
    {
      to: "about-me",
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
  ];
  return (
    <div className="navbar padding-content">
      <Link to="/" className="wrapper-header">
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <span className="text-portfolio">Portfolio</span>
      </Link>
      <div className="wrapper-header text-tertiary">
        {nameItems.map((item, index) => (
          <NavItemComponents key={index} to={item.to} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default HeaderDefault;
