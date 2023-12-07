import './App.css';
import Topbar from 'utils/Topbar.js';
import Footer from 'utils/Footer.js';
import Hero from 'utils/Hero.js';
import Content from 'utils/Content.js'

function App() {
  return (
    <>
      <Topbar></Topbar>
      <main>
        <Hero></Hero>
        <Content></Content>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
