import React, { useState } from 'react';
import './Index.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import SearchBar from '../SearchBar/Index';
import GuideCard from '../Cards/GuideCard/Index';
import GettingStarted from '../../Assets/gettingStarted.png';
import Investment from '../../Assets/Investment.png';
import Legal from '../../Assets/legal.png';
import UserGuide from '../../Assets/userGuide.png';
import FAQPageForm from '../Forms/FaqPageForm/Index';
import GettingStartedFAQ from '../Cards/Questions/GettingStarted/Index';
import InvestmentFAQ from '../Cards/Questions/Investment/Index';
import LegalFAQ from '../Cards/Questions/Legal/Index';
import UserGuideFAQ from '../Cards/Questions/UserGuide/Index';

function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('gettingStarted');


  return (
    <div className="parent font-poppins">
      <Navbar />
      <div className="leading-loose text-4xl font-bold text-white pt-12">
        Hello, How can we {<span className="text-pink font-bold">help? </span>}
      </div>
      <div className="pt-10">
        <SearchBar />
      </div>
      <div className="pt-10 text-white text-lg font-medium">
        or choose a category to quickly find the help you need
      </div>

      <div className="pt-20 pl-48 pr-48">
        <div className="faqCardBox flex flex-row justify-center gap-8">
          <div className="gettingStarted" onClick={() => setSelectedCategory('gettingStarted')}>
            <GuideCard
              imageUrl={GettingStarted}
              description="Getting Started"
            />
          </div>
          <div className="Investment" onClick={() => setSelectedCategory('investment')}>
            <GuideCard
              imageUrl={Investment}
              description="Investment"
              
            />
          </div>
          <div className="Legal"  onClick={() => setSelectedCategory('legal')}>
            <GuideCard
              imageUrl={Legal}
              description="Legal"
             
            />
          </div>
          <div className="UserGuide" onClick={() => setSelectedCategory('userGuide')}>
            <GuideCard
              imageUrl={UserGuide}
              description="User Guide"
            />
          </div>
        </div>
      </div>


      {selectedCategory === 'gettingStarted' ? (
        <GettingStartedFAQ />
      ) : selectedCategory === 'investment' ? (
        <InvestmentFAQ />
      ) : selectedCategory === 'legal' ? (
        <LegalFAQ />
      ) : (
        <UserGuideFAQ />
      )}

      <div className="leading-loose text-4xl font-bold text-white pt-12">
        You still have a {<span className="text-pink font-bold">question? </span>}
      </div>
      <div className="pt-4 text-white text-lg font-medium">
        If you cannot find the answer to your question in our FAQ, you can always contact us. We will answer you shortly
      </div>

      <div className="flex flex-row justify-center">
        <div className="pt-12">
          <FAQPageForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQPage;
