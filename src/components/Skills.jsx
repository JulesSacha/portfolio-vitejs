import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";

function Skills() {
  return (
    <>
      <div id="skills"  className="wrapper h-full  p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white  p-10 rounded-[px] lg:p-2">
        <h1 className="text-center text-4xl font-bold py-6">Skills</h1>
 
          <div className="box flex  justify-between  items-center">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >

              <SwiperSlide className="skill-item react">
                {" "}
                <i class="fa-brands fa-react"></i>
              </SwiperSlide>
              <SwiperSlide className="skill-item php">
                {" "}
                <i class="fa-brands fa-php"></i>
              </SwiperSlide>
              <SwiperSlide className="skill-item js">
                {" "}
                <i class="fa-brands fa-js"></i>
              </SwiperSlide>

              <SwiperSlide className="skill-item symfony">
                {" "}
                <i class="fa-brands fa-symfony"></i>
              </SwiperSlide>
              <SwiperSlide className="skill-item bootstrap">
                {" "}
                <i class="fa-brands fa-bootstrap"></i>
              </SwiperSlide>
   
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
