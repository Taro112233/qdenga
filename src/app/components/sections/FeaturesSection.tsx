"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Heart, Zap, Activity } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "ป้องกันครบทุกสายพันธุ์",
      desc: "DENV-1 ถึง DENV-4",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "WHO รับรอง",
      desc: "ผ่านการทดสอบมาตรฐานสากล",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "ฉีดได้ทุกวัย",
      desc: "ฉีดได้ในผู้ที่มีอายุตั้งแต่ 4 ปีขึ้นไป",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "ฉีดเพียง 2 เข็ม",
      desc: "ฉีดเพียง 2 เข็ม ห่างกัน 3 เดือน",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Activity,
      title: "แนะนำให้ฉีดในคนที่มีโรคร่วม",
      desc: "ช่วยลดความเสี่ยงจากไข้เลือดออก",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: Heart,
      title: "ผลข้างเคียงน้อย",
      desc: "ปวดบริเวณฉีดเล็กน้อย มีไข้เล็กน้อย",
      gradient: "from-red-500 to-red-600 ",
    },
  ];

  return (
    <section
      id="features"
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
            ทำไมต้องเลือก Qdenga?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            วัคซีนไข้เลือดออกที่ครอบคลุมและปลอดภัยที่สุด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${f.gradient} rounded-full mb-4`}
                  >
                    <f.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}