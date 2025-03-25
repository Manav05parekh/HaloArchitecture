import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Home,
  TreePine,
  Ruler,
  PenTool,
  Factory,
  Compass,
  Lightbulb,
} from "lucide-react";

const services = [
  { id: 1, icon: Home, title: "Residential Architecture", description: "Crafting bespoke homes that blend luxury with sustainability." },
  { id: 2, icon: Building2, title: "Commercial Design", description: "Innovative commercial spaces maximizing functionality and sustainability." },
  { id: 3, icon: TreePine, title: "Sustainable Planning", description: "Comprehensive solutions with renewable energy and natural materials." },
  { id: 4, icon: Ruler, title: "Interior Architecture", description: "Harmonious interior spaces enhancing aesthetics and functionality." },
  { id: 5, icon: PenTool, title: "3D Visualization", description: "Bringing projects to life before construction with cutting-edge technology." },
  { id: 6, icon: Factory, title: "Industrial Design", description: "Efficient and sustainable industrial facilities maintaining excellence." },
  { id: 7, icon: Compass, title: "Urban Planning", description: "Creating sustainable communities with thoughtful design." },
  { id: 8, icon: Lightbulb, title: "Design Consultation", description: "Expert guidance to ensure your vision is realized sustainably." },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="services" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your vision
          </p>
        </motion.div>

        {/* Desktop Grid Layout with Animation */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-6 flex justify-center">
                  <div className="h-12 w-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll with Animation */}
        <div className="sm:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg snap-center min-w-[280px] max-w-[280px] flex-shrink-0"
              >
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
