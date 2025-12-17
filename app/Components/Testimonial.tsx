"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    message:
      "Working with Vicki was a game-changer. The website was clean, fast, and beautifully responsive.",
  },
  {
    name: "Michael Ade",
    role: "Business Owner",
    message:
      "Professional, reliable, and highly skilled. Communication was seamless from start to finish.",
  },
  {
    name: "Amaka Obi",
    role: "Brand Strategist",
    message:
      "Excellent attention to detail and design. I would recommend her without hesitation.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-white px-6 md:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-indigo-900">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            The Impact of My Work
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from people I’ve worked with.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-65">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-50 rounded-2xl p-10 shadow-sm absolute inset-0"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                “{testimonials[index].message}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-indigo-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
