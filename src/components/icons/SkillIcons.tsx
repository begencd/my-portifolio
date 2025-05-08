"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiVuedotjs,
  SiReact,
  SiNuxtdotjs,
  SiNextdotjs,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiAntdesign,
  SiSwiper,
  SiWebflow,
  SiGithub,
} from "react-icons/si";
import { BookOpen, Code } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "jQuery", icon: <SiJquery size={32} /> },
  { name: "Vue.js", icon: <SiVuedotjs size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Nuxt.js", icon: <SiNuxtdotjs size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "CSS", icon: <SiCss3 size={32} /> },
  { name: "SCSS", icon: <SiSass size={32} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} /> },
  { name: "ElementPlus", icon: <BookOpen size={32} /> },
  { name: "Vuetify", icon: <SiVuedotjs size={32} /> },
  { name: "Pinia", icon: <Code size={32} /> },
  { name: "Vue Query", icon: <Code size={32} /> },
  { name: "Axios", icon: <Code size={32} /> },
  { name: "VueUse", icon: <Code size={32} /> },
  { name: "Vue Router", icon: <Code size={32} /> },
  { name: "React Router", icon: <SiReact size={32} /> },
  { name: "React Query", icon: <SiReact size={32} /> },
  { name: "Redux", icon: <Code size={32} /> },
  { name: "Redux Toolkit", icon: <Code size={32} /> },
  { name: "Zustand", icon: <Code size={32} /> },
  { name: "Ant Design", icon: <SiAntdesign size={32} /> },
  { name: "WebSocket", icon: <SiWebflow size={32} /> },
  { name: "Swiper", icon: <SiSwiper size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
  { name: "HLS.js", icon: <Code size={32} /> },
  { name: "Framer Motion", icon: <Code size={32} /> },
  { name: "Shadcn UI", icon: <Code size={32} /> },
  { name: "Git", icon: <SiGithub size={32} /> },
];

export default function SkillIcons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-primary mb-2">{skill.icon}</div>
          <span className="text-sm font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
