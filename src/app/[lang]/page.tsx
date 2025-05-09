"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 relative"
    >
      <Hero />
      <Skills />
      <Contact />
    </motion.div>
  );
}
