import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import './Index.css'


function CityButton({ name, onClick, selectedCities }) {
    const isClicked = selectedCities.includes(name);
  
    const handleClick = () => {
      onClick(name);
    };
  
    return (
      <button
        className={`cityButton text-black text-sm h-8 pl-2 pr-2 ${isClicked ? 'clickedButton' : ''}`}
        onClick={handleClick}
      >
        {name}
      </button>
    );
  }
  
  function BuilderButton({ name, onClick, selectedBuilders }) {
    const isClicked = selectedBuilders.includes(name);
    const handleClick = () => {
      onClick(name);
    };
  
    return (
      <button
        className={`BuilderButton text-black text-sm h-8 pl-2 pr-2 ${isClicked ? 'clickedButton' : ''}`}
        onClick={handleClick}
      >
        {name}
      </button>
    );
  }
  
  function AssetButton({ name, onClick, assetType }) {
    const isClicked = assetType.includes(name);
  
    const handleClick = () => {
      onClick(name);
    };
  
    return (
      <div className="flex flex-row gap-4 w-full" onClick={handleClick}>
        <div className={`checkBox  text-black ${isClicked ? 'checked' : ''}`} />
        <button
          className=" text-black text-sm font-normal"
        >
          {name}
        </button>
      </div>
    );
  }
  
  function  PriceRangeButton({ name, onClick, priceRange }) {
      const isClicked = priceRange.includes(name);
    
      const handleClick = () => {
        onClick(name);
      };
    
      return (
        <div className="flex flex-row gap-4 w-full" onClick={handleClick}>
          <div className={`checkBox  text-black ${isClicked ? 'checked' : ''}`} />
          <button
            className=" text-black text-sm font-normal"
          >
            {name}
          </button>
        </div>
      );
    }

function SideNav() {
  const [propertyPhases, setPropertyPhases] = useState([]);
  const [saleTypes, setSaleTypes] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isClearButtonActive, setIsClearButtonActive] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedBuilders, setSelectedBuilders] = useState([]);
  const [assetType, setAssetType] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };



  const handleFilterClick = () => {
    toast.success('Filter Applied!', {
      position: toast.POSITION.TOP_CENTER,
    });
    setIsClearButtonActive(true);
    setIsFilterActive(false);
  };

  const handlePropertyPhaseClick = (propertyPhaseType) => {
    if (propertyPhases.includes(propertyPhaseType)) {
      setPropertyPhases(propertyPhases.filter((phase) => phase !== propertyPhaseType));
    } else {
      setPropertyPhases([...propertyPhases, propertyPhaseType]);
    }
    setIsFilterActive(true);
  };

  const handleAssetTypeClick = (assetTypeName) => {
    if (assetType.includes(assetTypeName)) {
      setAssetType(assetType.filter((type) => type !== assetTypeName));
    } else {
      setAssetType([...assetType, assetTypeName]);
    }
    setIsFilterActive(true);
  };

  const handleSaleTypeClick = (saleType) => {
    if (saleTypes.includes(saleType)) {
      setSaleTypes(saleTypes.filter((type) => type !== saleType));
    } else {
      setSaleTypes([...saleTypes, saleType]);
    }
    setIsFilterActive(true);
  };

  const handleCityClick = (cityName) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter((city) => city !== cityName));
    } else {
      setSelectedCities([...selectedCities, cityName]);
    }
    setIsFilterActive(true);
  };
  const handlePriceRangeClick = (price) => {
    if (priceRange.includes(price)) {
      setPriceRange(priceRange.filter((city) => city !== price));
    } else {
      setPriceRange([...priceRange, price]);
    }
    setIsFilterActive(true);
  };

  const handleBuilderClick = (builderName) => {
    if (selectedBuilders.includes(builderName)) {
      setSelectedBuilders(selectedBuilders.filter((builder) => builder !== builderName));
    } else {
      setSelectedBuilders([...selectedBuilders, builderName]);
    }
    setIsFilterActive(true);
  };

  const handleClearClick = () => {
    setPropertyPhases([]);
    setSaleTypes([]);
    setAssetType([]);
    setSelectedCities([]);
    setSelectedBuilders([]);
    setIsFilterActive(false);
    setIsClearButtonActive(false);
    setEndDate("");
    setStartDate("");
    setPriceRange([]);
  };
