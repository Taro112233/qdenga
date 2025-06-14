"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            เกี่ยวกับวัคซีน Qdenga
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Qdenga เป็นวัคซีนป้องกันไข้เด็งกี่ชนิด mRNA ที่ครอบคลุมสี่สายพันธุ์
            (DENV-1 ถึง DENV-4) ได้รับการรับรองจาก WHO และ FDA
          </p>
          <p className="text-lg text-gray-700">
            ช่วยสร้างภูมิคุ้มกันภายใน 30 วัน และคุ้มครองยาวนานหลายปี
            เหมาะสำหรับผู้ที่อาศัยหรือเดินทางไปในพื้นที่เสี่ยง อายุ 4-60 ปี
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/vaccine-illustration.svg"
            alt="Qdenga Illustration"
            width={500}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
