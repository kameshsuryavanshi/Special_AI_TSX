import React from 'react';
import { motion } from 'framer-motion';

// For components that don't take any props, you can use React.FC<object> or React.FC<{}>
// or simply React.FC.
const CTASection: React.FC = () => {
  return (
    <section className="py-8 lg:py-12 bg-[#325BFF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6"
        >
          Ready to Transform Education?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Join educators who are using Special AI to enhance outcomes for students with diverse needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center"
        >
          <a
            href="https://dumroo.ai/register"
            className="bg-[#EBB35C] text-[#325BFF] px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-[#EBB35C] hover:text-[#325BFF] font-bold text-sm lg:text-base shadow-lg transition-all duration-300"
          >
            Start Free Trial →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;