import logo from './logo.svg';
import './App.css';
import Index from './Component/landingPage/Index';
import ContactUs from './Component/ContactUs/Index';
import AboutUs from './Component/AboutUs/Index';
import Team from './Component/Team/Index'


function App() {
  return (
    <div className="App">
  {/*  */}
    <Index/>
      
    <ContactUs/>
  
    
    <AboutUs/>
         <Team/>
 
     {/*Y
    <Team/>
   
    */}
 
    </div>
  );
}

export default App;
