import './App.css';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <ContactSection />
      <Map location={{ lat: 37.7749, lng: -122.4194 }} zoomLevel={10} />
      <Footer />
    </div>
  );
}

export default App;
