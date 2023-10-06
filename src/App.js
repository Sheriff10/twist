import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
