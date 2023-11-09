import './index.css'
import Navbar from './Components/navbar'
import Sidebar from './Components/sidebar'
import Home from './Components/home';
import About from './Components/about';
import Footer from './Components/footer';
import Entertainment from './Components/entertainment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Entertainment />
      <Footer />
    </div>
  );
}

export default App;
