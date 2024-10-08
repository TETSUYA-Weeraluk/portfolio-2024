import { Link as ScrollLink } from "react-scroll";

interface NavItemComponentsProps {
  to: string;
  text: string;
}

const NavItemComponents = (props: NavItemComponentsProps) => {
  const { to, text } = props;
  return (
    <ScrollLink
      className="nav-item nav-item-hover"
      to={to}
      spy={true}
      smooth={true}
      duration={1000}
      delay={200}
    >
      {text}
    </ScrollLink>
  );
};

export default NavItemComponents;
