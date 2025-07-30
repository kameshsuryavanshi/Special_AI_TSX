import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Define an interface for the structure of each pricing plan
interface Plan {
  name: string;
  monthly: string;
  yearly: string;
  period: string; // This will be dynamically set based on isYearly
  description: string;
  features: string[];
  popular: boolean;
  color: string;
  originalMonthly?: string; // Optional for plans that have a discount
  originalYearly?: string; // Optional for plans that have a discount
}

const PricingSection: React.FC = () => {
  // Explicitly type the state variable
  const [isYearly, setIsYearly] = useState<boolean>(true);

  // Define the plans array with the Plan interface
  const plans: Plan[] = [
    {
      name: 'Free',
      monthly: '$0',
      yearly: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Up to 3 students',
        'Up to 3 diagnostic assessments',
        'Basic progress tracking',
        'Email support',
        'Compliance tools'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      monthly: '$9.99',
      originalMonthly: '$16.99', // This property is optional in the interface
      yearly: '$59',
      originalYearly: '$149',   // This property is optional in the interface
      period: isYearly ? 'per /year' : 'per /month', // Dynamically set
      description: 'Unlock full access to our intelligent tools and educator-centric workflow.',
      features: [
        'Student dashboard & engagement insights',
        'AI-powered diagnostic assessments',
        'Present levels & personalized goals',
        'IEP objectives & automated report generation',
        'Smart lesson planning tools',
        'Session tracking & observation logs',
        'Progress review panels',
        'Parent input integration',
        'Compliance reporting for audits'
      ],
      popular: true,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section id="pricing" className="pricing-section-scroll py-14 lg:py-22 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-3"
        >
          Simple Pricing for Institutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-4 lg:mb-6"
        >
          Choose the perfect plan for your institution. All plans include full compliance support.
        </motion.p>

        {/* Toggle */}
        <div className="flex flex-col items-center justify-center gap-1 mb-8">
          <div className="inline-flex bg-gray-100 border border-gray-200 rounded-full p-1">
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${!isYearly ? 'bg-white shadow text-gray-800' : 'text-gray-500'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${isYearly ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
          <span className="text-sm text-red-600 font-semibold mt-1">🔥 July Special - Up to 60% off!</span>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`w-full max-w-sm flex flex-col justify-between h-full w-full p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl relative ${
                plan.popular
                  ? 'border-blue-500 bg-white'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`bg-gradient-to-r ${plan.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-md`}>
                    Full Workflow Access
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-grow">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>

                {plan.popular && (
                  <div className="flex items-center mb-1 space-x-2">
                    {/* Use optional chaining for originalMonthly/originalYearly */}
                    <span className="text-sm line-through text-gray-400">
                      {isYearly ? plan.originalYearly : plan.originalMonthly}
                    </span>
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                      Save {isYearly ? '$90' : '$7'}
                    </span>
                  </div>
                )}

                <div className="mb-2">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {isYearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 mb-5 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href="https://dumroo.ai/register"
                  className={`block text-sm w-full py-2.5 rounded-xl font-semibold transition duration-300 text-center ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;