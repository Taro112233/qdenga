"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, CheckCircle, Shield, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-red-50 to-rose-50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            คุณควรได้รับวัคซีนไข้เด็งกี่หรือไม่?
          </h2>
          <p className="text-lg text-gray-700">
            ทำแบบประเมินเพื่อตรวจสอบความเสี่ยงและความเหมาะสมในการรับวัคซีน
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-red-900 to-red-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">ข้อมูลเพิ่มเติม</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { icon: Phone, label: "โทรศัพท์", value: "02-123-4567" },
                  { icon: Mail, label: "อีเมล", value: "info@qdenga.th" },
                  {
                    icon: MapPin,
                    label: "สถานที่",
                    value: "โรงพยาบาลทั่วประเทศ",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-red-100">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Assessment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 shadow-xl">
              <CardContent className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4">
                  <ClipboardCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  แบบประเมินความเสี่ยง
                </h3>
                <p className="text-gray-600 mb-6">
                  ใช้เวลาเพียง 2 นาที เพื่อประเมินความเสี่ยงและความเหมาะสมในการรับวัคซีนไข้เด็งกี่
                </p>
                <div className="space-y-4">
                  <a href="https://denguechecker.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-full"
                    >
                      <ClipboardCheck className="w-5 h-5 mr-2" /> ทำแบบประเมินเลย
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      icon: CheckCircle,
                      title: "WHO รับรอง",
                      desc: "มาตรฐานสากล",
                    },
                    { icon: Shield, title: "ปลอดภัย 95%", desc: "ทดสอบแล้ว" },
                  ].map((item, i) => (
                    <Card
                      key={i}
                      className="p-4 border-0 shadow-lg bg-green-50"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-semibold text-green-800">
                            {item.title}
                          </p>
                          <p className="text-sm text-green-600">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}