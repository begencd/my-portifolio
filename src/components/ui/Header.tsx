import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Beğenç D.
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#skills" className="hover:text-gray-500">
            {t("skills")}
          </Link>
          <Link href="#contact" className="hover:text-gray-500">
            {t("contact")}
          </Link>
          <LanguageSwitcher />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white dark:bg-black p-4"
        >
          <Link href="#skills" className="block py-2 hover:text-gray-500">
            {t("skills")}
          </Link>
          <Link href="#contact" className="block py-2 hover:text-gray-500">
            {t("contact")}
          </Link>
          <LanguageSwitcher />
        </motion.div>
      )}
    </motion.header>
  );
}
