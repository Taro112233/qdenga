"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Shield, Users, CheckCircle, Globe } from "lucide-react";

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [end, duration]);
  return count;
}

export default function StatsSection() {
  const stats = [
    { icon: Shield, number: 80, suffix: "%", label: "ประสิทธิภาพ" },
    { icon: Users, number: 28000, suffix: "+", label: "ผู้ทดสอบ" },
    { icon: CheckCircle, number: 95, suffix: "%", label: "ความปลอดภัย" },
    { icon: Globe, number: 13, suffix: "+", label: "ประเทศรับรอง" },
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            ประสิทธิภาพที่พิสูจน์แล้ว
          </h2>
          <p className="text-xl text-gray-600">
            ข้อมูลจากการทดสอบทางคลินิกที่เข้มงวด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((s, i) => {
            const count = useCounter(s.number, 2000);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-xl">
                  <s.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {count}
                  {s.suffix}
                </div>
                <div className="text-gray-600 font-medium">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
