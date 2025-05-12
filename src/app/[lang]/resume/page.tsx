"use client";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

async function fetchResume(locale: string) {
  const res = await fetch(`/resumes/resume_${locale}.md`);
  if (!res.ok) {
    throw new Error("Özgeçmiş dosyası bulunamadı");
  }
  return res.text();
}

export default function ResumePage() {
  const locale = useLocale();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResume = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const content = await fetchResume(locale);
        setMarkdownContent(content);
      } catch (err) {
        console.error("Hata:", err);
        setError("Özgeçmiş yüklenemedi. Dosya bulunamadı.");
      } finally {
        setIsLoading(false);
      }
    };

    loadResume();
  }, [locale]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="animate-pulse text-2xl font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          Yükleniyor...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="text-red-600 dark:text-red-400 font-semibold text-xl bg-red-50 dark:bg-red-900/30 p-6 rounded-lg shadow-md">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-700 dark:prose-a:text-blue-300 prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal prose-li:pl-4 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-700 prose-blockquote:p-4 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900/20">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
