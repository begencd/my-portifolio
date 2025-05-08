"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SkillIcons from "@/components/icons/SkillIcons";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {t("title")}
      </motion.h2>
      <SkillIcons />
    </section>
  );
}
