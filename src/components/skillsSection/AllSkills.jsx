import SingleSkill from "./SingleSkill";

import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiTensorflow } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiBrain } from "react-icons/bi";
import { PiChartLineUpBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Machine Learning",
    icon: BiBrain,
  },
  {
    skill: "Deep Learning",
    icon: SiTensorflow,
  },
  {
    skill: "AI",
    icon: GiArtificialIntelligence,
  },
  {
    skill: "Data Analysis",
    icon: PiChartLineUpBold,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  }, 
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
