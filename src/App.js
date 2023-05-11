import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
