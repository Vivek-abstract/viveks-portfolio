import profile_photo from '../../assets/vivek_profile_photo.jpg';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className='container d-flex justify-content-between align-items-center align-content-center hero-container'>
            <div className='profile'>
                <img className="rounded-circle profile-img"
                    src={profile_photo}
                    alt="Profile photo" />
            </div>
            <div className="description-container">
                <h1 className='hello'>Hello!</h1>
                <h3 className="description">I'm Vivek, a <br />Software developer based in Mumbai</h3>
            </div>
        </div>
    );
}