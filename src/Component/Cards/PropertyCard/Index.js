import React from 'react'
import PropImage from '../../../Assets/propImage.png'
import './Index.css'
import { IconContext } from 'react-icons'
import { BiShareAlt } from 'react-icons/bi'
import { BsBookmark  } from 'react-icons/bs'
import { MdOutlineLocationOn  } from 'react-icons/md'
function PropertyCard({age,propertyType, imageSrc, name,place,minInvestment,propertyValue,tokensSold,totalTokens,grossYield,targetIRR,capitalGain}) {
  return (
    <div>
     <div className='cardProp text-black flex flex-col font-poppins'>
        <div className='text-black flex flex-row justify-center'>
            <img src={PropImage} className='cardImageCollect w-full h-full cover'/>
        </div>
        <div className='-mt-36 text-black flex flex-col'>
            <div className='text-black flex flex-row justify-between pl-6 pr-6 -mt-2'>
                <div className='ageProp text-xs text-white pt-0.5 -ml-4'>New</div>
                <div className='shareProp  flex flex-row justify-between pl-1.5 pr-1.5 -mr-4'>
                    <div className='mt-1'>
                        <IconContext.Provider value={{ color: "white", className:"w-3 h-3" }}>
                        <div>
                        <BiShareAlt/>
                        </div>
                        </IconContext.Provider>
                    </div>
                    <div className='mt-1'>
                        <IconContext.Provider value={{ color: "white", className:"w-3 h-3" }}>
                        <div>
                        <BsBookmark/>
                        </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className='propTypeProphelper text-black flex flex-row pl-6'>
                <div className='propTypeProp bg-blue text-xs pl-2 pr-2 mt-3 -ml-4'> Commercial </div>
            </div>

            <div className='text-black mt-2 flex flex-col p-1'>
                <div className='text-black text-start text-base font-medium'>Eastern Gard en EG101</div>
                <div className='flex flex-row pt-1'>
                    <div className='locationImageCollectCard'>
                        <IconContext.Provider value={{ color: "black", className:"w-4 h-4" }}>
                        <div>
                        <MdOutlineLocationOn/>
                        </div>
                        </IconContext.Provider>
                    </div>
                    <div className=' text-black text-sm pl-1'>India Gate,New Delhi</div>
                </div>
            </div>




            <div className='collectCardDetail text-black flex flex-row justify-between mt-2 p-1'>
                <div className='text-black flex flex-col'>
                    <div className='text-black text-sm font-medium'>Min Investment</div>
                    <div className='text-black text-base font-medium pt-1'>35.3K</div>
                </div>
                <div className='text-black flex flex-col'>
                    <div className='text-black text-sm font-medium'>Property Value</div>
                    <div className='text-black text-base font-medium pt-1'>3 Cr</div>
                </div>
            </div>







            <div className='text-black flex flex-row gap-1 mt-2'>
                <div className='detailCardCollect text-black flex flex-col pl-1 pr-2 pt-1'>
                    <div className='text-black text-xs'>Tokens</div>
                    <div className='text-black text-lg font-medium'>30</div>
                </div>
                <div className='detailCardCollect text-black flex flex-col pl-1 pr-2 pt-1'>
                    <div className='text-black text-xs whitespace-nowrap'>Gross Yield</div>
                    <div className='text-black text-lg font-medium'>10%</div>
                </div>
                <div className='detailCardCollect text-black flex flex-col pl-1 pr-2 pt-1'>
                    <div className='text-black text-xs whitespace-nowrap'>Target IRR</div>
                    <div className='text-black text-lg font-medium'>13.05%</div>
                </div>
                <div className='text-black flex flex-col pl-1 pt-1'>
                    <div className='text-black text-xs whitespace-nowrap'>Capital gain</div>
                    <div className='text-black text-lg font-medium'>2%</div>
                </div>
            </div>


            <div className='text-black flex flex-col  mt-2 p-1 gap-1'>
                <div className='flex flex-row justify-center'>
                <div className='tokenSoldProgressbar text-black flex flex-row'>
                    <div className='progressLength w-32 bg-blue'></div>
                    <div className='tokenIcon bg-navyBlue text-white -ml-2 flex flex-col justify-center'>
                        <div className='fontTokenPB font-bold'>T</div>
                    </div>
                </div>
                </div>

                <div className='text-black text-sm'>{<span className='text-blue font-bold'>10</span>} out of {<span className='text-blue font-bold'>30</span>} tokens invested</div>
            </div>
            <div className='launchingCardCollect border border-black text-white text-lg font-bold mt-4 p-1'>Launching soon</div>
        </div>
     </div>
    </div>
  )
}

export default PropertyCard
