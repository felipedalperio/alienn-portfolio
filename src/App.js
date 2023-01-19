import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Duvidas from './components/duvidas/Duvidas';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Tech from './components/tech/Tech';
import Vantagens from './components/vantagens/Vantagens';

function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <About/>
      <Duvidas/>
      <Vantagens/>
      <Contact/>
      <Tech />
      <Footer />
    </>
  );
}

export default App;
