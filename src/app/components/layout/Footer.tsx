"use client";

import { motion } from "motion/react";
import { Shield, ChevronDown, Star, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16">
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Qdenga</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
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
            <h4 className="text-lg font-semibold mb-6">ลิงก์ด่วน</h4>
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
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
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
            <h4 className="text-lg font-semibold mb-6">บริการ</h4>
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
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
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
            <h4 className="text-lg font-semibold mb-6">ติดต่อเรา</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200">info@qdenga.th</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200">โรงพยาบาลทั่วประเทศ</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-blue-200 mb-2">เวลาทำการ</p>
              <p className="text-white font-medium">
                จันทร์ - เสาร์: 08:00 - 20:00
              </p>
              <p className="text-white font-medium">อาทิตย์: 09:00 - 17:00</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-200 text-sm">
            © 2025 Qdenga Thailand. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["นโยบายความเป็นส่วนตัว", "เงื่อนไขการใช้งาน", "คุกกี้"].map(
              (text) => (
                <a
                  key={text}
                  href="#"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
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