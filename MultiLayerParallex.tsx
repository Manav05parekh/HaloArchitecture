import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import buildingImg from "../assets/flat.webp";
import flatImg from "../assets/building.jpeg";

export default function CityParallax() {
  const { scrollYProgress } = useScroll();

  // Background image moves slowly
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  
  // Foreground image moves at a different speed
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
  // Text moves and fades out while scaling down
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Layer (Building) */}
        <motion.img
          src={buildingImg}
          alt="Building Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ y: backgroundY }}
        />

        {/* Foreground Layer (Flat Interior) */}
        <motion.img
          src={flatImg}
          alt="Flat Foreground"
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ y: foregroundY }}
        />

        {/* Animated Text */}
        <motion.h1
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="absolute inset-0 z-20 flex items-center justify-center text-white text-7xl font-extrabold tracking-wide drop-shadow-lg"
        >
          CITY LIFE
        </motion.h1>
      </div>
    </div>
  );
}
