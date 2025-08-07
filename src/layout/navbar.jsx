import { Link } from "react-router"
import Envelope from "../icons/envelope"
import Phone from "../icons/phone"
import Include from "../icons/include"
import Heart from "../icons/heart"
import AzeFlag from "../icons/AzeFlag"
import DownArrow from "../icons/downArrow"

function Navbar() {
  return (
    <header >
        <div className="navTop bg-blue-50 flex justify-between px-44 py-2.5">
            <div className="headerLeft flex gap-[10px]">
                <button className="bg-[#2582C1] text-white  rounded-[5px] p-[6px_8px]"><Link className="flex justify-center items-center  gap-[5px] text-[14px] font-semibold leading-[14px]"><Envelope/> info@kinacigroup.com</Link></button>
                <button className="bg-[#ED6B2C] text-white rounded-[5px] p-[6px_8px]"><Link className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]"><Phone/> +90(544) 138 07 07</Link></button>
                <button className="bg-white text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px]"><Link className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]"><Include/> Daxil ol</Link></button>
            </div>
            <div className="headerRight flex gap-[10px]">
                <button className="p-[6px_8px] rounded-[5px] bg-[#E21743]"><Link className="text-white flex gap-[6px] justify-center items-center  text-[14px] font-semibold leading-[14px]">Favoritlərim <Heart/></Link></button>
                <button className="bg-[#FFFFFF] p-[6px_8px] rounded-[5px]"><Link className="flex justify-center gap-[4px] items-center text-[14px] font-semibold leading-[14px]"><DownArrow/> <AzeFlag/> Aze</Link></button>
                
            </div>
        </div>
      {/* <ul>
        <li><Link to="/">Anasayfa</Link> </li>
        <li><Link to="/service">Emlak</Link> </li>
        <li>Şirket hakkında</li>
        <li>Hizmetlerimiz</li>
        <li>iletişim</li>
        <li>Yorumlar</li>
        <li>Blog</li>
      </ul> */}
    </header>
  )
}

export default Navbar
