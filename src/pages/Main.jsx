import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Main() {
  return (
    <div translate="no" className="flex flex-col ">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
