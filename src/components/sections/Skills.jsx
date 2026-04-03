import { skills } from "../../data/data";
import SectionHeader from "../ui/SectionHeader";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <section id="skills" className="bg-bg-main py-16">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHeader subtitle="My" title="Skills" highlight="Overview" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
