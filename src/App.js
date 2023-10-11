import './App.css';
import Index from './Component/landingPage/Index';
import ContactUs from './Component/ContactUs/Index';
import AboutUs from './Component/AboutUs/Index';
import Team from './Component/Team/Index';
import FAQPage from './Component/FAQPage/Index';
import PricingDetails from './Component/PricingDetails';
import PrivacyPolicy from './Component/PrivacyPolicy/Index';
import RiskDisclosure from './Component/Risk&Concern/Index';
import TermsOfUse from './Component/TermsOfUse/Index';
import BlogsPage from './Component/BlogsLandingPage/Index';
import BlogsDetails from './Component/BlogsDetailedPage/Index';
import Careers from './Component/Careers/Index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';





function App() {
  useEffect(() => {
    // Change the title here
    document.title = "PropFTX";
  }, []);

  return (

    <div className="App">
      <Router>
      <ToastContainer />
        <Routes>
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/Faq" element={<FAQPage />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/pricing" element={<PricingDetails />} />
          <Route exact path="/privacy" element={<PrivacyPolicy />} />
          <Route exact path="/riskdisclosure" element={<RiskDisclosure />} />
          <Route exact path="/terms" element={<TermsOfUse />} />
          <Route exact path="/" element={<Index />} />
          <Route exact path="/blogs" element={<BlogsPage />} />
          <Route exact path="/blogDetails" element={<BlogsDetails/>} />
          <Route exact path="/careers" element={<Careers/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
