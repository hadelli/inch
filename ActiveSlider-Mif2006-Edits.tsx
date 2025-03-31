'use client';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import '@/app/globals.css';

import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { Description } from './Description';
import { useState, useEffect } from 'react';

const ActiveSlider = () => {
  const [paginationClass, setPaginationClass] = useState("");

  useEffect(() => {
    const updatePaginationClass = () => {
      if (window.innerWidth < 1024) {
        setPaginationClass("swiper-pagination-hidden");
      } else {
        setPaginationClass("");
      }
    };
    
    updatePaginationClass();
    window.addEventListener("resize", updatePaginationClass);

    return () => window.removeEventListener("resize", updatePaginationClass);
  },[]);

  return (
    <div className='flex items-center justify-center flex-col  '>
        <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
            clickable:true,
            hiddenClass: paginationClass, 
            bulletActiveClass:'swiper-pagination-bullet-active',
            bulletClass:'swiper-pagination-bullet',
            
            
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-[100%] '
        
        >
            {Description.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='flex flex-col  bg-white gap-6 group relative shadow-lg md:max-lg:ml-20 max-md:ml-8 text-gray-500 px-6 py-8 md:h-[480px] h-[420px] min-[1024]:w-[420px] w-[480px] overflow-hidden cursor-pointer'>

                    <div className="absolute  inset-0  " />
                    <div className="relative flex flex-col gap-1">
                    
                    <div className='font-bold text-red-500 text-xl'>{item.title}...</div>
                <p className='text-gray-500 text-lg mt-2 leading-relaxed '>" {item.desc}"</p>
                <p className='text-gray-500 text-md'>{item.name}</p>
                <p className='text-gray-500 text-md'>{item.occupation}</p>
                </div>

                    </div>

                </SwiperSlide>
            ))}

        </Swiper>

    </div>
  )
}

export default ActiveSlider
