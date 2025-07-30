import React from 'react';
import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-dev-runtime';
import {
  MdSearch,
  MdTrackChanges,
  MdMenuBook,
  MdAssignmentTurnedIn,
  MdTrendingUp,
  MdChecklistRtl,
} from "react-icons/md";

// Define an interface for the structure of each tool item
interface ToolItem {
  name: string;
  desc: string;
  icon: JSX.Element; // React icons return JSX.Element
  color: string;
}

// Explicitly type the 'tools' array using the ToolItem interface
const tools: ToolItem[] = [
  {
    name: "Diagnostic Assessment",
    desc: "Conduct initial baseline assessments to identify student strengths and needs.",
    icon: <MdSearch className="text-white text-lg lg:text-xl" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "IEP Goals & Objectives",
    desc: "Generate SMART goals and measurable objectives tailored to each student.",
    icon: <MdTrackChanges className="text-white text-lg lg:text-xl" />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Lesson Planning",
    desc: "Create customized instructional plans aligned with IEP goals.",
    icon: <MdMenuBook className="text-white text-lg lg:text-xl" />,
    color: "from-blue-600 to-purple-500",
  },
  {
    name: "Session Tracking",
    desc: "Log sessions and behavioral data for ongoing monitoring.",
    icon: <MdAssignmentTurnedIn className="text-white text-lg lg:text-xl" />,
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Progress Review",
    desc: "Assess goal advancement with automated analytics and visualizations.",
    icon: <MdTrendingUp className="text-white text-lg lg:text-xl" />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Compliance Reports",
    desc: "Generate IDEA-compliant documentation for accountability.",
    icon: <MdChecklistRtl className="text-white text-lg lg:text-xl" />,
    color: "from-indigo-600 to-blue-500",
  },
];

// This is a functional component that doesn't take any props.
// We'll use React.FC for its type definition.
const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="section-scroll py-14 lg:py-22 bg-gradient-to-br from-white to-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-3"
        >
          AI-Powered Solutions for{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Special Education
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-8 lg:mb-10"
        >
          Explore tools designed to streamline learning plan workflows and improve student outcomes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-4 lg:p-5 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-3 text-sm lg:text-sm leading-relaxed">{tool.desc}</p>
              <a
                href="https://dumroo.ai/register"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
              >
                Try Demo →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;