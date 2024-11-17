import React from "react";
import './Footer.css';

function App(){
    return (
        <>
             {/* <!-- footer section  --> */}
    <footer>
        {/* <!-- part-1 --> */}
        <div className="foot-panel1">
            For better experience,download the Plant shop app now
        </div>

        {/* <!-- part-2 --> */}

        <div className="foot-panel2">
            <ul>
                <p>Company</p>
                <p>About</p>
                <p>Careers</p>
                <p>Team</p>
            </ul>

            <ul>
                <p>Contact us</p>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
            </ul>

            <ul>
                <p>Legal</p>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                <p>Investor Relations</p>
            </ul>

            <ul>
                <p>We deliver to:</p>
                <p>Bangalore</p>
                <p>Gurgaon</p>
                <p>Hyderabad</p>
                <p>Delhi</p>
                <p>Mumbai</p>
                <p>Pune</p>
                <div className="nav-address border">
                    <select className="search-select"width="50px">
                        <option>596 cities</option>
                    </select>
               </div>

            </ul>


        </div>

    </footer>
        </>
    );
}

export default App;

