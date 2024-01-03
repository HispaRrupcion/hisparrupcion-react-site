import './App.css';
import Topbar from './utils/Topbar.js';
import Footer from './utils/Footer.js';
import Hero from './utils/Hero.js';
import Homepage from './utils/Homepage.js'

function App() {
  return (
    <>
      <Topbar></Topbar>
      <main>
        <Hero></Hero>
        <Homepage></Homepage>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
