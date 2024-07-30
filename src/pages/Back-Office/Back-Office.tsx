import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../store";
import { fetchPortfolio } from "../../store/homeSlice";
import TopContentBO from "./components/TopContent-BO";
import ProjectBO from "./components/Project-BO";
import SkillBO from "./components/Skill-BO";
import AboutMeBO from "./components/AboutMe-BO";
import ExpBO from "./components/Exp-BO";
import "./Back-Office.css";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const BackOfficePage = () => {
  const dispatch = useAppDispatch();
  const portfolio = useSelector((state: RootState) => state.home.portfolio);

  const method = useForm();

  const { reset } = method;

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  useEffect(() => {
    if (portfolio) {
      reset(portfolio);
    }
  }, [portfolio, reset]);

  return (
    <FormProvider {...method}>
      <div className="wrapper-content text-tertiary gap-16">
        <ToastContainer />

        <div className="w-full bg-image min-h-screen max-h-screen">
          <TopContentBO />
        </div>

        <div className="padding-content space-y-10">
          <AboutMeBO />
        </div>

        <div className="padding-content space-y-10">
          <ExpBO />
        </div>

        <div className="padding-content space-y-10">
          <SkillBO />
        </div>

        <div className="padding-content space-y-10 mb-10">
          <ProjectBO />
        </div>
      </div>
    </FormProvider>
  );
};

export default BackOfficePage;
