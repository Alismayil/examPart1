import React from 'react'
import './BestSellersSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Pagination } from 'swiper/modules';

import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

function BestSellersSection() {
  return (
    <section id='bestSellersSection'>
           <div className="bestSellersSectionUpBox">
        <p>Popular Item in the market</p>
        <h1>Best <p>Sellers</p></h1>
      </div>
        <div className="bestSellersSectionDownBox">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            577: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            827: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1096: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Accessories</p>
                    <h1>Quartz Belt Watch</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Beauty</p>
                    <h1>Women Freshwash</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Decor</p>
                    <h1>Room Flash Light</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Decor</p>
                    <h1>Room Flash Light</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product5.png.webp" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Accessories</p>
                    <h1>Man Office Bag</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bestSellerSliderBox">
                <div className="bestSellerImageBox">
                <div className="bestSellerHoverBox">
                <button><IoIosSearch /></button>
                <button><IoCartOutline /></button>
                <button><GoHeart /></button>
                </div>

                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product6.png.webp" alt="" />
                </div>
                <div className="bestSellerTextBox">
                    <p>Kids Toy</p>
                    <h1>Charging Car</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      
        </div>
       
    </section >
  )
}

export default BestSellersSection