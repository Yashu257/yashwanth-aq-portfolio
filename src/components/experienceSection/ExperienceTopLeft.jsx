import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites" />
      </div>
      <p className="text-center">
      With 6 months of experience working as an AI Engineer/Data Scientist intern, I specialize in building intelligent, data-driven systems. During my internship at Rubix Company, I have been involved in implementing scalable solutions, enhancing the performance of web applications, and developing reusable components. I am passionate about solving real-world problems through AI and machine learning techniques while prioritizing user experience
      </p>
      <ExperienceInfo number="$" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
