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
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-6xl font-bold mb-3 text-red-900">
                8 ใน 10
              </h2>
              <h2 className="text-4xl font-bold mb-6 ">
                ของผู้ป่วยเสียชีวิตจากไข้เลือดออก เป็นผู้ใหญ่และผู้สูงอายุ
              </h2>
            </div>

            <div className="bg-red-50 rounded-xl p-4 mb-6">
              <p className="text-xl font-semibold text-red-700">
                สาเหตุ อันดับ 1 คือ โรคประจำตัว
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                โรคเหล่านี้ เสี่ยง เป็นไข้เลือดออกรุนแรงเพิ่มขึ้น
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3">1</span>
                  โรคเบาหวาน <span className="ml-2 font-semibold text-red-700">4 เท่า</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3">2</span>
                  โรคไต <span className="ml-2 font-semibold text-red-700">4 เท่า</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3">3</span>
                  โรคหัวใจและหลอดเลือด <span className="ml-2 font-semibold text-red-700">3 เท่า</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3">4</span>
                  โรคความดันโลหิตสูง <span className="ml-2 font-semibold text-red-700">2 เท่า</span>
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3">5</span>
                  ติดไข้เลือดออกครั้งที่ 2 <span className="ml-2 font-semibold text-red-700">2 เท่า</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/vaccine-illustration.png"
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