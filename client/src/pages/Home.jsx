import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import bgImage from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
};

export default Home;
