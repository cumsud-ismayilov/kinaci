import { Link } from "react-router"
import BackGroundSec from "../../components/backgroundSec"
import PrintSec from "../../components/prinntSec"
import ServiceCard from "./serviceCard"

function Service() {
  return (
    <div>
      <BackGroundSec bgColor="#fdf2ee">
        <h1>salam</h1>
      </BackGroundSec>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 m-[2rem_0rem]">
        <ul>
          <li className="text-[26px] font-semibold">Xidmətlərimiz</li>
          <li className="text-[13px]"><Link to="/">Anasayfa /</Link>Xidmətlərimiz</li>
        </ul>
      </div>
      <ServiceCard/>
      <PrintSec/>
    </div>
  )
}

export default Service
