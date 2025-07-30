// import React from 'react';

// Import all section components
// Assuming these components have already been converted to TypeScript (.tsx files)
// and have appropriate React.FC or prop type definitions.
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HeroSection from './sections/HeroSection';
// import AboutSection from './sections/AboutSection';
// import SolutionsSection from './sections/SolutionsSection';
// import EducatorsSection from './sections/EducatorsSection';
// import ParentsSection from './sections/ParentsSection';
// import PricingSection from './sections/PricingSection';
// import TestimonialsSection from './sections/TestimonialsSection';
// import CTASection from './sections/CTASection';

// const App: React.FC = () => {
//   return (
//     <header className="mb-0 pb-0"> {/* adjust these values */}
//       <Header />
//     </header>

//     <main className="pt-20">
//         <HeroSection />
//         <AboutSection />
//         <SolutionsSection />
//         <EducatorsSection />
//         <ParentsSection />
//         <PricingSection />
//         <TestimonialsSection />
//         <CTASection />
//     </main>

//     <Footer />
//   );
// };

// export default App;







// App.tsx
import React from 'react';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Section Imports
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SolutionsSection from './sections/SolutionsSection';
import EducatorsSection from './sections/EducatorsSection';
import ParentsSection from './sections/ParentsSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';

const App: React.FC = () => {
  return (
    <>
      <header className="mb-0 pb-0">
        <Header />
      </header>

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <EducatorsSection />
        <ParentsSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default App;
