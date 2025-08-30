import Bath from "../../icons/bath"
import HomeArea from "../../icons/homeArea"
import Homeicons from "../../icons/homeicons"

function ProductCard({image,title,location,rooms,size,baths,price}) {
  return (
    <div className="bg-[#fff] rounded-[7px]">
        <div className="h-[190px] cursor-pointer">
            <img className="rounded-[7px] object-cover w-full h-full" src={image} alt="productImg" />
        </div>
        <div className="cardBody p-[12px]">
            <h6 className="text-[16px] font-semibold cursor-pointer min-h-[75px] leading-[20px]">{title}</h6>
            <p className="text-[14px] mb-[10px]">
                {location}
            </p>
            <div className="flex gap-[26px] mb-[10px]">
                <div className="flex items-center gap-[8px]">
                    <Homeicons/>
                    <p>{rooms}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                    <HomeArea/>
                    <p>{size}</p>
                </div>
            </div>
            <div className="flex justify-between mb-[10px]">
                <div className="flex items-center gap-[6px]">
                    <Bath/>
                    <p>{baths}</p>
                </div>
                <button className="bg-[#2582C1] text-[#fff] p-[6px_9px] rounded-[6px] text-[13px]">{price}</button>
            </div>
            <div className="flex justify-between">
                <button className="border border-[#000] rounded-[6px] p-[5px_40px] text-[13px] pointer">Hızlı iletişim</button>
                <button className="text-orange-500 border  border-orange-500 p-[5px_42px] rounded-[6px] pointer text-[13px]">Detaylar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
