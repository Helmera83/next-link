import GradientText from './GradientText'
import {MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone} from "react-icons/md";
import pic from "./img/profile_img.jpg";

export default function ProfileSection() {
    return (
        <section className="container">
            <div className="image-container">
                <img src={pic} alt="Amanda Helmer portrait" />
            </div>
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
                <h1>Amanda Helmer</h1>
            </GradientText>
            <div className="info">
                <a href="tel:14697700299">
                    <MdOutlinePhone style={{ marginRight: "8px" }} />
                    (469) 770-0299
                </a>
                <a href="mailto:helmeramanda90@gmail.com">
                    <MdOutlineEmail style={{ marginRight: "8px" }} />
                    helmeramanda90@gmail.com
                </a>
                <a href="https://maps.app.goo.gl/SSnZAHgqiZaFduKW9">
                    < MdOutlineLocationOn style={{ marginRight: "8px" }} />
                   Durant OK, 74701
                </a>
                <br/>
            </div>
        </section>
    );
}
