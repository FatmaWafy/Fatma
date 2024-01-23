/*eslint-disable */

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap gap-10 justify-center mt-10'>
        {technologies.map((technology, index) => (
          <div key={technology.name} className='w-28 h-28 '>
            <Tilt>
              <motion.div
                variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
                className='violet-gradient p-[1px] rounded-[20px] shadow-card'
              >
                <div className='w-25 h-25 bg-tertiary rounded-[20px] p-1 flex justify-evenly items-center flex-col transition'>
                  <img
                    className='w-20 h-20'
                    src={technology.icon}
                    alt={technology.name}
                  />
                  <span className='text-white text-sm mt-2'>
                    {technology.name}
                  </span>
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
