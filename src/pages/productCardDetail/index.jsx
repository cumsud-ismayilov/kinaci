import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services";
import ThumbsGallery from "../../components/thumbsGallery/thumbsGallery";
import RoomIcon from "../../icons/roomIcon";
import BathRoom from "../../icons/BathRoom";
import Date from "../../icons/Date";
import Field from "../../icons/field";
import { Link } from "react-router";
import PrintSec from "../../components/prinntSec";

function ProductCardDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id); // yalnız kliklənən məhsulu alır
        setSinglePro(data);
      } catch (err) {
        setError(err.message || "Məhsulu gətirərkən xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Yüklənir...</p>;
  if (error) return <p className="p-6 text-red-500">Xəta: {error}</p>;

  return (
    <div className="bg-[#f7f7f7] pt-[2rem]">
      <div className="max-w-5xl mx-auto  mb-[1rem]">
        <h1 className="text-[#052841] text-[23px] font-semibold">
          {singlePro.title}
        </h1>
        <p className="text-[#052841] text-[14px]">{singlePro.location}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,3fr)_minmax(250px,1fr)] gap-6">
        <div>
          <ThumbsGallery singlePro={singlePro} />
          <div className="bg-[#ffffff]">
            <div className="flex justify-between p-[20px_8px]">
              <div className="flex items-center gap-[8px]">
                <RoomIcon />
                <div>
                  <h6 className="text-[#052841] text-[14px] font-semibold">
                    Yataq Otağı
                  </h6>
                  <span className="text-[#052841] text-[13px]">
                    {singlePro.rooms}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <BathRoom />
                <div>
                  <h6 className="text-[#052841] text-[14px] font-semibold">
                    Hamam
                  </h6>
                  <span className="text-[#052841] text-[13px]">
                    {singlePro.baths ?? " -"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Date />
                <div>
                  <h6 className="text-[#052841] text-[14px] font-semibold">
                    Çatdırılma tarixi
                  </h6>
                  <span className="text-[#052841] text-[13px]">
                    {singlePro.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Field />
                <div>
                  <h6 className="text-[#052841] text-[14px] font-semibold">
                    Ərazi (m2)
                  </h6>
                  <span className="text-[#052841] text-[13px]">
                    {singlePro.size}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 p-[32px_8px] gap-[20px]">
              <p className="text-[#052841] text-[12px]">
                Siz bu əmlak haqqında tam məlumat və qiymət siyahısı, alış
                prosedurunun mərhələləri, mümkün endirimlər və s. alacaqsınız
              </p>
              <button className="text-[#dc3545] border border-[#dc3545] cursor-pointer rounded-[6px] hover:bg-[#dc3545] hover:text-[#fff] transition-all duration-300">Favoritlərə əlavə et</button>
            </div>
            <div className="bg-[#eaf3f9] m-[8px] p-[12px]">
                <h4 className="text-[20px]">Kısa Bilgiler</h4>
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#ed6b2c]">{singlePro.location}</p>
                      <p className="text-[14px]">Mülk Tipi: {singlePro.propertyType}</p>
                      <p className="text-[14px]">Otaq: {singlePro.rooms}</p>
                      <p className="text-[14px]">Dənizlə məsafə: {singlePro.distanceOfSea}</p>
                    </div>
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[14px]">Mərtəbə: {singlePro.floor}</p>
                      <p className="text-[14px]">Əməliyyat növü: {singlePro.transactionType}</p>
                      <p className="tetx-[14px]">Hamam otağı: {singlePro.baths ?? " -"}</p>
                    </div>
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[14px]">Vətəndaşlıq çərçivəsində: {singlePro.citizenship}</p>
                      <p className="text-[14px]">Yatırım Amaçlı: {singlePro.investment}</p>
                      <p className="text-[14px]">Oturma izni çərçivəsində: {singlePro.residencePermit}</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#eaf3f9] p-[12px_12px] mt-[3rem] mb-[3rem] ml-[8px] mr-[8px]">
                <h4 className="text-[20px]">Altyapı</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#ed6b2c]">{singlePro.location}</p>
                      <p className="text-[14px]">Mülk Tipi: {singlePro.propertyType}</p>
                      <p className="text-[14px]">Otaq: {singlePro.rooms}</p>
                      <p className="text-[14px]">Dənizlə məsafə: {singlePro.distanceOfSea}</p>
                    </div>
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[14px]">Mərtəbə: {singlePro.floor}</p>
                      <p className="text-[14px]">Əməliyyat növü: {singlePro.transactionType}</p>
                      <p className="tetx-[14px]">Hamam otağı: {singlePro.baths ?? " -"}</p>
                    </div>
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[14px]">Vətəndaşlıq çərçivəsində: {singlePro.citizenship}</p>
                      <p className="text-[14px]">Yatırım Amaçlı: {singlePro.investment}</p>
                      <p className="text-[14px]">Oturma izni çərçivəsində: {singlePro.residencePermit}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 p-[16px] gap-[10px]">
                <button className="text-[14px] p-[6px] rounded-[6px] border border-[#0dcaf0] text-[#fff] bg-[#0dcaf0]"><Link to="https://wa.me/+905441380707">Çevrimiçi Görüntüleme</Link>  </button>
                <button className="text-[14px] p-[6px] rounded-[6px] border border-[#212529] text-[#fff] bg-[#212529]"><Link>Ücretsiz Tur</Link></button>
                <button className="text-[14px] p-[6px] rounded-[6px] bg-[#ED6B2C] border border-[#ED6B2C] text-[#fff]">Fiyat Listesi Al</button>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full  text-[14px] p-[6px] rounded-[6px] bg-[#ED6B2C] border border-[#ED6B2C] text-[#fff]">Əmlak ID : {singlePro.id}</button>
          <button className="w-full m-[16px_0px] text-[14px] p-[10px] rounded-[6px] border border-[#212529] text-[#fff] bg-[#212529]">Kvadrat metr : {singlePro.squareMeter}</button>
          <button className="w-full  text-[14px] p-[14px] rounded-[6px] border border-[#0dcaf0] text-[#fff] bg-[#0dcaf0]">{singlePro.price}</button>
        </div>
      </div>
      <PrintSec/>
    </div>
  );
}

export default ProductCardDetail;
