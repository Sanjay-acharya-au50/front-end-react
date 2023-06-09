import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#e9e9e9] h-[800px] w-full py-[100px]'>
    <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
            <div className='text-[25px] xs:text-[10px] md:text-[50px]'>Chicken Kababb!!</div>
            <div className='text-[40px] md:text-[70px]'>Pure Veg!!</div>
            <div className='text-[20px] md:text-[30px]'>heh! 

            <Typed 
            className='pl-2'
            strings={["Order Veg chicken biryani!","Chicken Never Gave Us Oxygen","Try Chicken", "Go Green!", "Save Earth" ]}
            typeSpeed={100}
            backSpeed={10}
            loop={true}

            />


             </div>
                <button className='bg-black text-white text-[20px] md:w-[20%] p-3 mt-2 rounded'>Order Now!</button>
    </div>
        
    </div>
  )
}

export default Banner