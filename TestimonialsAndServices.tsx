import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  TreePine,
  Ruler,
  Quote,
  User,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Home,
    title: "Residential Architecture",
    description:
      "Designing elegant and functional living spaces tailored to your lifestyle and sustainability needs.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Commercial Spaces",
    description:
      "Innovative commercial architecture that prioritizes aesthetics, usability, and environmental efficiency.",
  },
  {
    id: 3,
    icon: TreePine,
    title: "Eco-Friendly Design",
    description:
      "Using natural materials and green practices to reduce environmental footprint while maintaining beauty.",
  },
  {
    id: 4,
    icon: Ruler,
    title: "Interior Planning",
    description:
      "Smart interior layouts that blend utility and aesthetics, reflecting your personal or brand identity.",
  },
];

const testimonials = {
  homeowners: [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Homeowner",
      quote:
        "They transformed my vision into reality! The team was highly professional and brought incredible ideas to the table.",
    },
    {
      id: 2,
      name: "Kavita Desai",
      role: "Homeowner",
      quote:
        "The final design exceeded our expectations. The attention to detail and personal touch made it truly special.",
    },
    {
      id: 3,
      name: "Rajiv Sharma",
      role: "Homeowner",
      quote:
        "Their eco-conscious approach and aesthetic designs are a game-changer. Loved every step of the process.",
    },
  ],
  designers: [
    {
      id: 4,
      name: "Priya Shah",
      role: "Interior Designer",
      quote:
        "An outstanding collaboration — their design sensibilities and attention to sustainability are unmatched.",
    },
    {
      id: 5,
      name: "Mehul Sinha",
      role: "Architect",
      quote:
        "Great synergy and creative freedom. Their professionalism and knowledge made it a smooth ride.",
    },
    {
      id: 6,
      name: "Tanvi Joshi",
      role: "Interior Designer",
      quote:
        "Every meeting was productive and inspiring. I look forward to working together again.",
    },
  ],
  businesses: [
    {
      id: 7,
      name: "Rohan Patel",
      role: "Business Owner",
      quote:
        "Our workspace is now vibrant, efficient, and loved by our employees. Highly recommended!",
    },
    {
      id: 8,
      name: "Sonal Thakkar",
      role: "Startup Founder",
      quote:
        "From concept to completion, the experience was seamless and impactful for our brand.",
    },
    {
      id: 9,
      name: "Arjun Bhatt",
      role: "Retail Owner",
      quote:
        "Aesthetic appeal and functionality merged beautifully. Clients love the new space!",
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TestimonialsAndServices: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof testimonials>("homeowners");
  const [modalData, setModalData] = useState<typeof services[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Testimonials Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>

          {/* Tab Selection */}
          <div className="flex justify-center mb-8 gap-4">
            {Object.keys(testimonials).map((key) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTab === key ? 'bg-emerald-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}
                onClick={() => setSelectedTab(key as keyof typeof testimonials)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Arrows for mobile */}
          <div className="flex justify-between items-center lg:hidden mb-4">
            <button onClick={() => scroll("left")} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <ChevronLeft />
            </button>
            <button onClick={() => scroll("right")} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <ChevronRight />
            </button>
          </div>

          {/* Mobile View */}
          <div
            ref={scrollRef}
            className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1"
          >
            {testimonials[selectedTab].map((testimonial) => (
              <div
                key={testimonial.id}
                className="snap-start flex-shrink-0 w-80 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-3 gap-8 mt-4">
            {testimonials[selectedTab].map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsAndServices;
