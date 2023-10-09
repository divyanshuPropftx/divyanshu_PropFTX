import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import "./Index.css";
import Done from '../../Assets/done.png'
import BenefitCard from "../Cards/BenefitsCard/Index";
import Stars from '../../Assets/stars.png'

function PricingDetails() {
  const [isThreeMonthsSelected, setIsThreeMonthsSelected] = useState(true);

  const handleToggle = () => {
    setIsThreeMonthsSelected(!isThreeMonthsSelected);
  };

  return (
    <div className="parent font-poppins">
      <Navbar />

      <div className="flex flex-col">
        <div className="text-blue text-lg pt-12 font-bold">
          Pricing Details
        </div>
        <div className="text-4xl pt-2 font-bold text-white">
          Choose Your {<span className="text-pink">Plan</span>} 
        </div>
        <div className="text-white font-medium text-xs pt-4">
          Start investing today and get realtime data with the help of cutting
          edge AI technology to make the best investment decisions.
        </div>
      </div>


      
      <div className=" flex flex-row justify-center  ">

      <div className=" flex flex-row justify-center pl-24 pr-24 gap-12 pt-28">
        <div className="border border-pink rounded-2xl text-white flex flex-col pl-4 pr-4 pb-6 pt-6">
          <div className=" text-pink text-3xl font-bold text-start">Benefits</div>
                <div><BenefitCard imageUrl={Done} heading="Personal Investment Advisor" description="Get a personal investment manager to serve as your advisor 
                and supervise your portfolio."/></div>
                <div><BenefitCard imageUrl={Done} heading="Personal Investment Advisor" description="Get a personal investment manager to serve as your advisor 
                and supervise your portfolio."/></div>
                <div><BenefitCard imageUrl={Done} heading="Personal Investment Advisor" description="Get a personal investment manager to serve as your advisor 
                and supervise your portfolio."/></div>
                <div><BenefitCard imageUrl={Done} heading="Personal Investment Advisor" description="Get a personal investment manager to serve as your advisor 
                and supervise your portfolio."/></div>
        </div>


        <div className="flex flex-col justify-between">
              <div className="pricingRight border mt-8 border-white text-white flex flex-row p-2 gap-2">
              <div
                className={`buttonPricing   text-white ${
                  isThreeMonthsSelected ? 'true' : 'false'
                } flex flex-row`}
                onClick={handleToggle}
              >
                
                <div className="pricingButtonInsideLeft flex flex-row justify-center ">
                  <div className="boxPricingButton rounded  mt-12"></div>
                </div>
                <div className="pricingButtonInsideRight  flex flex-col justify-center gap-2">
                  <div className=" flex flex-row gap-2 pl-3">
                    <div className=" text-blue text-3xl font-bold">3</div>
                    <div className=" flex flex-col justify-center font-medium">Months</div>
                  </div>
                  <div className="flex flex-row justify-start">
                     <div className="fontpricing  pl-3 pr-3 ml-4  bg-blue text-black font-medium rounded">Limited Offers</div>
                  </div>
                </div>



              </div>
              <div
                className={`buttonPricing  text-white ${
                  isThreeMonthsSelected ? 'false' : 'true'
                } flex flex-row justify-center`}
                onClick={handleToggle}
              >
             
              <div className="flex flex-col  h-full justify-center">
            <div className="pricingButtonInsideRight  flex flex-col justify-center gap-2">
              <div className=" flex flex-row gap-2 pl-3 ">
                <div className=" flex flex-col justify-center font-bold text-2xl -ml-3">Free</div>
                <div className="starsPricing text-blue text-3xl font-bold "><img src={Stars} className="w-full h-full"/></div>
              </div>
              <div className="flex flex-row justify-start">
                 <div className="text-bold text-pink text-base font-semibold rounded -mt-2">Complimentary</div>
              </div>
            </div>
            </div>

              </div>
            </div>

            
            <div className="text-white flex flex-row justify-center">
              <div className="buttonPricingComingSoon bg-blue text-black text-lg font-normal pt-3 pb-2">Coming Soon</div>
            </div>
        </div>
      </div>
      </div>
      <div className="pt-44"><Footer/></div>

    </div>
  );
}

export default PricingDetails;
