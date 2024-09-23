import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillX } from 'react-icons/ai'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div  className="bg-black text-white max-w-[2000px]  sm:h-[500px] p-12 flex justify-between mx-auto hover:cursor-pointer">
        <ul>
            <li className='font-medium '>Customer Care</li>
            <li><a>Help Center</a></li>
            <li><a>How to Buy</a></li>
            <li><a>Corporate & Bulk Purchasing</a></li>
            <li><a>Returns & Refunds</a></li>
            <li><a>Shop</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Purchase Protection</a></li>
            <li><a>Pick up Points</a></li>
        </ul>

        <ul>
            <li className='font-medium'>ADORNIA</li>
            <li><a>About Us</a></li>
            <li><a>Digital Payments</a></li>
            <li><a>Donates</a></li>
            <li><a>Blog</a></li>
            <li><a>Term and Conditions</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>NTN Number:40123456-7</a></li>
            <li><a>STRN Number:1700-123455678</a></li>
            <li><a>Online Shopping App</a></li>
            <li><a>Online Grocery Shopping</a></li>
            <li><a>Adornia Exclusive</a></li>
            <li><a>Adornia University</a></li>
            <li><a>Sell on Adornia</a></li>
            <li><a>Join Adornia Affiliate Program</a></li>
        </ul>
         
         <div className='flex gap-1 text-[20px]'>
          <p className='flex flex-gap-4' >Follow Us:</p>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillTwitterCircle />
          <FaSquareXTwitter />
         </div>
    </div>

    
  )
}

export default Footer


