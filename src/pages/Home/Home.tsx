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
            className="h-[300px] w-[300px] rounded-full"
            src={myImage}
            alt="image"
          />
          <span className="text-4xl font-bold text-primary ">
            Weeraluk Sopapan
          </span>
          <span className="text-xl">Frontend Developer</span>
        </div>
      </div>
    </div>
  );
}
