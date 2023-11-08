import './index.css'
import Navbar from './Components/navbar'
import Sidebar from './Components/sidebar'
import Home from './Components/home';
import About from './Components/about';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
