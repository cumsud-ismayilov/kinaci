import { useEffect, useState } from "react";
import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import { FaThLarge, FaList } from "react-icons/fa";
import CardGridView from "../../components/cardGridView";
import CardListView from "../../components/cardListView";
import { getAllCompanies } from "../../services";
import Pagination from "../../components/pagination/pagination";

function Possessions() {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);
  const [up, setUp] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    setCurrentPage(1);
  }, [products]);

const sortedProducts = [...products].sort((a, b) => {
  if (sortOption === "price-asc") {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
    return priceA - priceB;
  }
  if (sortOption === "price-desc") {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
    return priceB - priceA;
  }
  if (sortOption === "date-asc") {
    const [dayA, monthA, yearA] = a.date.split("/");
    const [dayB, monthB, yearB] = b.date.split("/");
    const dateA = new Date(+yearA, +monthA - 1, +dayA);
    const dateB = new Date(+yearB, +monthB - 1, +dayB);
    return dateA - dateB;
  }
  if (sortOption === "date-desc") {
    const [dayA, monthA, yearA] = a.date.split("/");
    const [dayB, monthB, yearB] = b.date.split("/");
    const dateA = new Date(+yearA, +monthA - 1, +dayA);
    const dateB = new Date(+yearB, +monthB - 1, +dayB);
    return dateB - dateA;
  }
  return 0;
});

const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedData = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <BackGroundSec bgColor="#052841"></BackGroundSec>
      <div className="bg-[#F7F7F7] pt-[3rem]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <h1 className="text-2xl font-bold">Türkiye'de Gayrimenkul</h1>
          <div className="flex gap-3 justify-end items-center">
            <button
              className={`p-2 rounded-md ${
                view === "grid" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setView("grid")}
            >
              <FaThLarge />
            </button>
            <button
              className={`p-2 rounded-md ${
                view === "list" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setView("list")}
            >
              <FaList />
            </button>
            <div className="flex items-baseline gap-[20px]">
              <p className="text-[13px]">Nəticələri filtirləyin</p>
              <select
                className="text-[13px] border-none rounded-[7px] bg-[#fff]"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Seçin</option>
                <option value="price-asc">Qiymət (Artan)</option>
                <option value="price-desc">Qiymət (Azalan)</option>
                <option value="date-desc">Yenidən Köhnəyə</option>
                <option value="date-asc">Köhnədən Yeniyə</option>
              </select>
            </div>
          </div>
        </div>
        {view === "grid" ? (
          <CardGridView data={paginatedData} />
        ) : (
          <CardListView data={paginatedData} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <PrintSec />
    </>
  );
}

export default Possessions;
