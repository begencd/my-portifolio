"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { SiGithub } from "react-icons/si";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations("Contact");
  const tForm = useTranslations("ContactForm");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus(tForm("error_invalid_email"));
      setIsLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus(tForm("success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Firestore Hatası:", error.message);
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
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg"
          >
            {t("cv")}
          </motion.a>
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
