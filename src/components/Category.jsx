import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from './SectionTitle';

const Category = () => {
    return (
        <div className='w-[80%] mx-auto my-20'>
            <SectionTitle subheading={'from 11.00am to 10.00pm'} heading={'order online'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-xl md:text-2xl lg:text-3xl uppercase text-center mr-8 md:mr-10 -mt-10 text-white shadow-md font-serif'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-xl md:text-2xl lg:text-3xl uppercase text-center mr-8 md:mr-10 -mt-10 text-white shadow-md font-serif'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-xl md:text-2xl lg:text-3xl uppercase text-center mr-8 md:mr-10 -mt-10 text-white shadow-md font-serif'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-xl md:text-2xl lg:text-3xl uppercase text-center mr-8 md:mr-10 -mt-10 text-white shadow-md font-serif'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-xl md:text-2xl lg:text-3xl uppercase text-center mr-8 md:mr-10 -mt-10 text-white shadow-md font-serif'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;