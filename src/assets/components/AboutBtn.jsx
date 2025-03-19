import { Link } from "react-router";
import './AboutBtn.css';

function AboutBtn() {

    return (
        <>
        <button className="about-btn">
            <Link to="/about">
                <div className="barcode-box">
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-1"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-2"></span>
                    <span className="barcode-stripe stripe-3"></span>
                    <span className="barcode-stripe stripe-1"></span>
                </div>
                <div className="about-btn_text loos-compressed fw-5">How to pronounce?</div>
            </Link>
        </button>
        </>
    )
}

export default AboutBtn;