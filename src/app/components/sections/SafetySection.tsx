"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            ความปลอดภัยและผลข้างเคียง
          </h2>
          <p className="text-lg text-gray-700">
            ข้อมูลความปลอดภัยของวัคซีน Qdenga
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>ผลข้างเคียงทั่วไป</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>ปวด บวม แดง บริเวณที่ฉีด (1–2 วัน)</li>
                  <li>ไข้ต่ำ เหนื่อย หรือปวดกล้ามเนื้อเล็กน้อย</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>คำแนะนำก่อนฉีด</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>แจ้งแพทย์หากมีประวัติแพ้ส่วนประกอบใดๆ</li>
                  <li>งดออกกำลังกายหนักก่อนฉีด</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>คำแนะนำหลังฉีด</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>พักผ่อนเพียงพอ ดื่มน้ำมากๆ</li>
                  <li>หลีกเลี่ยงแอลกอฮอล์ 24 ชม.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
