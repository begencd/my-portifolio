"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "tk";

  const handleChange = (value: string) => {
    const newPath = pathname.replace(/^\/[^\/]+/, `/${value}`);
    router.push(newPath);
  };

  return (
    <Select value={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder={t("selectLanguage")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="tk">Türkmençe</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Русский</SelectItem>
        <SelectItem value="tr">Türkçe</SelectItem>
      </SelectContent>
    </Select>
  );
}
