import './App.css'
import './landing.css'
import FAQSection from './components/FAQSection'
import Noise from './images/Rectangle 1.png'
import Footer from './Components/Footer/Footer.jsx';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Register from './components/Register';
import Nav from './components/NavBar/Nav';
import Section from './components/Disk/section';
import Swipper1 from './components/Swipper1';
import Swipper2 from './components/Swipper2';


function App() {
  
  return (
    <>
      <div id="underlay1"></div>
      <div id="underlay2"></div>
      <img src={Noise} id='underlay3' alt="" />
      <Nav />
      <Header />
      <Countdown />
      <Register />
      {/*   improve section dimension less than 500px //TO DO */}
      <Section />
      <Swipper1/>
      <div className="div-marg"></div>
      <Swipper2/>
      <main className="flex justify-center items-center py-20 marge-top">
        <FAQSection />
      </main>
      <Footer/>
    </>
  )
}

export default App
