import profilepic1 from './Pictures/drone1.jpg'
import profilepic2 from './Pictures/drone2.jpg'
import profilepic3 from './Pictures/drone3.jpg'
import profilepic4 from './Pictures/drone4.jpg'

function Card() {

    return (

        <div>
            <p className="heading-2">LATEST ARTICLES</p>
            <div className="line"></div>
            <br /><br /><br />

            <div className="Latest-articles">
                <br />
                <div class="single-art">
                    <img className='article-pic' src={profilepic1} alt="" />
                    <hr />
                    <p class="drone-disc">How to automate
                        surveillance drone</p>
                </div>

                <div class="single-art">
                    <img className='article-pic' src={profilepic2} alt="" />
                    <hr />
                    <p class="drone-disc">Robotics and Artificial
                        Intelligence</p>
                </div>

                <div class="single-art">
                    <img className="article-pic" src={profilepic3} alt="" />
                    <hr />
                    <p class="drone-disc">Improving Lives through
                        Robotics Prosthetics</p>
                </div>

                <div class="single-art">
                    <img className='article-pic' src={profilepic4} alt="" />
                    <hr />
                    <p class="drone-disc">Power of Robotics in
                        Agriculture</p>

                </div>
            </div>
        </div>
    );
}
export default Card