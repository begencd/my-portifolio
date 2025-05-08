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

export default function Contact() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus(t("success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(t("error"));
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
        {t("title")}
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <p className="flex justify-center items-center gap-2">
            <Mail /> begench.d.2004@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <SiGithub />
            <a
              href="https://github.com/begencd"
              target="_blank"
              rel="noopener noreferrer"
            >
              begencd
            </a>
          </p>
          <p className="flex justify-center items-center gap-2">
            <Send />{" "}
            <a
              href="https://t.me/begencd"
              target="_blank"
              rel="noopener noreferrer"
            >
              @begencd
            </a>
          </p>
          <motion.a
            href="https://your-cv-url.com"
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
          <Input
            placeholder={t("name")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <Textarea
            placeholder={t("message")}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
          <Button type="submit" className="w-full">
            {t("send")}
          </Button>
          {status && <p className="text-center text-sm">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
