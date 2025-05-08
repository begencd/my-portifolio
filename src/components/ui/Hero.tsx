"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="py-32 text-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        {t("title")}
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
      >
        {t("description")}
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button asChild size="lg">
          <a href="#contact">{t("cta")}</a>
        </Button>
      </motion.div>
    </section>
  );
}
