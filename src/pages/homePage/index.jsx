import { useEffect, useState } from "react";
import PrintSec from "../../components/prinntSec";
import { getAllCompanies } from "../../services";
import ProductCard from "../../components/productCard";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import InputSec from "../about/inputSec";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [up, setUp] = useState(false);
  const { favorites, setFavorites } = useContext(FavoriteContext);

  // Products yüklə
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [up]);

  return (
    <>
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Yeni Gayrimenkuller</h1>
            <p className="text-[13px]">En son eklenen gayrimenkuller</p>
          </div>
          <div className="text-end">
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px]">Satılık</button>
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px] ml-[5px]">Kiralık</button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">Daha Fazla Yükle</button>
        </div>
      </section>
      <section className="bg-[#FDF0EA] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Yeni Gayrimenkuller</h1>
            <p className="text-[13px]">En son eklenen gayrimenkuller</p>
          </div>
          <div className="text-end">
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px]">Satılık</button>
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px] ml-[5px]">Kiralık</button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">Daha Fazla Yükle</button>
        </div>
      </section>
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Yeni Gayrimenkuller</h1>
            <p className="text-[13px]">En son eklenen gayrimenkuller</p>
          </div>
          <div className="text-end">
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px]">Satılık</button>
            <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px] text-[15px] ml-[5px]">Kiralık</button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">Daha Fazla Yükle</button>
        </div>
      </section>
      <InputSec/>
      <PrintSec />
    </>
  );
}

export default HomePage;