console.log(propertyPhases);
console.log(saleTypes);
console.log(assetType);
console.log(selectedCities);
console.log(selectedBuilders);
console.log(priceRange);
console.log(startDate);
console.log(endDate);
  return (
    <>
    <div className=' text-black flex flex-row justify-between'>
    <div className='text-black text-xl font-bold'>Filter By</div>
    <div className='flex flex-row gap-2 pr-2'>
    <button
    onClick={handleFilterClick}
    className={`text-sm w-16 font-medium flex flex-row justify-center pt-1 ${
      isFilterActive ? 'ButtonCollect' : 'ButtonBeforeCollect'
    }`}
    disabled={!isFilterActive} // Disable the button if no filter is applied
  >
    Apply
  </button>
      <button
        onClick={handleClearClick}
        className={`filterClearButton text-white text-sm w-16 font-medium pt-1 flex flex-row justify-center ${
          isClearButtonActive ? 'ButtonCollect' : 'ButtonBeforeCollect'
        }`}
      >
        Clear
      </button>
    </div>
  </div>
  <div className=' text-black flex flex-col pt-4'>
    <div className=' text-lg font-bold text-start'>Property Phases</div>
    <div className=' flex flex-row flex-wrap gap-2 p-2 -ml-2'>
      <button
        className={`propertyPhasesButton  text-black text-sm w-28 h-8 ${
          propertyPhases.includes('launching') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handlePropertyPhaseClick('launching')}
      >
        Launching
      </button>
      <button
        className={`propertyPhasesButton  text-black text-sm w-16 ${
          propertyPhases.includes('open') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handlePropertyPhaseClick('open')}
      >
        Open
      </button>
      <button
        className={`propertyPhasesButton  text-black text-sm w-16 ${
          propertyPhases.includes('resale') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handlePropertyPhaseClick('resale')}
      >
        Resale
      </button>
    </div>
  </div>

  <div className=' text-black flex flex-col pt-4'>
    <div className=' text-lg font-bold text-start'>Sale Type</div>
    <div className=' flex flex-row flex-wrap gap-2 p-2 -ml-2'>
      <button
        className={`propertyPhasesButton  text-black text-sm w-14 h-8 ${
          saleTypes.includes('all') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handleSaleTypeClick('all')}
      >
        All
      </button>
      <button
        className={`propertyPhasesButton  text-black text-sm w-20  whitespace-nowrap ${
          saleTypes.includes('presale') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handleSaleTypeClick('presale')}
      >
        Pre Sale
      </button>
      <button
        className={`propertyPhasesButton  text-black text-sm w-24 whitespace-nowrap ${
          saleTypes.includes('publicsale') ? 'propertyCollectButton' : 'propertyCollectButtonBefore'
        }`}
        onClick={() => handleSaleTypeClick('publicsale')}
      >
        Public Sale
      </button>
    </div>
  </div>

  <div className=' text-black flex flex-col pt-4 '>
    <div className=' text-lg font-bold text-start'>City</div>
    <div className=' flex flex-row flex-wrap gap-2 p-2 -ml-2'>
      <CityButton name="Bangalore" onClick={handleCityClick} selectedCities={selectedCities} />
      <CityButton name="Mumbai" onClick={handleCityClick} selectedCities={selectedCities} />
      <CityButton name="Chennai" onClick={handleCityClick} selectedCities={selectedCities} />
    </div>
  </div>

  <div className=' text-black flex flex-col pt-4'>
    <div className=' text-lg font-bold text-start'>Builder's Name</div>
    <div className=' flex flex-row flex-wrap gap-2 p-2 -ml-2'>
      <BuilderButton name="Prestige Builder" onClick={handleBuilderClick} selectedBuilders={selectedBuilders} />
      <BuilderButton name="Varsha" onClick={handleBuilderClick} selectedBuilders={selectedBuilders} />
      <BuilderButton name="Adani" onClick={handleBuilderClick} selectedBuilders={selectedBuilders} />
    </div>
  </div>

  <div className=' text-black pt-4 flex flex-col'>
    <div className=' text-lg font-bold text-start'>Asset type</div>
    <div className=' text-lg font-bold text-start flex flex-col p-2 gap-3 -ml-2'>
      <div className=' text-black flex flex-row gap-4 ' >
        <AssetButton name="All" assetType={assetType} onClick={handleAssetTypeClick} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
        
        <AssetButton name="Commercial" onClick={handleAssetTypeClick} assetType={assetType} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
      
        <AssetButton name="Residential" onClick={handleAssetTypeClick} assetType={assetType} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
        <AssetButton name="Plots" onClick={handleAssetTypeClick} assetType={assetType} />
      </div>
    </div>
  </div>

  <div className=' text-black pt-4 flex flex-col'>
    <div className='text-lg font-bold text-start'>Price range</div>
    <div className='text-lg font-bold text-start flex flex-col p-2 gap-3 -ml-2'>
      <div className=' text-black flex flex-row gap-4 ' >
        <PriceRangeButton name="Upto 5000" priceRange={priceRange} onClick={handlePriceRangeClick} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
        
        <PriceRangeButton name="50,000-1,00,000" onClick={handlePriceRangeClick} priceRange={priceRange} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
      
        <PriceRangeButton name="Above 1,00,000" onClick={handlePriceRangeClick} priceRange={priceRange} />
      </div>
      <div className=' text-black flex flex-row gap-4'>
        <PriceRangeButton name="Plots" onClick={handlePriceRangeClick} priceRange={priceRange} />
      </div>
    </div>
  </div>




  <div className=' text-black flex flex-col pt-4 '>
        <div className='text-lg font-bold text-start'>Listing Date</div>
        <div className='flex flex-col gap-2 p-2 -ml-2'>
          <div className=' flex flex-row gap-1'>
              <div className='startDate'>
                  <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleStartDateChange}
                  />
              </div>
              
          </div>
          <div className=' flex flex-row gap-1'>
              <div className='endDate'>
                  <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleEndDateChange}
                  />
              </div>
             
          </div>
        </div>
  </div>
  </>
  )
}

export default SideNav
