import { Link } from "react-router-dom";
import img from "../../assets/imgs/flowers.jpg";
import pi from "../../assets/imgs/foodApp.png";
import pf from "../../assets/imgs/concerteck.png";
import weather from "../../assets/imgs/weatherApp.png";
import bbs from "../../assets/imgs/bbsApp.png";
import betriax from "../../assets/imgs/betriax.png";
import db from "../../assets/imgs/dolar.png";
import fika from "../../assets/imgs/fika.png";

import { useTranslation } from "react-i18next";


const Projects = () => {

    const [t] = useTranslation("global");

    return (
        <div id="projects" className="pt-10 lg:pt-40">
            <img src={img} alt="" className="invisible lg:visible lg:absolute w-full opacity-70"/>
            <h1 className="relative text-darkGrey font-bold text-7xl text-center pt-10">{t("projects.title")}</h1>
            <h3 className="relative text-darkGrey font-bold text-4xl text-center pt-5">{t("projects.subtitle")}</h3>

            <div className="flex flex-wrap justify-center pt-5 mt-5 lg:mt-0 bg-lightBlue lg:bg-lightGrey">
                <Link to="/project/food">
                    <img src={pi} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>

                <Link to="/project/concerteck">
                    <img src={pf} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>

                <Link to="/project/weatherApp">
                    <img src={weather} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>

                {/* <Link to="/project/bobsBurgers">
                    <img src={bbs} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link> */}

                <Link to="/project/crypto">
                    <img src={betriax} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>

                <Link to="/project/dolar">
                    <img src={db} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>

                <Link to="/project/filmbox">
                    <img src={fika} alt="" className="relative w-96 h-64 px-5 py-5 hover:-translate-y-1 hover:scale-110 duration-300"/>
                </Link>
            </div>
        </div>
    );
}
 
export default Projects;