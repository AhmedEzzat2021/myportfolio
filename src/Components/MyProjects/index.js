import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
// images ==================================
import crud from "../../assets/imageProjects/crud.png";
import dashboard from "../../assets/imageProjects/dashboard.png";
import kasper from "../../assets/imageProjects/kasper.jpg";
import menufood from "../../assets/imageProjects/menufood.png";
import imageMovie from "../../assets/imageProjects/movies.png";
import reminder from "../../assets/imageProjects/reminder.png";
import ultimate from "../../assets/imageProjects/ultimate.jpg";
import utu from "../../assets/imageProjects/utu.png";

export const Projects = () => {
  const myDataSlider = [
    {
      id: 1,
      linkSite: "https://ahmedezzat2021.github.io/movie-react/",
      image: imageMovie,
      description: "ReactJS",
      title: "MovieDb",
    },
    {
      id: 2,
      linkSite: "https://ahmedezzat2021.github.io/menuFood/",
      image: menufood,
      description: "ReactJS",
      title: "MenuFood",
    },
    {
      id: 3,
      linkSite: "https://ahmedezzat2021.github.io/reminder-react/",
      image: reminder,
      description: "ReactJS",
      title: "Reminder",
    },
    {
      id: 4,
      linkSite: "https://ahmedezzat2021.github.io/crud-js/",
      image: crud,
      description: "Html & Css & Js",
      title: "Cruds",
    },
    {
      id: 5,
      linkSite: "https://ahmedezzat2021.github.io/Dashboard_2022/",
      image: dashboard,
      description: "Html & Css & Js",
      title: "Dashboard",
    },
    {
      id: 6,
      linkSite: "https://ahmedezzat2021.github.io/utuNewVersion/home",
      image: utu,
      description: "Html & Css & Js",
      title: "E-commerce UTU",
    },
    {
      id: 7,
      linkSite: "https://ahmedezzat2021.github.io/ultimateTemplate/",
      image: ultimate,
      description: "Html & Css & Js",
      title: "Ultimate Template",
    },
    {
      id: 8,
      linkSite: "https://ahmedezzat2021.github.io/kasperDesign/",
      image: kasper,
      description: "Html & Css & Js",
      title: "Kasper Template",
    },
  ];
  return (
    <div className="container_proj">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {myDataSlider.map(ele => {
          return (
            <SwiperSlide key={ele.id}>
              <img src={ele.image} alt={ele.title} />
              <p>
                website {ele.title} build by <br /> <span>{ele.description}</span>
              </p>
              <a href={ele.linkSite} target="_blank" rel="noreferrer">
                Live demo <AiOutlineEye style={{ marginLeft: "5px" }} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Projects;
