import IMG from '../assets/BIBHU.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">My name is Bibhu Ranjan Mohanty and I am a software developer and Trainer.
I love programming, usually, I spend my time by building something fun or watching tech talks.
Writing good code and developing high-quality applications is my profession and main pastime.
Currently, I do my web development using PHP,ASP.Net and React Js.
My preferred choice of backend development is node.js
My motto is "Master the skills you use today and develop the skills you need tomorrow."</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;