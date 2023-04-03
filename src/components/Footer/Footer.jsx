import Linkedin from "../../icons/linkedin";
import Github from "../../icons/github";

const Footer = () => {
    return (
        <div className="flex bg-grey justify-center py-7 mt-20 items-center">
            {/* <p className="font-bold text-lg">romerosolana@gmail.com</p> */}
            <a target="_blank" href="https://www.linkedin.com/in/solana-romero/" className="px-5">
                <Linkedin/>
            </a>
            <a target="_blank" href="https://github.com/solanamr">
                <Github/>
            </a>
        </div>
    );
}
 
export default Footer