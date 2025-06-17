"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Shield, Users, Bed, Globe, ShieldPlus } from "lucide-react";

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function useCounter(end: number, duration = 2000, isContinuous = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (!hasStarted) return;
    
    let start: number | null = null;
    let animationFrameId: number;
    
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else if (isContinuous) {
        // Start continuous incrementing after reaching the target
        let lastTimestamp = timestamp;
        function continuousStep(timestamp: number) {
          const elapsed = timestamp - lastTimestamp;
          if (elapsed > 100) { // Update every 100ms
            setCount(prev => prev + Math.floor(Math.random() * 10)); // Random increment between 0-9
            lastTimestamp = timestamp;
          }
          animationFrameId = requestAnimationFrame(continuousStep);
        }
        animationFrameId = requestAnimationFrame(continuousStep);
      }
    }
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, hasStarted, isContinuous]);
  
  return { count, startCounter: () => setHasStarted(true) };
}

export default function StatsSection() {
  const stats = [
    { icon: Shield, number: 80.2, suffix: "%", label: "ป้องกันการติดไข้เลือดออกทุกสายพันธุ์" },
    { icon: ShieldPlus, number: 85.9, suffix: "%", label: "ป้องกันไข้เลือดออกแบบ DHF" },
    { icon: Bed, number: 90.4, suffix: "%", label: "ลดการนอนโรงพยาบาลจากไข้เลือดออก" },
    { icon: Globe, number: 13999900, suffix: "", label: "จำนวนการฉีดวัคซีนทั่วโลก" },
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-r from-red-50 to-rose-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            ประสิทธิภาพที่พิสูจน์แล้ว
          </h2>
          <p className="text-xl text-gray-600">
            ข้อมูลจากการทดสอบทางคลินิก
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((s, i) => {
            const { count, startCounter } = useCounter(s.number, 2000, i === 3); // Only enable continuous for the last stat
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                onViewportEnter={startCounter}
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