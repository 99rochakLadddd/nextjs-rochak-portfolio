import BgAnim from "@/components/BgAnim";
import { SkillIcon } from "@/components/skill-icon"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React", color: "bg-gradient-to-br from-blue-500 to-cyan-400" },
        { name: "Next.js", color: "bg-gradient-to-br from-gray-800 to-gray-600" },
        { name: "TypeScript", color: "bg-gradient-to-br from-blue-600 to-blue-400" },
        { name: "Tailwind CSS", color: "bg-gradient-to-br from-cyan-400 to-blue-500" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", color: "bg-gradient-to-br from-green-600 to-green-400" },
        { name: "Express", color: "bg-gradient-to-br from-gray-700 to-gray-500" },
        { name: "PostgreSQL", color: "bg-gradient-to-br from-blue-700 to-blue-500" },
        { name: "MongoDB", color: "bg-gradient-to-br from-green-600 to-green-500" },
      ],
    },
    {
      category: "Tools & DevOps",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "Git", color: "bg-gradient-to-br from-orange-600 to-red-500" },
        { name: "Docker", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
        { name: "VS Code", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
        { name: "Figma", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
      ],
    },
  ]

  return (
    <section className="relative my-20 w-full overflow-hidden">
      <BgAnim />
      <div className="relative z-10 px-6">
        <h2 className="font-rosmatika mb-12 text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group new-bg-for-icon-div relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:to-white/5 flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #049ccf1f 0%, #053943ff 100%)",
                }}
              >
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--${category.color.split("-")[1]}), transparent)`,
                }}
              ></div>

              <h3
                className={`font-play mb-8 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.color} mb-4`}
              >
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} color={skill.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
