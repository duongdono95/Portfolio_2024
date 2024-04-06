import AnimatedCircleText from "@/components/AnimatedCircleText";
import Logo from "@/components/Logo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const SectionTechStack = () => {
  const languagues = [
    "Javascript",
    "HTML & CSS",
    "Python",
    "C++",
    "SQL",
  ];
  const webDev = [
    "NextJS",
    "ReactJS",
    "VueJS",
    "Typescript",
    "Redux",
    "Zustand",
    "NodeJS - ExpressJS",
    "AWS Lambda",
    "MongoDB",
  ];
  const others = [
    "Git",
    "Docker",
    "Figma",
    "Photoshop",
    "Illustrator",
  ];
  return (
    <MaxWidthWrapper
      id="techStack"
      className="pb-20 w-full "
    >
      <SectionTitle position="right" title="Techstack" />
      <div className="w-full flex items-center gap-20 py-10 max-lg:flex-col max-lg:items-center">
        <div className="max-w-[50%] w-full">
          <div className="flex flex-col gap-5 items-start justify-between">
            <div className="min-w-52 px-5 py-5 border-2 border-[var(--white01)] rounded-xl">
              <h1 className="uppercase text-2xl py-4 opacity-70">
                Programing Languages:
              </h1>
              <div className="flex gap-10 flex-wrap">
                {languagues.map((lang, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div
                      style={{
                        boxShadow:
                          "1px 1px 5px var(--secondary07)",
                      }}
                      className="w-2 h-2 rounded-[50%] bg-[var(--secondary)]"
                    ></div>
                    <p className="text-lg">{lang}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-52 px-5 py-5 border-2 border-[var(--white01)] rounded-xl">
              <h1 className="uppercase text-2xl py-4 opacity-70">
                Web Development:
              </h1>
              <div className="flex gap-10 flex-wrap">
                {webDev.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div
                      style={{
                        boxShadow:
                          "1px 1px 5px var(--secondary07)",
                      }}
                      className="w-2 h-2 rounded-[50%] bg-[var(--secondary)]"
                    ></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-52 px-5 py-5 border-2 border-[var(--white01)] rounded-xl">
              <h1 className="uppercase text-2xl py-4 opacity-70">
                Others:
              </h1>
              <div className="flex gap-10 flex-wrap">
                {others.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div
                      style={{
                        boxShadow:
                          "1px 1px 5px var(--secondary07)",
                      }}
                      className="w-2 h-2 rounded-[50%] bg-[var(--secondary)]"
                    ></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[50%] w-full h-[500px] flex items-center justify-center ">
          <div className=" animated-circle-color-change relative w-96 h-96 rounded-[50%]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AnimatedCircleText
                scale={1}
                content="GIT -• •- DOCKER -• •- FIGMA -• •- PHOTOSHOP -• •- ILLUSTRATOR -• •-"
                speed="slow"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AnimatedCircleText
                scale={2}
                content="JAVASCRIPT •• - •• HTML/CSS •• - •• PYTHON •• - •• C++ •• - •• SQL ••-••"
                speed="medium"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AnimatedCircleText
                scale={3}
                content="• NEXTJS • REACTJS • VUEJS • TYPESCRIPT • NODEJS • AWS • MONGODB"
                speed="fast"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Logo scale={1.2} color="white" />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SectionTechStack;
