import { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import logo from "../../assets/imgs/logoS.png";

import es from "../../assets/imgs/es.png";
import en from "../../assets/imgs/en.png";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
 
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


const Home = () => {

  const [open, setOpen] = useState(false)
  const [t, i18n] = useTranslation("global");

  return (
    <div id="home" className="bg-lightGrey">

      <nav className="">
        <div className="hidden lg:flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-14 ml-4 mt-4 mb-4" />
          </Link>

          <div className="self-center">
            <a href="#home" className="pr-3 font-semibold">
            {t("navBar.home")}
            </a>
            <a href="#about" className="pr-3 font-semibold">
            {t("navBar.about")}
            </a>
            <a href="#skills" className="pr-3 font-semibold">
            {t("navBar.skills")}
            </a>
            <a href="#projects" className="pr-3 font-semibold">
            {t("navBar.projects")}
            </a>
            <a href="#contact" className="pr-10 font-semibold">
            {t("navBar.contact")}
            </a>
              <button onClick={() => i18n.changeLanguage("es")} >
                <img src={es} alt="es" className="w-5 mr-3 "/>
              </button>
              <button onClick={() => i18n.changeLanguage("en")}> 
              <img src={en} alt="en" className="w-5 mr-10"/> 
              </button>
          </div>
        </div>


        <div className="flex justify-between">
          <img src={logo} alt="logo" className="block lg:hidden w-7 pt-5 ml-4 mb-4" />
              <HiMenuAlt3 
              className="cursor-pointer text-3xl mt-5 lg:hidden"
              onClick={() => setOpen(!open)}/>
        </div>
        {
          open && 
          <motion.div 
          initial={{x:300}} animate={{x:0}} 
          className="fixed right-0 top-0 bg-lightBlue h-screen text-white w-80">
            <div className="flex flex-col gap-8 mt-[40%] ml-[30%]">
            <a href="#home" className="text-xl font-semibold">
            {t("navBar.home")}
            </a>
            <a href="#about" className="text-xl font-semibold">
            {t("navBar.about")}
            </a>
            <a href="#skills" className="text-xl font-semibold">
            {t("navBar.skills")}
            </a>
            <a href="#projects" className="text-xl font-semibold">
            {t("navBar.projects")}
            </a>
            <a href="#contact" className="text-xl font-semibold">
            {t("navBar.contact")}
            </a>
            </div>
            <HiX
            className="absolute right-4 text-3xl top-8 cursor-pointer"
            onClick={() => setOpen(!open)}/>
          </motion.div>
        }
         
      </nav>

          <div className="flex justify-center items-center pt-20">
            <div className="pl-10">
              <h3 className="pb-4 text-grey text-3xl font-semibold">{t("home.dev")}</h3>
              <div className="bg-lightBlue pr-20 lg:pr-60 pb-1 pl-2 shadow-xl">
                <h1 className="text-darkGrey font-bold text-4xl lg:text-6xl ">Solana Romero</h1>
              </div>
              <p className="pt-4 text-xl">{t("home.front")}</p>
            </div>
          </div>

          <About/>

          <Skills/>

          <Projects/>

          <Contact/>

          <Footer/>

          <ScrollToTop/>

    </div>
  );
};

export default Home;
