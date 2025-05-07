"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import TechIcons from "@/components/icons/TechIcons";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        {t("title")}
      </motion.h2>
      <TechIcons />
    </section>
  );
}
