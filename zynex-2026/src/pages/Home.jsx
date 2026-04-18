import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import About from '../components/About';
import EventRoadmap from '../components/EventRoadmap';
import Coordinators from '../components/Coordinators';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EventDetails />
        <About />
        <EventRoadmap />
        <Coordinators />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
