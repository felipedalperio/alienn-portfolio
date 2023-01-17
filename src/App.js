import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Duvidas from './components/duvidas/Duvidas';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Posts from './components/posts/Posts';
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
    </>
  );
}

export default App;
