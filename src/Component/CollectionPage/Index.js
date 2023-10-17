import React, { useState } from 'react';
import './Index.css';
import Navbar from '../../Component/Navbar/Index';
import { toast, ToastContainer } from 'react-toastify';
import SideNav from '../SideFilter/Index';


function CollectionPage() {
  return (
    <div className='parent font-poppins'>
      <Navbar />
      <div className='bg-white'>
        <div className='text-black flex flex-row gap-20 pl-8 pt-8'>
            <div className='leftPaneCollection text-black flex flex-col p-2'>
              <SideNav/>
            </div>

            <div className='border border-black text-black'>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
