import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  // Define an interface for the structure of the stats data
  interface StatItem {
    stat: string;
    desc: string;
    color: string;
  }

  // Explicitly type the array of stat items
  const statsData: StatItem[] = [
    { stat: "10,000+", desc: "Students Supported", color: "from-blue-500 to-indigo-500" },
    { stat: "50+", desc: "Institutions Partnered", color: "from-indigo-500 to-blue-600" },
    { stat: "20+", desc: "AI Tools Developed", color: "from-blue-600 to-purple-500" }
  ];

  return (
    <section id="about" className="section-scroll py-14 lg:py-22 bg-gradient-to-br from-white to-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6"
        >
          About Special AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 lg:mb-10 leading-relaxed"
        >
          Special AI, a Dumroo.ai initiative, revolutionizes education for students with diverse needs by leveraging AI to simplify personalized learning plans, enhance accessibility, and foster inclusive learning environments
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {statsData.map((item, index) => ( // Use statsData variable
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`p-5 lg:p-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">{item.stat}</div>
              <p className="text-white/90 font-medium text-sm lg:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;