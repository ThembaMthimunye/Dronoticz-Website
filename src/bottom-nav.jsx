import facebook from "./Pictures/facebook.jpg"
import linkedin from "./Pictures/linkedin.jpg"
import pintrest from "../src/Pictures/pinterest.jpg"

function Last() {


    return (
        <div className="footer">
            <div className="">
                <img className="icons" src={facebook} alt="" />
                <img className="icons" src={linkedin} alt="" />
                <img className="icons" src={pintrest} alt="" />

                <p className="bottom-buttons"><a href="#about">ABOUT </a><a href="#articles"><span>ARTICLES</span></a></p>
            </div>
            <button className="footer-subscribe">SUBSCRIBE</button>
            

        </div>


    );
}

export default Last