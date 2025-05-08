import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white dark:bg-black py-6 text-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm">© 2025 Beğenç D. {t("rights")}</p>
    </footer>
  );
}
