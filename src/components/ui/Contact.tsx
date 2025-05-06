import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Github, Send } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {t("title")}
      </motion.h2>
      <div className="space-y-4">
        <p className="flex justify-center items-center gap-2">
          <Mail /> {t("email")}
        </p>
        <p className="flex justify-center items-center gap-2">
          <Github /> <a href="https://github.com/begencd">{t("github")}</a>
        </p>
        <p className="flex justify-center items-center gap-2">
          <Send /> <a href="https://t.me/begencd">{t("telegram")}</a>
        </p>
        <motion.a
          href="https://your-cv-url.com" // CV URL'sini buraya ekle
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg"
        >
          {t("cv")}
        </motion.a>
      </div>
    </section>
  );
}
