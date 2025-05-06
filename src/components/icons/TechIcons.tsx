import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaVuejs,
//   FaJsSquare,
//   FaCss3Alt,
//   FaGitAlt,
// } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiRedux,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Vue.js", icon: <SiVuedotjs size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Redux", icon: <SiRedux size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
];

export default function TechIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          {tech.icon}
          <span className="mt-2">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
