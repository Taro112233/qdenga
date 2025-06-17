"use client";

import { motion } from "motion/react";
import { Shield, ChevronDown, Star, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-gray-700" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Qdenga</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              วัคซีนป้องกันไข้เด็งกี่ที่ปลอดภัยและมีประสิทธิภาพสูงเพื่อสุขภาพที่ดีของคุณและครอบครัว
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-800">ลิงก์ด่วน</h4>
            <ul className="space-y-3">
              {[
                "เกี่ยวกับ",
                "ความปลอดภัย",
                "คำถามที่พบบ่อย",
                "จองคิว",
                "ติดต่อเรา",
              ].map((text) => (
                <li key={text}>
                  <a
                    href={`#${text.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  >
                    <ChevronDown className="w-4 h-4 mr-2 -rotate-90" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-800">บริการ</h4>
            <ul className="space-y-3">
              {[
                "วัคซีนป้องกันไข้เด็งกี่",
                "ปรึกษาแพทย์",
                "ตรวจสุขภาพก่อนฉีด",
                "ติดตามผลภายหลัง",
                "นัดหมาย",
              ].map((text) => (
                <li key={text}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-800">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">info@qdenga.th</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">โรงพยาบาลทั่วประเทศ</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 mb-2">เวลาทำการ</p>
              <p className="text-gray-800 font-medium">
                จันทร์ - เสาร์: 08:00 - 20:00
              </p>
              <p className="text-gray-800 font-medium">อาทิตย์: 09:00 - 17:00</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 text-sm">
            © 2025 Qdenga Thailand. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["นโยบายความเป็นส่วนตัว", "เงื่อนไขการใช้งาน", "คุกกี้"].map(
              (text) => (
                <a
                  key={text}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {text}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}