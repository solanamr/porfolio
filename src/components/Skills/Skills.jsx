import html from "../../assets/imgs/html.svg";
import js from "../../assets/imgs/js.svg";
import react from "../../assets/imgs/react.svg";
import redux from "../../assets/imgs/redux.svg";
import css from "../../assets/imgs/css.svg";
import node from "../../assets/imgs/nodejs.svg";
import post from "../../assets/imgs/pgsql.svg";
import seq from "../../assets/imgs/sequelize.svg";
import git from "../../assets/imgs/git.svg";
import github from "../../assets/imgs/github.svg";
import ex from "../../assets/imgs/express.svg";
import tailwind from "../../assets/imgs/tailwind.svg";
import figma from "../../assets/imgs/figma.svg";
import sass from "../../assets/imgs/sass.svg";
import material from "../../assets/imgs/material.svg";

import { useTranslation } from "react-i18next";


const Skills = () => {

  const [t] = useTranslation("global");

  return (
    <div id="skills" className="">
      <h3 className="font-bold text-4xl text-darkGrey pt-20 pl-2 lg:pl-40">{t("skills.skills")}</h3>
      <p className="text-darkGrey font-medium text-2xl pt-3 pl-2 lg:pl-40">{t("skills.desc")}</p>

      <div className="flex flex-wrap pl-10 lg:pl-36 pt-5">

       <div className="px-3">
         <img src={js} alt="" className="w-24"/>
         <p className="text-center">Javascript</p>
       </div>
        
       <div className="px-3">
         <img src={html} alt="" className="w-24"/>
         <p className="text-center">HTML</p>
       </div>
        
        <div className="px-3">
          <img src={react} alt="" className="w-24"/>
          <p className="text-center">React</p>
        </div>
        
        <div className="px-3">
          <img src={redux} alt="" className="w-24"/>
          <p className="text-center">Redux</p>
        </div>

       <div className="px-3">
         <img src={css} alt="" className="w-24"/>
         <p className="text-center">CSS</p>
       </div>
        
        <div className="px-3">
          <img src={tailwind} alt="" className="w-24 pt-5 pb-4"/>
          <p className="text-center">Tailwind</p>
        </div>
        
       <div className="px-3">
         <img src={sass} alt="" className="w-24 pb-5"/>
         <p className="text-center">Sass</p>
       </div>

        <div className="px-3">
          <img src={material} alt="" className="w-24 pb-4"/>
          <p className="text-center">Material UI</p>
        </div>
        
        <div className="px-3">
          <img src={node} alt="" className="w-24"/>
          <p className="text-center">Node.js</p>
        </div>
        
        <div className="px-3">
          <img src={ex} alt="" className="w-24"/>
          <p className="text-center">Express</p>
        </div>
        
       <div className="px-3">
         <img src={post} alt="" className="w-24"/>
         <p className="text-center">PostgreSQL</p>
       </div>
        
        <div className="px-3 pt-8">
          <img src={seq} alt="" className="w-24"/>
          <p className="text-center">Sequelize</p>
        </div>
        
        <div className="px-3 pt-8">
          <img src={github} alt="" className="w-24"/>
            <p className="text-center">Github</p>
        </div>

        <div className="px-3 pt-8">
          <img src={git} alt="" className="w-24"/>
            <p className="text-center">Git</p>
        </div>

        <div className="px-3 pt-8">
          <img src={figma} alt="" className="w-24"/>
            <p className="text-center">Figma</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
