import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
 
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
             <Product id="123"
                      title="The lean startup:start up ideas , connect with your relations and entreprenaur mind set"
                      price={450}
                      rating={4}
                      image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}
             />
             <Product id="456"
                      title="A productive mixer for baking , foodies will love to make and cook.Eat and fun"
                      price={5000}
                      rating={5}
                      image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}
             />
        </div>

        <div className="home_row">
              <Product id="789"
                        title="Samsung LED Gaming monitor"
                        price={15000}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
              />
              <Product id="101"
                        title="Amazon Echo | With Alexa"
                        price={15000}
                        rating={5}
                        image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
                        />
              <Product id="121"
                        title="Apple product and live like king"
                        price={65000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}
              />
        </div>

        <div className="home_row">
              <Product id="131"
                        title="Samsung curved LED Monitor"
                        price={80000}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}
                        />
        </div>
      </div>
    </div>
  );
}

export default Home;
