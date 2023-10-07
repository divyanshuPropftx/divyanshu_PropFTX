import React, { useState } from "react";
import Mailme from "../../Assets/mailme.png";
import Location from "../../Assets/location.png";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import "./Index.css";
import ComA from "../../Assets/commA.png";
import FeaturesCard from "../Cards/FeaturesCard/Index";
import done from "../../Assets/done.png";

function PricingDetails() {
  const [isThreeMonthsSelected, setIsThreeMonthsSelected] = useState(true);

  const handleToggle = () => {
    setIsThreeMonthsSelected(!isThreeMonthsSelected);
  };

  return (
    <div className="parent">
      <Navbar />

      <div className="flex flex-col">
      <div className="text-blue text-3xl pt-12 font-bold">
        Pricing Details
      </div>
      <div className="text-pink text-4xl pt-12 font-bold">
        Choose Your Plan
      </div>
      <div className="text-white font-medium text-lg pt-4">
        Start investing today and get real-time data with the help of cutting-edge AI technology to make the best investment decisions.
      </div>
    </div>

      <div className="pl-20 pt-24 flex flex-row relative">
        <div className="shad p-4 bg-color w-128 h-128">
          <div className="investInMultiple text-white flex flex-row justify-between gap-8">
            <div className="text-white flex flex-col w-680 pl-5 pr-16 gap-2">
              <h2 className="text-3xl font-semibold text-left text-pink">
                Benefits
              </h2>
              <FeaturesCard
                imageUrl={done}
                heading="Personal investment advisor"
                description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."
              />
              <FeaturesCard
                imageUrl={done}
                heading="Early access benefits"
                description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."
              />
              <FeaturesCard
                imageUrl={done}
                heading="Less platform handling fee"
                description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."
              />
              <FeaturesCard
                imageUrl={done}
                heading="Additional Benefits"
                description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."
              />
            </div>
          </div>
        </div>

        {/* Move the button section to a different position */}
        <div className="remove-border text-white absolute top-40 right-20 button-class">
          <div className="relative inline-flex items-center">
            <button
              className={`w-96 h-32 text-sm font-medium rounded-md outline-none focus:outline-none relative overflow-hidden`}
              onClick={handleToggle}
            >
              <div className={`w-full h-full flex relative`}>
                <div
                  className={`w-1/2 h-full flex items-center justify-center  ${
                    isThreeMonthsSelected ? "left-price-button" : ""
                  }`}
                >
                  3months
                  <div>
                    <button className="small-button text-black font-bold">
                      {" "}
                      Limited Offer
                    </button>
                  </div>
                </div>

                <div
                  className={`w-1/2 h-full flex items-center justify-center ${
                    !isThreeMonthsSelected ? "left-price-button" : ""
                  }`}
                >
                  Free 🌟
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="absolute top-80 right-20">
          <button type="submit" className="button-submit">
            Coming Soon
          </button>
        </div>
      </div>
      {/* <div className="text text-white  pl-24 pr-24 pt-24">
        <div className="text-4xl font-semibold">Get In Touch</div>
        <div className="text-lg font-medium pt-4">
          We would love to hear from either you are an investor, who is looking
          for more in-depth clarifications, or would like to tokenize your
          property.
        </div>
        <div className="pt-12 flex flex-row justify-center gap-24 pl-60 pr-60">
          <div className="mailMeImage">
            <a href="mailto:your.email@example.com">
              <img
                src={Mailme}
                alt="Map"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="locationImage">
            <a href="https://www.google.com/maps/place/PropFTX/@12.9720849,77.6138608,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17f622fd72df:0x384b8b6c1eb20bd!8m2!3d12.9720849!4d77.6164357!16s%2Fg%2F11l2611mh5?entry=ttu">
              <img
                src={Location}
                alt="Map"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}



export default PricingDetails;
  