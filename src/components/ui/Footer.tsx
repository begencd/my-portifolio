import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white dark:bg-black py-4 text-center">
      <p>&copy; 2025 Beğenç D. {t("rights")}</p>
    </footer>
  );
}
