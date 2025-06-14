"use client";

import { motion, HTMLMotionProps } from "motion/react";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export default function AnimatedCard({
  children,
  className,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
