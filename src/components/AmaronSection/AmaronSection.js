import './AmaronSection.css';
import amaron_login_img from '../../assets/amaron_login.png';
import amaron_menu_img from '../../assets/amaron_menu.png';

export default function AmaronSection() {
    return (
        <div className="container mt-5 d-flex amaron-container">
            <div className="product-intro-container">
                <h2 className="product-title">Amaron <br />Malaysia</h2>
                <span className="product-one-liner">BATTERY WARRANTY CHECKER APP</span>
            </div>
            <div className="product-description-container">
                <p className='product-description'>Developed an app for Amaron Malaysia, allowing dealers to register newly purchased car batteries
                    and customers to register and check their warranty info using a barcode scanner.<br />
                    Currently being used by 5000+ users</p>
            </div>
            <div className='product-image-container d-flex justify-content-center'>
                <img className="product-image img-fluid" src={amaron_login_img} alt="Amaron Malaysia screenshot 1" />
                <img className="product-image img-fluid" src={amaron_menu_img} alt="Amaron Malaysia screenshot 2" />
            </div>
        </div>
    );
}