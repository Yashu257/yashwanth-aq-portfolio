import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="w-full py-20 bg-dark text-white">
      <div className="max-w-[1200px] px-4 mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-center mt-12">
          <AllSkills />
        </div>

        {/* Mobile / Tablet */}
        <div className="block lg:hidden mt-12">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
