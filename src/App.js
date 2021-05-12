import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
