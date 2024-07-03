import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";

import Categories from "./components/sections/Categories";
import HowSection from "./components/sections/HowSection";
import EmploymentSection from "./components/sections/EmploymentSection";
import QaSection from "./components/sections/QaSection";
import ArticleSection from "./components/sections/ArticleSection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="custom-scrollbar overflow-auto h-screen">
      <Navbar />
      <HeroSection />
      <Categories />
      <HowSection />
      <EmploymentSection />
      <QaSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
