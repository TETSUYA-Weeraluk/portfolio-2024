import myImage from "../../../assets/26176.jpg";

function TopContentComponent() {
  return (
    <div className="wrapper-content-center justify-center home-content-center">
      <img
        className="image-portfolio-hover image-portfolio image-portfolio-hover"
        src={myImage}
        alt="image"
      />
      <div className="wrapper-content-center">
        <div className="wrapper-content-center gap-0">
          <p className="flex items-baseline gap-2">
            <span className="text-title">Weeraluk Sopapan</span>
            <span className="text-base-web">(Tee)</span>
          </p>
          <span className="text-sub-title text-tertiary">
            Frontend Developer
          </span>
        </div>
        <span className="text-description-for-job text-description-for-job-hover text-base-web">
          I'm currently looking for Junior Frontend Developer position.
        </span>
      </div>
    </div>
  );
}

export default TopContentComponent;
