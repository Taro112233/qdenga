"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "สามารถฉีดในผู้ที่เคยได้รับวัคซีนไข้เลือดออกตัวเก่ามาแล้วได้หรือไม่?",
    answer: "ปัจจุบันยังไม่มีข้อมูลเรื่องความปลอดภัย แต่ผู้เชี่ยวชาญแนะนำว่าสามารถฉีดได้โดยเว้นระยะห่าง 1 เดือนหลังจากฉีดตัวเก่า",
  },
  {
    question: "สามารถฉีดพร้อมกับวัคซีนตัวอื่นได้หรือไม่?",
    answer: "สามารถฉีดพร้อมกันได้ในวันเดียวกัน",
  },
  {
    question: "ฉีดเข็มที่ 2 ก่อนวันนัดได้หรือไม่?",
    answer: "ไม่แนะนำให้ฉีดก่อนวันนัด เพื่อให้วัคซีนออกฤทธิ์ได้เต็มประสิทธิภาพ",
  },
  {
    question: "ฉีดเข็มที่ 2 เลยกำหนดนัดได้หรือไม่?",
    answer: "สามารถฉีดหลังวันนัดเข็มที่ 2 ได้ แต่ไม่ควรเกิน 1 ปี",
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
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-red-900 mb-4">
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
                viewport={{ once: true }}
                className="border border-red-100 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left bg-white hover:bg-red-50 flex justify-between items-center"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-red-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-red-600" />
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