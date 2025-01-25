"use client";

import { useTheme } from "../../context/ThemeContext";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import BestSellersSection from "@/components/BestSellersSection";
import FeaturedBooksSection from "@/components/FeaturedBooksSection";

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Navigation Bar */}
      <NavigationBar theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <section className="bg-gradient-radial from-teal-500 via-cyan-500 to-blue-500 text-white py-[100px] animate-fade-in">
        <HeroSection />
      </section>

      {/* New Arrivals Section */}
      <NewArrivalsSection />

      {/* Best Sellers Section */}
      <BestSellersSection />

      {/* Featured Books Section */}
      <FeaturedBooksSection />
      {/* Footer */}
      <footer className="bg-teal-800 text-white py-4 text-center">
        <p>&copy; 2022 Book Store. All Rights Reserved.</p>
      </footer>
      <style jsx>{``}</style>
    </div>
  );
};

export default Home;
