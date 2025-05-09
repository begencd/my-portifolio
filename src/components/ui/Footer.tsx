import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-card/80 dark:bg-card/80 py-6 text-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm">© 2025 Begenç D. {t("rights")}</p>
    </footer>
  );
}
