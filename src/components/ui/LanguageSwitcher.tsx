import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const [locale, setLocale] = useState("tr");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
    router.push(`/${e.target.value}`);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-transparent border-none"
      aria-label={t("selectLanguage")}
    >
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}
