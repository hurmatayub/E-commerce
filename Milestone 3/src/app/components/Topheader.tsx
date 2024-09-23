import React from 'react'

import { BsTwitterX, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Topheader = () => {
  return (
    <div className=' border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className='text-gray-500 text-[12px]'>
            <b>FREE SHIPPING:</b>On all orders over <b>RS 2500</b>
          </div>

          <div className='flex gap-4'>
            <select 
               className='text-gray-500 text-[12px] w-[70-px]'
               name='currency'
               id='currency'
              >
                <option value="PAK">PAK</option>
                <option value="BAN">BAN</option>
                <option value="UAE">UAE</option>
                <option value="NPL">NPL</option>
              </select>

              <select 
                className='text-gray-500 text-[12px] w-[80px]'
                name='language'
                id='language'
              >
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
              </select>
            </div>


          
        </div>
      </div>
    </div>
  )
}

export default Topheader
