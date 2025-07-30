import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award } from 'lucide-react';

// This is a functional component that doesn't take any props.
// We'll use React.FC for its type definition.
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-28 h-28 sm:w-40 sm:h-40 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Inclusive classroom"
          className="absolute top-10 left-10 w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-2xl rotate-12 hidden md:block"
        />
        <img
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Teacher with students"
          className="absolute bottom-20 right-20 w-28 h-28 lg:w-40 lg:h-40 object-cover rounded-2xl -rotate-12 hidden md:block"
        />
        <img
          src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Learning environment"
          className="absolute top-1/2 right-10 w-24 h-24 lg:w-36 lg:h-36 object-cover rounded-2xl rotate-6 hidden md:block"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-left order-2 lg:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight mb-4 lg:mb-5 tracking-tight"
          >
            Empowering Every Mind with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Special AI
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-7 leading-relaxed"
          >
            Transforming education for students with diverse needs through AI-powered personalized learning plans and inclusive tools
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4"
          >
            <a
              href="https://dumroo.ai/register"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 lg:px-7 py-2.5 lg:py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm lg:text-base text-center"
            >
              Get Started
            </a>
            <a
              href="#solutions"
              className="bg-white text-blue-500 border-2 border-blue-500 px-6 lg:px-7 py-2.5 lg:py-3 rounded-full hover:bg-blue-50 hover:shadow-lg transition-all duration-300 font-semibold text-sm lg:text-base text-center"
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 lg:mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
              <span className="font-medium">10,000+ Students Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
              <span className="font-medium">Compliance Ready</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Diverse group of students and teacher in inclusive classroom setting"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>
          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-white p-3 lg:p-4 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="text-xl lg:text-2xl font-bold text-blue-600">50+</div>
            <div className="text-xs lg:text-sm text-gray-600 font-medium">Institutions</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-white p-3 lg:p-4 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="text-xl lg:text-2xl font-bold text-blue-600">98%</div>
            <div className="text-xs lg:text-sm text-gray-600 font-medium">Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;