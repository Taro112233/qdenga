"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, ChevronDown, Heart, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["Qdenga", "ฆ่า Dengue"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 60); // 60 ms: ความเร็วในการลบทีละตัวอักษร
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 500); // 500 ms: หน่วงเวลาก่อนเริ่มพิมพ์คำถัดไปหลังลบหมด
      }
    } else {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 120); // 120 ms: ความเร็วในการพิมพ์ทีละตัวอักษร
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2400); // 2400 ms: หน่วงเวลาก่อนเริ่มลบหลังพิมพ์ครบทั้งคำ
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50" />
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-red-100 text-red-900 border-red-200">
            WHO รับรอง • ปลอดภัย • มีประสิทธิภาพ
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-red-900">
            {displayText}
            <span className="border-r-2 border-red-900 animate-pulse ml-1">&nbsp;</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            วัคซีนป้องกันไข้เลือดออกได้ทุกสายพันธุ์
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: "ป้องกัน 4 สายพันธุ์",
              desc: "DENV-1,2,3,4",
            },
            { icon: Award, title: "WHO รับรอง", desc: "มาตรฐานสากล" },
            { icon: Users, title: "เหมาะทุกวัย", desc: "ตั้งแต่ 4 ปีขึ้นไป" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
