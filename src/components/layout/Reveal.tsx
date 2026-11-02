import { ReactNode } from "react";
import { motion } from "motion/react";

interface RevealProps {
  id: string;
  title: string;
  index: string;
  children: ReactNode;
}

export function Reveal({ id, title, index, children }: RevealProps) {
  return (
    <motion.section
      id={id}
      className="section reveal"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-heading">
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
