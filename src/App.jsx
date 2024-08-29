import "./App.css";
import BlackBanner from "./components/black-banner/BlackBanner";
import MainBanner from "./components/main-banner/MainBanner";
import Reviews from "./components/reviews/Reviews";
import WhiteBanner from "./components/white-banner/WhiteBanner";
import ContactForm from "./components/contact-form/ContactForm"
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div className="app">
      <MainBanner />
      <WhiteBanner/>
      <BlackBanner/>
      <Reviews/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
