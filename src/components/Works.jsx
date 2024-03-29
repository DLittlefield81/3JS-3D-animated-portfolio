import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, games } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const GameCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={{ up: { spring: { delay: index * 0.5, damping: 0.75 } } }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* GitHub Overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Card Name & Description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[16px]">
            {description}
          </p>
        </div>
        {/* HASHTAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={{ up: { spring: { delay: index * 0.5, damping: 0.75 } } }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* GitHub Overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Card Name & Description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[16px]">
            {description}
          </p>
        </div>
        {/* HASHTAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const handleButtonClick = () => {
    window.location.href = "https://offworldportal.ca/";
  };

  return (
    <>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
      <div className="w-full flex">
        <div
          
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {games.map((game, index) => (
          <GameCard key={`game-${index}`} index={index} {...game} />
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={handleButtonClick}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          View My Games on Offworld Portal
        </button>
      </div>
    </>
  );
}

export default SectionWrapper(Works, "");
