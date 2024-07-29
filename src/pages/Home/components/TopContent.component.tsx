import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function TopContentComponent() {
  const aboutMe = useSelector((state: RootState) => state.home.portfolio);

  return (
    <div className="wrapper-content-center justify-center home-content-center">
      <img
        className="image-portfolio-hover image-portfolio image-portfolio-hover"
        src={`/assets/${aboutMe.image}`}
        alt="image"
      />
      <div className="wrapper-content-center">
        <div className="wrapper-content-center gap-0">
          <p className="flex items-baseline gap-2">
            <span className="text-title">{aboutMe.name}</span>
            <span className="text-base-web">({aboutMe.nickname})</span>
          </p>
          <span className="text-sub-title text-tertiary">
            {aboutMe.position}
          </span>
        </div>
        <span className="text-description-for-job text-description-for-job-hover text-base-web">
          {aboutMe.welcomeText}
        </span>
      </div>
    </div>
  );
}

export default TopContentComponent;
