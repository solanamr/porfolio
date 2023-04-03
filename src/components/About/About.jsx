import Wave from "../../icons/wave";
import Triangle from "../../icons/assimetricTrig";

import { useTranslation } from "react-i18next";


const About = () => {

    const [t] = useTranslation("global");
    
    return (
        <div id="about" className="pt-40">
            <Wave/>
            <div className="bg-darkGrey pt-32 lg:pt-10">
            <h1 className="text-lightGrey text-center text-5xl lg:text-7xl pb-10">{t("about.who")}</h1>
            <p className="text-lightGrey lg:w-10/12 text-center lg:pl-[20%] text-xl lg:text-3xl pb-60 lg:font-medium">{t("about.description")}</p>
            </div>
            <Triangle/>
        </div>
    );
}
 
export default About;