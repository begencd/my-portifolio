"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Send, Eye, Download } from "lucide-react"; // Eye ve Download ikonları eklendi
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGithub } from "react-icons/si";
import { Link } from "@/i18n/routing"; // next-intl’in Link bileşeni

// Form verileri için tip tanımı
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations("Contact");
  const tForm = useTranslations("ContactForm");
  const locale = useLocale();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Form gönderimi için asenkron işleyici
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // E-posta doğrulama için regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus(tForm("error_invalid_email"));
      setIsLoading(false);
      return;
    }

    try {
      // EmailJS ile form verilerini gönder
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setStatus(tForm("success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Hatası:", error.message);
      setStatus(`${tForm("error")} (${error.message})`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {tForm("title")}
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <p className="flex justify-center items-center gap-2">
            <Mail /> <span>{t("email")}:</span> begench.d.2004@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <SiGithub />
            <span>{t("github")}:</span>
            <a
              href="https://github.com/begencd"
              target="_blank"
              rel="noopener noreferrer"
            >
              begencd
            </a>
          </p>
          <p className="flex justify-center items-center gap-2">
            <Send />
            <span>{t("telegram")}:</span>
            <a
              href="https://t.me/begencd"
              target="_blank"
              rel="noopener noreferrer"
            >
              @begencd
            </a>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {/* View CV Butonu */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/resume"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg"
              >
                <Eye className="mr-2 h-5 w-5" />
                {t("view_cv")} {/* Çeviri dosyasına eklenecek */}
              </Link>
            </motion.div>
            {/* Download CV Butonu */}
            <motion.a
              href={`/resumes/resume_${locale}.md`}
              download={`Begenç_Daňatarow_Resume_${locale}.md`}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {t("download_cv")} {/* Çeviri dosyasına eklenecek */}
            </motion.a>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              {tForm("name")}
            </label>
            <Input
              id="name"
              placeholder={tForm("name_placeholder")}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {tForm("email")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={tForm("email_placeholder")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {tForm("message")}
            </label>
            <Textarea
              id="message"
              placeholder={tForm("message_placeholder")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? tForm("sending") : tForm("send")}
          </Button>
          {status && (
            <p
              className={`text-center text-sm ${
                status.includes(tForm("error"))
                  ? "text-destructive"
                  : "text-primary"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
