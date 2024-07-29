import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css'
import { Keyboard, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import ClientsCard from './ClientsCard';

const SwiperCom = ({clients}) => {
    return (
        <div className='swiperClass'>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
                modules={[Keyboard, Pagination, Navigation, EffectCoverflow]}
                effect="coverflow"
                className="mySwiper"
            >
                {clients.map((data, index) => (
                    <SwiperSlide key={index}>
                        <ClientsCard key={index} data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperCom
