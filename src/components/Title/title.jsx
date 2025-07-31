import React from "react";
import { motion } from "framer-motion";
import "./title.css";

export default function Title() {
  return (
    <motion.div
      className="title-frame"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="title">Parva Thakkar</h1>
      <p className="subtitle">
        Full-Stack Developer &amp; Machine Learning Engineer
      </p>
    </motion.div>
  );
}
