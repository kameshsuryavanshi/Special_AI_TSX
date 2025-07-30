import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Define an interface for the structure of each testimonial item
interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  // Explicitly type the array of testimonials
  const testimonialsData: Testimonial[] = [
    {
      name: "David Park",
      role: "Science Teacher",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The AI-powered lab simulations have brought complex scientific concepts to life. My students are more engaged than ever.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Special Education Coordinator",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The adaptive learning features have been a game-changer for our special needs students. We're seeing remarkable progress in their learning outcomes.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "School Principal",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The impact on our school has been transformative. Student engagement improved by 40%, and academic performance by 25%. Invaluable investment.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-scroll py-14 lg:py-22 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4 lg:mb-6"
        >
          What Educators Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-4xl mx-auto mb-8 lg:mb-10"
        >
          Hear from educators transforming classrooms with Special AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {testimonialsData.map((testimonial, index) => ( // Use the typed array here
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-4 lg:p-5 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-3 lg:mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover mr-3 border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-medium text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-2 lg:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;