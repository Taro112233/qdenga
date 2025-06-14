"use client";

import { motion, HTMLMotionProps } from "motion/react";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  ...props
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      {...props}
    >
      <div className="container mx-auto px-6">{children}</div>
    </motion.section>
  );
}
