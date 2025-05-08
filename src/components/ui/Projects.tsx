"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Firebase, and TailwindCSS.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    link: "https://github.com/begencd/ecommerce",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using React, WebSocket, and Ant Design.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    link: "https://github.com/begencd/chat-app",
  },
  {
    title: "Video Streaming Service",
    description: "A video streaming platform using Nuxt.js and HLS.js.",
    image: "https://images.unsplash.com/photo-1611162617210-7d673bf0f crawler",
    link: "https://github.com/begencd/streaming-service",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {t("title")}
      </motion.h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <Button asChild variant="outline">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("viewProject")}
                  </a>
                </Button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
