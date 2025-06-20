/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { eye } from "../assets";
import { projects } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ index, name, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <div className='bg-tertiary p-5 rounded-xl flex flex-col justify-between h-[260px]'>
        <div>
          <div className='relative rounded-xl group overflow-hidden h-[140px]'>
            <img
              src={image}
              alt={name}
              className='object-cover w-full h-full transition group-hover:scale-105 rounded-xl'
            />
            <div className='absolute inset-0 hidden group-hover:flex justify-center items-center transition bg-zinc-950/50 rounded-xl'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-[#151030] w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer'
              >
                <img
                  src={eye}
                  alt='eye'
                  className='w-6 h-6 object-contain transition scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                />
              </div>
            </div>
          </div>

          <div className='mt-3'>
            <h3 className='text-white font-bold text-[16px] leading-5 line-clamp-2 h-[42px]'>
              {name}
            </h3>
          </div>
        </div>

        <div className='mt-3 flex flex-wrap gap-2 h-[40px] items-end'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <Slider {...settings} className='mt-20 '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Slider>
    </>
  );
};

export default SectionWrapper(Works, "");
