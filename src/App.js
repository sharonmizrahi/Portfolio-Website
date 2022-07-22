import './App.css';
import cactus3 from  "./assets/cactus3.jpeg";
import Navbar from './components/Navbar';
import Header from './components/Layout/Header';
import HomeStyling from './components/Layout/HomeStyling';
import Gallery from './components/Paints/Gallery';
import Contact from './components/contact/Contact';





function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Gallery />
      <HomeStyling />
      <Contact />
    </div>
  );
}

export default App;
