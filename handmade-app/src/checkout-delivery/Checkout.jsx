import logo from "../Image/mealpro-efgpRGeu9tg-unsplash.jpg";
import "./Checkout.css";

export default function Checkout() {
    return (
        <main className="createAccount formDelivery">
            <div className="deliveryTitle">
                <img src={logo} alt="" className="logo_delivery" />
                <h1 className="title_delivery">Delivery</h1>
            </div>

            <form className="updateInfo updateDelivery">
                <fieldset className="box mb3">
                    <input
                        className="form-control"
                        id="firstName"
                        type="text"
                    />
                    <label htmlFor="firstName" className="form-label">
                        Name
                    </label>
                </fieldset>
                <fieldset className="box mb3">
                    <input className="form-control" id="lastName" type="text" />
                    <label htmlFor="lastName" className="form-label">
                        Last name
                    </label>
                </fieldset>
                <fieldset className="box mb3">
                    <input className="form-control" id="phone" type="number" />
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                </fieldset>
                <fieldset className="box mb3">
                    <input className="form-control" id="address" type="text" />
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                </fieldset>
                <button className="btn btn-primary box">SUBMIT ORDER</button>
            </form>
        </main>
    );
}
