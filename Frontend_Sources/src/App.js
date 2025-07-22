import './App.css';
import Header from './components/Header';
import Teeth from './components/Teeth';
import Visualizations from './components/Visualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Teeth />
      <Visualizations />
      <Footer />
    </div>
  );
}

export default App;
