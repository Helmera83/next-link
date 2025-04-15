// noinspection JSValidateTypes

import pic from "./img/profile_img.jpg"

export default function ProfileSection() {
    // noinspection JSValidateTypes
    return (
        <section className="container">
            <div className="image-container">
                <img src={pic} alt="Amanda Helmer portrait" />
            </div>
            <h1>Amanda Helmer</h1>
            <div className="info">
                <a href="mailto:ahelmer@mail.com">ahelmer@mail.com</a><br />
                <a href="tel:14304400056">(405) 440-0056</a>
            </div>
        </section>
    );
}

