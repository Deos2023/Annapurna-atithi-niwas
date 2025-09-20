import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaClock, FaUsers, FaStar, FaHome } from "react-icons/fa";

const CountUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { 
      id: 1, 
      number: "14", 
      suffix: "+", 
      text: "Years of Trust", 
      icon: <FaClock />,
      end: 14
    },
    { 
      id: 2, 
      number: "1000", 
      suffix: "+", 
      text: "Happy Residents", 
      icon: <FaUsers />,
      end: 1000
    },
    { 
      id: 3, 
      number: "20", 
      suffix: "+", 
      text: "Furnished Rooms", 
      icon: <FaHome />,
      end: 20
    },
    { 
      id: 4, 
      number: "24/7", 
      suffix: "", 
      text: "Security & Support", 
      icon: <FaStar />,
      end: 1 // Special case for non-numeric value
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Annapurna Atithi Niwas?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);
  const duration = 2;

  useEffect(() => {
    if (isInView) {
      // For non-numeric values like "24/7", don't animate counting
      if (stat.number === "24/7") {
        setCount(stat.number);
        return;
      }
      
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * stat.end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, stat.end, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Icon with circular background */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
        className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto"
      >
        <div className="text-2xl text-white">{stat.icon}</div>
      </motion.div>

      {/* Animated number */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4, type: "spring" }}
        className="text-5xl md:text-6xl font-bold mb-2 text-white"
      >
        {stat.number === "24/7" ? stat.number : count}
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
        className="text-lg font-medium text-white/90"
      >
        {stat.text}
      </motion.p>
    </motion.div>
  );
};

export default CountUp;