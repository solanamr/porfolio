import { Link } from "react-router-dom";

import logo from "../../../assets/imgs/filmboxLogo.png";
import logoS from "../../../assets/imgs/logoS.png";
import js from "../../../assets/imgs/js.svg";
import react from "../../../assets/imgs/react.svg";
import redux from "../../../assets/imgs/redux.svg";
import tailwind from "../../../assets/imgs/tailwind.svg";
import node from "../../../assets/imgs/nodejs.svg";
import git from "../../../assets/imgs/git.svg";
import github from "../../../assets/imgs/github.svg";

import home from "../../../assets/imgs/filmboxHome.png";
import detail from "../../../assets/imgs/filmboxDetail.png";
import register from "../../../assets/imgs/filmboxRegister.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import { useTranslation } from "react-i18next";

const Filmbox = () => {

  const [t] = useTranslation("global");

    return (
        <div className="bg-lightGrey pb-10">
        <Link to="/">
          <img src={logoS} alt="" className="w-7 lg:w-14 pt-5 ml-5" />
        </Link>
  
        <div className="flex pt-10 items-center justify-center pb-5">
          <img src={logo} alt="" className="w-40" />
          <h1 className="text-2xl pl-3 font-semibold">{t("filmbox.title")}</h1>
        </div>
        <h3 className="text-xl pl-10">{t("filmbox.subtitle")}</h3>
        <p className="text-lg pl-10 pt-3">
        <b>{t("filmbox.project")}</b>: {t("filmbox.goals")}</p>
        <h4 className="text-lg text-center font-bold pb-5 pt-5">
        {t("filmbox.techs")}
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
          <img src={home} alt="" className="w-[680px]  lg:ml-[25%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detail} alt="" className="w-[680px]  lg:ml-[25%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={register} alt="" className="w-[500px] h-[500px] lg:ml-[25%]" />
        </SwiperSlide>
        </Swiper>
  
        <p className="font-medium text-center lg:w-[800px] lg:ml-[22%]">
        {t("filmbox.desc1")}
        </p>
        <p className="font-medium text-center lg:w-[800px] lg:ml-[21%] mb-10">
        {t("filmbox.desc2")}
        </p>

          <a href="https://github.com/solanamr/project-fika" className="bg-lightBlue py-2 px-2 text-white ml-40 lg:ml-[43%] mr-5 mb-10 rounded-sm">{t("filmbox.link1")}</a>     
        
      </div>
    );
}
 
export default Filmbox;