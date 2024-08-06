import './App.css';
import Experts from './components/Experts';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Offer from './components/Offer';

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Experts />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
