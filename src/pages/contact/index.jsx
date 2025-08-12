import BackGroundSec from "../../components/backgroundSec";
import BankAccountSec from "./bankAccountSec";
import GoogleMapSec from "./googleMapSec";
import OfficeSec from "./officeSec";
import Slider from "./slider";

function Contact() {
  return (
    <div>
      <BackGroundSec bgColor="#fdf2ee"></BackGroundSec>
      <GoogleMapSec/>
      <OfficeSec/>
      <div className="p-[3rem_1rem]">
        <Slider />
      </div>
      <div className="bg-[#E9F3F9] p-[3rem]">
        <BankAccountSec />
      </div>
    </div>
  );
}

export default Contact;
