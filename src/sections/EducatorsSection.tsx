import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineAssignment, MdMenuBook, MdChecklistRtl } from "react-icons/md";
import type { JSX } from 'react/jsx-dev-runtime';

// Define an interface for the structure of each tool item
interface ToolItem {
  title: string;
  desc: string;
  icon: JSX.Element; // React icons return JSX.Element
  color: string;
}

// Explicitly type the 'tools' array using the ToolItem interface
const tools: ToolItem[] = [
  {
    title: "IEP Workflow Progress",
    desc: "Streamline the entire IEP process from assessment to reporting.",
    icon: <MdOutlineAssignment className="text-white text-lg lg:text-xl" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Lesson Planning",
    desc: "Create tailored lesson plans aligned with student goals.",
    icon: <MdMenuBook className="text-white text-lg lg:text-xl" />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Progress & Compliance",
    desc: "Track progress and generate IDEA-compliant reports effortlessly.",
    icon: <MdChecklistRtl className="text-white text-lg lg:text-xl" />,
    color: "from-blue-600 to-indigo-500",
  },
];

const EducatorsSection: React.FC = () => {
  return (
    <section id="educators" className="section-scroll py-14 lg:py-22 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex flex-col justify-center h-full"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
              Empower{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Educators
              </span>{' '}
              with Special AI
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 lg:mb-5 leading-relaxed">
              Simplify learning plan management and focus on teaching students
            </p>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-1">{tool.title}</h3>
                    <p className="text-gray-600 text-xs lg:text-sm">{tool.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 self-start"
          >
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Educator assisting students"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducatorsSection;