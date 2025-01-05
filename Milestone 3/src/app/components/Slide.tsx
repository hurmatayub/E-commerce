import Image from 'next/image';
import React from 'react';

const Slide: React.FC = () => {
  return (
    <div className="relative">
    <div className="absolute lg:left-[30px]  md:left-[200px] max-w-[350px] sm:max-w-[250px] lg:top-[60%] top-[130px] -translate-y-[50%] space-y-4 p-4 sm:p-0 rounded-none">
      <button
        className="lg:px-8 lg:py-3 px-3 py-3 sm:mt-6 md:px-12 md:py-5 bg-[#76422f] text-white text-lg sm:text-base md:text-2xl mt-7 rounded-[10px]"
      >
        Shop Now
      </button>
    </div>
    <Image
      className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto object-cover object-center mt-2"
      src="/banner.png"
      alt="banner"
      width={2000}
      height={2000}
    />
  </div>
  
  );
};

export default Slide;
