import './App.css';
import Header from './components/Header';
import Background from './components/Background';
import Visualizations from './components/Visualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Visualizations />
      <Footer />
    </div>
  );
}

export default App;
