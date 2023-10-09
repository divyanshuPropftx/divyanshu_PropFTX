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
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Component/Navbar/Index'; // Import your Navbar component

function App() {
  return (

    <div className="App">
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
