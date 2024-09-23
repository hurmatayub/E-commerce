import Image from 'next/image';
import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

interface  propsType {
    id: number;
    img: string;
    title: string;
    desc: string;
    rating: number;
    off: string;
    price: string;
    sold: string;
    sign: string;
}


const ProductCard: React.FC<propsType> = ({
    id,
    img,
    title,
    desc,
    rating,
    off,
    price,
    sold, 
    sign
  }) => {
    const  generateRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />

                    </div>
                );
            case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>

                );
            case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
            case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 6:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 7:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );
             case 8:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        
                    </div>
                );

            default:
                return null;
        }
    };

  return (
    <div className='px-4 hover:border border-gray-200 h-auto shadow-inner rounded-xl max-w-[400px]'>
        <div>
        <Image className='w-full h-auto'
         src={img}
         width={200}
         height={300}
         alt={title}
         />
        </div>




        <div className='space-y-2 py-2'>
            <h2 className='bg-orange-500 w-[65px] rounded-3xl text-white text-[10px] text-center font-bold'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{desc}</p>
            <div className='font-normal text-[17px] flex gap-4 h-3'>
                RS. {price}
                <del className='text-gray-500 text-[14px] font-normal'>
                    RS. {parseInt(price) + 25}</del>
            </div>
            <p className='text-gray-500 text-[12px] max-w-[90px] '>{off}</p>
            
            <div className='text-black text-[12px] font-[16] flex gap-4  '>
                {sold} {sign}
            </div>
            <div>{generateRating(rating)}
                <p className='text-gray-400 font-normal text-[12px]'>Overseas</p>
            </div>
        </div>

    </div>
  
    
  )
}

export default ProductCard
