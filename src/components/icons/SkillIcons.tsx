"use client";
import { AnimatePresence, motion } from "framer-motion";
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
];

export default function SkillIcons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20, rotate: -360 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
      y: -8,
      rotate: 5,
      boxShadow: "0 6px 20px rgba(139, 92, 246, 0.5)",
      transition: { duration: 0.2, type: "spring", stiffness: 300 },
    },
    bounce: {
      y: [-2, 2],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 0.5, // Random delay for varied bounce
        },
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatePresence>
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors"
            variants={itemVariants}
            initial="hidden"
            animate={["visible"]}
            whileHover="hover"
            layout
          >
            <motion.div
              className="mb-2"
              whileHover={{ color: "rgb(147, 51, 234)" }} // Shift to --accent on hover
              transition={{ duration: 0.2 }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
