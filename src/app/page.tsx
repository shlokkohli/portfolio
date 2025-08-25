import AboutSection from "./components/About/AboutSection";
import HomeSection from "./components/HomeSection/HomeSection";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      <div className="fixed top-5 z-10 bg-black rounded-full">
        <Navbar />
      </div>

      <div className="pt-45 md:pt-55 flex flex-col justify-center items-center md:justify-start md:items-start px-10 sm:px-15 md:px-10 lg:px-25 xl:px-40 transition-all duration-500">
        <HomeSection />
        <AboutSection />
      </div>
      
    </div>
  );
}