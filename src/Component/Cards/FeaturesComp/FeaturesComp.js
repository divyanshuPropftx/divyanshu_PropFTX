import React from "react";


const FeaturesComp = () => {
  return (
    <div class="w-[754px] h-[746px] p-[30px] rounded-3xl border border-purple-600 flex-col justify-center items-start gap-[26px] inline-flex">
      <div class="w-[435px] text-pink-500 text-[34px] font-bold font-['Poppins'] leading-10">
        Benefits
      </div>
      <div class="relative">
        <div class="w-[694px] h-[152px] px-5 py-[30px] left-0 top-0 absolute rounded-2xl backdrop-blur-[100px] justify-start items-start gap-[25px] inline-flex">
          <div class="p-2 bg-cyan-300 bg-opacity-25 rounded-[80px] justify-start items-center gap-2 flex">
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[589px] flex-col justify-start items-start gap-2 inline-flex">
            <div class="self-stretch text-cyan-300  text-2xl font-bold font-['Poppins'] leading-10">
              Personal Investment Advisor
            </div>
            <div class="self-stretch text-gray-100 text-base font-normal font-['Poppins'] leading-snug">
              Get a personal investment manager to serve as your advisor <br />
              and supervise your portfolio.
            </div>
          </div>
        </div>
        <div class="w-[694px] h-[152px] px-5 py-[30px] left-0 top-[156px] absolute rounded-2xl backdrop-blur-[100px] justify-start items-start gap-[25px] inline-flex">
          <div class="p-2 bg-cyan-300 bg-opacity-25 rounded-[80px] justify-start items-center gap-2 flex">
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[589px] flex-col justify-start items-start gap-2 inline-flex">
            <div class="self-stretch text-cyan-300 text-2xl font-bold font-['Poppins'] leading-10">
              Early Access Benefits
            </div>
            <div class="self-stretch text-gray-100 text-base font-normal font-['Poppins'] leading-snug">
              Features exclusive entries to special offers, early releases, and{" "}
              <br />
              access to the pre-sale.
            </div>
          </div>
        </div>
        <div class="w-[694px] h-[152px] px-5 py-[30px] left-0 top-[312px] absolute rounded-2xl backdrop-blur-[100px] justify-start items-start gap-[25px] inline-flex">
          <div class="p-2 bg-cyan-300 bg-opacity-25 rounded-[80px] justify-start items-center gap-2 flex">
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[589px] flex-col justify-start items-start gap-2 inline-flex">
            <div class="self-stretch text-cyan-300 text-2xl font-bold font-['Poppins'] leading-10">
              Less Platform Handling Fee
            </div>
            <div class="self-stretch text-gray-100 text-base font-normal font-['Poppins'] leading-snug">
              Save more with our subscription plan. Invest in your desired{" "}
              <br />
              properties with low check out and transaction fees.
            </div>
          </div>
        </div>
        <div class="w-[694px] h-[152px] px-5 py-[30px] left-0 top-[468px] absolute rounded-2xl backdrop-blur-[100px] justify-start items-start gap-[25px] inline-flex">
          <div class="p-2 bg-cyan-300 bg-opacity-25 rounded-[80px] justify-start items-center gap-2 flex">
            <div class="w-6 h-6 relative"></div>
          </div>
          <div class="w-[589px] flex-col justify-start items-start gap-2 inline-flex">
            <div class="self-stretch text-cyan-300 text-2xl font-bold font-['Poppins'] leading-10">
              Additional Benefits
            </div>
            <div class="self-stretch text-gray-100 text-base font-normal font-['Poppins'] leading-snug">
              The subscription to PropFTX comes up with enormous benefits.{" "}
              <br />
              Members will also get exclusive rewards on their investments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComp;
