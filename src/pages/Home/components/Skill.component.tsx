import ImageProjectComponent from "./ImageProject.component";
import imgReact from "../../../assets/react.png";
import imgAngular from "../../../assets/angular.png";
import imgHtml from "../../../assets/html.png";
import imgCss from "../../../assets/css.png";
import imgJs from "../../../assets/javascript.png";
import imgTs from "../../../assets/typescript.png";
import imgNode from "../../../assets/nodejs.png";
import imgNestJs from "../../../assets/nestjs.png";
import imgMongo from "../../../assets/mongodb.png";
import imgPostgresql from "../../../assets/postgresql.png";
import imgDocker from "../../../assets/docker.png";
import prisma from "../../../assets/prisma.png";
import redux from "../../../assets/redux.png";
import rxjs from "../../../assets/rxjs.png";
import git from "../../../assets/git.png";

const SkillComponent = () => {
  const listSkill = [
    {
      name: "HTML",
      img: imgHtml,
    },
    {
      name: "CSS",
      img: imgCss,
    },
    {
      name: "JavaScript",
      img: imgJs,
    },
    {
      name: "TypeScript",
      img: imgTs,
    },
    {
      name: "React",
      img: imgReact,
    },
    {
      name: "Redux",
      img: redux,
    },
    {
      name: "Angular",
      img: imgAngular,
    },
    {
      name: "RxJS",
      img: rxjs,
    },
    {
      name: "NodeJS",
      img: imgNode,
    },
    {
      name: "NestJS",
      img: imgNestJs,
    },
    {
      name: "MongoDB",
      img: imgMongo,
    },
    {
      name: "PostgreSQL",
      img: imgPostgresql,
    },
    {
      name: "Prisma",
      img: prisma,
    },
    {
      name: "Docker",
      img: imgDocker,
    },
    {
      name: "Git",
      img: git,
    },
  ];
  return (
    <>
      <h1 className="text-title text-center">Skill</h1>
      <div className="wrapper-header p-0 flex-wrap justify-center">
        {listSkill &&
          listSkill.map((skill) => (
            <div className="wrapper-content-center">
              <ImageProjectComponent skill>
                <span className="text-tertiary">
                  <img
                    className="image-skill"
                    src={skill.img}
                    alt={skill.name}
                  />
                </span>
              </ImageProjectComponent>
              <span className="text-base-web">{skill.name}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkillComponent;
