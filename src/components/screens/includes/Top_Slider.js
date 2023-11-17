import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

import '../../../assets/css/home_style.css'


export default function App() {
    return (
        <>
            <Swiper
                grabCursor={true}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                loopedSlides={1}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                pagination={{ clickable: true }}
                className="top_slider"
            >
                <SwiperSlide>
                    <div className="top_slider_item">
                        <div className='top_slider_item_wrapper'>
                            <p className='top_slider_item_title'>Текст 123</p>
                            <p className='top_slider_item_text'>
                                Производитель конкретно постарался над данным майнером, поскольку он способен выдавать мощность сравнимую с более чем 20 видеокарт RTX 3080, работая на алгоритме Etha
                            </p>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className="top_slider_item">
                        <div className='top_slider_item_wrapper'>
                            <p className='top_slider_item_title'>Текст 123</p>
                            <p className='top_slider_item_text'>
                                Производитель конкретно постарался над данным майнером, поскольку он способен выдавать мощность сравнимую с более чем 20 видеокарт RTX 3080, работая на алгоритме Etha
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="top_slider_item">
                        <div className='top_slider_item_wrapper'>
                            <p className='top_slider_item_title'>Текст 123</p>
                            <p className='top_slider_item_text'>
                                Производитель конкретно постарался над данным майнером, поскольку он способен выдавать мощность сравнимую с более чем 20 видеокарт RTX 3080, работая на алгоритме Etha
                            </p>
                        </div>

                    </div>

                </SwiperSlide>

                <div className='prev_next_btns_wrapper'>
                    <button className='prev'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.875 10H3.75M8.125 5L3.125 10L8.125 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className='next'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.125 10H16.25M11.875 5L16.875 10L11.875 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                </div>

            </Swiper>
        </>
    );
}

