import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiTensorflow} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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
    icon: FaJava ,
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
    skill: "JavaScript",
     icon: IoLogoJavascript,
  },
  { 
    skill: "TypeScript",
    icon: SiTypescript,
 },
  { 
    skill: "ReactJS",
     icon: FaReact ,
  },
  { 
    skill: "Redux",
     icon: SiRedux ,
    },
  { 
    skill: "NextJS",
     icon: SiNextdotjs,
     },
  { 
    skill: "TailwindCSS",
     icon: RiTailwindCssFill,
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
