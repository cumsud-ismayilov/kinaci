import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import BackImg1 from "../../assets/kinaci1-min-184c0796.webp"
import KinaciDesc from "./kinaciDesc";
import InfoSec from "./infoSec";
import OurGroup from "./ourGroup";
import BestForYou from "./bestForYou";
import InputSec from "./inputSec";
import Certificate from "./cerficateSec";

function About() {
  return (
    <>
      <BackGroundSec bgColor="#fdf2ee">
        <h1>salam</h1>
      </BackGroundSec>
      <div className="img-banner w-full h-[370px] bg-no-repeat bg-cover">
        <img className="w-full h-full " src={BackImg1} alt="Imgbanner" />
      </div>
      <KinaciDesc/>
      <InfoSec/>
      <OurGroup/>
      <BestForYou/>
      <Certificate/>
      <InputSec/>
      <PrintSec />
    </>
  );
}

export default About;
