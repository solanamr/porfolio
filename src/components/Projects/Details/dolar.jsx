import { Link } from "react-router-dom";

import logo from "../../../assets/imgs/dolarLogo.png";
import logoS from "../../../assets/imgs/logoS.png";
import js from "../../../assets/imgs/js.svg";
import react from "../../../assets/imgs/react.svg";
import redux from "../../../assets/imgs/redux.svg";
import tailwind from "../../../assets/imgs/tailwind.svg";
import node from "../../../assets/imgs/nodejs.svg";
import git from "../../../assets/imgs/git.svg";
import github from "../../../assets/imgs/github.svg";

import home from "../../../assets/imgs/dolarHome.png";
import register from "../../../assets/imgs/dolarRegister.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import { useTranslation } from "react-i18next";

const Dolar = () => {

  const [t] = useTranslation("global");
  
    return (
        <div className="bg-lightGrey pb-10">
        <Link to="/">
          <img src={logoS} alt="" className="w-7 lg:w-14 pt-5 ml-5" />
        </Link>
  
        <div className="flex pt-10 items-center justify-center pb-5">
          <img src={logo} alt="" className="w-20 lg:w-40" />
          <h1 className="text-2xl pl-4 font-semibold">{t("dolar.title")}</h1>
        </div>
        <h3 className="text-xl pl-10">{t("dolar.subtitle")}</h3>
        <p className="text-lg pl-10 pt-3">
        <b>{t("dolar.project")}</b>: {t("dolar.goals")}</p>
        <h4 className="text-lg text-center font-bold pb-5 pt-5">
        {t("dolar.techs")}
        </h4>
  
        <div className="flex justify-center flex-wrap">
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
            <img src={tailwind} alt="" className="w-20 px-3 pt-3" />
            <p className="text-center text-sm pt-3">Tailwind</p>
          </div>
          <div className="">
            <img src={node} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Node.js</p>
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
          className="py-16">
        <SwiperSlide>
          <img src={home} alt="" className="w-[680px] h-80 lg:ml-[25%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={register} alt="" className="w-[680px] lg:ml-[25%]" />
        </SwiperSlide>
        </Swiper>
  
        <p className="font-medium text-center lg:w-[800px] lg:ml-[22%]">
        {t("dolar.desc1")}
        </p>
        <p className="font-medium text-center lg:w-[800px] lg:ml-[21%] mb-10">
        {t("dolar.desc2")}
        </p>
        
          <a href="https://dolarboliviano.com/" target="_blank" className="bg-lightBlue py-2 px-2 text-white ml-40 lg:ml-[43%] mr-5 mb-10 rounded-sm">{t("dolar.link1")}</a>      
          
        
      </div>
    );
}
 
export default Dolar;