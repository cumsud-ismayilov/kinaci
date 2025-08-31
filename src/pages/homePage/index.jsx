import { useEffect, useState } from "react";
import PrintSec from "../../components/prinntSec";
import { getAllCompanies } from "../../services";
import ProductCard from "../../components/productCard";
import PacmanLoader from "react-spinners/PacmanLoader";


function HomePage() {
  const [products, setproducts] = useState([]);
  const [up, setUp] = useState(false);
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setproducts(data);
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
            <button className="text-orange-500 border border-orange-500 px-[12px] py-[6px] rounded-[6px] pointer">
              Satılık
            </button>
            <button className="text-orange-500 border border-orange-500 px-[12px] py-[6px] rounded-[6px] pointer ml-[6px]">
              Kiralık
            </button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          {products.map((product) => (
            <ProductCard
              {...product}
              key={product.id}

            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex items-center justify-center py-[50px]">
          <button className="text-orange-500 border  border-orange-500 p-[5px_42px] rounded-[6px] pointer text-[13px] cursor-pointern">
            Daha Fazla Yükle
          </button>
        </div>
      </section>
      <PrintSec />
    </>
  );
}

export default HomePage;
