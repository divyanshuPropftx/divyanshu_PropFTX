import React, { useState } from 'react';
import './Index.css';
import Navbar from '../../Component/Navbar/Index';
import SideNav from '../SideFilter/Index';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import PropertyCard from '../Cards/PropertyCard/Index';
import { IconContext } from 'react-icons';

function CollectionPage() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const updateSelectedFilters = (filters) => {
    setSelectedFilters(filters);
  };
  const [properties, setProperties] = useState([
    { name: 'Property 1', price: 1000, date: '2023-10-20' },
    { name: 'Property 2', price: 800, date: '2023-10-19' },
    // Add more properties as needed
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to filter properties based on the search input
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    const sortedProperties = [...filteredProperties];

    if (selectedOption === 'date-newest') {
      sortedProperties.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedOption === 'date-oldest') {
      sortedProperties.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedOption === 'price-asc') {
      sortedProperties.sort((a, b) => a.price - b.price);
    } else if (selectedOption === 'price-desc') {
      sortedProperties.sort((a, b) => b.price - a.price);
    }

    setSortOption(selectedOption);
    setProperties(sortedProperties);
  };

  return (
    <div className='parent font-poppins'>
      <Navbar />
      <div className='bg-white flex flex-row justify-center'>
        <div className='helperContainer text-black flex flex-row gap-4 pt-8'>
          <div className='leftPaneCollection text-black flex flex-col ml-2 p-2'>
            <SideNav updateSelectedFilters={updateSelectedFilters} />
          </div>

          <div className='rightPaneCollection text-black flex flex-col pl-2 pr-2'>
            <div className='text-4xl font-semibold text-start'>Properties</div>
            <div className='searchCollection flex flex-row justify-between p-2 pt-8 '>
              <div className='searchSpace flex flex-row gap-2 p-1'>
                <div className='flex flex-col justify-center'>
                  <div className='searchCollect'>
                    <IconContext.Provider value={{ color: 'black' }}>
                      <div>
                        <AiOutlineSearch />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
                <div className='text-base'>
                  <input
                    type='text'
                    placeholder='Search properties'
                    value={searchInput}
                    onChange={handleSearchInputChange}
                  />
                </div>
              </div>
              <div className='flex flex-row text-lg font-normal'>
                <label htmlFor='sortDropdown'>Sort by:</label>
                <select
                  id='sortDropdown'
                  value={sortOption}
                  onChange={handleSortChange}
                  className='sort-select font-bold text-base border -mt-1'
                >
                  <option value='default'>Date of Listing (Newest First)</option>
                  <option value='date-oldest'>Date of Listing (Oldest First)</option>
                  <option value='price-asc'>Price Range (Low to High)</option>
                  <option value='price-desc'>Price Range (High to Low)</option>
                </select>
                <div className='mt-1.5'>
                  <IconContext.Provider value={{ color: 'black' }}>
                    <div>
                      <AiFillCaretDown />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>

            <div className='flex flex-row flex-wrap gap-2'>
              <div className='flex flex-row flex-wrap gap-2'>
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={index}
                    name={property.name}
                    // Add other property data as needed
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
