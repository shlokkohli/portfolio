import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HomeSection from "./components/HomeSection/HomeSection";
import Navbar from "./components/Navbar/navbar";
import ProjectSection from "./components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      <div className="fixed top-5 z-10 bg-black rounded-full">
        <Navbar />
      </div>

      <div className="flex flex-col justify-center items-center md:justify-start md:items-start px-10 sm:px-15 md:px-10 lg:px-25 xl:px-50 transition-all duration-500">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      
    </div>
  );
}