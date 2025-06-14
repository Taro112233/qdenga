"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "วัคซีน Qdenga ปลอดภัยหรือไม่?",
    answer: "ได้รับการรับรอง WHO/FDA ผ่านการทดสอบทางคลินิก มีผลข้างเคียงน้อย",
  },
  {
    question: "ใครควรฉีด?",
    answer: "อายุ 4-60 ปี ที่อาศัยหรือเดินทางในพื้นที่เสี่ยง",
  },
  {
    question: "ฉีดกี่เข็ม?",
    answer: "2 เข็ม ห่างกัน 3 เดือน เพื่อความคุ้มครองสูงสุด",
  },
  {
    question: "ราคาต่อเข็ม?",
    answer: "3,500 บาท (แพ็กเกจ 2 เข็ม 6,500 บาท รวมบริการ)",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-lg text-gray-600">ข้อมูลสำคัญเกี่ยวกับ Qdenga</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-blue-100 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left bg-white hover:bg-blue-50 flex justify-between items-center"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-blue-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-700">{faq.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
