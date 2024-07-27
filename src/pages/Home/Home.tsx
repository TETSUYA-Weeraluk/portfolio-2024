import HeaderDefault from "../../components/Header/HeaderDefault";
import "./home.css";
import myImage from "../../assets/26176.jpg";

export default function Home() {
  return (
    <div className="text-tertiary">
      <div className="w-full bg-image min-h-screen max-h-screen">
        <HeaderDefault />
        <div className="flex flex-col items-center justify-center home-content-center gap-4">
          <img
            className="h-[300px] w-[300px] rounded-full hover:h-[400px] hover:w-[400px] transition-all duration-500 ease-in-out"
            src={myImage}
            alt="image"
          />
          <div className="flex-item-col gap-4">
            <div className="flex-item-col">
              <p className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary text-test">
                  Weeraluk Sopapan
                </span>
                <span className="text-2xl">(Tee)</span>
              </p>
              <span className="text-3xl">Frontend Developer</span>
            </div>
            <span className="text-description-for-job">
              I'm currently looking for Junior Frontend Developer position.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
