import { Link } from "react-router-dom";

import logoS from "../../../assets/imgs/logoS.png";
import logo from "../../../assets/imgs/bsbLogo.png";

import js from "../../../assets/imgs/js.svg";
import react from "../../../assets/imgs/react.svg";
import redux from "../../../assets/imgs/redux.svg";
import css from "../../../assets/imgs/css.svg";
import node from "../../../assets/imgs/nodejs.svg";
import mongo from "../../../assets/imgs/mongodb.png";
import git from "../../../assets/imgs/git.svg";
import github from "../../../assets/imgs/github.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const Bob = () => {
  return (
    <div className="bg-lightGrey">
      <Link to="/">
        <img src={logoS} alt="" className="w-14" />
      </Link>

      <div className="flex">
        <img src={logo} alt="" className="w-40" />
        <h1 className="text-xl">Bob's burgers app</h1>
      </div>
      <h3 className="text-lg">Self-taught project</h3>
      <p className="text-base">
        <b>Projects goals</b>: Project to learn MongoDB
      </p>
      <h4 className="text-lg text-center font-bold pb-5 pt-5">
        Technologies used for this project
      </h4>

      <div className="flex justify-center">
        <div className="">
          <img src={js} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">Javascript</p>
        </div>
        <div className="">
          <img src={react} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">React</p>
        </div>
        <div className="">
          <img src={redux} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">Redux</p>
        </div>
        <div className="">
          <img src={css} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">CSS</p>
        </div>
        <div className="">
          <img src={node} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">Node.js</p>
        </div>
        <div className="">
          <img src={mongo} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">MongoBD</p>
        </div>

        <div className="">
          <img src={github} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">Github</p>
        </div>

        <div className="">
          <img src={git} alt="" className="w-20 px-3" />
          <p className="text-center text-sm">Git</p>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="py-16"
      >
        {/* <SwiperSlide>
        <img src={landing} alt="" className="w-[680px] ml-[25%]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={home} alt="" className="w-[680px] ml-[25%]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={create} alt="" className="w-[680px] ml-[25%]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={detail} alt="" className="w-[780px] ml-[22%]" />
      </SwiperSlide> */}
      </Swiper>

      <p>
        In this app you can checkout 40 characters from the Bob's burgers API. You can
        search for characters by name and see the details of them.
      </p>
      <p>
        If you want to know more about this project don't hesitate to check it
        out. Here's the GitHub respository link:
      </p>

      <a href="https://github.com/solanamr/bobsBurgers" target="_blank" className="bg-lightBlue">
        Github respository
      </a>
    </div>
  );
};

export default Bob;
