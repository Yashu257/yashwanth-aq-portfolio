import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Telegram AI Chatbot",
    year: "Dec 2024",
    align: "right",
    image: "https://cdn-icons-png.flaticon.com/512/906/906377.png",
    link: "https://github.com/Yashu257/telegram-ai-chatbot",
  },
  {
    name: "Healthcare Bot",
    year: "Jan 2025",
    align: "left",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    link: "#",
  },
  {
    name: "AI Voice Assistant (Jarvis)",
    year: "Mar 2025",
    align: "right",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712034.png",
    link: "#",
  },
  {
    name: "GameWinnerPred",
    year: "Apr 2025",
    align: "left",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909891.png",
    link: "#",
  },
  {
    name: "Skin Disorder Detection",
    year: "Apr 2025",
    align: "right",
    image: "https://cdn-icons-png.flaticon.com/512/2807/2807324.png",
    link: "#",
  },
  {
    name: "Heart Disease Prediction",
    year: "Apr 2025",
    align: "left",
    image: "https://cdn-icons-png.flaticon.com/512/4472/4472582.png",
    link: "#",
  },
  {
    name: "Earthquake Damage Prediction",
    year: "Apr 2025",
    align: "right",
    image: "https://cdn-icons-png.flaticon.com/512/10529/10529507.png",
    link: "#",
  },
  {
    name: "House Price Prediction",
    year: " Apr 2025",
    align: "left",
    image: "https://cdn-icons-png.flaticon.com/512/2955/2955686.png",
    link: "#",
  },
  {
    name: "Event Booking Website",
    year: "Dec 2024",
    align: "right",
    image: "https://cdn-icons-png.flaticon.com/512/9068/9068892.png",
    link: "#",
  },
  {
    name: "Energy Transition Analysis",
    year: "Jan 2025",
    align: "left",
    image: "https://cdn-icons-png.flaticon.com/512/2917/2917999.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
