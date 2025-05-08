"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwicher";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Beğenç D.
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t("toggleMenu")}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-black p-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
