import { useEffect, useState } from "react";
import PrintSec from "../../components/prinntSec";
import { getAllCompanies } from "../../services";
import ProductCard from "../../components/productCard";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoriteContext";
import InputSec from "../about/inputSec";
import HomeSwipper from "../../components/homeSwipper";
import { Link } from "react-router";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [up, setUp] = useState(false);
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [activeFilter, setActiveFilter] = useState("Satışda");

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

  useEffect(() => {
    if (activeFilter === "Hamısı") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.transactionType === activeFilter)
      );
    }
  }, [products, activeFilter]);

  return (
    <>
      <HomeSwipper />
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Yeni Gayrimenkuller</h1>
            <p className="text-[13px]">En son eklenen gayrimenkuller</p>
          </div>
          <div className="text-end">
            <button
              className={`border rounded-[5px] p-[6px_8px] text-[15px] mr-[5px] ${
                activeFilter === "Satışda"
                  ? "bg-[#ED6B2C] text-white border-[#ED6B2C]"
                  : "text-[#ED6B2C] border-[#ED6B2C]"
              }`}
              onClick={() => setActiveFilter("Satışda")}
            >
              Satılık
            </button>
            <button
              className={`border rounded-[5px] p-[6px_8px] text-[15px] ${
                activeFilter === "Kirayə"
                  ? "bg-[#ED6B2C] text-white border-[#ED6B2C]"
                  : "text-[#ED6B2C] border-[#ED6B2C]"
              }`}
              onClick={() => setActiveFilter("Kirayə")}
            >
              Kiralık
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
            <Link to="/possessions"> Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <section className="bg-[#FDF0EA] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Kampaniyalı Əmlaklar</h1>
            <p className="text-[13px]">Ən cəlbedici qiymətlər.</p>
          </div>
          <div className="text-end">
            <button className="bg-[#2582C1] text-[#fff] p-[10px_10px] rounded-[6px] text-[13px]">
              <Link to="/possessions">Bütün Kampaniyalara Baxın</Link>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
            <Link to="/possessions">Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <section className="bg-[#E9F2F9] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <div>
            <h1 className="text-[22px] font-semibold">Ən Yaxşı Təkliflər</h1>
            <p className="text-[13px]">Sizin üçün xüsusi təkliflərimiz.</p>
          </div>
          <div className="text-end">
            <button className="bg-[#2582C1] text-[#fff] p-[10px_10px] rounded-[6px] text-[13px]">
              <Link to="/possessions">Bütün Kampaniyalara Baxın</Link>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.slice(0, 6).map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex justify-center pt-[3rem] pb-[3rem]">
          <button className="text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_40px] text-[15px] cursor-pointer">
           <Link to="/possessions">Daha Fazla Yükle</Link>
          </button>
        </div>
      </section>
      <InputSec />
      <PrintSec />
    </>
  );
}

export default HomePage;
