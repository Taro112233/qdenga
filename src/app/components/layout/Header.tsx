"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ChevronDown } from "lucide-react";

export default function Header() {
  const navItems = [
    { label: "เกี่ยวกับ", href: "#about" },
    { label: "คุณสมบัติ", href: "#features" },
    { label: "ความปลอดภัย", href: "#safety" },
    { label: "สถิติ", href: "#stats" },
    { label: "คำถาม", href: "#faq" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-red-100 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-red-900">Qdenga</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
            จองคิวเลย
          </Button>
        </motion.div>
      </nav>
    </header>
  );
}
