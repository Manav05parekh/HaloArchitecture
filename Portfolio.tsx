import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog, Transition } from "@headlessui/react";
import gsap from "gsap";
import floorPlan1 from "../assets/house-plan.webp";
import floorPlan2 from "../assets/images (2).jpeg";
import floorPlan3 from "../assets/images (3).jpeg";



interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  floorPlan: string;
  reraNumber: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Eco-Luxury Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2070&q=80",
    description: "Modern sustainable living with panoramic ocean views",
    floorPlan: floorPlan1, // Replace with actual floor plan path
    reraNumber: "RERA-123456",
  },
  {
    id: 2,
    title: "Urban Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2070&q=80",
    description: "Net-zero energy commercial space in downtown",
    floorPlan: floorPlan2,
    reraNumber: "RERA-654321",
  },
  {
    id: 3,
    title: "Seaside Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2070&q=80",
    description: "Luxury eco-resort with minimal environmental impact",
    floorPlan: floorPlan3,
    reraNumber: "RERA-987654",
  },
];

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        "#floor-plan-svg path",
        { strokeDasharray: "500", strokeDashoffset: "500" },
        { strokeDashoffset: "0", duration: 2, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="dark:text-emerald-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our latest architectural designs that blend sustainability with innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <div
                  className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/10 backdrop-blur-lg shadow-lg p-6 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsOpen(true);
                  }}
                >
                  <div className="relative h-56 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-emerald-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Floor Plan & RERA Number */}
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center p-6" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <Transition.Child
            as="div"
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full shadow-lg">
              {selectedProject && (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>RERA Number:</strong> {selectedProject.reraNumber}
                  </p>
                  <div className="border-t border-gray-300 dark:border-gray-600 mt-4 pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Floor Plan:</h4>
                    <div className="w-full flex justify-center">
                      <img id="floor-plan-svg" src={selectedProject.floorPlan} alt="Floor Plan" className="w-full max-w-xs" />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600"
                  >
                    Close
                  </button>
                </>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Portfolio;
