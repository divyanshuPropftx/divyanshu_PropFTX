import React, { useState } from 'react';
import './Index.css';
import Navbar from '../../Component/Navbar/Index';
import { toast, ToastContainer } from 'react-toastify';
import SideNav from '../SideFilter/Index';
 import { AiOutlineSearch} from 'react-icons/ai'
 import { AiFillCaretDown} from 'react-icons/ai'
 
 import { IconContext } from 'react-icons';


function CollectionPage() {
    const initialProperties = [
        // Define your initial list of properties here
        { name: 'Property 1', price: 1000 },
        { name: 'Property 2', price: 800 },
        // Add more properties as needed
      ];
const [properties, setProperties] = useState(initialProperties);
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

    if (selectedOption === 'date-newest') {
      filteredProperties.sort((a, b) => (new Date(b.date) - new Date(a.date)));
    } else if (selectedOption === 'date-oldest') {
      filteredProperties.sort((a, b) => (new Date(a.date) - new Date(b.date)));
    } else if (selectedOption === 'price-asc') {
      filteredProperties.sort((a, b) => a.price - b.price);
    } else if (selectedOption === 'price-desc') {
      filteredProperties.sort((a, b) => b.price - a.price);
    }

    setSortOption(selectedOption);
  };
  return (
    <div className='parent font-poppins'>
      <Navbar />
      <div className='bg-white flex flex-row justify-center'>
        <div className='text-black flex flex-row gap-12 pl-8 pt-8'>
            <div className='leftPaneCollection text-black flex flex-col p-2'>
              <SideNav/>
            </div>



            <div className='rightPaneCollection border border-black text-black flex flex-col pl-2 pr-2'>
                <div className=' text-4xl font-semibold text-start'>Properties</div>
                <div className='searchCollection flex flex-row justify-between p-2 pt-8 ' onClick={handleSortChange}>
                    <div className='searchSpace flex flex-row gap-2 p-1'>

                        <div className='flex flex-col justify-center'>
                          <div className='searchCollect'>
                            <IconContext.Provider value={{color:"black"}}>
                            <div>
                                <AiOutlineSearch />
                            </div>
                            </IconContext.Provider>
                          </div>
                        </div>
                        <div className='text-base'>
                            <input
                            type="text"
                            placeholder="Search properties"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            />
                        </div>
                       
                    </div>
                    <div className='flex flex-row text-lg font-normal'>
                    
                        <label htmlFor="sortDropdown">Sort by:</label>
                        <select
                        id="sortDropdown"
                        value={sortOption}
                        onChange={handleSortChange}
                        className="sort-select font-bold text-base border -mt-1"
                        >
                        <option value="default ">Date of Listing (Newest First)</option>
                        <option value="price-asc">Date of Listing (Oldest First)</option>
                        <option value="price-asc">Price Range (Low to High)</option>
                        <option value="price-desc">Price Range (High to Low)</option>
                        </select>
                        <div className='mt-1.5' >
                                <IconContext.Provider value={{color:"black"}}>
                                <div>
                                    <AiFillCaretDown />
                                </div>
                                </IconContext.Provider>
                        </div>
                        
                    </div>
                </div>
            </div>







        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
