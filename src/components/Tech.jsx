import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const TechCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[110px] w-full items-center'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 3,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-1 min-h-[100px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-10 h-10 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <TechCard icon={technology.icon}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");