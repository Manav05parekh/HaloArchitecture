import React from "react";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import beforeImage from "../assets/before.jpeg";
import afterImage from "../assets/front.jpeg";
import { motion } from "framer-motion";

const BeforeAfterSliderComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <motion.div
        className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Before & After Comparison
        </h2>

        {/* Fixed container size based on the before image */}
        <div
          className="relative w-full overflow-hidden mx-auto rounded-lg"
          style={{
            aspectRatio: "16/9", // Ensures consistent height based on width
            maxWidth: "100%",
          }}
        >
          {/* Before & After Labels */}
          <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
            Before
          </div>
          <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
            After
          </div>

          <BeforeAfterSlider
            firstImage={{ imageUrl: beforeImage }}
            secondImage={{ imageUrl: afterImage }}
            delimiterIconStyles={{ color: "#4A90E2", fontSize: "24px" }}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSliderComponent;
