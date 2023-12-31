import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "../src/Assets/banner.jpg";
import CallButton from "./Components/CallButton/CallButton";
import Company from "./Components/Company/Company";
import fridge from "./Assets/fridge.jpg";
import fridge2 from "./Assets/fridge2.jpg";
import washer from "./Assets/washer.jpg";

import oven from "./Assets/oven.jpg";
import dishwasher from "./Assets/dishwasher.jpg";
import Service from "./Components/Service/Service";
import whirpool from "./Assets/Logos/whirpool.png";
import samsung from "./Assets/Logos/Samsung.png";
import lg from "./Assets/Logos/LG_Electronics.png";
import bosch from "./Assets/Logos/bosch-logo.png";
import hitachi from "./Assets/Logos/Hitachi.png";
import indesit from "./Assets/Logos/Indesit.png";
import siemens from "./Assets/Logos/Siemens.png";
import miele from "./Assets/Logos/Miele.png";
import { ElfsightWidget } from "react-elfsight-widget";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-K952WDS9" });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ElfsightWidget widgetId="505460a8-c99c-4903-9f6b-c3a45f6f1e45" />
      <div className="banner">
        <img className="banner__image" src={Banner} alt="banner" />
        <div className="banner__text">
          <div className="banner__hide">
            <p className="t1">Quick & Fast</p>
            <p className="t2">HOME APPLIANCE FIXER</p>
            <p className="t3">In Dubai</p>
            <p className="t1">WE REPAIR ALL COMMERCIAL & HOME APPLIANCES</p>
            <CallButton link="https://wa.me/971566060173" text="Whatsapp" />
          </div>
        </div>
      </div>
      <div className="mobBanner">
        <p className="t2m">HOME APPLIANCE FIXER</p>

        <CallButton link="https://wa.me/971566060173" text="Whatsapp" />

        <hr />
      </div>
      <div className="info1">
        <div className="info1__left">
          <p className="infotext1">DUBAI REPAIRING & MAINTENANCE COMPANY</p>
          <p className="infotext2">
            Appliances Repairing & Fixing Service In Dubai
          </p>
          <p className="infotext3">
            We repair ALL brands and models of domestic appliances including;
            washing machines, fridge freezers,dishwashers, tumble dryers, washer
            dryers, cookers.We have Expert repair main for your service. we have
            20 years experiance. We accept requests and phone calls 24/7 so you
            could resolve any problem whenever you need. Our emergency team will
            be at your place to fix the breakdown at short We Provide Reliable
            Repair Services.If we talk About{" "}
            <b style={{ color: "#1e2d6a", fontWeight: 700 }}>
              Appliance Fixer In Dubai
            </b>{" "}
            Call Home Appliance Repair Dubai. <br />
            <p className="infotext4">
              OUR TRUSTED REPAIR EXPERTS CAN SERVICE ALL MAKES AND MODELS
            </p>
          </p>
        </div>
        <div className="info1__right">
          <img className="info1__img" src={fridge} />
        </div>
      </div>
      <hr />
      <div className="contact">
        <ElfsightWidget widgetID="e316c02f-0912-4e99-ba01-62c6a01e6722" />
      </div>
      <hr />
      <h1 className="t4">Our Services</h1>
      <div className="services">
        <Service
          image={washer}
          title="Washer Dryer Repair"
          description="Our washing machine repair services in Dubai cover motor problems, drainage issues, and malfunctioning parts. Contact us now for affordable and reliable services."
        />
        <Service
          image={fridge2}
          title="Refrigerator Repair"
          description="Our refrigerator repair services in Dubai cover fixing leaks, replacing compressors, and repairing faulty thermostats. Contact us now for fast and affordable services that ensure optimal cooling efficiency."
        />
        <Service
          image={dishwasher}
          title="Dishwasher Repair"
          description="Our dishwasher repair services in Dubai cover motor problems, drainage issues, and malfunctioning parts. Contact us now for quick and reliable services that ensure optimal dishwasher performance."
        />

        <Service
          image={oven}
          title="Cooking Range Repair"
          description="Our cooking range repair services in Dubai cover fixing gas leaks, repairing faulty burners, and ensuring proper gas flow. Contact us now for expert services that ensure optimal cooking range performance."
        />
      </div>
      <hr />
      <h1 className="t4">Our Partners</h1>

      <div className="partners">
        <Company image={samsung} />
        <Company image={siemens} />
        <Company image={miele} />
        <Company image={bosch} />
        <Company image={whirpool} />
        <Company image={lg} />
        <Company image={hitachi} />
        <Company image={indesit} />
      </div>
      <hr />
      <h1 className="t4">Locations we serve</h1>
      <div className="location">
        <div className="location__1">
          <ul>
            <li className="location__list">Al-Qusais</li>
            <li className="location__list">Muhaisnah</li>
            <li className="location__list">Al- Mizhar</li>
            <li className="location__list">Mirdif</li>
            <li className="location__list">Jumeirah Beach</li>
            <li className="location__list">Jumeirah Island</li>
            <li className="location__list">Jumeirah Lakes Tower</li>
            <li className="location__list">Dubai Production City</li>
            <li className="location__list">Jumeirah Golf Estates Club House</li>
            <li className="location__list">Dubai Sports</li>
          </ul>
          <div className="location__1">
            <ul>
              <li className="location__list">Dubai Marina</li>
              <li className="location__list">Sheikh Zayed road</li>
              <li className="location__list">Media City</li>
              <li className="location__list">Barsha Heights</li>
              <li className="location__list">Dubai Internet City</li>
              <li className="location__list">The Greens</li>
              <li className="location__list">Emirates Living</li>
              <li className="location__list">The Palm Jumeirah</li>
              <li className="location__list">The Gardens</li>
              <li className="location__list">Jumeirah Park</li>
            </ul>
          </div>
          <div className="location__1">
            <ul>
              <li className="location__list">Arabian Ranches</li>
              <li className="location__list">Dubai Investment Park</li>
              <li className="location__list">Falcon City of Wonders</li>
              <li className="location__list">The Villa </li>
              <li className="location__list">Dubai Land</li>
              <li className="location__list">Dubai Silicon Oasis</li>
              <li className="location__list">Discovery Gardens</li>
              <li className="location__list">International City</li>
              <li className="location__list">Um Suqeim</li>
              <li className="location__list">Al Quoz</li>
            </ul>
          </div>
          <div className="location__1">
            <ul>
              <li className="location__list">Al Safa</li>
              <li className="location__list">Business Bay</li>
              <li className="location__list">Downtown Dubai</li>
              <li className="location__list">Jumeirah</li>
              <li className="location__list">DIFC</li>
              <li className="location__list">Al Satwa</li>
              <li className="location__list">Bur Dubai</li>
              <li className="location__list">Oud Mehta</li>
              <li className="location__list">Al Karama</li>
              <li className="location__list">Dubai Water Front</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
