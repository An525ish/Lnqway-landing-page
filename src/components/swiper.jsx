import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import Customertestimonial from './Customertestimonial'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[100%] md:w-[80%] mt-[5rem] h-[35rem] text-center"
            >
                <SwiperSlide className="md:p-28 pt-28 flex justify-center">
                    <Customertestimonial
                        name="Andrew"
                        img={profile1}
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
                </SwiperSlide>
                <SwiperSlide className="md:p-28 pt-28 flex justify-center">
                    <Customertestimonial
                        name="Andrew"
                        img={profile2}
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
                </SwiperSlide>
                <SwiperSlide className="md:p-28 pt-28 flex justify-center">
                    <Customertestimonial
                        name="Andrew"
                        img={profile3}
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
