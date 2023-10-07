import './App.css';
import Index from './Component/landingPage/Index';
import ContactUs from './Component/ContactUs/Index';
import AboutUs from './Component/AboutUs/Index';
import Team from './Component/Team/Index'
import FAQPage from './Component/FAQPage/Index';
import PricingDetails from './Component/PricingDetails';
import PrivacyPolicy from './Component/PrivacyPolicy/Index';
import RiskDisclosure from './Component/Risk&Concern/Index';
import TermsOfUse from './Component/TermsOfUse/Index';

function App() {
  return (
    <div className="App">


     {/*    */}     
         <Index/>  
    <ContactUs/>
  
    
    <AboutUs/>
         <Team/>
         <FAQPage/>
    <PricingDetails/>
    <PrivacyPolicy/>
    <RiskDisclosure/>
    <TermsOfUse/>

     {/*Y
    <Team/>
   
    */}
 
    </div>
  );
}

export default App;
