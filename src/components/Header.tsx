// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// // For components that don't take any props, you can use React.FC<object> or React.FC<{}>
// // or simply React.FC.
// const Header: React.FC = () => {
//   // Explicitly type the state variables
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [isDesktop, setIsDesktop] = useState<boolean>(true);

//   const toggleMenu = (): void => { // Define return type for clarity
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleResize = (): void => { // Define return type for clarity
//       setIsDesktop(window.innerWidth >= 1024);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Explicitly type the array
//   const menuItems: string[] = [
//     "Home",
//     "About",
//     "Solutions",
//     "Educators",
//     "Parents",
//     "Pricing",
//     "Testimonials",
//   ];

//   return (
//     <header className="bg-[#325BFF] shadow-lg fixed w-full z-50 border-b border-blue-600">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <motion.a
//             href="#home"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center gap-2"
//           >
//             <div className="backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-[#325BFF] transition-all duration-300">
//               <img
//                 src="https://imgur.com/HM5aJDB.png"
//                 alt="Logo"
//                 className="h-7 md:h-8 w-auto"
//               />
//             </div>
//           </motion.a>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex space-x-6">
//           {menuItems.map((item, index) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="text-white/90 hover:text-white transition-all duration-300 relative group font-small text-base"
//             >
//               {item}
//               <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//             </motion.a>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         {isDesktop && (
//           <motion.a
//             href="https://dumroo.ai/register"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="hidden md:block bg-[#EBB35C] text-[#325BFF] px-6 py-2 rounded-md hover:bg-[#d9a04a] hover:shadow-lg hover:scale-105 transition-all duration-300 font text-base"
//           >
//             Get Started
//           </motion.a>
//         )}

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
//           onClick={toggleMenu}
//           aria-label="Toggle mobile menu"
//         >
//           {isMenuOpen ? (
//             <X className="w-6 h-6 text-white" />
//           ) : (
//             <Menu className="w-6 h-6 text-white" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="lg:hidden bg-[#325BFF] border-t border-blue-600 shadow-lg"
//         >
//           <div className="px-4 py-4 space-y-3">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="block py-2 text-white/90 hover:text-white transition-colors font-small text-base"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <div className="pt-4 border-t border-blue-600">
//               <a
//                 href="https://dumroo.ai/register"
//                 className="block bg-[#EBB35C] text-[#325BFF] px-6 py-2.5 rounded-md hover:bg-[#d9a04a] hover:shadow-lg transition-all duration-300 font-semi text-base text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Started
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Solutions",
    "Educators",
    "Parents",
    "Pricing",
    "Testimonials",
  ];

  return (
    <header className="bg-[#325BFF] shadow-lg fixed w-full z-50 border-b border-blue-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-[#325BFF] transition-all duration-300">
              <img
                src="https://imgur.com/HM5aJDB.png"
                alt="Logo"
                className="h-7 md:h-8 w-auto"
              />
            </div>
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-white/90 hover:text-white transition-all duration-300 relative group font-small text-base"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        {isDesktop && (
          <motion.a
            href="https://dumroo.ai/register"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block bg-[#EBB35C] text-[#325BFF] px-6 py-2 rounded-md hover:bg-[#d9a04a] hover:shadow-lg hover:scale-105 transition-all duration-300 font text-base"
          >
            Get Started
          </motion.a>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#325BFF] border-t border-blue-600 shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white/90 hover:text-white transition-colors font-small text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-blue-600">
              <a
                href="https://dumroo.ai/register"
                className="block bg-[#EBB35C] text-[#325BFF] px-6 py-2.5 rounded-md hover:bg-[#d9a04a] hover:shadow-lg transition-all duration-300 font-semi text-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};


export default Header;