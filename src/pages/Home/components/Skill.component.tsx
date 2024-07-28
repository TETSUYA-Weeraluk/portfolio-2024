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
import tailwind from "../../../assets/tailwind.png";
import mui from "../../../assets/mui.png";
import primeng from "../../../assets/primeng.png";
import express from "../../../assets/express.png";

interface Skills {
  title: string;
  skills: {
    name: string;
    image: string;
  }[];
}

const SkillComponent = () => {
  const skills: Skills[] = [
    {
      title: "Programming languages",
      skills: [
        {
          name: "HTML",
          image: imgHtml,
        },
        {
          name: "CSS",
          image: imgCss,
        },
        {
          name: "JavaScript",
          image: imgJs,
        },
        {
          name: "TypeScript",
          image: imgTs,
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          image: imgReact,
        },
        {
          name: "Redux",
          image: redux,
        },
        {
          name: "Material UI",
          image: mui,
        },
        {
          name: "Angular",
          image: imgAngular,
        },
        {
          name: "PrimeNG",
          image: primeng,
        },
        {
          name: "Angular Material",
          image: imgAngular,
        },
        {
          name: "RxJS",
          image: rxjs,
        },
        {
          name: "Tailwind CSS",
          image: tailwind,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "NodeJS",
          image: imgNode,
        },
        {
          name: "Express",
          image: express,
        },
        {
          name: "NestJS",
          image: imgNestJs,
        },
        {
          name: "MongoDB",
          image: imgMongo,
        },
        {
          name: "PostgreSQL",
          image: imgPostgresql,
        },
        {
          name: "Prisma",
          image: prisma,
        },
      ],
    },
    {
      title: "Tools & Another skill",
      skills: [
        {
          name: "Docker",
          image: imgDocker,
        },
        {
          name: "Git",
          image: git,
        },
      ],
    },
  ];

  return (
    <>
      <div className="text-title text-center underline-offset-8 underline">
        Skill
      </div>
      <div className="flex flex-wrap gap-4">
        {skills &&
          skills.map((skill) => (
            <div className="space-y-4 bg-gradient-to-b from-[#020024]  to-[#c73659] p-4 rounded-lg">
              <h1 className="text-sub-title text-secondary">{skill.title}</h1>
              <div className="wrapper-header p-0 flex-wrap">
                {skill.skills &&
                  skill.skills.map((skill) => (
                    <div className="wrapper-content-center">
                      <ImageProjectComponent skill>
                        <span className="text-tertiary">
                          <img
                            className="image-skill"
                            src={skill.image}
                            alt={skill.name}
                          />
                        </span>
                      </ImageProjectComponent>
                      <span className="text-base-web">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkillComponent;
