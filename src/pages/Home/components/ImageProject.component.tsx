import Tilt from "react-parallax-tilt";
import { JSX } from "react";

const ImageProjectComponent = (props: {
  children: JSX.Element;
  skill: boolean;
}) => {
  return (
    <Tilt
      className={`background-stripes ${
        props.skill ? "parallax-effect-skill background-gradient-effect" : "parallax-effect"
      }`}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="20px"
    >
      <div className="inner-element">{props.children}</div>
    </Tilt>
  );
};

export default ImageProjectComponent;
